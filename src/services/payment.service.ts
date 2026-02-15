/**
 * ============================================================
 * Payment Methods Service
 * ============================================================
 *
 * Strapi content-type: metode-pembayarans
 * API: GET /api/metode-pembayarans?fields[0]=name&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&populate[image][fields][2]=width&populate[image][fields][3]=height
 *
 * Response shape dari Strapi:
 *   data[].name   — nama metode pembayaran ("QRIS", "GoPay", dll.)
 *   data[].image  — objek media Strapi { url, alternativeText, width, height, ... }
 *                   url bersifat relative ("/uploads/xxx.png"), perlu di-resolve
 *                   dengan strapi.mediaUrl()
 */

import { strapi, StrapiError } from "@/lib/api";

// ── Strapi Response Shape ───────────────────────────────────

/** Shape data dari Strapi (sebelum di-transform) */
interface StrapiPaymentMethod {
    name: string;
    image: {
        url: string;
        alternativeText: string | null;
        width: number;
        height: number;
    } | null;
}

// ── Output Shape ────────────────────────────────────────────

/** Data yang dikembalikan ke halaman (sudah di-transform) */
export interface PaymentMethod {
    /** Nama metode pembayaran */
    name: string;
    /** URL absolut gambar (sudah di-resolve dari Strapi) */
    image: string;
    /** Alt text dari Strapi, fallback ke name */
    alt: string;
    /** Dimensi asli gambar */
    width: number;
    height: number;
}

// ── Fallback ────────────────────────────────────────────────

/** Fallback data jika Strapi belum tersedia / content-type belum dibuat */
const FALLBACK: PaymentMethod[] = [
    {
        name: "QRIS",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg",
        alt: "QRIS",
        width: 200,
        height: 74,
    },
];

// ── Service Function ────────────────────────────────────────

/**
 * Ambil semua metode pembayaran dari Strapi.
 *
 * Hanya mengambil field yang dibutuhkan (name + image) untuk
 * mengurangi payload response dari Strapi.
 *
 * Jika Strapi tidak tersedia / content-type belum dibuat (404),
 * return fallback agar halaman tetap tampil.
 */
export async function getPaymentMethods(): Promise<PaymentMethod[]> {
    try {
        const res = await strapi.find<StrapiPaymentMethod>("metode-pembayarans", {
            fields: ["name"],
            populate: {
                image: {
                    fields: ["url", "alternativeText", "width", "height"],
                },
            },
            pagination: { pageSize: 100 },
        });

        return res.data
            .filter((method) => method.image?.url) // skip entri tanpa gambar
            .map((method) => ({
                name: method.name,
                image: strapi.mediaUrl(method.image!.url),
                alt: method.image!.alternativeText || method.name,
                width: method.image!.width ?? 200,
                height: method.image!.height ?? 100,
            }));
    } catch (err) {
        if (err instanceof StrapiError && err.status === 404) {
            console.warn("[PaymentService] Content-type 'metode-pembayarans' not found, using fallback.");
            return FALLBACK;
        }
        throw err;
    }
}