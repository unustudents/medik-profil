export interface Doctor {
    id: number;
    name: string;
    specialist: string;
    image: string;
    schedule: {
        monday?: string;
        tuesday?: string;
        wednesday?: string;
        thursday?: string;
        friday?: string;
        saturday?: string;
        sunday?: string;
    };
    color: 'primary' | 'blue' | 'pink' | 'purple' | 'orange' | 'emerald' | 'rose' | 'amber' | 'teal' | 'indigo' | 'cyan';
}

export const doctors: Doctor[] = [
    {
        id: 1,
        name: "Dr Fira Bella Iskandar Sp.AN",
        specialist: "Kulit & Kelamin",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXaf7CEQ2YVTHRrQorheTKdKVSzJOCk2gv5b8MVyoLzoiN7GT3Y4vF5g09LVNG4PsWeX5vMxtepIxV_anJwtYRPlZWhW6yjKe887r50DJQ5qOeouSXojwNBw4QFfGM_VTUVVHsXjWHzdhIb1f1VbaFvgyng2OiZacqxj7GRRi5D4gHWzncICalGVW39DkQgrKg-ERBz6v8Ig7ogmUPh8AhdlCZgDYNXnim76xf-MG0-Cs-19kRKClgO8tLU1iL4a0kqeduFkKa0-E",
        schedule: {
            monday: "04:00 - 10:00",
            tuesday: "04:00 - 09:00",
            friday: "13:00 - 17:00",
            sunday: "10:00 - 17:00"
        },
        color: "primary"
    },
    {
        id: 2,
        name: "Dr Intan Ayu Ratnasari Sp.KK",
        specialist: "Kulit & Kelamin",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp_aHblgUMI6F7P44f3ImlxisXj-rdRjdiUxlJ0VxRgpJH2eh59bmdtz907yw4oPUqhTG-eW9SExu3_ixDANGmfzDlb_6gliX1_LRSrYXXDf-URVGOpXnlyaCzHJWua0PVqUJHgFG8WhESy6nkzFwWujpx_N6Ju-PRXvvwk-3Yhyo7OtnJe4YUXZ4M4plOVm_oeWnGmaKzKxN3yi7TABrG0Q_PHeMiWtoLqHW94s7ONpS7F7sEJDH2fwZOncKOZloFX5bUsWENNiA",
        schedule: {
            monday: "04:00 - 09:30",
            tuesday: "11:00 - 16:00",
            wednesday: "11:00 - 16:00",
            friday: "18:00 - 22:00",
            saturday: "20:00 - 22:00"
        },
        color: "primary"
    },
    {
        id: 3,
        name: "Dr Rahmat Shihabuddin Sp.OK",
        specialist: "Pediatrik",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG8eNLOWj98ww50vdnR3yX7AwcMeMcOCG4rHw35Zy9x-qOUatbnEU7psGR42euwsjXaa8OlOTETN_kmLsB0CBMsJP28p-EwLztdbHQtLTtBFG5OORyTeiEqCvs5kRb4ssqI-4024AWNkBZyRvPEV-FbYTAgGP8gNRPlHHAeaGizfCVRap2ABEfIF0nyknlv1gfU4IWlZCcyIM_RCI67_4mm6g0Wlow2uGBNYwFzAZdD1CncHrQTGXE-KbKLpXKDfWIHemq2KFfkIw",
        schedule: {
            monday: "08:30 - 11:30",
            tuesday: "10:00 - 15:00",
            wednesday: "13:00 - 17:00",
            thursday: "13:00 - 17:00",
            friday: "10:00 - 14:00",
            saturday: "08:00 - 14:00",
            sunday: "08:30 - 14:00"
        },
        color: "primary"
    },
    {
        id: 4,
        name: "Dr Stevanie Miller Sp.Og",
        specialist: "Bedah Syaraf",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtbi1ugkJ8mU6f801icEyvgeZLPp6p3FszuWkmOqC79fm5OxBDsePRdatBmDte2XMUdw3gCsoki6q_R6mREGphpQLbz-OkwAG7cHJA2M36LboWNEqu3u6mK_bbRR7-jo4HGxvyXPaqqkC1kvlRxzbv6jVp9BYe1SXOfZVfZBr10_z2zZT7Q0jswCEQKPsehSShaSlk5e3Dhih4Tdt80hfHFmZRtVh6QM0jKe8v_9-aPs5Q0BwDgzHL3v2LfelomYjo7Zu9_KV30l4",
        schedule: {
            tuesday: "04:30 - 09:00",
            thursday: "04:30 - 09:00",
            friday: "10:00 - 13:00",
            sunday: "10:00 - 13:00"
        },
        color: "primary"
    },
    {
        id: 5,
        name: "Dr Wijaya Kusuma Sp.BA",
        specialist: "Spesialis Anak",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMoSJb5TLpFciEgwtuLekjBiN13uuPq-HiplvnWhKmR5Z1kkO8X-oFbUNThUou8S9BAFYNYMo3evW4GBzJPwzt65jNrr2_dIER6Fa8BSMPshx6BeebuaWpFh4phYBu3ouT0whJYF5XnExiERQm_4UwBxv2aGiC0G6g9LY4yM_O8NqCu80VfZZkIWQnwVP69zCpYqfWXJnGQ3iWdElIDlfsP2FflWh4khim0iYsgnZfJkhZxgN24wtdvZ1bdD3_Xig6KqAor7ejOsU",
        schedule: {
            wednesday: "20:00 - 24:00",
            thursday: "20:00 - 24:00",
            saturday: "10:30 - 14:00",
            sunday: "10:30 - 14:00"
        },
        color: "primary"
    }
];

// Generate more dummy data to reach >30 items
const specialists = ["Penyakit Dalam", "Jantung", "Mata", "THT", "Saraf", "Gigi"];
const names = ["Dr. Andi", "Dr. Budi", "Dr. Citra", "Dr. Dedi", "Dr. Eka", "Dr. Fajar"];
const colors: Doctor['color'][] = ['blue', 'pink', 'purple', 'orange', 'emerald', 'rose', 'amber', 'teal', 'indigo', 'cyan'];

for (let i = 6; i <= 35; i++) {
    const randomSpecialist = specialists[Math.floor(Math.random() * specialists.length)];
    const randomName = names[Math.floor(Math.random() * names.length)] + " " + i;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    doctors.push({
        id: i,
        name: randomName,
        specialist: randomSpecialist,
        image: `https://ui-avatars.com/api/?name=${randomName}&background=random`,
        schedule: {
            monday: Math.random() > 0.5 ? "08:00 - 12:00" : undefined,
            wednesday: Math.random() > 0.5 ? "13:00 - 16:00" : undefined,
            jumat: Math.random() > 0.5 ? "09:00 - 11:00" : undefined
        } as any,
        color: randomColor
    });
}
