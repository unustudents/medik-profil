/**
 * ============================================================
 * @/lib/api — Barrel Export & Pre-configured Instance
 * ============================================================
 *
 * Import cukup dari sini saja:
 *
 *   import { strapi } from "@/lib/api";
 *   import type { StrapiCollectionResponse } from "@/lib/api";
 *
 * Instance `strapi` sudah dikonfigurasi dengan STRAPI_URL dan
 * STRAPI_TOKEN dari environment variables.
 *
 * Ref env vars:
 * - astro:env/server → https://docs.astro.build/en/reference/modules/astro-env/
 * - @astrojs/node env → https://docs.astro.build/en/guides/integrations-guide/node/#environment-variables
 */

import { STRAPI_URL, STRAPI_TOKEN } from "astro:env/server";
import { StrapiClient } from "./client";

// astro:env/server untuk secret vars di-resolve saat runtime (bukan build time).
// Fallback ke process.env jika astro:env belum tersedia (misalnya saat build SSG).
const resolvedUrl = STRAPI_URL || process.env.STRAPI_URL || "http://localhost:1337";
const resolvedToken = STRAPI_TOKEN || process.env.STRAPI_TOKEN || undefined;

// ── Singleton instance ──────────────────────────────────────
export const strapi = new StrapiClient({
    baseUrl: resolvedUrl,
    token: resolvedToken,
});

// ── Re-exports ──────────────────────────────────────────────
export { StrapiClient, StrapiError } from "./client";
export { buildQuery } from "./query";
export type {
    StrapiMedia,
    StrapiMediaFormat,
    StrapiPagination,
    StrapiMeta,
    StrapiSingleResponse,
    StrapiCollectionResponse,
    StrapiResponse,
    StrapiQueryParams,
    StrapiFilterOperator,
    StrapiSortOrder,
    StrapiErrorBody,
} from "./types";
