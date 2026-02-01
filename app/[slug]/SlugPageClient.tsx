"use client";

import { useRef, useEffect, type ComponentType, type ReactNode } from "react";
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
import Echolag from "./mdx/echolag.mdx";
import Octree from "./mdx/octree.mdx";
import UoGReflection from "./mdx/uogreflection.mdx";
import Footy from "./mdx/footy.mdx";
import TdBank from "./mdx/tdbank.mdx";
import Hackathons from "./mdx/hackathons.mdx";
const MDX_MAP: Record<string, ComponentType> = {
  uwreflection: UWReflection,
  flowboard: Flowboard,
  uoguelphcourses: Uoguelphcourses,
  "photography-101": Photography101,
  arcki: Arcki,
  octree: Octree,
  echolag: Echolag,
  uogreflection: UoGReflection,
  footy: Footy,
  tdbank: TdBank,
  hackathons: Hackathons,
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
    <div className="min-h-screen w-full overflow-x-hidden bg-white px-6 py-12">
      <div className="mx-auto max-w-xl blog-content">
        <button
          onClick={() => router.push("/")}
          className="mb-8 text-sm text-neutral-600 hover:underline"
        >
          ← back
        </button>
        <article
          className="prose prose-neutral max-w-none text-left text-neutral-800 prose-headings:font-semibold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-neutral-800 prose-a:underline"
          style={{
            ["--tw-prose-body" as any]: "rgb(55 65 81)",
            ["--tw-prose-headings" as any]: "rgb(17 24 39)",
            ["--tw-prose-links" as any]: "rgb(31 41 55)",
          }}
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
