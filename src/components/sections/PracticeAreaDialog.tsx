"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { legalDisclaimerPath, type Locale } from "@/i18n/config";
import type { UiCopy } from "@/i18n/types";
import type { PracticeArea } from "@/types/practiceArea";

interface PracticeAreaDialogProps {
  area: PracticeArea;
  language: Locale;
  ui: UiCopy;
  legalHeading: string;
  onConsultation: () => void;
}

export function PracticeAreaDialog({ area, language, ui, legalHeading, onConsultation }: PracticeAreaDialogProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-[100] bg-black/55 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none" />
      <Dialog.Popup className="fixed inset-0 z-[101] flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-ink shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-[opacity,transform] duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none sm:top-1/2 sm:left-1/2 sm:inset-auto sm:h-auto sm:max-h-[88dvh] sm:w-[min(720px,calc(100vw-32px))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[18px] sm:data-ending-style:translate-y-[calc(-50%+8px)] sm:data-starting-style:translate-y-[calc(-50%+8px)]">
        <div className="flex shrink-0 items-start justify-between gap-5 border-b border-line px-6 pt-[max(20px,env(safe-area-inset-top))] pb-5 sm:px-9 sm:pt-8 sm:pb-6">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold tracking-[0.12em] text-brand uppercase">{ui.practiceAreaDialog.eyebrow}</p>
            <Dialog.Title className="m-0 font-heading text-[clamp(34px,5vw,46px)] leading-[1.02] font-extrabold text-ink">
              {area.name}
            </Dialog.Title>
          </div>
          <Dialog.Close aria-label={ui.practiceAreaDialog.close} className="flex size-11 shrink-0 items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-black/[0.045] focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none">
            <X size={22} aria-hidden="true" />
          </Dialog.Close>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-9 sm:py-8">
          <Dialog.Description className="m-0 max-w-[60ch] text-[16px] leading-[1.65] text-[#3B3B3B] sm:text-[17px]">
            {area.details.introduction}
          </Dialog.Description>
          <div className="mt-8 border-t border-line pt-7">
            <h3 className="m-0 font-heading text-[26px] leading-[1.15] font-bold sm:text-[29px]">
              {ui.practiceAreaDialog.whatToKnow}
            </h3>
            <ul className="mt-5 space-y-4">
              {area.details.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3.5 text-[15px] leading-[1.6] text-[#3B3B3B] sm:text-[16px]">
                  <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-[12px] leading-[1.5] text-subtle-fg">
            {ui.practiceAreaDialog.disclaimer}{" "}
            <a href={legalDisclaimerPath(language)} className="underline underline-offset-2 hover:text-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              {legalHeading}
            </a>
          </p>
        </div>

        <div className="shrink-0 border-t border-line bg-white px-6 pt-4 pb-[max(16px,env(safe-area-inset-bottom))] sm:px-9 sm:py-5">
          <Button type="button" onClick={onConsultation} className="h-auto min-h-12 w-full rounded-md px-6 py-3.5 text-base font-semibold sm:w-auto sm:min-w-[220px]">
            {ui.header.consultation}
          </Button>
        </div>
      </Dialog.Popup>
    </Dialog.Portal>
  );
}
