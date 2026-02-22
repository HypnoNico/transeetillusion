"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({ to }: { to: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 900;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.round(to * (0.15 + 0.85 * p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);

  return <span>{val}</span>;
}

export function StatsStrip() {
  const { ref, inView } = useInView(0.2);

  const stats = [
    { k: 60, label: "shows & animations réalisés" },
    { k: 120, label: "volontaires sur scène (approx.)" },
    { k: 4, label: "formats : scène / close-up / entreprise / formation" },
  ];

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="text-3xl font-extrabold text-blue-300">
            +{inView ? <CountUp to={s.k} /> : 0}
          </div>
          <div className="mt-2 text-sm text-white/70">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
