// components/prestations-cards.tsx

type Props = {
  phoneNumber: string;
  phoneLabel: string;
};

export function PrestationsCards({ phoneNumber, phoneLabel }: Props) {
  const cards = [
    {
      title: "Show / Hypnose de spectacle",
      desc: "Un format scène dynamique, drôle et immersif pour tous publics.",
      bullets: ["Scène", "Interactivité", "Respect & sécurité"],
      cta: { label: "Demander un devis", href: "/contact" },
    },
    {
      title: "Close-up & mentalisme",
      desc: "Effets visuels et hypnose de proximité pour créer l’ambiance.",
      bullets: ["Cocktails", "Restaurants", "Afterworks"],
      cta: { label: "Options disponibles", href: "/contact" },
    },
    {
      title: "Événements privés",
      desc: "Mariages, anniversaires et soirées sur-mesure.",
      bullets: ["Flexible", "Fun", "Respectueux"],
      cta: { label: `Appeler ${phoneLabel}`, href: `tel:${phoneNumber}` },
    },
    {
      title: "Entreprises / CSE",
      desc: "Animation premium pour fédérer et marquer les équipes.",
      bullets: ["Team building", "Séminaires", "Cohésion"],
      cta: { label: "Demande entreprise", href: "/contact" },
      badge: "Pro",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.05] transition"
        >
          {c.badge && (
            <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200">
              {c.badge}
            </span>
          )}

          <h3 className="text-xl font-extrabold">{c.title}</h3>
          <p className="mt-3 text-white/70">{c.desc}</p>

          <ul className="mt-5 space-y-2 text-sm text-white/70">
            {c.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>

          <div className="mt-7">
            <a
              href={c.cta.href}
              className="inline-flex rounded-full px-6 py-3 border border-white/15 hover:border-white/30 hover:bg-white/5 transition font-semibold"
            >
              {c.cta.label}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
