import type { Metadata } from "next";
import { site } from "@/app/data/site";
export const metadata: Metadata = {
  alternates: { canonical: `${site.url}/blog` },
};
import type { ReactNode } from "react";
export default function WritingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="writing-index" id="main-content">
      {children}
    </div>
  );
}
