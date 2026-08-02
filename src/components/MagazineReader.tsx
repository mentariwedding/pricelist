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
import { DEFAULT_VENUES, GALLERY, TOTAL_PAGES } from "@/data/lookbook";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

type VenueItem = {
  image: string;
  tag: string;
  title: string;
  desc: string;
};

type GalleryItem = { image: string; caption: string };

export function MagazineReader() {
  const [currentPage, setCurrentPage] = useState(1);
  const [venues, setVenues] = useState<VenueItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
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
    <BackCoverPage key={20} />,
  ];

  return (
    <div className="antialiased bg-charcoal md:bg-[#0A0A0A] pb-[var(--pl-dock-space)] md:pb-0 md:min-h-screen md:flex md:flex-col">
      <MagazineToolbar
        currentPage={currentPage}
        onPrev={goPrev}
        onNext={goNext}
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
      />
    </div>
  );
}
