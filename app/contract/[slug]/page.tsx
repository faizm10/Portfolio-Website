import type { Metadata } from "next";
import ContractSlugPageClient from "./pageClient";

export const metadata: Metadata = {
  title: "contract · faiz mustansar",
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

export default function ContractSlugPage({ params }: { params: any }) {
  return <ContractSlugPageClient slug={params?.slug ?? ""} />;
}

