import type { Metadata } from "next";
import { resume, resumePdfFilename, resumePdfHref } from "@/app/data/resume";
import { site } from "@/app/data/site";
import PageIntro from "@/app/components/sketch/PageIntro";

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

const linkClass =
  "transition-opacity hover:opacity-70";

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="mb-4 text-xs font-medium uppercase tracking-[0.18em]"
      style={{ color: "var(--ink-3)" }}
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
      className={linkClass}
    >
      {left}
    </a>
  ) : (
    left
  );

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
      <span
        className={strong ? "font-medium" : undefined}
        style={{ color: "var(--ink)" }}
      >
        {leftEl}
      </span>
      <span
        className="shrink-0 text-[13px] tabular-nums sm:text-sm"
        style={{ color: "var(--ink-3)" }}
      >
        {right}
      </span>
    </div>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul
      className="mt-2 space-y-1.5 text-[14px] leading-6 sm:text-[15px] sm:leading-7"
      style={{ color: "var(--ink-2)" }}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
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
        <div className="print:hidden">
          <PageIntro
            eyebrow="on paper"
            title="resume"
            note="← internships, projects, shipped work"
            character="point"
          >
            <a href={resumePdfHref} download={resumePdfFilename} className="sketch-cta">
              download pdf
            </a>
          </PageIntro>
        </div>

        <article
          className="mt-12 print:mt-0"
          aria-label={`${resume.name} resume`}
        >
          <header>
            <p
              className="text-[1.65rem] font-medium tracking-tight md:text-[1.85rem]"
              style={{ color: "var(--ink)" }}
            >
              {resume.name}
            </p>
            <p
              className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] sm:text-sm"
              style={{ color: "var(--ink-2)" }}
            >
              {resume.contacts.map((contact) => (
                <a
                  key={contact.href}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    contact.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={linkClass}
                >
                  {contact.label}
                </a>
              ))}
            </p>
          </header>

          <section className="mt-12" aria-labelledby="education-heading">
            <SectionHeading id="education-heading">Education</SectionHeading>
            <MetaRow
              left={education.school}
              right={education.location}
              strong
            />
            <MetaRow left={education.degree} right={education.dates} />
            <Bullets items={education.bullets} />
          </section>

          <section className="mt-10" aria-labelledby="experience-heading">
            <SectionHeading id="experience-heading">Experience</SectionHeading>
            <div className="flex flex-col gap-7">
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

          <section className="mt-10" aria-labelledby="projects-heading">
            <SectionHeading id="projects-heading">Projects</SectionHeading>
            <div className="flex flex-col gap-7">
              {resume.projects.map((project) => (
                <div key={project.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p style={{ color: "var(--ink)" }}>
                      <span className="font-medium">{project.name}</span>
                      <span style={{ color: "var(--ink-3)" }}>
                        {" "}
                        {project.subtitle}
                      </span>
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[13px] sm:text-sm ${linkClass}`}
                      style={{ color: "var(--ink-2)" }}
                    >
                      {project.linkLabel}
                    </a>
                  </div>
                  <p
                    className="mt-0.5 text-[13px] sm:text-sm"
                    style={{ color: "var(--ink-3)" }}
                  >
                    {project.stack}
                  </p>
                  <Bullets items={project.bullets} />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="leadership-heading">
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

          <section className="mt-10" aria-labelledby="skills-heading">
            <SectionHeading id="skills-heading">Skills</SectionHeading>
            <dl className="flex flex-col gap-2 text-[14px] leading-6 sm:text-[15px] sm:leading-7">
              {resume.skills.map((group) => (
                <div key={group.label}>
                  <dt
                    className="inline font-medium"
                    style={{ color: "var(--ink)" }}
                  >
                    {group.label}
                  </dt>
                  <dd
                    className="mt-0.5 block"
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
