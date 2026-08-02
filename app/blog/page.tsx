import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/posts";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: `blog · ${site.name}`,
  description: `notes and writing by ${site.nameFormal}`,
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return 0;
  });

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="text-sm lowercase transition-opacity hover:opacity-70"
          style={{ color: "var(--ink-2)" }}
        >
          ← home
        </Link>

        <h1
          className="mt-8 text-2xl font-semibold tracking-tight lowercase md:text-[1.75rem]"
          style={{ color: "var(--ink)" }}
        >
          blog
        </h1>
        <p
          className="mt-3 text-[15px] lowercase leading-7 md:text-base md:leading-8"
          style={{ color: "var(--ink-2)" }}
        >
          notes, reflections, and write-ups
        </p>

        <ul className="mt-10 flex flex-col gap-5">
          {sorted.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${post.slug}`}
                className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span
                  className="text-[15px] lowercase underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity group-hover:underline group-hover:opacity-70 md:text-base"
                  style={{ color: "var(--ink)" }}
                >
                  {post.title}
                </span>
                <span
                  className="shrink-0 text-[13px] lowercase sm:text-sm"
                  style={{ color: "var(--ink-3)" }}
                >
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
