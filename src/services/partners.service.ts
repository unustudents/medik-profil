/**
 * ============================================================
 * Partners Service
 * ============================================================
 */

import { strapi } from "@/lib/api";

export interface PartnerAttributes {
  documentId: string;
  name: string;
  description: string | null;
  image: {
    id: number;
    documentId: string;
    url: string;
    name: string;
    width: number;
    height: number;
  } | null;
  [key: string]: unknown;
}

/**
 * Ambil semua rekanan / partner.
 */
export async function getPartners() {
  const res = await strapi.find<PartnerAttributes>("asuransis", {
    fields: ["documentId", "name", "description"],
    populate: {
      image: {
        fields: ["url", "name", "width", "height"],
      },
    },
    sort: ["name:asc"],
    pagination: { pageSize: 100 },
  });

  return res.data.map((partner) => ({
    documentId: partner.documentId,
    name: partner.name,
    description: partner.description,
    image: strapi.mediaUrl(partner.image?.url),
    imageName: partner.image?.name ?? "",
  }));
}
