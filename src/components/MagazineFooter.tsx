"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarCheck, List, MessageCircle, MoreHorizontal, Share2, Volume2, VolumeX } from "lucide-react";
import { padPage } from "@/lib/format";
import { TOTAL_PAGES } from "@/data/lookbook";
import { useAmbientMusic } from "@/components/AmbientMusic";

type Props = {
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenNavigator: () => void;
  onOpenConsultation: () => void;
  onOpenAvailability: () => void;
  onShare: () => void;
  nextLabel: string;
};

export function MagazineFooter({ currentPage, onPrev, onNext, onOpenNavigator, onOpenConsultation, onOpenAvailability, onShare, nextLabel }: Props) {
  const { isPlaying, volume, toggleMusic, setVolume } = useAmbientMusic();
  const [moreOpen, setMoreOpen] = useState(false);
  const [musicPanelOpen, setMusicPanelOpen] = useState(false);
  const volumePercent = Math.round(volume * 100);

  const runFromMore = (action: () => void) => {
    setMoreOpen(false);
    action();
  };

  return (
    <>
      <footer id="magazine-footer" className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-charcoal/95 backdrop-blur-md border-t border-gold/30 text-white px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        {moreOpen && (
          <div className="absolute bottom-full left-3 right-3 mb-2 rounded-2xl border border-gold/30 bg-[#171512]/98 p-3 shadow-2xl backdrop-blur-xl">
            <div className="mb-2 flex items-center justify-between"><span className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">Lookbook tools</span><button type="button" onClick={() => setMoreOpen(false)} className="text-[9px] text-gray-300">Tutup</button></div>
            <div className="grid grid-cols-3 gap-2">
              <button type="button" onClick={() => runFromMore(onOpenNavigator)} className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center text-gold"><List className="mx-auto h-4 w-4" /><span className="mt-1 block text-[7px]">Isi</span></button>
              <button type="button" onClick={() => runFromMore(onShare)} className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center text-gold"><Share2 className="mx-auto h-4 w-4" /><span className="mt-1 block text-[7px]">Share</span></button>
              <button type="button" onClick={() => runFromMore(onOpenAvailability)} className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center text-gold"><CalendarCheck className="mx-auto h-4 w-4" /><span className="mt-1 block text-[7px]">Check Date</span></button>
              <button type="button" data-ambient-control onClick={toggleMusic} className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center text-gold">{isPlaying ? <Volume2 className="mx-auto h-4 w-4" /> : <VolumeX className="mx-auto h-4 w-4" />}<span className="mt-1 block text-[7px]">Musik</span></button>
              <button type="button" onClick={() => runFromMore(onOpenConsultation)} className="col-span-2 rounded-xl gold-gradient-bg p-2 text-center text-white"><MessageCircle className="mx-auto h-4 w-4" /><span className="mt-1 block text-[7px] font-semibold">Proposal</span></button>
            </div>
            <div className="mt-3 border-t border-gold/15 pt-2"><div className="flex justify-between text-[8px] text-gray-300"><span>Volume musik</span><span className="text-gold">{volumePercent}%</span></div><input aria-label="Volume musik" type="range" min="0" max="1" step="0.05" value={volume} onChange={(event) => setVolume(Number(event.target.value))} className="mt-1.5 w-full accent-[#c5a059]" /></div>
          </div>
        )}
        <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="mb-1.5 block w-full truncate text-left font-cinzel text-[7px] font-bold tracking-[0.14em] text-gold/85 uppercase disabled:opacity-40">Next chapter · {nextLabel} →</button>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onPrev} disabled={currentPage <= 1} className="h-10 w-10 rounded-full border border-gold/40 text-gold flex items-center justify-center disabled:opacity-30" aria-label="Halaman sebelumnya"><ArrowLeft className="w-4 h-4" /></button>
          <div className="flex-1 text-center"><span className="font-cinzel text-[11px] tracking-widest text-gold font-bold">{padPage(currentPage)} / {padPage(TOTAL_PAGES)}</span></div>
          <button type="button" onClick={() => setMoreOpen((open) => !open)} className={`h-10 w-10 rounded-full border flex items-center justify-center ${moreOpen ? "border-gold bg-gold/15 text-gold" : "border-gold/40 text-gold"}`} aria-label="Buka menu lookbook"><MoreHorizontal className="w-4 h-4" /></button>
          <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="h-10 w-10 rounded-full gold-gradient-bg text-white inline-flex items-center justify-center disabled:opacity-30" aria-label="Halaman berikutnya"><ArrowRight className="w-4 h-4" /></button>
        </div>
      </footer>

      <footer className="hidden md:block sticky bottom-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-gold/25 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-2 py-3 flex items-center justify-between gap-4 text-xs">
          <div className="relative flex items-center gap-2">
            <button type="button" onClick={onPrev} disabled={currentPage <= 1} className="px-4 py-2 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-charcoal transition-all inline-flex items-center gap-1.5 disabled:opacity-30"><ArrowLeft className="w-3.5 h-3.5" /> Prev</button>
            <button type="button" data-ambient-control onClick={() => setMusicPanelOpen((open) => !open)} aria-pressed={isPlaying} className={`h-9 w-9 rounded-full border flex items-center justify-center ${isPlaying ? "border-gold bg-gold/15 text-gold" : "border-gold/35 text-gold"}`} aria-label="Pengaturan musik">{isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}</button>
            {musicPanelOpen && <div className="absolute bottom-[calc(100%+0.75rem)] left-0 w-52 rounded-xl border border-gold/30 bg-[#171512] p-3 shadow-2xl"><div className="flex items-center justify-between text-[9px] text-gray-200"><button type="button" data-ambient-control onClick={toggleMusic} className="text-gold">{isPlaying ? "Matikan musik" : "Nyalakan musik"}</button><span>{volumePercent}%</span></div><input aria-label="Volume musik" type="range" min="0" max="1" step="0.05" value={volume} onChange={(event) => setVolume(Number(event.target.value))} className="mt-2 w-full accent-[#c5a059]" /></div>}
          </div>
          <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="group text-center disabled:opacity-40"><span className="block font-cinzel text-[7px] tracking-[0.16em] text-gray-400 uppercase">Next chapter</span><span className="block font-serif text-xs text-gold-light transition group-hover:text-white">{nextLabel} <ArrowRight className="mb-0.5 inline h-3 w-3" /></span><span className="mt-0.5 block font-cinzel text-[8px] tracking-[0.16em] text-gold/70">PAGE {padPage(currentPage)} / {padPage(TOTAL_PAGES)}</span></button>
          <button type="button" onClick={onNext} disabled={currentPage >= TOTAL_PAGES} className="px-4 py-2 rounded-full gold-gradient-bg text-white font-medium hover:brightness-105 transition-all inline-flex items-center gap-1.5 disabled:opacity-30">Next <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
      </footer>
    </>
  );
}
