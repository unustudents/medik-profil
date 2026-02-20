import { strapi } from "@/lib/api";
import type { StrapiMedia } from "@/lib/api/types";

export type StrapiBlockField = any[];
// ── Types ────────────────────────────────────────────────────

export interface KategoriArtikel {
  id: number;
  documentId: string;
  name: string;
}

export interface ArticleRaw {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  kategori_artikel: KategoriArtikel | null;
  content: StrapiBlockField;
  published_date: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: StrapiMedia | null;
}

export interface ArticleItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  category: string;
  content: StrapiBlockField;
  date: string;
  thumbnailUrl: string;
  thumbnail: StrapiMedia | null;
}

// ── Populate config ──────────────────────────────────────────

const ARTICLE_POPULATE: string[] = ["thumbnail", "kategori_artikel"];
const URL_SLUG = "articles";

// ── Helpers ──────────────────────────────────────────────────

function normalizeArticle(raw: ArticleRaw): ArticleItem {
  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    slug: raw.slug,
    category: raw.kategori_artikel?.name ?? "Umum",
    content: raw.content ?? [],
    date: raw.published_date ?? raw.publishedAt,
    thumbnailUrl: strapi.mediaUrl(raw.thumbnail?.url ?? null),
    thumbnail: raw.thumbnail ?? null,
  };
}

// ── Service Functions ────────────────────────────────────────

export async function getArticles(opts?: {
  page?: number;
  pageSize?: number;
  category?: string;
  sort?: string;
}) {
  const filters: Record<string, unknown> = {};

  if (opts?.category) {
    filters.kategori_artikel = { name: { $eqi: opts.category } };
  }

  const res = await strapi.find<ArticleRaw>(URL_SLUG, {
    fields: ["documentId", "title", "slug", "published_date", "publishedAt"],
    populate: {
      thumbnail: {
        fields: [
          "documentId",
          "name",
          "alternativeText",
          "width",
          "height",
          "url",
        ],
      },
      kategori_artikel: {
        fields: ["documentId", "name"],
      },
    },
    sort: [opts?.sort ?? "published_date:desc"],
    filters,
    pagination: {
      page: opts?.page ?? 1,
      pageSize: opts?.pageSize ?? 8,
    },
  });

  return {
    data: res.data.map(normalizeArticle),
    pagination: res.meta.pagination!,
  };
}

// export async function getArticleByDocumentId(
//   documentId: string,
// ): Promise<ArticleItem | null> {
//   try {
//     const res = await strapi.findOne<ArticleRaw>(URL_SLUG, documentId, {
//       populate: ARTICLE_POPULATE,
//     });

//     if (!res.data) return null;

//     return normalizeArticle(res.data);
//   } catch {
//     return null;
//   }
// }

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleItem | null> {
  try {
    const res = await strapi.find<ArticleRaw>(URL_SLUG, {
      filters: { slug: { $eq: slug } },
      populate: ARTICLE_POPULATE,
      pagination: { limit: 1 },
    });

    const article = res.data[0];
    if (!article) return null;

    return normalizeArticle(article);
  } catch {
    return null;
  }
}

// export async function getAllArticleDocumentIds(): Promise<string[]> {
//   const res = await strapi.find<ArticleRaw>(URL_SLUG, {
//     fields: ["documentId"],
//     pagination: { pageSize: 100 },
//     sort: ["published_date:desc"],
//   });

//   return res.data.map((a) => a.documentId);
// }

export async function getRelatedArticles(
  category: string,
  excludeDocumentId: string,
  limit = 3,
): Promise<ArticleItem[]> {
  const res = await strapi.find<ArticleRaw>(URL_SLUG, {
    populate: ARTICLE_POPULATE,
    filters: {
      kategori_artikel: { name: { $eqi: category } },
      documentId: { $ne: excludeDocumentId },
    },
    sort: ["published_date:desc"],
    pagination: { pageSize: limit },
  });

  return res.data.map(normalizeArticle);
}

export async function getAllCategories(): Promise<KategoriArtikel[]> {
  const res = await strapi.find<KategoriArtikel>("kategori-artikels", {
    fields: ["documentId", "name"],
    pagination: { pageSize: 8 },
    sort: ["name:asc"],
  });

  return res.data;
}