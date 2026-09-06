import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

export default function PlayfulDivider({ className }: { className?: string }) {
  return (
    <svg
      {...doodleProps}
      className={cn("playful-divider", className)}
      viewBox="0 0 280 18"
      preserveAspectRatio="none"
    >
      <path
        {...doodleStroke}
        d="M2 9.4c18.4-3.8 36.2 3.2 54.6 1.6 16.8-1.4 32.4-6.2 49.2-4.8 18.6 1.5 35.8 6.4 54.4 4.6 21.2-2 41.6-7.4 62.8-5.2 18.4 1.9 36.8 5.8 54.2 2.4"
      />
    </svg>
  );
}
