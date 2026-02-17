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
        image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1592800273800-7c4f8c1b2c5f?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1582719478688-4c00f0c2b3f3?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
