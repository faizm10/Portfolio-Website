"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { homepageSocials, site } from "@/app/data/site";
import { bioInternships, homepageExperiences } from "@/app/data/experience";
import { showcaseProjects } from "@/app/data/projects";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceList from "./components/ExperienceList";
import GitHubContributionsCalendar from "./components/GitHubContributionsCalendar";
import TravelMap from "./components/TravelMap";
import SketchBackground from "./components/SketchBackground";
import { Gradients } from "./components/Gradients";
import HeroBanner from "./components/HeroBanner";

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
        width={20}
        height={20}
        className="relative top-[2px] size-5 rounded-sm object-contain"
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
  const transitProject = showcaseProjects.find((p) => p.slug === "transit-flow")!;

  return (
    <div className="relative min-h-screen w-full bg-white">
      <Gradients />
      <SketchBackground />
      <HeroBanner />
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
        <div className="mx-auto max-w-xl">
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

          <motion.p
            custom={1}
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
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
            {site.homepage.interests}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
            i built{" "}
            <LinkPreview
              url={topProject.url}
              className="inline font-normal underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
              width={240}
              height={150}
              isStatic
              imageSrc={topProject.banner}
            >
              <span style={{ color: "var(--ink)" }}>{topProject.name}</span>
            </LinkPreview>
            , course search &amp; reviews for u of g, now at{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              1000+
            </strong>{" "}
            users and{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              75k+
            </strong>{" "}
            views. i also built{" "}
            <LinkPreview
              url={transitProject.url}
              className="inline font-normal underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
              width={240}
              height={150}
              isStatic
              imageSrc={transitProject.banner}
            >
              <span style={{ color: "var(--ink)" }}>
                {transitProject.name}
              </span>
            </LinkPreview>{" "}
            , a transit planning tool, now at{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              300+
            </strong>{" "}
            users
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
            {site.homepage.contactLead}{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink)" }}
            >
              {site.email}
            </a>{" "}
            for all inquiries
          </motion.p>

          <motion.nav
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[15px] lowercase"
            aria-label="social links"
          >
            {homepageSocials.map((item) => {
              const linkClass =
                "underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70";
              const linkStyle = { color: "var(--ink)" };

              if (item.preview) {
                return (
                  <LinkPreview
                    key={item.key}
                    url={item.href}
                    className={`inline font-normal ${linkClass}`}
                    width={item.key === "github" ? 320 : 240}
                    height={item.key === "github" ? 200 : 150}
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

        <motion.div
          custom={6}
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
        </motion.div>

        <div className="mt-20 md:mt-28">
          <ExperienceList />
        </div>

        <div className="mt-20 md:mt-28">
          <TravelMap />
        </div>

        <div className="mt-20 md:mt-28">
          <GitHubContributionsCalendar />
        </div>

        <div className="mt-20 md:mt-28">
          <ProjectsGrid />
        </div>
      </main>
    </div>
  );
}
