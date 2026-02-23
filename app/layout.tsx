// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HypnoNico – Hypnose & mentalisme événementiel",
  description:
    "Spectacles d’hypnose et mentalisme pour événements privés, entreprises, CSE et restaurants. Devis rapide à Aix-en-Provence et région.",
  keywords: [
    "hypnose spectacle",
    "hypnotiseur événementiel",
    "mentalisme show",
    "animation entreprise hypnose",
    "hypnotiseur Aix-en-Provence",
  ],
  openGraph: {
    title: "HypnoNico – Hypnose & mentalisme événementiel",
    description:
      "Spectacles d’hypnose et mentalisme pour événements privés et entreprises.",
    url: "https://transeetillusion.fr",
    siteName: "HypnoNico",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
