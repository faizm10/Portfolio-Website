"use client";

import Link from "next/link";
import { RESUME_PDF_PATH } from "./data";

export default function ResumeHeader() {
  return (
    <header
      className="sticky top-0 z-10 backdrop-blur-md print:hidden"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "color-mix(in srgb, var(--canvas) 80%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="shrink-0 text-sm transition hover:underline"
            style={{ color: "var(--ink-2)" }}
          >
            ← back
          </Link>
          <div className="min-w-0">
            <span
              className="block truncate text-sm font-[500] tracking-tight"
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "var(--ink)",
              }}
            >
              resume
            </span>
            <span className="hidden text-xs sm:block" style={{ color: "var(--ink-3)" }}>
              in depth resume
            </span>
          </div>
        </div>
        <a
          href={RESUME_PDF_PATH}
          download="faiz-mustansar-resume-2026.pdf"
          className="shrink-0 rounded px-3.5 py-2 text-xs font-medium transition active:scale-[0.98] print:hidden"
          style={{ backgroundColor: "var(--accent)", color: "var(--canvas)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-hover)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)")
          }
        >
          download pdf
        </a>
      </div>
    </header>
  );
}
