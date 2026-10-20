"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { PracticeAreaDialog } from "@/components/sections/PracticeAreaDialog";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PracticeArea, PracticeAreaId } from "@/types/practiceArea";

export function PracticeAreas() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
  const { dictionary, language, ui } = useLanguage();
  const practiceAreas = dictionary.practiceAreas;
  const [activePracticeAreaId, setActivePracticeAreaId] = useState<PracticeAreaId | null>(null);
  const pendingConsultation = useRef(false);

  function openArea(area: PracticeArea) {
    setActivePracticeAreaId(area.id);
  }

  function finishClosing(open: boolean) {
    if (open || !pendingConsultation.current) return;
    pendingConsultation.current = false;
    const contact = document.getElementById("contact");
    const firstField = document.getElementById("name");
    if (!contact) return;
    requestAnimationFrame(() => {
      firstField?.focus({ preventScroll: true });
      contact.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  return (
    <section id="areas" className="practice-areas">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <div className="mb-10 flex flex-col items-center gap-0 text-center sm:items-start sm:text-left">
          <h2 className="m-0 text-[clamp(34px,4.5vw,52px)] leading-[1.1]">
            {ui.practiceAreas.heading}
          </h2>
          <span className="max-w-[34rem] text-lg leading-[1.5] text-subtle-fg sm:max-w-none">
            {ui.practiceAreas.subheading}
          </span>
        </div>

        <Dialog.Root<PracticeArea>
          open={activePracticeAreaId !== null}
          triggerId={activePracticeAreaId ? `practice-${activePracticeAreaId}` : null}
          onOpenChange={(open) => { if (!open) setActivePracticeAreaId(null); }}
          onOpenChangeComplete={finishClosing}
        >
          {({ payload }) => <>
          <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Dialog.Trigger
                key={area.id}
                id={`practice-${area.id}`}
                payload={area}
                onClick={() => openArea(area)}
                className="practice-area-card relative min-h-[184px] w-full overflow-hidden rounded-[10px] text-left shadow-none transition-[box-shadow] duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] focus-visible:ring-3 focus-visible:ring-brand focus-visible:ring-offset-3 focus-visible:outline-none"
              >
                <Image src={area.image} alt="" fill className="practice-area-image object-cover" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
                <Image src={area.image} alt="" fill className="practice-area-image practice-area-image-muted object-cover" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
                <span className="absolute inset-0" style={{ backgroundImage: "linear-gradient(91.16deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.43) 100%)" }} />
                <span className="relative flex h-full flex-col justify-between gap-4 px-6 py-6">
                  <span className="block">
                    <span className="block font-heading text-[clamp(24px,2.5vw,28px)] leading-[1.2] font-semibold text-white">{area.name}</span>
                    <span className="mt-2 block w-full max-w-full text-[15px] leading-[1.5] text-[#E6E6E6]">{area.description}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 self-start text-[13px] leading-none font-semibold text-white/95">
                    {ui.practiceAreaDialog.learnMore}
                    <ArrowUpRight size={16} className="practice-area-arrow" aria-hidden="true" />
                  </span>
                </span>
              </Dialog.Trigger>
            ))}
          </div>

          {payload && (
            <PracticeAreaDialog
              area={payload}
              language={language}
              ui={ui}
              legalHeading={dictionary.legal.heading}
              onConsultation={() => {
                pendingConsultation.current = true;
                setActivePracticeAreaId(null);
              }}
            />
          )}
          </>}
        </Dialog.Root>

        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="m-0 font-heading text-[clamp(26px,3vw,32px)] leading-[1.2] font-semibold">
            {ui.practiceAreas.ctaIntro} <span className="font-bold">{ui.practiceAreas.ctaStrong}</span>
          </p>
          <Button size="lg" nativeButton={false} className="h-auto min-w-0 w-full max-w-full rounded-md px-4 py-[17px] text-center text-[17px] whitespace-normal sm:w-auto sm:px-[30px]" render={<a href="#contact">{ui.practiceAreas.ctaLabel}</a>} />
        </div>

        <noscript>
          <div className="mt-12 space-y-9 border-t border-line pt-9">
            {practiceAreas.map((area) => (
              <article key={area.id}>
                <h3 className="font-heading text-2xl font-bold">{area.name}</h3>
                <p className="mt-2">{area.details.introduction}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {area.details.keyPoints.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}
