import type { Metadata } from "next";
import Link from "next/link";
import { resume, resumePdfFilename, resumePdfHref } from "@/app/data/resume";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: `resume · ${site.name}`,
  description: `resume of ${site.nameFormal} — computer science at the university of guelph. internships at tangerine, td, and sertus.`,
  alternates: {
    canonical: `${site.url}/resume`,
  },
  openGraph: {
    title: `resume · ${site.name}`,
    description: `computer science at the university of guelph. internships at tangerine, td, and sertus.`,
    url: `${site.url}/resume`,
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.nameFormal,
  url: site.url,
  email: site.email,
  jobTitle: "Software Engineer",
  sameAs: [site.socials.github, site.socials.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Guelph",
  },
};

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="mb-3 border-b pb-1 text-[11px] font-medium uppercase tracking-[0.2em]"
      style={{ color: "var(--ink)", borderColor: "var(--border)" }}
    >
      {children}
    </h2>
  );
}

function MetaRow({
  left,
  right,
  href,
  strong,
}: {
  left: string;
  right: string;
  href?: string;
  strong?: boolean;
}) {
  const leftEl = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-[var(--ink-3)] underline-offset-[3px] transition-opacity hover:opacity-70"
    >
      {left}
    </a>
  ) : (
    left
  );

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
      <span
        className={strong ? "font-semibold" : "font-medium"}
        style={{ color: "var(--ink)" }}
      >
        {leftEl}
      </span>
      <span
        className="shrink-0 text-[13px] tabular-nums sm:text-sm"
        style={{ color: "var(--ink-2)" }}
      >
        {right}
      </span>
    </div>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul
      className="mt-2 list-disc space-y-1.5 pl-[1.1rem] text-[14px] leading-6 sm:text-[15px] sm:leading-7"
      style={{ color: "var(--ink-2)" }}
    >
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const { education, leadership } = resume;

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12 print:max-w-none print:px-0 print:pb-0 print:pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-2xl print:max-w-none">
        <div className="flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="text-sm lowercase transition-opacity hover:opacity-70"
            style={{ color: "var(--ink-2)" }}
          >
            ← home
          </Link>
          <div className="flex items-center gap-4 text-sm lowercase">
            <a
              href={resumePdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--ink-3)] underline-offset-[3px] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink)" }}
            >
              view pdf
            </a>
            <a
              href={resumePdfHref}
              download={resumePdfFilename}
              className="underline decoration-[var(--ink-3)] underline-offset-[3px] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink)" }}
            >
              download pdf
            </a>
          </div>
        </div>

        <h1
          className="mt-8 font-[family-name:var(--font-newsreader)] text-2xl font-medium tracking-tight lowercase md:text-[1.85rem] print:hidden"
          style={{ color: "var(--ink)" }}
        >
          resume
        </h1>
        <p
          className="mt-3 text-[15px] lowercase leading-7 md:text-base md:leading-8 print:hidden"
          style={{ color: "var(--ink-2)" }}
        >
          the same document as the pdf — internships, projects, and what i&apos;ve
          shipped
        </p>

        <article
          className="mt-10 print:mt-0"
          aria-label={`${resume.name} resume`}
        >
          <header className="text-center">
            <p
              className="font-[family-name:var(--font-newsreader)] text-[1.65rem] font-medium tracking-tight md:text-[1.85rem]"
              style={{ color: "var(--ink)" }}
            >
              {resume.name}
            </p>
            <p
              className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] sm:text-sm"
              style={{ color: "var(--ink-2)" }}
            >
              {resume.contacts.map((contact, i) => (
                <span key={contact.href} className="inline-flex items-center">
                  {i > 0 ? (
                    <span className="mr-2" style={{ color: "var(--ink-3)" }} aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      contact.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="underline decoration-[var(--ink-3)] underline-offset-[3px] transition-opacity hover:opacity-70"
                  >
                    {contact.label}
                  </a>
                </span>
              ))}
            </p>
          </header>

          <section className="mt-8" aria-labelledby="education-heading">
            <SectionHeading id="education-heading">Education</SectionHeading>
            <MetaRow
              left={education.school}
              right={education.location}
              strong
            />
            <MetaRow left={education.degree} right={education.dates} />
            <Bullets items={education.bullets} />
          </section>

          <section className="mt-7" aria-labelledby="experience-heading">
            <SectionHeading id="experience-heading">Experience</SectionHeading>
            <div className="flex flex-col gap-5">
              {resume.experience.map((role) => (
                <div key={`${role.company}-${role.dates}`}>
                  <MetaRow
                    left={role.title}
                    right={role.location}
                    strong
                  />
                  <MetaRow
                    left={role.company}
                    right={role.dates}
                    href={role.href}
                  />
                  <Bullets items={role.bullets} />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7" aria-labelledby="projects-heading">
            <SectionHeading id="projects-heading">Projects</SectionHeading>
            <div className="flex flex-col gap-5">
              {resume.projects.map((project) => (
                <div key={project.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p style={{ color: "var(--ink)" }}>
                      <span className="font-semibold">{project.name}</span>
                      <span style={{ color: "var(--ink-2)" }}>
                        {" "}
                        – {project.subtitle}
                      </span>
                    </p>
                    <p
                      className="text-[13px] sm:text-sm"
                      style={{ color: "var(--ink-2)" }}
                    >
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--ink-3)] underline-offset-[3px] transition-opacity hover:opacity-70"
                      >
                        {project.linkLabel}
                      </a>
                      <span aria-hidden> | </span>
                      <span>{project.stack}</span>
                    </p>
                  </div>
                  <Bullets items={project.bullets} />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7" aria-labelledby="leadership-heading">
            <SectionHeading id="leadership-heading">Leadership</SectionHeading>
            <MetaRow
              left={leadership.title}
              right={leadership.location}
              strong
            />
            <MetaRow
              left={leadership.org}
              right={leadership.dates}
              href={leadership.href}
            />
            <Bullets items={leadership.bullets} />
          </section>

          <section className="mt-7" aria-labelledby="skills-heading">
            <SectionHeading id="skills-heading">Technical Skills</SectionHeading>
            <dl className="flex flex-col gap-2 text-[14px] leading-6 sm:text-[15px] sm:leading-7">
              {resume.skills.map((group) => (
                <div key={group.label}>
                  <dt
                    className="inline font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {group.label}:
                  </dt>{" "}
                  <dd
                    className="inline"
                    style={{ color: "var(--ink-2)" }}
                  >
                    {group.items}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </div>
    </main>
  );
}
