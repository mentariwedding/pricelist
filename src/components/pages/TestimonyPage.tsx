"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { TESTIMONIALS } from "@/data/lookbook";

export function TestimonyPage() {
  return (
    <PageShell page={19} className="bg-[#f4efe6]">
      <PageHeader left="Our Testimony" right="#KataMereka" />
      <div className="page-body space-y-5">
        <div className="text-center">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.22em] text-gold-dark uppercase">Stories from the heart</p>
          <h2 className="mt-1 font-serif text-3xl font-bold text-charcoal">Kepercayaan yang menjadi bagian dari cerita mereka.</h2>
          <p className="mx-auto mt-2 max-w-xl text-[10px] leading-relaxed text-slate-text">Setiap perayaan memiliki perjalanan yang berbeda. Berikut beberapa cerita dari pasangan yang telah mempercayakan hari istimewanya bersama Mentari.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TESTIMONIALS.map((testimony, index) => (
            <article key={testimony.name} className={`group overflow-hidden border ${index === 0 ? "border-gold/50 bg-charcoal text-white" : "border-gold/25 bg-white"}`}>
              <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[7.5rem_1fr]">
                <div className="relative min-h-[10rem] overflow-hidden">
                  <Image src={testimony.image} alt={`${testimony.name} bersama Mentari Wedding`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 104px, 120px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute bottom-2 left-2 font-serif text-xl italic text-gold-light/90">0{index + 1}</span>
                </div>
                <div className="relative p-4">
                  <Quote className={`absolute right-3 top-3 h-5 w-5 ${index === 0 ? "text-gold/40" : "text-gold/25"}`} />
                  <p className={`pr-4 font-serif text-[11px] italic leading-relaxed ${index === 0 ? "text-gray-200" : "text-slate-text"}`}>“{testimony.quote}”</p>
                  <div className={`mt-3 border-t pt-2 ${index === 0 ? "border-white/15" : "border-gold/15"}`}>
                    <p className={`font-serif text-sm font-semibold ${index === 0 ? "text-gold-light" : "text-charcoal"}`}>{testimony.name}</p>
                    <p className={`font-cinzel text-[7px] font-bold tracking-[0.14em] uppercase ${index === 0 ? "text-gray-400" : "text-gold-dark"}`}>{testimony.event}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center font-serif text-[11px] italic text-slate-text">Because the most beautiful celebrations are felt long after the day is over.</p>
      </div>
    </PageShell>
  );
}
