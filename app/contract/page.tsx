import type { Metadata } from "next";
import ContractPageClient from "./ContractPageClient";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: site.pageTitles.contract,
  description: "contract (unlisted)",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ContractPage() {
  return <ContractPageClient />;
}

