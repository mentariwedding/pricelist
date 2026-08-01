"use client";

import { PageHeader, PageShell } from "@/components/PageShell";
import { AESTHETICS } from "@/data/lookbook";

export function AestheticsPage() {
  return (
    <PageShell page={5}>
      <PageHeader left="Aesthetic Blueprint" right="A Material Moodboard by Mentari" />

      <div className="page-body space-y-5">
        <div className="text-center space-y-1">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Choose your atmosphere</p>
          <h2 className="font-serif text-2xl font-bold text-charcoal sm:text-3xl">Tiga arah visual, satu cerita yang personal.</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {AESTHETICS.map((item, index) => (
            <article key={item.label} className="overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-sm">
              <div className={`relative h-28 bg-gradient-to-br ${item.gradient} p-4 sm:h-36`}>
                <span className="absolute right-3 top-2 font-serif text-4xl italic text-white/25">0{index + 1}</span>
                <div className="absolute bottom-3 left-4 flex gap-1.5">
                  <span className="h-4 w-4 rounded-full border border-white/40 bg-white/20" />
                  <span className="h-4 w-4 rounded-full border border-white/40 bg-black/20" />
                  <span className="h-4 w-4 rounded-full border border-white/40 bg-gold/60" />
                </div>
              </div>
              <div className="space-y-2 p-4">
                <p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-dark uppercase">{item.label}</p>
                <h3 className="font-serif text-lg font-semibold text-charcoal">{item.title}</h3>
                <p className="text-[10px] leading-relaxed text-slate-text">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto max-w-2xl border-y border-gold/20 py-3 text-center text-[10px] italic leading-relaxed text-slate-text">
          Setiap palet adalah titik awal—kami menyatukannya dengan busana, venue, tradisi, dan kepribadian Anda.
        </p>
      </div>
    </PageShell>
  );
}
