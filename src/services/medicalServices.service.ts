/**
 * ============================================================
 * Medical Services Service
 * ============================================================
 *
 * Service untuk mengambil data layanan medis dari Strapi API.
 *
 * Contoh penggunaan:
 *   import { getMedicalServices } from "@/services/medicalServices.service";
 */

import { strapi } from "@/lib/api";
import type { StrapiMedia } from "@/lib/api/types";

export interface MedicalServiceAttributes {
  name: string;
  description: string;
  image: StrapiMedia;
  [key: string]: unknown;
}

/**
 * Ambil daftar layanan medis dengan pagination.
 */
export async function getMedicalServices(opts?: {
  page?: number;
  pageSize?: number;
}) {
  const res = await strapi.find<MedicalServiceAttributes>("layanan-mediss", {
    populate: ["image"],
    sort: ["id:asc"],
    pagination: {
      page: opts?.page ?? 1,
      pageSize: opts?.pageSize ?? 25,
    },
  });

  return {
    data: res.data.map((service) => ({
      ...service,
      image: strapi.mediaUrl(service.image?.url),
    })),
    pagination: res.meta.pagination!,
  };
}

/**
 * Ambil satu layanan medis berdasarkan ID.
 */
export async function getMedicalServiceById(id: number) {
  const res = await strapi.findOne<MedicalServiceAttributes>(
    "layanan-mediss",
    id,
    {
      populate: ["image"],
    }
  );

  if (!res.data) return null;

  return {
    ...res.data,
    image: strapi.mediaUrl(res.data.image?.url),
  };
}
