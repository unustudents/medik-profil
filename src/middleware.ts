/**
 * ============================================================
 * Astro Middleware — Security Headers
 * ============================================================
 *
 * Menambahkan HTTP security headers ke semua response.
 * Ini adalah best practice untuk mencegah berbagai serangan web.
 *
 * Ref: https://docs.astro.build/en/guides/middleware/
 */

import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  // ── Prevent MIME-type sniffing ──
  response.headers.set("X-Content-Type-Options", "nosniff");

  // ── Prevent clickjacking ──
  response.headers.set("X-Frame-Options", "DENY");

  // ── XSS Protection (legacy browsers) ──
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // ── Referrer Policy ──
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // ── Permissions Policy — disable unused browser features ──
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // ── Content Security Policy ──
  // Kebijakan ketat tapi tetap memungkinkan resource yang dibutuhkan:
  // - 'unsafe-inline' di script-src untuk theme toggle & font onload
  // - Google Fonts untuk stylesheet & font files
  // - https: untuk gambar dari berbagai CDN (Strapi, Google, dll.)
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: http:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  // ── Strict Transport Security (aktif saat production/HTTPS) ──
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  return response;
});
