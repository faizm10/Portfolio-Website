"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type RefObject } from "react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import BlobLaptop from "./BlobLaptop";
import CartoonTired from "./CartoonTired";

const postcards = [
  { image: "/img/photos/berlin-1.jpeg", place: "Berlin", rotation: -12 },
  { image: "/img/photos/salzburg-1.jpeg", place: "Salzburg", rotation: 4 },
  { image: "/img/photos/nyc-1.jpeg", place: "New York", rotation: 13 },
];

function Postcard({
  photo,
  index,
  bounds,
  onSelect,
}: {
  photo: (typeof postcards)[number];
  index: number;
  bounds: RefObject<HTMLDivElement | null>;
  onSelect: (name: string) => void;
}) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const reduced = useReducedMotion();
  return (
    <motion.button
      className={`postcard postcard-${index}`}
      style={{ x, y, rotate: photo.rotation }}
      drag
      dragConstraints={bounds}
      dragElastic={0.08}
      dragMomentum={!reduced}
      whileDrag={reduced ? undefined : { scale: 1.04, zIndex: 5 }}
      onDragStart={() => onSelect(photo.place)}
      onClick={() => onSelect(photo.place)}
      aria-label={`${photo.place} postcard. Use arrow keys to move; Home to reset.`}
      aria-describedby="postcard-instructions"
      onKeyDown={(e) => {
        const directions: Record<string, [number, number]> = {
          ArrowLeft: [-12, 0],
          ArrowRight: [12, 0],
          ArrowUp: [0, -12],
          ArrowDown: [0, 12],
        };
        if (e.key === "Home") {
          e.preventDefault();
          x.set(0);
          y.set(0);
          return;
        }
        const delta = directions[e.key];
        if (!delta || !bounds.current) return;
        e.preventDefault();
        const parent = bounds.current.getBoundingClientRect(),
          card = e.currentTarget.getBoundingClientRect();
        x.set(
          x.get() +
            Math.max(
              parent.left - card.left,
              Math.min(parent.right - card.right, delta[0]),
            ),
        );
        y.set(
          y.get() +
            Math.max(
              parent.top - card.top,
              Math.min(parent.bottom - card.bottom, delta[1]),
            ),
        );
        onSelect(photo.place);
      }}
    >
      <Image
        src={photo.image}
        alt={`A photograph from ${photo.place}`}
        width={320}
        height={360}
        sizes="180px"
        draggable={false}
      />
      <span>
        {photo.place} <span>↗</span>
      </span>
    </motion.button>
  );
}

export default function Playground() {
  const bounds = useRef<HTMLDivElement>(null);
  const [revision, setRevision] = useState(0);
  const [place, setPlace] = useState("Somewhere away from my desk");
  const [working, setWorking] = useState(false);
  return (
    <section id="play" className="section-block playground">
      <div className="section-heading">
        <h2>Off the clock</h2>
        <span>02 — A SMALL INTERNET PLAYGROUND</span>
      </div>
      <div className="play-intro">
        <p>
          Not everything
          <br />
          needs a <em>use case.</em>
        </p>
        <span>
          A camera roll. A restless cursor.
          <br />A little room to mess around.
        </span>
      </div>
      <div className="play-grid">
        <div className="photo-experiment">
          <div className="experiment-label">
            <span>001 / POSTCARDS</span>
            <button
              onClick={() => {
                setRevision(revision + 1);
                setPlace("Somewhere away from my desk");
              }}
            >
              Reset ↺
            </button>
          </div>
          <div ref={bounds} className="postcard-canvas">
            {postcards.map((photo, index) => (
              <Postcard
                key={`${revision}-${photo.place}`}
                photo={photo}
                index={index}
                bounds={bounds}
                onSelect={setPlace}
              />
            ))}
          </div>
          <div className="experiment-bottom">
            <div>
              <p aria-live="polite">{place}</p>
              <span id="postcard-instructions">
                Drag a photo, or use the arrow keys.
              </span>
            </div>
            <Link href="/photos">Camera roll ↗</Link>
          </div>
        </div>
        <div className="character-experiment">
          <div className="experiment-label">
            <span>002 / WORK–LIFE BALANCE</span>
            <span>CLICK TO SWITCH</span>
          </div>
          <button
            className="character-button"
            aria-label={working ? "Take a break" : "Back to building"}
            aria-pressed={working}
            onClick={() => setWorking(!working)}
          >
            {working ? (
              <BlobLaptop aria-hidden="true" />
            ) : (
              <CartoonTired aria-hidden="true" />
            )}
          </button>
          <div className="experiment-bottom">
            <div>
              <p aria-live="polite">
                {working ? "Okay, one more commit." : "Currently buffering."}
              </p>
              <span>
                {working
                  ? "Probably should go outside."
                  : "Even side projects need a day off."}
              </span>
            </div>
            <span aria-hidden="true">{working ? "↗" : "☾"}</span>
          </div>
        </div>
      </div>
      <div className="play-links">
        <span>Other ways I spend my time</span>
        <Link href="/travel">Places I’ve been ↗</Link>
        <Link href="/soccer-stats">On the pitch ↗</Link>
        <Link href="/hackathons">Hackathon log ↗</Link>
      </div>
    </section>
  );
}
