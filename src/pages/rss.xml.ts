/**
 * RSS Feed — /rss.xml
 *
 * Feed RSS untuk artikel kesehatan RSU Afdila.
 * Membantu SEO dan memungkinkan pengguna berlangganan
 * konten via RSS reader.
 */

import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";
import { articles } from "@/data/articles";
import type { APIContext } from "astro";

export const prerender = true;

export async function GET(context: APIContext) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site?.toString() ?? "http://localhost:4321",
    items: articles.map((article) => ({
      title: article.title,
      pubDate: new Date(article.date),
      description: `${article.title} - Kategori: ${article.category}`,
      link: `/article/${article.slug}/`,
      categories: article.tags ?? [],
    })),
    customData: `<language>id-ID</language>`,
  });
}
