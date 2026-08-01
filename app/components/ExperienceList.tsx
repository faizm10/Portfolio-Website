"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex gap-4 py-3.5 sm:gap-5">
        <div
          className="relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-lg ring-1 sm:size-11"
          style={{
            backgroundColor: "var(--surface-alt)",
            borderColor: "var(--border)",
            boxShadow: "0 4px 12px var(--accent-shadow)",
          }}
        >
          <Image
            src={exp.icon}
            alt=""
            fill
            sizes="44px"
            className="object-contain p-1"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <LinkPreview
              url={exp.href}
              className="inline text-[15px] font-normal"
              width={220}
              height={138}
              isStatic
              imageSrc={exp.preview}
            >
              <span
                className="inline-flex items-center gap-1.5 font-semibold tracking-tight lowercase transition-opacity group-hover:opacity-70"
                style={{ color: "var(--ink)" }}
              >
                {exp.title}
                <ArrowUpRight
                  className="size-3.5 shrink-0 opacity-40 transition group-hover:opacity-80"
                  aria-hidden
                />
              </span>
            </LinkPreview>
            <span
              className="shrink-0 text-[13px] lowercase tabular-nums"
              style={{ color: "var(--ink-3)" }}
            >
              {exp.dates}
            </span>
          </div>

          <p
            className="mt-0.5 text-[13px] lowercase"
            style={{ color: "var(--ink-2)" }}
          >
            {exp.role}
          </p>

          <p
            className="mt-1 text-[13px] leading-relaxed lowercase"
            style={{ color: "var(--ink-3)" }}
          >
            {exp.blurb}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function ExperienceList() {
  return (
    <section className="w-full" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        experience
      </h2>

      <ul className="mx-auto mt-6 max-w-xl">
        {homepageExperiences.map((exp, i) => (
          <ExperienceRow key={`${exp.title}-${exp.dates}`} exp={exp} index={i} />
        ))}
      </ul>
    </section>
  );
}
