"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "motion/react";
import {
  currentItems,
  previouslyItems,
  schoolItems,
  type HomepageExperience,
} from "@/app/data/experience";

/**
 * Slim experience row: logo · company / role · dates (right)
 */
function ExperienceRow({
  item,
  index,
}: {
  item: HomepageExperience;
  index: number;
}) {
  const logoScale = (item.logoScale ?? 100) / 100;

  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: 0.03 * index,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 py-2 transition-opacity hover:opacity-70"
      >
        <div
          className={clsx(
            "flex size-11 shrink-0 items-center justify-center overflow-hidden bg-transparent sm:size-12",
            item.logoRound ? "rounded-full" : "rounded-md",
          )}
        >
          <Image
            src={item.logo}
            alt=""
            width={48}
            height={48}
            className="size-full object-contain"
            style={{ transform: `scale(${logoScale})` }}
            aria-hidden
          />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className="truncate text-[15px] font-medium lowercase tracking-tight md:text-base"
            style={{ color: "var(--ink)" }}
          >
            {item.company}
          </div>
          <div
            className="truncate text-[13px] lowercase sm:text-sm"
            style={{ color: "var(--ink-2)" }}
          >
            {item.position}
          </div>
        </div>

        <div
          className="shrink-0 text-right text-[12px] lowercase tabular-nums sm:text-[13px]"
          style={{ color: "var(--ink-3)" }}
        >
          {item.date}
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
        className="mb-2 text-[13px] font-medium lowercase tracking-wide"
        style={{ color: "var(--ink-3)" }}
      >
        {title}
      </h2>
      <ul className="flex flex-col">
        {items.map((item, i) => (
          <ExperienceRow
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
      className="mx-auto w-full max-w-xl scroll-mt-24 space-y-10 sm:space-y-12"
      aria-label="experience"
    >
      <ExperienceGroup id="current" title="current" items={currentItems} />
      <ExperienceGroup
        id="education"
        title="education"
        items={schoolItems}
      />
      <ExperienceGroup
        id="previously"
        title="previously"
        items={previouslyItems}
      />
    </section>
  );
}
