"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase";
import PhotoLikeButton from "./PhotoLikeButton";

type RankedPhoto = { src: string; count: number };

/** Push pin centered on the top edge of the polaroid. */
function PinDecoration() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-[45%]"
      aria-hidden
    >
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
      >
        <path d="M16 20 L11 38 L13 38 L16 26 L19 38 L21 38 Z" fill="#6b7280" />
        <circle cx="16" cy="14" r="10" fill="#dc2626" stroke="#991b1b" strokeWidth="1.2" />
        <ellipse
          cx="13"
          cy="11"
          rx="3.5"
          ry="2.2"
          fill="white"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

function TopLikedSkeletonCard({ rank }: { rank: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[220px] pt-5 sm:max-w-none">
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-[45%]"
        aria-hidden
      >
        <div className="size-10 rounded-full bg-neutral-300/90 animate-pulse" />
      </div>
      <div className="rounded-sm border border-neutral-200/90 bg-[#f5f3ef] p-2.5 pb-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/4">
        <div className="aspect-[4/5] w-full animate-pulse rounded-[1px] bg-neutral-200/90" />
        <div className="flex min-h-[3.25rem] items-center justify-between gap-2 px-1 pb-2.5 pt-2.5">
          <div
            className="h-3 w-7 rounded bg-neutral-200/90 animate-pulse"
            aria-hidden
          />
          <div
            className="h-8 w-[5.5rem] shrink-0 rounded-full bg-neutral-200/90 animate-pulse"
            aria-hidden
          />
        </div>
      </div>
      <span className="sr-only">Loading top photo {rank + 1}</span>
    </div>
  );
}

export default function TopLikedStrip({
  photos,
  onOpenPhoto,
}: {
  photos: string[];
  onOpenPhoto: (index: number) => void;
}) {
  const shouldFetch = isSupabaseConfigured() && photos.length > 0;
  const [top, setTop] = useState<RankedPhoto[]>([]);
  const [loading, setLoading] = useState(shouldFetch);

  useEffect(() => {
    if (!isSupabaseConfigured() || photos.length === 0) {
      setLoading(false);
      setTop([]);
      return;
    }

    const sb = getSupabaseBrowserClient();
    if (!sb) {
      setLoading(false);
      setTop([]);
      return;
    }

    const allowed = new Set(photos);
    let cancelled = false;
    setLoading(true);

    void (async () => {
      const { data, error } = await sb
        .from("photo_likes")
        .select("photo_id, count")
        .order("count", { ascending: false })
        .limit(40);

      if (cancelled) return;
      if (error || !data?.length) {
        if (!cancelled) {
          setTop([]);
          setLoading(false);
        }
        return;
      }

      const ranked: RankedPhoto[] = [];
      for (const row of data) {
        let src: string;
        try {
          src = decodeURIComponent(String(row.photo_id));
        } catch {
          continue;
        }
        if (!allowed.has(src)) continue;
        const count = Number(row.count);
        if (!Number.isFinite(count)) continue;
        ranked.push({ src, count: Math.trunc(count) });
        if (ranked.length >= 3) break;
      }
      if (cancelled) return;
      setTop(ranked);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [photos]);

  if (!shouldFetch) return null;
  if (!loading && top.length === 0) return null;

  return (
    <section
      className="mb-12"
      aria-label="Most liked photos"
      aria-busy={loading}
    >
      <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
        community's favorite photos
      </h2>
      {loading ? (
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
          {[0, 1, 2].map((i) => (
            <TopLikedSkeletonCard key={i} rank={i} />
          ))}
        </div>
      ) : (
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
        {top
          .map((item, rank) => ({
            ...item,
            index: photos.indexOf(item.src),
            rank,
          }))
          .filter((x) => x.index >= 0)
          .map(({ src, count, index, rank }) => (
            <div
              key={src}
              className="relative mx-auto w-full max-w-[220px] pt-5 sm:max-w-none"
            >
              <PinDecoration />
              <div className="relative rounded-sm border border-neutral-200/90 bg-[#f5f3ef] p-2.5 pb-0 shadow-[0_6px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]">
                <button
                  type="button"
                  onClick={() => onOpenPhoto(index)}
                  className="block w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f3ef]"
                  aria-label={`View top photo ${rank + 1}, ${count} likes`}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </button>
                <div className="flex min-h-[3.25rem] items-center justify-between gap-2 px-1 pb-2.5 pt-2.5">
                  <span className="text-[10px] font-semibold tabular-nums text-neutral-400">
                    #{rank + 1}
                  </span>
                  <PhotoLikeButton photoSrc={src} />
                </div>
              </div>
            </div>
          ))}
      </div>
      )}
    </section>
  );
}
