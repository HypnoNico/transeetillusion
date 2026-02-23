// app/page.tsx

import { PrestationsCards } from "@/components/prestations-cards";

export default function Home() {
  const phoneNumber = "+33756966024";
  const phoneLabel = "07 56 96 60 24";

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden flex items-center justify-center text-center px-6 bg-black">
        <div className="absolute inset-0 hero-animated" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-blue-300/90 font-medium tracking-wide">
            HypnoNico — Transe & Illusion
          </p>

          <h1 className="mt-4 text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hypnose & mentalisme
            <span className="block text-blue-400 mt-3">
              pour marquer les esprits
            </span>
          </h1>

          <p className="mt-6 text-white/75 text-lg sm:text-xl max-w-2xl mx-auto">
            Spectacles interactifs, close-up et animations événementielles.
            Un cadre clair, une expérience mémorable.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Demander un devis
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition font-semibold"
            >
              Appeler {phoneLabel}
            </a>
          </div>

          <div className="mt-8 text-sm text-white/55">
            Événements privés • Entreprises • CSE • Restaurants • Campings • Soirées
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Prestations
          </h2>
          <p className="mt-3 text-white/70">
            Choisis un format. Je m’adapte à ton lieu, ton public et ton timing.
          </p>
        </div>

        <div className="mt-10">
          <PrestationsCards
            phoneNumber={phoneNumber}
            phoneLabel={phoneLabel}
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Comment ça se passe ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-blue-400 font-bold">1</div>
              <h3 className="mt-2 font-semibold text-lg">On échange</h3>
              <p className="mt-2 text-white/70 text-sm">
                Lieu, durée, type d’événement, ambiance, contraintes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-blue-400 font-bold">2</div>
              <h3 className="mt-2 font-semibold text-lg">Je propose le format</h3>
              <p className="mt-2 text-white/70 text-sm">
                Une structure claire, rythmée, adaptée au public.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-blue-400 font-bold">3</div>
              <h3 className="mt-2 font-semibold text-lg">Moment inoubliable</h3>
              <p className="mt-2 text-white/70 text-sm">
                Interactif, drôle, fluide et respectueux.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-7 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Demander un devis
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="px-7 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition font-semibold"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Témoignages
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          À remplacer par tes vrais avis clients.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "Ambiance incroyable, super pro du début à la fin.",
            "Tout le monde a adoré, c’était fluide et respectueux.",
            "Moment fort de notre événement d’entreprise.",
          ].map((txt, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white/80"
            >
              “{txt}”
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
