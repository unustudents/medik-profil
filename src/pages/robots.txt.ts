/**
 * robots.txt — Dynamic endpoint
 *
 * Menggunakan SITE_URL dari konfigurasi Astro untuk
 * menghasilkan URL sitemap yang benar.
 */

import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = (context) => {
    const siteUrl = context.site?.toString().replace(/\/$/, "") ?? "";

    const robotsTxt = [
        "User-agent: *",
        "Allow: /",
        "",
        "# Halaman yang tidak perlu di-index",
        "Disallow: /api/",
        "",
        `Sitemap: ${siteUrl}/sitemap-index.xml`,
    ].join("\n");

    return new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
