"use client";

import Image from "next/image";
import { Clock3, UsersRound } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { WEDDING_CREW_SERVICES } from "@/data/lookbook";
import { formatIDR } from "@/lib/format";

export function WeddingCrewPage() {
  return (
    <PageShell page={12} className="bg-[#f3eee5]">
      <PageHeader left="Wedding Crew Service" right="Coordination for Your Perfect Day" />
      <div className="page-body space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
          <section className="md:col-span-7">
            <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">Day-of coordination</p>
            <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-charcoal">Semua sudah Anda siapkan. Kami pastikan semuanya berjalan selaras.</h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-text">Wedding Crew Service adalah layanan koordinasi untuk pasangan yang telah memiliki venue dan vendor pilihan. Tim Mentari membantu menyusun detail persiapan, menyelaraskan rundown, serta mengoordinasikan seluruh vendor pada hari acara agar setiap momen berjalan tertib, hangat, dan tepat waktu.</p>
          </section>
          <div className="relative h-32 overflow-hidden rounded-xl border border-gold/30 md:col-span-5 md:h-40">
            <Image src="/images/crew1.jpg" alt="Tim persiapan dan koordinasi acara Mentari Wedding" fill className="object-cover" sizes="(max-width: 768px) 100vw, 35vw" />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 font-cinzel text-[8px] font-bold tracking-[0.14em] text-gold-light uppercase">Your vendors · Our coordination</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {["/images/crew2.jpeg", "/images/mc.jpg"].map((src, index) => <div key={src} className="relative h-24 overflow-hidden border border-gold/25 sm:h-32"><Image src={src} alt={`Wedding crew coordination ${index + 1}`} fill className="object-cover" sizes="(max-width: 640px) 48vw, 360px" /></div>)}
        </div>

        <div className="flex items-center justify-between border-y border-gold/20 py-2.5">
          <span className="font-cinzel text-[8px] font-bold tracking-[0.15em] text-gold-dark uppercase">Pilih skala acara dan durasi koordinasi</span>
          <span className="text-[9px] italic text-slate-text">Harga mulai dari</span>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {WEDDING_CREW_SERVICES.map((service, index) => (
            <article key={service.name} className={`border p-3 ${index === 8 ? "border-gold bg-charcoal text-white" : "border-gold/25 bg-white/80 text-charcoal"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`font-cinzel text-[7px] font-bold tracking-[0.14em] uppercase ${index === 8 ? "text-gold" : "text-gold-dark"}`}>Crew service {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-serif text-base font-semibold leading-tight">{service.name}</h3>
                  <p className={`mt-1 font-cinzel text-[8px] font-bold tracking-[0.12em] uppercase ${index === 8 ? "text-gold-light" : "text-slate-text"}`}>{service.pax}</p>
                </div>
                <UsersRound className={`h-4 w-4 shrink-0 ${index === 8 ? "text-gold" : "text-gold/70"}`} />
              </div>
              <div className="mt-3 flex items-end justify-between border-t border-current/10 pt-2">
                <span className={`inline-flex items-center gap-1 text-[9px] ${index === 8 ? "text-gray-300" : "text-slate-text"}`}><Clock3 className="h-3 w-3 text-gold" /> {service.duration}</span>
                <span className={`font-serif text-lg font-bold ${index === 8 ? "text-gold-light" : "text-gold-dark"}`}>{formatIDR(service.price)}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="border-l-2 border-gold pl-3 text-[9px] italic leading-relaxed text-slate-text">Harga dapat disesuaikan berdasarkan kompleksitas rundown, jumlah vendor yang dikoordinasikan, lokasi acara, serta kebutuhan persiapan sebelum hari H.</p>
      </div>
    </PageShell>
  );
}
