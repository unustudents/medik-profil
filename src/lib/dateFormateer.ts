export function formatKeWIB(dateString: string | number | Date): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'long',   // Contoh: 20 Feb 2026
        timeStyle: 'short',  // Contoh: 10.50
        timeZone: 'Asia/Jakarta', // Memaksa ke WIB meskipun server di luar negeri
    } as Intl.DateTimeFormatOptions).format(date);
}