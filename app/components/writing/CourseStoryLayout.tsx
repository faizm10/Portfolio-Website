import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Post } from '@/app/posts';
import type { ArticleData } from '@/lib/writing';

export default function CourseStoryLayout({ post, children }: { post: Post; data: ArticleData; children: ReactNode }) {
  return (
    <main id="main-content" className="portfolio course-story">
      <article>
        <header className="course-story-header">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <nav aria-label="Project links" className="course-story-links">
            <a href="https://uoguelph.courses" target="_blank" rel="noopener noreferrer">live site ↗</a>
          </nav>
        </header>
        <div className="course-story-body" id="article-body">{children}</div>
      </article>
      <Link href="/blog" className="course-story-end">← more thoughts</Link>
    </main>
  );
}
