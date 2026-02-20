import { strapi } from "@/lib/api";

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
 * Ambil semua agenda
 */
export async function getAgendaEvents() {
    const res = await strapi.find<AgendaAttributes>("agendas", {
        fields: ["documentId", "title", "slug", "date", "content", "place"],
        populate: {
            image: {
                fields: ["name", "url", "width", "height", "documentId"],
            },
        },
        sort: ["date:desc"],
        pagination: {
            pageSize: 100, // Fetch many for SSG
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
        meta: res.meta,
    };
}

/**
 * Ambil satu agenda berdasarkan slug.
 */
export async function getAgendaBySlug(slug: string) {
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
