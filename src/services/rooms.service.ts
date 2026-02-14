/**
 * ============================================================
 * Rooms Service
 * ============================================================
 */

import { strapi } from "@/lib/api";

export interface RoomAttributes {
    name: string;
    slug: string;
    description: string;
    type: string;
    price: number;
    capacity: string;
    image: any;
    facilities: string[];
    beds: { number: number; isOccupied: boolean }[];
    [key: string]: unknown;
}

/**
 * Ambil daftar kamar — cocok untuk halaman ketersediaan & tarif.
 */
export async function getRooms(opts?: { page?: number; pageSize?: number; type?: string }) {
    const filters: Record<string, unknown> = {};
    if (opts?.type) filters.type = { $eqi: opts.type };

    const res = await strapi.find<RoomAttributes>("rooms", {
        populate: "*",
        sort: ["name:asc"],
        filters,
        pagination: {
            page: opts?.page ?? 1,
            pageSize: opts?.pageSize ?? 50,
        },
    });

    return {
        data: res.data.map((room) => ({
            ...room,
            image: strapi.mediaUrl(room.image?.url),
        })),
        pagination: res.meta.pagination!,
    };
}

/**
 * Ambil detail satu kamar berdasarkan slug.
 */
export async function getRoomBySlug(slug: string) {
    const res = await strapi.find<RoomAttributes>("rooms", {
        filters: { slug: { $eq: slug } },
        populate: "*",
        pagination: { limit: 1 },
    });

    const room = res.data[0] ?? null;
    if (!room) return null;

    return {
        ...room,
        image: strapi.mediaUrl(room.image?.url),
    };
}
