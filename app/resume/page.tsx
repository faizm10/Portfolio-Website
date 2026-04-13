import Link from "next/link";
import type { Metadata } from "next";
import ResumeDocument from "./ResumeDocument";
import { RESUME_PDF_PATH } from "./data";

export const metadata: Metadata = {
  title: "resume · faiz mustansar",
  description:
    "Recruiter-friendly profile for Faiz Mustansar — internships (Tangerine, TD), HackCanada, Guelph CS, scholarships, and 15+ hackathons. Download the official PDF resume.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-neutral-200/80 bg-white/75 backdrop-blur-md print:hidden supports-backdrop-filter:bg-white/65">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="shrink-0 text-sm text-neutral-600 transition hover:text-neutral-900 hover:underline"
            >
              ← back
            </Link>
            <div className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-tight text-neutral-900">
                resume
              </span>
              <span className="hidden text-xs text-neutral-500 sm:block">
                one-page pdf for ats / email
              </span>
            </div>
          </div>
          <a
            href={RESUME_PDF_PATH}
            download="faiz-mustansar-resume-2026.pdf"
            className="shrink-0 rounded-lg bg-neutral-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 active:scale-[0.98]"
          >
            download pdf
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-5 md:px-6 md:py-6 print:max-w-none print:px-0 print:py-0">
        <ResumeDocument />
      </main>
    </div>
  );
}
