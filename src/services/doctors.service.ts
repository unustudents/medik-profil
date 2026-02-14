/**
 * ============================================================
 * Doctors Service
 * ============================================================
 *
 * Contoh penggunaan:
 *   import { getDoctors, getDoctorBySlug } from "@/services/doctors.service";
 *
 *   const { data, pagination } = await getDoctors({ page: 1, pageSize: 10 });
 *   const doctor = await getDoctorBySlug("dr-fira-bella");
 */

import { strapi } from "@/lib/api";

export interface DoctorAttributes {
    name: string;
    specialist: string;
    slug: string;
    image: any;
    schedule: Record<string, string>;
    [key: string]: unknown;
}

/**
 * Ambil daftar dokter (collection) dengan pagination.
 */
export async function getDoctors(opts?: { page?: number; pageSize?: number }) {
    const res = await strapi.find<DoctorAttributes>("doctors", {
        populate: "*",
        sort: ["name:asc"],
        pagination: {
            page: opts?.page ?? 1,
            pageSize: opts?.pageSize ?? 25,
        },
    });

    return {
        data: res.data.map((doc) => ({
            ...doc,
            image: strapi.mediaUrl(doc.image?.url),
        })),
        pagination: res.meta.pagination!,
    };
}

/**
 * Ambil satu dokter berdasarkan slug.
 */
export async function getDoctorBySlug(slug: string) {
    const res = await strapi.find<DoctorAttributes>("doctors", {
        filters: { slug: { $eq: slug } },
        populate: "*",
        pagination: { limit: 1 },
    });

    const doc = res.data[0] ?? null;
    if (!doc) return null;

    return {
        ...doc,
        image: strapi.mediaUrl(doc.image?.url),
    };
}
