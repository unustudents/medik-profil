export interface RoomRate {
    name: string;
    price: number;
    image: string;
    type: string;
    capacity: string;
}

export const roomRates: RoomRate[] = [
    ...Array.from({ length: 20 }).map((_, index) => {
        const types = [
            { name: "Ruang Tulip", type: "Ruang Khusus", cap: "8 Set", price: 328000 },
            { name: "Neonatus Incubator", type: "Ruang Khusus", cap: "4 Set", price: 600000 },
            { name: "Ruang Neonatus", type: "Ruang Khusus", cap: "4 Set", price: 300000 },
            { name: "Ruang Bersalin", type: "Ruang Khusus", cap: "4 Set", price: 300000 },
            { name: "Ruang Aster", type: "VVIP Room", cap: "4 Set", price: 4500000 },
            { name: "Ruang Dahlia", type: "VVIP Room", cap: "4 Set", price: 4500000 },
            { name: "Ruang Sakura", type: "VVIP Room", cap: "4 Set", price: 2500000 },
            { name: "Ruang Cempaka", type: "VIP Room", cap: "4 Set", price: 2500000 },
        ];

        // Cycle through types to generate 30 items
        const template = types[index % types.length];

        // Add a suffix to the name if it's a generated duplicate to make it slightly unique or just keep it as is
        // The user asked for 30 dummy items, repeating is fine.

        return {
            name: `${template.name} ${Math.floor(index / types.length) + 1}`,
            price: template.price,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKPdTUmrUml78gDUsdHYRa3sFsEfQ-25Rb3RT0oCqamhIMXrHqKsbEl1NaYVNHQyovSGWM0Dd-qBj1oS7UGuEpoIGkY5-x_G2uzRWbYPmziDagJkYjfJUj0J7NBa3tFsXfI4kYBmXY6VPKiVxsznLAkhABHrxPGFx76w_qeM8spZ7iPPlpbCaRuDDUcQK_o8QQKxsBkcAfCe1RAlkdvSDBdeyCjLNp4Ct7gCzuA86ULlVd1lzYnfoj5kqSIKbUxXfzh5Nx7F7oI9s", // Using a placeholder image for all or rotating if we had more
            type: template.type,
            capacity: template.cap
        };
    })
];

// Fix images for variety based on the HTML provided
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

roomRates.forEach((room, index) => {
    room.image = images[index % images.length];
});
