"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { showcaseProjects, projectHref } from "@/app/data/projects";

export default function WorkIndex() {
  const root = useRef<HTMLElement>(null);
  const floating = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const area = root.current;
    const preview = floating.current;
    if (!area || !preview) return;
    const media = window.matchMedia(
      "(min-width: 1300px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let current = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };
    let visible = false;
    let activeIndex: number | null = null;
    const step = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      const rotation = Math.max(
        -4,
        Math.min(4, (target.y - current.y) * 0.045),
      );
      preview.style.transform = `translate3d(${current.x}px,${current.y}px,0) rotate(${rotation}deg)`;
      if (
        visible &&
        Math.hypot(target.x - current.x, target.y - current.y) > 0.2
      )
        frame = requestAnimationFrame(step);
      else frame = 0;
    };
    const hide = () => {
      visible = false;
      if (activeIndex !== null) {
        activeIndex = null;
        setActive(null);
      }
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const move = (e: PointerEvent) => {
      if (!media.matches || e.pointerType !== "mouse") {
        hide();
        return;
      }
      const row = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-project]",
      );
      if (!row) {
        hide();
        return;
      }
      // Keep previews in the outer margin, clear of the centered reading column.
      target = {
        x:
          Math.min(window.innerWidth - 390, area.getBoundingClientRect().right + 24) +
          (e.clientX / window.innerWidth - 0.5) * 18,
        y: Math.max(20, Math.min(window.innerHeight - 280, e.clientY - 120)),
      };
      if (!visible) current = { ...target };
      visible = true;
      const index = Number(row.dataset.project);
      if (index !== activeIndex) {
        activeIndex = index;
        setActive(index);
      }
      if (!frame) frame = requestAnimationFrame(step);
    };
    area.addEventListener("pointermove", move, { passive: true });
    area.addEventListener("pointerleave", hide);
    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("resize", hide);
    media.addEventListener("change", hide);
    return () => {
      hide();
      area.removeEventListener("pointermove", move);
      area.removeEventListener("pointerleave", hide);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
      media.removeEventListener("change", hide);
    };
  }, []);

  return (
    <section ref={root} id="work" className="section-block work-index">
      <div className="section-heading">
        <h2>Selected work</h2>
        <span>01 — PRODUCTS & EXPLORATIONS</span>
      </div>
      {showcaseProjects.map((project, index) => (
        <div className="project-entry" key={project.slug} data-project={index}>
          <Link
            href={projectHref(project)}
            className="project-row"
            draggable={false}
          >
            <span className="row-number">0{index + 1}</span>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <span className="project-stat">{project.stat}</span>
            </div>
            <span className="project-category">
              {project.tags?.join(" / ")}
            </span>
            <span className="row-arrow" aria-hidden="true">
              ↗
            </span>
            <div className="project-touch-image">
              <Image
                src={project.banner}
                alt={`${project.name} preview`}
                width={700}
                height={440}
                sizes="(max-width:552px) 85vw, 472px"
              />
            </div>
          </Link>
          <div className="project-external">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live site`}
            >
              Live site ↗
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source on GitHub`}
              >
                Source ↗
              </a>
            )}
          </div>
        </div>
      ))}
      <div
        ref={floating}
        className={`work-preview ${active !== null ? "is-visible" : ""}`}
        aria-hidden="true"
      >
        {showcaseProjects.map((p, index) => (
          <div
            key={p.slug}
            className={`work-preview-image ${active === index ? "is-active" : ""}`}
          >
            <Image
              src={p.banner}
              alt=""
              width={720}
              height={450}
              sizes="360px"
            />
            <span>
              {p.name}
              <span>VIEW ↗</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
