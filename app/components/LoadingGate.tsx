"use client";

import { useEffect, useState } from "react";
import LoadingScreen, {
  LOADING_VARIANTS,
  type LoadingVariant,
} from "./LoadingScreen";

/** How long the loading screen holds before it starts to clear. */
const HOLD_MS = 1500;
/** Length of the fade-out, kept in sync with `duration-500` below. */
const FADE_MS = 500;
/** Set to a variant to always show it; `null` restores the random roll. */
const PINNED_VARIANT: LoadingVariant | null = null;

/**
 * Holds the loading screen over the page for {@link HOLD_MS} on first paint,
 * then fades it away. Children render underneath the whole time, so the real
 * markup is in the initial HTML for crawlers and the overlay is only a cover.
 */
export default function LoadingGate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [phase, setPhase] = useState<"holding" | "fading" | "done">("holding");
  // Server-rendered HTML has to be deterministic, so the roll happens on mount.
  // When pinned there is nothing to roll, so SSR already has the right one.
  const [variant, setVariant] = useState<LoadingVariant>(
    PINNED_VARIANT ?? LOADING_VARIANTS[0],
  );

  useEffect(() => {
    if (!PINNED_VARIANT) {
      setVariant(
        LOADING_VARIANTS[Math.floor(Math.random() * LOADING_VARIANTS.length)],
      );
    }

    const toFade = setTimeout(() => setPhase("fading"), HOLD_MS);
    const toDone = setTimeout(() => setPhase("done"), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(toFade);
      clearTimeout(toDone);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [phase]);

  return (
    <>
      {children}

      {phase !== "done" && (
        <div
          id="loading-gate"
          className={`fixed inset-0 z-100 bg-white transition-opacity duration-500 ${
            phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <LoadingScreen variant={variant} />
        </div>
      )}

      {/* Without JS the timers never fire, so make sure the cover is never shown. */}
      <noscript>
        <style>{`#loading-gate{display:none}`}</style>
      </noscript>
    </>
  );
}
