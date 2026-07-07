"use client";

import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/components/providers/LanguageProvider";

/**
 * Static visual only — no bot-check logic. A real reCAPTCHA needs a backend
 * verification route + Google keys, both out of scope until that route exists.
 * Kept isolated so wiring up the real thing later only touches this file.
 * aria-hidden throughout: it does nothing, so it must not read as a real
 * control to assistive tech.
 */
export function RecaptchaPlaceholder() {
  const { ui } = useLanguage();

  return (
    <div aria-hidden="true" className="flex w-full max-w-[300px] flex-col gap-2">
      <div className="flex h-[74px] items-center gap-3 rounded-[3px] border border-[#ccc] bg-[#f5f5f5] py-2 pr-3 pl-4">
        <span className="size-6 shrink-0 rounded-[2px] border-2 border-[#999] bg-white" />
        <span className="flex-1 text-sm text-[#333]">{ui.recaptcha.checkbox}</span>
        <div className="flex w-[60px] shrink-0 flex-col items-center gap-0.5">
          <ShieldCheck size={28} weight="fill" className="text-[#999]" />
          <span className="text-[7px] font-bold text-[#666]">reCAPTCHA</span>
          <span className="text-[6px] text-[#999]">
            {ui.recaptcha.privacy} · {ui.recaptcha.terms}
          </span>
        </div>
      </div>
      <p className="text-xs text-[#8c8c8c]">
        {ui.recaptcha.confirm}
      </p>
    </div>
  );
}
