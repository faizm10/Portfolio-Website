import type { ComponentType } from 'react';
import { posts, type Post } from '@/app/posts';

export type TocEntry = { id: string; title: string; depth: number };
export type ArticleData = { toc: TocEntry[]; readingMinutes: number };
export type ArticleModule = {
  default: ComponentType;
  articleData: ArticleData;
  tableOfContents?: TocEntry[];
};

/** Imported only by server components. Each article remains its own module. */
const loaders: Record<string, () => Promise<ArticleModule>> = {
  'uwreflection': () => import('@/app/[slug]/mdx/uw-reflection.mdx'),
  'uogreflection': () => import('@/app/[slug]/mdx/uogreflection.mdx'),
  'fast-tracked-uni-career': () => import('@/app/[slug]/mdx/fast-tracked-uni-career.mdx'),
  'hackathons': () => import('@/app/[slug]/mdx/hackathons.mdx'),
  'jachacks': () => import('@/app/[slug]/mdx/jachacks.mdx'),
  'hc26': () => import('@/app/[slug]/mdx/hc26.mdx'),
  'footy': () => import('@/app/[slug]/mdx/footy.mdx'),
  'soccer-stats': () => import('@/app/[slug]/mdx/soccer-stats.mdx'),
  'arcki': () => import('@/app/[slug]/mdx/arcki.mdx'),
};

export async function getArticle(slug: string) {
  const loader = loaders[slug];
  if (!loader) return null;
  const article = await loader();
  return { ...article, articleData: { ...article.articleData, toc: article.tableOfContents ?? article.articleData.toc } };
}

export type WritingEntry = Post & { readingMinutes: number };
export async function getWritingEntries(): Promise<WritingEntry[]> {
  return Promise.all(posts.filter((post) => post.listed !== false).map(async (post) => {
    const article = await getArticle(post.slug);
    if (!article) throw new Error(`No MDX loader registered for ${post.slug}`);
    return { ...post, readingMinutes: article.articleData.readingMinutes };
  }));
}
