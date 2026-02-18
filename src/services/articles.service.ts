import { strapi } from "@/lib/api";
import type { StrapiMedia } from "@/lib/api/types";

export type StrapiBlockField = any[];
// ── Types ────────────────────────────────────────────────────

export interface ArticleRaw {
  id: number;
  documentId: string;
  title: string;
  category: string;
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
  category: string;
  content: StrapiBlockField;
  date: string;
  thumbnailUrl: string;
  thumbnail: StrapiMedia | null;
}

// ── Populate config ──────────────────────────────────────────

const ARTICLE_POPULATE: string[] = ["thumbnail"];

// ── Helpers ──────────────────────────────────────────────────

function normalizeArticle(raw: ArticleRaw): ArticleItem {
  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    category: raw.category,
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
    filters.category = { $eqi: opts.category };
  }

  const res = await strapi.find<ArticleRaw>("articles", {
    populate: ARTICLE_POPULATE,
    sort: [opts?.sort ?? "published_date:desc"],
    filters,
    pagination: {
      page: opts?.page ?? 1,
      pageSize: opts?.pageSize ?? 10,
    },
  });

  return {
    data: res.data.map(normalizeArticle),
    pagination: res.meta.pagination!,
  };
}

export async function getArticleByDocumentId(
  documentId: string,
): Promise<ArticleItem | null> {
  try {
    const res = await strapi.findOne<ArticleRaw>("articles", documentId, {
      populate: ARTICLE_POPULATE,
    });

    if (!res.data) return null;

    return normalizeArticle(res.data);
  } catch {
    return null;
  }
}

export async function getAllArticleDocumentIds(): Promise<string[]> {
  const res = await strapi.find<ArticleRaw>("articles", {
    fields: ["documentId"],
    pagination: { pageSize: 100 },
    sort: ["published_date:desc"],
  });

  return res.data.map((a) => a.documentId);
}

export async function getRelatedArticles(
  category: string,
  excludeDocumentId: string,
  limit = 3,
): Promise<ArticleItem[]> {
  const res = await strapi.find<ArticleRaw>("articles", {
    populate: ARTICLE_POPULATE,
    filters: {
      category: { $eqi: category },
      documentId: { $ne: excludeDocumentId },
    },
    sort: ["published_date:desc"],
    pagination: { pageSize: limit },
  });

  return res.data.map(normalizeArticle);
}
