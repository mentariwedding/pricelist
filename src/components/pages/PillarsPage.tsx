"use client";

import { UserRound, Gem, Palette, ChartLine } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { PILLARS } from "@/data/lookbook";

const ICONS = [UserRound, Gem, Palette, ChartLine];

export function PillarsPage() {
  return (
    <PageShell page={4}>
      <PageHeader left="The Mentari Standard" right="Four Principles, One Seamless Day" />
      <div className="page-body space-y-5">
        <div className="max-w-xl"><p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Why Mentari</p><h2 className="mt-1 font-serif text-3xl font-bold text-charcoal">Empat fondasi untuk perayaan yang terasa tanpa cela.</h2></div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gold/25 bg-gold/20 sm:grid-cols-2">
          {PILLARS.map((pillar, index) => {
            const Icon = ICONS[index];
            return <article key={pillar.title} className="relative bg-white p-5 sm:p-6"><span className="absolute right-4 top-3 font-serif text-4xl italic text-gold/15">0{index + 1}</span><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold"><Icon className="h-4 w-4" /></div><h3 className="max-w-[85%] font-serif text-lg font-semibold text-charcoal">{pillar.title.replace(/^\d+\. /, "")}</h3><p className="mt-2 text-[11px] leading-relaxed text-slate-text">{pillar.desc}</p></article>;
          })}
        </div>
      </div>
    </PageShell>
  );
}
