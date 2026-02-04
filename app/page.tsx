"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntroStore } from "./store/zustand";
import useModifierKey from "./components/ModifierKey";
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { posts } from "./posts";
import { showcaseProjects } from "./projects";

const experiences = [
  { title: "td bank", role: "swe intern", icon: "/exp/td-logo.png" },
  {
    title: "hackcanada",
    role: "frontend tech lead",
    icon: "/exp/hackcanadaLogo.png",
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
        className={`fixed inset-0 z-40 flex items-center justify-center bg-white transition-opacity duration-800 ${
          isLoaded
            ? "pointer-events-none invisible opacity-0"
            : "visible opacity-100"
        }`}
        aria-hidden={isLoaded}
      >
        <p className="text-neutral-800 text-sm md:text-base">
          destined to build
        </p>
      </div>

      <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-visible bg-white">
        <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          {/* Header: name left, socials right */}
          <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                faiz mustansar
              </h1>
              <p className="mt-1 text-sm text-neutral-600">
                swe intern @{" "}
                <a
                  href="https://www.td.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-900"
                >
                  td bank
                </a>{" "}
                · seeking fall &apos;26 intern/ft roles
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
                  className="rounded border border-neutral-300 bg-white px-2.5 py-1 text-xs text-neutral-600 hover:border-neutral-400"
                >
                  <kbd className={isModifierPressed ? "opacity-40" : ""}>
                    {isMac ? "⌘" : "ctrl"}
                  </kbd>
                  +<kbd>k</kbd>
                </button>
              )}
              <a
                href="https://www.linkedin.com/in/faizmustansar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/faizm10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/faizm.30/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/_faizm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </header>

          {/* What I've been up to */}
          <section className="mt-12">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
              what i&apos;ve been up to
            </h2>
            <ul className="mt-4 space-y-4">
              {experiences.map((exp, i) => (
                <li key={i} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-neutral-200">
                    {exp.icon ? (
                      <Image
                        src={exp.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {exp.title}
                    </p>
                    <p className="text-sm text-neutral-600">{exp.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Cool projects */}
          <section className="mt-14">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
              some projects i built
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {showcaseProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 shadow-sm transition-shadow group-hover:shadow-md">
                    <div className="relative aspect-video w-full bg-neutral-200">
                      <Image
                        src={project.banner}
                        alt={project.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold text-neutral-900">
                          {project.name}
                        </span>
                        {project.year && (
                          <span className="text-sm text-neutral-500">
                            {project.year}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Latest blogs */}
          <section className="mt-14">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
              latest blogs
            </h2>
            <ul className="mt-4 space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/${post.slug}`}
                    className="text-neutral-700 hover:underline"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
