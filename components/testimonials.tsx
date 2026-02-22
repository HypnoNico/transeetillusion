export function Testimonials() {
  const items = [
    {
      name: "Responsable événementiel",
      who: "Entreprise",
      text: "Intervention ultra pro. Le public a ri, a été bluffé, et l’ambiance a décollé instantanément. Parfait pour une soirée interne.",
    },
    {
      name: "Gérant",
      who: "Bar / restaurant",
      text: "Très bon rythme, respectueux, et surtout : les clients en redemandent. On a eu un vrai pic d’ambiance et de retours positifs.",
    },
    {
      name: "Organisatrice",
      who: "Événement privé",
      text: "Tout le monde en parle encore. C’était drôle, impressionnant, jamais gênant. Exactement ce qu’on voulait.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <div
          key={t.name}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-blue-500/20 border border-blue-400/20 flex items-center justify-center text-blue-200 font-bold">
              {t.name.slice(0, 1)}
            </div>
            <div>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-white/60">{t.who}</div>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            “{t.text}”
          </p>
        </div>
      ))}
    </div>
  );
}
