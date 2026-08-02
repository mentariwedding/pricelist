"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagazineToolbar } from "@/components/MagazineToolbar";
import { MagazineFooter } from "@/components/MagazineFooter";
import { CoverPage } from "@/components/pages/CoverPage";
import { TocPage } from "@/components/pages/TocPage";
import { BrandStoryPage } from "@/components/pages/BrandStoryPage";
import { PillarsPage } from "@/components/pages/PillarsPage";
import { AestheticsPage } from "@/components/pages/AestheticsPage";
import { VenuesPage } from "@/components/pages/VenuesPage";
import { VendorsPage } from "@/components/pages/VendorsPage";
import { GalleryPage } from "@/components/pages/GalleryPage";
import { WeddingDetailsPage } from "@/components/pages/WeddingDetailsPage";
import {
  EngagementPage,
  IntimatePage,
  RoyalPage,
  ImperialPage,
} from "@/components/pages/PackagePages";
import { AddonsPage } from "@/components/pages/AddonsPage";
import { SiramanPage } from "@/components/pages/SiramanPage";
import { WeddingCrewPage } from "@/components/pages/WeddingCrewPage";
import { TestimonyPage } from "@/components/pages/TestimonyPage";
import { TermsPage } from "@/components/pages/TermsPage";
import { CalculatorPage } from "@/components/pages/CalculatorPage";
import { BackCoverPage } from "@/components/pages/BackCoverPage";
import { DEFAULT_VENUES, GALLERY, TOC_ITEMS, TOTAL_PAGES } from "@/data/lookbook";
import { ConsultationModal } from "@/components/ConsultationModal";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

type VenueItem = {
  image: string;
  tag: string;
  title: string;
  desc: string;
  coordinates?: string;
  mapUrl?: string;
};

type GalleryItem = { image: string; caption: string };

export function MagazineReader() {
  const [currentPage, setCurrentPage] = useState(1);
  const [venues, setVenues] = useState<VenueItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [navigatorOpen, setNavigatorOpen] = useState(false);
  const [consultationIntent, setConsultationIntent] = useState<"consultation" | "availability" | null>(null);
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    let cancelled = false;

    async function loadExtras() {
      try {
        const [venuesRes, galleryRes] = await Promise.all([
          supabase
            .from("venues")
            .select("name, description, image_url, category")
            .limit(4),
          supabase
            .from("portfolio_gallery")
            .select("title, image_url")
            .order("created_at", { ascending: false })
            .limit(3),
        ]);

        if (cancelled) return;

        if (venuesRes.data?.length) {
          setVenues(
            venuesRes.data.map((v: Record<string, string>, i: number) => ({
              image:
                v.image_url || DEFAULT_VENUES[i % DEFAULT_VENUES.length].image,
              tag: v.category || "Venue Partner",
              title: v.name || DEFAULT_VENUES[i % DEFAULT_VENUES.length].title,
              desc:
                v.description ||
                DEFAULT_VENUES[i % DEFAULT_VENUES.length].desc,
              coordinates: DEFAULT_VENUES[i % DEFAULT_VENUES.length].coordinates,
              mapUrl: DEFAULT_VENUES[i % DEFAULT_VENUES.length].mapUrl,
            })),
          );
        }

        if (galleryRes.data?.length) {
          setGallery(
            galleryRes.data.map((g: Record<string, string>, i: number) => ({
              image: g.image_url || GALLERY[i % GALLERY.length].image,
              caption: g.title || GALLERY[i % GALLERY.length].caption,
            })),
          );
        }
      } catch {
        // Keep local fallbacks
      }
    }

    loadExtras();
    return () => {
      cancelled = true;
    };
  }, []);

  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1));
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(Math.max(1, Math.min(TOTAL_PAGES, page)));
  }, []);

  const shareLookbook = useCallback(async () => {
    const data = { title: "Mentari Wedding Lookbook", text: "Wedding Investment Lookbook — Mentari Wedding Organizer", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else await navigator.clipboard.writeText(window.location.href);
    } catch {
      // The native share sheet was dismissed.
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);

  const nextLabel = TOC_ITEMS.find((item) => item.page === currentPage + 1)?.title.replace(/^\d+\. /, "") ?? "Back Cover & Studio Contact";

  const pages = [
    <CoverPage key={1} />,
    <TocPage key={2} onNavigate={goToPage} />,
    <BrandStoryPage key={3} />,
    <PillarsPage key={4} />,
    <AestheticsPage key={5} />,
    <VenuesPage key={6} venues={venues} />,
    <VendorsPage key={7} />,
    <GalleryPage key={8} items={gallery} />,
    <WeddingDetailsPage key={9} />,
    <EngagementPage key={10} />,
    <SiramanPage key={11} />,
    <WeddingCrewPage key={12} />,
    <IntimatePage key={13} />,
    <RoyalPage key={14} />,
    <ImperialPage key={15} />,
    <AddonsPage key={16} />,
    <TermsPage key={17} />,
    <CalculatorPage key={18} />,
    <TestimonyPage key={19} />,
    <BackCoverPage key={20} onOpenConsultation={() => setConsultationIntent("consultation")} />,
  ];

  return (
    <div className="antialiased bg-charcoal md:bg-[#0A0A0A] pb-[var(--pl-dock-space)] md:pb-0 md:min-h-screen md:flex md:flex-col">
      <MagazineToolbar
        currentPage={currentPage}
        onPrev={goPrev}
        onNext={goNext}
        onOpenNavigator={() => setNavigatorOpen(true)}
        onOpenConsultation={() => setConsultationIntent("consultation")}
        onOpenAvailability={() => setConsultationIntent("availability")}
      />

      <main
        id="interactive-magazine"
        className="w-full flex-1 p-0 md:px-6 lg:px-8 md:py-8 lg:py-10 bg-transparent md:flex md:items-center md:justify-center"
        onTouchStart={(e) => {
          const t = e.touches[0];
          touchRef.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          if (!touchRef.current) return;
          const endX = e.changedTouches[0].clientX;
          const endY = e.changedTouches[0].clientY;
          const dx = endX - touchRef.current.x;
          const dy = endY - touchRef.current.y;
          touchRef.current = null;
          if (Math.abs(dx) < 80 || Math.abs(dx) < Math.abs(dy) * 1.8) return;
          if (dx < 0) goNext();
          else goPrev();
        }}
      >
        <div className="w-full max-w-4xl mx-auto md:drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="page-view"
            >
              {pages[currentPage - 1]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* All pages are mounted only for browser print / Save as PDF. */}
      <div className="print-all-pages" aria-hidden="true">
        {pages.map((page, index) => (
          <div key={`print-${index}`} className="page-view">{page}</div>
        ))}
      </div>

      <MagazineFooter
        currentPage={currentPage}
        onPrev={goPrev}
        onNext={goNext}
        onOpenNavigator={() => setNavigatorOpen(true)}
        onOpenConsultation={() => setConsultationIntent("consultation")}
        onShare={shareLookbook}
        nextLabel={nextLabel}
      />

      <AnimatePresence>
        {navigatorOpen && (
          <motion.div className="fixed inset-0 z-[105] flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setNavigatorOpen(false)}>
            <motion.div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gold/35 bg-[#171512] text-white shadow-2xl" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 18, opacity: 0 }} onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-gold/20 px-5 py-4"><div><p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">Quick navigator</p><h2 className="mt-1 font-serif text-xl">Jelajahi Lookbook</h2></div><button type="button" onClick={() => setNavigatorOpen(false)} className="text-xs text-gold hover:text-white">Tutup</button></div>
              <div className="grid max-h-[70vh] grid-cols-1 overflow-y-auto p-3 sm:grid-cols-2">
                {TOC_ITEMS.map((item) => <button key={item.page} type="button" onClick={() => { goToPage(item.page); setNavigatorOpen(false); }} className={`flex items-center gap-3 border-b border-white/10 px-3 py-3 text-left transition hover:bg-white/[0.05] ${currentPage === item.page ? "bg-gold/10" : ""}`}><span className="font-serif text-xl italic text-gold">{String(item.page).padStart(2, "0")}</span><span className="text-[10px] leading-relaxed text-gray-200">{item.title.replace(/^\d+\. /, "")}</span></button>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ConsultationModal open={consultationIntent !== null} intent={consultationIntent ?? "consultation"} onClose={() => setConsultationIntent(null)} />
    </div>
  );
}
