// @ts-nocheck
// https://docs.astro.build/en/reference/configuration-reference/

import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

// loadEnv dibutuhkan agar STRAPI_URL dan SITE_URL bisa dipakai di config level
// (env.schema hanya tersedia di runtime, bukan saat config di-resolve)
const { STRAPI_URL, SITE_URL } = loadEnv(
	process.env.NODE_ENV ?? "",
	process.cwd(),
	""
);

// ─── Astro Configuration ───────────────────────────────────
export default defineConfig({
	// === Type-safe environment variables ===
	// https://docs.astro.build/en/reference/configuration-reference/#env
	env: {
		schema: {
			STRAPI_URL: envField.string({
				context: "server",
				access: "secret",
				default: "http://localhost:1337",
			}),
			STRAPI_TOKEN: envField.string({
				context: "server",
				access: "secret",
				optional: true,
				default: "",
			}),
		},
	},

	// === Site URL (untuk sitemap & canonical URLs) ===
	// https://docs.astro.build/en/reference/configuration-reference/#site
	site: SITE_URL || "http://localhost:4321",

	// === Integrations ===
	// https://docs.astro.build/en/reference/configuration-reference/#integrations
	integrations: [sitemap()],

	// === Image optimization — izinkan domain Strapi ===
	// https://docs.astro.build/en/reference/configuration-reference/#imagedomains
	image: {
		domains: [STRAPI_URL ? new URL(STRAPI_URL).hostname : "localhost"],
	},

	// === Vite plugins ===
	// https://docs.astro.build/en/reference/configuration-reference/#vite
	vite: {
		plugins: [tailwindcss()],
	},

	// === Output mode ===
	// Astro 5 hanya support "static" atau "server"
	// https://docs.astro.build/en/reference/configuration-reference/#output
	//
	// "server" = semua halaman di-render on-demand (SSR) by default.
	// Untuk halaman yang ingin di-prerender (SSG), tambahkan:
	//   export const prerender = true
	// di halaman tersebut.
	// https://docs.astro.build/en/guides/on-demand-rendering/#server-mode
	output: "server",

	// === Node.js adapter (standalone) ===
	// https://docs.astro.build/en/guides/integrations-guide/node/
	adapter: node({
		mode: "standalone",
	}),
});