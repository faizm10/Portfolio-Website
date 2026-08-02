"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  homepageExperiences,
  type HomepageExperience,
} from "@/app/data/experience";

/**
 * Experience list: logo + company / role · dates / blurb.
 */
function ExperienceCard({
  exp,
  index,
}: {
  exp: HomepageExperience;
  index: number;
}) {
  const logoScale = (exp.logoScale ?? 100) / 100;
  const showDesc = exp.blurb && exp.blurb !== exp.role;

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: 0.04 * index,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={exp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3.5 rounded-xl px-1 py-2 transition-opacity hover:opacity-70 sm:gap-4"
      >
        <div
          className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[12px] sm:size-14"
          style={{ backgroundColor: exp.logoBackgroundColor }}
        >
          <Image
            src={exp.icon}
            alt=""
            width={56}
            height={56}
            className="size-full object-contain p-1.5"
            style={{ transform: `scale(${logoScale})` }}
          />
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <p
            className="text-[15px] font-semibold tracking-tight lowercase sm:text-base"
            style={{ color: "var(--ink)" }}
          >
            {exp.title}
          </p>
          <p
            className="mt-0.5 text-[13px] lowercase leading-snug sm:text-sm"
            style={{ color: "var(--ink-2)" }}
          >
            {exp.role}
            <span style={{ color: "var(--ink-3)" }}> · </span>
            {exp.dates}
          </p>
          {showDesc && (
            <p
              className="mt-1.5 text-[13px] lowercase leading-relaxed sm:text-sm"
              style={{ color: "var(--ink-3)" }}
            >
              {exp.blurb}
            </p>
          )}
        </div>
      </a>
    </motion.li>
  );
}

export default function ExperienceList() {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        experience
      </h2>

      <ul className="mx-auto flex max-w-xl flex-col gap-5 sm:gap-6">
        {homepageExperiences.map((exp, i) => (
          <ExperienceCard
            key={`${exp.title}-${exp.dates}`}
            exp={exp}
            index={i}
          />
        ))}
      </ul>
    </section>
  );
}
