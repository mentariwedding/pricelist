"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { DEFAULT_VENUES } from "@/data/lookbook";

type VenueItem = { image: string; tag: string; title: string; desc: string };

export function VenuesPage({ venues }: { venues?: VenueItem[] }) {
  const list = venues?.length ? venues : [...DEFAULT_VENUES];

  return (
    <PageShell page={6}>
      <PageHeader left="Curated Venues" right="Places Made for Celebration" />
      <div className="page-body space-y-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Venue edit</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-charcoal sm:text-3xl">Ruang yang memberi cerita pada perayaan.</h2>
          </div>
          <p className="max-w-xs text-[10px] leading-relaxed text-slate-text sm:text-right">Ballroom, garden, dan pavilion pilihan untuk konsep yang terasa tepat.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {list.slice(0, 3).map((venue, index) => (
            <article key={venue.title} className="group overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-sm">
              <div className="relative h-44 overflow-hidden">
                <Image src={venue.image} alt={venue.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute bottom-3 left-3 font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-light uppercase">0{index + 1} · {venue.tag}</span>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-serif text-lg font-semibold text-charcoal">{venue.title}</h3>
                <p className="font-cinzel text-[7px] font-bold tracking-[0.14em] text-gold-dark uppercase">Venue partner · curated by Mentari</p>
                <p className="text-[10px] leading-relaxed text-slate-text">{venue.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-gold/20 bg-cream/70 p-3 text-[10px] leading-relaxed text-slate-text">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          <span><strong className="text-charcoal">Private venue consultation.</strong> Tim Mentari mendampingi survey lokasi, layout teknis, dan negosiasi kebutuhan acara.</span>
        </div>
      </div>
    </PageShell>
  );
}
