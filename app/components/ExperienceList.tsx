"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  communityItems,
  experienceItems,
  schoolItems,
  type HomepageExperience,
} from "@/app/data/experience";

/**
 * Experience card: logo · company + badges / position · location / date
 */
function ExperienceCard({
  item,
  index,
}: {
  item: HomepageExperience;
  index: number;
}) {
  const logoScale = (item.logoScale ?? 100) / 100;

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
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 rounded-xl px-1 py-1.5 transition-opacity hover:opacity-70"
      >
        <div
          className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg p-0.5 sm:size-11"
          style={{ backgroundColor: item.color }}
        >
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            width={40}
            height={40}
            className="size-full object-contain"
            style={{ transform: `scale(${logoScale})` }}
          />
        </div>

        <div className="ml-0.5 flex min-w-0 flex-grow flex-col justify-between">
          <span
            className="flex flex-wrap items-center gap-x-1.5 text-[15px] font-semibold lowercase tracking-tight md:text-base"
            style={{ color: "var(--ink)" }}
          >
            {item.company}
            {item.present && (
              <span
                className="rounded-md px-1.5 py-0.5 text-[11px] font-normal normal-case sm:text-xs"
                style={{
                  backgroundColor: "var(--surface-alt, #f0f0f0)",
                  color: "var(--ink-2)",
                }}
              >
                Present
              </span>
            )}
            {item.incoming && (
              <span
                className="rounded-md px-1.5 py-0.5 text-[11px] font-normal normal-case sm:text-xs"
                style={{
                  backgroundColor: "var(--surface-alt, #f0f0f0)",
                  color: "var(--ink-2)",
                }}
              >
                Incoming
              </span>
            )}
          </span>
          <span
            className="text-[13px] lowercase leading-snug sm:text-sm"
            style={{ color: "var(--ink-2)" }}
          >
            {item.position}
          </span>
        </div>

        <div className="flex shrink-0 flex-col items-end text-right">
          <span
            className="text-[13px] lowercase sm:text-[15px]"
            style={{ color: "var(--ink)" }}
          >
            {item.location}
          </span>
          <span
            className="text-xs lowercase sm:text-sm"
            style={{ color: "var(--ink-3)" }}
          >
            {item.date}
          </span>
        </div>
      </a>
    </motion.li>
  );
}

function ExperienceGroup({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: HomepageExperience[];
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <h2
        id={`${id}-heading`}
        className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        {title}
      </h2>
      <ul className="mx-auto flex max-w-xl flex-col gap-5 sm:gap-6">
        {items.map((item, i) => (
          <ExperienceCard
            key={`${item.company}-${item.position}-${item.date}`}
            item={item}
            index={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceList() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-xl scroll-mt-24 space-y-16 sm:space-y-20"
      aria-label="experience"
    >
      <ExperienceGroup id="work" title="experience" items={experienceItems} />
      <ExperienceGroup
        id="community"
        title="community"
        items={communityItems}
      />
      <ExperienceGroup id="school" title="school" items={schoolItems} />
    </section>
  );
}
