"use client";

import { useRef, useEffect, type ComponentType, type ReactNode } from "react";
import PageViewCounter from "../components/PageViewCounter";
import { useRouter } from "next/navigation";
import { MDXProvider } from "@mdx-js/react";
import "./codeblocks.css";
// projects
import Flowboard from "./mdx/flowboard.mdx";
import Uoguelphcourses from "./mdx/uoguelphcourses.mdx";
// notes
import UWReflection from "./mdx/uw-reflection.mdx";
import Photography101 from "./mdx/photography-101.mdx";
import Arcki from "./mdx/arcki.mdx";
import UogWebring from "./mdx/uog-webring.mdx";
import TripLoom from "./mdx/triploom.mdx";
import Echolag from "./mdx/echolag.mdx";
import Octree from "./mdx/octree.mdx";
import Converge from "./mdx/converge.mdx";
import UoGReflection from "./mdx/uogreflection.mdx";
import Footy from "./mdx/footy.mdx";
import TdBank from "./mdx/tdbank.mdx";
import Hackathons from "./mdx/hackathons.mdx";
import SoccerStats from "./mdx/soccer-stats.mdx";
import CodeKeeper from "./mdx/code-keeper.mdx";
import TextAnxiety from "./mdx/text-anxiety.mdx";
import Htv from "./mdx/htv.mdx";
import hc26 from "./mdx/hc26.mdx"
import Terrahacks from "./mdx/terrahacks.mdx";
const MDX_MAP: Record<string, ComponentType> = {
  uwreflection: UWReflection,
  flowboard: Flowboard,
  uoguelphcourses: Uoguelphcourses,
  "photography-101": Photography101,
  arcki: Arcki,
  "uog-webring": UogWebring,
  triploom: TripLoom,
  octree: Octree,
  converge: Converge,
  echolag: Echolag,
  uogreflection: UoGReflection,
  footy: Footy,
  tdbank: TdBank,
  hackathons: Hackathons,
  "soccer-stats": SoccerStats,
  "code-keeper": CodeKeeper,
  "text-anxiety": TextAnxiety,
  htv: Htv,
  hc26: hc26,
  terrahacks: Terrahacks,
};

export default function SlugPageClient({ slug }: { slug: string }) {
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const Post = MDX_MAP[slug];

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
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-sm hover:underline"
            style={{ color: "var(--ink-2)" }}
          >
            ← back
          </button>
          <PageViewCounter slug={slug} />
        </div>
        <article className="prose max-w-none text-left">
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
