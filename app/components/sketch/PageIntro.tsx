import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import HandwrittenNote from "./HandwrittenNote";
import DoodleArrow from "./DoodleArrow";
import TinyCharacter, { type CharacterPose } from "./TinyCharacter";

export default function PageIntro({
  eyebrow,
  title,
  note,
  children,
  character = "peek",
  className,
}: {
  eyebrow?: string;
  title: string;
  note?: string;
  children?: ReactNode;
  character?: CharacterPose;
  className?: string;
}) {
  return (
    <header className={cn("page-intro", className)}>
      {eyebrow ? (
        <p className="page-intro-eyebrow">
          {eyebrow}
          <span className="page-intro-rule" aria-hidden />
        </p>
      ) : null}
      <div className="page-intro-title-row">
        <h1>{title}</h1>
        <TinyCharacter pose={character} className="page-intro-character" />
      </div>
      {note ? (
        <HandwrittenNote className="page-intro-note" tilt="right">
          {note}
        </HandwrittenNote>
      ) : null}
      {children ? <div className="page-intro-copy">{children}</div> : null}
      <DoodleArrow className="page-intro-arrow" direction="down" wobble />
    </header>
  );
}
