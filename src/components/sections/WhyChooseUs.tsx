"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homepageContentByLanguage } from "@/data/homepage";
import { siteConfig } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyChooseUs() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
  const { language, ui } = useLanguage();
  const { whyChoose } = homepageContentByLanguage[language];

  return (
    <section className="why-choose-us border-y border-line bg-cream">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <div className="mb-17 flex flex-col gap-2">
          <h2 className="m-0 text-[clamp(30px,4.5vw,50px)] font-black tracking-[-0.02em]">
            {ui.whyChoose.headingLead} <span className="text-brand">{siteConfig.name}</span>
          </h2>
          <p className="m-0 text-xl font-medium text-subtle-fg">
            {ui.whyChoose.subheading}
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChoose.map((item) => (
            <div
              key={item.name}
              className="why-choose-card relative h-[420px] overflow-hidden rounded-[20px] lg:h-[476px]"
            >
              <div className="why-choose-card-image absolute inset-0">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="why-choose-card-shade absolute inset-0 bg-[rgba(0,0,0,0.34)]" />
              <div className="why-choose-card-gradient absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.86)] via-[rgba(0,0,0,0.58)] to-[rgba(0,0,0,0.44)]" />
              <div className="relative flex h-full flex-col justify-start px-7 pt-12">
                <p className="m-0 text-[clamp(23px,2.5vw,32px)] leading-[1.1] font-extrabold tracking-[-0.01em] break-words text-white">
                  {item.name}
                </p>
                <p className="mt-4 max-w-[30rem] text-[15px] leading-[1.55] font-medium text-white/82">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
