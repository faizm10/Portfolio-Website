import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/app/data/site";
import { CharacterPeek } from "@/app/components/sketch/TinyCharacter";
import HandwrittenNote from "@/app/components/sketch/HandwrittenNote";

export const metadata: Metadata = {
  title: "not found",
  description: site.pageTitles.notFoundDescription,
};

export default function NotFound() {
  return (
    <div className="lost-page" id="main-content">
      <div>
        <CharacterPeek className="lost-character" />
        <p className="tabular-nums" aria-hidden>
          404
        </p>
        <h1>this page wandered off</h1>
        <HandwrittenNote tilt="right">maybe it went for a walk</HandwrittenNote>
        <p className="page-intro-copy mx-auto">
          the link may be wrong, or this page was removed.
        </p>
        <div className="mt-8">
          <Link href="/" className="sketch-cta">
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
