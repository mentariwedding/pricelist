"use client";

import Image from "next/image";
import { PageHeader, PageShell } from "@/components/PageShell";
import { IMAGES } from "@/data/lookbook";

const STATS = [["2016", "Established"], ["300+", "Celebrations"], ["100%", "Dedicated care"]];

export function BrandStoryPage() {
  return (
    <PageShell page={3}>
      <PageHeader left="Our Story" right="Planned to Perfection" />
      <div className="page-body grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative h-64 md:col-span-5 md:h-[420px]">
          <Image src={IMAGES.brandStory} alt="Mentari Aesthetic Setup" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          <div className="absolute inset-3 border border-gold/60" />
          <span className="absolute bottom-4 left-4 bg-charcoal/85 px-3 py-2 font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">Quiet luxury, thoughtfully made</span>
        </div>
        <section className="space-y-4 md:col-span-7">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">The Mentari philosophy</p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-charcoal">Keindahan yang terasa jujur, dan dirancang untuk bertahan dalam ingatan.</h2>
          <div className="h-px w-16 bg-gold" />
          <p className="text-xs leading-relaxed text-slate-text">Mentari Wedding Organizer tidak mengejar tren yang cepat berlalu. Kami menciptakan perayaan dengan detail yang terarah, kemewahan yang tenang, serta ruang bagi cerita setiap pasangan untuk menjadi pusatnya.</p>
          <p className="text-xs leading-relaxed text-slate-text">Dari proses konsultasi awal hingga momen terakhir D-Day, kami menyatukan strategi, estetika, dan ketenangan dalam satu pengalaman perencanaan yang personal.</p>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-gold/25 bg-gold/20">
            {STATS.map(([value, label]) => <div key={label} className="bg-cream/70 p-3 text-center"><p className="font-serif text-xl font-bold text-gold-dark">{value}</p><p className="mt-1 font-cinzel text-[7px] font-bold tracking-[0.12em] text-slate-text uppercase">{label}</p></div>)}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
