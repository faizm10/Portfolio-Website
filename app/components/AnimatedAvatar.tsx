"use client";

import { useEffect, useRef, useState } from "react";
import type { createAvatar } from "./avatar/createAvatar";

export default function AnimatedAvatar() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const controller = useRef<ReturnType<typeof createAvatar> | null>(null);
  const [ready, setReady] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const greetingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("./avatar/createAvatar")
      .then(({ createAvatar }) => {
        if (cancelled || !canvas.current) return;
        try {
          controller.current = createAvatar(canvas.current, () =>
            setReady(false),
          );
          setReady(true);
        } catch {
          // The illustrated avatar remains available when WebGL cannot initialize.
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      controller.current?.dispose();
      controller.current = null;
      if (greetingTimer.current) clearTimeout(greetingTimer.current);
    };
  }, []);

  return (
    <div className="avatar-companion">
      <button
        className="avatar-button"
        aria-label="Say hello to the little robot"
        onClick={() => {
          controller.current?.wave();
          setGreeting(true);
          if (greetingTimer.current) clearTimeout(greetingTimer.current);
          greetingTimer.current = setTimeout(() => setGreeting(false), 2600);
        }}
      >
        <svg
          className="avatar-fallback"
          viewBox="0 0 144 144"
          aria-hidden="true"
          style={{ opacity: ready ? 0 : 1 }}
        >
          <ellipse cx="72" cy="132" rx="30" ry="4" fill="#eceee7" />
          <rect x="50" y="80" width="44" height="42" rx="19" fill="#819575" />
          <rect x="30" y="31" width="84" height="64" rx="30" fill="#e7e9db" />
          <rect x="42" y="48" width="60" height="33" rx="16" fill="#263731" />
          <path
            d="M60 60v7m24-7v7"
            stroke="#f6ffd6"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M72 31V20" stroke="#819575" strokeWidth="3" />
          <circle cx="72" cy="18" r="5" fill="#e2946d" />
        </svg>
        <canvas
          ref={canvas}
          className="avatar-canvas"
          aria-hidden="true"
          style={{ opacity: ready ? 1 : 0 }}
        />
        <span
          className={`avatar-greeting ${greeting ? "is-visible" : ""}`}
          aria-live="polite"
        >
          {greeting ? "hey there!" : ""}
        </span>
      </button>
    </div>
  );
}
