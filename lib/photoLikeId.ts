/**
 * Stable row key for a public photo URL (e.g. /photos/foo.jpg).
 * Encodes so "/" and other characters are safe as a single primary key string.
 */
export function photoLikeDocId(photoSrc: string): string {
  return encodeURIComponent(photoSrc);
}
