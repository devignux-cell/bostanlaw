"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretDown, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { getLanguageOption, useLanguage } from "@/components/providers/LanguageProvider";
import { languageOptions } from "@/data/language";
import { siteConfig } from "@/data/site";
import { cn, toTelHref } from "@/lib/utils";

/** Past this scroll offset the header swaps from transparent-over-photo to opaque white. */
const SCROLL_THRESHOLD = 120;

export function Header() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, ui } = useLanguage();
  const selectedLanguage = getLanguageOption(language);

  function toggleLanguageMenu() {
    setLanguageMenuOpen((open) => !open);
  }

  function chooseLanguage(nextLanguage: typeof language) {
    setLanguage(nextLanguage);
    setLanguageMenuOpen(false);
  }

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

  useEffect(() => {
    function handleDocumentPointerDown(event: PointerEvent) {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setLanguageMenuOpen(false);
      }
    }

    function handleDocumentKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setLanguageMenuOpen(false);
    }

    document.addEventListener("pointerdown", handleDocumentPointerDown);
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header fixed inset-x-0 top-0 z-50 border-b"
      style={{
        backgroundColor: "rgb(255 255 255 / 0)",
        borderColor: "rgb(236 236 232 / 0)",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-2.5 px-5 sm:h-28 sm:gap-5 sm:px-7 lg:h-32">
        <a
          href="#top"
          className="flex w-[clamp(5.75rem,26vw,8rem)] items-center sm:w-[150px] lg:w-[190px]"
        >
          <Image
            src="/optimized/bostanlawlogo.webp"
            alt={siteConfig.name}
            width={512}
            height={341}
            className="h-auto w-full"
            priority
          />
        </a>
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 lg:gap-6">
          <div
            ref={languageMenuRef}
            className="relative hidden items-center gap-1.5 text-base font-medium text-ink sm:flex"
          >
            <button
              type="button"
              aria-label={ui.language.currentAriaLabel}
              aria-haspopup="menu"
              aria-expanded={languageMenuOpen}
              onClick={(event) => {
                if (event.detail === 0) toggleLanguageMenu();
              }}
              onPointerDown={(event) => {
                event.preventDefault();
                toggleLanguageMenu();
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleLanguageMenu();
                }
              }}
              className="flex items-center gap-1.5 rounded-full px-2 py-2 transition-[background-color,color] hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              <span aria-hidden="true">{selectedLanguage.flag}</span>
              <span>{selectedLanguage.shortLabel}</span>
              <CaretDown size={10} weight="bold" />
            </button>
            {languageMenuOpen && (
              <div
                role="menu"
                aria-label={ui.language.menuLabel}
                className="absolute top-full right-0 mt-2 w-[190px] rounded-[10px] border border-line bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
              >
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={option.value === language}
                    onClick={() => chooseLanguage(option.value)}
                    onPointerDown={(event) => {
                      event.preventDefault();
                      chooseLanguage(option.value);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm font-bold transition-[background-color,color]",
                      option.value === language
                        ? "bg-ink text-white"
                        : "text-ink hover:bg-cream hover:text-brand",
                    )}
                  >
                    <span className="text-xl" aria-hidden="true">
                      {option.flag}
                    </span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href={toTelHref(siteConfig.phone)}
            aria-label={`Call ${siteConfig.phone}`}
            className="flex size-10 items-center justify-center rounded-full text-ink transition-[background-color,color] hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none md:size-auto md:gap-2 md:rounded-none md:text-base md:font-bold md:tracking-tight"
          >
            <Phone weight="fill" className="size-6 text-brand md:size-[18px]" />
            <span className="hidden whitespace-nowrap md:inline">{siteConfig.phone}</span>
          </a>
          <Button
            render={<a href="#contact">{ui.header.consultation}</a>}
            nativeButton={false}
            size="lg"
            className="h-11 rounded-[10px] px-3 text-sm font-bold sm:px-5 sm:text-base"
          />
        </div>
      </div>
    </header>
  );
}
