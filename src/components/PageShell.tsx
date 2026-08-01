import { ReactNode } from "react";
import { padPage } from "@/lib/format";
import { TOTAL_PAGES } from "@/data/lookbook";

type Props = {
  children: ReactNode;
  page: number;
  className?: string;
  footerDark?: boolean;
  hideDefaultFooter?: boolean;
  /** Use for image-led covers that must be clipped to their rounded frame. */
  clipContent?: boolean;
};

export function PageShell({
  children,
  page,
  className = "",
  footerDark = false,
  hideDefaultFooter = false,
  clipContent = false,
}: Props) {
  return (
    <div
      className={`magazine-page ${clipContent ? "page-clip" : ""} rounded-none md:rounded-2xl flex flex-col justify-between relative ${className}`}
    >
      <div className="page-inner-border absolute inset-3 sm:inset-6 rounded-xl pointer-events-none z-20 hidden sm:block" />
      {children}
      {!hideDefaultFooter && (
        <div
          className={`page-footer-bar ${
            footerDark
              ? "border-gray-800 text-gray-400"
              : "border-gold/20 text-slate-text"
          }`}
        >
          <span>Mentari Wedding Guide</span>
          <span className="font-bold text-gold">
            PAGE {padPage(page)} / {padPage(TOTAL_PAGES)}
          </span>
        </div>
      )}
    </div>
  );
}

export function PageHeader({
  left,
  right,
  dark = false,
}: {
  left: string;
  right: string;
  dark?: boolean;
}) {
  return (
    <div className="page-header-bar">
      <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-widest text-gold uppercase truncate min-w-0 flex-1 pr-2">
        {left}
      </span>
      <span
        className={`font-serif text-[10px] sm:text-xs italic shrink-0 max-w-[48%] sm:max-w-[55%] truncate text-right ${
          dark ? "text-gray-300" : "text-slate-text"
        }`}
      >
        {right}
      </span>
    </div>
  );
}
