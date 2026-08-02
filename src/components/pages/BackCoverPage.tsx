"use client";

import Image from "next/image";
import { AtSign, Globe, MapPin, MessageCircle, Phone, Sun } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CONTACT, IMAGES } from "@/data/lookbook";
import { waLink } from "@/lib/format";

const CONTACT_ITEMS = [
  { icon: Phone, label: "WhatsApp Studio", value: CONTACT.phones, href: waLink("Halo Mentari Wedding Organizer, saya ingin memulai konsultasi pribadi.") },
  { icon: AtSign, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramUrl },
  { icon: Globe, label: "Website", value: CONTACT.website, href: CONTACT.websiteUrl },
  { icon: MapPin, label: "Studio Galeri", value: CONTACT.address },
];

export function BackCoverPage({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  return (
    <PageShell page={20} hideDefaultFooter clipContent className="text-white !bg-charcoal">
      <Image src={IMAGES.backCover} alt="Mentari Wedding closing scene" fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-charcoal/80 to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(197,160,89,.24),transparent_29%)]" />
      <span className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-serif text-[14rem] italic leading-none text-white/[0.045] sm:text-[18rem]">M</span>

      <div className="relative z-10 flex min-h-[var(--pl-page-min)] flex-1 flex-col md:min-h-[min(840px,calc(100vh-9.5rem))]">
        <header className="page-header-bar border-white/15 !justify-between">
          <span className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold uppercase">Until the next beautiful chapter</span>
          <span className="font-cinzel text-[9px] tracking-[0.14em] text-gray-300 uppercase">20 / 20</span>
        </header>

        <main className="page-body my-auto w-full max-w-2xl space-y-5 md:ml-[10%]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 bg-black/25 text-gold backdrop-blur-sm">
            <Sun className="h-5 w-5" />
          </div>
          <div className="space-y-3">
            <p className="font-cinzel text-[9px] font-bold tracking-[0.22em] text-gold uppercase">Mentari Wedding Organizer</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">Let&apos;s make the beginning of your forever feel effortless.</h2>
            <div className="h-px w-16 bg-gold" />
            <p className="max-w-lg font-serif text-base italic leading-relaxed text-gold-light sm:text-lg">“A beautiful wedding is felt, remembered, and retold for a lifetime.”</p>
            <p className="max-w-md text-xs leading-relaxed text-gray-300">Mulai dari satu percakapan sederhana. Ceritakan hari impian Anda, dan biarkan Mentari membantu menyusunnya dengan tenang dan penuh perhatian.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={onOpenConsultation} className="inline-flex items-center gap-2 rounded-full gold-gradient-bg px-6 py-3 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_16px_35px_-15px_rgba(197,160,89,.8)] transition hover:brightness-110">
              <MessageCircle className="h-4 w-4" /> MULAI KONSULTASI PRIBADI
            </button>
            <a href={waLink("Halo Mentari Wedding Organizer, saya ingin memulai konsultasi pribadi.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-gold/35 bg-black/25 py-1.5 pl-1.5 pr-3 text-[8px] font-cinzel tracking-[0.1em] text-gold-light uppercase backdrop-blur-sm" aria-label="Scan QR untuk menghubungi Mentari via WhatsApp">
              <span className="relative h-8 w-8 overflow-hidden rounded-sm bg-white"><Image src="/images/whatsapp-qr.png" alt="QR WhatsApp Mentari Wedding" fill sizes="32px" /></span> Scan to connect
            </a>
          </div>
        </main>

        <section className="relative z-10 grid grid-cols-1 border-t border-white/15 bg-black/25 backdrop-blur-sm sm:grid-cols-2">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
            const content = <><Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" /><div><p className="font-cinzel text-[7px] font-bold tracking-[0.14em] text-gold/80 uppercase">{label}</p><p className="mt-0.5 text-[10px] leading-relaxed text-gray-200">{value}</p></div></>;
            const className = "flex items-start gap-2.5 border-b border-white/10 px-5 py-3 transition-colors hover:bg-white/[0.04] last:border-b-0 sm:border-b-0 sm:border-r sm:border-white/10 sm:last:border-r-0 md:px-8";
            return href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a> : <div key={label} className={className}>{content}</div>;
          })}
        </section>

        <footer className="relative z-10 flex items-center justify-between border-t border-white/15 px-5 py-3 text-[8px] text-gray-300 md:px-8">
          <span className="font-cinzel tracking-[0.14em] text-gold/80">MENTARI WEDDING · 2026 / 27</span>
          <span>© 2026 MENTARI WEDDING ORGANIZER</span>
        </footer>
      </div>
    </PageShell>
  );
}
