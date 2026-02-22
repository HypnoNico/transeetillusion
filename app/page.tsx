import { InstagramGrid } from "@/components/instagram-grid";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXTE */}
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
              Spectacles & expériences
              <span className="block text-blue-400 mt-2">d’hypnose et mentalisme</span>
            </h1>

            <p className="mt-6 text-white/70 text-lg max-w-xl">
              Animations immersives pour entreprises, événements privés, restaurants et scènes.
              Objectif : surprendre, faire rire et marquer les esprits — dans un cadre pro et sécurisé.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
              >
                Demander un devis
              </Link>

              <a
                href="https://instagram.com/hypnonico"
                target="_blank"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-400 transition"
              >
                Voir Instagram
              </a>
            </div>
          </div>

          {/* INSTAGRAM */}
          <InstagramGrid />

        </div>
      </section>

      {/* POURQUOI */}
      <section className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-3 gap-8">

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold text-lg">Expérience forte</h3>
          <p className="text-white/70 mt-2">
            Des moments bluffants, visuels et mémorables pour ton public.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold text-lg">Respect & sécurité</h3>
          <p className="text-white/70 mt-2">
            Hypnose encadrée, bienveillante et professionnelle.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold text-lg">Formats adaptables</h3>
          <p className="text-white/70 mt-2">
            Scène, close-up, entreprises, mariages, soirées privées.
          </p>
        </div>

      </section>

      {/* CTA FINAL */}
      <section className="text-center pb-32 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Prêt à créer un moment inoubliable ?
        </h2>

        <p className="text-white/70 mt-4">
          Dis-moi ton événement, je te fais une proposition rapide.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
        >
          Demander un devis
        </Link>
      </section>

    </main>
  );
}
