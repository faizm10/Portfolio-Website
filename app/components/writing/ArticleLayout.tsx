import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Post } from '@/app/posts';
import { thoughtCategoryLabels } from '@/app/posts';
import { site } from '@/app/data/site';
import type { ArticleData } from '@/lib/writing';
import WritingShell from './WritingShell';
import ArticleNavigation from './ArticleNavigation';

export default function ArticleLayout({ post, data, children }: { post: Post; data: ArticleData; children: ReactNode }) {
  return (
    <WritingShell>
      <main id="main-content" className="journal-reader">
        <ArticleNavigation title={post.title} toc={data.toc} readingMinutes={data.readingMinutes} />
        <article className="journal-article">
          <header className="journal-article-header" id="overview">
            <Link href="/blog" className="journal-mobile-back"><ArrowLeft size={14} /> all thoughts</Link>
            <div className="journal-article-meta"><span className={`journal-category category-${post.category.toLowerCase().replace(' ', '-')}`}>{thoughtCategoryLabels[post.category]}</span><span>/</span>{post.publishedAt ? <time dateTime={post.publishedAt}>{post.date}</time> : <span>{post.date}</span>}<span>·</span><span>{data.readingMinutes} min read</span></div>
            <h1>{post.title.toLowerCase()}</h1>
            <p className="journal-deck">{post.description.toLowerCase()}</p>
            <div className="journal-byline"><span>{site.name}</span>{post.ongoing && <span className="journal-living-note"><span className="journal-dot" /> an ongoing collection</span>}</div>
          </header>
          <div className={`journal-prose journal-content-${post.slug}`} id="article-body">{children}</div>
        </article>
      </main>
    </WritingShell>
  );
}
