"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CaretDown, Check, Globe, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { legalDisclaimerPath, localeOptions, localePath, type Locale } from "@/i18n/config";
import { siteConfig } from "@/data/site";
import { toTelHref } from "@/lib/utils";

const SCROLL_THRESHOLD = 120;

function saveLanguagePreference(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const onLegalPage = pathname.endsWith("/legal-disclaimer");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { ui } = useLanguage();

  useEffect(() => {
    function closeOnOutside(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function handleChoose(event: React.MouseEvent<HTMLAnchorElement>, nextLocale: Locale) {
    saveLanguagePreference(nextLocale);
    setOpen(false);
    if (nextLocale === locale) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const destination = onLegalPage ? legalDisclaimerPath(nextLocale) : localePath(nextLocale);
    window.location.assign(`${destination}${window.location.search}${window.location.hash}`);
  }

  return (
    <div ref={containerRef} className="relative shrink-0 text-ink">
      <button
        ref={triggerRef}
        type="button"
        aria-label={ui.language.currentAriaLabel}
        aria-expanded={open}
        aria-controls="site-language-options"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-11 items-center gap-1 rounded-full px-1.5 text-xs font-bold transition-[background-color] hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none sm:gap-1.5 sm:px-2 sm:text-sm"
      >
        <Globe size={18} weight="regular" aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
        <CaretDown size={11} weight="bold" aria-hidden="true" />
      </button>
      {open && (
        <nav
          id="site-language-options"
          aria-label={ui.language.menuLabel}
          className="absolute top-full right-0 z-60 mt-2 min-w-[205px] rounded-[10px] border border-line bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] max-sm:right-[-82px]"
        >
          {localeOptions.map((option) => (
            <a
              key={option.code}
              href={onLegalPage ? legalDisclaimerPath(option.code) : localePath(option.code)}
              hrefLang={option.code}
              lang={option.code}
              aria-current={option.code === locale ? "page" : undefined}
              onClick={(event) => handleChoose(event, option.code)}
              className="flex min-h-11 items-center gap-3 rounded-[8px] px-3 text-sm font-bold text-ink transition-[background-color,color] hover:bg-cream hover:text-brand focus-visible:bg-cream focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              <Image src={option.flag} alt="" width={24} height={16} className="h-4 w-6 rounded-[2px] object-cover" />
              <span className="flex-1">{option.label}</span>
              {option.code === locale && <Check size={16} weight="bold" className="text-brand" aria-hidden="true" />}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const { language, ui } = useLanguage();
  const pathname = usePathname();
  const onLegalPage = pathname.endsWith("/legal-disclaimer");
  const homeHref = localePath(language);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      const progress = Math.min(Math.max(window.scrollY / SCROLL_THRESHOLD, 0), 1);
      header.style.backgroundColor = `rgb(255 255 255 / ${progress * 0.95})`;
      header.style.borderColor = `rgb(236 236 232 / ${progress})`;
      header.style.backdropFilter = `blur(${progress * 12}px)`;
      header.style.setProperty("-webkit-backdrop-filter", `blur(${progress * 12}px)`);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHeader);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header fixed inset-x-0 top-0 z-50 border-b"
      style={{ backgroundColor: "rgb(255 255 255 / 0)", borderColor: "rgb(236 236 232 / 0)", backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-1 px-3 sm:h-28 sm:gap-4 sm:px-7 lg:h-32">
        <a href={onLegalPage ? homeHref : "#top"} className="flex w-[clamp(4.5rem,22vw,8rem)] shrink-0 items-center sm:w-[150px] lg:w-[190px]">
          <Image src="/optimized/bostanlawlogo.webp" alt={siteConfig.name} width={512} height={341} className="h-auto w-full" priority />
        </a>
        <div className="flex min-w-0 items-center gap-0.5 sm:gap-3 lg:gap-6">
          <LanguageSwitcher locale={language} />
          <a
            href={toTelHref(siteConfig.phone)}
            aria-label={`${ui.header.callAria} ${siteConfig.phone}`}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-ink transition-[background-color,color] hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none md:size-auto md:gap-2 md:rounded-none md:text-base md:font-bold md:tracking-tight"
          >
            <Phone weight="fill" className="size-6 text-brand md:size-[18px]" />
            <span className="hidden whitespace-nowrap md:inline">{siteConfig.phone}</span>
          </a>
          <Button
            render={<a href={onLegalPage ? `${homeHref}#contact` : "#contact"}>{ui.header.consultation}</a>}
            nativeButton={false}
            size="lg"
            className="h-auto min-h-11 max-w-[108px] rounded-[10px] px-2 py-1 text-center text-xs leading-tight font-bold whitespace-normal sm:max-w-none sm:px-5 sm:text-base"
          />
        </div>
      </div>
    </header>
  );
}
