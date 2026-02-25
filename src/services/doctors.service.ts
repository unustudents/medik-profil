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
  const res = await strapi.find<DoctorAttributes>("dokters", {
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
      specialist: (doc as any).spesialisasi?.name ?? "",
      image: strapi.mediaUrl(
        (doc as any).image?.formats?.small?.url ?? (doc as any).image?.url
      ),
      imageWidth: (doc as any).image?.formats?.small?.width ?? 500,
      imageHeight: (doc as any).image?.formats?.small?.height ?? 333,
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
