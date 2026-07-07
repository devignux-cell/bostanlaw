"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { languageOptions, uiContent } from "@/data/language";
import { LANGUAGE_STORAGE_KEY, type Language } from "@/types/language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  ui: (typeof uiContent)[Language];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_CHANGE_EVENT = "bostan-language-change";
const SERVER_LANGUAGE_SNAPSHOT = "en:unknown";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "es";
}

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
  };
}

function getLanguageSnapshot() {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(storedLanguage) ? `${storedLanguage}:set` : "en:unset";
}

function getServerLanguageSnapshot() {
  return SERVER_LANGUAGE_SNAPSHOT;
}

function writeLanguagePreference(language: Language) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
}

function LanguagePreferenceModal({
  onChoose,
  onClose,
}: {
  onChoose: (language: Language) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const copy = uiContent.en.language;

  useEffect(() => {
    firstButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = getFocusableElements(dialogRef.current);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-5 backdrop-blur-[3px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-modal-title"
        aria-describedby="language-modal-description"
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-[430px] rounded-[14px] border border-line bg-white p-6 text-ink shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <button
          type="button"
          aria-label={copy.closeLabel}
          onClick={onClose}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full border border-line text-ink transition-[border-color,color,background-color] hover:border-brand hover:bg-cream hover:text-brand"
        >
          <X size={16} weight="bold" />
        </button>
        <div className="pr-10">
          <p
            id="language-modal-title"
            className="m-0 text-[26px] leading-[1.1] font-black tracking-[-0.02em]"
          >
            {copy.modalTitle}
          </p>
          <p
            id="language-modal-description"
            className="mt-3 mb-6 text-[15px] leading-[1.5] text-subtle-fg"
          >
            {copy.modalDescription}
          </p>
        </div>
        <div className="grid gap-3">
          <button
            ref={firstButtonRef}
            type="button"
            onClick={() => onChoose("en")}
            className="group flex w-full items-center justify-between rounded-[10px] border border-ink bg-white px-4 py-4 text-left text-ink shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-[border-color,background-color,transform] hover:-translate-y-0.5 hover:border-brand hover:bg-cream focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <span className="flex items-center gap-3 text-base font-extrabold">
              <span className="text-2xl" aria-hidden="true">
                🇺🇸
              </span>
              {copy.continueEnglish}
            </span>
            <span className="h-2 w-8 rounded-full bg-brand transition-[width] group-hover:w-10" />
          </button>
          <button
            type="button"
            onClick={() => onChoose("es")}
            className="group flex w-full items-center justify-between rounded-[10px] border border-ink bg-white px-4 py-4 text-left text-ink shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-[border-color,background-color,transform] hover:-translate-y-0.5 hover:border-brand hover:bg-cream focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <span className="flex items-center gap-3 text-base font-extrabold">
              <span className="text-2xl" aria-hidden="true">
                🇪🇸
              </span>
              {copy.continueSpanish}
            </span>
            <span className="h-2 w-8 rounded-full bg-brand transition-[width] group-hover:w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const languageSnapshot = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );
  const [snapshotLanguage, preferenceStatus] = languageSnapshot.split(":");
  const language: Language = isLanguage(snapshotLanguage) ? snapshotLanguage : "en";
  const showPreferenceModal = preferenceStatus === "unset";

  useEffect(() => {
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    writeLanguagePreference(nextLanguage);
  }, []);

  const closePreferenceModal = useCallback(() => {
    writeLanguagePreference("en");
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      ui: uiContent[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      {showPreferenceModal && (
        <LanguagePreferenceModal onChoose={setLanguage} onClose={closePreferenceModal} />
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function getLanguageOption(language: Language) {
  return languageOptions.find((option) => option.value === language) ?? languageOptions[0];
}
