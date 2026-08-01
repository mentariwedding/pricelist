import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel-family",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-family",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MENTARI WEDDING ORGANIZER — Ultimate Investment Lookbook 2026/2027",
  description:
    "Official pricelist & wedding investment guide Mentari Wedding Organizer. Collection 2026/2027 — Jakarta & Sukabumi.",
  openGraph: {
    title: "MENTARI WEDDING ORGANIZER — Wedding Investment Lookbook 2026/2027",
    description: "Mulai rencanakan perayaan Anda bersama Mentari Wedding Organizer.",
    images: [{ url: "/images/pavilion.JPG", width: 1200, height: 630, alt: "Mentari Wedding Organizer" }],
  },
  icons: {
    icon: "/images/logo.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${playfair.variable} ${jakarta.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
