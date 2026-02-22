export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div className="relative rounded-[3rem] border border-white/12 bg-black/70 shadow-2xl">
        {/* Glow bleu nuit */}
        <div className="pointer-events-none absolute -inset-1 rounded-[3.1rem] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-xl" />

        {/* Notch */}
        <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-black/80 border border-white/10" />

        {/* “Écran” */}
        <div className="relative m-3 mt-10 rounded-[2.2rem] bg-black border border-white/10 overflow-hidden">
          <div className="max-h-[680px] overflow-auto p-4">
            {children}
          </div>
        </div>

        {/* Petit “bouton” bas */}
        <div className="mx-auto mb-4 h-1.5 w-28 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
