/**
 * ============================================================
 * HTML Sanitizer — Server-side XSS Protection
 * ============================================================
 *
 * Sanitasi konten HTML dari CMS sebelum di-render via set:html.
 * Menghapus tag dan atribut berbahaya yang bisa dieksploitasi
 * untuk serangan XSS (Cross-Site Scripting).
 *
 * Penggunaan:
 *   import { sanitizeHtml } from "@/lib/sanitize";
 *   <div set:html={sanitizeHtml(article.content)} />
 */

/**
 * Daftar tag HTML yang diizinkan untuk konten CMS.
 * Tag di luar daftar ini akan dihapus beserta kontennya (untuk tag berbahaya)
 * atau hanya tag-nya yang dihapus (konten dipertahankan).
 */
// const DANGEROUS_TAGS = [
//     "script",
//     "iframe",
//     "object",
//     "embed",
//     "applet",
//     "form",
//     "input",
//     "textarea",
//     "select",
//     "button",
//     "style",
//     "link",
//     "base",
//     "meta",
//     "svg",
//     "math",
// ] as const;

/**
 * Sanitasi HTML dari CMS untuk mencegah XSS.
 *
 * Yang dihapus:
 * - Tag berbahaya beserta kontennya (<script>, <iframe>, <object>, <embed>, <applet>, <style>, <svg>, <math>)
 * - Tag form (<form>, <input>, <textarea>, <select>, <button>)
 * - Tag metadata (<link>, <base>, <meta>)
 * - Event handler attributes (onclick, onerror, onload, dll.)
 * - javascript: dan data: URL pada href/src/action
 * - Atribut srcdoc pada iframe (walau iframe sudah dihapus)
 *
 * @param html - Raw HTML string dari CMS
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(html: string): string {
  if (!html) return "";

  let clean = html;

  // ── 1. Hapus tag berbahaya yang punya konten (script, style, iframe, dll.) ──
  // Menggunakan regex greedy-safe untuk menangkap open tag + isi + close tag
  const contentTags = [
    "script",
    "style",
    "iframe",
    "object",
    "embed",
    "applet",
    "svg",
    "math",
  ];
  for (const tag of contentTags) {
    // Menangkap: <tag ...>...</tag> (termasuk nested content)
    const regex = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
    clean = clean.replace(regex, "");
    // Self-closing variant: <tag ... />
    clean = clean.replace(new RegExp(`<${tag}\\b[^>]*/?>`, "gi"), "");
  }

  // ── 2. Hapus tag form & metadata (hanya tag-nya, bukan konten) ──
  const stripTags = [
    "form",
    "input",
    "textarea",
    "select",
    "button",
    "link",
    "base",
    "meta",
  ];
  for (const tag of stripTags) {
    clean = clean.replace(new RegExp(`</?${tag}\\b[^>]*>`, "gi"), "");
  }

  // ── 3. Hapus event handler attributes (on*) ──
  // Contoh: onclick="alert(1)", onerror='fetch(...)' , onload=doSomething
  clean = clean.replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");

  // ── 4. Hapus javascript: dan data: URLs ──
  // Pada href, src, action, formaction, poster, dll.
  clean = clean.replace(
    /(href|src|action|formaction|poster|data)\s*=\s*["']?\s*javascript\s*:/gi,
    '$1="'
  );
  clean = clean.replace(
    /(href|src|action|formaction|poster)\s*=\s*["']?\s*data\s*:/gi,
    '$1="'
  );

  // ── 5. Hapus atribut srcdoc (bisa bypass iframe removal) ──
  clean = clean.replace(/\s+srcdoc\s*=\s*(?:"[^"]*"|'[^']*')/gi, "");

  // ── 6. Hapus HTML comments (bisa mengandung conditional IE exploits) ──
  clean = clean.replace(/<!--[\s\S]*?-->/g, "");

  return clean.trim();
}
