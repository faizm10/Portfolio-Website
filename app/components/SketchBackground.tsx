"use client";

import { useEffect, useState } from "react";

const SKETCH_SRC = "/bg/sketch.svg";

/**
 * Subtle home background from `public/bg/sketch.svg`.
 * Hidden until the file exists (export from /sketch).
 */
export default function SketchBackground() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(SKETCH_SRC, { method: "HEAD" })
      .then((r) => {
        if (!cancelled && r.ok) setVisible(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SKETCH_SRC}
        alt=""
        className="absolute top-0 right-0 w-[min(70vw,560px)] max-w-none opacity-[0.18] sm:w-[min(55vw,640px)]"
        draggable={false}
      />
    </div>
  );
}
