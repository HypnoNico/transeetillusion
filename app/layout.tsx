import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — Hypnose & mentalisme événementiel`,
    template: `%s — ${site.brand}`,
  },
  description:
    "Spectacles d’hypnose et mentalisme pour événements privés, entreprises, CSE et restaurants. Devis rapide, contact par téléphone ou Instagram.",
  keywords: [
    "hypnose spectacle",
    "hypnotiseur de spectacle",
    "mentalisme",
    "animation entreprise",
    "CSE",
    "close-up",
    "spectacle hypnose",
    "HypnoNico",
    "Transe & Illusion",
    "Aix-en-Provence",
    "Marseille",
  ],
  openGraph: {
    title: `${site.brand} — Hypnose & mentalisme événementiel`,
    description:
      "Spectacles d’hypnose et mentalisme pour événements privés, entreprises, CSE et restaurants.",
    url: site.url,
    siteName: site.brand,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Hypnose & mentalisme événementiel`,
    description:
      "Spectacles d’hypnose et mentalisme pour événements privés, entreprises, CSE et restaurants.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
