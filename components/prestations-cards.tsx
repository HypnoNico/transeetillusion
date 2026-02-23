type Props = {
  phoneNumber: string;
  phoneLabel: string;
};

function Icon({ name }: { name: "spark" | "wand" | "heart" | "briefcase" }) {
  // Icônes minimalistes en SVG (zéro dépendance)
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "wand") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 20L20 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 17l-2-2M9.5 14.5l-2-2M12 12l-2-2M14.5 9.5l-2-2M17 7l-2-2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 21s-7-4.35-9.5-9A5.7 5.7 0 0 1 12 6a5.7 5.7 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PrestationsCards({ phoneNumber, phoneLabel }: Props) {
  const cards = [
    {
      title: "Show / Hypnose de spectacle",
      desc: "Un format scène dynamique, drôle et immersif pour tous publics.",
      bullets: ["Scène", "Interactivité", "Respect & sécurité"],
      cta: { label: "Demander un devis", href: "/contact" },
      icon: "spark" as const,
    },
    {
      title: "Close-up & mentalisme",
      desc: "Effets visuels et hypnose de proximité pour créer l’ambiance.",
      bullets: ["Cocktails", "Restaurants", "Afterworks"],
      cta: { label: "Options disponibles", href: "/contact" },
      icon: "wand" as const,
    },
    {
      title: "Événements privés",
      desc: "Mariages, anniversaires et soirées sur-mesure.",
      bullets: ["Flexible", "Fun", "Respectueux"],
      cta: { label: `Appeler ${phoneLabel}`, href: `tel:${phoneNumber}` },
      icon: "heart" as const,
    },
    {
      title: "Entreprises / CSE",
      desc: "Animation premium pour fédérer et marquer les équipes.",
      bullets: ["Team building", "Séminaires", "Cohésion"],
      cta: { label: "Demande entreprise / CSE", href: "/contact" },
      badge: "Pro",
      icon: "briefcase" as const,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 card-shine hover:bg-white/[0.05] transition"
        >
          {c.badge && (
            <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200">
              {c.badge}
            </span>
          )}

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-blue-500/15 border border-blue-400/15 flex items-center justify-center text-blue-200">
              <Icon name={c.icon} />
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-extrabold">{c.title}</h3>
              <p className="mt-2 text-white/70">{c.desc}</p>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-white/70">
            {c.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>{b}</span>
              </li>
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
