import { notFound } from "next/navigation";
import SlugPageClient from "./SlugPageClient";
import { SLUGS } from "./slugs";

const isValidSlug = (value: string): value is (typeof SLUGS)[number] =>
  (SLUGS as readonly string[]).includes(value);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
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

  return <SlugPageClient slug={slug} />;
}
