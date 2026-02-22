"use client";

import Script from "next/script";
import { useEffect } from "react";

export function InstagramEmbeds({ urls }: { urls: string[] }) {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      if (window.instgrm?.Embeds?.process) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    }, 200);
  }, [urls]);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {urls.map((url) => (
          <blockquote
            key={url}
            className="instagram-media rounded-xl border border-white/10 bg-black"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{ margin: 0 }}
          />
        ))}
      </div>
    </>
  );
}
