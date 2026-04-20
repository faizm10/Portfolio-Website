import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { credlyBadges, hackathonsSummary, resume, scholarships } from "./data";

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-600 underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-900 hover:decoration-neutral-400 print:text-black print:no-underline"
    >
      {children}
    </a>
  );
}

export default function ResumeDocument() {
  const { contact, skills } = resume;

  return (
    <article className="print:p-0">
      <header className="border-b border-neutral-200/80 pb-6 print:border-neutral-300">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl print:text-2xl">
          {resume.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base print:text-sm print:text-neutral-800">
          {resume.headline}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-neutral-600 print:text-xs">
          <li>
            <ContactLink href={`mailto:${contact.email}`}>
              {contact.email}
            </ContactLink>
          </li>
          <li>
            <ContactLink href={contact.site}>faizm.ca</ContactLink>
          </li>
          <li>
            <ContactLink href={contact.linkedin}>linkedin</ContactLink>
          </li>
          <li>
            <ContactLink href={contact.github}>github</ContactLink>
          </li>
        </ul>
      </header>

      <section className="mt-8 print:mt-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Education
        </h2>
        {resume.education.map((edu) => (
          <div key={edu.school} className="mt-4 print:mt-3">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-semibold text-neutral-900">
                  {edu.school}
                </span>
                <span className="text-neutral-600"> · {edu.location}</span>
              </div>
              <span className="shrink-0 text-sm text-neutral-500 tabular-nums">
                {edu.dates}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-800">
              {edu.degree}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
              {edu.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10 print:mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Experience
        </h2>
        <ul className="mt-4 space-y-6 print:space-y-5">
          {resume.experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <span className="font-semibold text-neutral-900">
                    {job.company}
                  </span>
                  {job.location ? (
                    <span className="text-neutral-600"> · {job.location}</span>
                  ) : null}
                </div>
                {(job.dates || "").length > 0 ? (
                  <span className="shrink-0 text-sm text-neutral-500 tabular-nums">
                    {job.dates}
                  </span>
                ) : null}
              </div>
              <p className="text-sm font-medium text-neutral-800">{job.role}</p>
              {job.bullets.length > 0 ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 print:mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Selected projects
        </h2>
        <ul className="mt-4 space-y-3 print:space-y-2">
          {resume.projects.map((p) => (
            <li key={p.name} className="text-sm leading-relaxed text-neutral-700">
              <span className="font-semibold text-neutral-900">{p.name}</span>
              {" — "}
              <ContactLink href={p.url}>{p.url.replace(/^https?:\/\//, "")}</ContactLink>
              <span className="text-neutral-600"> · {p.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 print:mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Hackathons & community
        </h2>
        <p className="mt-3 text-sm font-semibold text-neutral-900">
          {hackathonsSummary.headline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          {hackathonsSummary.body}
        </p>
        <p className="mt-3 print:hidden">
          <Link
            href={hackathonsSummary.linkHref}
            className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-500"
          >
            {hackathonsSummary.linkLabel}
          </Link>
        </p>
        <p className="mt-2 hidden text-xs text-neutral-600 print:block">
          Full list (print): faizm.ca{hackathonsSummary.linkHref}
        </p>
      </section>

      <section className="mt-10 print:mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Skills
        </h2>
        <dl className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
          <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-x-4">
            <dt className="font-medium text-neutral-800">Languages</dt>
            <dd>{skills.languages}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-x-4">
            <dt className="font-medium text-neutral-800">Frameworks</dt>
            <dd>{skills.frameworks}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-x-4">
            <dt className="font-medium text-neutral-800">Infra & data</dt>
            <dd>{skills.infra}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-x-4">
            <dt className="font-medium text-neutral-800">Other</dt>
            <dd>{skills.other}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-10 print:mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Certifications & badges
        </h2>
        <ul className="mt-4 flex flex-wrap gap-4 print:gap-3">
          {credlyBadges.map((badge) => (
            <li key={badge.id}>
              <a
                href={`https://www.credly.com/badges/${badge.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm transition hover:border-neutral-300 hover:shadow-sm print:border-neutral-300 print:bg-white"
              >
                <Image
                  src={badge.imageUrl}
                  alt={badge.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div>
                  <p className="font-semibold text-neutral-900">{badge.name}</p>
                  <p className="text-xs text-neutral-500">{badge.issuer} · {badge.issued}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 print:mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 print:text-neutral-700">
          Scholarships & recognition
        </h2>
        <ul className="mt-4 space-y-5 print:space-y-4">
          {scholarships.map((s) => (
            <li key={s.name} className="text-sm leading-relaxed text-neutral-700">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-semibold text-neutral-900">{s.name}</span>
                <span className="shrink-0 text-sm font-medium tabular-nums text-neutral-600">
                  {s.amount}
                </span>
              </div>
              <p className="mt-2 text-neutral-700">{s.detail}</p>
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
