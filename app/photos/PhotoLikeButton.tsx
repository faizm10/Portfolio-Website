"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
  useId,
} from "react";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase";
import { trackPhotoLike } from "@/lib/analytics";
import { photoLikeDocId } from "@/lib/photoLikeId";
import { NumberTicker } from "@/app/components/ui/number-ticker";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const POP_MS = 620;
const SESSION_STORAGE_PREFIX = "portfolioPhotoLiked:";
const PHOTO_LIKE_SESSION_EVENT = "portfolio:photo-like-session";

function sessionLikedKey(photoId: string) {
  return `${SESSION_STORAGE_PREFIX}${photoId}`;
}

let warnedSupabaseMissing = false;

export default function PhotoLikeButton({ photoSrc }: { photoSrc: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [popping, setPopping] = useState(false);
  const popTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countBeforeLikeRef = useRef<number | null>(null);
  /** Unique per mount so grid + lightbox can both subscribe without sharing one channel. */
  const realtimeInstanceId = useId().replace(/:/g, "");
  const photoId = photoLikeDocId(photoSrc);
  const [likedThisSession, setLikedThisSession] = useState(false);

  const enabled = isSupabaseConfigured();

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(sessionLikedKey(photoId)) === "1") {
        setLikedThisSession(true);
      }
    } catch {
      /* private mode / quota */
    }
  }, [photoId]);

  useEffect(() => {
    const onSessionLike = (e: Event) => {
      const d = (e as CustomEvent<{ photoId: string }>).detail;
      if (d?.photoId === photoId) setLikedThisSession(true);
    };
    window.addEventListener(
      PHOTO_LIKE_SESSION_EVENT,
      onSessionLike as EventListener,
    );
    return () =>
      window.removeEventListener(
        PHOTO_LIKE_SESSION_EVENT,
        onSessionLike as EventListener,
      );
  }, [photoId]);

  useEffect(() => {
    if (!enabled) {
      setCount(0);
      return;
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setCount(0);
      return;
    }

    let cancelled = false;

    void (async () => {
      const { data, error } = await supabase
        .from("photo_likes")
        .select("count")
        .eq("photo_id", photoId)
        .maybeSingle();
      if (cancelled) return;
      if (error) {
        console.error("[photo like] Supabase read failed:", error.message);
        setCount(0);
        return;
      }
      if (data?.count != null) {
        const n = Number(data.count);
        setCount(Number.isFinite(n) ? Math.trunc(n) : 0);
      } else {
        setCount(0);
      }
    })();

    const channel = supabase
      .channel(`photo_like:${photoId}:${realtimeInstanceId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "photo_likes",
          filter: `photo_id=eq.${photoId}`,
        },
        (payload) => {
          const row = payload.new as { count?: number } | null;
          if (row && typeof row.count === "number") {
            setCount(Math.trunc(row.count));
          }
        },
      )
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR") {
          console.error("[photo like] Realtime channel error for", photoId);
        }
      });

    return () => {
      cancelled = true;
      void supabase.removeChannel(channel);
    };
  }, [photoSrc, enabled, realtimeInstanceId]);

  useEffect(() => {
    return () => {
      if (popTimer.current) clearTimeout(popTimer.current);
    };
  }, []);

  const triggerPop = useCallback(() => {
    setPopping(true);
    if (popTimer.current) clearTimeout(popTimer.current);
    popTimer.current = setTimeout(() => {
      setPopping(false);
      popTimer.current = null;
    }, POP_MS);
  }, []);

  const onLike = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (busy) return;
      triggerPop();

      if (!enabled) {
        if (!warnedSupabaseMissing && typeof window !== "undefined") {
          warnedSupabaseMissing = true;
          console.warn(
            "[photo like] Supabase is not in this build (missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY). Add them to GitHub Actions secrets and redeploy.",
          );
        }
        return;
      }

      const supabase = getSupabaseBrowserClient();
      if (!supabase) return;

      setCount((c) => {
        const cur = c ?? 0;
        countBeforeLikeRef.current = cur;
        return cur + 1;
      });

      setBusy(true);
      try {
        const { data, error } = await supabase.rpc("increment_photo_like", {
          target_id: photoLikeDocId(photoSrc),
        });
        if (error) throw error;
        if (typeof data === "number") {
          setCount(Math.trunc(data));
        } else if (data != null) {
          const n = Number(data);
          if (Number.isFinite(n)) setCount(Math.trunc(n));
        }
        trackPhotoLike(photoSrc);
        try {
          sessionStorage.setItem(sessionLikedKey(photoId), "1");
        } catch {
          /* ignore */
        }
        setLikedThisSession(true);
        window.dispatchEvent(
          new CustomEvent(PHOTO_LIKE_SESSION_EVENT, { detail: { photoId } }),
        );
      } catch (err) {
        setCount(countBeforeLikeRef.current ?? 0);
        const message = err instanceof Error ? err.message : String(err);
        console.error("[photo like] Supabase RPC failed:", message);
      } finally {
        setBusy(false);
      }
    },
    [photoSrc, photoId, enabled, busy, triggerPop],
  );

  const displayCount = count ?? 0;

  return (
    <button
      type="button"
      onClick={onLike}
      disabled={busy}
      className="inline-flex items-center gap-2 rounded-full bg-neutral-900/88 px-3 py-2 text-xs font-medium text-white shadow-md ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-neutral-900 hover:ring-white/25 disabled:opacity-70"
      aria-label={`Like photo (${displayCount} likes)`}
    >
      <span
        className={`inline-flex ${popping ? "animate-photo-heart-pop" : ""}`}
        aria-hidden
      >
        {likedThisSession || popping ? (
          <FaHeart className="h-4 w-4 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.55)]" />
        ) : (
          <FaRegHeart className="h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
        )}
      </span>
      <NumberTicker
        value={displayCount}
        className="min-w-[1ch] tabular-nums text-white/95"
        durationMs={550}
      />
    </button>
  );
}
