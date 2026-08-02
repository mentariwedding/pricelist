"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sun } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { IMAGES, SEASONAL_EDITION, TOTAL_PAGES } from "@/data/lookbook";
import { padPage } from "@/lib/format";

export function CoverPage() {
  const reduceMotion = useReducedMotion();

  return (
    <PageShell
      page={1}
      hideDefaultFooter
      clipContent
      className="text-white !bg-charcoal"
    >
      <motion.div
        className="absolute -inset-10"
        initial={{ scale: 1.06, x: 0, y: 0 }}
        animate={reduceMotion ? { scale: 1.06, x: 0, y: 0 } : { scale: [1.06, 1.18, 1.1, 1.16], x: [0, -18, 12, 0], y: [0, -10, 6, 0] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        style={{ willChange: "transform" }}
      >
        <Image
          src={IMAGES.cover}
          alt="Mentari Wedding Cover"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 896px) 112vw, 1000px"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-black/65" />
      <motion.div
        className="pointer-events-none absolute -inset-x-1/2 top-0 h-[72%] bg-[radial-gradient(ellipse_at_center,rgba(230,202,133,0.3),transparent_62%)] mix-blend-screen"
        animate={reduceMotion ? { x: "0%", opacity: 0.5 } : { x: ["-25%", "25%", "-12%"], opacity: [0.35, 0.8, 0.45] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 flex flex-col justify-between flex-1 min-h-[var(--pl-page-min)] md:min-h-[min(840px,calc(100vh-9.5rem))]">
        <div className="page-header-bar border-white/20 !justify-center md:!pt-8 md:!pb-5 !pt-[calc(1.1rem+env(safe-area-inset-top,0px))]">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-gold/70 text-[9px] sm:text-[10px] font-bold tracking-[0.22em] sm:tracking-[0.3em] text-gold uppercase bg-black/50 backdrop-blur-md">
{SEASONAL_EDITION.label}
          </span>
        </div>

        <div className="page-body text-center space-y-2.5 sm:space-y-4 !py-2 sm:!py-5 md:!py-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border border-gold text-gold flex items-center justify-center bg-black/40 backdrop-blur-md mb-1 sm:mb-3">
            <Sun className="w-5 h-5 sm:w-7 sm:h-7" />
          </div>
          <h1 className="font-cinzel text-3xl sm:text-6xl font-extrabold tracking-[0.14em] sm:tracking-[0.18em] text-white uppercase">
            MENTARI
          </h1>
          <p className="font-cinzel text-[10px] sm:text-sm tracking-[0.35em] sm:tracking-[0.5em] text-gold font-semibold uppercase">
            WEDDING ORGANIZER
          </p>
          <p className="font-serif italic text-lg sm:text-2xl text-gray-200 pt-1">
            &ldquo;Planned to Perfection&rdquo;
          </p>
          <p className="mx-auto max-w-xs text-[11px] leading-relaxed text-gray-300 italic font-light sm:text-xs">
            A considered guide to the celebration you will remember for a lifetime.
          </p>
          <div className="w-20 sm:w-24 h-0.5 bg-gold mx-auto my-2 sm:my-4" />
          <h2 className="font-cinzel text-base sm:text-2xl font-bold tracking-widest text-white uppercase">
            The Wedding Investment Guide
          </h2>
          <p className="font-serif text-gold-light italic text-sm sm:text-base">Collection 2026 / 2027</p>
          <p className="font-cinzel text-[8px] font-bold tracking-[0.14em] text-gold/80 uppercase">{SEASONAL_EDITION.title}</p>
        </div>

        <div className="page-footer-bar border-white/20 text-[10px] sm:text-xs">
          <span className="text-gray-300 font-light text-left leading-snug">
            Cibadak & Sukabumi Executive Edition
          </span>
          <span className="font-cinzel text-gold font-bold tracking-widest shrink-0">
            PAGE {padPage(1)} / {padPage(TOTAL_PAGES)}
          </span>
        </div>
      </div>
    </PageShell>
  );
}
