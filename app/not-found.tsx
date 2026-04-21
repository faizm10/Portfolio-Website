import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "not found",
  description: "this page does not exist on faizm.ca",
};

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: "var(--canvas)" }}
    >
      <div className="mx-auto w-full max-w-md text-center">
        <p
          className="font-[family-name:var(--font-newsreader)] text-6xl font-[500] tabular-nums leading-none md:text-7xl"
          style={{ color: "var(--ink)" }}
          aria-hidden
        >
          404
        </p>
        <h1
          className="mt-4 font-[family-name:var(--font-newsreader)] text-xl font-[500] tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          page not found
        </h1>
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "var(--ink-2)" }}
        >
          the link may be wrong, or this page was removed.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-md px-4 py-2.5 text-sm font-medium underline underline-offset-2 transition hover:opacity-90"
            style={{
              backgroundColor: "var(--surface-alt)",
              border: "1px solid var(--border)",
              color: "var(--ink)",
            }}
          >
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
