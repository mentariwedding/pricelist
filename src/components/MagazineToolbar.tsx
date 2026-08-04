"use client";

import { useState } from "react";
import { CalendarCheck, ChevronLeft, ChevronRight, CircleHelp, List, Printer, Share2, Sun } from "lucide-react";
import { padPage } from "@/lib/format";
import { TOTAL_PAGES } from "@/data/lookbook";

type Props = {
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenNavigator: () => void;
  onOpenConsultation: () => void;
  onOpenAvailability: () => void;
  onAskPage: () => void;
};

const JOURNEY = ["Discover", "Curate", "Plan", "Celebrate"];

function journeyStep(page: number) {
  if (page <= 4) return 0;
  if (page <= 9) return 1;
  if (page <= 16) return 2;
  return 3;
}

export function MagazineToolbar({ currentPage, onPrev, onNext, onOpenNavigator, onOpenConsultation, onOpenAvailability, onAskPage }: Props) {
  const [shared, setShared] = useState(false);
  const share = async () => {
    const shareData = { title: "Mentari Wedding Lookbook", text: "Wedding Investment Lookbook — Mentari Wedding Organizer", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        window.setTimeout(() => setShared(false), 1800);
      }
    } catch {
      // User closed the native sharing dialog; no action is needed.
    }
  };

  return (
    <header id="magazine-toolbar" className="hidden md:block sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-gold/25 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-2 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center text-white shadow-md shrink-0"><Sun className="w-3.5 h-3.5" /></div>
          <div className="min-w-0"><h1 className="font-cinzel text-[11px] font-extrabold tracking-[0.22em] text-white uppercase leading-tight">MENTARI WEDDING</h1><p className="text-[9px] text-gold/90 tracking-[0.14em]">Planned to Perfection • 2026/2027</p></div>
        </div>

        <div className="flex items-center gap-3 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-gold/30">
          <button type="button" onClick={onPrev} disabled={currentPage <= 1} className="text-gold hover:text-white transition-colors disabled:opacity-30 p-1" aria-label="Halaman sebelumnya"><ChevronLeft className="w-4 h-4" /></button>
          <span className="text-[11px] font-cinzel tracking-[0.2em] text-gray-300 tabular-nums"><span className="text-gold font-bold">{padPage(currentPage)}</span><span className="mx-1.5 text-gold/40">/</span><span>{padPage(TOTAL_PAGES)}</span></span>
          <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="text-gold hover:text-white transition-colors disabled:opacity-30 p-1" aria-label="Halaman berikutnya"><ChevronRight className="w-4 h-4" /></button>
        </div>

        <div className="flex items-center gap-1.5 text-xs shrink-0">
          <button type="button" onClick={onOpenNavigator} className="px-2.5 py-1.5 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center gap-1"><List className="w-3.5 h-3.5" /> Isi</button>
          <button type="button" onClick={() => window.print()} className="px-2.5 py-1.5 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center gap-1"><Printer className="w-3.5 h-3.5" /> PDF</button>
          <button type="button" onClick={share} className="px-2.5 py-1.5 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> {shared ? "Copied" : "Share"}</button>
          <button type="button" onClick={onOpenAvailability} className="px-2.5 py-1.5 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center gap-1"><CalendarCheck className="w-3.5 h-3.5" /> Check Date</button>
          <button type="button" onClick={onAskPage} className="h-8 w-8 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center justify-center" aria-label="Tanyakan halaman ini"><CircleHelp className="w-3.5 h-3.5" /></button>
          <button type="button" onClick={onOpenConsultation} className="px-3 py-1.5 rounded-full gold-gradient-bg text-white font-semibold hover:brightness-105 transition-all shadow-md">Request Proposal</button>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-6 pb-2.5 lg:px-2">
        {JOURNEY.map((label, index) => {
          const activeStep = journeyStep(currentPage);
          const isComplete = index <= activeStep;
          return <div key={label} className="flex flex-1 items-center gap-2"><span className={`font-cinzel text-[7px] tracking-[0.14em] uppercase ${isComplete ? "text-gold" : "text-gray-600"}`}>{label}</span>{index < JOURNEY.length - 1 && <span className={`h-px flex-1 ${index < activeStep ? "bg-gold" : "bg-white/10"}`} />}</div>;
        })}
      </div>
    </header>
  );
}
