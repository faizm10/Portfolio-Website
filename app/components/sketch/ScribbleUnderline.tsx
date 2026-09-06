import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

export default function ScribbleUnderline({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      {...doodleProps}
      className={cn("scribble-underline", className)}
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
    >
      <path
        {...doodleStroke}
        d="M2.4 7.2c12.8-3.4 26.2-4.2 39.6-3.1 14.2 1.2 28.1 3.8 42.4 3.2 11.2-.5 22.6-2.8 33.2-1.4"
      />
    </svg>
  );
}
