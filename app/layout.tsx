import type { Metadata, Viewport } from "next";
import { EB_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aifbhairava.in"),
  title: "Bhairava Alternative Investment Trust | SEBI-registered Category II AIF",
  description:
    "Bhairava Alternative Investment Trust is a SEBI-registered Category II Alternative Investment Fund (IN/AIF2/26-27/2360). Bhairava I LVF is a Large Value Fund for Accredited Investors.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bhairava Alternative Investment Trust",
    description: "SEBI-registered Category II Alternative Investment Fund",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1C2B35",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
