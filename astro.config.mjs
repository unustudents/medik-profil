// @ts-nocheck

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from 'vite';

import vercel from '@astrojs/vercel';

// https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file
// import.meta.env tidak tersedia di astro.config.mjs, gunakan Vite loadEnv
const { STRAPI_URL, SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
	env: {
		schema: {
			// Type-safe env vars — use via: import { STRAPI_URL } from "astro:env/server"
			STRAPI_URL: envField.string({ context: 'server', access: 'public', default: "http://172.192.7.10:1337" }),
			SITE_URL: envField.string({ context: 'server', access: 'public', default: "https://medik-profil.vercel.app/" }),
		}
	},

	site: SITE_URL,
	integrations: [mdx(), sitemap(), db()],

	image: {
		domains: [STRAPI_URL],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	output: "server",
	adapter: vercel(),
});