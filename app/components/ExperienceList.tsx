"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  homepageExperiences,
  type HomepageExperience,
} from "@/app/data/experience";

function ExperienceRow({
  exp,
  index,
}: {
  exp: HomepageExperience;
  index: number;
}) {
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
      className="border-t py-5 first:border-t-0 first:pt-0"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="relative size-4.5 shrink-0 overflow-hidden rounded-[3px]">
            <Image
              src={exp.icon}
              alt=""
              fill
              sizes="18px"
              className="object-contain"
            />
          </span>
          <LinkPreview
            url={exp.href}
            className="inline min-w-0 text-[15px] font-normal"
            width={220}
            height={138}
            isStatic
            imageSrc={exp.preview}
          >
            <span
              className="font-semibold tracking-tight lowercase underline-offset-[3px] transition-opacity hover:underline hover:opacity-70"
              style={{ color: "var(--ink)" }}
            >
              {exp.title}
            </span>
          </LinkPreview>
        </div>
        <time
          className="shrink-0 text-[13px] lowercase tabular-nums"
          style={{ color: "var(--ink-3)" }}
        >
          {exp.dates}
        </time>
      </div>

      <p
        className="mt-1.5 pl-7 text-[13px] leading-relaxed lowercase sm:text-[14px]"
        style={{ color: "var(--ink-2)" }}
      >
        <span style={{ color: "var(--ink)" }}>{exp.role}</span>
        <span aria-hidden style={{ color: "var(--ink-3)" }}>
          {" "}
          —{" "}
        </span>
        {exp.blurb}
      </p>
    </motion.li>
  );
}

export default function ExperienceList() {
  return (
    <section className="w-full" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        experience
      </h2>

      <ul className="mx-auto max-w-xl">
        {homepageExperiences.map((exp, i) => (
          <ExperienceRow
            key={`${exp.title}-${exp.dates}`}
            exp={exp}
            index={i}
          />
        ))}
      </ul>
    </section>
  );
}
