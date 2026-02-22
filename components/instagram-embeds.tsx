"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Props = { postUrls: string[] };

export function InstagramEmbeds({ postUrls }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (!visible) return;

        // Reprocess embeds when section becomes visible
        // @ts-ignore
        if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
          // @ts-ignore
