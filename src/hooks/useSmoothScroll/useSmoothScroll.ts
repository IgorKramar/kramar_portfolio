"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // основная "маслянистость" — 1.0–1.5
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // expo out
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      // можно эмитировать событие scroll, если нужно
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
