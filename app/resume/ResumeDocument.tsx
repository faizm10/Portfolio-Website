"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { credlyBadges, hackathonsSummary, resume, scholarships } from "./data";

function ContactLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 transition"
      style={{
        color: "var(--ink-2)",
        textDecorationColor: "var(--border-2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        (e.currentTarget as HTMLElement).style.textDecorationColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
        (e.currentTarget as HTMLElement).style.textDecorationColor = "var(--border-2)";
      }}
    >
      {children}
    </a>
  );
}

/** Section heading with kami-style left accent bar */
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="relative pl-3 text-xs font-semibold uppercase tracking-widest"
      style={{ color: "var(--ink-3)" }}
    >
      <span
        className="absolute left-0 top-0.5 bottom-0.5 w-[3px] rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden
      />
      {children}
    </h2>
  );
}

export default function ResumeDocument() {
  const { contact, skills } = resume;

  return (
    <article className="lowercase print:p-0">
      {/* ── Header ─────────────────────────────────────────────── */}
      <header
        className="pb-6 print:border-neutral-300"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h1
          className="text-2xl font-[500] tracking-tight md:text-3xl print:text-2xl"
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "var(--ink)",
          }}
        >
          {resume.name}
        </h1>
        <p
          className="mt-2 max-w-2xl text-sm leading-relaxed md:text-base print:text-sm"
          style={{ color: "var(--ink-2)" }}
        >
          {resume.headline}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm print:text-xs" style={{ color: "var(--ink-3)" }}>
          <li><ContactLink href={`mailto:${contact.email}`}>{contact.email}</ContactLink></li>
          <li><ContactLink href={contact.site}>faizm.ca</ContactLink></li>
          <li><ContactLink href={contact.linkedin}>linkedin</ContactLink></li>
          <li><ContactLink href={contact.github}>github</ContactLink></li>
        </ul>
      </header>

      {/* ── Education ──────────────────────────────────────────── */}
      <section className="mt-8 print:mt-6">
        <SectionHeading>Education</SectionHeading>
        {resume.education.map((edu) => (
          <div key={edu.school} className="mt-4 print:mt-3">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-medium" style={{ color: "var(--ink)" }}>{edu.school}</span>
                <span style={{ color: "var(--ink-3)" }}> · {edu.location}</span>
              </div>
              <span className="shrink-0 text-sm tabular-nums" style={{ color: "var(--ink-3)" }}>
                {edu.dates}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--ink-2)" }}>
              {edu.degree}
            </p>
            <ul
              className="mt-2 list-disc space-y-1 pl-5 text-sm leading-[1.45]"
              style={{ color: "var(--ink-2)" }}
            >
              {edu.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* ── Experience ─────────────────────────────────────────── */}
      <section className="mt-10 print:mt-8">
        <SectionHeading>Experience</SectionHeading>
        <ul className="mt-4 space-y-6 print:space-y-5">
          {resume.experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <span className="font-medium" style={{ color: "var(--ink)" }}>{job.company}</span>
                  {job.location ? (
                    <span style={{ color: "var(--ink-3)" }}> · {job.location}</span>
                  ) : null}
                </div>
                {(job.dates || "").length > 0 ? (
                  <span className="shrink-0 text-sm tabular-nums" style={{ color: "var(--ink-3)" }}>
                    {job.dates}
                  </span>
                ) : null}
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--ink-2)" }}>{job.role}</p>
              {job.bullets.length > 0 ? (
                <ul
                  className="mt-2 list-disc space-y-1 pl-5 text-sm leading-[1.45]"
                  style={{ color: "var(--ink-2)" }}
                >
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Projects ───────────────────────────────────────────── */}
      <section className="mt-10 print:mt-8">
        <SectionHeading>Selected projects</SectionHeading>
        <ul className="mt-4 space-y-3 print:space-y-2">
          {resume.projects.map((p) => (
            <li key={p.name} className="text-sm leading-[1.45]" style={{ color: "var(--ink-2)" }}>
              <span className="font-medium" style={{ color: "var(--ink)" }}>{p.name}</span>
              {" — "}
              <ContactLink href={p.url}>{p.url.replace(/^https?:\/\//, "")}</ContactLink>
              <span style={{ color: "var(--ink-3)" }}> · {p.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Hackathons ─────────────────────────────────────────── */}
      <section className="mt-10 print:mt-8">
        <SectionHeading>Hackathons &amp; community</SectionHeading>
        <p className="mt-3 text-sm font-medium" style={{ color: "var(--ink)" }}>
          {hackathonsSummary.headline}
        </p>
        <p className="mt-2 text-sm leading-[1.45]" style={{ color: "var(--ink-2)" }}>
          {hackathonsSummary.body}
        </p>
        <p className="mt-3 print:hidden">
          <Link
            href={hackathonsSummary.linkHref}
            className="text-sm font-medium underline underline-offset-4 transition"
            style={{ color: "var(--accent)", textDecorationColor: "var(--border-2)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.textDecorationColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.textDecorationColor = "var(--border-2)")
            }
          >
            {hackathonsSummary.linkLabel}
          </Link>
        </p>
        <p className="mt-2 hidden text-xs print:block" style={{ color: "var(--ink-3)" }}>
          Full list (print): faizm.ca{hackathonsSummary.linkHref}
        </p>
      </section>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <section className="mt-10 print:mt-8">
        <SectionHeading>Skills</SectionHeading>
        <dl className="mt-4 space-y-2 text-sm leading-[1.45]" style={{ color: "var(--ink-2)" }}>
          {[
            { label: "Languages", value: skills.languages },
            { label: "Frameworks", value: skills.frameworks },
            { label: "Infra & data", value: skills.infra },
            { label: "Other", value: skills.other },
          ].map(({ label, value }) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-x-4">
              <dt className="font-medium" style={{ color: "var(--ink)" }}>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Certifications ─────────────────────────────────────── */}
      <section className="mt-10 print:mt-8">
        <SectionHeading>Certifications &amp; badges</SectionHeading>
        <ul className="mt-4 flex flex-wrap gap-4 print:gap-3">
          {credlyBadges.map((badge) => (
            <li key={badge.id}>
              <a
                href={`https://www.credly.com/badges/${badge.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-3 text-sm transition"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--surface)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px var(--accent-shadow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <Image
                  src={badge.imageUrl}
                  alt={badge.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 object-contain print:h-10 print:w-10"
                />
                <div>
                  <p className="font-medium" style={{ color: "var(--ink)" }}>{badge.name}</p>
                  <p className="text-xs" style={{ color: "var(--ink-3)" }}>
                    {badge.issuer} · {badge.issued}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Scholarships ───────────────────────────────────────── */}
      <section className="mt-10 mb-6 print:mt-8">
        <SectionHeading>Scholarships &amp; recognition</SectionHeading>
        <ul className="mt-4 space-y-5 print:space-y-4">
          {scholarships.map((s) => (
            <li key={s.name} className="text-sm leading-[1.45]" style={{ color: "var(--ink-2)" }}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-medium" style={{ color: "var(--ink)" }}>{s.name}</span>
                <span className="shrink-0 text-sm tabular-nums" style={{ color: "var(--ink-3)" }}>
                  {s.amount}
                </span>
              </div>
              <p className="mt-2">{s.detail}</p>
              {s.url ? (
                <p className="mt-1.5">
                  <ContactLink href={s.url}>{s.urlLabel}</ContactLink>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
