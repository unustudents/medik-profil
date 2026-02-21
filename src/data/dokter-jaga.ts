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
    image:
      "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1582719478688-4c00f0c2b3f3?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      { icon: "healing", label: "Bedah Umum" },
      { icon: "emergency", label: "Instalasi Gawat Darurat" },
    ],
    schedule: "00:30 - 02:00",
    location: "Lantai 1 / Ruang Melati",
  },
  {
    name: "Dr. Ahmad Fauzan Sp.PD",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      { icon: "pregnant_woman", label: "Obstetri & Ginekologi" },
      { icon: "child_friendly", label: "Poliklinik Kandungan" },
    ],
    schedule: "10:00 - 14:00",
    location: "Lantai 2 / Ruang Melati",
  },
  {
    name: "Dr. Budi Santoso Sp.JP",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1582719478688-4c00f0c2b3f3?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      { icon: "visibility", label: "Mata" },
      { icon: "remove_red_eye", label: "Poliklinik Mata" },
    ],
    schedule: "13:00 - 16:00",
    location: "Lantai 2 / Ruang Kenanga",
  },
  {
    name: "Dr. Hendra Wijaya Sp.THT",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      { icon: "child_care", label: "Anak" },
      { icon: "vaccines", label: "Poliklinik Anak" },
    ],
    schedule: "09:00 - 13:00",
    location: "Lantai 2 / Ruang Dahlia",
  },
];
