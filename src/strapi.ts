import { db, HomePage, eq } from "astro:db";
import { STRAPI_URL } from "astro:env/server";

// =============================================
// Data Gateway Functions (Strapi → AstroDB)
// =============================================

/**
 * Ambil data HomePage:
 * 1. Coba fetch dari Strapi
 * 2. Jika berhasil → simpan ke AstroDB → return data
 * 3. Jika gagal → baca data terakhir dari AstroDB
 */
export async function getHomePage() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`);
        if (!res.ok) throw new Error(`Strapi error: ${res.status}`);
        const json = await res.json();
        const data = json.data as any;

        // Ekstrak URL gambar dari objek Strapi
        const aboutImageUrl = data.about_image?.url ? `${STRAPI_URL}${data.about_image.url}` : '';
        const heroImageUrls = (data.hero_images ?? []).map((img: any) => `${STRAPI_URL}${img.url}`);

        // Simpan ke AstroDB (replace)
        const existing = await db.select().from(HomePage).where(eq(HomePage.id, 1));

        if (existing.length > 0) {
            await db.update(HomePage).set({
                about_title: data.about_title ?? '',
                about_description: data.about_description ?? '',
                stats_doctors: data.stats_doctors ?? 0,
                stats_medics: data.stats_medics ?? 0,
                stats_rooms: data.stats_rooms ?? 0,
                stats_capacity: data.stats_capacity ?? 0,
                hero_images: heroImageUrls,
                about_image: aboutImageUrl,
            }).where(eq(HomePage.id, 1));
        } else {
            await db.insert(HomePage).values({
                id: 1,
                about_title: data.about_title ?? '',
                about_description: data.about_description ?? '',
                stats_doctors: data.stats_doctors ?? 0,
                stats_medics: data.stats_medics ?? 0,
                stats_rooms: data.stats_rooms ?? 0,
                stats_capacity: data.stats_capacity ?? 0,
                hero_images: data.hero_images ?? [],
                about_image: aboutImageUrl,
            });
        }

        console.log({ data, aboutImageUrl }, "✅ HomePage: data dari Strapi tersinkron ke DB lokal");
        return { ...data, about_image: aboutImageUrl, hero_images: heroImageUrls };
    } catch (e) {
        console.warn("⚠️ Strapi tidak tersedia, menggunakan data dari DB lokal");

        // Fallback: baca dari DB lokal
        const rows = await db.select().from(HomePage);
        return rows[0] ?? null;
    }
}