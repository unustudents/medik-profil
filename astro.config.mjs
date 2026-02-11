// @ts-nocheck

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
	site: 'https://medik-profil.vercel.app/',
	integrations: [mdx(), sitemap(), db()],
	image: {
		domains: ['172.192.7.10', import.meta.env.STRAPI_URL],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
