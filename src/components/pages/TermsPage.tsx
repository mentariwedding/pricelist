"use client";

import { PageHeader, PageShell } from "@/components/PageShell";
import { PAYMENT_STEPS } from "@/data/lookbook";

export function TermsPage() {
  return (
    <PageShell page={14}>
      <PageHeader left="Your Booking Journey" right="From First Conversation to Celebration" />
      <div className="page-body space-y-6">
        <div className="text-center"><p className="font-cinzel text-[9px] font-bold tracking-[0.2em] text-gold-dark uppercase">A clear and considered process</p><h2 className="mt-1 font-serif text-3xl font-bold text-charcoal">Your journey begins with a date.</h2><p className="mt-2 text-xs text-slate-text">Proses pembayaran yang jelas agar setiap persiapan berjalan dengan nyaman.</p></div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PAYMENT_STEPS.map((step, index) => <article key={step.step} className="relative border-t-2 border-gold bg-cream/45 p-5"><span className="font-serif text-5xl italic text-gold/20">{step.step}</span><p className="mt-2 font-cinzel text-[9px] font-bold tracking-[0.14em] text-gold-dark uppercase">{index === 0 ? "Secure your date" : index === 1 ? "Curate every detail" : "Celebrate beautifully"}</p><h3 className="mt-1 font-serif text-lg font-semibold text-charcoal">{step.title}</h3><p className="mt-2 font-serif text-3xl font-bold text-gold-dark">{step.percent}</p><p className="mt-2 text-[10px] leading-relaxed text-slate-text">{step.desc}</p></article>)}
        </div>
        <p className="border-l-2 border-gold bg-charcoal px-4 py-3 text-[10px] italic leading-relaxed text-gray-300"><strong className="text-gold-light">Important investment note.</strong> Seluruh harga dalam lookbook ini adalah harga mulai dari dan akan dikonfirmasi melalui proposal akhir. Penyesuaian dapat berlaku untuk venue, jumlah tamu, kebutuhan adat, customisasi, transportasi, akomodasi, pajak, maupun kebutuhan di luar cakupan paket.</p>
        <section className="border-t border-gold/20 pt-4"><p className="font-cinzel text-[8px] font-bold tracking-[0.16em] text-gold-dark uppercase">Common questions</p><div className="mt-2 grid gap-1 sm:grid-cols-2">{[["Apakah paket dapat dikustom?", "Ya. Setiap koleksi dapat disesuaikan dengan kebutuhan, tradisi, dan prioritas Anda."], ["Apa yang dapat memengaruhi harga akhir?", "Venue, jumlah tamu, kebutuhan adat, customisasi, transportasi, serta kebutuhan di luar cakupan paket akan dibahas di proposal akhir."], ["Bolehkah memakai vendor pribadi?", "Tentu. Kami membantu menyelaraskan alur kerja semua vendor pada hari acara."], ["Kapan sebaiknya mulai konsultasi?", "Kami menyarankan konsultasi sedini mungkin untuk pilihan tanggal dan vendor yang lebih leluasa."]].map(([question, answer]) => <details key={question} className="group border-b border-gold/15 py-2"><summary className="cursor-pointer list-none text-[10px] font-semibold text-charcoal">{question}<span className="float-right text-gold">+</span></summary><p className="pt-1.5 text-[10px] leading-relaxed text-slate-text">{answer}</p></details>)}</div></section>
      </div>
    </PageShell>
  );
}
