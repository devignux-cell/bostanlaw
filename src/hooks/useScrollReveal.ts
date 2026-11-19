"use client";

import { useRef, type RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  /** Animate direct children with a stagger instead of the container as a whole. */
  stagger?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options?: ScrollRevealOptions,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const root = ref.current;
      const targets = options?.stagger
        ? gsap.utils.toArray<HTMLElement>(root.children)
        : [root];
      const enterY = options?.y ?? 24;
      const duration = options?.duration ?? 1.05;
      const stagger = options?.stagger ? 0.08 : 0;
      const media = gsap.matchMedia();
      let hasEntered = false;

      media.add("(prefers-reduced-motion: no-preference)", () => {
        if (hasEntered) return;

        ScrollTrigger.create({
          trigger: root,
          start: "top bottom+=15%",
          onEnter: (trigger) => {
            hasEntered = true;
            trigger.kill();

            // Fast scrolling or a layout shift can put the content in view
            // before the trigger fires. Leave it readable in that case.
            if (root.getBoundingClientRect().top < window.innerHeight) return;

            gsap.from(targets, {
              opacity: 0,
              y: enterY,
              duration,
              ease: "power2.out",
              stagger,
            });
          },
        });
      });

      return () => media.revert();
    },
    { scope: ref },
  );

  return ref;
}
