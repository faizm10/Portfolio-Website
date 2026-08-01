"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DottedMap from "dotted-map";

type MapPoint = { lat: number; lng: number; label?: string };

interface MapProps {
  dots?: Array<{
    start: MapPoint;
    end: MapPoint;
  }>;
  lineColor?: string;
}

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

function createCurvedPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

function pointKey(p: MapPoint) {
  return `${p.lat.toFixed(4)},${p.lng.toFixed(4)}`;
}

export default function WorldMap({
  dots = [],
  lineColor = "#171717",
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });
  }, []);

  const uniquePoints = useMemo(() => {
    const map = new Map<string, MapPoint>();
    for (const dot of dots) {
      if (dot.start.label) map.set(pointKey(dot.start), dot.start);
      if (dot.end.label) map.set(pointKey(dot.end), dot.end);
    }
    return Array.from(map.values());
  }, [dots]);

  return (
    <div ref={containerRef} className="relative aspect-[2/1] w-full font-sans">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      <svg
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.35 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {uniquePoints.map((point) => {
          const { x, y } = projectPoint(point.lat, point.lng);
          return (
            <g key={pointKey(point)}>
              <circle cx={x} cy={y} r="2" fill={lineColor} />
              <circle cx={x} cy={y} r="2" fill={lineColor} opacity="0.5">
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Larger hit targets for hover labels */}
      {uniquePoints.map((point) => {
        const { x, y } = projectPoint(point.lat, point.lng);
        const left = (x / 800) * 100;
        const top = (y / 400) * 100;
        return (
          <button
            key={`hit-${pointKey(point)}`}
            type="button"
            aria-label={point.label}
            className="absolute z-10 size-4 -translate-x-1/2 -translate-y-1/2 cursor-default rounded-full border-0 bg-transparent p-0"
            style={{ left: `${left}%`, top: `${top}%` }}
            onMouseEnter={() => {
              if (!point.label) return;
              setHover({ label: point.label, x: left, y: top });
            }}
            onMouseLeave={() => setHover(null)}
            onFocus={() => {
              if (!point.label) return;
              setHover({ label: point.label, x: left, y: top });
            }}
            onBlur={() => setHover(null)}
          />
        );
      })}

      <AnimatePresence>
        {hover && (
          <motion.div
            key={hover.label}
            role="tooltip"
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[calc(100%+10px)] whitespace-nowrap rounded-md px-2.5 py-1 text-[12px] font-medium lowercase shadow-sm"
            style={{
              left: `${hover.x}%`,
              top: `${hover.y}%`,
              backgroundColor: "var(--ink)",
              color: "#fff",
            }}
          >
            {hover.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
