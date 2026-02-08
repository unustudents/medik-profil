export interface AgendaEvent {
    title: string;
    slug: string;
    date: string;
    time: string;
    status: "Akan Datang" | "Sedang Berlangsung" | "Acara telah lewat";
    image: string;
    content: string;
}

export const agendaEvents: AgendaEvent[] = [
    // Upcoming Events (Akan Datang)
    {
        title: "Webinar Kesehatan Mental di Era Digital",
        slug: "webinar-kesehatan-mental-era-digital",
        date: "15 Mar 2026",
        time: "09:00",
        status: "Akan Datang",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Kesehatan mental menjadi isu yang semakin penting di era digital saat ini. Webinar ini akan membahas tantangan dan strategi menjaga kesehatan mental di tengah gempuran informasi dan media sosial.
            </p>
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Bersama para ahli psikiatri dan psikolog, kita akan mengupas tuntas dampak teknologi terhadap psikologis serta cara bijak memanfaatkannya. Jangan lewatkan kesempatan untuk berdiskusi langsung dengan narasumber.
            </p>
        `
    },
    {
        title: "Seminar Pencegahan Penyakit Jantung",
        slug: "seminar-pencegahan-penyakit-jantung",
        date: "20 Mar 2026",
        time: "08:30",
        status: "Akan Datang",
        image: "https://images.unsplash.com/photo-1770106678115-ec9aa241cdf6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Penyakit jantung masih menjadi penyebab kematian utama di dunia. Seminar ini bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya gaya hidup sehat untuk mencegah penyakit kardiovaskular.
            </p>
        `
    },
    {
        title: "Pelatihan Bantuan Hidup Dasar Untuk Awam",
        slug: "pelatihan-bantuan-hidup-dasar",
        date: "25 Mar 2026",
        time: "13:00",
        status: "Akan Datang",
        image: "https://images.unsplash.com/photo-1770199782220-486adbf69941?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                 Keadaan darurat bisa terjadi di mana saja dan kapan saja. Pelatihan Bantuan Hidup Dasar (BHD) ini dirancang khusus untuk masyarakat awam agar mampu memberikan pertolongan pertama yang tepat sebelum bantuan medis tiba.
            </p>
        `
    },

    // Ongoing Events (Sedang Berlangsung)
    {
        title: "Workshop Dokter Kecil Angkatan 5",
        slug: "workshop-dokter-kecil-angkatan-5",
        date: "08 Feb 2026",
        time: "07:00",
        status: "Sedang Berlangsung",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Program Dokter Kecil kembali hadir untuk mencetak kader kesehatan sejak dini. Peserta akan diajarkan dasar-dasar kesehatan, kebersihan diri, dan lingkungan sekolah.
            </p>
        `
    },
    {
        title: "Pemeriksaan Kesehatan Gratis Lansia",
        slug: "pemeriksaan-kesehatan-gratis-lansia",
        date: "08 Feb 2026",
        time: "08:00",
        status: "Sedang Berlangsung",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Sebagai wujud kepedulian terhadap lansia, kami menyelenggarakan pemeriksaan kesehatan gratis meliputi cek tensi, gula darah, dan konsultasi dokter umum.
            </p>
        `
    },

    // Past Events (Acara telah lewat)
    {
        title: "Pekan Bayi Sehat Indonesia",
        slug: "pekan-bayi-sehat-indonesia",
        date: "22 Des 2025",
        time: "10:07",
        status: "Acara telah lewat",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIl4WXFiokAKC2xCyxyIQw_hJ5V20P7vAY5CNAix2jd1EGsP0-uJ_R_NAbw_PjpkzSa2AManZRJqXE4dNNPEmbwhFvkZPB8nTGJsFtAUhrnRpc6qFgKU0zmO8XcOVnnjZCNDZ7qn8PP7yoNRzfmQ_343u4sAKyISX6nsoQVdA46akzLNcNEwxP6rXdS5biyk9iq7pvLenWggOPjO0ceH9vsIw7mALBgydABXVHnr5liq52Kd3RPMNpxxXeYxaZNNsGFja1w2h6b-0",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Pekan Bayi Sehat bertujuan untuk memantau tumbuh kembang balita dan memberikan edukasi gizi kepada para ibu. Berbagai lomba menarik juga diadakan untuk memeriahkan acara.
            </p>
        `
    },
    {
        title: "Rilis WP Medika 1.2 Ciuss Creative",
        slug: "rilis-wp-medika-1-2",
        date: "17 Des 2025",
        time: "09:00",
        status: "Acara telah lewat",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvNQtkl7Twntd4hKPx2JNanr6M0zbRCC3fiCkUwrtNowhjPTAhSyMw0Sls7J2f3FBfWtlXQF2mrzZjNFUmy1qdTMroqIyW91P5bbJEAMiGSp3xWBuDB0SSUm83FJiFA1kRZvU4i7i8BBg9mFi6qAGjDQV9c0NB-zqxPFXWv8bTF5Upw7gEHnHnRHwnAx3ZeFcg-R_QEdaJgT5vDIyIncx0zgvKRsHlJNzcNFITF4qos3imAzTU7fhmSTmZxcBPC2XkS-glly93NuY",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Peluncuran versi terbaru sistem informasi manajemen rumah sakit WP Medika dengan fitur-fitur canggih yang memudahkan operasional pelayanan kesehatan.
            </p>
        `
    },
    {
        title: "Lomba Melukis Anak Hari Kesehatan",
        slug: "lomba-melukis-anak",
        date: "14 Nov 2025",
        time: "10:07",
        status: "Acara telah lewat",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqcqlOoVh11pIw3Yso6u-MveBLg2ZCPD5CG9BYD5jgKzVKknqVV_D5UOkVxf67LOFfuLLYmsC1tt2JAqmBRiW6a_ujvEYd9VkxLM_xR-ikEks6SUOK1TLEuzJTod02751k_qzHoGj_wmOH6d3y6kTsjGeCeTfZ4znVRV7ZUF0NEDTNIgFEm1TpkRDZ5OLUPmLWpc3V84f4QKnlx7Keg3speyYOjG1Ia04pbprUY3cRxGGUhCBgNqpRxdma2AwWLrgc_xi997zX28M",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Mengasah kreativitas anak melalui lomba melukis dengan tema "Sehat Negeriku, Tumbuh Indonesiaku". Acara ini diikuti oleh ratusan siswa TK dan SD.
            </p>
        `
    },
    {
        title: "Senam Sehat Memperingati Hari Kesehatan",
        slug: "senam-sehat-hari-kesehatan",
        date: "10 Nov 2025",
        time: "10:07",
        status: "Acara telah lewat",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4cujBAeMALsR25gv2DNFW8kCpUMttSuPRsRNgvVxiAfi0MlPSZe8v0P6MfSem-NIt5JcMEWAVyxJpopLtm3LbpfpuGQEhDZ2sLRnmYtaCMpZU4PC-e7UjC2nog0l24YMrPwPkfJ6DraScYoRiUMspjucHjO1xJ9cKM3mmT_uunT9b-HpTrcfFy9jFGu4ww797Drt37QYgTvDxwnJOo3w4JpCvL3aBmlhL548qZRwLY1Ogi3Q317UlB8g48H-IrSpdLFzSMlIuwwI",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Ribuan peserta memadati halaman rumah sakit untuk mengikuti senam sehat bersama. Acara ini juga dimeriahkan dengan pembagian doorprize menarik.
            </p>
        `
    },
    {
        title: "Donor Darah Massal Untuk PMI",
        slug: "donor-darah-massal-pmi",
        date: "08 Okt 2025",
        time: "08:00",
        status: "Acara telah lewat",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvGnr9Vx1lFSXeiu9nmW5s5r_quu0fe5szueFHkBZb3I2nC6mGlvu9Qi9Rc5LC78IGFpbpf0DZ7fKNpopseicqmlXFakAyVxsaloBvcAH9jet9YhNvFFl7jdaPJ32wUodv2vI5RuG6qOuTUrwt-_36t7OWuzjmote8R7e55zbbuA8BRD537nO_nml6it70WFnAzQy5Qq9Vqz1Y3PPa827hfFMXW58eN-jttNesUf4BEbllY_k8HL167up9Y2z7MGkY4YmBMpGucs",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Ini adalah contoh laman. Ini berbeda dengan posting blog karena akan tetap berada di satu
                tempat dan akan muncul di navigasi situs Anda (di kebanyakan tema). Kebanyakan orang memulai
                dengan laman Tentang yang mengenalkannya ke calon pengunjung situs. Biasanya terdengar
                seperti ini: Hai disana! Saya adalah pembawa sepeda siang hari, calon aktor di malam hari,
                dan ini adalah situs web saya. Saya tinggal di Los Angeles, punya anjing hebat bernama Jack,
                dan saya suka piña colada. (Dan tertangkap basah).
            </p>
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                The XYZ Doohickey Company didirikan pada tahun 1971, dan telah menyediakan doohickeys
                berkualitas kepada masyarakat sejak saat itu. Terletak di Gotham City, XYZ mempekerjakan
                lebih dari 2.000 orang dan melakukan segala hal yang mengagumkan untuk komunitas Gotham.
            </p>
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                Sebagai pengguna WordPress baru, Anda harus membuka dasbor untuk menghapus halaman ini dan
                membuat halaman baru untuk konten Anda. Selamat bersenang-senang! Ini adalah contoh laman.
                Ini berbeda dengan posting blog karena akan tetap berada di satu tempat dan akan muncul di
                navigasi situs Anda (di kebanyakan tema). Kebanyakan orang memulai dengan laman Tentang yang
                mengenalkannya ke calon pengunjung situs. Biasanya terdengar seperti ini:
            </p>
        `
    },
    // Additional items for pagination testing
    {
        title: "Penyuluhan Gizi Seimbang Balita",
        slug: "penyuluhan-gizi-seimbang-balita",
        date: "05 Okt 2025",
        time: "09:00",
        status: "Acara telah lewat",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Pentingnya asupan gizi seimbang untuk tumbuh kembang optimal anak menjadi topik utama dalam penyuluhan ini.
            </p>
        `
    },
    {
        title: "Vaksinasi Influenza Gratis",
        slug: "vaksinasi-influenza-gratis",
        date: "01 Okt 2025",
        time: "08:00",
        status: "Acara telah lewat",
        image: "https://images.unsplash.com/photo-1632053001859-99426f6323c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        content: `
            <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                Persiapan menghadapi musim hujan, RSU Afdila menyediakan layanan vaksinasi influenza gratis bagi warga sekitar.
            </p>
        `
    }
];
