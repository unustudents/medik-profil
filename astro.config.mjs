// @ts-nocheck

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const STRAPI_URL = process.env.STRAPI_URL || env.STRAPI_URL;
const SITE_URL = process.env.SITE_URL || env.SITE_URL;

let strapiHost = '172.192.7.10';
if (STRAPI_URL) {
	try {
		strapiHost = new URL(STRAPI_URL).hostname;
	} catch {
		strapiHost = STRAPI_URL;
	}
}

export default defineConfig({
	env: {
		schema: {
			STRAPI_URL: envField.string({ context: 'server', access: 'public', optional: false }),
		}
	},
	site: SITE_URL,
	integrations: [mdx(), sitemap(), db()],
	image: {
		domains: [strapiHost],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
