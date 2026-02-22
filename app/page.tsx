import Link from "next/link";
import { InstagramEmbeds } from "@/components/instagram-embeds";
import { PhoneFrame } from "@/components/phone-frame";
import { Reveal } from "@/components/reveal";
import { StatsStrip } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

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
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
                Hypnose & mentalisme
                <span className="block text-blue-400 mt-2">
                  pour marquer les esprits
                </span>
              </h1>

              <p className="mt-6 text-white/70 text-lg max-w-xl">
                Spectacles, close-up, événements d’entreprise et formations en hypnose
                de spectacle. Une expérience fun, élégante, et encadrée.
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
                  DM Instagram
                </a>
              </div>

              <div className="mt-10">
                <Reveal delayMs={120}>
                  <StatsStrip />
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* PHONE + INSTA */}
          <Reveal delayMs={120}>
            <PhoneFrame>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <div className="text-sm font-semibold">Instagram — @HypnoNico</div>
                  <div className="text-xs text-white/60">Aperçu de 6 posts (reels)</div>
                </div>
                <a
                  href="https://instagram.com/HypnoNico"
                  target="_blank"
                  className="text-xs rounded-full px-3 py-1 border border-white/15 hover:border-blue-400/60 hover:text-blue-200 transition"
                >
                  Ouvrir
                </a>
              </div>

              <InstagramEmbeds postUrls={posts} />
            </PhoneFrame>
          </Reveal>
        </div>
      </section>

      {/* PITCH */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Impact fort",
              text: "Des moments bluffants, visuels et mémorables, adaptés à ton public.",
            },
            {
              title: "Cadre & sécurité",
              text: "Consentement, respect, sélection des volontaires, et accompagnement propre.",
            },
            {
              title: "Formats flexibles",
              text: "Scène, close-up, entreprise, mariages, restaurants, soirées privées.",
            },
          ].map((c, idx) => (
            <Reveal key={c.title} delayMs={idx * 80}>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="text-white/70 mt-2">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold">Ils en parlent</h2>
          <p className="text-white/70 mt-2">
            Quelques retours typiques après une animation.
          </p>
        </Reveal>

        <div className="mt-8">
          <Reveal delayMs={120}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center pb-28 px-6">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Envie d’un moment inoubliable ?
          </h2>
          <p className="text-white/70 mt-4">
            Dis-moi le lieu, la date, le format, et le nombre de personnes — je te fais une proposition rapide.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Demander un devis
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
