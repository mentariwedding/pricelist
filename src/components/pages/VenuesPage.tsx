"use client";

import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { DEFAULT_VENUES } from "@/data/lookbook";

type VenueItem = { image: string; tag: string; title: string; desc: string; coordinates?: string; mapUrl?: string };

export function VenuesPage({ venues }: { venues?: VenueItem[] }) {
  const remoteVenues = venues ?? [];
  // The six Mentari-curated venues are always visible. A matching Supabase record
  // may enrich its title/description/image, but can never remove a venue card.
  const list = DEFAULT_VENUES.map((fallback) => {
    const remote = remoteVenues.find(
      (venue) => venue.title.trim().toLowerCase() === fallback.title.trim().toLowerCase(),
    );
    return remote
      ? { ...fallback, ...remote, coordinates: fallback.coordinates, mapUrl: fallback.mapUrl }
      : fallback;
  });

  return (
    <PageShell page={6}>
      <PageHeader left="Curated Venues" right="Places Made for Celebration" />
      <div className="page-body space-y-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Venue edit</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-charcoal sm:text-3xl">Ruang yang memberi cerita pada perayaan.</h2>
          </div>
          <p className="max-w-xs text-[10px] leading-relaxed text-slate-text sm:text-right"><span className="font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold-dark uppercase">6 curated venues</span><br />Ballroom, garden, dan pavilion pilihan untuk konsep yang terasa tepat.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, 6).map((venue, index) => (
            <article key={venue.title} className="group overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-sm">
              <div className="relative h-44 overflow-hidden">
                <Image src={venue.image} alt={venue.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute bottom-3 left-3 font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-light uppercase">0{index + 1} · {venue.tag}</span>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-serif text-lg font-semibold text-charcoal">{venue.title}</h3>
                <p className="font-cinzel text-[7px] font-bold tracking-[0.14em] text-gold-dark uppercase">Venue partner · curated by Mentari</p>
                <p className="text-[10px] leading-relaxed text-slate-text">{venue.desc}</p>
                {venue.coordinates && (
                  <div className="mt-3 overflow-hidden border border-gold/20 bg-cream/45">
                    <div className="relative h-28 bg-cream">
                      <iframe
                        title={`Peta lokasi ${venue.title}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(venue.coordinates)}&z=15&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 h-full w-full border-0 grayscale-[0.25] contrast-[0.9]"
                      />
                      <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-charcoal/85 px-2 py-1 font-cinzel text-[6px] font-bold tracking-[0.12em] text-gold-light uppercase">Map preview</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 px-2.5 py-2">
                      <span className="truncate font-mono text-[8px] text-slate-text">{venue.coordinates}</span>
                      {venue.mapUrl && <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-[8px] font-semibold text-gold-dark hover:text-charcoal"><Navigation className="h-3 w-3" /> Open Maps</a>}
                    </div>
                  </div>
                )}
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
