"use client";

import { useEffect, useRef } from "react";
import TinyCharacter from "./TinyCharacter";

/**
 * A quiet companion that leans toward the pointer on large screens.
 * Hidden on coarse pointers and when reduced motion is requested.
 */
export default function CursorFriend() {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = node.current;
    if (!el) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 960px)").matches;
    if (!finePointer || reduce || !wide) return;

    let x = window.innerWidth - 88;
    let y = window.innerHeight - 110;
    let tx = x;
    let ty = y;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      tx = Math.min(window.innerWidth - 72, Math.max(16, event.clientX + 28));
      ty = Math.min(window.innerHeight - 88, Math.max(16, event.clientY + 18));
    };

    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      const lean = Math.max(-8, Math.min(8, (tx - x) * 0.12));
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${lean}deg)`;
      frame = requestAnimationFrame(tick);
    };

    el.style.opacity = "1";
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={node} className="cursor-friend" aria-hidden>
      <TinyCharacter pose="walk" />
    </div>
  );
}
