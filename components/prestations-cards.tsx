import Link from "next/link";

const items = [
  {
    title: "Spectacle scène",
    desc: "Format 30–90 min. Rythme, humour et moments visuels. Idéal soirées, campings, salles, événements.",
    tags: ["Scène", "Grand public", "30–90 min"],
  },
  {
    title: "Close-up (restaurants / bars)",
    desc: "Hypnose & mentalisme de table en table : interactions rapides, élégantes et mémorables.",
    tags: ["Close-up", "Ambiance", "Table à table"],
  },
  {
    title: "Entreprise / séminaire",
    desc: "Animation premium pour soirée d’entreprise : énergie, cohésion, fun contrôlé, adapté aux contraintes pro.",
    tags: ["Corporate", "Séminaire", "Sur-mesure"],
  },
  {
    title: "Demande Entreprise / CSE",
    desc: "Page dédiée décideurs : formats corporate, besoins techniques, cadre & sécurité, proposition rapide par email ou téléphone.",
    tags: ["CSE", "RH", "Devis rapide"],
    highlight: true,
  },
  {
    title: "Événements privés",
    desc: "Mariages, anniversaires, soirées privées : format adaptable, respectueux, jamais gênant.",
    tags: ["Privé", "Mariage", "Surprise"],
  },
  {
    title: "Formations hypnose",
    desc: "Formation débutant (2 jours) : structure complète, pratique encadrée, sécurité & gestion des abréactions.",
    tags: ["Formation", "Débutant", "2 jours"],
  },
];

export function PrestationsCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Prestations</h2>
        <p className="mt-4 text-white/70">
          Choisis un format, je m’adapte au lieu, au public et à l’énergie de la soirée.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className={`group rounded-2xl border bg-white/5 p-6 transition ${
              it.highlight
                ? "border-blue-400/30 bg-blue-500/10 hover:bg-blue-500/15"
                : "border-white/10 hover:bg-white/7"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <span
                className={`h-10 w-10 rounded-xl border flex items-center justify-center ${
                  it.highlight
                    ? "bg-blue-500/20 border-blue-400/25 text-blue-200"
                    : "bg-blue-500/15 border-blue-400/15 text-blue-200"
                }`}
              >
                ✦
              </span>
            </div>

            <p className="mt-3 text-white/70 leading-relaxed">{it.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {it.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-white/10 bg-black/30 px-3 py-1 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition px-5 py-2.5 font-semibold"
              >
                Demander un devis
              </Link>

              <a
                href="tel:+33756966024"
                className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-200 transition px-5 py-2.5"
              >
                Appeler
              </a>

              <a
                href="https://instagram.com/hypnonico"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-200 transition px-5 py-2.5"
              >
                DM Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
