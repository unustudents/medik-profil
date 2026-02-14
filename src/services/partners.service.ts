/**
 * ============================================================
 * Partners Service
 * ============================================================
 */

import { strapi } from "@/lib/api";

export interface PartnerAttributes {
    name: string;
    image: any;
    description: string;
    [key: string]: unknown;
}

/**
 * Ambil semua rekanan / partner.
 */
export async function getPartners() {
    const res = await strapi.find<PartnerAttributes>("partners", {
        populate: "*",
        sort: ["name:asc"],
        pagination: { pageSize: 100 },
    });

    return res.data.map((partner) => ({
        ...partner,
        image: strapi.mediaUrl(partner.image?.url),
    }));
}
