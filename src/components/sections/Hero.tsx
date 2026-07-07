"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homepageContentByLanguage } from "@/data/homepage";
import { siteConfig } from "@/data/site";
import { cn, toTelHref } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { HeroContent, HeroVariant } from "@/types/homepage";

function Eyebrow() {
  const { language } = useLanguage();
  const { hero } = homepageContentByLanguage[language];

  return (
    <div className="mb-6 inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] text-subtle-fg uppercase">
      <span className="inline-block h-0.5 w-[22px] bg-brand" />
      {hero.eyebrow} · {siteConfig.location}
    </div>
  );
}

function Headline({ content, className }: { content: HeroContent; className?: string }) {
  return (
    <h1
      className={`m-0 font-black tracking-[-0.03em] text-[clamp(56px,10vw,132px)] leading-[0.92] ${className ?? ""}`}
    >
      {content.headlineLead}
      <br />
      {content.headlineConnector}
      <span className="text-brand">{content.headlineAccent}</span>
    </h1>
  );
}

function PhoneDisplay({ size = "large" }: { size?: "large" | "medium" }) {
  const { ui } = useLanguage();

  return (
    <a href={toTelHref(siteConfig.phone)} className="inline-block text-ink">
      <div className="mb-0.5 text-xs font-bold tracking-[0.1em] text-subtle-fg uppercase">
        {ui.hero.callNowFree}
      </div>
      <div
        className={`font-extrabold tracking-[-0.02em] leading-none ${
          size === "large"
            ? "text-[clamp(34px,5.5vw,60px)]"
            : "text-[clamp(32px,4.5vw,52px)]"
        }`}
      >
        {siteConfig.phone}
      </div>
    </a>
  );
}

function DualCta() {
  const { ui } = useLanguage();

  return (
    <div className="mt-9 flex flex-wrap gap-3.5">
      <Button
        size="lg"
        nativeButton={false}
        className="h-auto gap-2.5 rounded-md px-[30px] py-[17px] text-[17px]"
        render={
          <a href="#contact">
            {ui.header.consultation} <ArrowRight size={18} />
          </a>
        }
      />
      <Button
        size="lg"
        variant="outline"
        nativeButton={false}
        className="h-auto gap-2.5 rounded-md border-[1.5px] border-ink px-[30px] py-[17px] text-[17px] text-ink"
        render={
          <a href={toTelHref(siteConfig.phone)}>
            <Phone weight="fill" size={18} /> {ui.hero.callNow}
          </a>
        }
      />
    </div>
  );
}

function HeroStatement() {
  const { language } = useLanguage();
  const { hero } = homepageContentByLanguage[language];

  return (
    <div className="mx-auto max-w-[1200px] px-7 pt-24 pb-[84px]">
      <div className="max-w-[760px]">
        <Eyebrow />
        <Headline content={hero} />
        <p className="mt-7 max-w-[520px] text-[clamp(18px,2.4vw,22px)] leading-[1.5] font-medium text-[#4A4A4A]">
          {hero.subhead}
        </p>
      </div>
      <div className="mt-11">
        <PhoneDisplay />
      </div>
      <DualCta />
    </div>
  );
}

function HeroSplit() {
  const { language, ui } = useLanguage();
  const { hero, legalMatter } = homepageContentByLanguage[language];

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-7 pt-20 pb-[76px] md:grid-cols-[1.15fr_0.85fr]">
      <div>
        <Eyebrow />
        <Headline
          content={hero}
          className="text-[clamp(48px,7vw,96px)]"
        />
        <p className="mt-6 max-w-[440px] text-xl leading-[1.5] font-medium text-[#4A4A4A]">
          {hero.subhead}
        </p>
        <div className="mt-7">
          <PhoneDisplay size="medium" />
        </div>
      </div>
      <div className="rounded-xl bg-ink px-[34px] py-10 text-white">
        <div className="mb-2 text-2xl leading-[1.2] font-extrabold tracking-[-0.02em]">
          {legalMatter.heading}
        </div>
        <p className="mb-6 text-[15px] leading-[1.5] text-[#B9B9B9]">
          {legalMatter.subheading}
        </p>
        <div className="flex gap-3">
          <Button
            render={<a href="#matter">{ui.hero.yes}</a>}
            nativeButton={false}
            className="h-auto flex-1 rounded-lg py-[18px] text-lg font-extrabold"
          />
          <Button
            variant="outline"
            render={<a href="#matter">{ui.hero.no}</a>}
            nativeButton={false}
            className="h-auto flex-1 rounded-lg border-[1.5px] border-[#444] bg-transparent py-[18px] text-lg font-extrabold text-white hover:bg-white/10"
          />
        </div>
      </div>
    </div>
  );
}

function HeroCentered() {
  const { language } = useLanguage();
  const { hero } = homepageContentByLanguage[language];

  return (
    <div className="px-7 pt-21 pb-[76px] text-center">
      <Image
        src="/optimized/bostanlawlogo.webp"
        alt={siteConfig.name}
        width={512}
        height={341}
        className="mx-auto mb-10 h-[clamp(34px,5vw,58px)] w-auto"
      />
      <div className="mb-[22px] inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] text-subtle-fg uppercase">
        {hero.eyebrow} · {siteConfig.location}
      </div>
      <Headline content={hero} className="text-center" />
      <p className="mx-auto mt-6 max-w-[520px] text-[clamp(18px,2.2vw,22px)] leading-[1.5] font-medium text-[#4A4A4A]">
        {hero.subhead}
      </p>
      <div className="mt-8 flex justify-center">
        <PhoneDisplay />
      </div>
      <div className="flex justify-center [&>div]:justify-center">
        <DualCta />
      </div>
    </div>
  );
}

function HeroPhoto() {
  const { language } = useLanguage();
  const { heroPhoto } = homepageContentByLanguage[language];
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const background = backgroundRef.current;
    const content = contentRef.current;
    const portrait = portraitRef.current;
    const trigger = background?.parentElement;
    if (!background || !content || !portrait || !trigger) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set([content, portrait], { autoAlpha: 0, y: 36 });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(content, { autoAlpha: 1, y: 0, duration: 1.35 })
        .to(portrait, { autoAlpha: 1, y: 0, duration: 1.65 }, "-=0.38");

      gsap.fromTo(
        background,
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([content, portrait], { autoAlpha: 1, y: 0 });
    });

    return () => media.revert();
  }, []);

  return (
    <>
      <div ref={backgroundRef} className="absolute inset-x-0 -top-[6%] -bottom-[6%] will-change-transform">
        <Image
          src="/optimized/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(264.57deg, rgba(255,185,185,0.058) 6%, rgba(255,255,255,0.672) 94%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-7 pt-[180px] lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div ref={contentRef} className="hero-photo-content w-full max-w-[600px] lg:pt-20 pb-16 lg:pb-[100px]">
          <h1 className="text-[clamp(40px,6.5vw,54px)] leading-[1.05] font-black tracking-[-0.03em] text-[#333]">
            {heroPhoto.headlineLine1}
            <br />
            <span className="text-brand">{heroPhoto.headlineLine2}</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-lg leading-[1.5] font-medium text-[#333] sm:text-xl">
            {heroPhoto.subhead}{" "}
            <span className="font-bold italic">{heroPhoto.subheadEmphasis}</span>
          </p>
          <div className="mt-18 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button
              size="lg"
              nativeButton={false}
              className="h-auto gap-2.5 rounded-md px-[30px] py-[17px] text-[17px]"
              render={
                <a href="#contact">
                  {heroPhoto.ctaPrimaryLabel} <ArrowRight size={18} />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-auto gap-2.5 rounded-md border-[1.5px] border-ink bg-transparent px-[30px] py-[17px] text-[17px] text-ink hover:bg-black/5"
              render={
                <a href={toTelHref(siteConfig.phone)}>
                  <Phone weight="fill" size={18} /> {heroPhoto.ctaSecondaryLabel}
                </a>
              }
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-3 text-center lg:justify-start lg:text-left">
            <ShieldCheck size={20} className="shrink-0 text-[rgba(51,51,51,0.7)]" />
            <p className="text-xs leading-[1.5] text-[rgba(51,51,51,0.7)]">
              {heroPhoto.trustLine}
            </p>
          </div>
        </div>
        <div ref={portraitRef} className="hero-photo-portrait relative w-full max-w-[480px] shrink-0 lg:w-[480px] lg:self-end">
          <div className="relative aspect-[476/589] w-full overflow-hidden rounded-xl">
            <Image
              src="/optimized/hero-portrait.webp"
              alt="BoStan Law attorney"
              fill
              sizes="(min-width: 1024px) 900px, min(160vw, 900px)"
              className="object-cover"
            />
          </div>
          <a
            href={toTelHref(siteConfig.phone)}
            className="absolute -right-4 bottom-10 hidden w-[260px] flex-col gap-2.5 rounded-sm bg-[rgba(255,0,0,0.4)] px-4 py-3 text-white shadow-[4px_4px_4px_rgba(0,0,0,0.15)] backdrop-blur-[8px] lg:flex"
          >
            <p className="text-[11px] leading-[1.3] text-white/85 italic">
              {heroPhoto.floatingChipEyebrow}
            </p>
            <p className="text-sm leading-[1.4]">{heroPhoto.floatingChipBody}</p>
            <p className="text-2xl font-bold tracking-tight">{siteConfig.phone}</p>
          </a>
        </div>
      </div>
    </>
  );
}

const variants: Record<HeroVariant, () => React.JSX.Element> = {
  statement: HeroStatement,
  split: HeroSplit,
  centered: HeroCentered,
  photo: HeroPhoto,
};

export function Hero() {
  const { language } = useLanguage();
  const revealRef = useScrollReveal<HTMLElement>();
  const { heroVariant } = homepageContentByLanguage[language];
  const Variant = variants[heroVariant];

  return (
    <section
      ref={heroVariant === "photo" ? undefined : revealRef}
      id="top"
      className={cn("hero", heroVariant === "photo" && "relative overflow-hidden bg-ink")}
    >
      <Variant />
    </section>
  );
}
