"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { homepageHobbies, homepageSocials, site } from "@/app/data/site";
import { bioInternships, homepageExperiences } from "@/app/data/experience";
import { showcaseProjects, type ProjectType } from "@/app/data/projects";
import { posts } from "@/app/posts";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceList from "./components/ExperienceList";
import TravelMap from "./components/TravelMap";
import SketchBackground from "./components/SketchBackground";
import { Gradients } from "./components/Gradients";
import GitHubContributionsPreview from "./components/GitHubContributionsPreview";

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
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
        className="relative top-[2px] size-6 rounded-sm object-contain"
        aria-hidden
      />
      <span>{label}</span>
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
      <span style={{ color: "var(--ink)" }}>{project.name}</span>
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
      <span style={{ color: "var(--ink)" }}>{label}</span>
    </LinkPreview>
  );
}

function Metric({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-extrabold" style={{ color: "var(--ink)" }}>
      {children}
    </strong>
  );
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
  const school = site.schools.guelph;
  const waterloo = site.schools.waterloo;
  const work = bioInternships.current;
  const prevWork = bioInternships.previous[0]; // td bank
  const topProject = showcaseProjects.find((p) => p.slug === "uoguelphcourses")!;
  const octreeProject = showcaseProjects.find((p) => p.slug === "octree")!;
  const transitProject = showcaseProjects.find((p) => p.slug === "transit-flow")!;
  const latestPosts = posts.slice(0, 4);

  return (
    <div className="relative min-h-screen w-full bg-white">
      <Gradients />
      <SketchBackground />
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {[
          ...new Set(
            [
              school.preview,
              waterloo.preview,
              work.preview,
              ...homepageExperiences.map((e) => e.preview),
              ...homepageSocials.map((s) => s.preview),
            ].filter(Boolean) as string[],
          ),
        ].map((src) => (
          <img key={src} src={src} alt="" width={1} height={1} />
        ))}
      </div>

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12">
        <div id="about" className="mx-auto max-w-xl scroll-mt-24">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-2xl font-semibold tracking-tight lowercase md:text-[1.75rem]"
              style={{ color: "var(--ink)" }}
            >
              {site.name}
            </motion.h1>

            <motion.nav
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="ml-auto flex flex-wrap justify-end gap-x-5 gap-y-2 text-[15px] lowercase"
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
                const linkClass =
                  "underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70";
                const linkStyle = { color: "var(--ink)" };

                if (item.key === "github") {
                  return (
                    <LinkPreview
                      key={item.key}
                      url={item.href}
                      className={`inline font-normal ${linkClass}`}
                      width={520}
                      height={138}
                      isStatic
                      imageSrc={item.preview ?? "/previews/github.jpeg"}
                      previewContent={<GitHubContributionsPreview />}
                    >
                      <span style={linkStyle}>{item.label}</span>
                    </LinkPreview>
                  );
                }

                if (item.preview) {
                  return (
                    <LinkPreview
                      key={item.key}
                      url={item.href}
                      className={`inline font-normal ${linkClass}`}
                      width={240}
                      height={150}
                      isStatic
                      imageSrc={item.preview}
                    >
                      <span style={linkStyle}>{item.label}</span>
                    </LinkPreview>
                  );
                }

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    style={linkStyle}
                  >
                    {item.label}
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
            className="mt-8 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
            i study computer science at{" "}
            <OrgInline
              href={school.href}
              icon={school.icon}
              label={school.label}
              preview={school.preview}
              external={school.external}
            />
            , and spent three terms at{" "}
            <OrgInline
              href={waterloo.href}
              icon={waterloo.icon}
              label={waterloo.label}
              preview={waterloo.preview}
              external={waterloo.external}
            />
            . i&apos;m currently based in {site.homepage.location}, where i work at{" "}
            <OrgInline
              href={work.href}
              icon={work.icon}
              label={work.title}
              preview={work.preview}
            />
            , previously at{" "}
            <OrgInline
              href={prevWork.href}
              icon={prevWork.icon}
              label={prevWork.title}
              preview={prevWork.preview}
            />
            .
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
            {site.homepage.interests}
          </motion.p>


          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-[15px] leading-7 lowercase md:text-base md:leading-7"
            style={{ color: "var(--ink-2)" }}
          >
            <p className="build-list-title">
              what i&apos;ve been building:
            </p>
            <ul className="build-list">
              <li>
                <span className="build-arrow">↳</span>
                <span>
                  shipped <ProjectInline project={topProject} />, course search
                  and reviews for the university of guelph:{" "}
                  <Metric>5k+</Metric>{" "}
                  students,{" "}
                  <Metric>75k+</Metric>{" "}
                  views
                </span>
              </li>
              <li>
                <span className="build-arrow">↳</span>
                <span>
                  contributed to <ProjectInline project={octreeProject} />, an
                  open-source ai-powered latex editor:{" "}
                  <Metric>2k+</Metric>{" "}
                  users,{" "}
                  <Metric>250+</Metric>{" "}
                  github stars, <Metric>50+</Metric> forks
                </span>
              </li>
              <li>
                <span className="build-arrow">↳</span>
                <span>
                  built{" "}
                  <ExternalProjectInline
                    href="https://www.pitchpulse.ca/"
                    label="pitchpulse"
                    imageSrc="/previews/pitchpulse.png"
                  />
                  ,
                  an ai-powered platform for world cup 2026:{" "}
                  <Metric>300+</Metric>{" "}
                  users <Metric>within 72 hours</Metric>
                </span>
              </li>
              <li>
                <span className="build-arrow">↳</span>
                <span>
                  built <ProjectInline project={transitProject} />, a transit
                  planning tool:{" "}
                  <Metric>300+</Metric>{" "}
                  users
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.p
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
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
          </motion.p>

          <motion.section
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 text-[15px] lowercase md:text-base"
          >
            <div className="flex items-baseline justify-between gap-5">
              <p className="build-list-title">latest blog:</p>
              <Link
                href="/blog"
                className="shrink-0 text-[13px] underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
                style={{ color: "var(--ink-2)" }}
              >
                all posts
              </Link>
            </div>

            <ul className="mt-3 grid gap-2">
              {latestPosts.map((post) => {
                const title = (
                  <span
                    className="truncate text-[15px] underline-offset-[3px] decoration-[var(--ink-3)] group-hover:underline md:text-base"
                    style={{ color: "var(--ink)" }}
                  >
                    {post.title}
                  </span>
                );

                return (
                  <li
                    key={post.slug}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4"
                  >
                    {post.comingSoon ? (
                      <div
                        aria-disabled="true"
                        className="min-w-0 cursor-default opacity-65"
                      >
                        {title}
                      </div>
                    ) : (
                      <Link
                        href={`/${post.slug}`}
                        className="group min-w-0 transition-opacity hover:opacity-70"
                      >
                        {title}
                      </Link>
                    )}
                    <span
                      className="shrink-0 text-[13px] lowercase"
                      style={{ color: "var(--ink-3)" }}
                    >
                      {post.date}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.section>

        </div>

        {/* <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-14 max-w-xl md:mt-16"
        >
          <Image
            src="/mount-fuji.png"
            alt="pixel art of mount fuji at sunset with a pagoda and cherry blossoms"
            width={1024}
            height={682}
            className="h-auto w-full"
            style={{ imageRendering: "pixelated" }}
            sizes="(max-width: 576px) 100vw, 576px"
            priority={false}
          />
        </motion.div> */}

        <div className="mt-20 md:mt-28">
          <ExperienceList />
        </div>

        <div className="mt-20 md:mt-28">
          <TravelMap />
        </div>

        <div className="mt-20 md:mt-28">
          <ProjectsGrid />
        </div>
      </main>
    </div>
  );
}
