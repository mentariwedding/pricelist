"use client";

import { PageHeader, PageShell } from "@/components/PageShell";
import { VENDORS } from "@/data/lookbook";

const TYPE_TREATMENTS = [
  "col-span-1 justify-self-start text-xl sm:text-2xl md:text-3xl font-semibold -rotate-2",
  "col-span-1 justify-self-end text-sm sm:text-base md:text-lg font-medium rotate-2",
  "col-span-2 justify-self-center text-2xl sm:text-3xl md:text-4xl font-bold rotate-1",
  "col-span-1 justify-self-start text-base sm:text-lg md:text-xl font-normal rotate-3",
  "col-span-1 justify-self-end text-xl sm:text-2xl md:text-3xl font-semibold -rotate-1",
  "col-span-2 justify-self-start text-lg sm:text-xl md:text-2xl font-medium -rotate-2",
  "col-span-1 justify-self-end text-sm sm:text-base md:text-lg font-bold rotate-2",
  "col-span-1 justify-self-start text-2xl sm:text-3xl md:text-4xl font-semibold -rotate-3",
  "col-span-2 justify-self-end text-base sm:text-lg md:text-xl font-medium rotate-1",
  "col-span-1 justify-self-start text-lg sm:text-xl md:text-2xl font-bold rotate-2",
  "col-span-1 justify-self-end text-xl sm:text-2xl md:text-3xl font-normal -rotate-2",
  "col-span-2 justify-self-center text-sm sm:text-base md:text-lg font-semibold rotate-1",
  "col-span-1 justify-self-start text-2xl sm:text-3xl md:text-4xl font-bold -rotate-1",
  "col-span-1 justify-self-end text-base sm:text-lg md:text-xl font-medium rotate-3",
  "col-span-2 justify-self-start text-xl sm:text-2xl md:text-3xl font-semibold -rotate-2",
  "col-span-1 justify-self-end text-sm sm:text-base md:text-lg font-bold rotate-2",
  "col-span-1 justify-self-center text-lg sm:text-xl md:text-2xl font-medium -rotate-1",
] as const;

export function VendorsPage() {
  return (
    <PageShell page={7} className="vendor-spread text-white" footerDark>
      <PageHeader left="Preferred Partners" right="A Mentari Curated Directory" dark />

      <div className="page-body flex flex-1 flex-col justify-center gap-5">
        <div className="text-center">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.22em] text-gold uppercase">The little black book</p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">Nama-nama yang kami percaya.</h2>
          <p className="mx-auto mt-2 max-w-md text-[10px] leading-relaxed text-gray-200">Jaringan kolaborator pilihan untuk mewujudkan detail yang terasa indah, rapi, dan personal.</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-[#f5f0e7] px-4 py-6 sm:px-8 sm:py-8">
          <span className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 font-serif text-[9rem] italic leading-none text-gold/[0.06] sm:text-[13rem]">M</span>
          <span className="pointer-events-none absolute -right-2 bottom-0 font-cinzel text-[7px] font-bold tracking-[0.2em] text-gold/50 uppercase">Mentari Curated · 2026 / 27</span>
          <div className="relative grid grid-cols-2 items-center gap-x-3 gap-y-4 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-6">
            {VENDORS.map((vendor, index) => (
              <span
                key={vendor.title}
                title={vendor.desc}
                className={`font-serif leading-none text-charcoal transition duration-300 hover:scale-105 hover:text-gold-dark ${TYPE_TREATMENTS[index % TYPE_TREATMENTS.length]}`}
              >
                {vendor.title}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center font-serif text-[11px] italic text-gray-300">and the many hands behind a beautifully seamless day.</p>
      </div>
    </PageShell>
  );
}
