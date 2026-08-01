"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  homepageExperiences,
  type HomepageExperience,
} from "@/app/data/experience";

/**
 * Ramp-style experience card:
 * left = logo + title + role (always readable)
 * right = brand wash + product/preview image on hover
 */
function ExperienceCard({
  exp,
  index,
}: {
  exp: HomepageExperience;
  index: number;
}) {
  const logoScale = (exp.logoScale ?? 100) / 100;

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
        className="group relative flex min-h-[88px] items-center overflow-hidden rounded-xl bg-white transition duration-300 hover:bg-[#f0f0f0] sm:min-h-[96px]"
      >
        {/* Right brand panel + preview — fades in on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[62%] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        >
          {/* Brand color fill */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, ${exp.logoBackgroundColor} 55%, #f0f0f0) 28%, ${exp.logoBackgroundColor} 100%)`,
            }}
          />

          {/* Watermark logo in the wash */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.18]">
            <Image
              src={exp.icon}
              alt=""
              width={96}
              height={96}
              className="size-20 object-contain sm:size-24"
            />
          </div>

          {/* Product / site preview on the far right */}
          <div
            className="absolute inset-y-2 right-2 w-[58%] overflow-hidden rounded-lg shadow-sm sm:inset-y-2.5 sm:right-2.5"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src={exp.preview}
              alt=""
              fill
              sizes="220px"
              className="object-cover object-top"
            />
          </div>

          {/* Soft blend from left content into the panel */}
          <div
            className="absolute inset-y-0 left-0 w-[42%]"
            style={{
              background:
                "linear-gradient(to right, #f0f0f0 0%, rgba(240,240,240,0.92) 35%, transparent 100%)",
            }}
          />
        </div>

        {/* Left content — stays above the wash */}
        <div className="relative z-10 flex w-full max-w-[58%] items-center gap-3 px-3.5 py-3.5 sm:gap-4 sm:px-4">
          <div
            className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:size-14"
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

          <div className="flex min-w-0 flex-col">
            <span
              className="truncate text-[15px] font-semibold lowercase tracking-tight sm:text-base"
              style={{ color: "var(--ink)" }}
            >
              {exp.title}
            </span>
            <span
              className="mt-0.5 truncate text-[13px] lowercase sm:text-sm"
              style={{ color: "var(--ink-2)" }}
            >
              {exp.blurb}
            </span>
          </div>
        </div>
      </a>
    </motion.li>
  );
}

export default function ExperienceList() {
  return (
    <section className="w-full" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        experience
      </h2>

      <ul className="mx-auto flex max-w-xl flex-col gap-2.5">
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
