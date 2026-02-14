/**
 * ============================================================
 * Payment Methods Service
 * ============================================================
 */

import { strapi } from "@/lib/api";

export interface PaymentMethodAttributes {
    name: string;
    type: "image" | "html";
    image: any;
    [key: string]: unknown;
}

/**
 * Ambil semua metode pembayaran.
 */
export async function getPaymentMethods() {
    const res = await strapi.find<PaymentMethodAttributes>("payment-methods", {
        populate: "*",
        pagination: { pageSize: 100 },
    });

    return res.data.map((method) => ({
        ...method,
        image: strapi.mediaUrl(method.image?.url),
    }));
}
