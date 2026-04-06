"use client";

import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";
import Link from "next/link";

import Contract from "./contract.mdx";
import { Highlighter } from "@/app/components/ui/highlighter";

function toneToColor(tone?: string) {
  switch (tone) {
    case "yellow":
      return "#FDE68A";
    case "green":
      return "#A7F3D0";
    case "blue":
      return "#BAE6FD";
    case "purple":
      return "#DDD6FE";
    case "pink":
      return "#FBCFE8";
    case "gray":
      return "#E5E7EB";
    default:
      return "#FDE68A";
  }
}

const mdxComponents = {
  HL: ({
    tone,
    children,
  }: {
    tone?: string;
    children: ReactNode;
  }) => (
    <Highlighter
      action="highlight"
      color={toneToColor(tone)}
      strokeWidth={1.5}
      iterations={2}
      padding={3}
    >
      <span className="text-neutral-900">{children}</span>
    </Highlighter>
  ),
  Tag: ({
    tone,
    children,
  }: {
    tone?: string;
    children: ReactNode;
  }) => (
    <span
      className="inline-flex items-center rounded-md px-1.5 py-[2px] text-[0.95em] leading-none text-neutral-900"
      style={{ backgroundColor: toneToColor(tone) }}
    >
      {children}
    </span>
  ),
  UL: ({ children }: { children: ReactNode }) => (
    <Highlighter
      action="underline"
      color="#FF9800"
      strokeWidth={2}
      iterations={2}
      padding={2}
      multiline={true}
    >
      {children}
    </Highlighter>
  ),
};

export default function ContractPageClient() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden px-6 py-12">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <Link href="/" className="text-sm text-neutral-600 hover:underline">
            ← back
          </Link>
        </div>

        <article
          className="prose prose-neutral max-w-none text-left text-neutral-800 prose-headings:font-semibold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-neutral-800 prose-a:underline"
          style={{
            ["--tw-prose-body" as any]: "rgb(55 65 81)",
            ["--tw-prose-headings" as any]: "rgb(17 24 39)",
            ["--tw-prose-links" as any]: "rgb(31 41 55)",
          }}
        >
          <MDXProvider components={mdxComponents as any}>
            <Contract />
          </MDXProvider>
        </article>
      </div>
    </div>
  );
}

