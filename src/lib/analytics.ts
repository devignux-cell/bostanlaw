declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * No-op unless NEXT_PUBLIC_GA_ID is set and a analytics script has been
 * wired up separately — safe to call from any client component today,
 * becomes live once analytics is actually configured.
 */
export function trackEvent(name: string, data?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GA_ID) {
    return;
  }
  window.dataLayer?.push({ event: name, ...data });
}
