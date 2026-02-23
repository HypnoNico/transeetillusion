export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "Transe & Illusion — HypnoNico",
    url: "https://transeetillusion.fr",
    telephone: "+33756966024",
    email: "contact@transeetillusion.fr",
    areaServed: "FR",
    description:
      "Spectacles d’hypnose et mentalisme pour événements privés, entreprises, CSE, restaurants et soirées.",
    sameAs: ["https://www.instagram.com/hypnonico/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
