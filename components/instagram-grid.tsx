"use client";

import Script from "next/script";

type Props = {
  postUrls: string[];
};

export function InstagramEmbeds({ postUrls }: Props) {
  return (
    <div>
      {/* Script officiel Instagram (une seule fois) */}
      <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {postUrls.slice(0, 6).map((url) => (
          <div
            key={url}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ background: "transparent", margin: 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
