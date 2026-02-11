import { defineDb, defineTable, column } from 'astro:db';

const HomePage = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        about_title: column.text({ default: '' }),
        about_description: column.text({ default: '' }),
        stats_doctors: column.number({ default: 0 }),
        stats_medics: column.number({ default: 0 }),
        stats_rooms: column.number({ default: 0 }),
        stats_capacity: column.number({ default: 0 }),
        hero_images: column.json({ default: [] }),
        about_image: column.json({ default: "" }),
    }
});

export default defineDb({
    tables: { HomePage },
});
