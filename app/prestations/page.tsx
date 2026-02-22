import Link from "next/link";

export default function Prestations() {
  const items = [
    {
      title: "Show / Hypnose de spectacle",
      desc: "Un format scène dynamique, drôle et construit. Idéal entreprises, campings, casinos, villages vacances, soirées.",
      bullets: ["Durée adaptable", "Interactivité", "Cadre respectueux & safe"],
    },
    {
      title: "Close-up (hypnose & mentalisme)",
      desc: "Au plus près des invités : effets rapides, visuels, et ambiance qui monte naturellement.",
      bullets: ["Cocktail / dîner / afterwork", "Très visuel", "Parfait pour networking"],
    },
    {
      title: "Entreprise / Team building",
      desc: "Une intervention qui crée de la cohésion (et des souvenirs). Adaptable au thème de votre événement.",
      bullets: ["Animation + moments ‘wow’", "Option Q&A", "Format clé en main"],
    },
    {
      title: "Événements privés",
      desc: "Mariages, anniversaires, soirées privées : un format fun, calibré, et fluide.",
      bullets: ["En salle ou domicile", "Humour & rythme", "Brief organisateur inclus"],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold">Prestations</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Spectacles et animations autour de l’hypnose et du mentalisme. Objectif : une expérience mémorable, avec un cadre clair.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold">{i.title}</h2>
            <p className="mt-2 text-sm text-white/70">{i.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {i.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-3">
        <Link className="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30 hover:bg-blue-500/28" href="/contact">
          Demander un devis
        </Link>
        <Link className="rounded-2xl bg-white/0 px-4 py-2 text-sm text-white/85 ring-1 ring-white/15 hover:bg-white/5" href="/faq">
          Lire la FAQ
        </Link>
      </div>
    </main>
  );
}
