import Link from "next/link";
import type { Metadata } from "next";

const RESUME_PDF = "/resume/newResume2026.pdf";

export const metadata: Metadata = {
  title: "resume · faiz mustansar",
  description: "resume (pdf) — faiz mustansar",
};

export default function ResumePage() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-neutral-50">
      <main className="mx-auto flex h-full min-h-0 w-full max-w-6xl flex-col px-4 py-3 md:px-6 md:py-4">
        <h1 className="mb-2 shrink-0 text-2xl font-bold tracking-tight text-neutral-900 md:mb-3 md:text-3xl">
          resume
        </h1>
        <div className="mb-2 flex shrink-0 flex-wrap items-center justify-between gap-3 md:mb-3">
          <Link
            href="/"
            className="text-sm text-neutral-600 transition hover:text-neutral-900 hover:underline"
          >
            ← back
          </Link>
          <a
            href={RESUME_PDF}
            download="faiz-mustansar-resume-2026.pdf"
            className="text-sm text-neutral-600 transition hover:text-neutral-900 hover:underline"
          >
            download pdf
          </a>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
          <iframe
            title="Faiz Mustansar — resume (PDF)"
            src={`${RESUME_PDF}#view=FitH`}
            className="h-full w-full min-h-0 border-0"
          />
        </div>

        <p className="mt-2 shrink-0 text-center text-xs text-neutral-500 md:mt-3">
          preview uses your browser&apos;s pdf viewer. if it does not appear,
          use{" "}
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-700"
          >
            open in new tab
          </a>{" "}
          or download.
        </p>
      </main>
    </div>
  );
}
