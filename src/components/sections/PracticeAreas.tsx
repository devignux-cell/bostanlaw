"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { practiceAreasByLanguage } from "@/data/practiceAreas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function PracticeAreas() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
  const { language, ui } = useLanguage();
  const practiceAreas = practiceAreasByLanguage[language];

  return (
    <section id="areas" className="practice-areas">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <div className="mb-10 flex flex-col gap-0">
          <h2 className="m-0 text-[clamp(30px,4.5vw,50px)] font-black tracking-[-0.02em]">
            {ui.practiceAreas.heading}
          </h2>
          <span className="text-lg font-medium text-subtle-fg">
            {ui.practiceAreas.subheading}
          </span>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {practiceAreas.map((area) => (
            <div
              key={area.name}
              className="practice-area-card relative min-h-[184px] overflow-hidden rounded-[10px] transition-[box-shadow] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
            >
              <Image
                src={area.image}
                alt=""
                fill
                className="practice-area-image object-cover"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              />
              <Image
                src={area.image}
                alt=""
                fill
                className="practice-area-image practice-area-image-muted object-cover"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(91.16deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.37) 100%)",
                }}
              />
              <div className="relative flex h-full flex-col justify-center px-6 py-7">
                <div className="text-xl font-extrabold tracking-[-0.01em] text-white">
                  {area.name}
                </div>
                <p className="mt-2 max-w-[224px] text-[15px] leading-[1.5] text-[#ddd]">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="m-0 text-[28px] font-bold tracking-[-0.02em]">
            {ui.practiceAreas.ctaIntro} <span className="font-black">{ui.practiceAreas.ctaStrong}</span>
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="h-auto rounded-md px-[30px] py-[17px] text-[17px]"
            render={<a href="#contact">{ui.practiceAreas.ctaLabel}</a>}
          />
        </div>
      </div>
    </section>
  );
}
