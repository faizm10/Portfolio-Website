"use client";

import Image from "next/image";
import stickerCaptions from "@/app/data/sticker-captions.json";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type KeyboardEvent,
} from "react";

type Sticker = {
  id: keyof typeof stickerCaptions;
  label: string;
  src: string;
  width: number;
  ratio: number;
};
const stickers: Sticker[] = [
  {
    id: "soccer",
    label: "2026 World Cup Trionda ball",
    src: "/stickers/world-cup-2026-trionda.png",
    width: 150,
    ratio: 1,
  },
  {
    id: "claude",
    label: "Claude",
    src: "/stickers/claude.svg",
    width: 108,
    ratio: 1,
  },
  {
    id: "player",
    label: "Faiz playing soccer",
    src: "/stickers/faiz-soccer.png",
    width: 140,
    ratio: 604 / 977,
  },
  {
    id: "spezial",
    label: "Adidas Argentina Handball Spezial",
    src: "/stickers/argentina-spezial.png",
    width: 220,
    ratio: 1,
  },
  {
    id: "macbook",
    label: "MacBook",
    src: "/stickers/macbook.png",
    width: 200,
    ratio: 1.5,
  },
  {
    id: "world-cup-moment",
    label: "World Cup trophy moment",
    src: "/stickers/world-cup-moment.png",
    width: 180,
    ratio: 500 / 667,
  },
  {
    id: "stamp",
    label: "Guelph soccer postage stamp",
    src: "/stickers/guelph-soccer-stamp.png",
    width: 220,
    ratio: 1.245,
  },
  {
    id: "hack-the-north",
    label: "Hack the North 2026 postcard",
    src: "/stickers/hack-the-north-2026.png",
    width: 190,
    ratio: 1,
  },
  {
    id: "plane",
    label: "Air Canada plane",
    src: "/stickers/air-canada.png",
    width: 220,
    ratio: 3.28,
  },
  {
    id: "drink",
    label: "Coconut Mango Boom drink",
    src: "/stickers/coconut-mango.png",
    width: 150,
    ratio: 941 / 1672,
  },
  {
    id: "adidas",
    label: "Adidas Originals",
    src: "/stickers/adidas-originals.svg",
    width: 135,
    ratio: 1,
  },
  {
    id: "controller",
    label: "PlayStation controller",
    src: "/stickers/fifa-controller.png",
    width: 190,
    ratio: 1.45,
  },
];

type DesktopPlacement = {
  x: number;
  y: number;
  angle: number;
  anchor: "left" | "right" | "center";
};
// Reference composition at 1920px: side clusters frame the intro, with two
// smaller accents just above the project gallery.
const desktopComposition: Record<string, DesktopPlacement> = {
  "world-cup-moment": { x: 30, y: 30, angle: -7, anchor: "left" },
  macbook: { x: 275, y: 25, angle: -12, anchor: "left" },
  soccer: { x: 412, y: 145, angle: 8, anchor: "left" },
  player: { x: 250, y: 205, angle: 16, anchor: "left" },
  stamp: { x: 155, y: 500, angle: 6, anchor: "left" },
  drink: { x: 1218, y: 90, angle: 4, anchor: "right" },
  "hack-the-north": { x: 1395, y: 52, angle: 2, anchor: "right" },
  adidas: { x: 1350, y: 265, angle: 12, anchor: "right" },
  spezial: { x: 1475, y: 210, angle: 10, anchor: "right" },
  plane: { x: 620, y: 345, angle: -9, anchor: "center" },
  claude: { x: 968, y: 290, angle: 7, anchor: "center" },
  controller: { x: 1480, y: 500, angle: -10, anchor: "right" },
};
type Placement = {
  slot: number;
  horizontal: number;
  vertical: number;
  angle: number;
  desktop?: DesktopPlacement;
};
type Position = { x: number; y: number; width: number; compact: boolean };

function shuffledPlacements(): Placement[] {
  const slots = stickers.map((_, index) => index);
  for (let index = slots.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [slots[index], slots[other]] = [slots[other], slots[index]];
  }
  return slots.map((slot) => ({
    slot,
    horizontal: Math.random(),
    vertical: Math.random(),
    angle: Math.random() * 30 - 15,
  }));
}

function dimensions(sticker: Sticker) {
  const pageWidth = document.documentElement.clientWidth;
  const compact = window.innerWidth < 1280;
  const lane = Math.max(0, (pageWidth - 920) / 2);
  const compositionScale = Math.min(1, (pageWidth - 512) / 1408);
  const width = compact
    ? Math.min(88, Math.max(48, sticker.width * 0.42), 108 * sticker.ratio)
    : sticker.width * compositionScale;
  const footer = document.querySelector(".site-footer");
  const pageHeight = Math.max(
    window.innerHeight,
    footer ? footer.getBoundingClientRect().bottom + window.scrollY : document.documentElement.scrollHeight,
  );
  return {
    compact, lane, pageWidth, pageHeight, width, compositionScale,
    left: 24,
    right: Math.max(24, pageWidth - width - 24),
    bottom: Math.max(24, pageHeight - width / sticker.ratio - 40),
  };
}
function initialPosition(sticker: Sticker, placement: Placement): Position {
  const bounds = dimensions(sticker);
  if (!bounds.compact && placement.desktop) {
    const { x, y, anchor } = placement.desktop;
    const scale = bounds.compositionScale;
    const leftInset = Math.max(0, (bounds.pageWidth - 1920) / 2);
    const positionedX = anchor === "left"
      ? leftInset + x * scale
      : anchor === "right"
        ? bounds.pageWidth / 2 + 256 + (x - 1216) * scale
        : bounds.pageWidth / 2 + (x - 960) * scale;
    const safeX = sticker.id === "stamp"
      ? Math.min(positionedX, (bounds.pageWidth - 920) / 2 - bounds.width - 28)
      : sticker.id === "controller"
        ? Math.max(positionedX, (bounds.pageWidth + 920) / 2 + 28)
        : positionedX;
    return constrain(sticker, safeX, y);
  }
  const rows = bounds.compact ? stickers.length : Math.ceil(stickers.length / 2);
  const row = bounds.compact ? placement.slot : Math.floor(placement.slot / 2);
  const startY = bounds.compact ? 190 : 160;
  const rowHeight = Math.max(0, (bounds.pageHeight - startY - 180) / rows);
  const sideStart = placement.slot % 2 === 0 ? 24 : bounds.pageWidth - bounds.lane + 24;
  const laneSpace = Math.max(0, bounds.lane - bounds.width - 48);
  return constrain(
    sticker,
    bounds.compact
      ? bounds.left + placement.horizontal * (bounds.right - bounds.left)
      : sideStart + placement.horizontal * laneSpace,
    startY + row * rowHeight + placement.vertical * Math.max(0, rowHeight - bounds.width / sticker.ratio - 48),
  );
}
function constrain(sticker: Sticker, x: number, y: number): Position {
  const bounds = dimensions(sticker);
  return {
    x: Math.max(bounds.left, Math.min(bounds.right, x)),
    y: Math.max(24, Math.min(bounds.bottom, y)),
    width: bounds.width,
    compact: bounds.compact,
  };
}

function DraggableSticker({
  sticker,
  placement,
}: {
  sticker: Sticker;
  placement: Placement;
}) {
  const [position, setPosition] = useState<Position | null>(null);
  const [dragging, setDragging] = useState(false);
  const [captionDismissed, setCaptionDismissed] = useState(false);
  const drag = useRef<{
    pointer: number;
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    origin: Position;
  } | null>(null);
  const current = useRef<Position | null>(null);
  const moved = useRef(false);
  const pendingFrame = useRef(0);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    moved.current = false;
    const start = initialPosition(sticker, placement);
    current.current = start;
    setPosition(start);
    let previousWidth = window.innerWidth;
    const resize = () => {
      if (window.innerWidth === previousWidth) return;
      const crossedBreakpoint = (previousWidth < 1280) !== (window.innerWidth < 1280);
      previousWidth = window.innerWidth;
      drag.current = null;
      setDragging(false);
      cancelAnimationFrame(pendingFrame.current);
      const next = current.current && moved.current && !crossedBreakpoint
        ? constrain(sticker, current.current.x, current.current.y)
        : initialPosition(sticker, placement);
      current.current = next;
      setPosition(next);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(pendingFrame.current);
    };
  }, [sticker, placement]);

  const updateDrag = () => {
    const start = drag.current;
    if (!start) return;
    current.current = constrain(
      sticker,
      start.origin.x + start.clientX + window.scrollX - start.x,
      start.origin.y + start.clientY + window.scrollY - start.y,
    );
    if (button.current) {
      button.current.style.left = `${current.current.x}px`;
      button.current.style.top = `${current.current.y}px`;
    }
  };
  const dragFrame = () => {
    const start = drag.current;
    if (!start) return;
    // Keep a held sticker under the pointer while scrolling to another section.
    const edge = 70;
    const velocity = start.clientY < edge
      ? -Math.min(14, (edge - start.clientY) / 5)
      : start.clientY > window.innerHeight - edge
        ? Math.min(14, (start.clientY - window.innerHeight + edge) / 5)
        : 0;
    if (velocity) window.scrollBy({ top: velocity, behavior: "instant" });
    updateDrag();
    pendingFrame.current = requestAnimationFrame(dragFrame);
  };
  const move = (event: PointerEvent<HTMLButtonElement>) => {
    const start = drag.current;
    if (!start || start.pointer !== event.pointerId) return;
    start.clientX = event.clientX;
    start.clientY = event.clientY;
    updateDrag();
  };
  const stop = () => {
    cancelAnimationFrame(pendingFrame.current);
    drag.current = null;
    setDragging(false);
    if (current.current) setPosition({ ...current.current });
  };
  const keyboard = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setCaptionDismissed(true);
      return;
    }
    if (!current.current) return;
    const amount = event.shiftKey ? 30 : 10;
    const direction = {
      ArrowLeft: [-amount, 0],
      ArrowRight: [amount, 0],
      ArrowUp: [0, -amount],
      ArrowDown: [0, amount],
    }[event.key];
    if (!direction && event.key !== "Home") return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? initialPosition(sticker, placement)
        : constrain(
            sticker,
            current.current.x + direction![0],
            current.current.y + direction![1],
          );
    moved.current = event.key !== "Home";
    current.current = next;
    setPosition(next);
  };
  const angle = !position?.compact && placement.desktop
    ? placement.desktop.angle
    : placement.angle;

  return (
    <button
      ref={button}
      className={`desktop-sticker sticker-${sticker.id} ${dragging ? "is-dragging" : ""} ${captionDismissed ? "caption-dismissed" : ""}`}
      aria-label={`${sticker.label} sticker. Drag or use arrow keys to move; Home to reset.`}
      aria-describedby={`sticker-caption-${sticker.id}`}
      onPointerEnter={() => setCaptionDismissed(false)}
      onFocus={() => setCaptionDismissed(false)}
      style={{
        left: position?.x ?? 0,
        top: position?.y ?? 0,
        width: position?.width ?? sticker.width,
        aspectRatio: sticker.ratio,
        visibility: position ? "visible" : "hidden",
        transform: `rotate(${angle}deg)`,
      }}
      onPointerDown={(event) => {
        if (event.button !== 0 || !current.current) return;
        moved.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        drag.current = {
          pointer: event.pointerId,
          x: event.pageX,
          y: event.pageY,
          clientX: event.clientX,
          clientY: event.clientY,
          origin: { ...current.current },
        };
        setDragging(true);
        pendingFrame.current = requestAnimationFrame(dragFrame);
      }}
      onPointerMove={move}
      onPointerUp={stop}
      onPointerCancel={stop}
      onLostPointerCapture={stop}
      onKeyDown={keyboard}
    >
      <span className="sticker-art">
      <Image
        src={sticker.src}
        alt=""
        fill
        sizes={sticker.id === "stamp" || sticker.id === "plane" ? "440px" : "200px"}
        loading="eager"
        draggable={false}
        unoptimized={sticker.src.endsWith(".svg")}
      />
      </span>
      <span
        id={`sticker-caption-${sticker.id}`}
        role="tooltip"
        className="sticker-caption"
        style={{ rotate: `${-angle / 2}deg` }}
      >
        {stickerCaptions[sticker.id]}
      </span>
    </button>
  );
}

export default function DesktopStickers() {
  const [placements, setPlacements] = useState<Placement[] | null>(null);
  useEffect(() => {
    setPlacements(shuffledPlacements().map((placement, index) => ({
      ...placement,
      desktop: desktopComposition[stickers[index].id],
    })));
  }, []);
  return (
    <aside
      className="desktop-stickers"
      aria-label="Draggable personal stickers"
    >
      <p className="sr-only">
        Drag the stickers anywhere on the page, including over sections.
        Hold near the top or bottom edge to scroll while dragging.
        Arrow keys move a focused sticker. Home resets it.
      </p>
      {placements && stickers.map((sticker, index) => (
        <DraggableSticker key={sticker.id} sticker={sticker} placement={placements[index]} />
      ))}
      <button
        className="reset-stickers"
        onClick={() => setPlacements(shuffledPlacements())}
      >
        shuffle stickers
      </button>
    </aside>
  );
}
