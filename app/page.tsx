import Reveal from "@/components/reveal";
import PhoneFrame from "@/components/phone-frame";
import InstagramEmbeds from "@/components/instagram-embeds";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const posts = [
    "https://www.instagram.com/reel/DP_pZZyCGRp/",
    "https://www.instagram.com/reel/DLn1OuTonKw/",
    "https://www.instagram.com/reel/DTU4JXUCLke/",
    "https://www.instagram.com/reel/DPeumlDCCOM/",
    "https://www.instagram.com/reel/DPIwScbCNEI/",
    "https://www.instagram.com/reel/DOTat13iLM_/",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hypnose & Mentalisme live
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-gray-400 text-lg">
            Spectacles interactifs, close-up en restaurant, animations événementielles.
            Une expérience qui marque les esprits.
          </p>
        </Reveal>
      </section>

      {/* INSTAGRAM + PHONE */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-32">

        <Reveal>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              En action sur Instagram
            </h2>
            <p className="text-gray-400">
              Extraits de shows réels, réactions du public et moments forts.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <PhoneFrame>
            <InstagramEmbeds urls={posts} />
          </PhoneFrame>
        </Reveal>

      </section>

      {/* STATS */}
      <section className="py-32 px-6">
        <Reveal>
          <Stats />
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-neutral-900">
        <Reveal>
          <Testimonials />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-40 text-center px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Prêt à surprendre votre public ?
          </h2>
          <p className="text-gray-400 mb-10">
            Restaurants, événements privés, entreprises, campings, mariages.
          </p>

          <a
            href="https://www.instagram.com/hypnonico/"
            target="_blank"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Me contacter sur Instagram
          </a>
        </Reveal>
      </section>

    </main>
  );
}
