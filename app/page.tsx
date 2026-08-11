"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { homepageHobbies, homepageSocials, site } from "@/app/data/site";
import { homepageExperiences, homepageUpTo } from "@/app/data/experience";
import { showcaseProjects, type ProjectType } from "@/app/data/projects";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceList from "./components/ExperienceList";
import SketchBackground from "./components/SketchBackground";
import { Gradients } from "./components/Gradients";
import GitHubContributionsPreview from "./components/GitHubContributionsPreview";
import { socialIcons, type SocialIconKey } from "./components/SocialIcons";

function OrgInline({
  href,
  icon,
  label,
  preview,
  external = true,
}: {
  href: string;
  icon: string;
  label: string;
  preview?: string | null;
  external?: boolean;
}) {
  const content = (
    <span className="inline-flex items-baseline gap-1.5 underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70">
      <span className="font-semibold" style={{ color: "var(--ink)" }}>
        {label}
      </span>
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        className="relative top-[3px] size-5 rounded-[4px] object-contain"
        aria-hidden
      />
    </span>
  );

  if (!preview) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline text-[inherit]"
      >
        {content}
      </a>
    ) : (
      <Link href={href} className="inline text-[inherit]">
        {content}
      </Link>
    );
  }

  return (
    <LinkPreview
      url={href}
      className="inline text-[inherit] font-normal"
      width={240}
      height={150}
      isStatic
      imageSrc={preview}
    >
      {content}
    </LinkPreview>
  );
}

function ProjectInline({ project }: { project: ProjectType }) {
  return (
    <LinkPreview
      url={project.url}
      className="inline font-normal underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
      width={240}
      height={150}
      isStatic
      imageSrc={project.banner}
    >
      <span className="font-semibold" style={{ color: "var(--ink)" }}>
        {project.name}
      </span>
    </LinkPreview>
  );
}

function ExternalProjectInline({
  href,
  label,
  imageSrc,
}: {
  href: string;
  label: string;
  imageSrc: string;
}) {
  return (
    <LinkPreview
      url={href}
      className="inline font-normal underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
      width={360}
      height={180}
      isStatic
      imageSrc={imageSrc}
    >
      <span className="font-semibold" style={{ color: "var(--ink)" }}>
        {label}
      </span>
    </LinkPreview>
  );
}

function Metric({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold" style={{ color: "var(--ink)" }}>
      {children}
    </strong>
  );
}

function UpToEntity({
  entity,
}: {
  entity: (typeof homepageUpTo)[number]["entity"];
}) {
  if (entity.type === "org") {
    return (
      <OrgInline
        href={entity.href}
        icon={entity.icon}
        label={entity.label}
        preview={entity.preview}
      />
    );
  }

  if (entity.project) {
    const project = showcaseProjects.find((p) => p.slug === entity.project);
    if (!project) return null;
    return <ProjectInline project={project} />;
  }

  if (entity.external) {
    return (
      <ExternalProjectInline
        href={entity.external.href}
        label={entity.external.label}
        imageSrc={entity.external.imageSrc}
      />
    );
  }

  return null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Gradients />
      <SketchBackground />
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {[
          ...new Set(
            [
              ...homepageExperiences.map((e) => e.preview),
              ...homepageSocials.map((s) => s.preview),
              ...homepageUpTo
                .filter((i) => i.entity.type === "org")
                .map((i) => (i.entity.type === "org" ? i.entity.preview : null)),
            ].filter(Boolean) as string[],
          ),
        ].map((src) => (
          <img key={src} src={src} alt="" width={1} height={1} />
        ))}
      </div>

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12">
        <div className="mx-auto w-full max-w-xl">
          <section id="about" className="scroll-mt-24">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="font-[family-name:var(--font-newsreader)] text-[1.75rem] font-medium tracking-tight lowercase md:text-[2rem]"
                style={{ color: "var(--ink)" }}
              >
                {site.name}
              </motion.h1>

              <motion.nav
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="ml-auto flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[15px] lowercase"
                aria-label="social links"
              >
                <Link
                  href="/blog"
                  className="underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
                  style={{ color: "var(--ink)" }}
                >
                  blog
                </Link>
                <Link
                  href="/photos"
                  className="underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
                  style={{ color: "var(--ink)" }}
                >
                  photos
                </Link>
                {homepageSocials.map((item) => {
                  const Icon = socialIcons[item.key as SocialIconKey];
                  const iconClass =
                    "inline-flex items-center justify-center transition-opacity hover:opacity-70";
                  const iconStyle = { color: "var(--ink)" };

                  if (item.key === "github") {
                    return (
                      <LinkPreview
                        key={item.key}
                        url={item.href}
                        className={`inline font-normal ${iconClass}`}
                        width={520}
                        height={138}
                        isStatic
                        imageSrc={item.preview ?? "/previews/github.jpeg"}
                        previewContent={<GitHubContributionsPreview />}
                      >
                        <span style={iconStyle} aria-label={item.label}>
                          <Icon size={18} />
                        </span>
                      </LinkPreview>
                    );
                  }

                  if (item.preview) {
                    return (
                      <LinkPreview
                        key={item.key}
                        url={item.href}
                        className={`inline font-normal ${iconClass}`}
                        width={240}
                        height={150}
                        isStatic
                        imageSrc={item.preview}
                      >
                        <span style={iconStyle} aria-label={item.label}>
                          <Icon size={18} />
                        </span>
                      </LinkPreview>
                    );
                  }

                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={iconClass}
                      style={iconStyle}
                      aria-label={item.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </motion.nav>
            </div>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-3 text-[14px] lowercase tracking-wide md:text-[15px]"
              style={{ color: "var(--ink-3)" }}
            >
              cs @ guelph · {site.homepage.location}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10"
            >
              <h2 className="up-to-title">what i&apos;m up to...</h2>
              <ul className="build-list lowercase">
                {homepageUpTo.map((item) => (
                  <li key={item.id}>
                    <span className="build-arrow" aria-hidden>
                      →
                    </span>
                    <span>
                      {item.before} <UpToEntity entity={item.entity} />
                      {item.after ? <> {item.after}</> : null}
                      {item.then ? (
                        <>
                          {" "}
                          {item.then.before}{" "}
                          <UpToEntity entity={item.then.entity} />
                        </>
                      ) : null}
                      {item.metrics?.map((m, i) =>
                        /^\d/.test(m) ? (
                          <span key={`${item.id}-m-${i}`}>
                            {" "}
                            <Metric>{m}</Metric>
                          </span>
                        ) : (
                          <span key={`${item.id}-m-${i}`}> {m}</span>
                        ),
                      )}
                    </span>
                  </li>
                ))}
                <li>
                  <span className="build-arrow" aria-hidden>
                    →
                  </span>
                  <span>
                    {site.homepage.hobbiesLead}{" "}
                    {homepageHobbies.map((hobby, i) => {
                      const sep =
                        i === homepageHobbies.length - 1
                          ? ""
                          : i === homepageHobbies.length - 2
                            ? ", and "
                            : ", ";

                      return (
                        <span key={hobby.key}>
                          <Link
                            href={hobby.href}
                            className="underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
                            style={{ color: "var(--ink)" }}
                          >
                            {hobby.label}
                          </Link>
                          {sep}
                        </span>
                      );
                    })}
                  </span>
                </li>
              </ul>
              <p className="up-to-more lowercase">
                see more of what i&apos;m working on below ↓
              </p>
            </motion.div>
          </section>

          <div className="mt-16 md:mt-20">
            <ExperienceList />
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <ProjectsGrid />
        </div>
      </main>
    </div>
  );
}
