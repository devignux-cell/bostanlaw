import Image from "next/image";
import { BioDisclosure } from "@/components/sections/BioDisclosure";
import { TeamReveal } from "@/components/sections/TeamReveal";
import type { TeamCopy } from "@/i18n/types";

const paragraphClass = "m-0 max-w-[72ch] text-[16px] leading-[1.75] text-[#444] sm:text-[17px]";

export function TeamSection({ copy }: { copy: TeamCopy }) {
  return (
    <section id="team" aria-labelledby="team-heading" className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <TeamReveal className="mb-12 text-center sm:mb-16 sm:text-left">
          <h2 id="team-heading" className="m-0 text-[clamp(34px,4.5vw,50px)] leading-[1.05] font-black tracking-[-0.02em] text-ink">
            {copy.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[34rem] text-lg font-medium leading-[1.5] text-subtle-fg sm:mx-0 sm:max-w-none sm:text-xl">{copy.subtitle}</p>
        </TeamReveal>

        <article aria-labelledby="stan-heading" className="text-left">
          <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
            <TeamReveal className="mx-auto w-full max-w-[480px] lg:max-w-none">
              <Image
                src="/optimized/stan-bio.webp"
                alt={copy.stan.imageAlt}
                width={960}
                height={1200}
                sizes="(min-width: 1200px) 440px, (min-width: 1024px) 40vw, (min-width: 640px) 480px, calc(100vw - 56px)"
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </TeamReveal>
            <div className="min-w-0 lg:pt-2">
              <h3 id="stan-heading" className="m-0 text-[clamp(29px,3.3vw,42px)] leading-[1.1] font-extrabold tracking-[-0.02em] text-ink">
                {copy.stan.name}
              </h3>
              <p className="mt-3 mb-7 text-[15px] font-bold leading-[1.5] tracking-[0.01em] text-brand sm:text-base">
                {copy.stan.role}, {copy.stan.organization}
              </p>
              <p className={paragraphClass}>{copy.stan.paragraphs[0]}</p>
              <BioDisclosure readFullBio={copy.readFullBio} showLess={copy.showLess}>
                {copy.stan.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph} className={paragraphClass}>{paragraph}</p>
                ))}
              </BioDisclosure>
            </div>
          </div>
        </article>

        <article aria-labelledby="paulina-heading" className="mt-20 border-t border-line pt-14 text-left sm:mt-24 sm:pt-16">
          <TeamReveal className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
            <div>
              <h3 id="paulina-heading" className="m-0 text-[clamp(29px,3.3vw,42px)] leading-[1.1] font-extrabold tracking-[-0.02em] text-ink">
                {copy.paulina.name}
              </h3>
              <p className="mt-3 text-[15px] font-bold leading-[1.5] tracking-[0.01em] text-brand sm:text-base">
                {copy.paulina.role}, {copy.paulina.organization}
              </p>
            </div>
            <div className="space-y-5">
              {copy.paulina.paragraphs.map((paragraph) => (
                <p key={paragraph} className={paragraphClass}>{paragraph}</p>
              ))}
            </div>
          </TeamReveal>
        </article>
      </div>
    </section>
  );
}
