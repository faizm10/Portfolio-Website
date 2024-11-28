import fs from "fs";
import path from "path";
import BlurFade from "@/components/magicui/blur-fade";

// Server Component
export default function PhotoPage() {
  // Dynamically get images from the public/photos directory
  const photosDir = path.join(process.cwd(), "public/photos");
  const imageFiles = fs
    .readdirSync(photosDir)
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
  const images = imageFiles.map((file) => `/photos/${file}`);

  const BLUR_FADE_DELAY = 0.04;

  // Randomize sizes for some images
  const randomSizes = images.map((_, idx) => {
    const isLarge = idx % 3 === 0; // Make every 3rd image larger
    return isLarge
      ? { width: "full", height: "large" }
      : { width: "auto", height: "auto" };
  });

  return (
    <section id="photos">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Photography
        </h1>
      </BlurFade>
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className={`mb-4 rounded-lg object-cover ${
                randomSizes[idx].height === "large" ? "h-96" : "h-auto"
              } ${randomSizes[idx].width === "full" ? "w-full" : "w-auto"}`}
              src={imageUrl}
              alt={`Custom photo ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
