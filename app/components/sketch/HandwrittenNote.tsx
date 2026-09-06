import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tilt = "left" | "right" | "none";

const tilts: Record<Tilt, string> = {
  left: "-2deg",
  right: "2deg",
  none: "0deg",
};

export default function HandwrittenNote({
  children,
  className,
  tilt = "left",
  as: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  tilt?: Tilt;
  as?: "p" | "span" | "em";
}) {
  return (
    <Tag
      className={cn("hand-note", className)}
      style={{ "--hand-tilt": tilts[tilt] } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
