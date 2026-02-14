/**
 * ============================================================
 * Articles Service
 * ============================================================
 *
 * Contoh penggunaan:
 *   import { getArticles, getArticleBySlug } from "@/services/articles.service";
 */

import { strapi } from "@/lib/api";

export interface ArticleAttributes {
    title: string;
    slug: string;
    category: string;
    content: string;
    date: string;
    image: any;
    author: any;
    views: number;
    tags: string[];
    [key: string]: unknown;
}

/**
 * Ambil daftar artikel dengan pagination & opsional filter kategori.
 */
export async function getArticles(opts?: {
    page?: number;
    pageSize?: number;
    category?: string;
}) {
    const filters: Record<string, unknown> = {};
    if (opts?.category) {
        filters.category = { $eqi: opts.category };
    }

    const res = await strapi.find<ArticleAttributes>("articles", {
        populate: ["image", "author", "author.image"],
        sort: ["date:desc"],
        filters,
        pagination: {
            page: opts?.page ?? 1,
            pageSize: opts?.pageSize ?? 10,
        },
    });

    return {
        data: res.data.map((article) => ({
            ...article,
            image: strapi.mediaUrl(article.image?.url),
            author: article.author
                ? {
                      ...article.author,
                      image: strapi.mediaUrl(article.author.image?.url),
                  }
                : null,
        })),
        pagination: res.meta.pagination!,
    };
}

/**
 * Ambil satu artikel berdasarkan slug.
 */
export async function getArticleBySlug(slug: string) {
    const res = await strapi.find<ArticleAttributes>("articles", {
        filters: { slug: { $eq: slug } },
        populate: ["image", "author", "author.image"],
        pagination: { limit: 1 },
    });

    const article = res.data[0] ?? null;
    if (!article) return null;

    return {
        ...article,
        image: strapi.mediaUrl(article.image?.url),
        author: article.author
            ? {
                  ...article.author,
                  image: strapi.mediaUrl(article.author.image?.url),
              }
            : null,
    };
}
