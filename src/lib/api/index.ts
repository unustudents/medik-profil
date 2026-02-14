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
 * STRAPI_TOKEN dari environment variables Astro.
 */

import { STRAPI_URL, STRAPI_TOKEN } from "astro:env/server";
import { StrapiClient } from "./client";

// ── Singleton instance ──────────────────────────────────────
export const strapi = new StrapiClient({
    baseUrl: STRAPI_URL,
    token: STRAPI_TOKEN || undefined,
    debug: import.meta.env.DEV,
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
