import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

export type CharacterPose =
  | "sit"
  | "wave"
  | "peek"
  | "walk"
  | "sleep"
  | "point";

const poses: Record<CharacterPose, { viewBox: string; paths: string[]; dots?: string[] }> =
  {
    sit: {
      viewBox: "0 0 64 64",
      paths: [
        "M22.4 41.2c-1.2 6.4 1.1 11.8 4.8 14.2",
        "M39.8 41.6c.8 6.1 3.9 11.2 8.4 13.4",
        "M18.6 28.2c2.4-9.8 10.2-16.4 19.8-15.2 9.2 1.1 14.6 9.4 13.2 18.8-1.6 10.4-11.8 16.2-21.4 14.4-7.8-1.4-13.2-8.6-11.6-18z",
        "M16.2 32.4c-4.2 1.2-7.4 4.8-7.8 8.6",
        "M48.8 31.8c3.8.4 7.1 3.2 8.4 6.8",
      ],
      dots: ["M28.8 26.4h.1", "M37.4 25.8h.1"],
    },
    wave: {
      viewBox: "0 0 64 72",
      paths: [
        "M24.2 44.6c-1.4 8.2.6 16.4 5.2 19.8",
        "M38.6 45.1c1.2 7.8 4.6 15.6 9.8 18.6",
        "M20.4 29.6c1.8-10.6 10.8-17.8 21.2-16.4 9.6 1.3 15.4 10.2 13.6 19.8-1.8 10.2-12 16.4-21.6 14.6-8.2-1.6-14.6-8.8-13.2-18z",
        "M18.8 33.2c-5.2 2.1-8.6 6.8-8.2 11.2",
        "M50.2 18.4c2.4-5.8 7.2-9.4 12.2-9.8",
        "M50.6 22.6c4.8-2.2 8.8-1.4 11.6 1.6",
      ],
      dots: ["M31.2 26.8h.1", "M39.8 26.1h.1"],
    },
    peek: {
      viewBox: "0 0 64 40",
      paths: [
        "M12.4 36.8c3.2-14.6 14.8-24.2 28.6-21.8 9.8 1.7 16.8 9.8 16.2 19.4",
        "M8.6 34.2c-3.4-1.2-6.2.8-6.8 4.2",
        "M57.8 33.6c3.2-.4 6.4 1.8 6.6 4.8",
      ],
      dots: ["M26.8 22.4h.1", "M35.6 21.6h.1"],
    },
    walk: {
      viewBox: "0 0 72 72",
      paths: [
        "M28.4 46.2c-3.8 7.4-4.2 14.8-1.2 18.6",
        "M42.2 46.8c4.6 6.2 10.8 11.4 16.8 12.2",
        "M22.2 30.4c2.1-10.8 11.6-18.2 22.4-16.6 9.8 1.4 15.8 10.8 13.8 20.4-2 9.8-12.2 15.6-21.8 13.8-8.4-1.6-15.8-8.4-14.4-17.6z",
        "M19.4 34.6c-5.8 3.4-8.2 8.8-6.4 13.2",
        "M52.6 32.2c5.2 1.6 8.8 5.4 9.6 10.2",
      ],
      dots: ["M33.6 26.8h.1", "M42.4 26.2h.1"],
    },
    sleep: {
      viewBox: "0 0 84 48",
      paths: [
        "M14.8 32.6c4.2-8.8 14.6-13.4 24.8-11.2 10.6 2.2 17.2 11.4 14.8 20.2-1.8 6.6-9.6 10.4-16.8 9.2-9.2-1.6-16.6-8.2-22.8-18.2z",
        "M8.6 28.4c-3.6 1.8-6.2 5.2-6 8.6",
        "M52.2 36.8c4.2 2.8 8.8 3.2 12.4 1.4",
        "M62.8 8.4c2.4-2.1 5.4-2.6 8.2-1.2",
        "M70.4 14.6c2.8-2.6 6.2-3.1 9.2-1.4",
        "M74.8 4.2c1.6-1.6 3.8-2.1 5.8-1.1",
      ],
      dots: ["M24.6 28.8h.1", "M32.8 27.4h.1"],
    },
    point: {
      viewBox: "0 0 80 68",
      paths: [
        "M22.8 43.6c-1.2 7.8 1.4 15.6 6.2 18.8",
        "M36.4 44.2c1.4 7.4 5.2 14.8 10.8 17.6",
        "M18.6 28.8c1.6-10.4 10.2-17.6 20.4-16.2 9.4 1.3 15.2 10 13.6 19.4-1.7 10-11.6 16.2-21.2 14.4-8.2-1.6-14.4-8.6-12.8-17.6z",
        "M16.8 33.2c-4.8 1.8-8.2 6.2-8 10.4",
        "M48.6 27.4c8.4-3.8 16.8-4.6 26.2-2.2",
        "M68.4 21.8c3.6 1.2 6.8 3.8 8.2 6.8",
      ],
      dots: ["M29.4 25.8h.1", "M37.8 25.2h.1"],
    },
  };

export default function TinyCharacter({
  pose = "sit",
  className,
}: {
  pose?: CharacterPose;
  className?: string;
}) {
  const character = poses[pose];

  return (
    <svg
      {...doodleProps}
      className={cn("tiny-character", `pose-${pose}`, className)}
      viewBox={character.viewBox}
    >
      {character.paths.map((d) => (
        <path key={d} {...doodleStroke} d={d} />
      ))}
      {character.dots?.map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function CharacterSit(props: { className?: string }) {
  return <TinyCharacter pose="sit" {...props} />;
}

export function CharacterWave(props: { className?: string }) {
  return <TinyCharacter pose="wave" {...props} />;
}

export function CharacterPeek(props: { className?: string }) {
  return <TinyCharacter pose="peek" {...props} />;
}

export function CharacterWalk(props: { className?: string }) {
  return <TinyCharacter pose="walk" {...props} />;
}

export function CharacterSleep(props: { className?: string }) {
  return <TinyCharacter pose="sleep" {...props} />;
}

export function CharacterPoint(props: { className?: string }) {
  return <TinyCharacter pose="point" {...props} />;
}
