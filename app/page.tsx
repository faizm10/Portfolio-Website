"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { homepageSocials, site } from "@/app/data/site";
import { bioInternships, homepageExperiences } from "@/app/data/experience";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceList from "./components/ExperienceList";
import GitHubContributionsCalendar from "./components/GitHubContributionsCalendar";
import TravelMap from "./components/TravelMap";
import SketchBackground from "./components/SketchBackground";

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
        width={16}
        height={16}
        className="relative top-[2px] size-4 rounded-sm object-contain"
        aria-hidden
      />
      <span>{label}</span>
    </span>
  );

  if (!external || !preview) {
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
  const work = bioInternships.current;

  return (
    <div className="relative min-h-screen w-full bg-white">
      <SketchBackground />
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {[
          ...new Set(
            [
              school.preview,
              work.preview,
              ...homepageExperiences.map((e) => e.preview),
              ...homepageSocials.map((s) => s.preview),
            ].filter(Boolean) as string[],
          ),
        ].map((src) => (
          <img key={src} src={src} alt="" width={1} height={1} />
        ))}
      </div>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20 md:px-8 md:pt-24">
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
            . i&apos;m currently based in {site.homepage.location}, where i work at{" "}
            <OrgInline
              href={work.href}
              icon={work.icon}
              label={work.title}
              preview={work.preview}
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
            custom={4}
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
          custom={5}
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
