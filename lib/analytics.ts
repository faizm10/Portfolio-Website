import { sendGAEvent } from "@next/third-parties/google";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function isGoogleAnalyticsEnabled(): boolean {
  return Boolean(GA_ID);
}

/** GA4 custom event after a successful photo like. */
export function trackPhotoLike(photoSrc: string) {
  if (!GA_ID) return;
  sendGAEvent("event", "photo_like", {
    photo_src: photoSrc,
  });
}

/** GA4 virtual page view (e.g. blog slug, /photos) on client navigation. */
export function trackPagePath(pagePath: string) {
  if (!GA_ID || typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_ID, { page_path: pagePath });
}
