export interface Bed {
    number: number;
    isOccupied: boolean;
}

export interface Room {
    name: string;
    description: string;
    beds: Bed[];
    price: number;
    image: string;
    type: string;
    capacity: string;
    facilities: string[];
}

export type RoomSummary = Omit<Room, "beds">;

const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAKPdTUmrUml78gDUsdHYRa3sFsEfQ-25Rb3RT0oCqamhIMXrHqKsbEl1NaYVNHQyovSGWM0Dd-qBj1oS7UGuEpoIGkY5-x_G2uzRWbYPmziDagJkYjfJUj0J7NBa3tFsXfI4kYBmXY6VPKiVxsznLAkhABHrxPGFx76w_qeM8spZ7iPPlpbCaRuDDUcQK_o8QQKxsBkcAfCe1RAlkdvSDBdeyCjLNp4Ct7gCzuA86ULlVd1lzYnfoj5kqSIKbUxXfzh5Nx7F7oI9s",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0R6XfKzx6QmOSOiSsYig0CTsAIYQ-hBSmhX_JdZdPYqc5hZG39iHPoi1bxGy8-d-1731DdiiddEUbVhi8GMu1nDGe4ctm-6rb1CA9-u8-mlFlFznDMp9Z1mxB_wXG38wDccQL6r1iYCf0Keh_VyzIsYr6V0bD7qIzr16eOr7bfQrWHVZXxzwIvaHf2kQMZLM6QZPHDyaylaZVYPIeCG8ap28aQyPO_pf99LCE8oqYWGl3DiuaGlZruoQCEncelareFwgfyMOzbFI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDoOqsKSBnixNkAEIKxRUorTRdHqf_-thGhSTG43yS7BmyhN5LeuzQP1RLI1NaTTkqWEUsj5Qh85DxG9Alr2IDgpf2sfTyKz8XhZv6N2c2_7ELoHCxi9vXBGdHVJ9DgF8gi9DuH6t4EW_NEsVWeOd0CuSWDkbsi-xVZqpSdPcFlhqdCmm4h2tCFwzetJ9yw9wPwxIgtzvYS3WikCWqqww60XFgdDnPibpItJlex_Sm6tD6pfAUZK0UMRHWT5cvmKJlG-P_8LaBV-dw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCs-qZN3osjb5fAfQOCwdYjO28URIENG8g30Ac28DJiGbGlcS9XxWIPBJjO9tDTMVfi1zX5-oa10WIkvVh6Y3ylpwFCC6ullrEry2HEpwAOEgQAmTUvQeqMou_jNpIamIOJlcXRFOdtsNr7KII0c17-e7TQOgQUKPWzsMvNZblgbuR8fjQTLZur2icnn3ZUfzY1KzO30VThTzQJ9O0hoNRSigHWQW5UAh6mpuoJ4XtFGMIU6DkbQSn167n6jlh8Y3et8o9YaQ-hc5E",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBrGthXUsS1I8M3mNdOrpJ8g2ZVL7xKVbCC5vOfN7zNB_reQaAP-ng3DtelXo8O-TL9iK_DlDQRqHF_2jZyJglfMgzvE1A9n2eRE0i6EuGXn7vFDojwhYbGPdmfg0TSwIaYgCSI5kW5gTu3HWqhJhVVOelmwXRswxai4rmOcPQtxYmqQRNIRTgxvRSlPJz4l0W_uCD94MZiHUb2q8oYjgDeHuXS1CZEckgvNrw9gZyIq5plAhdRk9wkbTNpOjvi5G1fiLxmxvUUlpQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW_95AZ8KOtgXcsvkhM8xnEJIWzt7JjQg1pZF2otyw_vaEg1aESJlegb9aLUsW7moZOUvKr0gmjUos6cKxurTbxzWoRS5F6N5CreGGbKB82LbuAiw11DBE0z5Tb626nP2ngihOI3kZtP5lJTmQEbpnpouSf_hsqsnM5vE8Qsl8R0XYl3OsGj31GuC2Wi4jGuBSFtX8ocbhySOXjOpnffRq3n9Wdsse6lDFvYidrjUL06s-qA5B5Pxu4n9B4voywNRsrWsPKg5Tp4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXP_ETW2EXoy7hqU-8iscdHPsvaexUwXE4IgG61y_7Y_i9SFN1QvZOI95UPZE_w6YPPk9DRTYKey5htZh8v_AHLFbxErUrFhO0nSUHuH0i8RyC1WQGTNAANDlwtNPX6RKVCvgI8rZbJz1yhgEmKRpq4BzhU9zrYFgEZ2AaPWR9i4u9TjavEqutNW7yE1xR4Lu-wRLrsUyUVWVsBWkQVnc44rh2P8kOKYhDx1P30qniZkQGSJpyEX0mwWomNcIRSjPEmfgq3gip-Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCkRnWBTMQ-CdLmvmNP9WE9axnuszsGW6dZXfyZne9CcW9_nyoI6ABXXPIP0K3pACiIBC_emc3TsYQG13QcIVEU1vVu4fRRSPABVZfvWGb-vQ5LgCMBJssC4MEqcysJpLax63bVumRzpZJwO2ETdV_JezRxSc1EL8Fnn8fwBUxyyCmDcSGsN0wgLLxS4wmZcbbuP16VeCFYrZKt56kcPXkqI4jM5NoMUGrUNi9gA72gjnX5ujdKDYLJckaJRqqIjCAd_O2NOIBHhG4"
];

export const rooms: Room[] = [
    {
        name: "Ruang Tulip",
        description: "(Ruang Khusus)",
        type: "Ruang Khusus",
        price: 328000,
        capacity: "8 Set",
        image: images[0],
        facilities: ["Air Conditioner", "Kamar Mandi", "Televisi", "Toilet", "Nurse Call", "Lemari Pakaian"],
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
        type: "Ruang Khusus",
        price: 600000,
        capacity: "4 Set",
        image: images[1],
        facilities: ["Air Conditioner", "Kamar Mandi", "Room Alarm", "Nurse Call", "Toilet"],
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
        type: "Ruang Khusus",
        price: 300000,
        capacity: "4 Set",
        image: images[2],
        facilities: ["Air Conditioner", "Kamar Mandi", "Room Alarm", "Nurse Call", "Wi-Fi", "Toilet"],
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
        type: "Ruang Khusus",
        price: 300000,
        capacity: "4 Set",
        image: images[3],
        facilities: ["Air Conditioner", "Kamar Mandi", "Room Alarm", "Televisi", "Toilet", "Nurse Call"],
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
        type: "VVIP Room",
        price: 4500000,
        capacity: "4 Set",
        image: images[4],
        facilities: ["Air Conditioner", "Kamar Mandi", "Set Sofa", "Televisi", "Toilet", "Kulkas", "Wi-Fi"],
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
        type: "VVIP Room",
        price: 4500000,
        capacity: "4 Set",
        image: images[5],
        facilities: ["Air Conditioner", "Kamar Mandi", "Set Sofa", "Televisi", "Kulkas", "Nurse Call", "Lemari Pakaian"],
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
        type: "VVIP Room",
        price: 2500000,
        capacity: "4 Set",
        image: images[6],
        facilities: ["Air Conditioner", "Kamar Mandi", "Set Sofa", "Televisi", "Toilet", "Wi-Fi"],
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
        type: "VIP Room",
        price: 2500000,
        capacity: "4 Set",
        image: images[7],
        facilities: ["Air Conditioner", "Kamar Mandi", "Set Sofa", "Televisi", "Kulkas", "Nurse Call"],
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
        type: "VIP Room",
        price: 2500000,
        capacity: "4 Set",
        image: images[0], // Reuse images
        facilities: ["Air Conditioner", "Kamar Mandi", "Set Sofa", "Televisi", "Toilet", "Kursi Tamu"],
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
        type: "VIP Room",
        price: 2500000,
        capacity: "4 Set",
        image: images[1],
        facilities: ["Air Conditioner", "Kamar Mandi", "Televisi", "Toilet", "Nurse Call", "Meja Makan", "Kursi Tamu"],
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
        type: "ICU Room",
        price: 5000000, // Estimated pricing since it wasn't in room-rates
        capacity: "4 Set",
        image: images[2],
        facilities: ["Air Conditioner", "Kamar Mandi", "Room Alarm", "Toilet", "Nurse Call"],
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
        type: "ICU Room",
        price: 3500000, // Estimated pricing
        capacity: "6 Set",
        image: images[3],
        facilities: ["Air Conditioner", "Kamar Mandi", "Room Alarm", "Toilet", "Nurse Call", "Wi-Fi"],
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
