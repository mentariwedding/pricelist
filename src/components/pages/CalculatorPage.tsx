"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { ADDONS, PACKAGES } from "@/data/lookbook";
import { formatIDR, waLink } from "@/lib/format";

const CALC_ADDONS = ADDONS.filter((a) => a.calc);

export function CalculatorPage() {
  const defaultPackage = PACKAGES.find((item) => item.id === "royal") ?? PACKAGES[0];
  const [pkgId, setPkgId] = useState(defaultPackage.id);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const pkg = PACKAGES.find((p) => p.id === pkgId) ?? defaultPackage;

  const { total, addonNames } = useMemo(() => {
    const names: string[] = [];
    let sum = pkg.price;
    for (const addon of CALC_ADDONS) {
      if (selected[addon.name]) {
        sum += addon.price;
        names.push(addon.name);
      }
    }
    return { total: sum, addonNames: names };
  }, [pkg, selected]);

  const message = useMemo(() => {
    let msg = `Halo Mentari Wedding Organizer, saya mencoba simulasi anggaran di Lookbook Halaman 18:\n\n• Paket Utama: ${pkg.name} (${formatIDR(pkg.price)})\n`;
    if (addonNames.length > 0) {
      msg += `• Add-ons: ${addonNames.join(", ")}\n`;
    }
    msg += `\nEstimasi Total: ${formatIDR(total)}\n\nMohon jadwal konsultasi lebih lanjut. Terima kasih!`;
    return msg;
  }, [pkg, addonNames, total]);

  return (
    <PageShell page={18} className="investment-page text-white" footerDark>
      <PageHeader
        left="Curated Proposal Builder"
        right="Your Wedding Investment, Personalised"
        dark
      />

      <div className="page-body space-y-5">
        <div className="text-center space-y-1">
          <p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold uppercase">
            Your personal investment edit
          </p>
          <h2 className="font-serif text-2xl font-bold text-white">
            Rancang proposal pernikahan Anda.
          </h2>
          <p className="text-xs text-gray-300 font-light">
            Pilih koleksi utama dan finishing touches untuk estimasi awal yang personal.
          </p>
        </div>

        <div className="space-y-4 max-w-xl mx-auto rounded-2xl border border-gold/35 bg-[#211d18] p-4 text-xs shadow-[0_20px_48px_-28px_rgba(0,0,0,0.9)] sm:p-5">
          <div>
            <label className="block font-cinzel text-gold text-[10px] uppercase font-bold mb-1">
              1. Pilih Koleksi Paket Utama:
            </label>
            <select
              value={pkgId}
              onChange={(e) => setPkgId(e.target.value)}
              className="w-full rounded-xl border border-gold/45 bg-[#f6f1ea] p-3 font-medium text-charcoal shadow-inner focus:outline-none focus:border-gold"
            >
              {PACKAGES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({formatIDR(p.price)})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-cinzel text-gold text-[10px] uppercase font-bold mb-1">
              2. Pilihan Add-ons Ultra Opsional:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
              {CALC_ADDONS.map((addon) => (
                <label
                  key={addon.name}
                  className={`flex items-center space-x-2 rounded-lg border p-2 transition-colors cursor-pointer ${
                    selected[addon.name]
                      ? "border-gold/75 bg-[#30281d] text-gold-light"
                      : "border-[#4a4033] bg-[#171411] text-gray-200 hover:border-gold/55"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!selected[addon.name]}
                    onChange={(e) =>
                      setSelected((prev) => ({
                        ...prev,
                        [addon.name]: e.target.checked,
                      }))
                    }
                    className="rounded border-gold/60 bg-[#171411] text-gold focus:ring-gold"
                  />
                  <span>
                    {addon.name} (+
                    {(addon.price / 1_000_000).toLocaleString("id-ID")}
                    jt)
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-gold/20 pt-4 sm:flex-row sm:justify-between">
            <div>
              <span className="text-[10px] text-gray-200 block uppercase">
                Estimasi Investasi Mulai Dari:
              </span>
              <div className="font-serif text-3xl font-bold text-gold">
                {formatIDR(total)}
              </div>
            </div>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full gold-gradient-bg text-white font-semibold text-xs tracking-wider uppercase hover:brightness-105 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Request Curated Proposal
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
