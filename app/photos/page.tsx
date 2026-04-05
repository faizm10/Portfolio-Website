import { readdir } from "fs/promises";
import { join } from "path";
import PhotoGallery from "./PhotoGallery";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".avif",
  ".bmp",
  ".tiff",
]);

async function getPhotos(): Promise<string[]> {
  try {
    const photosDir = join(process.cwd(), "public", "photos");
    const files = await readdir(photosDir);
    return files
      .filter((file) => {
        const ext = file.toLowerCase().slice(file.lastIndexOf("."));
        return IMAGE_EXTENSIONS.has(ext);
      })
      .map((file) => `/photos/${file}`);
  } catch {
    return [];
  }
}

export const metadata = {
  title: "photos · faiz mustansar",
  description: "a collection of photos by faiz mustansar",
};

export default async function PhotosPage() {
  const photos = await getPhotos();
  return <PhotoGallery photos={photos} />;
}
