import type { Metadata } from "next";
import { site } from "@/app/data/site";
import { posts } from "@/app/posts";
import { showcaseProjects } from "@/app/data/projects";
import ProjectStory from "@/app/components/ProjectStory";
import { notFound } from "next/navigation";
import SlugPageClient from "./SlugPageClient";
import { SLUGS } from "./slugs";

const isValidSlug = (value: string): value is (typeof SLUGS)[number] =>
  (SLUGS as readonly string[]).includes(value);

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = showcaseProjects.find((project) => project.slug === slug);
  const post = posts.find((post) => post.slug === slug);
  return {
    title: `${project?.name ?? post?.title ?? slug} · ${site.name}`,
    description: project?.desc,
    alternates: { canonical: `${site.url}/${slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const project = showcaseProjects.find((project) => project.slug === slug);
  if (project)
    return (
      <ProjectStory project={project}>
        <SlugPageClient slug={slug} />
      </ProjectStory>
    );
  return (
    <div id="main-content" className="editorial-article">
      <SlugPageClient slug={slug} />
    </div>
  );
}
