/**
 * ============================================================
 * Agenda Service
 * ============================================================
 */

import { strapi } from "@/lib/api";

export interface AgendaAttributes {
    title: string;
    slug: string;
    date: string;
    time: string;
    status: string;
    image: any;
    content: string;
    category: string;
    [key: string]: unknown;
}

/**
 * Ambil daftar agenda/event dengan pagination & opsional filter kategori.
 */
export async function getAgendaEvents(opts?: {
    page?: number;
    pageSize?: number;
    category?: string;
    status?: string;
}) {
    const filters: Record<string, unknown> = {};
    if (opts?.category) filters.category = { $eqi: opts.category };
    if (opts?.status) filters.status = { $eqi: opts.status };

    const res = await strapi.find<AgendaAttributes>("agendas", {
        populate: "*",
        sort: ["date:desc"],
        filters,
        pagination: {
            page: opts?.page ?? 1,
            pageSize: opts?.pageSize ?? 10,
        },
    });

    return {
        data: res.data.map((event) => ({
            ...event,
            image: strapi.mediaUrl(event.image?.url),
        })),
        pagination: res.meta.pagination!,
    };
}

/**
 * Ambil satu agenda berdasarkan slug.
 */
export async function getAgendaBySlug(slug: string) {
    const res = await strapi.find<AgendaAttributes>("agendas", {
        filters: { slug: { $eq: slug } },
        populate: "*",
        pagination: { limit: 1 },
    });

    const event = res.data[0] ?? null;
    if (!event) return null;

    return {
        ...event,
        image: strapi.mediaUrl(event.image?.url),
    };
}
