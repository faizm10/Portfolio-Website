"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { showcaseProjects, projectHref } from "@/app/data/projects";

/** A fixed pool: distance-sampled pointer input, at most one write per frame. */
export default function ProjectTrail() {
  const root = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const project = showcaseProjects[selected];

  useEffect(() => {
    const area = root.current;
    if (!area || !enabled) return;
    const media = window.matchMedia(
      "(min-width: 601px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const cards = Array.from(
      area.querySelectorAll<HTMLElement>(".trail-frame"),
    );
    const cursor = area.querySelector<HTMLElement>(".trail-cursor")!;
    const word = area.querySelector<HTMLElement>("h1 em")!;
    let bounds = area.getBoundingClientRect();
    let last: { x: number; y: number; time: number } | null = null;
    let point = { x: 0, y: 0, time: 0 };
    let frame = 0;
    let next = 0;
    const animations = new Map<HTMLElement, Animation>();
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = null;
      cursor.style.opacity = "0";
      word.style.transform = "";
    };
    const clear = () => {
      bounds = area.getBoundingClientRect();
      stop();
      animations.forEach((a) => a.cancel());
      animations.clear();
    };
    const paint = () => {
      frame = 0;
      const { x, y, time } = point;
      cursor.style.transform = `translate3d(${x + 16}px,${y + 16}px,0)`;
      cursor.style.opacity = "1";
      word.style.transform = `translate3d(${(x / bounds.width - 0.5) * 5}px,${(y / bounds.height - 0.5) * 3}px,0)`;
      if (!last) {
        last = point;
        return;
      }
      const dx = x - last.x,
        dy = y - last.y;
      if (Math.hypot(dx, dy) < 100 || time - last.time < 65) return;
      const speed = Math.min(
        Math.hypot(dx, dy) / Math.max(time - last.time, 1),
        2,
      );
      const rotation =
        Math.max(-11, Math.min(11, dx * 0.035 + dy * 0.02)) *
        (0.5 + speed * 0.4);
      const card = cards[next % cards.length];
      animations.get(card)?.cancel();
      const px = Math.max(110, Math.min(bounds.width - 110, x));
      const py = Math.max(130, Math.min(bounds.height - 100, y));
      card.style.left = `${px}px`;
      card.style.top = `${py}px`;
      // Bounded layer values: reorder the five nodes rather than grow the DOM.
      cards.forEach((c) => {
        c.style.zIndex = String(Math.max(0, Number(c.style.zIndex || 0) - 1));
      });
      card.style.zIndex = "5";
      const drift = Math.max(-22, Math.min(22, dx * 0.12));
      animations.set(
        card,
        card.animate(
          [
            {
              opacity: 0,
              transform: `translate(-50%,-40%) rotate(${rotation - 3}deg) scale(.84)`,
              offset: 0,
            },
            {
              opacity: 1,
              transform: `translate(-50%,-50%) rotate(${rotation}deg) scale(1)`,
              offset: 0.15,
            },
            {
              opacity: 1,
              transform: `translate(calc(-50% + ${drift}px),-54%) rotate(${rotation}deg) scale(1)`,
              offset: 0.65,
            },
            {
              opacity: 0,
              transform: `translate(calc(-50% + ${drift}px),-65%) rotate(${rotation + 2}deg) scale(.97)`,
              offset: 1,
            },
          ],
          {
            duration: 1700,
            easing: "cubic-bezier(.22,.61,.36,1)",
            fill: "none",
          },
        ),
      );
      next++;
      last = point;
    };
    const enter = () => {
      bounds = area.getBoundingClientRect();
      last = null;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      if ((event.target as HTMLElement).closest("a,button")) {
        stop();
        return;
      }
      point = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        time: performance.now(),
      };
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const visibility = () => {
      if (document.hidden) clear();
    };
    area.addEventListener("pointerenter", enter);
    area.addEventListener("pointermove", move, { passive: true });
    area.addEventListener("pointerleave", stop);
    window.addEventListener("scroll", clear, { passive: true });
    window.addEventListener("resize", clear);
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", clear);
    return () => {
      clear();
      area.removeEventListener("pointerenter", enter);
      area.removeEventListener("pointermove", move);
      area.removeEventListener("pointerleave", stop);
      window.removeEventListener("scroll", clear);
      window.removeEventListener("resize", clear);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", clear);
    };
  }, [enabled]);

  return (
    <section ref={root} className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>FAIZ MUSTANSAR</span>
        <span>SOFTWARE ENGINEER · TORONTO</span>
      </div>
      <h1 id="hero-title">
        A little curiosity.
        <br />
        Something <em>useful.</em>
      </h1>
      <div className="hero-bottom">
        <p>
          I build things for the internet.
          <br />
          Sometimes practical. Always personal.
        </p>
        <a href="#work" className="text-link">
          Explore my work <span>↓</span>
        </a>
      </div>
      <div className="hero-specimen">
        <Link
            href={projectHref(project)}
            aria-label={`Explore ${project.name}`}
          >
          <Image
            src={project.banner}
            alt={`${project.name} interface`}
            width={480}
            height={300}
            sizes="250px"
            priority
          />
          <span className="specimen-caption">
            {project.name} <span>↗</span>
          </span>
        </Link>
        <div className="specimen-controls">
          <span aria-live="polite">
            0{selected + 1} / 0{showcaseProjects.length}
          </span>
          <button
            onClick={() =>
              setSelected((selected + 1) % showcaseProjects.length)
            }
            aria-label="Next project snapshot"
          >
            Next snapshot →
          </button>
        </div>
      </div>
      <div className="hero-footnote">
        <span className="desktop-trail-hint">
          <span aria-hidden="true">✳</span> Move your cursor. Leave a little
          trail.
        </span>
        <span className="touch-trail-hint">
          A few things I’ve put into the world.
        </span>
        <button
          className="trail-toggle"
          aria-pressed={enabled}
          onClick={() => setEnabled(!enabled)}
        >
          Image trail {enabled ? "on" : "off"}
        </button>
      </div>
      <div className="trail-layer" aria-hidden="true">
        {showcaseProjects.map((p) => (
          <div className="trail-frame" key={p.slug}>
            <Image
              src={p.banner}
              alt=""
              width={440}
              height={280}
              sizes="220px"
              loading="eager"
            />
            <span>
              {p.name} <span>↗</span>
            </span>
          </div>
        ))}
        <span className="trail-cursor">PLAY</span>
      </div>
    </section>
  );
}
