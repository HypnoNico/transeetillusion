export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "HypnoNico – Transe & Illusion",
    url: "https://transeetillusion.fr",
    telephone: "+33756966024",
    areaServed: "FR",
    description:
      "Spectacles d’hypnose et mentalisme pour événements privés, entreprises et restaurants.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
