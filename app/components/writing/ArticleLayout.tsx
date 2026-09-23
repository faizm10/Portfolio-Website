import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Post } from '@/app/posts';
import type { ArticleData } from '@/lib/writing';

export default function ArticleLayout({ post, children }: { post: Post; data: ArticleData; children: ReactNode }) {
  return (
    <main id="main-content" className="portfolio thought-article">
      <article>
        <header className="thought-article-header" id="overview">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>

        <div className={`journal-prose thought-article-body journal-content-${post.slug}`} id="article-body">
          {children}
        </div>
      </article>
      <Link href="/blog" className="thought-article-end">← all thoughts</Link>
    </main>
  );
}
