/**
 * ============================================================
 * Strapi REST API — Type Definitions
 * ============================================================
 *
 * Generic types yang merepresentasikan response shape dari
 * Strapi v4/v5 REST API. Semua service layer menggunakan
 * types ini agar konsisten dan type-safe.
 */

// ── Strapi Media ────────────────────────────────────────────
export interface StrapiMedia {
    id: number;
    url: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Record<string, StrapiMediaFormat> | null;
    mime: string;
    name: string;
}

export interface StrapiMediaFormat {
    url: string;
    width: number;
    height: number;
    size: number;
}

// ── Strapi Pagination ───────────────────────────────────────
export interface StrapiPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

// ── Strapi Meta ─────────────────────────────────────────────
export interface StrapiMeta {
    pagination?: StrapiPagination;
    [key: string]: unknown;
}

// ── Single-type Response ────────────────────────────────────
export interface StrapiSingleResponse<T> {
    data: T & { id: number };
    meta: StrapiMeta;
}

// ── Collection-type Response ────────────────────────────────
export interface StrapiCollectionResponse<T> {
    data: (T & { id: number })[];
    meta: StrapiMeta;
}

// ── Generic Response (single or collection) ─────────────────
export type StrapiResponse<T> = StrapiSingleResponse<T> | StrapiCollectionResponse<T>;

// ── Query Params ────────────────────────────────────────────

/** Filter operators yang didukung oleh Strapi */
export type StrapiFilterOperator =
    | "$eq"
    | "$eqi"
    | "$ne"
    | "$nei"
    | "$lt"
    | "$lte"
    | "$gt"
    | "$gte"
    | "$in"
    | "$notIn"
    | "$contains"
    | "$notContains"
    | "$containsi"
    | "$notContainsi"
    | "$startsWith"
    | "$startsWithi"
    | "$endsWith"
    | "$endsWithi"
    | "$null"
    | "$notNull"
    | "$between";

export type StrapiSortOrder = "asc" | "desc";

export interface StrapiQueryParams {
    /** Populate relations — bisa "*", string[], atau nested object */
    populate?: string | string[] | Record<string, unknown>;
    /** Field selection */
    fields?: string[];
    /** Filters — nested object following Strapi filter syntax */
    filters?: Record<string, unknown>;
    /** Sorting — e.g. ["createdAt:desc", "title:asc"] */
    sort?: string | string[];
    /** Pagination */
    pagination?: {
        page?: number;
        pageSize?: number;
        start?: number;
        limit?: number;
        withCount?: boolean;
    };
    /** Publication state: "live" | "preview" */
    publicationState?: "live" | "preview";
    /** Locale */
    locale?: string | string[];
    /** Custom extra params (pass-through) */
    [key: string]: unknown;
}

// ── Error ───────────────────────────────────────────────────
export interface StrapiErrorBody {
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        details?: unknown;
    };
}
