"use client";

import { CalendarClock, FileText, MapPin, ReceiptText } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { formatIDR } from "@/lib/format";

const CREW_TERMS = [
  "Venue di luar Cibadak dikenakan biaya akomodasi tim.",
  `Cianjur, Palabuhanratu, dan Pejampangan: biaya transportasi ${formatIDR(2_000_000)} ditambah penginapan.`,
  `Bogor, Bandung, dan Jakarta: biaya transportasi ${formatIDR(5_000_000)} ditambah penginapan.`,
  `Akad dan resepsi pada tanggal berbeda dikenakan charge ${formatIDR(2_500_000)}.`,
  "Booking date sebesar 30% dari harga layanan Wedding Crew Service.",
  "Invoice dan pengingat pembayaran dikirimkan melalui email klien.",
  "Harga paket dapat mengikuti promo yang berlaku pada periode tertentu, sesuai ketentuan promo.",
];

const ALL_IN_TERMS = [
  "Booking fee minimal 10% dari harga paket.",
  "Down payment minimal 30% dari harga paket.",
  "Pembayaran paket dibagi menjadi 4 termin sesuai invoice yang dikirimkan kepada klien.",
  "Pelunasan dapat dilakukan paling lambat H-20 sebelum hari acara.",
  "Invoice dan pengingat pembayaran dikirimkan melalui email klien.",
  "Penyesuaian konsep atau penambahan item dapat dikonfirmasi kepada Project Officer Mentari Wedding.",
];

function TermList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={item} className={`flex gap-2 text-[10px] leading-relaxed ${dark ? "text-gray-300" : "text-slate-text"}`}>
          <span className="font-cinzel text-[8px] font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TermsPage() {
  return (
    <PageShell page={17}>
      <PageHeader left="Terms & Conditions" right="Clear Terms for a Seamless Celebration" />
      <div className="page-body space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Before we begin</p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-charcoal">Ketentuan yang jelas, perjalanan yang tenang.</h2>
          </div>
          <p className="max-w-sm text-[10px] leading-relaxed text-slate-text sm:text-right">Mohon membaca ketentuan berikut sebelum melakukan booking dan pembayaran.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <section className="rounded-2xl border border-gold/30 bg-charcoal p-5 text-white">
            <div className="mb-4 flex items-start gap-3 border-b border-gold/25 pb-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold"><MapPin className="h-4 w-4" /></div>
              <div><p className="font-cinzel text-[8px] font-bold tracking-[0.15em] text-gold uppercase">Service conditions</p><h3 className="mt-1 font-serif text-xl font-semibold">Wedding Crew Service</h3></div>
            </div>
            <TermList items={CREW_TERMS} dark />
          </section>

          <section className="rounded-2xl border border-gold/30 bg-cream/65 p-5">
            <div className="mb-4 flex items-start gap-3 border-b border-gold/20 pb-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-white text-gold"><ReceiptText className="h-4 w-4" /></div>
              <div><p className="font-cinzel text-[8px] font-bold tracking-[0.15em] text-gold-dark uppercase">Payment conditions</p><h3 className="mt-1 font-serif text-xl font-semibold text-charcoal">Wedding All In Package</h3></div>
            </div>
            <TermList items={ALL_IN_TERMS} />
          </section>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex gap-2 border-l-2 border-gold bg-white/70 p-3"><CalendarClock className="h-4 w-4 shrink-0 text-gold" /><p className="text-[9px] leading-relaxed text-slate-text"><strong className="block text-charcoal">Booking & pembayaran</strong>Booking date dan termin dikonfirmasi melalui invoice resmi Mentari Wedding.</p></div>
          <div className="flex gap-2 border-l-2 border-gold bg-white/70 p-3"><FileText className="h-4 w-4 shrink-0 text-gold" /><p className="text-[9px] leading-relaxed text-slate-text"><strong className="block text-charcoal">Harga mulai dari</strong>Harga akhir mengikuti proposal, lokasi, skala acara, serta kebutuhan personal Anda.</p></div>
          <div className="flex gap-2 border-l-2 border-gold bg-white/70 p-3"><ReceiptText className="h-4 w-4 shrink-0 text-gold" /><p className="text-[9px] leading-relaxed text-slate-text"><strong className="block text-charcoal">Penyesuaian layanan</strong>Silakan hubungi Project Officer untuk penambahan atau perubahan item layanan.</p></div>
        </div>
      </div>
    </PageShell>
  );
}
