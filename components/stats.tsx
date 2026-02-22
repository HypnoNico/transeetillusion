"use client";

import { useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = () => {
      start += Math.ceil(value / 40);
      if (start >= value) return setCount(value);
      setCount(start);
      requestAnimationFrame(step);
    };
    step();
  }, [value]);

  return <span>{count}</span>;
}

export function Stats() {
  return (
    <div className="flex flex-wrap justify-center gap-12 text-center">
      <div>
        <p className="text-4xl font-bold text-blue-400">
          +<Counter value={60} />
        </p>
        <p className="text-gray-400">Shows réalisés</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-blue-400">
          +<Counter value={120} />
        </p>
        <p className="text-gray-400">Volontaires hypnotisés</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-blue-400">
          <Counter value={4} />
        </p>
        <p className="text-gray-400">Formats d’animation</p>
      </div>
    </div>
  );
}
