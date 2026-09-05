"use client";

import Image from "next/image";
import {
  stickers,
  type Sticker,
} from "@/app/data/stickers";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type KeyboardEvent,
} from "react";

type Placement = {
  firstScreen: boolean;
  row: number;
  rows: number;
  horizontal: number;
  vertical: number;
  angle: number;
  side: "left" | "right";
};

function randomPlacements(): Placement[] {
  const slots = stickers.map((_, index) => index);
  for (let index = slots.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [slots[index], slots[other]] = [slots[other], slots[index]];
  }
  const firstSide = Math.random() < 0.5 ? "left" : "right";
  return slots.map((slot) => ({
    firstScreen: slot < 8,
    row: Math.floor((slot < 8 ? slot : slot - 8) / 2),
    rows: slot < 8 ? 4 : slot % 2 === 0 ? Math.ceil((stickers.length - 8) / 2) : Math.floor((stickers.length - 8) / 2),
    side: slot % 2 === 0 ? firstSide : firstSide === "left" ? "right" : "left",
    horizontal: Math.random(),
    vertical: Math.random(),
    angle: Math.random() * 16 - 8,
  }));
}
type Position = { x: number; y: number; width: number };

function dimensions(sticker: Sticker, placement: Placement) {
  const pageWidth = document.documentElement.clientWidth;
  const lane = Math.max(0, (pageWidth - 920) / 2);
  // Leave room for rotation on both sides of the widest content section.
  const angle = Math.abs(placement.angle) * Math.PI / 180;
  const firstScreenBand = (window.innerHeight - 120) / 4;
  const heightLimit = placement.firstScreen
    ? (firstScreenBand - 40) / (Math.cos(angle) / sticker.ratio + Math.sin(angle))
    : Infinity;
  const width = Math.max(1, Math.min(sticker.width, 160, 160 * sticker.ratio, lane - 64, heightLimit));
  const height = width / sticker.ratio;
  const rotatedHeight = height * Math.cos(angle) + width * Math.sin(angle);
  const rotatedWidth = width * Math.cos(angle) + height * Math.sin(angle);
  const inset = 24 + Math.max(0, (rotatedWidth - width) / 2);
  const footer = document.querySelector(".site-footer");
  const pageHeight = Math.max(
    window.innerHeight,
    footer ? footer.getBoundingClientRect().bottom + window.scrollY : document.documentElement.scrollHeight,
  );
  return { pageWidth, lane, width, height, rotatedHeight, inset, pageHeight };
}

function initialPosition(sticker: Sticker, placement: Placement): Position {
  const { pageWidth, lane, width, height, rotatedHeight, inset, pageHeight } = dimensions(sticker, placement);
  const left = placement.side === "left" ? inset : pageWidth - lane + inset;
  const horizontalSpace = Math.max(0, lane - width - inset * 2);
  const startY = placement.firstScreen ? 80 : window.innerHeight + 80;
  const endY = placement.firstScreen ? window.innerHeight - 40 : pageHeight - 160;
  const rowHeight = (endY - startY) / placement.rows;
  // Give every sticker its own vertical band, with breathing room between bands.
  const verticalSpace = Math.max(0, rowHeight - rotatedHeight - 32);
  return constrain(sticker, placement,
    left + horizontalSpace * placement.horizontal,
    startY + placement.row * rowHeight + 16 + (rotatedHeight - height) / 2 + verticalSpace * placement.vertical,
  );
}

function constrain(sticker: Sticker, placement: Placement, x: number, y: number): Position {
  const { pageWidth, lane, width, height, inset, pageHeight } = dimensions(sticker, placement);
  const leftSide = placement.side === "left";
  const left = leftSide ? inset : pageWidth - lane + inset;
  const right = leftSide ? lane - width - inset : pageWidth - width - inset;
  return {
    x: Math.max(left, Math.min(right, x)),
    y: Math.max(24, Math.min(pageHeight - height - 40, y)),
    width,
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
    let previousHeight = window.innerHeight;
    const resize = () => {
      if (window.innerWidth === previousWidth && window.innerHeight === previousHeight) return;
      const crossedBreakpoint = (previousWidth < 1280) !== (window.innerWidth < 1280);
      previousWidth = window.innerWidth;
      previousHeight = window.innerHeight;
      drag.current = null;
      setDragging(false);
      cancelAnimationFrame(pendingFrame.current);
      const next = current.current && moved.current && !crossedBreakpoint
        ? constrain(sticker, placement, current.current.x, current.current.y)
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
      placement,
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
            placement,
            current.current.x + direction![0],
            current.current.y + direction![1],
          );
    moved.current = event.key !== "Home";
    current.current = next;
    setPosition(next);
  };
  const angle = placement.angle;

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
        sizes={sticker.id === "plane" ? "440px" : "200px"}
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
        {sticker.caption}
      </span>
    </button>
  );
}

export default function DesktopStickers() {
  const [placements, setPlacements] = useState<Placement[] | null>(null);
  useEffect(() => { setPlacements(randomPlacements()); }, []);
  return (
    <aside
      className="desktop-stickers"
      aria-label="Draggable personal stickers"
    >
      <p className="sr-only">
        Drag the stickers within the side margins.
        Hold near the top or bottom edge to scroll while dragging.
        Arrow keys move a focused sticker. Home resets it.
      </p>
      {placements && stickers.map((sticker, index) => (
        <DraggableSticker key={sticker.id} sticker={sticker} placement={placements[index]} />
      ))}
      <button
        className="reset-stickers"
        onClick={() => setPlacements(randomPlacements())}
      >
        shuffle stickers
      </button>
    </aside>
  );
}
