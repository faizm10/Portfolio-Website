import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

type Kind = "flower" | "leaf" | "cloud" | "scribble" | "cup";

const shapes: Record<Kind, { viewBox: string; paths: string[] }> = {
  flower: {
    viewBox: "0 0 36 42",
    paths: [
      "M18.2 22.4c.4-5.8-3.2-9.4-7.6-8.6-3.6.6-5.4 4.2-4.2 7.8",
      "M18.4 22.2c4.8-3.6 9.8-2.4 10.8 2.4.8 3.8-1.8 6.8-5.6 7.2",
      "M18.1 22.6c-1.2-5.2 1.8-9.8 6.4-10.2 3.8-.4 6.2 3.2 5.2 6.8",
      "M18.2 23.4c-4.6-1.8-8.8 1.4-8.4 6.2.4 3.6 4 5.6 7.6 4.6",
      "M18.2 22.8c4.4 2.2 5.8 6.8 2.8 10.2-2.6 2.8-6.8 2.2-8.4-1.2",
      "M18.4 38.6c-.4-6.2.2-11.8.1-16.2",
    ],
  },
  leaf: {
    viewBox: "0 0 36 48",
    paths: [
      "M8.4 38.6c2.4-12.8 10.6-24.6 22.8-29.2-1.8 12.4-8.6 23.8-22.8 29.2z",
      "M12.2 34.4c4.8-6.6 10.2-12.8 16.6-17.4",
    ],
  },
  cloud: {
    viewBox: "0 0 56 28",
    paths: [
      "M12.6 19.4c-4.8.2-8.2-2.8-8.2-7.2 0-4.8 4.2-7.8 8.8-7.2 1.8-4.6 7.4-7.2 12.6-5.4 3.6-3.2 9.8-3.2 13.2.8 5.2-.8 10.4 2.8 10.6 8.2.2 5.4-4.6 9.2-10.2 9.2H14.2",
    ],
  },
  scribble: {
    viewBox: "0 0 48 24",
    paths: [
      "M3.2 14.6c4.8-6.4 10.2 4.8 15.6-2.2 5.2-6.6 9.8 5.4 16.2-1.6 4.6-5.1 8.8 3.8 12.4-2.4",
    ],
  },
  cup: {
    viewBox: "0 0 40 44",
    paths: [
      "M10.4 14.6h18.8l-2.2 18.4c-.4 3.6-3.2 6.2-6.8 6.2h-1.2c-3.6 0-6.4-2.6-6.8-6.2z",
      "M8.8 14.4h22.2",
      "M29.4 17.6c4.2.4 6.8 3.2 6.4 7.2-0.4 3.6-3.4 5.8-7.2 5.4",
      "M16.4 8.2c.6-2.8 2.2-4.6 4.6-4.8",
      "M22.8 8.6c.4-2.4 1.6-4.2 3.6-4.6",
    ],
  },
};

export default function SketchMark({
  kind,
  className,
}: {
  kind: Kind;
  className?: string;
}) {
  const shape = shapes[kind];
  return (
    <svg
      {...doodleProps}
      className={cn("sketch-mark", `mark-${kind}`, className)}
      viewBox={shape.viewBox}
    >
      {shape.paths.map((d) => (
        <path key={d} {...doodleStroke} d={d} />
      ))}
    </svg>
  );
}
