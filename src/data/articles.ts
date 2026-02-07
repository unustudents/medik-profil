export interface Article {
    id: number;
    title: string;
    slug: string;
    category: string;
    image: string;
    content: string;
    date: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
    views: string;
    tags: string[];
}

const dummyContent = `
    <p class="font-medium text-xl text-gray-700 dark:text-gray-200 mb-6">
        Penyakit jantung bukan lagi sekadar masalah bagi mereka yang lanjut usia. Data menunjukkan tren
        peningkatan kasus gangguan kardiovaskular pada usia produktif.
    </p>
    <p>
        Jantung adalah organ vital yang bekerja tanpa henti memompa darah ke seluruh tubuh. Namun, gaya
        hidup modern yang cenderung sedenter, pola makan tidak sehat, dan tingkat stres yang tinggi
        seringkali menjadi pemicu utama kerusakan fungsi jantung secara perlahan namun pasti.
    </p>
    <h2 class="text-2xl font-bold text-primary mt-10 mb-4">Mengapa Harus Dimulai Sejak Dini?</h2>
    <p>
        Proses penumpukan plak pada pembuluh darah atau aterosklerosis tidak terjadi dalam semalam. Ini
        adalah proses akumulatif yang dimulai bahkan sejak masa kanak-kanak. Dengan menjaga pola hidup
        sehat di usia muda, kita memberikan investasi terbaik bagi kualitas hidup kita di masa tua
        nanti.
    </p>
    <blockquote
        class="border-l-4 border-primary bg-primary/5 dark:bg-primary/10 p-6 my-8 rounded-r-xl italic text-gray-700 dark:text-gray-200">
        "Mencegah jauh lebih mudah dan murah daripada mengobati. Jantung yang sehat adalah kunci dari
        umur panjang yang produktif."
    </blockquote>
    <h2 class="text-2xl font-bold text-primary mt-10 mb-4">Langkah Praktis Menjaga Jantung</h2>
    <ul class="list-none space-y-4 mb-8">
        <li class="flex gap-3">
            <span class="material-icons-outlined text-primary flex-shrink-0">check_circle</span>
            <span><strong>Aktivitas Fisik Rutin:</strong> Minimal 30 menit jalan cepat setiap hari dapat
                memperkuat otot jantung.</span>
        </li>
        <li class="flex gap-3">
            <span class="material-icons-outlined text-primary flex-shrink-0">check_circle</span>
            <span><strong>Pola Makan DASH:</strong> Mengurangi asupan garam dan meningkatkan konsumsi
                sayuran serta buah-buahan.</span>
        </li>
        <li class="flex gap-3">
            <span class="material-icons-outlined text-primary flex-shrink-0">check_circle</span>
            <span><strong>Manajemen Stres:</strong> Meditasi atau hobi yang menyenangkan membantu
                menurunkan tekanan darah.</span>
        </li>
    </ul>
    <div class="my-10 rounded-xl overflow-hidden">
        <img alt="Consultation with a cardiologist" class="w-full h-auto"
            data-alt="A doctor explaining heart health to a patient"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRt8k39mbc0qfK0kEFCP5x8TgRZEXYTW2utkTi_EAd3-Ac-h7TOs5O__mO38iDyi7nNA95TzZihOzu2DEVWnm-uzMziRZeEm7EGuwovlP_EsPYAO2j3a44_65PGbosBv0ELZjg09RrA4dA1YfkgwYpzvXeKyrhVZGdNpTY5SSuTUMn8NRwCAlsc8vyxOoPfelQBryJgyZMGYOt8D1bVeqPlBn9_GVTapZDMCxodMikhzjzQmlfRg_BS8ajufMvbIJ-hHcQGausc6Y" />
        <p class="text-sm text-center text-gray-500 mt-3 italic">Pemeriksaan rutin dengan spesialis
            jantung sangat disarankan setiap 6 bulan sekali.</p>
    </div>
    <p>
        Sebagai penutup, jangan abaikan gejala-gejala kecil seperti nyeri dada saat beraktivitas atau
        sesak napas yang tidak biasa. Segera konsultasikan kondisi kesehatan Anda ke fasilitas kesehatan
        terpercaya untuk deteksi dini.
    </p>
`;

export const articles: Article[] = [
    {
        id: 1,
        title: "In Malesuada Pellentesque Sodales Sit Vitae Viverra Maecenas A Tempor",
        slug: "in-malesuada-pellentesque",
        category: "Refreshing",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKPdTUmrUml78gDUsdHYRa3sFsEfQ-25Rb3RT0oCqamhIMXrHqKsbEl1NaYVNHQyovSGWM0Dd-qBj1oS7UGuEpoIGkY5-x_G2uzRWbYPmziDagJkYjfJUj0J7NBa3tFsXfI4kYBmXY6VPKiVxsznLAkhABHrxPGFx76w_qeM8spZ7iPPlpbCaRuDDUcQK_o8QQKxsBkcAfCe1RAlkdvSDBdeyCjLNp4Ct7gCzuA86ULlVd1lzYnfoj5kqSIKbUxXfzh5Nx7F7oI9s",
        date: "2024-10-24",
        content: dummyContent,
        author: {
            name: "dr. Siti Aminah, Sp.JP",
            role: "Spesialis Jantung",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "1,240",
        tags: ["#Kesehatan", "#Jantung", "#Lifestyle"]
    },
    {
        id: 2,
        title: "Et Nisl Enim At Ut Nisl Blandit Tortor Vulputate Aliquet Viverra",
        slug: "et-nisl-enim-at-ut",
        category: "Kesehatan",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0R6XfKzx6QmOSOiSsYig0CTsAIYQ-hBSmhX_JdZdPYqc5hZG39iHPoi1bxGy8-d-1731DdiiddEUbVhi8GMu1nDGe4ctm-6rb1CA9-u8-mlFlFznDMp9Z1mxB_wXG38wDccQL6r1iYCf0Keh_VyzIsYr6V0bD7qIzr16eOr7bfQrWHVZXxzwIvaHf2kQMZLM6QZPHDyaylaZVYPIeCG8ap28aQyPO_pf99LCE8oqYWGl3DiuaGlZruoQCEncelareFwgfyMOzbFI",
        date: "2024-10-23",
        content: dummyContent,
        author: {
            name: "dr. Budi Santoso, Sp.A",
            role: "Spesialis Anak",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "856",
        tags: ["#Anak", "#Kesehatan", "#TumbuhKembang"]
    },
    {
        id: 3,
        title: "Tortor Velit In Facilisis Dictum Sed Tristique Tellus Enim Condimentum",
        slug: "tortor-velit-in-facilisis",
        category: "Olahraga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoOqsKSBnixNkAEIKxRUorTRdHqf_-thGhSTG43yS7BmyhN5LeuzQP1RLI1NaTTkqWEUsj5Qh85DxG9Alr2IDgpf2sfTyKz8XhZv6N2c2_7ELoHCxi9vXBGdHVJ9DgF8gi9DuH6t4EW_NEsVWeOd0CuSWDkbsi-xVZqpSdPcFlhqdCmm4h2tCFwzetJ9yw9wPwxIgtzvYS3WikCWqqww60XFgdDnPibpItJlex_Sm6tD6pfAUZK0UMRHWT5cvmKJlG-P_8LaBV-dw",
        date: "2024-10-22",
        content: dummyContent,
        author: {
            name: "dr. Andi Wijaya, Sp.OT",
            role: "Spesialis Ortopedi",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "2,100",
        tags: ["#Olahraga", "#Fisik", "#Tips"]
    },
    {
        id: 4,
        title: "Eu Est Consectetur Cursus Quis Venenatis Interdum Convallis A Dignissim Arcu",
        slug: "eu-est-consectetur-cursus",
        category: "Parenting",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs-qZN3osjb5fAfQOCwdYjO28URIENG8g30Ac28DJiGbGlcS9XxWIPBJjO9tDTMVfi1zX5-oa10WIkvVh6Y3ylpwFCC6ullrEry2HEpwAOEgQAmTUvQeqMou_jNpIamIOJlcXRFOdtsNr7KII0c17-e7TQOgQUKPWzsMvNZblgbuR8fjQTLZur2icnn3ZUfzY1KzO30VThTzQJ9O0hoNRSigHWQW5UAh6mpuoJ4XtFGMIU6DkbQSn167n6jlh8Y3et8o9YaQ-hc5E",
        date: "2024-10-21",
        content: dummyContent,
        author: {
            name: "Psikolog Rina",
            role: "Psikolog Anak",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "930",
        tags: ["#Parenting", "#Psikologi", "#Keluarga"]
    },
    {
        id: 5,
        title: "Vitae Egestas Arcu Aliquet Nunc Pulvinar Sit Velit Faucibus",
        slug: "vitae-egestas-arcu-aliquet",
        category: "Kesehatan",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrGthXUsS1I8M3mNdOrpJ8g2ZVL7xKVbCC5vOfN7zNB_reQaAP-ng3DtelXo8O-TL9iK_DlDQRqHF_2jZyJglfMgzvE1A9n2eRE0i6EuGXn7vFDojwhYbGPdmfg0TSwIaYgCSI5kW5gTu3HWqhJhVVOelmwXRswxai4rmOcPQtxYmqQRNIRTgxvRSlPJz4l0W_uCD94MZiHUb2q8oYjgDeHuXS1CZEckgvNrw9gZyIq5plAhdRk9wkbTNpOjvi5G1fiLxmxvUUlpQ",
        date: "2024-10-20",
        content: dummyContent,
        author: {
            name: "dr. Eka",
            role: "Dokter Umum",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "450",
        tags: ["#Umum", "#Kesehatan"]
    },
    {
        id: 6,
        title: "Donec Semper Amet Consectetur A Nisi Aliquam Nulla Enim Malesuada",
        slug: "donec-semper-amet-consectetur",
        category: "Olahraga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW_95AZ8KOtgXcsvkhM8xnEJIWzt7JjQg1pZF2otyw_vaEg1aESJlegb9aLUsW7moZOUvKr0gmjUos6cKxurTbxzWoRS5F6N5CreGGbKB82LbuAiw11DBE0z5Tb626nP2ngihOI3kZtP5lJTmQEbpnpouSf_hsqsnM5vE8Qsl8R0XYl3OsGj31GuC2Wi4jGuBSFtX8ocbhySOXjOpnffRq3n9Wdsse6lDFvYidrjUL06s-qA5B5Pxu4n9B4voywNRsrWsPKg5Tp4",
        date: "2024-10-19",
        content: dummyContent,
        author: {
            name: "dr. Andi Wijaya, Sp.OT",
            role: "Spesialis Ortopedi",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "1,100",
        tags: ["#Olahraga", "#Fisik"]
    },
    {
        id: 7,
        title: "Mattis Velit Neque Augue Enim Felis",
        slug: "mattis-velit-neque-augue",
        category: "Kesehatan",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXP_ETW2EXoy7hqU-8iscdHPsvaexUwXE4IgG61y_7Y_i9SFN1QvZOI95UPZE_w6YPPk9DRTYKey5htZh8v_AHLFbxErUrFhO0nSUHuH0i8RyC1WQGTNAANDlwtNPX6RKVCvgI8rZbJz1yhgEmKRpq4BzhU9zrYFgEZ2AaPWR9i4u9TjavEqutNW7yE1xR4Lu-wRLrsUyUVWVsBWkQVnc44rh2P8kOKYhDx1P30qniZkQGSJpyEX0mwWomNcIRSjPEmfgq3gip-Q",
        date: "2024-10-18",
        content: dummyContent,
        author: {
            name: "dr. Siti Aminah, Sp.JP",
            role: "Spesialis Jantung",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "670",
        tags: ["#Jantung", "#Kesehatan"]
    },
    {
        id: 8,
        title: "Facilisis Mi Nisl Nunc Morbi Malesuada Neque Adipiscing Tortor Nunc Nisl Id",
        slug: "facilisis-mi-nisl-nunc",
        category: "Tips N Tricks",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkRnWBTMQ-CdLmvmNP9WE9axnuszsGW6dZXfyZne9CcW9_nyoI6ABXXPIP0K3pACiIBC_emc3TsYQG13QcIVEU1vVu4fRRSPABVZfvWGb-vQ5LgCMBJssC4MEqcysJpLax63bVumRzpZJwO2ETdV_JezRxSc1EL8Fnn8fwBUxyyCmDcSGsN0wgLLxS4wmZcbbuP16VeCFYrZKt56kcPXkqI4jM5NoMUGrUNi9gA72gjnX5ujdKDYLJckaJRqqIjCAd_O2NOIBHhG4",
        date: "2024-10-17",
        content: dummyContent,
        author: {
            name: "Admin",
            role: "Content Creator",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "3,500",
        tags: ["#Tips", "#Lifestyle"]
    },
    // Dummy data for pagination testing
    {
        id: 9,
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        slug: "lorem-ipsum-dolor",
        category: "Kesehatan",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKPdTUmrUml78gDUsdHYRa3sFsEfQ-25Rb3RT0oCqamhIMXrHqKsbEl1NaYVNHQyovSGWM0Dd-qBj1oS7UGuEpoIGkY5-x_G2uzRWbYPmziDagJkYjfJUj0J7NBa3tFsXfI4kYBmXY6VPKiVxsznLAkhABHrxPGFx76w_qeM8spZ7iPPlpbCaRuDDUcQK_o8QQKxsBkcAfCe1RAlkdvSDBdeyCjLNp4Ct7gCzuA86ULlVd1lzYnfoj5kqSIKbUxXfzh5Nx7F7oI9s",
        date: "2024-10-16",
        content: dummyContent,
        author: {
            name: "dr. Siti Aminah, Sp.JP",
            role: "Spesialis Jantung",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "120",
        tags: ["#Kesehatan", "#Umum"]
    },
    {
        id: 10,
        title: "Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore",
        slug: "sed-do-eiusmod",
        category: "Refreshing",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0R6XfKzx6QmOSOiSsYig0CTsAIYQ-hBSmhX_JdZdPYqc5hZG39iHPoi1bxGy8-d-1731DdiiddEUbVhi8GMu1nDGe4ctm-6rb1CA9-u8-mlFlFznDMp9Z1mxB_wXG38wDccQL6r1iYCf0Keh_VyzIsYr6V0bD7qIzr16eOr7bfQrWHVZXxzwIvaHf2kQMZLM6QZPHDyaylaZVYPIeCG8ap28aQyPO_pf99LCE8oqYWGl3DiuaGlZruoQCEncelareFwgfyMOzbFI",
        date: "2024-10-15",
        content: dummyContent,
        author: {
            name: "Admin",
            role: "Traveler",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTzNtRhyTysVXUw_Aw-K24_J2U8x-EIV5ip_QAHxVrHbStcYxvimBwy6f4nrcVzIGy6wgxJ370Wf8rcjNWIaB-em5W6AtSFEkQS6D1MEBd9aPjGVtZeUHB_AnxhUyvEj3EzjSJ6GDA1ArKD-XCURIwTfv0o2z42EbtfViTi2OPN5Ptfc29Mlvgt9RXiz7OBDKVxp1dza-5G_lxSXMb2sFsXZcKhD5kzNkmc93qy71Z5RnbwD2gBl7KreluIgCD-TbuXgzUFR9wI"
        },
        views: "1,500",
        tags: ["#Refreshing", "#Lifestyle"]
    }
];
