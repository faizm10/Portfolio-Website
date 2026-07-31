"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { showcaseProjects, type ProjectType } from "@/app/data/projects";

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const title = project.resumeName ?? project.name;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.06 * index, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div
        className="overflow-hidden rounded-xl ring-1 transition duration-300 group-hover:-translate-y-0.5"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
          boxShadow: "0 8px 24px var(--accent-shadow)",
        }}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.banner}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div className="min-w-0 flex items-center gap-1.5">
          <h3
            className="truncate text-[15px] font-semibold tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            {title}
          </h3>
          <ArrowUpRight
            className="size-3.5 shrink-0 opacity-50 transition group-hover:opacity-90"
            style={{ color: "var(--ink)" }}
            aria-hidden
          />
        </div>
        {project.tags && project.tags.length > 0 && (
          <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md px-2 py-0.5 text-[11px] font-medium"
                style={{
                  backgroundColor: "var(--surface-alt)",
                  color: "var(--ink-3)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <p
        className="mt-1.5 text-[13px] leading-relaxed"
        style={{ color: "var(--ink-3)" }}
      >
        {project.desc}
        {project.stat ? ` · ${project.stat}` : ""}
      </p>
    </motion.a>
  );
}

export default function ProjectsGrid() {
  return (
    <section className="w-full" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        projects
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        {showcaseProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
