import type { Metadata } from 'next';
import { site } from '@/app/data/site';
import { posts } from '@/app/posts';
import { showcaseProjects } from '@/app/data/projects';
import ProjectStory from '@/app/components/ProjectStory';
import ArticleLayout from '@/app/components/writing/ArticleLayout';
import CourseStoryLayout from '@/app/components/writing/CourseStoryLayout';
import { getArticle } from '@/lib/writing';
import { notFound } from 'next/navigation';
import { SLUGS } from './slugs';

export const dynamicParams = false;
export function generateStaticParams() { return SLUGS.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = showcaseProjects.find((project) => project.slug === slug);
  const post = posts.find((post) => post.slug === slug);
  if (!project && !post) notFound();
  const title = `${post?.title ?? project?.name} · ${site.name}`;
  const description = post?.description ?? project?.desc;
  const image = post?.image ?? project?.banner;
  return {
    title, description,
    alternates: { canonical: `${site.url}/${slug}` },
    openGraph: {
      title, description, url: `${site.url}/${slug}`, type: post ? 'article' : 'website',
      ...(post ? { authors: [site.nameFormal], publishedTime: post.publishedAt } : {}),
      images: image ? [{ url: image }] : [],
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description, images: image ? [image] : [] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  const project = showcaseProjects.find((project) => project.slug === slug);
  const article = await getArticle(slug);
  const Content = article?.default;
  const post = posts.find((post) => post.slug === slug);
  if (project && !post) return (
    <ProjectStory project={project}>
      {Content && <div className="blog-content"><article className="prose max-w-none"><Content /></article></div>}
    </ProjectStory>
  );
  if (!post || !article || !Content) notFound();
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: post.title, description: post.description,
    url: `${site.url}/${post.slug}`,
    author: { '@type': 'Person', name: site.nameFormal, url: site.url },
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
  };
  const Layout = post.slug === 'uoguelphcourses' ? CourseStoryLayout : ArticleLayout;
  return (
    <Layout post={post} data={article.articleData}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <Content />
    </Layout>
  );
}
