import type { Metadata } from "next";
import SketchClient from "./SketchClient";

export const metadata: Metadata = {
  title: "sketch studio",
  robots: { index: false, follow: false },
};

export default function SketchPage() {
  return <SketchClient />;
}
