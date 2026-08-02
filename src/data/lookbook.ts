export const TOTAL_PAGES = 20;

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
  { title: "10. Paket Lamaran: The Engagement Edit", page: 10 },
  { title: "11. Paket Siraman: Ritual Collection", page: 11 },
  { title: "12. Wedding Crew Service", page: 12 },
  { title: "13. Paket: The Intimate Journey", page: 13 },
  { title: "14. Paket: The Royal Romance", page: 14 },
  { title: "15. Paket: The Imperial Luxury", page: 15 },
  { title: "16. Expanded À La Carte Add-ons", page: 16 },
  { title: "17. Booking Process & Terms", page: 17 },
  { title: "18. Interactive Budget Calculator", page: 18 },
  { title: "19. Our Testimony — #KataMereka", page: 19 },
  { title: "20. Back Cover & Studio Contact", page: 20 },
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

export const COLOR_EDIT_2026 = [
  {
    id: "mocha",
    name: "Mocha & Champagne",
    season: "2026 quiet luxury edit",
    colors: ["#5a3d2e", "#a8794f", "#f3e7d3", "#d4af37"],
    bestFor: "Ballroom, candlelit dinner, dan traditional luxury celebration.",
    image: "/images/LUXURY3.jpg",
  },
  {
    id: "butter-sage",
    name: "Butter Yellow & Sage",
    season: "Spring garden edit",
    colors: ["#f2d682", "#b7c5a5", "#fbf7ee", "#8c7448"],
    bestFor: "Garden wedding, lamaran outdoor, dan celebration yang fresh.",
    image: "/images/ROMANCE1.jpg",
  },
  {
    id: "blue-silver",
    name: "Dusty Blue & Silver",
    season: "Modern romance edit",
    colors: ["#8ba7be", "#d6dce0", "#f8f7f3", "#546774"],
    bestFor: "Modern reception, clean editorial décor, dan glasshouse setting.",
    image: "/images/JOURNEY1.jpg",
  },
  {
    id: "plum",
    name: "Deep Plum & Rose Gold",
    season: "Evening statement edit",
    colors: ["#4b2838", "#8c4e63", "#e7c9be", "#b88866"],
    bestFor: "Night party, luxury reception, dan dramatic floral styling.",
    image: "/images/LUXURY6.jpg",
  },
] as const;

export const SEASONAL_EDITION = {
  label: "Curated 2026 Edition",
  title: "Garden, Adat & Modern Romance",
  note: "Palet dan visual pilihan untuk perayaan yang terasa personal di musim ini.",
} as const;

export type Venue = {
  image: string;
  tag: string;
  title: string;
  desc: string;
  coordinates?: string;
  mapUrl?: string;
};

export const DEFAULT_VENUES: readonly Venue[] = [
  {
    image: "/images/venue-GedungAntonSoedjarwo.jpg",
    tag: "Grand Reception Hall",
    title: "Gedung Anton Soedjarwo",
    desc: "Venue resepsi dengan ruang acara luas untuk rangkaian perayaan yang terarah.",
    coordinates: "-6.9102246059558405, 106.92308255633806",
    mapUrl: "https://www.google.com/maps?q=-6.9102246059558405,106.92308255633806",
  },
  {
    image: "/images/venue-daarulmatiincibadak.jpg",
    tag: "Akad & Ceremony Venue",
    title: "Daarul Matiin Cibadak",
    desc: "Pilihan venue dengan suasana khidmat untuk akad dan rangkaian seremoni keluarga.",
    coordinates: "-6.8938837626021705, 106.7847085646046",
    mapUrl: "https://www.google.com/maps?q=-6.8938837626021705,106.7847085646046",
  },
  {
    image: "/images/venue-gedung-bk3d.jpg",
    tag: "Reception Hall",
    title: "Gedung BK3D",
    desc: "Venue resepsi yang dapat disesuaikan untuk kebutuhan konsep dan skala perayaan Anda.",
    coordinates: "-6.893411644490495, 106.7835674777787",
    mapUrl: "https://www.google.com/maps?q=-6.893411644490495,106.7835674777787",
  },
  {
    image: "/images/venue-pontis-kopi.jpg",
    tag: "Garden & Café Venue",
    title: "Pontis Kopi",
    desc: "Pilihan venue dengan atmosfer hangat untuk intimate celebration dan gathering keluarga.",
    coordinates: "-6.8856897898415514, 106.81196784284437",
    mapUrl: "https://www.google.com/maps?q=-6.8856897898415514,106.81196784284437",
  },
  {
    image: "/images/JOURNEY1.jpg",
    tag: "Outdoor Wedding Venue",
    title: "YSR Himalaya",
    desc: "Pilihan venue dengan suasana outdoor yang menyatu dengan dekorasi dan rangkaian seremoni.",
    coordinates: "-6.84036028784743, 106.82876886468237",
    mapUrl: "https://www.google.com/maps?q=-6.84036028784743,106.82876886468237",
  },
  {
    image: "/images/ROMANCE1.jpg",
    tag: "Garden Wedding Venue",
    title: "Bale Kinasih",
    desc: "Pilihan venue garden untuk perayaan intimate maupun resepsi dengan suasana hangat.",
    coordinates: "-6.885833938460383, 106.94243204339705",
    mapUrl: "https://www.google.com/maps?q=-6.885833938460383,106.94243204339705",
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
    title: "Ganesa82 Musik",
    desc: "Partner live music untuk menghadirkan suasana perayaan yang hangat dan berkesan.",
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
    title: "Kala Kita EO",
    desc: "Partner event organizer untuk koordinasi dan pengalaman acara yang terarah.",
  },
  {
    icon: "Building2",
    title: "Mercure Cibadak",
    desc: "Partner venue untuk kebutuhan perayaan dan akomodasi acara.",
  },
  {
    icon: "Palette",
    title: "Sanggar Gumintang",
    desc: "Partner kreatif untuk kebutuhan tradisi dan detail budaya acara.",
  },
  {
    icon: "Camera",
    title: "Trezone Photobooth",
    desc: "Partner photobooth untuk pengalaman tamu yang interaktif.",
  },
  {
    icon: "Camera",
    title: "Kala Moment",
    desc: "Partner dokumentasi untuk mengabadikan momen perayaan.",
  },
  {
    icon: "Sparkles",
    title: "YSR Himalaya",
    desc: "Partner pilihan dalam ekosistem vendor Mentari Wedding.",
  },
  {
    icon: "Flower2",
    title: "Eva Florist",
    desc: "Partner florist untuk rangkaian bunga dan detail dekorasi acara.",
  },
];

export const GALLERY = [
  { image: "/images/JOURNEY1.jpg", caption: "Intimate Journey — Ceremony Scene" },
  { image: "/images/JOURNEY2.jpg", caption: "Intimate Journey — Wedding Detail" },
  { image: "/images/JOURNEY3.jpg", caption: "Intimate Journey — Adat Moment" },
  { image: "/images/JOURNEY4.jpg", caption: "Intimate Journey — Celebration" },
  { image: "/images/JOURNEY5.jpg", caption: "Intimate Journey — Floral Detail" },
  { image: "/images/JOURNEY6.jpg", caption: "Intimate Journey — Couple Story" },
  { image: "/images/JOURNEY7.JPG", caption: "Intimate Journey — Reception Detail" },
  { image: "/images/ROMANCE1.jpg", caption: "Royal Romance — Main Setting" },
  { image: "/images/ROMANCE2.JPG", caption: "Royal Romance — Couple Portrait" },
  { image: "/images/ROMANCE3.jpg", caption: "Royal Romance — Floral Detail" },
  { image: "/images/ROMANCE4.jpg", caption: "Royal Romance — Reception Scene" },
  { image: "/images/ROMANCE5.jpg", caption: "Royal Romance — Adat Detail" },
  { image: "/images/ROMANCE6.JPG", caption: "Royal Romance — Celebration" },
  { image: "/images/ROMANCE7.jpg", caption: "Royal Romance — Evening Moment" },
  { image: "/images/LUXURY1.jpg", caption: "Imperial Luxury — Grand Setting" },
  { image: "/images/LUXURY2.jpg", caption: "Imperial Luxury — Couture Detail" },
  { image: "/images/LUXURY3.jpg", caption: "Imperial Luxury — Floral Architecture" },
  { image: "/images/LUXURY4.jpg", caption: "Imperial Luxury — Reception Scene" },
  { image: "/images/LUXURY5.jpg", caption: "Imperial Luxury — Bridal Moment" },
  { image: "/images/LUXURY6.jpg", caption: "Imperial Luxury — Grand Celebration" },
  { image: "/images/LUXURY7.jpg", caption: "Imperial Luxury — Final Detail" },
  { image: "/images/adat.JPG", caption: "Traditional Ceremony Detail" },
  { image: "/images/banner.jpg", caption: "Ceremony Banner Detail" },
  { image: "/images/bm.JPG", caption: "Wedding Moment" },
  { image: "/images/crew1.jpg", caption: "Wedding Team in Action" },
  { image: "/images/crew2.jpeg", caption: "The Mentari Crew" },
  { image: "/images/estetik.JPG", caption: "Editorial Wedding Aesthetic" },
  { image: "/images/hangat.JPG", caption: "Warm Reception Glow" },
  { image: "/images/harmoni.jpg", caption: "Harmoni Arrangement" },
  { image: "/images/hena.jpg", caption: "Henna Detail" },
  { image: "/images/hero.JPG", caption: "Editorial Portrait" },
  { image: "/images/kain.jpg", caption: "Traditional Textile Detail" },
  { image: "/images/kue.jpg", caption: "Wedding Cake Detail" },
  { image: "/images/lamaran1.jpg", caption: "Engagement Garden Aisle" },
  { image: "/images/lamaran2.jpg", caption: "Engagement Floral Setting" },
  { image: "/images/mc.jpg", caption: "Master of Ceremony" },
  { image: "/images/prewed.jpg", caption: "Prewedding Ride" },
  { image: "/images/siraman1.jpg", caption: "Siraman Ritual Detail" },
  { image: "/images/siraman2.jpg", caption: "Siraman Floral Setting" },
  { image: "/images/suasana.JPG", caption: "Ceremony Atmosphere" },
  { image: "/images/tawalepas.JPG", caption: "Timeless Couple Frame" },
  { image: "/images/ruang.JPG", caption: "Intimate Space Styling" },
  { image: "/images/sentuhan.JPG", caption: "Quiet Bridal Details" },
  { image: "/images/signature.JPG", caption: "Signature Aesthetic" },
  { image: "/images/cahaya.jpg", caption: "Light & Shadow Play" },
  { image: "/images/crystal.jpg", caption: "Crystal Accents" },
  { image: "/images/gold.jpg", caption: "Champagne Gold Detail" },
  { image: "/images/lampu.jpg", caption: "Ambient Lighting" },
  { image: "/images/metode.jpg", caption: "Planning Method" },
  { image: "/images/miror.jpg", caption: "Mirror Reflection" },
  { image: "/images/pavilion.JPG", caption: "Pavilion Statement" },
  { image: "/images/pendekatan.JPG", caption: "Thoughtful Approach" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Disa & Alam",
    event: "Wedding Celebration",
    image: "/images/testi1.jpg",
    quote: "Keputusan terbaik kami adalah mempercayakan Mentari sebagai partner pernikahan. Karena kami bekerja di luar kota, awalnya kami khawatir dengan proses persiapan dan koordinasi vendor. Namun seluruh preparation, komunikasi vendor, hingga rundown acara ditangani dengan rapi dan penuh perhatian.",
  },
  {
    name: "Nadia & Reza",
    event: "Wedding Celebration",
    image: "/images/testi2.jpg",
    quote: "Tim Mentari membuat kami bisa menikmati setiap proses tanpa merasa kewalahan. Semua detail terasa terarah, respons tim sangat menenangkan, dan hari acara berjalan jauh lebih indah dari yang kami bayangkan.",
  },
  {
    name: "Tiara & Bagas",
    event: "Intimate Celebration",
    image: "/images/testi3.jpg",
    quote: "Dari konsep hingga eksekusi, Mentari benar-benar memahami karakter kami. Suasana acara terasa hangat, personal, dan semua keluarga merasa dilayani dengan sangat baik.",
  },
  {
    name: "Alya & Dimas",
    event: "Family Celebration",
    image: "/images/testi4.jpg",
    quote: "Kami sangat terbantu dengan koordinasi tim di hari H. Vendor, keluarga, dan rangkaian acara dapat berjalan selaras sehingga kami bisa fokus menikmati momen bersama orang-orang terdekat.",
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
  galleryImages?: string[];
  features: string[];
  idealFor: string;
  planningWindow: string;
  team: string;
  experience: string;
  bestFor?: string;
  priceOptions?: { label: string; price: number }[];
  vendorSections?: VendorSection[];
  complimentary?: string[];
  conceptTags?: string[];
  note?: string;
  bonus?: string;
};

type VendorSection = { title: string; items: string[] };

const VENUE_INCLUSIONS = [
  "Gedung resepsi", "Area parkir", "Listrik 5.000 watt", "100 kursi futura", "Ruang makeup",
];
const STANDARD_DECORATION = [
  "Backdrop dan stage pelaminan", "Dekorasi serta sofa pelaminan", "Taman pelaminan", "Dekorasi akad", "Standing flower akad", "6 kursi Tiffany akad", "Meja akad dan kotak ampau", "Standing flower", "Dekorasi photo booth", "Dekorasi gateway", "Dekorasi penerima tamu", "Dekorasi entrance / lorong", "Dekorasi hiburan", "Stage music 3 × 4 m", "Pergola 4 × 4 m", "Karpet jalan", "Lighting backdrop", "Hand bouquet", "Bunga mobil", "Welcome sign", "Janur",
];
const ENTERTAINMENT_INCLUSIONS = ["Sound system akad", "Sound system resepsi", "Vocalist", "Keyboardist", "Saxophonist"];
const ATTIRE_INCLUSIONS = ["Busana akad mempelai wanita", "Busana akad mempelai pria", "Busana resepsi mempelai wanita", "Busana / jas resepsi mempelai pria", "Aksesori pengantin: siger / crown", "Busana ibu hajat", "Busana ibu besan", "Busana bapak hajat", "Busana bapak besan", "Busana pagar ayu / sister (4 orang)"];
const MUA_INCLUSIONS = ["Makeup akad mempelai wanita", "Hijab / hairdo akad mempelai wanita", "Retouch resepsi mempelai wanita", "Fresh flower melati", "Makeup ibu mempelai wanita", "Makeup ibu mempelai pria", "Hair / hijab do ibu mempelai wanita", "Hair / hijab do ibu mempelai pria", "Makeup saudara (4 orang)", "Hair / hijab do saudara (4 orang)", "Makeup prewedding"];
const DOCUMENTATION_INCLUSIONS = ["Prewedding shoot", "Cetak pembesaran prewedding 16R (60 × 40 cm) + frame", "Wedding shoot", "1 album 20 × 30 cm (22–30 halaman)", "Cetak pembesaran wedding 16R (60 × 40 cm) + frame", "Video cinematic 2–3 menit", "All selected files edited", "Flashdisk"];
const MC_INCLUSIONS = ["MC akad", "MC resepsi", "MC tradisional / saweran dan adat"];

function createVendorSections(decoration: string[], catering: string[], weddingOrganizer: string[]): VendorSection[] {
  return [
    { title: "Venue", items: VENUE_INCLUSIONS },
    { title: "Decoration", items: decoration },
    { title: "Entertainment", items: ENTERTAINMENT_INCLUSIONS },
    { title: "Attire & Suit", items: ATTIRE_INCLUSIONS },
    { title: "Makeup Artist", items: MUA_INCLUSIONS },
    { title: "Documentation", items: DOCUMENTATION_INCLUSIONS },
    { title: "MC", items: MC_INCLUSIONS },
    { title: "Catering", items: catering },
    { title: "Wedding Organizer", items: weddingOrganizer },
  ];
}

export const PACKAGES: PackageTier[] = [
  {
    id: "engagement",
    name: "THE ENGAGEMENT EDIT",
    price: 5_500_000,
    tag: "Paket Lamaran · Mulai Dari",
    subtitle: "A Thoughtful Engagement Celebration",
    image: "/images/lamaran1.jpg",
    galleryImages: ["/images/lamaran2.jpg", "/images/banner.jpg"],
    idealFor: "Lamaran intimate",
    planningWindow: "Sesuai tanggal acara",
    team: "Tim inti Mentari",
    experience: "Warm & personal",
    features: [
      "Dekorasi backdrop lamaran ukuran 3,5 meter.",
      "Rangkaian fresh flower dan artificial flower.",
      "6 kursi duduk, meja, dekorasi bunga jalan, dan pijakan kayu.",
      "Mirror sign sebagai detail penyambutan.",
      "Makeup Artist (MUA) untuk acara lamaran.",
      "Fotografer — seluruh file data (tanpa proses editing).",
      "Master of Ceremony (MC).",
    ],
    note: "Opsi dekorasi backdrop saja mulai dari Rp2.500.000.",
  },
  {
    id: "intimate",
    name: "THE INTIMATE JOURNEY",
    price: 105_000_000,
    tag: "Paket Intimate · Venue & Catering",
    subtitle: "Akad & Intimate Reception",
    image: "/images/JOURNEY1.jpg",
    galleryImages: [
      "/images/JOURNEY2.jpg", "/images/JOURNEY3.jpg", "/images/JOURNEY4.jpg",
      "/images/JOURNEY5.jpg", "/images/JOURNEY6.jpg", "/images/JOURNEY7.JPG",
    ],
    idealFor: "500–1.000 pax",
    planningWindow: "H-30 hari",
    team: "7–10 wedding crew",
    experience: "Intimate & personal",
    priceOptions: [
      { label: "Venue & catering 1.000 pax", price: 119_000_000 },
      { label: "Venue & catering 500 pax", price: 105_000_000 },
    ],
    vendorSections: createVendorSections(
      STANDARD_DECORATION,
      ["Catering 1.000 pax", "Nasi putih", "Beef teriyaki / rendang", "Ayam suwir", "Kentang mustofa / potato chip", "Gado-gado Bangkok", "Sop mutiara", "Kerupuk", "Air mineral", "Es krim / pudding", "Buah potong", "Foodstall bakso 100 pax"],
      ["4 professional usher", "Rundown acara", "Database", "Cuecard MC", "Konsultasi acara", "Penyusunan agenda kerja klien", "Koordinasi & konfirmasi vendor", "Pendampingan fitting", "Layout & tools", "Pembahasan konsep prewedding", "Pendampingan prewedding", "Berita acara", "7–10 wedding crew", "Content creator"],
    ),
    complimentary: ["Tenda makan", "100 kursi futura", "White Elegance"],
    features: ["Venue dan catering", "Vendor list terkurasi", "Wedding coordination"],
  },
  {
    id: "royal",
    name: "THE ROYAL ROMANCE",
    price: 129_000_000,
    tag: "MOST POPULAR COLLECTION",
    subtitle: "Venue, Catering & Complete Vendor Coordination",
    popular: true,
    image: "/images/ROMANCE1.jpg",
    galleryImages: [
      "/images/ROMANCE2.JPG", "/images/ROMANCE3.jpg", "/images/ROMANCE4.jpg",
      "/images/ROMANCE5.jpg", "/images/ROMANCE6.JPG", "/images/ROMANCE7.jpg",
    ],
    idealFor: "500–1.000 pax",
    planningWindow: "H-6 bulan",
    team: "7–10 wedding crew",
    experience: "Polished & celebratory",
    priceOptions: [
      { label: "Venue & catering 1.000 pax", price: 149_000_000 },
      { label: "Venue & catering 500 pax", price: 129_000_000 },
    ],
    vendorSections: createVendorSections(
      [...STANDARD_DECORATION, "Lighting lorong"],
      ["Catering 1.000 pax", "Nasi putih", "Daging teriyaki / sapi lada hitam", "Ayam suwir / ayam opor keju", "Cah brokoli / gado-gado Bangkok", "Sop daging sapi jamur", "Kerupuk", "Air mineral", "Puding aneka buah", "Es krim", "Soft drink", "Foodstall bakso / mie kocok 200 pax", "Foodstall siomay 200 pax", "Coffee break lontong kari 100 pax", "Dekorasi VIP", "Dekorasi prasmanan"],
      ["Rundown acara", "Database", "Cuecard MC", "Konsultasi acara", "Penyusunan agenda kerja klien", "Koordinasi & konfirmasi vendor", "Pendampingan fitting", "Layout & tools", "Pembahasan konsep prewedding", "Pendampingan prewedding", "Berita acara", "7–10 wedding crew", "2 content creator"],
    ),
    complimentary: ["Tenda makan", "4 professional usher", "External lighting: beam, parled, fresnel", "2 ice cooler", "Kain cover hitam untuk konsep gelap", "Jas prewed by Jasso Groom", "D-Day grooming for groom", "200 kursi futura", "Prewedding concept by Mojan Concept"],
    conceptTags: ["White Elegance", "Garden Ambience", "Sweet Colour", "Night Party"],
    features: ["Venue dan catering", "Vendor list terkurasi", "Wedding coordination"],
  },
  {
    id: "imperial",
    name: "THE IMPERIAL LUXURY",
    price: 205_000_000,
    tag: "Imperial Luxury · Venue & Catering",
    subtitle: "Grand Ballroom & Luxury Celebration",
    image: "/images/LUXURY1.jpg",
    galleryImages: [
      "/images/LUXURY2.jpg", "/images/LUXURY3.jpg", "/images/LUXURY4.jpg",
      "/images/LUXURY5.jpg", "/images/LUXURY6.jpg", "/images/LUXURY7.jpg",
    ],
    idealFor: "500–1.000 pax",
    planningWindow: "H-1 tahun",
    team: "7–10 wedding crew",
    experience: "Couture & cinematic",
    bestFor: "Grand celebration dengan custom luxury concept",
    priceOptions: [
      { label: "Venue & catering 1.000 pax", price: 229_000_000 },
      { label: "Venue & catering 500 pax", price: 205_000_000 },
      { label: "Venue & Samudra Catering 1.000 pax", price: 279_000_000 },
    ],
    vendorSections: createVendorSections(
      ["Custom design backdrop pelaminan", ...STANDARD_DECORATION.slice(1), "Lighting lorong"],
      ["Catering 1.000 pax", "Nasi putih", "Aneka olahan daging", "Aneka olahan ayam", "Aneka olahan sop", "Aneka olahan sayuran", "Kerupuk", "Air mineral", "Puding aneka buah", "Aneka kue", "Soft drink", "Salad bar", "Foodstall sate ayam", "Foodstall empek-empek", "Foodstall siomay", "Foodstall Thai suki", "Coffee break lontong kari", "Dekorasi VIP", "Dekorasi prasmanan"],
      ["Rundown acara", "Database", "Cuecard MC", "Konsultasi acara", "Penyusunan agenda kerja klien", "Koordinasi & konfirmasi vendor", "Pendampingan fitting", "Layout & tools", "Pembahasan konsep prewedding", "Pendampingan prewedding", "Berita acara", "7–10 wedding crew", "2 content creator"],
    ),
    complimentary: ["Tenda makan", "4 professional usher", "External lighting: beam, parled, fresnel", "2 ice cooler", "Kain cover hitam untuk konsep gelap", "Jas prewed by Jasso Groom", "D-Day grooming for groom", "200 kursi futura", "Prewedding concept by Mojan Concept", "Digital invitation"],
    conceptTags: ["White Elegance", "Garden Ambience", "Sweet Colour", "Night Party"],
    features: ["Venue dan catering", "Vendor list terkurasi", "Wedding coordination"],
  },
];

export const SIRAMAN_CONCEPTS = [
  { id: "garden", name: "Garden Concept", price: 16_500_000, accent: "The most immersive setting" },
  { id: "standard", name: "Standard Concept", price: 9_500_000, accent: "A complete ceremonial setting" },
  { id: "minimalist", name: "Minimalist Concept", price: 7_500_000, accent: "Simple, intimate, and graceful" },
] as const;

export const SIRAMAN_INCLUSIONS = [
  "Dekorasi siraman sesuai konsep pilihan",
  "Backdrop sungkeman dan backdrop siraman",
  "Bando, dodotan, dan melati",
  "Minus one serta kacapi suling",
  "Pemandu siraman",
  "1 Makeup Artist (MUA)",
  "1 hijab styling / hairdo",
  "Sound system dan 3 mikrofon wireless",
  "Peralatan serta perlengkapan siraman",
  "Bunga rampe dan kimono",
] as const;

export const WEDDING_CREW_SERVICES = [
  { name: "Siraman / Engagement", pax: "50 pax", duration: "3 jam", price: 2_800_000 },
  { name: "Akad / Pemberkatan", pax: "100 pax", duration: "4 jam", price: 3_800_000 },
  { name: "Intimate", pax: "200 pax", duration: "6 jam", price: 4_800_000 },
  { name: "Royal", pax: "<500 pax", duration: "8 jam", price: 5_300_000 },
  { name: "Royal A (Tanpa Siraman)", pax: "500–1.000 pax", duration: "8 jam", price: 5_800_000 },
  { name: "Royal A (Siraman)", pax: "500–1.000 pax", duration: "8 jam", price: 6_800_000 },
  { name: "Royal B (Tanpa Siraman)", pax: "1.000–2.000 pax", duration: "8 jam", price: 7_300_000 },
  { name: "Royal B (Siraman)", pax: "1.000–2.000 pax", duration: "8 jam", price: 8_300_000 },
  { name: "Full Service", pax: "Custom scale", duration: "8 jam", price: 15_800_000 },
] as const;

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
  backCover: "/images/venue-pontis-kopi.jpg",
} as const;
