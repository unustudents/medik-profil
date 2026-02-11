// @ts-nocheck

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
import { loadEnv } from 'vite';

const { STRAPI_URL, SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const strapiHost = STRAPI_URL ? new URL(STRAPI_URL).hostname : '172.192.7.10';

export default defineConfig({
	site: SITE_URL,
	integrations: [mdx(), sitemap(), db()],
	image: {
		domains: [strapiHost],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
