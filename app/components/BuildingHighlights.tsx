"use client";

import { motion } from "motion/react";
import { buildingHighlights } from "@/app/data/projects";

export default function BuildingHighlights() {
  return (
    <motion.section
      aria-labelledby="building-heading"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <h2
        id="building-heading"
        className="flex items-baseline gap-2 text-[15px] font-semibold italic lowercase md:text-base"
        style={{ color: "var(--ink)" }}
      >
        <span aria-hidden className="not-italic font-normal" style={{ color: "var(--ink-3)" }}>
          ◆
        </span>
        {buildingHighlights.heading}
      </h2>

      <ul className="mt-4 space-y-2.5">
        {buildingHighlights.items.map((item) => (
          <li
            key={item.emphasis}
            className="flex gap-2 text-[15px] leading-7 lowercase md:text-base md:leading-8"
            style={{ color: "var(--ink-2)" }}
          >
            <span
              aria-hidden
              className="shrink-0 select-none"
              style={{ color: "var(--ink-3)" }}
            >
              ↳
            </span>
            <span>
              {item.before}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-[3px] decoration-[var(--border-2)] transition-opacity hover:opacity-70"
                style={{ color: "var(--ink)" }}
              >
                {item.emphasis}
              </a>
              {item.after}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
