import { Reveal } from "@/components/reveal";
import { PhoneFrame } from "@/components/phone-frame";
import { InstagramEmbeds } from "@/components/instagram-embeds";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  const posts = [
    "https://www.instagram.com/reel/DLn1OuTonKw/",
    "https://www.instagram.com/reel/DP_pZZyCGRp/",
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      <section className="py-40 text-center px-6">
        <Reveal>
          <h1 className="text-6xl font-bold mb-6">
            Hypnose & mentalisme en live
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Spectacles interactifs et animations événementielles
          </p>
        </Reveal>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-6 py-32">
        <Reveal>
          <PhoneFrame>
            <InstagramEmbeds urls={posts} />
          </PhoneFrame>
        </Reveal>
      </section>

      <section className="py-32 px-6">
        <Reveal>
          <Stats />
        </Reveal>
      </section>

      <section className="py-32 px-6 bg-neutral-900">
        <Reveal>
          <Testimonials />
        </Reveal>
      </section>

    </main>
  );
}
