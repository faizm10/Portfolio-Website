/**
 * Stable Firestore document id for a public photo URL (e.g. /photos/foo.jpg).
 * Encodes so "/" and other characters are safe as a single path segment.
 */
export function photoLikeDocId(photoSrc: string): string {
  return encodeURIComponent(photoSrc);
}
