import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function SiteDocument({ children, locale, dictionary }: { children: React.ReactNode; locale: Locale; dictionary: Dictionary }) {
  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full overflow-x-hidden bg-white text-ink">
        <LanguageProvider locale={locale} dictionary={dictionary}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
