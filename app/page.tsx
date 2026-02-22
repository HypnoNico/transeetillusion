export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold">
        Transe & Illusion
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        Spectacles, prestations et formations en hypnose de spectacle.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
        >
          Demander un devis
        </a>
        <a
          href="https://instagram.com/HypnoNico"
          className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl"
        >
          DM Instagram
        </a>
      </div>

      <p className="mt-10 text-sm text-gray-400">
        HypnoNico — Transe & Illusion
      </p>
    </main>
  );
}
