import Link from "next/link";
import { InstagramEmbeds } from "@/components/instagram-embeds";

export default function HomePage() {
  const posts = [
    "https://www.instagram.com/reel/DP_pZZyCGRp/",
    "https://www.instagram.com/reel/DLn1OuTonKw/",
    "https://www.instagram.com/reel/DTU4JXUCLke/",
    "https://www.instagram.com/reel/DPeumlDCCOM/",
    "https://www.instagram.com/reel/DPIwScbCNEI/",
    "https://www.instagram.com/reel/DOTat13iLM_/",
  ];

  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-14 items-center">

        <div>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
            Hypnose & mentalisme
            <span className="block text-blue-400 mt-2">
              pour marquer les esprits
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Spectacles, close-up et formations en hypnose de spectacle pour événements,
            entreprises, restaurants et scènes privées.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Demander un devis
            </Link>

            <a
              href="https://instagram.com/HypnoNico"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-400 transition"
            >
              Voir Instagram
            </a>
          </div>
        </div>

      </section>

      {/* INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold">Instagram</h2>
        <p className="text-white/70 mt-2">
          Aperçu de mes dernières performances
        </p>

        <div className="mt-6">
          <InstagramEmbeds postUrls={posts} />
        </div>
      </section>

      {/* ARGUMENTS */}
      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-8">

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold text-lg">Impact fort</h3>
          <p className="text-white/70 mt-2">
            Des expériences bluffantes qui marquent durablement ton public.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold text-lg">Sécurité & respect</h3>
          <p className="text-white/70 mt-2">
            Hypnose encadrée, bienveillante et professionnelle.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold text-lg">Formats flexibles</h3>
          <p className="text-white/70 mt-2">
            Scène, close-up, entreprises, mariages, soirées privées.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="text-center pb-32 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Envie d’un moment inoubliable ?
        </h2>

        <p className="text-white/70 mt-4">
          Dis-moi ton événement et je te fais une proposition rapide.
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
