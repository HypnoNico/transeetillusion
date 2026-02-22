"use client";

import Script from "next/script";
import { useEffect } from "react";

type Props = {
  urls: string[];
  title?: string;
};

export function InstagramEmbeds({ urls, title = "Instagram" }: Props) {
  useEffect(() => {
    // Reprocess embeds after render
    const t = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    }, 250);

    return () => clearTimeout(t);
  }, [urls]);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        <p className="text-white/70 mt-2">
          Derniers posts — clique pour ouvrir sur Instagram.
        </p>
      </div>

      {/* Instagram embed script */}
      <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {urls.map((url) => (
          <div
            key={url}
            className="rounded-2xl border border-white/10 bg-white/5 p-3"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ background: "#000", margin: 0, width: "100%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
