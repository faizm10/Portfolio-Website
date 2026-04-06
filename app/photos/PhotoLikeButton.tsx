"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { FirebaseError } from "firebase/app";
import { doc, increment, onSnapshot, setDoc } from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "@/lib/firebase";
import { trackPhotoLike } from "@/lib/analytics";
import { photoLikeDocId } from "@/lib/photoLikeId";
import { NumberTicker } from "@/app/components/ui/number-ticker";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const COLLECTION = "photoLikes";
const POP_MS = 620;

export default function PhotoLikeButton({ photoSrc }: { photoSrc: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [popping, setPopping] = useState(false);
  const popTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enabled = isFirebaseConfigured();

  useEffect(() => {
    if (!enabled) {
      setCount(0);
      return;
    }
    const db = getDb();
    if (!db) {
      setCount(0);
      return;
    }
    const ref = doc(db, COLLECTION, photoLikeDocId(photoSrc));
    const unsub = onSnapshot(
      ref,
      (snap) => {
        setCount(snap.exists() ? (snap.data()?.count as number) ?? 0 : 0);
      },
      () => setCount(0),
    );
    return () => unsub();
  }, [photoSrc, enabled]);

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

      if (!enabled) return;

      const db = getDb();
      if (!db) return;

      setBusy(true);
      try {
        const ref = doc(db, COLLECTION, photoLikeDocId(photoSrc));
        await setDoc(ref, { count: increment(1) }, { merge: true });
        trackPhotoLike(photoSrc);
      } catch (err) {
        const code = err instanceof FirebaseError ? err.code : "unknown";
        const message = err instanceof Error ? err.message : String(err);
        console.error("[photo like] Firestore write failed:", code, message);
      } finally {
        setBusy(false);
      }
    },
    [photoSrc, enabled, busy, triggerPop],
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
        {popping ? (
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
