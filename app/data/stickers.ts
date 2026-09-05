/**
 * Homepage draggable stickers — edit labels, captions, assets, and desktop
 * starting positions here (not in DesktopStickers.tsx).
 */

export type StickerId = "soccer" | "claude" | "player" | "macbook" | "hack-the-north" | "plane";

export type Sticker = {
  id: StickerId;
  /** Accessible name for the control */
  label: string;
  /** Hover / focus caption */
  caption: string;
  src: string;
  width: number;
  ratio: number;
};

export const stickers: Sticker[] = [
  {
    id: "soccer",
    label: "2026 World Cup Trionda ball",
    caption: "trionda · world cup 2026",
    src: "/stickers/world-cup-2026-trionda.png",
    width: 150,
    ratio: 1,
  },
  {
    id: "claude",
    label: "Claude",
    caption: "a little help building things",
    src: "/stickers/claude.svg",
    width: 108,
    ratio: 1,
  },
  {
    id: "player",
    label: "Faiz playing soccer",
    caption: "me, away from the keyboard",
    src: "/stickers/faiz-soccer.png",
    width: 140,
    ratio: 604 / 977,
  },
  {
    id: "macbook",
    label: "MacBook",
    caption: "madness occurs",
    src: "/stickers/macbook.png",
    width: 200,
    ratio: 1.5,
  },
  {
    id: "hack-the-north",
    label: "Hack the North 2026 postcard",
    caption: "htn 2026",
    src: "/stickers/hack-the-north-2026.png",
    width: 190,
    ratio: 1,
  },
  {
    id: "plane",
    label: "Air Canada plane",
    caption: "sidequesting",
    src: "/stickers/air-canada.png",
    width: 220,
    ratio: 3.28,
  },
];

export type DesktopPlacement = {
  row: number;
  angle: number;
  side: "left" | "right";
};

/** Three aligned pairs, with the reading column reserved for content. */
export const desktopComposition: Record<StickerId, DesktopPlacement> = {
  player: { row: 0, angle: -4, side: "left" },
  "hack-the-north": { row: 0, angle: 4, side: "right" },
  macbook: { row: 1, angle: -5, side: "left" },
  soccer: { row: 1, angle: 5, side: "right" },
  plane: { row: 2, angle: -5, side: "left" },
  claude: { row: 2, angle: 5, side: "right" },
};
