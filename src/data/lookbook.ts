export const TOTAL_PAGES = 16;

export const TOC_ITEMS = [
  { title: "01. Cover & Executive Edition", page: 1 },
  { title: "02. Table of Contents & Welcome", page: 2 },
  { title: "03. Brand Story & Timeless Vision", page: 3 },
  { title: "04. 4 Pillars of Excellence", page: 4 },
  { title: "05. Signature Aesthetics Blueprints", page: 5 },
  { title: "06. Curated Venue Partners", page: 6 },
  { title: "07. Premium Vendors Directory", page: 7 },
  { title: "08. Editorial Gallery Showcase", page: 8 },
  { title: "09. Wedding Details & Inclusions", page: 9 },
  { title: "10. Paket: The Intimate Journey", page: 10 },
  { title: "11. Paket: The Royal Romance", page: 11 },
  { title: "12. Paket: The Imperial Luxury", page: 12 },
  { title: "13. Expanded À La Carte Add-ons", page: 13 },
  { title: "14. Booking Process & Terms", page: 14 },
  { title: "15. Interactive Budget Calculator", page: 15 },
  { title: "16. Back Cover & Studio Contact", page: 16 },
] as const;

export const PILLARS = [
  {
    icon: "user-tie",
    title: "1. Dedicated Wedding Manager",
    desc: "1 Kontak utama pendampingan dari H-180 hingga D-Day untuk memastikan seluruh detail alur kerja berjalan terstruktur.",
  },
  {
    icon: "gem",
    title: "2. Curated Premium Vendors",
    desc: "Akses ke jaringan vendor dekorasi, catering, MUA & dokumentasi terbaik dengan standar kualitas yang sudah teruji.",
  },
  {
    icon: "palette",
    title: "3. Tailored Concept & Moodboard",
    desc: "Konsep visual, tema dekorasi, & rundown acara yang dipersonalisasi khusus sesuai dengan impian dan karakter pasangan.",
  },
  {
    icon: "chart-line",
    title: "4. Real-time Budgeting & Timeline",
    desc: "Transparansi anggaran real-time dan tracking alur kerja berkala sehingga perencanaan berjalan bebas stres.",
  },
] as const;

export const AESTHETICS = [
  {
    label: "MIDNIGHT & GOLD",
    title: "Midnight & Champagne Gold",
    desc: "Nuansa kemewahan ballroom malam hari dengan aksen emas hangat dan lighting dramatis.",
    gradient: "from-gray-950 via-charcoal to-amber-700",
    text: "text-gold",
  },
  {
    label: "SAGE & CREAM",
    title: "Sage Green & Muted Cream",
    desc: "Estetika botanical garden & outdoor modern yang segar, teduh, dan organik.",
    gradient: "from-emerald-900 via-stone-300 to-cream",
    text: "text-charcoal",
  },
  {
    label: "TERRACOTTA & IVORY",
    title: "Warm Terracotta & Ivory",
    desc: "Sentuhan kehangatan adat modern & nuansa rustic refined yang romantis.",
    gradient: "from-amber-900 via-amber-700 to-amber-100",
    text: "text-white",
  },
] as const;

export const DEFAULT_VENUES = [
  {
    image: "/images/GedungAntonSoedjarwo.jpg",
    tag: "Grand Ballroom",
    title: "5-Star Hotel & Convention",
    desc: "Akses ballroom bintang lima di Jakarta, Bandung, dan convention hall utama.",
  },
  {
    image: "/images/heritage.jpg",
    tag: "Outdoor Lawn & Garden",
    title: "Pontis Green & Heritage Lawn",
    desc: "Area outdoor asri dan rumput hijau luas yang sangat pas untuk intimate wedding.",
  },
  {
    image: "/images/kaca.jpg",
    tag: "Glasshouse Pavilion",
    title: "Modern Botanical Glasshouse",
    desc: "Konsep paviliun kaca modern dengan tata AC penuh dan nuansa alam sekitar.",
  },
] as const;

export type Vendor = {
  icon: string;
  title: string;
  desc: string;
};

export const VENDORS: Vendor[] = [
  {
    icon: "Coffee",
    title: "Kopi Pontis",
    desc: "Coffee bar & signature beverages dengan konsep estetik untuk wedding reception.",
  },
  {
    icon: "Building",
    title: "Gedung Al El",
    desc: "Venue indoor eksklusif dengan kapasitas hingga 500 pax, cocok untuk akad & resepsi.",
  },
  {
    icon: "Building2",
    title: "Gedung BK3D",
    desc: "Convention hall modern dengan fasilitas lengkap untuk grand wedding celebration.",
  },
  {
    icon: "MapPin",
    title: "Masjid Darul Matiin",
    desc: "Lokasi akad nikah sakral dengan nuansa islami yang elegan & fasilitas memadai.",
  },
  {
    icon: "Home",
    title: "Bale Kinasih",
    desc: "Venue outdoor garden dengan nuansa intimate dan romantis untuk gathering wedding.",
  },
  {
    icon: "Music",
    title: "Sulanjana",
    desc: "Entertainment profesional & acoustic performance untuk suasana meriah resepsi.",
  },
  {
    icon: "WandSparkles",
    title: "Mentari Decoration",
    desc: "In-house decoration team dengan konsep custom fresh flowers & modern elegant styling.",
  },
  {
    icon: "Utensils",
    title: "Medina Aulia",
    desc: "Premium catering service dengan menu nusantara & internasional berkualitas tinggi.",
  },
  {
    icon: "Sparkles",
    title: "Selly Makeup",
    desc: "Professional MUA dengan spesialisasi bridal makeup natural glamour & timeless look.",
  },
  {
    icon: "Sparkles",
    title: "Juvita",
    desc: "Beauty artist dengan portfolio bridal editorial look dan flawless finish technique.",
  },
  {
    icon: "Mic",
    title: "Rivaldy",
    desc: "Professional MC dengan experience hosting wedding events & engaging audience interaction.",
  },
  {
    icon: "Camera",
    title: "Melody Photo",
    desc: "Cinematic photography & videography dengan style editorial dan storytelling approach.",
  },
  {
    icon: "Mic",
    title: "Kita MC",
    desc: "Master of ceremony team dengan multilingual capability dan formal event expertise.",
  },
  {
    icon: "Music",
    title: "Ganesa82",
    desc: "Live music entertainment dengan berbagai genre dari acoustic hingga full band performance.",
  },
  {
    icon: "Mic",
    title: "Rahmadina",
    desc: "Professional MC dengan warm personality dan skill crowd control untuk intimate hingga grand event.",
  },
  {
    icon: "Music",
    title: "BSWE-Swara",
    desc: "Entertainment group dengan spesialisasi traditional music & modern fusion performance.",
  },
  {
    icon: "Palette",
    title: "Kala Kita",
    desc: "Creative decoration & styling dengan concept unique artistic dan personalized theme.",
  },
];

export const GALLERY = [
  {
    image: "/images/estetik.JPG",
    caption: "Grand Floral Arch",
  },
  {
    image: "/images/hangat.JPG",
    caption: "Warm Reception Glow",
  },
  {
    image: "/images/sentuhan.JPG",
    caption: "Quiet Bridal Details",
  },
  {
    image: "/images/suasana.JPG",
    caption: "Ceremony Atmosphere",
  },
  {
    image: "/images/ruang.JPG",
    caption: "Intimate Space Styling",
  },
  {
    image: "/images/hangat2.jpg",
    caption: "Golden Hour Moments",
  },
  {
    image: "/images/hangat3.jpg",
    caption: "Candlelit Romance",
  },
  {
    image: "/images/hangat4.jpg",
    caption: "Evening Celebration",
  },
  {
    image: "/images/pavilion.JPG",
    caption: "Pavilion Statement",
  },
  {
    image: "/images/signature.JPG",
    caption: "Signature Aesthetic",
  },
  {
    image: "/images/hero.JPG",
    caption: "Editorial Portrait",
  },
  {
    image: "/images/tawalepas.JPG",
    caption: "Timeless Couple Frame",
  },
  {
    image: "/images/harmoni.jpg",
    caption: "Harmoni Arrangement",
  },
  {
    image: "/images/cahaya.jpg",
    caption: "Light & Shadow Play",
  },
  {
    image: "/images/crystal.jpg",
    caption: "Crystal Accents",
  },
  {
    image: "/images/gold.jpg",
    caption: "Champagne Gold Detail",
  },
  {
    image: "/images/kain.jpg",
    caption: "Textile Couture",
  },
  {
    image: "/images/lampu.jpg",
    caption: "Ambient Lighting",
  },
  {
    image: "/images/miror.jpg",
    caption: "Mirror Reflection",
  },
  {
    image: "/images/rooftop.jpg",
    caption: "Rooftop Celebration",
  },
  {
    image: "/images/garden.jpg",
    caption: "Garden Lawn Setting",
  },
  {
    image: "/images/kaca.jpg",
    caption: "Glasshouse Pavilion",
  },
  {
    image: "/images/heritage.jpg",
    caption: "Heritage Backdrop",
  },
  {
    image: "/images/pendekatan.JPG",
    caption: "Thoughtful Approach",
  },
  {
    image: "/images/invite.jpg",
    caption: "Invitation Stationery",
  },
  {
    image: "/images/metode.jpg",
    caption: "Planning Method",
  },
] as const;

export type PackageTier = {
  id: string;
  name: string;
  price: number;
  tag: string;
  subtitle: string;
  popular?: boolean;
  image: string;
  features: string[];
  idealFor: string;
  planningWindow: string;
  team: string;
  experience: string;
  bonus?: string;
};

export const PACKAGES: PackageTier[] = [
  {
    id: "intimate",
    name: "THE INTIMATE JOURNEY",
    price: 35_000_000,
    tag: "Paket Intimate (100 - 150 Pax)",
    subtitle: "Akad & Intimate Reception",
    image: "/images/suasana.JPG",
    idealFor: "100–150 tamu",
    planningWindow: "H-30 hari",
    team: "4 profesional",
    experience: "Intimate & personal",
    features: [
      "Wedding Organizer: Pendampingan H-30, 4 Personel Tim Profesional D-Day.",
      "Decoration: Backdrop Akad / Intimate (4 Meter), Fresh Flower Accent, Welcome Board, Mini Gallery.",
      "Documentation: 1 Lead Photographer & 1 Videographer (6 Jam Kerja), All Unedited Files + 50 Edited Photos.",
      "Attire & Makeup: 1 Set Busana Akad Pengantin & Makeup Eksklusif + Makeup Ibu Pasangan (2 Orang).",
      "Sound System: Standard Acoustic Sound System 2000W.",
    ],
  },
  {
    id: "royal",
    name: "THE ROYAL ROMANCE",
    price: 75_000_000,
    tag: "MOST POPULAR COLLECTION",
    subtitle: "Dirancang untuk Resepsi Modern (300 - 500 Pax)",
    popular: true,
    image: "/images/harmoni.jpg",
    idealFor: "300–500 tamu",
    planningWindow: "H-6 bulan",
    team: "9 profesional",
    experience: "Polished & celebratory",
    features: [
      "Full Wedding Planning: Pendampingan komprehensif dari H-6 Bulan, Unlimited Consultation.",
      "On-the-Day Team: Dedicated Event Manager + 8 Personel Tim Lapangan Standby.",
      "Decoration: Grand Pelaminan 8-10M (Full Fresh Flowers), Entrance Gate, Photobooth 3D Custom, Aisle Runner & Lighting Setup.",
      "Documentation: 2 Photographers + 1 Cinematic Videographer, Highlight Reel 1 Menit (Reels/TikTok Ready), Premium Album Hardcover.",
      "Entertainment: Professional MC & Acoustic Band (Vocal, Keyboard, Saxophone/Guitar).",
    ],
    bonus: "Hand Bouquet Import & Special Confetti Effect.",
  },
  {
    id: "imperial",
    name: "THE IMPERIAL LUXURY",
    price: 135_000_000,
    tag: "Grand Ballroom (500+ Pax)",
    subtitle: "Grand Ballroom & Luxury Celebration",
    image: "/images/pavilion.JPG",
    idealFor: "500+ tamu",
    planningWindow: "H-1 tahun",
    team: "14 profesional",
    experience: "Couture & cinematic",
    features: [
      "Full Custom Concept: Concept & Moodboard Design khusus dari H-1 Tahun.",
      "Full Team: Project Manager + 12 Personel Tim Lapangan & Personal Assistant Pengantin.",
      "Luxury Decorations: Custom Design Pelaminan 12M+, Tunnel Entrance, Hanging Flower Canopy, Photobooth Interactive.",
      "Documentation & Media: 3 Photographers, 2 Videographers, Drone Aerial Footage, Fast-Track Highlight Video (D-Day Display).",
      "Special Effects: Cold Spark / Sparklers Pyro Effect, Low Fog Machine untuk First Dance.",
      "Entertainment: Full Entertainment Band / Chamber Ensemble & Master of Ceremony (MC Hits).",
    ],
  },
];

export type Addon = {
  name: string;
  desc: string;
  price: number;
  calc?: boolean;
};

export const ADDONS: Addon[] = [
  {
    name: "360 Spinner Video Booth",
    desc: "Slow-motion 360 video studio + instant QR download",
    price: 4_500_000,
    calc: true,
  },
  {
    name: "String Quartet Ensemble",
    desc: "Acoustic string quartet (2 Violin, Viola, Cello)",
    price: 8_500_000,
    calc: true,
  },
  {
    name: "Morning Express Edit Video",
    desc: "Same Day Edit tayang langsung saat resepsi D-Day",
    price: 3_500_000,
    calc: true,
  },
  {
    name: "Custom Stationery & Calligraphy",
    desc: "Undangan fisik mewah, Wax Seal, & Place Card kaligrafi",
    price: 2_500_000,
  },
  {
    name: "After-Party Bar & Live DJ",
    desc: "Professional DJ setup + Mocktail/Cocktail bar station",
    price: 7_500_000,
    calc: true,
  },
  {
    name: "Hotel Suite Luxury Upgrade",
    desc: "2 Malam menginap di Executive Suite 5-Star Hotel",
    price: 6_000_000,
  },
  {
    name: "Crew Extra WO / Event Staff",
    desc: "Per personel pendamping koordinasi D-Day",
    price: 1_500_000,
  },
  {
    name: "Drone Aerial Footage (4K)",
    desc: "Pengambilan gambar udara resolusi 4K cinematic",
    price: 2_500_000,
  },
  {
    name: "Upgrade Photobooth 3D Custom",
    desc: "Backdrop photobooth interaktif & lighting tematik",
    price: 3_500_000,
  },
  {
    name: "Wedding Content Creator",
    desc: "Fast-Track Reels / TikTok Video selesei 24 Jam",
    price: 2_000_000,
    calc: true,
  },
  {
    name: "Special Effects Fireworks & Fog",
    desc: "Cold Spark (4 Spot) + Heavy Low Fog Machine",
    price: 4_500_000,
    calc: true,
  },
  {
    name: "Live Streaming Multi-Cam 4K",
    desc: "3 Broadcast Camera Studio + Youtube HD Live Stream",
    price: 5_000_000,
  },
];

export type WeddingDetailCategory = {
  title: string;
  items: string[];
};

export const WEDDING_DETAILS: WeddingDetailCategory[] = [
  {
    title: "Venue",
    items: [
      "Venue location selection",
      "Venue setup coordination",
      "Venue management",
    ],
  },
  {
    title: "Decoration",
    items: [
      "Backdrop pelaminan",
      "Stage pelaminan",
      "Dekorasi pelaminan",
      "Sofa pelaminan",
      "Taman pelaminan",
      "Set meja akad nikah",
      "Kotak ampau",
      "Stage bunga jalan",
      "Dekorasi backdrop photobooth",
      "Dekorasi lorong entrance",
      "Dekorasi gateway",
      "Welcome gate",
      "Dekorasi galeri photo",
      "Stand photo",
      "Meja tamu",
      "Dekorasi backdrop meja tamu",
      "Dekorasi hiburan",
      "Panggung musik 3x4",
      "Karpet jalan",
      "Lighting standar dekorasi",
      "Hand bouquet",
      "Janur",
      "Bunga mobil",
    ],
  },
  {
    title: "Attire & Suit",
    items: [
      "Busana akad mempelai wanita",
      "Busana akad mempelai pria",
      "Busana resepsi mempelai wanita",
      "Aksesoris siger & crown",
      "Melati",
      "Busana / jas mempelai pria",
      "Busana ibu & bapa cpw",
      "Busana ibu & bapa bpp",
      "Busana pagar ayu 4 / sister",
    ],
  },
  {
    title: "Makeup Artist",
    items: [
      "Makeup akad mempelai wanita",
      "Hijab / hairdo mempelai wanita",
      "Retouch resepsi",
      "Makeup ibu mempelai wanita",
      "Makeup ibu mempelai pria",
      "Makeup pagar ayu / sister 4 orang",
      "Makeup prewedding",
    ],
  },
  {
    title: "Documentation",
    items: [
      "Prewedding shoot",
      "Cetak pembesaran 16R (60x40) + frame",
      "Wedding shoot",
      "Album hardcover",
      "2-3 menit cinematic video",
      "All file selected edited",
    ],
  },
  {
    title: "MC",
    items: [
      "MC akad",
      "MC resepsi",
      "MC adat / sawer",
    ],
  },
  {
    title: "Entertainment",
    items: [
      "Sound system",
      "Vocalist 2",
      "Keyboardist",
      "Saxophone",
    ],
  },
  {
    title: "Catering",
    items: [
      "500 pax catering",
      "Nasi putih",
      "Beef teriyaki / rendang",
      "Ayam suwir / asam manis",
      "Kentang mustofa / potato chip",
      "Gado gado bangkok",
      "Sop mutiara",
      "Kerupuk",
      "Air mineral",
      "Es krim / puding",
      "Dimsum",
      "Bakso",
    ],
  },
  {
    title: "Wedding Organizer",
    items: [
      "Rundown acara",
      "Database",
      "Konsultasi acara",
      "Penyusunan agenda kerja klien",
      "Koordinasi & konfirmasi vendor",
      "Pendampingan fitting",
      "Layout & tools",
      "6 jam content creator acara",
    ],
  },
];

export const PAYMENT_STEPS = [
  {
    step: "01",
    title: "DP 1 (Booking Date)",
    percent: "20%",
    desc: "Untuk mengunci & mengamankan tanggal acara pada kalender kami.",
  },
  {
    step: "02",
    title: "Termin 2 (H-60)",
    percent: "50%",
    desc: "Konfirmasi final seluruh vendor, dekorasi, & teknis acara.",
  },
  {
    step: "03",
    title: "Pelunasan (H-14)",
    percent: "30%",
    desc: "Penyelesaian administrasi sebelum D-Day eksekusi acara.",
  },
] as const;

export const CONTACT = {
  phones: "0877 7709 9824",
  instagram: "@mentari_wo",
  instagramUrl: "https://www.instagram.com/mentari_wo/",
  website: "mentariwedding.biz.id",
  websiteUrl: "https://mentariwedding.biz.id/",
  address: "Kp. Kebon Pala II",
} as const;

export const IMAGES = {
  cover: "/images/pavilion.JPG",
  portrait: "/images/logo.jpg",
  brandStory: "/images/signature.JPG",
  backCover: "/images/heritage.jpg",
} as const;
