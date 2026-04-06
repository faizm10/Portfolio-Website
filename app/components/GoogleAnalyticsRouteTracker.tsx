"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackPagePath } from "@/lib/analytics";

/**
 * Sends GA4 page_path on client-side route changes. Initial load is covered by
 * {@link GoogleAnalytics} in the root layout; this handles in-app navigation only.
 */
export default function GoogleAnalyticsRouteTracker() {
  const pathname = usePathname();
  const isFirstPath = useRef(true);

  useEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }

    const path = pathname || "/";

    const send = () => trackPagePath(path);
    send();
    const t1 = window.setTimeout(send, 120);
    const t2 = window.setTimeout(send, 400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
