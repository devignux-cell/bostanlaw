"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface LanguageContextValue {
  language: Locale;
  ui: Dictionary["ui"];
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, locale, dictionary }: { children: ReactNode; locale: Locale; dictionary: Dictionary }) {
  return (
    <LanguageContext.Provider value={{ language: locale, ui: dictionary.ui, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
