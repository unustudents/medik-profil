// @ts-nocheck

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import db from '@astrojs/db'; // AstroDB dinonaktifkan — Astro Studio sudah sunset
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from 'vite';

import node from '@astrojs/node';

// https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file
// import.meta.env tidak tersedia di astro.config.mjs, gunakan Vite loadEnv
const { STRAPI_URL, SITE_URL, STRAPI_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
	env: {
		schema: {
			// Type-safe env vars — use via: import { STRAPI_URL, STRAPI_TOKEN } from "astro:env/server"
			STRAPI_URL: envField.string({ context: 'server', access: 'public', default: "http://localhost:1337" }),
			STRAPI_TOKEN: envField.string({ context: 'server', access: 'public', optional: true, default: "" }),
			SITE_URL: envField.string({ context: 'server', access: 'public', default: "https://medik-profil.vercel.app/" }),
		}
	},

	site: SITE_URL,

	// AstroDB dinonaktifkan
	integrations: [mdx(), sitemap() /*, db({ mode: "web" }) */],

	image: {
		domains: [STRAPI_URL],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	output: "server",

	adapter: node({
		mode: 'standalone',
	}),
});