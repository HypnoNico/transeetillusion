import Link from "next/link";

export default function Formations() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold">Formations</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Formations structurées et orientées pratique. Pas de paiement en ligne : tout se fait sur devis.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold">Hypnose de spectacle — Débutants</h2>
          <p className="mt-2 text-sm text-white/70">
            Pour adultes sans expérience. Objectifs : comprendre l’hypnose, tests de réceptivité, structure d’une séance, et gestion des abréactions.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />Beaucoup de pratique</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />Pré-talk → tests → induction → suggestions</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />Cadre sécurité & éthique</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold">Ateliers / Coaching</h2>
          <p className="mt-2 text-sm text-white/70">
            Sessions ciblées : présence scénique, scripting, inductions, approfondissements, gestion des réactions, etc.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />À la carte</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />Feedback concret</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300/80" />Exercices reproductibles</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Link className="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30 hover:bg-blue-500/28" href="/contact">
          Demander un devis formation
        </Link>
      </div>
    </main>
  );
}
