import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/posts";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: `blog · ${site.name}`,
  description: `notes and writing by ${site.nameFormal}`,
};

export default function BlogPage() {
  const sorted = posts
    .filter((post) => post.slug !== "soccer-stats")
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return 0;
    });

  return (
    <main className="blog-index">
      <Link href="/" className="blog-back">
        ← home
      </Link>

      <p className="blog-quote">
        notes, reflections, and write-ups
      </p>

      <ul className="blog-list">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`} className="blog-row">
              {post.image ? (
                <span className="blog-thumb">
                  <Image
                    src={post.image}
                    alt=""
                    width={72}
                    height={72}
                    sizes="56px"
                  />
                </span>
              ) : (
                <span className="blog-thumb blog-thumb-empty" aria-hidden />
              )}
              <span className="blog-copy">
                <span className="blog-title">{post.title}</span>
                <span className="blog-date">{post.date}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
