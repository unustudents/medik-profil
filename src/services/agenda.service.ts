import { strapi } from "@/lib/api";

// Output interface matching service return
export interface AgendaEvent {
  documentId: string;
  title: string;
  slug: string;
  date: string;
  content: string | null;
  place: string | null;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface AgendaAttributes {
  documentId: string;
  title: string;
  slug: string;
  date: string;
  content: string | null;
  place: string | null;
  image: {
    documentId: string;
    name: string;
    url: string;
    width: number;
    height: number;
  } | null;
  [key: string]: unknown;
}

/**
 * Ambil agenda dengan paginasi server-side
 */
export async function getAgendaEvents(opts?: {
  page?: number;
  pageSize?: number;
  sort?: string;
}): Promise<{
  data: AgendaEvent[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}> {
  const res = await strapi.find<AgendaAttributes>("agendas", {
    fields: ["documentId", "title", "slug", "date", "content", "place"],
    populate: {
      image: {
        fields: ["name", "url", "width", "height", "documentId"],
      },
    },
    sort: [opts?.sort ?? "date:desc"],
    pagination: {
      page: opts?.page ?? 1,
      pageSize: opts?.pageSize ?? 8,
    },
  });

  return {
    data: res.data.map((event) => ({
      documentId: event.documentId,
      title: event.title,
      slug: event.slug,
      date: event.date,
      content: event.content,
      place: event.place,
      image: strapi.mediaUrl(event.image?.url),
      imageWidth: event.image?.width,
      imageHeight: event.image?.height,
    })),
    pagination: res.meta.pagination!,
  };
}

/**
 * Ambil satu agenda berdasarkan slug.
 */
export async function getAgendaBySlug(
  slug: string
): Promise<AgendaEvent | null> {
  const res = await strapi.find<AgendaAttributes>("agendas", {
    filters: { slug: { $eq: slug } },
    fields: ["documentId", "title", "slug", "date", "content", "place"],
    populate: {
      image: {
        fields: ["name", "url", "width", "height", "documentId"],
      },
    },
    pagination: { limit: 1 },
  });

  const event = res.data[0] ?? null;
  if (!event) return null;

  return {
    documentId: event.documentId,
    title: event.title,
    slug: event.slug,
    date: event.date,
    content: event.content,
    place: event.place,
    image: strapi.mediaUrl(event.image?.url),
    imageWidth: event.image?.width,
    imageHeight: event.image?.height,
  };
}

// export async function getAgenda(opts?: { page?: number; pageSize?: number, category?: string; sort?: string }) {
//     const filters: Record<string, unknown> = {};

//     // if (opts?.category) {
//     //     filters.kategori_artikel = { name: { $eqi: opts.category } };
//     // }

//     const res = await strapi.find<AgendaAttributes>("agendas", {
//         fields: ["documentId", "title", "slug", "date", "content", "place"],
//         populate: {
//             image: {
//                 fields: ["name", "url", "width", "height", "documentId"],
//             },
//         },
//         sort: [opts?.sort ?? "date:desc"],
//         filters,
//         pagination: {
//             page: opts?.page ?? 1,
//             pageSize: opts?.pageSize ?? 8,
//         },
//     });

//     return {
//         data: res.data.map((event) => ({
//             documentId: event.documentId,
//             title: event.title,
//             slug: event.slug,
//             date: event.date,
//             content: event.content,
//             place: event.place,
//             image: strapi.mediaUrl(event.image?.url),
//             imageWidth: event.image?.width,
//             imageHeight: event.image?.height,
//         })),
//         meta: res.meta,
//         pagination: res.meta.pagination!,
//     };
// }
