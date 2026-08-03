"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Draw, type DrawHandle } from "drawesome";
import "drawesome/styles.css";

/**
 * Local studio for homepage background ink.
 * Draw → Export SVG → save as `public/bg/sketch.svg` → shows behind the home page.
 */
export default function SketchClient() {
  const draw = useRef<DrawHandle>(null);
  const [status, setStatus] = useState<string | null>(null);

  const exportSvg = async () => {
    const svg = draw.current?.toSvg();
    if (!svg) {
      setStatus("nothing to export yet");
      return;
    }
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sketch.svg";
    a.click();
    URL.revokeObjectURL(url);
    setStatus("saved sketch.svg — move it to public/bg/sketch.svg");
  };

  const exportPng = async () => {
    await draw.current?.download("sketch", "png", 2);
    setStatus("downloaded sketch.png");
  };

  return (
    <div className="relative min-h-screen w-full bg-white">
      <div
        className="absolute inset-x-0 top-0 z-20 flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0))",
        }}
      >
        <div className="flex items-center gap-3 text-[13px] lowercase">
          <Link
            href="/"
            className="underline underline-offset-[3px] decoration-neutral-400 transition-opacity hover:opacity-70"
            style={{ color: "var(--ink)" }}
          >
            ← home
          </Link>
          <span style={{ color: "var(--ink-3)" }}>sketch studio</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={exportSvg}
            className="rounded-md px-3 py-1.5 text-[12px] font-medium lowercase transition hover:opacity-80"
            style={{
              backgroundColor: "var(--ink)",
              color: "#fff",
            }}
          >
            export svg
          </button>
          <button
            type="button"
            onClick={exportPng}
            className="rounded-md px-3 py-1.5 text-[12px] font-medium lowercase ring-1 transition hover:opacity-80"
            style={{
              color: "var(--ink)",
              borderColor: "var(--border)",
              backgroundColor: "var(--surface-alt)",
            }}
          >
            export png
          </button>
        </div>
      </div>

      {status && (
        <p
          className="absolute left-1/2 top-14 z-20 -translate-x-1/2 rounded-md px-3 py-1.5 text-[12px] lowercase shadow-sm"
          style={{
            backgroundColor: "var(--ink)",
            color: "#fff",
          }}
        >
          {status}
        </p>
      )}

      <p
        className="pointer-events-none absolute bottom-4 left-1/2 z-10 max-w-md -translate-x-1/2 px-4 text-center text-[12px] lowercase leading-relaxed"
        style={{ color: "var(--ink-3)" }}
      >
        draw with a transparent canvas, export svg, then drop the file at{" "}
        <code className="text-[11px]">public/bg/sketch.svg</code>
      </p>

      <div className="h-screen w-full pt-12">
        <Draw
          ref={draw}
          background="transparent"
          theme="light"
          placement="bottom"
          inset={24}
          depth="soft"
          look="studio"
          startMinimized={false}
        />
      </div>
    </div>
  );
}
