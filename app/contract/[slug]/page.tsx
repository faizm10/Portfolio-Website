import type { Metadata } from "next";
import ContractSlugPageClient from "./pageClient";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: site.pageTitles.contract,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

// GitHub Pages static export cannot pre-render unknown mentee slugs.
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return [];
}

export default async function ContractSlugPage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;
  return <ContractSlugPageClient slug={slug ?? ""} />;
}

