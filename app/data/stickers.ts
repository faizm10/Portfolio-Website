/**
 * Homepage draggable stickers — edit labels, captions, assets, and sizes here.
 * Positions are randomized in DesktopStickers.tsx.
 */

export type StickerId =
  | "soccer"
  | "claude"
  | "player"
  | "spezial"
  | "macbook"
  | "world-cup-moment"
  | "hack-the-north"
  | "plane"
  | "drink"
  | "adidas"
  | "controller"
  | "favorite-player";

export type Sticker = {
  id: StickerId;
  /** Accessible name for the control */
  label: string;
  /** Hover / focus caption */
  caption: string;
  src: string;
  width: number;
  ratio: number;
  /** Serve the original when image conversion is unsuitable for an asset. */
  unoptimized?: boolean;
};

export const stickers: Sticker[] = [
  {
    id: "favorite-player",
    label: "Favorite football player",
    caption: "my fav player besides messi",
    src: "/stickers/favorite-player.png",
    width: 150,
    ratio: 479 / 640,
    unoptimized: true,
  },
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
    id: "spezial",
    label: "Adidas Argentina Handball Spezial",
    caption: "current kicks",
    src: "/stickers/argentina-spezial.png",
    width: 220,
    ratio: 1,
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
    id: "world-cup-moment",
    label: "World Cup trophy moment",
    caption: "a world cup moment",
    src: "/stickers/world-cup-moment.png",
    width: 180,
    ratio: 500 / 667,
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
  {
    id: "drink",
    label: "Coconut Mango Boom drink",
    caption: "coconut mango boom",
    src: "/stickers/coconut-mango.png",
    width: 150,
    ratio: 941 / 1672,
  },
  {
    id: "adidas",
    label: "Adidas Originals",
    caption: "fav brand",
    src: "/stickers/adidas-originals.svg",
    width: 135,
    ratio: 1,
  },
  {
    id: "controller",
    label: "PlayStation controller",
    caption: "fifa night",
    src: "/stickers/fifa-controller.png",
    width: 190,
    ratio: 1.45,
  },
];
