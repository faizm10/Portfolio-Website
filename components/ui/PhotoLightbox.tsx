"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type LightboxPhoto = {
  image: string;
  /** Already formatted for display upstream — see `formatPhotoDate`. */
  date?: string;
  location?: string;
};

export default function PhotoLightbox({
  photos,
  startIndex = 0,
  onClose,
}: {
  photos: LightboxPhoto[] | null;
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Jump to the clicked photo whenever the set opens or the start changes.
  useEffect(() => {
    if (photos) setIndex(startIndex);
  }, [photos, startIndex]);

  // Reset the loaded state each time the shown photo changes.
  useEffect(() => setLoaded(false), [index, photos]);

  const count = photos?.length ?? 0;

  const next = useCallback(
    () => setIndex((i) => (count ? (i + 1) % count : 0)),
    [count],
  );
  const prev = useCallback(
    () => setIndex((i) => (count ? (i - 1 + count) % count : 0)),
    [count],
  );

  useEffect(() => {
    if (!photos) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [photos, next, prev, onClose]);

  if (!mounted) return null;

  const photo = photos?.[index];

  // Warm the adjacent images so next/prev navigation is instant. These render
  // at the same size the lightbox uses, so Next.js optimizes the exact variant
  // we'll ask for on navigation and the browser has it cached.
  const neighbors =
    photos && count > 1
      ? Array.from(new Set([(index + 1) % count, (index - 1 + count) % count]))
          .filter((i) => i !== index)
          .map((i) => photos[i])
      : [];

  return createPortal(
    <AnimatePresence>
      {photos && photo && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={photo.location ?? "photos"}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Hidden preloaders warm the adjacent photos for instant navigation. */}
          <div
            aria-hidden
            className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
          >
            {neighbors.map((n) => (
              <Image
                key={n.image}
                src={n.image}
                alt=""
                width={1400}
                height={1400}
                sizes="100vw"
                priority
              />
            ))}
          </div>

          {/* Close */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image + caption */}
          <motion.div
            key={photo.image}
            className="relative z-[1] flex h-full w-full flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* `fill` against this sized box scales the photo to the viewport
                on either axis; object-contain keeps its real aspect ratio. */}
            <div className="relative w-full flex-1">
              {/* Spinner shown until the image paints */}
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white/80" />
                </div>
              )}
              <Image
                src={photo.image}
                alt={photo.location ?? "Photo"}
                fill
                sizes="100vw"
                onLoad={() => setLoaded(true)}
                className={`object-contain transition-opacity duration-300 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            </div>
            {(photo.location || photo.date) && (
              <div className="mt-3 flex shrink-0 items-center gap-3 text-sm lowercase text-white/90">
                {photo.location && (
                  <span className="font-medium">{photo.location}</span>
                )}
                {photo.date && (
                  <span className="text-white/50">{photo.date}</span>
                )}
                {count > 1 && (
                  <span className="text-white/50">
                    {index + 1} / {count}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
