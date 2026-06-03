"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntroStore } from "./store/zustand";
import useModifierKey from "./components/ModifierKey";
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline, IoImagesOutline } from "react-icons/io5";
import { posts } from "./posts";
import { showcaseProjects } from "./projects";
import { credlyBadges } from "./resume/data";
import GitHubContributionsCalendar from "./components/GitHubContributionsCalendar";

function InlineOrgLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}) {
  const linkClass =
    "underline underline-offset-2 decoration-[var(--ink-3)] transition-opacity hover:opacity-75";
  const content = (
    <>
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        className="mr-0.5 inline-block size-5 align-text-bottom object-contain"
        aria-hidden
      />
      {label}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {content}
      </a>
    );
  }

  return <Link href={href} className={linkClass}>{content}</Link>;
}

const experiences = [
  {
    title: "shopify",
    role: "swe intern",
    icon: "/exp/shopify-logo.png",
  },
  {
    title: "tangerine",
    role: "swe intern",
    icon: "/exp/tangerine.jpeg",
  },
  // {
  //   title: "university of guelph",
  //   role: "teaching assistant — spmt1120 (sports)",
  //   icon: "/exp/uog.png",
  // },
  { title: "td bank", role: "swe intern", icon: "/exp/td-logo.jpeg" },
  // {
  //   title: "hackcanada",
  //   role: "vp of tech",
  //   icon: "/exp/hackcanadaLogo.png",
  // },
  // {
  //   title: "brown & beatty ai",
  //   role: "software engineer intern",
  //   icon: "/exp/bbai.png",
  // },
  
  // {
  //   title: "university of guelph",
  //   role: "full stack developer",
  //   icon: "/exp/uog.png",
  // },
  // {
  //   title: "university of guelph",
  //   role: "teaching assistant — mcs2000 & mcs2020 (business) · 3x terms",
  //   icon: "/exp/uog.png",
  // },
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

  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    setIsMac(
      navigator.platform.toLowerCase().includes("mac") ||
        navigator.userAgent.toLowerCase().includes("mac"),
    );
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center transition-opacity duration-800 ${
          isLoaded
            ? "pointer-events-none invisible opacity-0"
            : "visible opacity-100"
        }`}
        style={{ backgroundColor: "var(--canvas)" }}
        aria-hidden={isLoaded}
      >
        <p
          className="text-sm italic tracking-wide font-[family-name:var(--font-newsreader)]"
          style={{ color: "var(--accent)" }}
        >
          building and shipping
        </p>
      </div>

      <div className="relative min-h-screen w-full" style={{ backgroundColor: "var(--canvas)" }}>
        <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
         {/* header */}
          <header>
            <div className="flex items-center justify-between gap-4">
              <h1
                className="font-[family-name:var(--font-newsreader)] text-3xl font-[500] tracking-tight md:text-4xl"
                style={{ color: "var(--ink)" }}
              >
                faiz mustansar
              </h1>
              <div className="flex shrink-0 items-center gap-4">
              {!isMobile && (
                <button
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-command-palette"))
                  }
                  className="rounded px-2.5 py-1 text-xs transition"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--surface-alt)",
                    color: "var(--ink-2)",
                  }}
                >
                  <kbd className={isModifierPressed ? "opacity-40" : ""}>
                    {isMac ? "⌘" : "ctrl"}
                  </kbd>
                  +<kbd>k</kbd>
                </button>
              )}
              {[
                { href: "/photos", label: "Photos", Icon: IoImagesOutline, isLink: true },
                { href: "/resume", label: "Resume", Icon: IoDocumentTextOutline, isLink: true },
                { href: "https://www.linkedin.com/in/faizmustansar/", label: "LinkedIn", Icon: FaLinkedin },
                { href: "https://github.com/faizm10", label: "GitHub", Icon: FaGithub },
                { href: "https://www.instagram.com/faizm.30/", label: "Instagram", Icon: FaInstagram },
                { href: "https://x.com/_faizm", label: "Twitter", Icon: FaTwitter },
              ].map(({ href, label, Icon, isLink }) =>
                isLink ? (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="transition-colors"
                    style={{ color: "var(--ink-3)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--ink-3)")
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-colors"
                    style={{ color: "var(--ink-3)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--ink-3)")
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ),
              )}
              </div>
            </div>

            <ul
              className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-[var(--ink-3)]"
              style={{ color: "var(--ink-2)" }}
            >
              <li>
                <span className="inline md:whitespace-nowrap">
                  i study cs @
                  <InlineOrgLink
                    href="https://www.uoguelph.ca/"
                    icon="/exp/uog.png"
                    label="university of guelph"
                    external
                  />
                  , 3x terms @{" "}
                  <InlineOrgLink
                    href="/uwreflection"
                    icon="/uw.png"
                    label="university of waterloo"
                  />
                </span>
              </li>
              <li>
                incoming swe intern @{" "}
                <InlineOrgLink
                  href="https://www.shopify.com/ca"
                  icon="/exp/shopify-logo.png"
                  label="shopify"
                  external
                />
                <ul className="mt-1.5 list-[circle] space-y-1.5 pl-5 marker:text-[var(--ink-3)]">
                  <li>
                    swe intern @{" "}
                    <InlineOrgLink
                      href="https://www.tangerine.ca/en/personal"
                      icon="/exp/tangerine.jpeg"
                      label="tangerine"
                      external
                    />
                    
                  </li>
                  <li>
                    swe intern @{" "}
                    <InlineOrgLink
                      href="https://www.td.com/ca/en/personal-banking"
                      icon="/exp/td-logo.jpeg"
                      label="td bank"
                      external
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </header>

          <GitHubContributionsCalendar />

          {/* Experience */}
          <section className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--ink-3)" }}>
              what i&apos;ve been up to
            </h2>
            <ul className="mt-5 space-y-4">
              {experiences.map((exp, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div
                    className="h-12 w-12 shrink-0 overflow-hidden rounded ring-1 ring-[var(--border)]"
                    style={{ backgroundColor: "var(--surface-alt)" }}
                  >
                    {exp.icon && (
                      <Image
                        src={exp.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium leading-tight" style={{ color: "var(--ink)" }}>{exp.title}</p>
                    <p className="text-sm" style={{ color: "var(--ink-3)" }}>{exp.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>


          {/* Projects */}
          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--ink-3)" }}>
              some projects i built
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {showcaseProjects.slice(0, 6).map((project) => (
                <Link key={project.slug} href={`/${project.slug}`} className="group block h-full">
                  <div
                    className="flex h-full flex-col overflow-hidden rounded transition-all"
                    style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border-2)";
                      el.style.boxShadow = "0 2px 12px var(--accent-shadow)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="relative aspect-video w-full" style={{ backgroundColor: "var(--surface-alt)" }}>
                      <Image src={project.banner} alt={project.name} fill
                        sizes="(max-width: 640px) 100vw, 50vw" className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-[family-name:var(--font-newsreader)] font-[500]"
                          style={{ color: "var(--ink)" }}>
                          {project.name}
                        </span>
                        {project.year && (
                          <span className="text-xs" style={{ color: "var(--ink-3)" }}>{project.year}</span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-[1.45]" style={{ color: "var(--ink-2)" }}>
                        {project.desc}{project.stat ? `. ${project.stat}` : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <a href="https://github.com/faizm10" target="_blank" rel="noopener noreferrer"
                className="text-sm hover:underline" style={{ color: "var(--accent)" }}>
                view more on github →
              </a>
            </div>
          </section>

          {/* Blogs */}
          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--ink-3)" }}>
              latest blogs
            </h2>
            <ul className="mt-5" style={{ borderTop: "1px solid var(--border)" }}>
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="flex items-center justify-between gap-4 py-2.5"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <Link href={`/${post.slug}`} className="hover:underline underline-offset-2 transition-colors"
                    style={{ color: "var(--ink)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Certifications */}
          {/* <section className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--ink-3)" }}>
              certifications
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {credlyBadges.map((badge) => (
                <li key={badge.id}>
                  <a
                    href={`https://www.credly.com/badges/${badge.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition"
                    style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px var(--accent-shadow)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Image
                      src={badge.imageUrl}
                      alt={badge.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 object-contain"
                    />
                    <div>
                      <p className="font-medium" style={{ color: "var(--ink)" }}>{badge.name}</p>
                      <p className="text-xs" style={{ color: "var(--ink-3)" }}>{badge.issuer} · {badge.issued}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section> */}
        </main>
      </div>
    </>
  );
}
