import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function FloatingDoodle({
  children,
  className,
  delay = "0s",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <span
      className={cn("floating-doodle", className)}
      style={{ animationDelay: delay }}
    >
      {children}
    </span>
  );
}
