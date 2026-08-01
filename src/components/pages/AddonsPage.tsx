"use client";

import { PageHeader, PageShell } from "@/components/PageShell";
import { ADDONS } from "@/data/lookbook";
import { formatIDR } from "@/lib/format";

function addonCategory(name: string) {
  if (/Video|Drone|Creator|Streaming/i.test(name)) return "Capture the moment";
  if (/Quartet|DJ|Fireworks|Effects/i.test(name)) return "Atmosphere & entertainment";
  if (/Booth|Stationery/i.test(name)) return "Guest experience";
  return "Comfort & coordination";
}

function addonBadge(name: string) {
  if (/Creator|Video/i.test(name)) return "Content ready";
  if (/Booth|Quartet/i.test(name)) return "Most requested";
  if (/Fireworks|Effects/i.test(name)) return "D-day impact";
  return null;
}

export function AddonsPage() {
  return (
    <PageShell page={13}>
      <PageHeader
        left="Customization"
        right="Menu Layanan Ekstra (Add-ons)"
      />

      <div className="page-body space-y-4">
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl font-bold text-charcoal">
            Katalog Layanan Tambahan Lengkap
          </h2>
          <p className="text-[11px] text-slate-text font-light">
            Pilihan fitur premium untuk personalisasi pesta pernikahan impian
            Anda.
          </p>
        </div>

        <div className="grid gap-2 md:hidden">
          {ADDONS.map((addon, index) => (
            <article
              key={addon.name}
              className="rounded-xl border border-gold/25 bg-white/80 p-3 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">
                    {addonCategory(addon.name)} · {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <h3 className="text-xs font-semibold text-charcoal">{addon.name}</h3>
                    {addonBadge(addon.name) && <span className="rounded-full border border-gold/35 bg-gold/10 px-1.5 py-0.5 font-cinzel text-[6px] font-bold tracking-[0.1em] text-gold-dark uppercase">{addonBadge(addon.name)}</span>}
                  </div>
                </div>
                <p className="shrink-0 font-serif text-sm font-bold text-gold-dark">
                  {addon.name.includes("Crew Extra")
                    ? `${formatIDR(addon.price)} / pax`
                    : formatIDR(addon.price)}
                </p>
              </div>
              <p className="mt-1.5 text-[10px] leading-relaxed text-slate-text">
                {addon.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-sm md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-cream/80 font-cinzel text-[9px] text-charcoal border-b border-gold/20">
                  <th className="py-2.5 px-4 uppercase font-bold">
                    Fitur Add-on
                  </th>
                  <th className="py-2.5 px-4 uppercase font-bold">
                    Rincian Deskripsi
                  </th>
                  <th className="py-2.5 px-4 uppercase font-bold text-right">
                    Biaya Tambahan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream text-[11px] text-slate-text">
                {ADDONS.map((addon) => (
                  <tr key={addon.name}>
                    <td className="py-2 px-4 font-semibold text-charcoal">
                      <span className="block">{addon.name}</span>
                      <span className="font-cinzel text-[7px] font-bold tracking-[0.12em] text-gold-dark uppercase">
                        {addonCategory(addon.name)}{addonBadge(addon.name) ? ` · ${addonBadge(addon.name)}` : ""}
                      </span>
                    </td>
                    <td className="py-2 px-4">{addon.desc}</td>
                    <td className="py-2 px-4 text-right">
                      {addon.name.includes("Crew Extra")
                        ? `${formatIDR(addon.price)} / pax`
                        : formatIDR(addon.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
