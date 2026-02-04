export interface DokterJaga {
    name: string;
    image: string;
    details: { icon: string; label: string }[];
    schedule: string;
    location: string;
    ext?: string;
}

export const todayDoctors: DokterJaga[] = [
    {
        name: "Dr Rahmat Shihabuddin Sp.OK",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrqDpNyN5qgvfn1KNA-Z-2B9zuVBufNdsUIy4pEnpv4ALiroKT6-57OSY4rDBTnhfwIRM_fYvGEvIwlu7B5aDIMqNfnjMwi8l-yimYEr6XTpgohb7zHpya2uJJVkXP8UJag6CA9nIio1Jw7HaKMv_nshhPxAdJFAHcrbZpBr3D_TzSk4KiLEPBY6E0Gbz3HXiZo-c2wKCKgAVyAeqfMkYO4i6YZEDi6fzOI_Vrgyj8B2DFyn9RVps-RP0t89HKLRQ5QYsSPQqtXrk",
        details: [
            { icon: "medical_services", label: "Pediatric" },
            { icon: "assignment", label: "Poliklinik Gigi" },
            { icon: "badge", label: "Kepala Apoteker" },
        ],
        schedule: "08:30 - 11:30",
        location: "Lantai 2 / Ruang Mawar",
        ext: "12",
    },
    {
        name: "Dr Fira Bella Iskandar Sp.AN",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAHo-T_Jp37dXrTHXUYpLA65xb9J1Yl5KcTtEoYR-2Vspg40hSeNrpxJhDflwUxQf5g-1XQWlUFNOnD7VgDPqafWCXi4SOSIGhsyTP6hpmTobL-4TnqRARLNiHXf3g-th-UbRfY6qJsXT48mxgkELVYJyv-a-kJi1wf_LG23W8YghHoQE8tebtJFTkOGwMCzDIA-cHTmhMrt98lyoo-hH65cBC-lKhFjll5Jt0vtrb6aF7TQni64uc6zKtO8zqyPzL3YVaZ8Bi8hU",
        details: [
            { icon: "spa", label: "Kulit Dan Kelamin" },
            { icon: "child_care", label: "Poliklinik Anak" },
            { icon: "admin_panel_settings", label: "Direktur Utama" },
        ],
        schedule: "04:00 - 10:00",
        location: "Lantai 2 / Ruang Mawar",
    },
    {
        name: "Dr Intan Ayu Ratnasari Sp.KK",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAdQSM6UwHHJpVIaLEbrGr1ne5iYFwR2-qZOcCvOCYxY1EpT0ZEsGIhIiqsbjm36IFr423H_kqbJ-XZv12bHkqkWaOevCkq-RHwfCKur9F1zet-LvDoPshO7JUO_CtVamQapf_Kc4vE1i-tESfkZIsiFiEh8qyOTw7CTsT7FGhc4D3jWOLFT2mZstst37O47g4XtdrYiYuDb97shxwbGy5MShtgzw9CUwSTffXh70YSSioYj_hA94L76tZKqTLkVqKzBjfrPorEyI",
        details: [
            { icon: "spa", label: "Kulit Dan Kelamin" },
            { icon: "monitor_heart", label: "Poliklinik Kesehatan Dalam" },
            { icon: "admin_panel_settings", label: "Direktur Utama" },
        ],
        schedule: "04:00 - 09:30",
        location: "Lantai 1 / Ruang Anggrek",
    },
    {
        name: "Dr. Marlon Barker",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZkOkRFV9Ez_CLT2CD65pUAbRwJwfAT4JbwrYmGztWjcpEeOoQg6eyml9i5G1ODi2awF_NePcm5UuIy8Ysc5Srfz85RTSQ1_otJ0FPNO70XE1uu6qw5s2lHcXH6dDDgo4wsqq251IRPwajzy01QbGDrfZL9SPd91ZyadXRrFjHuEir-Cy_GBjvSVUcZS6SzPbjjRGwUlVeeouTFEiFqtkiMhqjZXY1V07YTCWYYUPzemYtogcbinPchZK9N7h3MnZV3cdbixQHYy8",
        details: [
            { icon: "healing", label: "Bedah Umum" },
            { icon: "emergency", label: "Instalasi Gawat Darurat" },
        ],
        schedule: "00:30 - 02:00",
        location: "Lantai 1 / Ruang Melati",
    },
    {
        name: "Dr. Ahmad Fauzan Sp.PD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrqDpNyN5qgvfn1KNA-Z-2B9zuVBufNdsUIy4pEnpv4ALiroKT6-57OSY4rDBTnhfwIRM_fYvGEvIwlu7B5aDIMqNfnjMwi8l-yimYEr6XTpgohb7zHpya2uJJVkXP8UJag6CA9nIio1Jw7HaKMv_nshhPxAdJFAHcrbZpBr3D_TzSk4KiLEPBY6E0Gbz3HXiZo-c2wKCKgAVyAeqfMkYO4i6YZEDi6fzOI_Vrgyj8B2DFyn9RVps-RP0t89HKLRQ5QYsSPQqtXrk",
        details: [
            { icon: "monitor_heart", label: "Penyakit Dalam" },
            { icon: "local_hospital", label: "Poliklinik Umum" },
        ],
        schedule: "09:00 - 12:00",
        location: "Lantai 1 / Ruang Dahlia",
        ext: "15",
    },
    {
        name: "Dr. Siti Aminah Sp.OG",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAHo-T_Jp37dXrTHXUYpLA65xb9J1Yl5KcTtEoYR-2Vspg40hSeNrpxJhDflwUxQf5g-1XQWlUFNOnD7VgDPqafWCXi4SOSIGhsyTP6hpmTobL-4TnqRARLNiHXf3g-th-UbRfY6qJsXT48mxgkELVYJyv-a-kJi1wf_LG23W8YghHoQE8tebtJFTkOGwMCzDIA-cHTmhMrt98lyoo-hH65cBC-lKhFjll5Jt0vtrb6aF7TQni64uc6zKtO8zqyPzL3YVaZ8Bi8hU",
        details: [
            { icon: "pregnant_woman", label: "Obstetri & Ginekologi" },
            { icon: "child_friendly", label: "Poliklinik Kandungan" },
        ],
        schedule: "10:00 - 14:00",
        location: "Lantai 2 / Ruang Melati",
    },
    {
        name: "Dr. Budi Santoso Sp.JP",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAdQSM6UwHHJpVIaLEbrGr1ne5iYFwR2-qZOcCvOCYxY1EpT0ZEsGIhIiqsbjm36IFr423H_kqbJ-XZv12bHkqkWaOevCkq-RHwfCKur9F1zet-LvDoPshO7JUO_CtVamQapf_Kc4vE1i-tESfkZIsiFiEh8qyOTw7CTsT7FGhc4D3jWOLFT2mZstst37O47g4XtdrYiYuDb97shxwbGy5MShtgzw9CUwSTffXh70YSSioYj_hA94L76tZKqTLkVqKzBjfrPorEyI",
        details: [
            { icon: "favorite", label: "Jantung & Pembuluh Darah" },
            { icon: "monitor_heart", label: "Poliklinik Jantung" },
        ],
        schedule: "08:00 - 11:00",
        location: "Lantai 3 / Ruang Anggrek",
        ext: "21",
    },
    {
        name: "Dr. Maya Putri Sp.M",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZkOkRFV9Ez_CLT2CD65pUAbRwJwfAT4JbwrYmGztWjcpEeOoQg6eyml9i5G1ODi2awF_NePcm5UuIy8Ysc5Srfz85RTSQ1_otJ0FPNO70XE1uu6qw5s2lHcXH6dDDgo4wsqq251IRPwajzy01QbGDrfZL9SPd91ZyadXRrFjHuEir-Cy_GBjvSVUcZS6SzPbjjRGwUlVeeouTFEiFqtkiMhqjZXY1V07YTCWYYUPzemYtogcbinPchZK9N7h3MnZV3cdbixQHYy8",
        details: [
            { icon: "visibility", label: "Mata" },
            { icon: "remove_red_eye", label: "Poliklinik Mata" },
        ],
        schedule: "13:00 - 16:00",
        location: "Lantai 2 / Ruang Kenanga",
    },
    {
        name: "Dr. Hendra Wijaya Sp.THT",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrqDpNyN5qgvfn1KNA-Z-2B9zuVBufNdsUIy4pEnpv4ALiroKT6-57OSY4rDBTnhfwIRM_fYvGEvIwlu7B5aDIMqNfnjMwi8l-yimYEr6XTpgohb7zHpya2uJJVkXP8UJag6CA9nIio1Jw7HaKMv_nshhPxAdJFAHcrbZpBr3D_TzSk4KiLEPBY6E0Gbz3HXiZo-c2wKCKgAVyAeqfMkYO4i6YZEDi6fzOI_Vrgyj8B2DFyn9RVps-RP0t89HKLRQ5QYsSPQqtXrk",
        details: [
            { icon: "hearing", label: "Telinga Hidung Tenggorokan" },
            { icon: "medical_services", label: "Poliklinik THT" },
        ],
        schedule: "14:00 - 17:00",
        location: "Lantai 1 / Ruang Mawar",
        ext: "18",
    },
    {
        name: "Dr. Rina Kartika Sp.A",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAHo-T_Jp37dXrTHXUYpLA65xb9J1Yl5KcTtEoYR-2Vspg40hSeNrpxJhDflwUxQf5g-1XQWlUFNOnD7VgDPqafWCXi4SOSIGhsyTP6hpmTobL-4TnqRARLNiHXf3g-th-UbRfY6qJsXT48mxgkELVYJyv-a-kJi1wf_LG23W8YghHoQE8tebtJFTkOGwMCzDIA-cHTmhMrt98lyoo-hH65cBC-lKhFjll5Jt0vtrb6aF7TQni64uc6zKtO8zqyPzL3YVaZ8Bi8hU",
        details: [
            { icon: "child_care", label: "Anak" },
            { icon: "vaccines", label: "Poliklinik Anak" },
        ],
        schedule: "09:00 - 13:00",
        location: "Lantai 2 / Ruang Dahlia",
    },
];