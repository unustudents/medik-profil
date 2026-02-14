/**
 * ============================================================
 * Strapi Query Builder
 * ============================================================
 *
 * Serialisasi `StrapiQueryParams` menjadi query-string yang
 * kompatibel dengan format qs (bracket notation) yang dipakai
 * Strapi REST API.
 *
 * Contoh:
 *   buildQuery({ populate: "*", pagination: { page: 1, pageSize: 10 } })
 *   ➜ "populate=*&pagination[page]=1&pagination[pageSize]=10"
 */

import type { StrapiQueryParams } from "./types";

/**
 * Recursively encode sebuah value ke dalam bracket-notation pairs.
 *
 * @example
 *   encodePairs("filters", { title: { $contains: "hello" } })
 *   ➜ [["filters[title][$contains]", "hello"]]
 */
function encodePairs(prefix: string, value: unknown): [string, string][] {
    if (value === null || value === undefined) return [];

    if (Array.isArray(value)) {
        return value.flatMap((item, i) => encodePairs(`${prefix}[${i}]`, item));
    }

    if (typeof value === "object") {
        return Object.entries(value as Record<string, unknown>).flatMap(([key, val]) =>
            encodePairs(`${prefix}[${key}]`, val),
        );
    }

    return [[prefix, String(value)]];
}

/**
 * Build a full query-string dari `StrapiQueryParams`.
 * Mengembalikan string TANPA leading "?".
 */
export function buildQuery(params?: StrapiQueryParams): string {
    if (!params) return "";

    const pairs: [string, string][] = [];

    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null) continue;

        // Primitive: langsung encode
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            pairs.push([key, String(value)]);
            continue;
        }

        // Array of primitives (e.g. sort, fields)
        if (Array.isArray(value) && value.every((v) => typeof v !== "object")) {
            value.forEach((item, i) => {
                pairs.push([`${key}[${i}]`, String(item)]);
            });
            continue;
        }

        // Object / nested array — recursive encode
        pairs.push(...encodePairs(key, value));
    }

    return pairs.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}
