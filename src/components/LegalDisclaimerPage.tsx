import type { LegalCopy } from "@/i18n/types";

export function LegalDisclaimerPage({ copy }: { copy: LegalCopy }) {
  return (
    <main id="legal-disclaimer" className="min-h-[75dvh] bg-cream">
      <div className="mx-auto max-w-[980px] px-7 pt-[160px] pb-24 sm:pt-[190px]">
        <h1 className="m-0 text-[clamp(40px,5vw,60px)] leading-[1.08] break-words text-ink">
          {copy.heading}
        </h1>
        <div className="mt-9 flex flex-col gap-6 rounded-[20px] border border-line bg-white px-6 py-8 sm:px-10 sm:py-10">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 max-w-[75ch] text-[16px] leading-[1.75] text-[#444] sm:text-[17px]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
