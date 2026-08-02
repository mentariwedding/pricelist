"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { SIRAMAN_CONCEPTS, SIRAMAN_INCLUSIONS } from "@/data/lookbook";
import { formatIDR } from "@/lib/format";

export function SiramanPage() {
  return (
    <PageShell page={11}>
      <PageHeader left="Ritual Collection" right="The Siraman Ceremony Edit" />
      <div className="page-body space-y-5">
        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Paket Siraman · Harga Mulai Dari</p>
            <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-charcoal">Ritual yang hangat, anggun, dan penuh makna.</h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-text">Tiga pilihan konsep siraman yang dapat disesuaikan dengan suasana keluarga serta detail adat yang Anda inginkan.</p>
          </div>
          <div className="relative h-28 overflow-hidden rounded-xl border border-gold/30 md:col-span-5 md:h-32">
            <Image src="/images/siraman1.jpg" alt="Detail perlengkapan adat untuk paket siraman Mentari" fill className="object-cover" sizes="(max-width: 768px) 100vw, 35vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 to-transparent" />
            <span className="absolute bottom-3 left-3 font-cinzel text-[8px] font-bold tracking-[0.14em] text-gold-light uppercase">A ceremonial moment</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["/images/siraman2.jpg", "/images/hena.jpg", "/images/kain.jpg", "/images/adat.JPG"].map((src, index) => <div key={src} className={`relative overflow-hidden border border-gold/25 ${index === 1 ? "h-28 sm:h-36" : "h-24 sm:h-32"}`}><Image src={src} alt={`Visual adat siraman ${index + 1}`} fill className="object-cover" sizes="(max-width: 640px) 48vw, 200px" /></div>)}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {SIRAMAN_CONCEPTS.map((concept, index) => (
            <article key={concept.id} className={`relative overflow-hidden border p-4 ${index === 0 ? "border-gold bg-charcoal text-white" : "border-gold/30 bg-white text-charcoal"}`}>
              <span className={`font-serif text-4xl italic ${index === 0 ? "text-gold/40" : "text-gold/20"}`}>0{index + 1}</span>
              <p className={`mt-1 font-cinzel text-[8px] font-bold tracking-[0.16em] uppercase ${index === 0 ? "text-gold" : "text-gold-dark"}`}>Siraman collection</p>
              <h3 className="mt-1 font-serif text-xl font-semibold">{concept.name}</h3>
              <p className={`mt-1 text-[10px] ${index === 0 ? "text-gray-300" : "text-slate-text"}`}>{concept.accent}</p>
              <p className={`mt-4 font-serif text-2xl font-bold ${index === 0 ? "text-gold-light" : "text-gold-dark"}`}>{formatIDR(concept.price)}</p>
              <p className={`text-[8px] uppercase tracking-wider ${index === 0 ? "text-gray-400" : "text-slate-text"}`}>Investasi mulai dari</p>
            </article>
          ))}
        </div>

        <section className="rounded-2xl border border-gold/25 bg-cream/55 p-4 sm:p-5">
          <div className="flex flex-col justify-between gap-2 border-b border-gold/20 pb-3 sm:flex-row sm:items-end">
            <div><p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-dark uppercase">Termasuk dalam setiap konsep</p><h3 className="mt-1 font-serif text-xl font-semibold text-charcoal">Detail ritual yang telah dipersiapkan.</h3></div>
            <p className="text-[9px] italic text-slate-text">Dekorasi disesuaikan dengan Garden, Standard, atau Minimalist Concept.</p>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
            {SIRAMAN_INCLUSIONS.map((item) => <li key={item} className="flex gap-2 text-[10px] leading-relaxed text-slate-text"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />{item}</li>)}
          </ul>
        </section>
        <p className="border-l-2 border-gold pl-3 text-[9px] italic text-slate-text">Harga mulai dari dan dapat menyesuaikan lokasi, kebutuhan adat, serta detail personal acara siraman.</p>
      </div>
    </PageShell>
  );
}
