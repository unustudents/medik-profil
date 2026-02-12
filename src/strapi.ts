// import { db, HomePage, eq } from "astro:db"; // AstroDB dinonaktifkan — Astro Studio sudah sunset
import { STRAPI_URL, STRAPI_TOKEN } from "astro:env/server";

// =============================================
// Data Gateway Functions (Strapi only)
// AstroDB fallback dinonaktifkan — Astro Studio sudah sunset
// =============================================

/** Header autentikasi untuk Strapi API */
const strapiHeaders: HeadersInit = {
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
};

/**
 * Ambil data HomePage dari Strapi.
 *
 * AstroDB fallback di-comment — bisa diaktifkan kembali jika ada solusi DB hosted.
 */
console.log("TOKEN:", STRAPI_TOKEN);
console.log("HEADER:", strapiHeaders);

export async function getHomePage() {
    const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`, { method: "GET", headers: strapiHeaders });
    if (!res.ok) throw new Error(`Strapi error: ${res.status}`);
    const json = await res.json();
    const data = json.data as any;

    // Ekstrak URL gambar dari objek Strapi
    const aboutImageUrl = data.about_image?.url ? `${STRAPI_URL}${data.about_image.url}` : '';
    const heroImageUrls = (data.hero_images ?? []).map((img: any) => `${STRAPI_URL}${img.url}`);

    /*
    // ===== AstroDB Fallback (dinonaktifkan) =====
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
    // ===== End AstroDB Fallback =====
    */

    console.log({ data, aboutImageUrl, heroImageUrls }, "✅ HomePage: data dari Strapi");
    return { ...data, about_image: aboutImageUrl, hero_images: heroImageUrls };

    /*
    // ===== AstroDB Fallback catch (dinonaktifkan) =====
    } catch (e) {
        console.warn("⚠️ Strapi tidak tersedia, menggunakan data dari DB lokal");
        const rows = await db.select().from(HomePage);
        return rows[0] ?? null;
    }
    // ===== End AstroDB Fallback catch =====
    */
}