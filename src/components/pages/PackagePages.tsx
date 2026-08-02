"use client";

import Image from "next/image";
import { Check, Gift } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { PACKAGES, type PackageTier } from "@/data/lookbook";
import { formatIDR } from "@/lib/format";

function PackagePage({
  pkg,
  page,
  featuresTitle,
}: {
  pkg: PackageTier;
  page: number;
  featuresTitle: string;
}) {
  const imageLeft = page !== 10;

  return (
    <PageShell
      page={page}
      className={
        pkg.popular
          ? "bg-gradient-to-b from-white via-cream/30 to-white"
          : undefined
      }
    >
      <PageHeader
        left={page === 10 ? "Engagement Collection" : `Collection Tier ${page === 13 ? "I" : page === 14 ? "II" : "III"}`}
        right={pkg.subtitle}
      />

      <div className="page-body space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gold/20 pb-4">
          <div>
            {pkg.popular ? (
              <span className="inline-block px-3 py-0.5 rounded-full gold-gradient-bg text-white text-[9px] font-bold tracking-widest uppercase mb-1">
                {pkg.tag}
              </span>
            ) : (
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase">
                {pkg.tag}
              </span>
            )}
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-charcoal">
              {pkg.name}
            </h2>
            {pkg.popular && (
              <p className="text-xs text-slate-text">{pkg.subtitle}</p>
            )}
          </div>
          <div className="mt-2 sm:mt-0 text-left sm:text-right">
            <span className="text-[10px] text-slate-text uppercase block">
              Investasi Mulai Dari
            </span>
            <span className="font-serif text-3xl font-bold text-gold-dark">
              {formatIDR(pkg.price)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gold/25 bg-gold/20 sm:grid-cols-4">
          {[
            ["Ideal untuk", pkg.idealFor],
            ["Waktu persiapan", pkg.planningWindow],
            ["Mentari team", pkg.team],
            ["Experience", pkg.experience],
          ].map(([label, value]) => (
            <div key={label} className="bg-ivory/95 px-3 py-2.5 text-center">
              <p className="font-cinzel text-[7px] font-bold tracking-[0.12em] text-gold-dark uppercase">
                {label}
              </p>
              <p className="mt-1 font-serif text-[11px] font-semibold text-charcoal sm:text-xs">
                {value}
              </p>
            </div>
          ))}
        </div>

        {pkg.priceOptions && (
          <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.priceOptions.map((option) => (
              <div key={option.label} className="border border-gold/30 bg-white/75 p-3">
                <p className="font-cinzel text-[7px] font-bold tracking-[0.13em] text-gold-dark uppercase">{option.label}</p>
                <p className="mt-1 font-serif text-xl font-bold text-charcoal">{formatIDR(option.price)}</p>
              </div>
            ))}
          </section>
        )}

        {page === 15 && (
          <section className="rounded-xl border border-gold/25 bg-charcoal px-3 py-3 text-white">
            <div className="mb-2 flex items-baseline justify-between"><p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">Collection at a glance</p><p className="text-[8px] text-gray-400">Pilih pengalaman yang paling terasa seperti Anda</p></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
              {PACKAGES.map((tier) => <div key={tier.id} className={`p-2 ${tier.id === pkg.id ? "bg-gold/20" : "bg-[#1b1b1b]"}`}><p className="font-cinzel text-[7px] font-bold tracking-[0.1em] text-gold uppercase">{tier.id}</p><p className="mt-1 font-serif text-[10px] text-white">{tier.idealFor}</p><p className="mt-0.5 text-[9px] text-gold-light">{formatIDR(tier.price)}</p></div>)}
            </div>
          </section>
        )}

        <p className="-mt-3 text-[9px] italic text-slate-text">Harga mulai dari dan dapat menyesuaikan pilihan venue, jumlah tamu, kebutuhan adat, serta detail personal acara.</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {imageLeft && (
            <div className="md:col-span-5 relative h-[280px]">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="rounded-2xl border border-gold/30 object-cover shadow-sm"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          )}

          <div
            className={`${imageLeft ? "md:col-span-7" : "md:col-span-7"} space-y-3 text-xs text-slate-text`}
          >
            <h3 className="font-cinzel font-bold text-charcoal text-sm uppercase">
              {featuresTitle}
            </h3>
            <ul className="space-y-2">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
              {pkg.bonus && (
                <li className="flex items-start gap-2 text-gold-dark font-semibold bg-gold/10 p-2 rounded-lg border border-gold/30">
                  <Gift className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Extra Bonus:</strong> {pkg.bonus}
                  </span>
                </li>
              )}
              {pkg.note && (
                <li className="flex items-start gap-2 border border-gold/30 bg-charcoal p-2 text-gold-light rounded-lg">
                  <Gift className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Opsi Tambahan:</strong> {pkg.note}</span>
                </li>
              )}
            </ul>
          </div>

          {!imageLeft && (
            <div className="md:col-span-5 relative h-[290px]">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="rounded-2xl border-2 border-gold object-cover shadow-md"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          )}
        </div>

        {pkg.galleryImages && (
          <section className="border-t border-gold/20 pt-4">
            <div className="mb-2 flex items-center justify-between"><p className="font-cinzel text-[8px] font-bold tracking-[0.15em] text-gold-dark uppercase">Visual edit</p><p className="text-[8px] italic text-slate-text">Adat · detail · dekorasi</p></div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {pkg.galleryImages.map((src, index) => <div key={src} className={`relative overflow-hidden border border-gold/25 ${index === 1 ? "h-28 sm:h-36" : "h-24 sm:h-32"}`}><Image src={src} alt={`${pkg.name} visual ${index + 1}`} fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 640px) 48vw, 240px" /><span className="absolute bottom-1.5 left-1.5 bg-charcoal/70 px-1.5 py-0.5 font-cinzel text-[6px] tracking-[0.1em] text-gold-light uppercase">0{index + 1}</span></div>)}
            </div>
          </section>
        )}

        {pkg.vendorSections && (
          <section className="space-y-3 border-t border-gold/25 pt-5">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
              <div><p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-dark uppercase">Item list vendor</p><h3 className="mt-1 font-serif text-2xl font-semibold text-charcoal">Vendor inclusions yang telah disiapkan.</h3></div>
              <p className="text-[9px] italic text-slate-text">Detail dapat disesuaikan kembali pada proposal akhir.</p>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {pkg.vendorSections.map((section, index) => (
                <article key={section.title} className={`border p-3 ${index === 0 ? "border-gold/40 bg-charcoal text-white" : "border-gold/20 bg-white/70"}`}>
                  <p className={`font-cinzel text-[8px] font-bold tracking-[0.14em] uppercase ${index === 0 ? "text-gold" : "text-gold-dark"}`}>{section.title}</p>
                  <ul className="mt-2 space-y-1.5">
                    {section.items.map((item, itemIndex) => <li key={`${section.title}-${item}-${itemIndex}`} className={`flex gap-1.5 text-[9px] leading-relaxed ${index === 0 ? "text-gray-300" : "text-slate-text"}`}><Check className="mt-0.5 h-3 w-3 shrink-0 text-gold" />{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            {pkg.conceptTags && <div className="flex flex-wrap gap-1.5">{pkg.conceptTags.map((tag) => <span key={tag} className="rounded-full border border-gold/35 bg-gold/10 px-2 py-1 font-cinzel text-[7px] font-bold tracking-[0.12em] text-gold-dark uppercase">{tag}</span>)}</div>}
            {pkg.complimentary && <div className="border-l-2 border-gold bg-cream/70 p-3"><p className="font-cinzel text-[8px] font-bold tracking-[0.14em] text-gold-dark uppercase">Complimentary</p><p className="mt-1 text-[10px] leading-relaxed text-slate-text">{pkg.complimentary.join(" · ")}</p></div>}
          </section>
        )}
      </div>
    </PageShell>
  );
}

export function EngagementPage() {
  return <PackagePage pkg={PACKAGES[0]} page={10} featuresTitle="Rincian Paket Lamaran:" />;
}

export function IntimatePage() {
  return <PackagePage pkg={PACKAGES[1]} page={13} featuresTitle="Rincian Layanan Termasuk:" />;
}

export function RoyalPage() {
  return <PackagePage pkg={PACKAGES[2]} page={14} featuresTitle="Rincian Layanan Eksklusif:" />;
}

export function ImperialPage() {
  return <PackagePage pkg={PACKAGES[3]} page={15} featuresTitle="Fasilitas Mewah Termasuk:" />;
}
