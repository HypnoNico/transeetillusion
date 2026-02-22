const faqs = [
  { q: "Est-ce que tout le monde est hypnotisable ?", a: "La majorité des gens peuvent vivre une expérience hypnotique, mais la réceptivité varie. En spectacle, je sélectionne des volontaires via des tests simples." },
  { q: "Est-ce dangereux ?", a: "Non quand c’est encadré. Je pose un cadre clair (sécurité, respect, consentement) et j’adapte le contenu au public et au lieu." },
  { q: "On peut me faire faire n’importe quoi ?", a: "Non. Ce n’est pas un contrôle mental. Les volontaires restent dans une dynamique de coopération et de respect." },
  { q: "De quoi as-tu besoin techniquement ?", a: "Selon le format : souvent un micro + une diffusion. Je fournis une fiche technique selon le lieu et le public." },
  { q: "Comment réserver ?", a: "Via la page Contact (devis) ou DM Instagram. Je réponds avec une proposition claire." },
];

export default function FAQ() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold">FAQ</h1>
      <p className="mt-3 text-white/70 max-w-2xl">Les questions qu’on me pose le plus souvent.</p>

      <div className="mt-10 space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-bold">{f.q}</h2>
            <p className="mt-2 text-sm text-white/70">{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
