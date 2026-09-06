import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SketchBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("sketch-badge", className)}>{children}</span>;
}
