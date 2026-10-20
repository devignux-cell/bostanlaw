"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyChooseUs() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
  const { dictionary, ui } = useLanguage();
  const { whyChoose } = dictionary.homepage;

  return (
    <section className="why-choose-us border-y border-line bg-cream">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <div className="mb-17 flex flex-col gap-2 text-center sm:text-left">
          <h2 className="m-0 flex flex-col items-center gap-x-4 gap-y-1 text-[clamp(34px,4.5vw,52px)] leading-[1.1] sm:flex-row sm:flex-wrap sm:justify-start">
            <span>{ui.whyChoose.headingLead}</span>
            <span className="why-choose-wordmark">
              <Image
                src="/bostanlawmorespacelogo.png"
                alt={siteConfig.name}
                width={2172}
                height={724}
                className="why-choose-wordmark-image"
                unoptimized
              />
            </span>
          </h2>
          <p className="mx-auto max-w-[30rem] text-xl leading-[1.5] text-subtle-fg sm:mx-0 sm:max-w-none">
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
              className="why-choose-card relative min-h-[420px] overflow-hidden rounded-[20px] lg:min-h-[476px]"
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
              <div className="relative flex h-full flex-col justify-start px-7 pt-12 pb-10">
                <p className="m-0 font-heading text-[clamp(26px,2.5vw,32px)] leading-[1.15] font-semibold break-words text-white">
                  {item.name}
                </p>
                <p className="mt-4 max-w-[30rem] text-[15px] leading-[1.55] text-white/82">
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
