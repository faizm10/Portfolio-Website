"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntroStore } from "./store/zustand";
import useModifierKey from "./components/ModifierKey";
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoImagesOutline } from "react-icons/io5";
import { posts } from "./posts";
import { showcaseProjects } from "./projects";
import PageViewCounter from "./components/PageViewCounter";
import GitHubContributionsCalendar from "./components/GitHubContributionsCalendar";

const experiences = [
  {
    title: "tangerine (scotiabank)",
    role: "incoming swe intern",
    icon: "/exp/tangerine.jpeg",
  },
  { title: "td bank", role: "swe intern", icon: "/exp/td-logo.png" },
  {
    title: "hackcanada",
    role: "vp of tech",
    icon: "/exp/hackcanadaLogo.png",
  },
  {
    title: "brown & beatty ai",
    role: "software engineer intern",
    icon: "/exp/bbai.png",
  },
  {
    title: "octree",
    role: "co-founder + software engineer",
    icon: "/exp/octree.svg",
  },

  {
    title: "university of guelph",
    role: "full stack developer",
    icon: "/exp/uog.png",
  },
  {
    title: "university of guelph",
    role: "teaching assistant · 3x terms",
    icon: "/exp/uog.png",
  },
];

export default function Home() {
  const { hasPlayed, setHasPlayed } = useIntroStore();
  const initialHasPlayed =
    typeof window !== "undefined" &&
    Boolean(useIntroStore.getState?.().hasPlayed);
  const [isLoaded, setIsLoaded] = useState<boolean>(initialHasPlayed);
  const isModifierPressed = useModifierKey();

  useEffect(() => {
    if (hasPlayed) {
      setIsLoaded(true);
      return;
    }
    setHasPlayed();
    let progress = 10;
    const interval = setInterval(() => {
      progress += 20;
      if (progress >= 100) {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 250);
  }, [hasPlayed, setHasPlayed]);

  useEffect(() => {
    const noop = () => {};
    window.addEventListener("command-palette-opened", noop);
    return () => window.removeEventListener("command-palette-opened", noop);
  }, []);

  const isMac =
    typeof navigator !== "undefined" &&
    (navigator.platform.toLowerCase().includes("mac") ||
      navigator.userAgent.toLowerCase().includes("mac"));

  return (
    <>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-[#f5f4ed] transition-opacity duration-800 ${
          isLoaded
            ? "pointer-events-none invisible opacity-0"
            : "visible opacity-100"
        }`}
        aria-hidden={isLoaded}
      >
        <p className="font-[family-name:var(--font-newsreader)] text-[#1B365D] text-sm italic tracking-wide">
          faiz mustansar
        </p>
      </div>

      <div className="relative min-h-screen w-full bg-[#f5f4ed]">
        <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          {/* Photography banner — ink blue */}
          <Link
            href="/photos"
            className="mb-8 flex items-center justify-between gap-3 rounded border border-[#1B365D]/20 bg-[#1B365D]/5 px-3.5 py-2.5 text-sm text-[#1B365D] transition hover:border-[#1B365D]/40 hover:bg-[#1B365D]/10"
          >
            <span className="leading-snug">check out my photography</span>
            <span className="shrink-0 opacity-70" aria-hidden>
              →
            </span>
          </Link>

          {/* Header: name left, socials right */}
          <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-[family-name:var(--font-newsreader)] text-3xl font-[500] tracking-tight text-[#201a10] md:text-4xl">
                faiz mustansar
              </h1>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5c5646]">
                incoming swe intern @{" "}
                <a
                  href="https://www.tangerine.ca/en/personal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B365D] underline underline-offset-2 hover:text-[#0e1f38]"
                >
                  tangerine (scotiabank)
                </a>{" "} · swe intern @{" "}
                <a
                  href="https://www.td.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B365D] underline underline-offset-2 hover:text-[#0e1f38]"
                >
                  td bank
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {!isMobile && (
                <button
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("open-command-palette"),
                    )
                  }
                  className="rounded border border-[#d4cfc0] bg-[#eceae2] px-2.5 py-1 text-xs text-[#5c5646] hover:border-[#b5ad9a]"
                >
                  <kbd className={isModifierPressed ? "opacity-40" : ""}>
                    {isMac ? "⌘" : "ctrl"}
                  </kbd>
                  +<kbd>k</kbd>
                </button>
              )}
              <Link
                href="/photos"
                className="text-[#8a8270] hover:text-[#1B365D] transition-colors"
                aria-label="Photos"
              >
                <IoImagesOutline className="h-5 w-5" />
              </Link>
              <a
                href="https://www.linkedin.com/in/faizmustansar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a8270] hover:text-[#1B365D] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/faizm10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a8270] hover:text-[#1B365D] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/faizm.30/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a8270] hover:text-[#1B365D] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/_faizm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a8270] hover:text-[#1B365D] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </header>

          <GitHubContributionsCalendar />

          {/* What I've been up to */}
          <section className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest text-[#8a8270]">
              what i&apos;ve been up to
            </h2>
            <ul className="mt-5 space-y-4">
              {experiences.map((exp, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded bg-[#e8e4d9] ring-1 ring-[#d4cfc0]">
                    {exp.icon ? (
                      <Image
                        src={exp.icon}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="font-medium text-[#201a10] leading-tight">
                      {exp.title}
                    </p>
                    <p className="text-sm text-[#8a8270]">{exp.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-widest text-[#8a8270]">
              some projects i built
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {showcaseProjects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded border border-[#d4cfc0] bg-[#f0efe7] transition-shadow group-hover:shadow-[0_2px_12px_rgba(27,54,93,0.08)] group-hover:border-[#b5ad9a]">
                    <div className="relative aspect-video w-full bg-[#e8e4d9]">
                      <Image
                        src={project.banner}
                        alt={project.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-[family-name:var(--font-newsreader)] font-[500] text-[#201a10]">
                          {project.name}
                        </span>
                        {project.year && (
                          <span className="text-xs text-[#8a8270]">
                            {project.year}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-[1.45] text-[#5c5646]">
                        {project.desc}{project.stat ? `. ${project.stat}` : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/faizm10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1B365D] hover:underline hover:text-[#0e1f38]"
              >
                view more on github →
              </a>
            </div>
          </section>

          {/* Latest blogs */}
          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-widest text-[#8a8270]">
              latest blogs
            </h2>
            <ul className="mt-5 divide-y divide-[#d4cfc0]">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="flex items-center justify-between gap-4 py-2.5"
                >
                  <Link
                    href={`/${post.slug}`}
                    className="text-[#201a10] hover:text-[#1B365D] hover:underline underline-offset-2"
                  >
                    {post.title}
                  </Link>
                  <PageViewCounter slug={post.slug} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
