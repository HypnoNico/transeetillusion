export function Testimonials() {
  const reviews = [
    "Une ambiance incroyable, tout le monde a adoré !",
    "Bluffant, drôle et très pro du début à la fin.",
    "Les clients en parlent encore plusieurs jours après.",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="max-w-sm p-6 rounded-xl bg-white/5 border border-white/10"
        >
          “{r}”
        </div>
      ))}
    </div>
  );
}
