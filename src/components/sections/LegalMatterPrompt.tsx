"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homepageContentByLanguage } from "@/data/homepage";
import { trackEvent } from "@/lib/analytics";
import { gsap, useGSAP } from "@/lib/gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Matter = "yes" | "no" | null;

function LegalMatterWatermark({
  parallaxRef,
}: {
  parallaxRef: RefObject<HTMLDivElement | null>;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updatePosition(clientX: number, clientY: number) {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      if (!isInside) {
        wrap.style.setProperty("--reveal-radius", "0px");
        return;
      }

      wrap.style.setProperty("--reveal-x", `${x}px`);
      wrap.style.setProperty("--reveal-y", `${y}px`);
      wrap.style.setProperty("--reveal-radius", "190px");
    }

    function handlePointerMove(e: PointerEvent) {
      updatePosition(e.clientX, e.clientY);
    }

    function handlePointerLeave() {
      wrapRef.current?.style.setProperty("--reveal-radius", "0px");
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      aria-hidden="true"
      className="absolute inset-x-0 bottom-4 z-0 flex justify-center will-change-transform sm:-bottom-10"
    >
      <div
        ref={wrapRef}
        className="legal-matter-watermark relative w-[105%] max-w-none"
      >
        <Image
          src="/optimized/phonenumbervector.webp"
          alt=""
          width={1600}
          height={293}
          className="h-auto w-full max-w-none opacity-90"
        />
        <Image
          src="/optimized/phonenumbervector-light.webp"
          alt=""
          width={1600}
          height={293}
          className="legal-matter-watermark-light pointer-events-none absolute inset-0 h-auto w-full max-w-none opacity-90"
        />
      </div>
    </div>
  );
}

export function LegalMatterPrompt() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useScrollReveal<HTMLDivElement>();
  const [matter, setMatter] = useState<Matter>(null);
  const { language, ui } = useLanguage();
  const { legalMatter } = homepageContentByLanguage[language];

  useGSAP(
    () => {
      const section = sectionRef.current;
      const background = backgroundRef.current;
      if (!section || !background) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const nextSection = section.nextElementSibling ?? section;
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            endTrigger: nextSection,
            end: "top top",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            background,
            { y: 24, autoAlpha: 1 },
            { y: -36, ease: "none", duration: 1 },
          )
          .to(background, { autoAlpha: 0, ease: "none", duration: 0.28 }, 0.72);

        return () => timeline.kill();
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(background, { clearProps: "transform,opacity,visibility" });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  function choose(value: "yes" | "no") {
    setMatter(value);
    trackEvent("legal_matter_prompt", { answer: value });
    const target = value === "yes" ? legalMatter.yesReveal.ctaHref : legalMatter.noReveal.ctaHref;
    setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 420);
  }

  const reveal = matter === "yes" ? legalMatter.yesReveal : matter === "no" ? legalMatter.noReveal : null;

  return (
    <section ref={sectionRef} id="matter" className="legal-matter relative overflow-hidden bg-ink text-white">
      <LegalMatterWatermark parallaxRef={backgroundRef} />
      <div ref={foregroundRef} className="relative z-10 mx-auto max-w-[1000px] px-7 pt-18 pb-24 text-center">
        <h2 className="m-0 text-[clamp(32px,5vw,56px)] leading-[1.05] font-black tracking-[-0.02em]">
          {legalMatter.heading}
        </h2>
        <p className="mt-4 mb-16 text-lg font-medium text-[#B9B9B9]">
          {legalMatter.subheading}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => choose("yes")}
            className={`h-auto min-w-[150px] rounded-lg border-[1.5px] border-brand px-[34px] py-[18px] text-lg font-extrabold ${
              matter === "yes" ? "bg-brand text-white" : "bg-[rgba(255,0,0,0.19)] text-white hover:brightness-110"
            }`}
          >
            {ui.hero.yes}
          </Button>
          <Button
            onClick={() => choose("no")}
            variant="outline"
            className={`h-auto min-w-[150px] rounded-lg border-[1.5px] border-[#4A4A4A] px-[34px] py-[18px] text-lg font-extrabold text-white hover:border-[#888] ${
              matter === "no" ? "bg-[#2A2A2A]" : "bg-[rgba(255,255,255,0.10)]"
            }`}
          >
            {ui.hero.no}
          </Button>
        </div>
        {reveal && (
          <div className="animate-bostan-reveal mt-7.5">
            <p className="mb-4.5 text-xl font-semibold text-[#E4E4E4]">
              {reveal.heading}
            </p>
            <Button
              variant={matter === "no" ? "outline" : "default"}
              nativeButton={false}
              className={`h-auto gap-2.5 rounded-md px-7.5 py-4 ${
                matter === "no" ? "border-[1.5px] border-white bg-transparent text-white hover:bg-white/10" : ""
              }`}
              render={
                <a href={reveal.ctaHref}>
                  {reveal.ctaLabel} <ArrowDown size={18} />
                </a>
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
