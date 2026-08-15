"use client";

import { useRef, useEffect, type ComponentType, type ReactNode } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { MDXProvider } from "@mdx-js/react";
import { posts } from "@/app/posts";
import "./codeblocks.css";
import Uoguelphcourses from "./mdx/uoguelphcourses.mdx";
import UWReflection from "./mdx/uw-reflection.mdx";
import Arcki from "./mdx/arcki.mdx";
import TransitFlow from "./mdx/transit-flow.mdx";
import Octree from "./mdx/octree.mdx";
import UoGReflection from "./mdx/uogreflection.mdx";
import Footy from "./mdx/footy.mdx";
import Hackathons from "./mdx/hackathons.mdx";
import SoccerStats from "./mdx/soccer-stats.mdx";
import Jachacks from "./mdx/jachacks.mdx";
import hc26 from "./mdx/hc26.mdx";

const MDX_MAP: Record<string, ComponentType> = {
  uwreflection: UWReflection,
  uoguelphcourses: Uoguelphcourses,
  arcki: Arcki,
  "transit-flow": TransitFlow,
  octree: Octree,
  uogreflection: UoGReflection,
  footy: Footy,
  hackathons: Hackathons,
  "soccer-stats": SoccerStats,
  jachacks: Jachacks,
  hc26: hc26,
};

export default function SlugPageClient({ slug }: { slug: string }) {
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const Post = MDX_MAP[slug];
  const isBlogPost = posts.some((p) => p.slug === slug);

  useEffect(() => {
    (async () => {
      const prism = await import("prismjs");
      await import("prismjs/plugins/line-numbers/prism-line-numbers");
      await import("prismjs/components/prism-kotlin");
      await import("prismjs/components/prism-typescript");
      await import("prismjs/components/prism-python");
      await import("prismjs/components/prism-json");
      await import("prismjs/components/prism-yaml");
      await import("prismjs/components/prism-bash");
      prism.highlightAll();
    })();
  }, []);

  if (!Post) {
    return null;
  }

  /** full-bleed MDX layouts use their own typography; `prose` here can emit invalid nested `<p>` */
  const skipArticleProse = slug === "jachacks";

  const components = {
    a: ({ href, children }: { href: string; children: ReactNode }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    ScrollButtonTop: ({ children }: { children: ReactNode }) => (
      <button
        onClick={() =>
          bottomRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white/20 cursor-pointer font-bold hover:bg-white/25 p-2 transition delay-200 duration-300 ease-in-out rounded-2xl my-5"
      >
        {children}
      </button>
    ),
    ScrollButtonBottom: ({ children }: { children: ReactNode }) => (
      <button
        onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}
        className="bg-white/20 cursor-pointer font-bold hover:bg-white/25 p-2 transition delay-200 duration-300 ease-in-out rounded-2xl my-5"
      >
        {children}
      </button>
    ),
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden px-6 py-12" style={{ backgroundColor: "var(--canvas)" }}>
      <div className="mx-auto max-w-xl blog-content">
        <div className="mb-8">
          <button
            onClick={() => router.push(isBlogPost ? "/blog" : "/")}
            className="text-sm hover:underline"
            style={{ color: "var(--ink-2)" }}
          >
            {isBlogPost ? "← blog" : "← back"}
          </button>
        </div>
        <article
          className={clsx(
            "max-w-none text-left",
            !skipArticleProse && "prose"
          )}
        >
          <div ref={topRef} />
          <MDXProvider components={components}>
            <Post />
          </MDXProvider>
          <div ref={bottomRef} />
        </article>
      </div>
    </div>
  );
}
