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

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(targets, { clearProps: "opacity,transform,visibility" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(targets, { autoAlpha: 0, y: enterY });

        const animateIn = () => {
          gsap.to(targets, {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: "power2.out",
            stagger,
            overwrite: "auto",
          });
        };

        const animateOut = (direction: 1 | -1) => {
          gsap.to(targets, {
            autoAlpha: 0,
            y: direction === 1 ? -enterY : enterY,
            duration: duration * 0.85,
            ease: "power1.out",
            stagger,
            overwrite: "auto",
          });
        };

        const trigger = ScrollTrigger.create({
          trigger: root,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: animateIn,
          onEnterBack: animateIn,
          onLeave: () => animateOut(1),
          onLeaveBack: () => animateOut(-1),
        });

        return () => {
          trigger.kill();
          gsap.killTweensOf(targets);
        };
      });

      return () => media.revert();
    },
    { scope: ref },
  );

  return ref;
}
