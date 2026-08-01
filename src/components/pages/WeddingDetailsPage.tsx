"use client";

import { Check } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { WEDDING_DETAILS } from "@/data/lookbook";

export function WeddingDetailsPage() {
  return (
    <PageShell page={9}>
      <PageHeader left="The Wedding Blueprint" right="Every Detail, Considered" />
      <div className="page-body space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">The Mentari scope</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-charcoal sm:text-3xl">Satu rencana, dari detail pertama hingga momen terakhir.</h2>
          </div>
          <p className="max-w-xs text-[10px] leading-relaxed text-slate-text sm:text-right">Ruang lingkup layanan disusun untuk membuat perjalanan pernikahan tetap tenang dan terarah.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {WEDDING_DETAILS.map((category, index) => (
            <section key={category.title} className="rounded-xl border border-gold/20 bg-white/75 p-4">
              <div className="mb-3 flex items-baseline gap-2 border-b border-gold/15 pb-2">
                <span className="font-serif text-2xl italic text-gold/60">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-cinzel text-[10px] font-bold tracking-[0.14em] text-charcoal uppercase">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-1.5 text-[10px] leading-relaxed text-slate-text">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-gold" />{item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="border-l-2 border-gold bg-cream/60 px-4 py-3 text-[10px] italic text-slate-text">Setiap layanan dapat dikurasi ulang sesuai rangkaian adat, kebutuhan keluarga, serta preferensi personal pasangan.</p>
      </div>
    </PageShell>
  );
}
