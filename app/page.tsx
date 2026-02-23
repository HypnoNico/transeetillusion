// app/page.tsx
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { PrestationsCards } from "@/components/prestations-cards";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center text-center px-6 bg-black">
        <div className="absolute inset-0 hero-animated" />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hypnose & mentalisme
            <span className="block text-blue-400 mt-3">en live</span>
          </h1>

          <p className="mt-6 text-white/70 text-lg sm:text-xl">
            Spectacles interactifs, close-up et animations événementielles qui marquent les esprits.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Demander un devis
            </a>

            <a
              href="tel:+33756966024"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-300 transition"
            >
              Appeler
            </a>

            <a
              href="https://instagram.com/hypnonico"
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-300 transition"
            >
              DM Instagram
            </a>
          </div>
        </div>
      </section>

      {/* PITCH */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold">Une expérience mémorable</h2>
          <p className="text-white/70 mt-4 text-lg">
            Humour, surprise et immersion dans un cadre respectueux et sécurisé. Chaque intervention est adaptée au public
            et au lieu.
          </p>
        </Reveal>
      </section>

      {/* CARTES PRESTATIONS */}
      <PrestationsCards />

      {/* TÉMOIGNAGES */}
      <section className="py-24 px-6 bg-neutral-900">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12">Ils en parlent</h2>
          <Testimonials />
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center px-6">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold">Prêt à surprendre ton public ?</h2>
          <p className="text-white/70 mt-4">
            Restaurants, entreprises, événements privés ou scènes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Demander un devis
            </a>

            <a
              href="tel:+33756966024"
              className="inline-block px-10 py-4 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-200 transition"
            >
              Appeler
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
