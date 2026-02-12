// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'RSU Afdila';
export const SITE_DESCRIPTION = 'Rumah Sakit Umum Afdila Cilacap';
export const COPYRIGHT = 'IT Department RSU Afdila';

export const ADDRESS = 'Jln. Soekarno Hatta No.79 - Rejasari, Cilacap';
export const OPENING_HOURS = {
    WEEKDAY: '08:00 - 22:00',
    WEEKEND: '08:00 - 22:00'
};

export const SOCIALS = {
    facebook: { name: 'Facebook', url: 'https://facebook.com' },
    instagram: { name: 'Instagram', url: 'https://instagram.com' },
    youtube: { name: 'Youtube', url: 'https://youtube.com' }
} as const;

export const CONTACTS = {
    phone: '+62 815 3274 4804',
    email: 'rsuafdila@gmail.com',
    igd: '+62 000 111 22'
} as const;

export const MENU = [
    { name: "Beranda", href: "/" },
    {
        name: "Informasi Layanan",
        href: "#",
        subItems: [
            { name: "Jadwal Dokter", href: "/jadwal-dokter" },
            { name: "Dokter Jaga", href: "/dokter-hari-ini" },
            // { name: "Dokter Praktek", href: "#" },
            // { name: "Dokter Tidak Praktek", href: "#" },
            { name: "Ketersediaan Kamar", href: "/ketersediaan-kamar" },
            { name: "Kamar & Tarif", href: "/tarif-kamar" },
        ],
    },
    { name: "Agenda", href: "/agenda" },
    { name: "Testimoni", href: "#" },
    { name: "Galeri", href: "#" },
    { name: "Pembayaran", href: "/metode-pembayaran" },
    { name: "Artikel", href: "/article" },
    { name: "Rekanan", href: "/rekanan" },
];