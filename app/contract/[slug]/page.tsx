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

export default async function ContractSlugPage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;
  return <ContractSlugPageClient slug={slug ?? ""} />;
}

