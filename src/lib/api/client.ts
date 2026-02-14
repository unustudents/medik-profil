/**
 * ============================================================
 * StrapiClient — Core HTTP Client
 * ============================================================
 *
 * Satu class yang menangani semua komunikasi HTTP ke Strapi.
 *
 * Features:
 *  ✅ Typed generic methods — find<T>(), findOne<T>(), create<T>(), update<T>(), delete()
 *  ✅ Automatic query-string serialization (bracket-notation qs)
 *  ✅ Bearer token auth
 *  ✅ Custom StrapiError class untuk error handling yang jelas
 *  ✅ Media URL resolver — full URL dari relative Strapi path
 *  ✅ Request / Response logging (dev mode)
 *
 * Penggunaan:
 *   import { strapi } from "@/lib/api";
 *
 *   const articles = await strapi.find<Article>("articles", {
 *       populate: ["author", "cover"],
 *       sort: ["publishedAt:desc"],
 *       pagination: { page: 1, pageSize: 10 },
 *   });
 */

import type {
    StrapiCollectionResponse,
    StrapiErrorBody,
    StrapiQueryParams,
    StrapiSingleResponse,
} from "./types";
import { buildQuery } from "./query";

// ── Custom Error ────────────────────────────────────────────

export class StrapiError extends Error {
    public readonly status: number;
    public readonly strapiName: string;
    public readonly details: unknown;

    constructor(status: number, name: string, message: string, details?: unknown) {
        super(`[Strapi ${status}] ${name}: ${message}`);
        this.name = "StrapiError";
        this.status = status;
        this.strapiName = name;
        this.details = details;
    }
}

// ── Client Options ──────────────────────────────────────────

export interface StrapiClientOptions {
    /** Base URL Strapi (tanpa trailing slash). E.g. "http://localhost:1337" */
    baseUrl: string;
    /** API token (opsional — jika Strapi memerlukan autentikasi) */
    token?: string;
    /** Enable console logging per request (default: false) */
    debug?: boolean;
}

// ── StrapiClient ────────────────────────────────────────────

export class StrapiClient {
    private readonly baseUrl: string;
    private readonly headers: HeadersInit;
    private readonly debug: boolean;

    constructor(options: StrapiClientOptions) {
        // Hapus trailing slash
        this.baseUrl = options.baseUrl.replace(/\/+$/, "");
        this.debug = options.debug ?? false;

        const hasToken = !!options.token?.trim();

        this.headers = {
            "Content-Type": "application/json",
            ...(hasToken ? { Authorization: `Bearer ${options.token!.trim()}` } : {}),
        };

        console.log(`[Strapi] Base URL: ${this.baseUrl}`);
        console.log(`[Strapi] Auth: ${hasToken ? "Bearer token ✅" : "No token ❌"}`);
    }

    // ── Internal helpers ────────────────────────────────────

    /**
     * Core fetch wrapper. Semua method public memanggil ini.
     */
    private async request<T>(
        method: string,
        path: string,
        params?: StrapiQueryParams,
        body?: unknown,
    ): Promise<T> {
        const qs = buildQuery(params);
        const url = `${this.baseUrl}/api/${path}${qs ? `?${qs}` : ""}`;

        if (this.debug) {
            console.log(`[Strapi] ${method} ${url}`);
        }

        const init: RequestInit = {
            method,
            headers: this.headers,
            ...(body ? { body: JSON.stringify(body) } : {}),
        };

        const res = await fetch(url, init);

        if (!res.ok) {
            let errorBody: StrapiErrorBody | null = null;
            try {
                errorBody = (await res.json()) as StrapiErrorBody;
            } catch {
                // Response bukan JSON — gunakan status text
            }

            console.error(`[Strapi] ❌ ${method} ${url} → ${res.status}`, errorBody?.error ?? res.statusText);

            throw new StrapiError(
                res.status,
                errorBody?.error?.name ?? "UnknownError",
                errorBody?.error?.message ?? res.statusText,
                errorBody?.error?.details,
            );
        }

        const json = (await res.json()) as T;

        if (this.debug) {
            console.log(`[Strapi] ✅ ${method} ${path}`, JSON.stringify(json).slice(0, 200));
        }

        return json;
    }

    // ── Public API ──────────────────────────────────────────

    /**
     * GET collection — /api/{pluralApiId}
     *
     * @example
     *   const res = await strapi.find<Article>("articles", { populate: "*" });
     *   // res.data → Article[]
     *   // res.meta.pagination → { page, pageSize, pageCount, total }
     */
    async find<T>(
        contentType: string,
        params?: StrapiQueryParams,
    ): Promise<StrapiCollectionResponse<T>> {
        return this.request<StrapiCollectionResponse<T>>("GET", contentType, params);
    }

    /**
     * GET single entry — /api/{pluralApiId}/{documentId}
     *
     * @example
     *   const res = await strapi.findOne<Article>("articles", "abc123", { populate: "*" });
     *   // res.data → Article & { id: number }
     */
    async findOne<T>(
        contentType: string,
        documentId: string | number,
        params?: StrapiQueryParams,
    ): Promise<StrapiSingleResponse<T>> {
        return this.request<StrapiSingleResponse<T>>("GET", `${contentType}/${documentId}`, params);
    }

    /**
     * GET single-type — /api/{singularApiId}
     * Untuk content-type yang hanya punya satu entry (homepage, about, dsb.)
     *
     * @example
     *   const res = await strapi.findSingle<HomePage>("home-page", { populate: "*" });
     */
    async findSingle<T>(
        contentType: string,
        params?: StrapiQueryParams,
    ): Promise<StrapiSingleResponse<T>> {
        return this.request<StrapiSingleResponse<T>>("GET", contentType, params);
    }

    /**
     * POST — /api/{pluralApiId}
     *
     * @example
     *   const res = await strapi.create<Article>("articles", {
     *       data: { title: "Hello", content: "World" }
     *   });
     */
    async create<T>(
        contentType: string,
        body: { data: Record<string, unknown> },
        params?: StrapiQueryParams,
    ): Promise<StrapiSingleResponse<T>> {
        return this.request<StrapiSingleResponse<T>>("POST", contentType, params, body);
    }

    /**
     * PUT — /api/{pluralApiId}/{documentId}
     *
     * @example
     *   await strapi.update("articles", "abc123", { data: { title: "Updated" } });
     */
    async update<T>(
        contentType: string,
        documentId: string | number,
        body: { data: Record<string, unknown> },
        params?: StrapiQueryParams,
    ): Promise<StrapiSingleResponse<T>> {
        return this.request<StrapiSingleResponse<T>>(
            "PUT",
            `${contentType}/${documentId}`,
            params,
            body,
        );
    }

    /**
     * DELETE — /api/{pluralApiId}/{documentId}
     *
     * @example
     *   await strapi.delete("articles", "abc123");
     */
    async remove(
        contentType: string,
        documentId: string | number,
    ): Promise<StrapiSingleResponse<unknown>> {
        return this.request<StrapiSingleResponse<unknown>>(
            "DELETE",
            `${contentType}/${documentId}`,
        );
    }

    // ── Utilities ───────────────────────────────────────────

    /**
     * Resolve Strapi media URL.
     * Mengubah relative path (e.g. "/uploads/photo.jpg") menjadi absolute URL.
     * Jika sudah absolute (http/https), dikembalikan apa adanya.
     *
     * @example
     *   strapi.mediaUrl("/uploads/hero.jpg")
     *   ➜ "http://localhost:1337/uploads/hero.jpg"
     */
    mediaUrl(path: string | null | undefined): string {
        if (!path) return "";
        if (path.startsWith("http://") || path.startsWith("https://")) return path;
        return `${this.baseUrl}${path}`;
    }

    /**
     * Resolve array of media URLs sekaligus.
     */
    mediaUrls(paths: (string | null | undefined)[]): string[] {
        return paths.map((p) => this.mediaUrl(p));
    }

    /** Getter untuk base URL — berguna untuk image domains, dsb. */
    get url(): string {
        return this.baseUrl;
    }
}
