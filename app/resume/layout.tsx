import type { Metadata } from "next";
import { site } from "@/app/data/site";
export const metadata: Metadata = {
  alternates: { canonical: `${site.url}/resume` },
};
import type { ReactNode } from "react";
export default function PersonalPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="personal-page" id="main-content">
      {children}
    </div>
  );
}
