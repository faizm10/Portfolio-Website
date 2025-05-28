import { getBlogPosts, getPost } from "@/data/blog"
import { DATA } from "@/data/resume"
import { formatDate } from "@/lib/utils"
import { getViews } from "@/data/page-views"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import ViewCounter from "@/components/view-counter"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug)

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata
  const ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const views = await getViews(post.slug)

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">{post.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.metadata.publishedAt)}</p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <ViewCounter slug={post.slug} initialViews={views} trackView={true} />
        </Suspense>
      </div>
      <article className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.source }}></article>
    </section>
  )
}
