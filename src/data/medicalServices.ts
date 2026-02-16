export interface MedicalService {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const medicalServices: MedicalService[] = [
  {
    id: 1,
    title: "Poliklinik Kesehatan THT",
    description: "Pelayanan kesehatan telinga, hidung, dan tenggorokan dengan peralatan modern dan dokter spesialis berpengalaman.",
    icon: "hearing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmyaAs-eUzLN-Bt6q66z6wyPa9DsUL35dDgjaX5KHd_EwPY6oidO_7UXlbrNwXwijZroYybboghaXiOGRQ_jU3z746xiXzgmLP5wnfKupWZteDBCM6GqFRBcQ_tmCxVXhsuD2ZK5jskAjv_kgEYE8jfkQk4uIwfVUU2dhAKDmvd9rpiV-DzyZrxOvKmxg9oJsrKFgD4TQ8EMIeQuM5qWPanbBOqgCGILvpv__lbtIc1fNbZG51_9bYBGn8tUxAs6RE8kX9X-0mSw"
  },
  {
    id: 2,
    title: "Poliklinik Jantung & Hati",
    description: "Layanan pemeriksaan dan perawatan jantung dengan teknologi kardiologi terkini untuk kesehatan jantung optimal.",
    icon: "favorite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqQrmsNmdYH9JBdXAzE-Rj7L3qStxrojuCIdUpTxXU2MTc7VgeURalpAEnx-8Y1hKKVRpimGDnFIKB02kZorgSMZld9vCN7GhWHnF_0j-aUW1twKMPGo7cQTmLjsdU5i7seFBfn0xITIXRnq44qrED7oBNISufcRv-W_v_QwSSXUBIjDRxpfnn-W73XmB9PRmsyyUJ9DkITNOym8R6F1pJlRfGA3KEQK4II2O8QSB2eangRabmcaR_X-BOA_kZTABrrqo44CCywPM"
  },
  {
    id: 3,
    title: "Poliklinik Spesialis Kandungan",
    description: "Layanan kesehatan ibu dan anak dengan dokter spesialis kandungan yang berpengalaman menangani berbagai kasus.",
    icon: "child_care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQkwADZpGv8dCxF9MtsHpiqNWa57F-fq7KESw0McJb31TnyE5PukVj-t4CdKJVIwYBhvhxY4eYKYjXGK1aH40-pgRRcknsbIlUKcBIJkBD1Fn5R7eUkZ7L1qkPBvEgPkdGt5l3teJeZDZ7jrAnTTMSXjXAMJQX0XIa_MCUyreQrz3NsgXyYExQqq12aymIMoI0L40eyqp-54kB8QcA-9mvi37ctSBlFzvb8RKRFlhCNHZj4MrT4rVMYwkEM5r3kDPzSWzfDaY3Ws"
  },
  {
    id: 4,
    title: "Poliklinik Gigi & Mulut",
    description: "Perawatan gigi dan mulut lengkap mulai dari pemeriksaan rutin hingga tindakan bedah dengan peralatan modern.",
    icon: "sentiment_satisfied",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
  },
  {
    id: 5,
    title: "Poliklinik Mata",
    description: "Pelayanan kesehatan mata dengan teknologi pemeriksaan terkini dan dokter spesialis mata berpengalaman.",
    icon: "visibility",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&q=80"
  },
  {
    id: 6,
    title: "Poliklinik Paru",
    description: "Layanan diagnosis dan pengobatan penyakit paru-paru dengan peralatan medis berteknologi tinggi.",
    icon: "air",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
  },
  {
    id: 7,
    title: "Poliklinik Anak",
    description: "Pelayanan kesehatan anak yang ramah dengan dokter spesialis anak yang berpengalaman menangani berbagai kondisi.",
    icon: "child_friendly",
    image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80"
  },
  {
    id: 8,
    title: "Poliklinik Bedah",
    description: "Layanan bedah umum dengan tim bedah profesional dan ruang operasi berstandar internasional.",
    icon: "medical_services",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
  },
  {
    id: 9,
    title: "Poliklinik Saraf",
    description: "Diagnosis dan pengobatan gangguan sistem saraf dengan dokter spesialis neurologi berpengalaman.",
    icon: "psychology",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
  },
  {
    id: 10,
    title: "Poliklinik Kulit & Kelamin",
    description: "Perawatan kesehatan kulit dan penyakit kelamin dengan pendekatan medis yang komprehensif.",
    icon: "healing",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
  },
  {
    id: 11,
    title: "Poliklinik Orthopedi",
    description: "Layanan kesehatan tulang dan sendi dengan dokter spesialis ortopedi dan fisioterapi profesional.",
    icon: "accessibility_new",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
  },
  {
    id: 12,
    title: "Poliklinik Urologi",
    description: "Pelayanan kesehatan sistem kemih dengan peralatan diagnostik modern dan tim medis berpengalaman.",
    icon: "water_drop",
    image: "https://images.unsplash.com/photo-1666214280577-909dd1734997?w=800&q=80"
  }
];
