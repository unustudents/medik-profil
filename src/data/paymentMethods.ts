export interface PaymentMethod {
    name: string;
    type: 'image' | 'html';
    image?: string;
    htmlContent?: string;
}

export const paymentMethods: PaymentMethod[] = [
    // New Image-based methods (10 items)
    {
        name: "GoPay",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg"
    },
    {
        name: "OVO",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
    },
    {
        name: "DANA",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg"
    },
    {
        name: "LinkAja",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/85/LinkAja.svg"
    },
    {
        name: "ShopeePay",
        type: "image",
        image: "https://images.archbee.com/ZHvSjR5ZrsoxwKbJa3xmo/v7Kr5v-rzALYQ5u4zT4Gi_shopeepaylogoorangehorizontal.png?format=webp"
    },
    {
        name: "Bank Mandiri",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
    },
    {
        name: "BNI",
        type: "image",
        image: "https://zonalogo.com/og/logo-bank-bni.png"
    },
    {
        name: "Bank Central Asia",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
    },
    {
        name: "QRIS",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg"
    },
    {
        name: "Visa",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
    },
    {
        name: "GoPay",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg"
    },
    {
        name: "OVO",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
    },
    {
        name: "DANA",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg"
    },
    {
        name: "LinkAja",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/85/LinkAja.svg"
    },
    {
        name: "ShopeePay",
        type: "image",
        image: "https://images.archbee.com/ZHvSjR5ZrsoxwKbJa3xmo/v7Kr5v-rzALYQ5u4zT4Gi_shopeepaylogoorangehorizontal.png?format=webp"
    },
    {
        name: "Bank Mandiri",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
    },
    {
        name: "BNI",
        type: "image",
        image: "https://zonalogo.com/og/logo-bank-bni.png"
    },
    {
        name: "Bank Central Asia",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
    },
    {
        name: "QRIS",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg"
    },
    {
        name: "Visa",
        type: "image",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
    }
];
