"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type NumberTickerProps = {
  value: number;
  className?: string;
  /** Animation length in ms (Magic UI–style count-up). */
  durationMs?: number;
  /** Wait before starting the tween (ms). */
  delayMs?: number;
};

/**
 * Counts up or down to `value` when it changes (no extra deps — rAF only).
 */
export function NumberTicker({
  value,
  className,
  durationMs = 650,
  delayMs = 0,
}: NumberTickerProps) {
  const [display, setDisplay] = useState(value);
  const settledRef = useRef(value);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const from = settledRef.current;
    if (from === value) return undefined;

    let cancelled = false;
    const startAt = performance.now() + delayMs;

    const tick = (now: number) => {
      if (cancelled) return;
      if (now < startAt) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (now - startAt) / durationMs);
      const eased = easeOutCubic(t);
      const next = Math.round(from + (value - from) * eased);
      setDisplay(next);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
        settledRef.current = value;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameRef.current);
    };
  }, [value, durationMs, delayMs]);

  return <span className={className}>{display}</span>;
}
