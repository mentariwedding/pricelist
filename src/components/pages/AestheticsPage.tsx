"use client";

import { useState } from "react";
import Image from "next/image";
import { Palette } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { AESTHETICS, COLOR_EDIT_2026 } from "@/data/lookbook";

export function AestheticsPage() {
  const [selectedId, setSelectedId] = useState<string>(COLOR_EDIT_2026[0].id);
  const selected = COLOR_EDIT_2026.find((palette) => palette.id === selectedId) ?? COLOR_EDIT_2026[0];

  return (
    <PageShell page={5}>
      <PageHeader left="Aesthetic Blueprint" right="The 2026 Mentari Colour Edit" />
      <div className="page-body space-y-5">
        <div className="text-center space-y-1">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Choose your atmosphere</p>
          <h2 className="font-serif text-2xl font-bold text-charcoal sm:text-3xl">Palet yang memberi rasa pada setiap perayaan.</h2>
          <p className="mx-auto max-w-xl text-[10px] leading-relaxed text-slate-text">Pilih color edit untuk melihat arah visual yang dapat menjadi titik awal moodboard bersama Mentari.</p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {COLOR_EDIT_2026.map((palette) => {
            const active = palette.id === selected.id;
            return <button key={palette.id} type="button" onClick={() => setSelectedId(palette.id)} className={`border p-2 text-left transition ${active ? "border-gold bg-charcoal shadow-lg" : "border-gold/25 bg-white hover:border-gold/60"}`}><div className="mb-2 flex overflow-hidden rounded-sm">{palette.colors.map((color) => <span key={color} className="h-5 flex-1" style={{ backgroundColor: color }} />)}</div><p className={`font-serif text-[11px] font-semibold leading-tight ${active ? "text-white" : "text-charcoal"}`}>{palette.name}</p><p className={`mt-1 font-cinzel text-[6px] font-bold tracking-[0.1em] uppercase ${active ? "text-gold" : "text-gold-dark"}`}>{palette.season}</p></button>;
          })}
        </div>

        <section className="grid overflow-hidden border border-gold/30 bg-white sm:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[210px] sm:min-h-[250px]"><Image src={selected.image} alt={`${selected.name} wedding moodboard`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-light uppercase">2026 colour edit</span></div>
          <div className="flex flex-col justify-between p-5"><div><span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold"><Palette className="h-4 w-4" /></span><p className="mt-4 font-cinzel text-[8px] font-bold tracking-[0.15em] text-gold-dark uppercase">{selected.season}</p><h3 className="mt-1 font-serif text-2xl font-semibold text-charcoal">{selected.name}</h3><p className="mt-3 text-[11px] leading-relaxed text-slate-text">{selected.bestFor}</p></div><div className="mt-5 flex gap-2">{selected.colors.map((color) => <span key={color} className="h-7 w-7 rounded-full border border-black/10" style={{ backgroundColor: color }} />)}</div></div>
        </section>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {AESTHETICS.map((item) => <div key={item.label} className="border border-gold/20 bg-white/65 p-3"><p className="font-cinzel text-[7px] font-bold tracking-[0.14em] text-gold-dark uppercase">{item.label}</p><h3 className="mt-1 font-serif text-base font-semibold text-charcoal">{item.title}</h3><p className="mt-1 text-[9px] leading-relaxed text-slate-text">{item.desc}</p></div>)}
        </div>
      </div>
    </PageShell>
  );
}
