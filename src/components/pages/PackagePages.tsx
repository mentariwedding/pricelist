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
        left={`Collection Tier ${page === 10 ? "I" : page === 11 ? "II" : "III"}`}
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

        {page === 12 && (
          <section className="rounded-xl border border-gold/25 bg-charcoal px-3 py-3 text-white">
            <div className="mb-2 flex items-baseline justify-between"><p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">Collection at a glance</p><p className="text-[8px] text-gray-400">Pilih pengalaman yang paling terasa seperti Anda</p></div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
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
      </div>
    </PageShell>
  );
}

export function IntimatePage() {
  return (
    <PackagePage
      pkg={PACKAGES[0]}
      page={10}
      featuresTitle="Rincian Layanan Termasuk:"
    />
  );
}

export function RoyalPage() {
  return (
    <PackagePage
      pkg={PACKAGES[1]}
      page={11}
      featuresTitle="Rincian Layanan Eksklusif:"
    />
  );
}

export function ImperialPage() {
  return (
    <PackagePage
      pkg={PACKAGES[2]}
      page={12}
      featuresTitle="Fasilitas Mewah Termasuk:"
    />
  );
}
