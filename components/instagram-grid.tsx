"use client";

import Script from "next/script";

export function InstagramGrid() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
      />

      <iframe
        src="https://lightwidget.com/widgets/401a32266ff8576eb279f4e57398738b.html"
        className="w-full"
        style={{ height: 520 }}
        scrolling="no"
        allowTransparency
      />
    </div>
  );
}
