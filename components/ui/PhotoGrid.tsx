"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoLightbox, {
  type LightboxPhoto,
} from "@/components/ui/PhotoLightbox";

export type GridPhoto = LightboxPhoto & {
  /** Displayed pixel size, so each tile keeps the shot's real aspect ratio. */
  width: number;
  height: number;
};

/**
 * Photo grid for /photos. Masonry columns rather than a fixed-ratio grid, so
 * landscape and portrait shots each render at their own shape without cropping.
 * Clicking a tile opens the shared lightbox.
 */
export default function PhotoGrid({ photos }: { photos: GridPhoto[] }) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  if (photos.length === 0) return null;

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.image}
            type="button"
            onClick={() => setOpenAt(i)}
            aria-label={
              photo.location
                ? `open photo from ${photo.location}`
                : "open photo"
            }
            className="group mb-3 block w-full break-inside-avoid cursor-pointer text-left focus:outline-none sm:mb-4"
          >
            <div className="overflow-hidden rounded-xl bg-[var(--ink-3)]/10 shadow-[0_4px_14px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.06] transition duration-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--accent)]">
              <Image
                src={photo.image}
                alt={photo.location ?? "photo"}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 50vw, 288px"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                priority={i < 4}
              />
            </div>
            {(photo.location || photo.date) && (
              <div className="mt-2 flex items-baseline justify-between gap-3">
                {photo.location && (
                  <span
                    className="truncate text-[13px] lowercase"
                    style={{ color: "var(--ink-2)" }}
                  >
                    {photo.location}
                  </span>
                )}
                {photo.date && (
                  <span
                    className="shrink-0 text-[11px] lowercase"
                    style={{ color: "var(--ink-3)" }}
                  >
                    {photo.date}
                  </span>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      <PhotoLightbox
        photos={openAt === null ? null : photos}
        startIndex={openAt ?? 0}
        onClose={() => setOpenAt(null)}
      />
    </>
  );
}
