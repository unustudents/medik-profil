/**
 * ============================================================
 * Homepage Service
 * ============================================================
 */

import { strapi, StrapiError } from "@/lib/api";

export interface HomePageData {
    about_title: string;
    about_description: string;
    about_image: any;
    hero_images: any[];
    stats_doctors: number;
    stats_medics: number;
    stats_rooms: number;
    stats_capacity: number;
    [key: string]: unknown;
}

/** Fallback data jika Strapi belum tersedia / content-type belum dibuat */
const FALLBACK: HomePageData = {
    about_title: "Tentang Kami",
    about_description: "Rumah Sakit Umum yang melayani dengan sepenuh hati.",
    about_image: "",
    hero_images: [],
    stats_doctors: 0,
    stats_medics: 0,
    stats_rooms: 0,
    stats_capacity: 0,
};

/**
 * Ambil data HomePage (single-type) dari Strapi.
 * Jika Strapi tidak tersedia / 404, return fallback agar halaman tetap tampil.
 */
export async function getHomePage() {
    try {
        const res = await strapi.findSingle<HomePageData>("homepage", {
            populate: "*",
        });

        const data = res.data;

        return {
            ...data,
            about_image: strapi.mediaUrl(data.about_image?.url),
            hero_images: (data.hero_images ?? []).map((img: any) => strapi.mediaUrl(img.url)),
        };
    } catch (err) {
        if (err instanceof StrapiError) {
            console.warn(`⚠️ HomePage: Strapi ${err.status} — menggunakan fallback data`);
        } else {
            console.warn("⚠️ HomePage: Gagal fetch dari Strapi —", err);
        }
        return FALLBACK;
    }
}
