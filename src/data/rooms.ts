export interface Bed {
    number: number;
    isOccupied: boolean;
}

export interface Room {
    name: string;
    description: string;
    beds: Bed[];
}

export const rooms: Room[] = [
    {
        name: "Ruang Tulip",
        description: "(Ruang Khusus)",
        beds: [
            { number: 1, isOccupied: false },
            { number: 2, isOccupied: false },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: true },
            { number: 5, isOccupied: false },
            { number: 6, isOccupied: true },
            { number: 7, isOccupied: true },
            { number: 8, isOccupied: false },
        ],
    },
    {
        name: "Neonatus Incubator",
        description: "(Ruang Khusus)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang Neonatus",
        description: "(Ruang Khusus)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang Bersalin",
        description: "(Ruang Khusus)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang Aster",
        description: "(VVIP Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang Dahlia",
        description: "(VVIP Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: true },
            { number: 4, isOccupied: true },
        ],
    },
    {
        name: "Ruang Sakura",
        description: "(VVIP Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang Cempaka",
        description: "(VIP Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: true },
        ],
    },
    {
        name: "Ruang Eidelwis",
        description: "(VIP Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: true },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang Anyelir",
        description: "(VIP Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: true },
        ],
    },
    {
        name: "Ruang ICU VVIP",
        description: "(ICU Room)",
        beds: [
            { number: 1, isOccupied: false },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
        ],
    },
    {
        name: "Ruang ICU VIP",
        description: "(ICU Room)",
        beds: [
            { number: 1, isOccupied: true },
            { number: 2, isOccupied: true },
            { number: 3, isOccupied: false },
            { number: 4, isOccupied: false },
            { number: 5, isOccupied: false },
            { number: 6, isOccupied: false },
        ],
    },
];
