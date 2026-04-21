import type { Metadata } from "next";
import ResumeDocument from "./ResumeDocument";
import ResumeHeader from "./ResumeHeader";

export const metadata: Metadata = {
  title: "resume · faiz mustansar",
  description:
    "Recruiter-friendly profile for Faiz Mustansar — internships (Tangerine, TD), HackCanada, Guelph CS, scholarships, and 15+ hackathons. Download the official PDF resume.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--canvas)" }}>
      <ResumeHeader />

      <main className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-10 print:max-w-none print:px-0 print:py-0">
        <ResumeDocument />
      </main>
    </div>
  );
}
