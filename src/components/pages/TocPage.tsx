"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { IMAGES, TOC_ITEMS } from "@/data/lookbook";
import { padPage } from "@/lib/format";

export function TocPage({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <PageShell page={2}>
      <PageHeader left="Contents & Welcome" right="An Introduction to Mentari" />
      <div className="page-body grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
        <section className="md:col-span-7">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.22em] text-gold-dark uppercase">The wedding investment book</p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-charcoal">A celebration, thoughtfully brought to life.</h2>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-slate-text">Jelajahi pendekatan, inspirasi, serta koleksi layanan Mentari—disusun untuk membantu Anda merencanakan hari yang terasa sepenuhnya milik Anda.</p>
          <div className="mt-5 border-t border-gold/25">
            {TOC_ITEMS.map((item) => (
              <button key={item.page} type="button" onClick={() => onNavigate?.(item.page)} className="group flex w-full items-center gap-3 border-b border-gold/15 py-2 text-left">
                <span className="w-7 font-serif text-lg italic text-gold/70">{padPage(item.page)}</span>
                <span className="flex-1 text-[10px] font-medium text-charcoal group-hover:text-gold-dark">{item.title.replace(/^\d+\. /, "")}</span>
                <ArrowUpRight className="h-3 w-3 text-gold/50 transition group-hover:text-gold" />
              </button>
            ))}
          </div>
        </section>

        <aside className="relative overflow-hidden rounded-2xl border border-gold/30 bg-charcoal p-5 text-white md:col-span-5">
          <div className="absolute inset-0 opacity-30">
            <Image src={IMAGES.portrait} alt="Mentari Wedding" fill className="object-cover" sizes="(max-width: 768px) 100vw, 35vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/45" />
          <div className="relative z-10 flex min-h-56 flex-col justify-between">
            <span className="font-cinzel text-[8px] font-bold tracking-[0.2em] text-gold uppercase">A note from Mentari</span>
            <blockquote className="font-serif text-xl italic leading-relaxed text-white">“Every couple has a story. Our role is to make every chapter feel effortless.”</blockquote>
            <div className="border-t border-gold/30 pt-3 text-[10px] text-gray-300">MENTARI WEDDING MANAGEMENT<br /><span className="font-cinzel text-[8px] tracking-[0.16em] text-gold">CIBADAK · SUKABUMI</span></div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
