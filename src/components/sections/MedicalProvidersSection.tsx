import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import type { MedicalProvidersCopy } from "@/i18n/medical-providers";

export function MedicalProvidersSection({ copy }: { copy: MedicalProvidersCopy }) {
  return (
    <section id="medical-providers" aria-labelledby="medical-providers-heading" className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <p className="mb-3 text-xs font-bold tracking-[0.12em] text-ink">{copy.eyebrow}</p>
        <h2 id="medical-providers-heading" className="text-[clamp(34px,4.5vw,52px)] leading-[1.1] text-ink">
          {copy.heading}
        </h2>
        <p className="mt-4 text-lg leading-[1.5] text-muted-fg sm:text-xl">{copy.introduction}</p>

        <div className="mt-9 grid gap-8 border-t border-line pt-8 text-left lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
          <div>
            <h3 className="text-[clamp(24px,2.5vw,30px)] leading-[1.2] text-ink">{copy.recoveryHeading}</h3>
            <div className="mt-4 space-y-4 text-base leading-[1.65] text-[#444]">
              {copy.recoveryIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-5 space-y-5">
              {copy.recoverable.map(({ title, body }) => (
                <div key={title}>
                  <h4 className="font-heading text-lg leading-[1.3] font-bold text-ink">{title}</h4>
                  <p className="mt-1.5 text-base leading-[1.65] text-[#444]">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-line pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h3 className="text-[clamp(24px,2.5vw,30px)] leading-[1.2] text-ink">{copy.processHeading}</h3>
            <p className="mt-4 text-base leading-[1.65] text-[#444]">{copy.processIntro}</p>
            <ol className="mt-5 list-decimal space-y-4 pl-6 marker:font-bold marker:text-ink">
              {copy.steps.map(({ title, body }) => (
                <li key={title} className="pl-1">
                  <h4 className="font-heading text-lg leading-[1.3] font-bold text-ink">{title}</h4>
                  <p className="mt-1 text-base leading-[1.65] text-[#444]">{body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-base leading-[1.65] text-ink"><strong>{copy.feeStatement}</strong></p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-start">
          <Button
            size="lg"
            nativeButton={false}
            className="h-auto min-h-14 w-full min-w-0 max-w-full gap-3 rounded-md px-7 py-3.5 text-center text-[19px] font-bold whitespace-normal sm:w-auto sm:min-w-64"
            render={<a href="#contact">{copy.cta} <ArrowRight size={18} aria-hidden="true" /></a>}
          />
          <p className="text-sm leading-[1.5] text-muted-fg">{copy.contactNote}</p>
        </div>
      </div>
    </section>
  );
}
