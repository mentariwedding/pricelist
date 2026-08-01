# Mentari Wedding — Investment Lookbook

Digital pricelist dan wedding investment lookbook untuk **Mentari Wedding Organizer**. Dibangun dengan Next.js, TypeScript, Tailwind CSS, Framer Motion, dan Supabase opsional untuk venue serta galeri.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk production:

```bash
npm run build
npm run start
```

## Konten dan kontak

- Paket, harga mulai dari, vendor, venue fallback, add-ons, dan ketentuan berada di `src/data/lookbook.ts`.
- Nomor WhatsApp utama berada di `src/lib/format.ts`.
- Kontak resmi saat ini:
  - WhatsApp: `0877 7709 9824`
  - Instagram: [@mentari_wo](https://www.instagram.com/mentari_wo/)
  - Website: [mentariwedding.biz.id](https://mentariwedding.biz.id/)
  - Alamat: `Kp. Kebon Pala II`

> Seluruh harga di lookbook adalah **harga mulai dari**. Harga final dikonfirmasi melalui proposal berdasarkan venue, jumlah tamu, kebutuhan adat, customisasi, transportasi, akomodasi, pajak, dan kebutuhan di luar cakupan paket.

## Export PDF

Klik **Export PDF** pada toolbar desktop, lalu pilih **Save as PDF** pada browser. Mode print merender seluruh 16 halaman lookbook, bukan hanya halaman yang sedang terbuka.

## Supabase (opsional)

Salin `.env.example` menjadi `.env.local`, kemudian isi:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Jika konfigurasi tidak tersedia, project otomatis menggunakan data lokal/fallback. Tabel yang dibaca saat Supabase aktif:

- `venues` — `name`, `description`, `image_url`, `category`
- `portfolio_gallery` — `title`, `image_url`, `created_at`

## Validasi

```bash
npx tsc --noEmit
```
