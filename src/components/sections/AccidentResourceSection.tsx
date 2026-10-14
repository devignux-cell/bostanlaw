"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ArrowSquareOut, DownloadSimple, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { accidentDocumentUrl } from "@/data/accidentResource";
import { cn } from "@/lib/utils";

const resourceActionClass = cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-7 h-auto min-h-12 w-fit max-w-[240px] rounded-md border-line-strong bg-transparent px-5 py-3 text-center text-[14px] leading-[1.4] font-semibold whitespace-normal text-ink hover:border-brand/50 hover:bg-white/60 hover:text-ink focus-visible:border-brand focus-visible:ring-brand/25 sm:max-w-none");
const secondaryActionClass = cn(buttonVariants({ variant: "outline", size: "lg" }), "h-auto min-h-11 gap-2 rounded-md border-line-strong px-4 py-2.5 text-center text-sm font-bold whitespace-normal text-ink");
const zoomLevels = [0.75, 1, 1.25, 1.5, 2] as const;
const previewPages = [1, 2] as const;

export function AccidentResourceSection() {
  const { dictionary } = useLanguage();
  const copy = dictionary.resource;
  const [zoomIndex, setZoomIndex] = useState(1);
  const zoom = zoomLevels[zoomIndex];

  return (
    <section id="accident-information" aria-labelledby="accident-resource-heading" className="bg-[#F3F3F0]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-7 py-14 text-center sm:py-16 lg:py-18">
        <h2 id="accident-resource-heading" className="m-0 max-w-[750px] text-[clamp(26px,3vw,34px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
          {copy.heading}
        </h2>
        <p className="mt-4 max-w-[640px] text-[15px] leading-[1.6] text-[#4A4A4A] sm:text-base">{copy.description}</p>
        <p className="mt-2 max-w-[640px] text-[13px] leading-[1.5] text-muted-fg">{copy.englishOnlyNotice}</p>

        <Dialog.Root>
          <Dialog.Trigger className={resourceActionClass}>
            {copy.actionLabel}
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-[100] min-h-dvh bg-black/65" />
            <Dialog.Popup className="fixed inset-0 z-[101] flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-ink shadow-2xl sm:top-1/2 sm:left-1/2 sm:h-[min(90dvh,980px)] sm:w-[min(100vw-32px,1024px)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[18px]">
              <header className="flex shrink-0 items-start gap-4 border-b border-line px-5 py-4 sm:px-6 sm:py-5">
                <div className="min-w-0 flex-1">
                  <Dialog.Title className="m-0 text-lg leading-[1.2] font-extrabold tracking-[-0.02em] sm:text-2xl">
                    {copy.modalTitle}
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-[13px] font-semibold text-muted-fg">
                    {copy.originalEnglish}
                  </Dialog.Description>
                  <p className="mt-1 text-[13px] leading-[1.4] text-muted-fg">{copy.englishOnlyNotice}</p>
                </div>
                <Dialog.Close aria-label={copy.close} className="flex size-11 shrink-0 items-center justify-center rounded-md text-ink hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  <X size={22} aria-hidden="true" />
                </Dialog.Close>
              </header>

              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line bg-white px-4 py-2 sm:px-6">
                <span className="text-xs font-semibold text-muted-fg">{copy.previewLabel}</span>
                <div className="flex shrink-0 items-center gap-2">
                  <button type="button" aria-label={copy.zoomOut} disabled={zoomIndex === 0} onClick={() => setZoomIndex((index) => Math.max(0, index - 1))} className="flex size-9 items-center justify-center rounded-md border border-line-strong text-xl font-bold disabled:opacity-40">
                    −
                  </button>
                  <span aria-live="polite" className="min-w-12 text-center text-sm font-semibold tabular-nums">{Math.round(zoom * 100)}%</span>
                  <button type="button" aria-label={copy.zoomIn} disabled={zoomIndex === zoomLevels.length - 1} onClick={() => setZoomIndex((index) => Math.min(zoomLevels.length - 1, index + 1))} className="flex size-9 items-center justify-center rounded-md border border-line-strong text-xl font-bold disabled:opacity-40">
                    +
                  </button>
                </div>
              </div>

              <div role="region" aria-label={copy.previewLabel} className="min-h-0 flex-1 overflow-auto overscroll-contain bg-[#E7E7E7] px-3 py-4 sm:px-6 sm:py-6">
                <p className="mx-auto mb-4 max-w-[850px] text-sm leading-relaxed text-[#444] sm:hidden">{copy.mobilePrompt}</p>
                <div className="mx-auto flex flex-col gap-5" style={{ width: `${zoom * 100}%`, minWidth: `${zoom * 520}px`, maxWidth: `${zoom * 850}px` }}>
                  {previewPages.map((page) => (
                    <figure key={page} className="m-0">
                      <Image
                        src={`/documents/accident-letter-page-${page}.webp`}
                        alt={`${copy.pageLabel} ${page} — ${copy.originalEnglish}`}
                        width={1547}
                        height={2002}
                        unoptimized
                        className="block h-auto w-full bg-white shadow-lg"
                      />
                      <figcaption className="mt-2 text-center text-xs font-semibold text-muted-fg">{copy.pageLabel} {page}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <footer className="grid shrink-0 grid-cols-2 gap-2 border-t border-line bg-white px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))] sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:px-6 sm:py-4">
                <a href={accidentDocumentUrl} hrefLang="en" type="application/pdf" target="_blank" rel="noopener noreferrer" className={cn(secondaryActionClass, "col-span-2 w-full sm:w-auto")} aria-label={`${copy.openDocument} — ${copy.originalEnglish}`}>
                  <ArrowSquareOut size={18} aria-hidden="true" />
                  {copy.openDocument}
                </a>
                <a href={accidentDocumentUrl} hrefLang="en" type="application/pdf" download="bostan-law-accident-information.pdf" className={cn(secondaryActionClass, "w-full sm:w-auto")}>
                  <DownloadSimple size={18} aria-hidden="true" />
                  {copy.downloadPdf}
                </a>
                <Dialog.Close className={cn(secondaryActionClass, "w-full sm:w-auto")}>{copy.close}</Dialog.Close>
              </footer>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
