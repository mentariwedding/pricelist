"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MessageCircle, X } from "lucide-react";
import { waLink } from "@/lib/format";

type Intent = "consultation" | "availability";

type Props = {
  open: boolean;
  intent: Intent;
  onClose: () => void;
};

export function ConsultationModal({ open, intent, onClose }: Props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [pax, setPax] = useState("");
  const [budget, setBudget] = useState("");

  const isAvailability = intent === "availability";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const heading = isAvailability
      ? "Halo Mentari Wedding, saya ingin mengecek ketersediaan tanggal acara."
      : "Halo Mentari Wedding, saya ingin memulai konsultasi pribadi.";
    const message = `${heading}\n\nNama pasangan: ${name || "-"}\nJenis acara: ${eventType}\nTanggal acara: ${date || "-"}\nKota / venue: ${city || "-"}\nEstimasi pax: ${pax || "-"}\nBudget range: ${budget || "-"}\n\nMohon informasi dan jadwal konsultasi. Terima kasih.`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/65 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-gold/35 bg-[#171512] text-white shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={isAvailability ? "Cek ketersediaan tanggal" : "Form konsultasi"}
          >
            <div className="flex items-start justify-between border-b border-gold/20 px-5 py-4">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold"><CalendarCheck className="h-4 w-4" /></span>
                <div>
                  <p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold uppercase">Mentari private consultation</p>
                  <h2 className="mt-1 font-serif text-xl font-semibold">{isAvailability ? "Check Your Wedding Date" : "Mulai Konsultasi Pribadi"}</h2>
                </div>
              </div>
              <button type="button" onClick={onClose} className="rounded-full p-1 text-gray-400 hover:text-gold" aria-label="Tutup form"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-3 p-5">
              <p className="text-[10px] leading-relaxed text-gray-300">Isi detail singkat agar tim Mentari dapat menyiapkan konsultasi yang lebih relevan untuk Anda.</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="block"><span className="mb-1 block font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold uppercase">Nama pasangan</span><input required value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-lg border border-gold/30 bg-white/[0.06] px-3 py-2 text-xs text-white outline-none placeholder:text-gray-600 focus:border-gold" placeholder="Nama Anda & pasangan" /></label>
                <label className="block"><span className="mb-1 block font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold uppercase">Tanggal acara</span><input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="w-full rounded-lg border border-gold/30 bg-white/[0.06] px-3 py-2 text-xs text-white outline-none focus:border-gold" /></label>
                <label className="block"><span className="mb-1 block font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold uppercase">Jenis acara</span><select value={eventType} onChange={(event) => setEventType(event.target.value)} className="w-full rounded-lg border border-gold/30 bg-white/[0.06] px-3 py-2 text-xs text-white outline-none focus:border-gold"><option>Wedding</option><option>Lamaran</option><option>Siraman</option><option>Wedding Crew Service</option></select></label>
                <label className="block"><span className="mb-1 block font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold uppercase">Estimasi pax</span><input value={pax} onChange={(event) => setPax(event.target.value)} className="w-full rounded-lg border border-gold/30 bg-white/[0.06] px-3 py-2 text-xs text-white outline-none placeholder:text-gray-600 focus:border-gold" placeholder="Contoh: 500 pax" /></label>
              </div>
              <label className="block"><span className="mb-1 block font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold uppercase">Kota / venue</span><input value={city} onChange={(event) => setCity(event.target.value)} className="w-full rounded-lg border border-gold/30 bg-white/[0.06] px-3 py-2 text-xs text-white outline-none placeholder:text-gray-600 focus:border-gold" placeholder="Contoh: Sukabumi / belum menentukan venue" /></label>
              <label className="block"><span className="mb-1 block font-cinzel text-[8px] font-bold tracking-[0.12em] text-gold uppercase">Budget range</span><input value={budget} onChange={(event) => setBudget(event.target.value)} className="w-full rounded-lg border border-gold/30 bg-white/[0.06] px-3 py-2 text-xs text-white outline-none placeholder:text-gray-600 focus:border-gold" placeholder="Contoh: Rp100–150 juta" /></label>
              <button type="submit" className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full gold-gradient-bg px-5 py-3 text-xs font-semibold tracking-[0.1em] text-white"><MessageCircle className="h-4 w-4" /> LANJUT KE WHATSAPP</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
