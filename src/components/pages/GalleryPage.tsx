"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Move, Sparkles, X } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { GALLERY } from "@/data/lookbook";

type GalleryItem = { image: string; caption: string };

type CardPose = {
  left: string;
  top: string;
  rotate: number;
};

const CARD_POSES: CardPose[] = [
  { left: "3%", top: "8%", rotate: -10 },
  { left: "29%", top: "3%", rotate: 5 },
  { left: "58%", top: "7%", rotate: -7 },
  { left: "7%", top: "40%", rotate: 6 },
  { left: "35%", top: "31%", rotate: -4 },
  { left: "65%", top: "38%", rotate: 9 },
  { left: "20%", top: "65%", rotate: -8 },
  { left: "52%", top: "65%", rotate: 5 },
];

const TABLE_DECOR = [
  { left: "4%", top: "72%", rotate: -18, label: "MENTARI" },
  { left: "79%", top: "72%", rotate: 16, label: "2026 / 27" },
];

function photoCredits(image: string) {
  const source = image.toLowerCase();
  if (source.includes("journey")) return { concept: "The Intimate Journey", vendor: "Mentari curated wedding team" };
  if (source.includes("romance")) return { concept: "The Royal Romance", vendor: "Mentari curated wedding team" };
  if (source.includes("luxury")) return { concept: "The Imperial Luxury", vendor: "Mentari curated wedding team" };
  if (source.includes("lamaran")) return { concept: "The Engagement Edit", vendor: "Mentari Wedding · Lamaran Collection" };
  if (source.includes("siraman") || source.includes("hena") || source.includes("adat")) return { concept: "Ritual & Adat Collection", vendor: "Mentari Wedding · Curated ceremonial team" };
  if (source.includes("crew") || source.includes("mc")) return { concept: "Wedding Crew Service", vendor: "Mentari coordination team" };
  return { concept: "Mentari Wedding Visual Archive", vendor: "Curated vendor partners" };
}

export function GalleryPage({ items }: { items?: GalleryItem[] }) {
  const photos = useMemo(() => {
    const local: GalleryItem[] = GALLERY.map((item) => ({
      image: item.image,
      caption: item.caption,
    }));
    if (!items?.length) return local;

    const localImages = new Set(local.map((item) => item.image));
    const remote = items.filter((item) => item.image && !localImages.has(item.image));
    return [...remote, ...local];
  }, [items]);

  const [selected, setSelected] = useState(0);
  const [collectionStart, setCollectionStart] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [layoutVersion, setLayoutVersion] = useState(0);
  const [dragging, setDragging] = useState<number | null>(null);

  // Eight photos at a time keep the desk curated; the collection switcher reveals every frame.
  const deskPhotos = Array.from(
    { length: Math.min(CARD_POSES.length, photos.length) },
    (_, index) => photos[(collectionStart + index) % photos.length],
  );
  const active = deskPhotos[selected] ?? deskPhotos[0];
  const lightboxPhoto = lightboxIndex == null ? null : photos[lightboxIndex];
  const lightboxCredit = lightboxPhoto ? photoCredits(lightboxPhoto.image) : null;
  const collectionCount = Math.ceil(photos.length / CARD_POSES.length);

  useEffect(() => {
    if (lightboxIndex == null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => current == null ? null : (current - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") setLightboxIndex((current) => current == null ? null : (current + 1) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, photos.length]);

  if (!deskPhotos.length || !active) return null;

  return (
    <>
      <PageShell page={8} className="bg-[#eee7dc]">
      <PageHeader
        left="Visual Gallery"
        right="An Editorial Desk of Memories"
      />

      <div className="page-body flex flex-col justify-center gap-3 !py-3 md:!py-5">
        <div className="flex items-end justify-between gap-3 px-1">
          <div>
            <p className="font-cinzel text-[9px] font-bold tracking-[0.24em] text-gold-dark uppercase">
              The keepsake collection
            </p>
            <h2 className="mt-1 font-serif text-xl sm:text-2xl md:text-[1.7rem] font-bold text-charcoal">
              Meja Kenangan Mentari
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {collectionCount > 1 && (
              <button
                type="button"
                onClick={() => {
                  setCollectionStart((start) => (start + CARD_POSES.length) % photos.length);
                  setSelected(0);
                  setLayoutVersion((version) => version + 1);
                }}
                className="rounded-full border border-gold/45 bg-charcoal px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-gold-light shadow-sm transition hover:bg-gold hover:text-charcoal"
                aria-label="Tampilkan koleksi foto berikutnya"
              >
                Foto lain
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setLayoutVersion((version) => version + 1);
                setSelected((current) => (current + 1) % deskPhotos.length);
              }}
              className="rounded-full border border-gold/45 bg-ivory/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-gold-dark shadow-sm transition hover:bg-white hover:border-gold"
              aria-label="Susun ulang foto"
            >
              <Sparkles className="mr-1 inline h-3 w-3" /> Acak
            </button>
          </div>
        </div>

        <div
          className="relative isolate h-[390px] w-full overflow-hidden rounded-2xl border border-[#8d7042]/35 bg-[#24201c] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_18px_35px_-25px_rgba(20,20,20,0.7)] sm:h-[405px] md:h-[430px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 15%, rgba(230,202,133,.13), transparent 28%), radial-gradient(circle at 82% 82%, rgba(197,160,89,.15), transparent 25%), repeating-linear-gradient(108deg, rgba(255,255,255,.018) 0 1px, transparent 1px 7px), linear-gradient(135deg, #302a24 0%, #171513 100%)",
          }}
          aria-label="Koleksi foto editorial yang dapat digeser"
        >
          <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/5" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

          {TABLE_DECOR.map((decor) => (
            <span
              key={decor.label}
              className="pointer-events-none absolute z-0 rounded-sm border border-gold/30 bg-black/15 px-2 py-1 font-cinzel text-[7px] tracking-[0.18em] text-gold/65"
              style={{
                left: decor.left,
                top: decor.top,
                transform: `rotate(${decor.rotate}deg)`,
              }}
            >
              {decor.label}
            </span>
          ))}

          {deskPhotos.map((photo, index) => {
            const pose = CARD_POSES[index];
            const isSelected = index === selected;
            const isDragging = index === dragging;
            // A small pose variation makes every "Acak meja" action feel intentional.
            const variation = ((layoutVersion * 5 + index * 3) % 7) - 3;

            return (
              <motion.div
                key={`${photo.image}-${layoutVersion}`}
                drag
                dragMomentum={false}
                dragElastic={0.12}
                onTap={() => {
                  setSelected(index);
                  setLightboxIndex(photos.findIndex((item) => item.image === photo.image));
                }}
                onDragStart={() => {
                  setDragging(index);
                  setSelected(index);
                }}
                onDragEnd={() => setDragging(null)}
                onTouchStart={(event) => event.stopPropagation()}
                className="group absolute z-10 h-[37%] w-[36%] cursor-grab touch-none rounded-sm bg-[#f8f3e9] p-1.5 shadow-[0_13px_20px_-10px_rgba(0,0,0,.9)] outline-none active:cursor-grabbing sm:h-[39%] sm:w-[29%] sm:p-2"
                style={{
                  left: pose.left,
                  top: pose.top,
                  zIndex: isSelected || isDragging ? 30 : 10 + index,
                  borderBottom: "12px solid #f8f3e9",
                }}
                animate={{
                  rotate: pose.rotate + variation,
                  scale: isSelected ? 1.045 : 1,
                }}
                whileHover={{ scale: 1.035, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                role="button"
                tabIndex={0}
                aria-label={`Pilih dan geser foto ${photo.caption}`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(index);
                    setLightboxIndex(photos.findIndex((item) => item.image === photo.image));
                  }
                }}
              >
                <div className="relative h-full w-full overflow-hidden bg-charcoal">
                  <Image
                    src={photo.image}
                    alt={photo.caption}
                    fill
                    priority={index < 3}
                    className="object-cover saturate-[.9] transition duration-500 group-hover:saturate-100"
                    sizes="(max-width: 640px) 36vw, 220px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                </div>
                <p className="absolute inset-x-1.5 bottom-1.5 truncate font-serif text-[8px] italic text-charcoal sm:inset-x-2 sm:bottom-2 sm:text-[9px]">
                  {photo.caption}
                </p>
              </motion.div>
            );
          })}

          <div className="pointer-events-none absolute bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-gold/25 bg-black/45 px-3 py-1.5 text-center backdrop-blur-sm">
            <Move className="h-3 w-3 text-gold" />
            <span className="font-cinzel text-[8px] tracking-[0.16em] text-cream/90 uppercase">
              Geser atau ketuk untuk melihat detail
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-xl border border-gold/20 bg-white/45 px-3 py-2.5 sm:px-4">
          <div className="min-w-0">
            <p className="font-cinzel text-[8px] font-bold tracking-[0.2em] text-gold-dark uppercase">
              Selected frame {String(selected + 1).padStart(2, "0")}
            </p>
            <p className="truncate font-serif text-sm text-charcoal sm:text-base">
              {active.caption}
            </p>
          </div>
          <p className="hidden max-w-[16rem] text-right text-[10px] leading-relaxed text-slate-text sm:block">
            Sebuah moodboard hidup—setiap frame dapat dipindahkan untuk menemukan komposisi Anda sendiri.
          </p>
        </div>
      </div>
      </PageShell>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {lightboxPhoto && lightboxIndex != null && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080706]/95 p-4 backdrop-blur-md sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label={`Preview ${lightboxPhoto.caption}`}
                onClick={() => setLightboxIndex(null)}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-black/30 text-gold hover:bg-gold hover:text-charcoal sm:right-7 sm:top-7"
                  aria-label="Tutup preview foto"
                >
                  <X className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); setLightboxIndex((current) => current == null ? null : (current - 1 + photos.length) % photos.length); }}
                  className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-black/30 text-gold hover:bg-gold hover:text-charcoal sm:left-7"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); setLightboxIndex((current) => current == null ? null : (current + 1) % photos.length); }}
                  className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-black/30 text-gold hover:bg-gold hover:text-charcoal sm:right-7"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <motion.figure
                  className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="relative h-[68vh] w-full overflow-hidden rounded-sm border border-gold/35 bg-charcoal shadow-[0_28px_80px_rgba(0,0,0,.65)] sm:h-[74vh]">
                    <Image src={lightboxPhoto.image} alt={lightboxPhoto.caption} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 1024px" />
                  </div>
                  <figcaption className="mt-4 flex w-full items-end justify-between gap-4 border-t border-gold/25 pt-3 text-white">
                    <div><p className="font-cinzel text-[8px] font-bold tracking-[0.2em] text-gold uppercase">Mentari visual archive · Frame {String(lightboxIndex + 1).padStart(2, "0")}</p><p className="mt-1 font-serif text-lg sm:text-xl">{lightboxPhoto.caption}</p></div>
                    <div className="border-l border-gold/25 pl-3 text-left sm:pl-4 sm:text-right"><p className="font-cinzel text-[7px] font-bold tracking-[0.13em] text-gold uppercase">Photo credit</p><p className="mt-1 text-[8px] text-gray-200 sm:text-[9px]">Concept: {lightboxCredit?.concept}</p><p className="text-[8px] text-gray-300 sm:text-[9px]">Vendor: {lightboxCredit?.vendor}</p></div>
                    <Maximize2 className="mb-1 h-4 w-4 shrink-0 text-gold/70" />
                  </figcaption>
                </motion.figure>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
