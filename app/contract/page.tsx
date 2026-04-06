import type { Metadata } from "next";
import ContractPageClient from "./ContractPageClient";

export const metadata: Metadata = {
  title: "contract · faiz mustansar",
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

