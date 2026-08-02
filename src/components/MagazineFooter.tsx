"use client";

import { ArrowLeft, ArrowRight, List, MessageCircle, Share2, Volume2, VolumeX } from "lucide-react";
import { useAmbientMusic } from "@/components/AmbientMusic";
import { padPage } from "@/lib/format";
import { TOTAL_PAGES } from "@/data/lookbook";

type Props = {
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenNavigator: () => void;
  onOpenConsultation: () => void;
  onShare: () => void;
  nextLabel: string;
};

export function MagazineFooter({ currentPage, onPrev, onNext, onOpenNavigator, onOpenConsultation, onShare, nextLabel }: Props) {
  const { isPlaying, toggleMusic } = useAmbientMusic();

  return (
    <>
      {/* Mobile dock */}
      <footer
        id="magazine-footer"
        className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-charcoal/90 backdrop-blur-md border-t border-gold/30 text-white px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      >
        <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="mb-1.5 block w-full truncate text-left font-cinzel text-[7px] font-bold tracking-[0.14em] text-gold/85 uppercase disabled:opacity-40">
          Next chapter · {nextLabel} →
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentPage <= 1}
            className="h-10 w-10 rounded-full border border-gold/40 text-gold flex items-center justify-center disabled:opacity-30 active:bg-gold/20"
            aria-label="Halaman sebelumnya"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex-1 text-center">
            <span className="font-cinzel text-[11px] tracking-widest text-gold font-bold">
              {padPage(currentPage)} / {padPage(TOTAL_PAGES)}
            </span>
          </div>

          <button type="button" onClick={onOpenNavigator} className="h-10 w-10 rounded-full border border-gold/40 text-gold flex items-center justify-center" aria-label="Buka daftar isi"><List className="w-4 h-4" /></button>

          <button type="button" onClick={onShare} className="h-10 w-10 rounded-full border border-gold/40 text-gold flex items-center justify-center" aria-label="Bagikan lookbook"><Share2 className="w-4 h-4" /></button>

          <button type="button" data-ambient-control onClick={toggleMusic} aria-pressed={isPlaying} className={`h-10 w-10 rounded-full border flex items-center justify-center ${isPlaying ? "border-gold bg-gold/15 text-gold" : "border-gold/40 text-gold"}`} aria-label={isPlaying ? "Matikan musik ambient" : "Nyalakan musik ambient"}>{isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}</button>

          <button type="button" onClick={onOpenConsultation} className="h-10 w-10 rounded-full gold-gradient-bg text-white flex items-center justify-center shadow-md" aria-label="Mulai konsultasi"><MessageCircle className="w-4 h-4" /></button>

          <button
            type="button"
            onClick={onNext}
            disabled={currentPage >= TOTAL_PAGES}
            className="h-10 w-10 rounded-full gold-gradient-bg text-white inline-flex items-center justify-center disabled:opacity-30"
            aria-label="Halaman berikutnya"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Desktop footer — aligned with magazine width */}
      <footer className="hidden md:block sticky bottom-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-gold/25 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-2 py-3 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={currentPage <= 1}
              className="px-4 py-2 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center gap-1.5 disabled:opacity-30"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button type="button" data-ambient-control onClick={toggleMusic} aria-pressed={isPlaying} className={`h-9 w-9 rounded-full border flex items-center justify-center ${isPlaying ? "border-gold bg-gold/15 text-gold" : "border-gold/35 text-gold"}`} aria-label={isPlaying ? "Matikan musik ambient" : "Nyalakan musik ambient"}>{isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}</button>
          </div>

          <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="group text-center disabled:opacity-40">
            <span className="block font-cinzel text-[7px] tracking-[0.16em] text-gray-400 uppercase">Next chapter</span>
            <span className="block font-serif text-xs text-gold-light transition group-hover:text-white">{nextLabel} <ArrowRight className="mb-0.5 inline h-3 w-3" /></span>
            <span className="mt-0.5 block font-cinzel text-[8px] tracking-[0.16em] text-gold/70">PAGE {padPage(currentPage)} / {padPage(TOTAL_PAGES)}</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={currentPage >= TOTAL_PAGES}
            className="px-4 py-2 rounded-full gold-gradient-bg text-white font-medium hover:brightness-105 transition-all inline-flex items-center gap-1.5 disabled:opacity-30"
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </>
  );
}
