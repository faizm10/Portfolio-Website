# Portfolio sticker assets

## Editing stickers

Edit `app/data/stickers.ts`. Each entry has `label` (accessible name), `caption` (hover/focus text), `src`, and size fields. On desktop, all stickers are distributed through randomized vertical bands in the homepage margins on each refresh. `DesktopStickers.tsx` controls placement and keeps the reading column clear. Save to preview with `npm run dev`; rebuild/deploy to update the live site.

## Controller

`fifa-controller.png` is the supplied 768 × 768 PNG, preserved with its alpha channel. CSS frames the controller to remove empty transparent margins. Its caption is “fifa night.”

- `world-cup-2026-trionda.png`: official Adidas Trionda Pro JD8021 product photo, replacing the classic ball. Source: https://assets.adidas.com/images/w_800,f_png,q_auto/4229e87f23044869a5218fbc64c4fd71_9366/JD8021_HM1.png. The original photo is preserved; the website uses a circular CSS mask to hide its studio background.
- `soccer.png`: previous generated classic ball, no longer displayed.
- `macbook.png`: generated laptop illustration, used with an outline mask in `app/minimal.css`.
- `claude.svg`: Claude symbol from https://cdn.simpleicons.org/claude/D97757.
- `adidas-originals.svg`: Adidas Originals trefoil and wordmark from https://commons.wikimedia.org/wiki/File:Original_Adidas_logo.svg. Replaces the previous performance mark (`adidas.svg`).
- `faiz-soccer.png`: user-provided player cutout from `Subject.png`, 604 × 977 pixels, with an alpha channel. Used as supplied, without a background or outline.

The two raster assets were made with the built-in image generation tool. The returned files are opaque and include a checkerboard background, so the website masks them to their object outlines. They are not standalone transparent PNGs. Keep the masks with these assets, or replace them with genuine alpha-channel cutouts. Originals remain in the Codex generated-images directory.

The logo SVGs are branded marks supplied through Simple Icons and Wikimedia Commons; they remain the property of their respective owners. They are decorative personal-interest stickers here.

The personal player sticker uses the supplied Apple Photos cutout. Its hover caption is “me, away from the keyboard.”

## Final generation prompts

### Soccer ball

Create one photorealistic cutout asset for a draggable personal-portfolio sticker: a classic slightly worn black-and-white pentagon soccer ball, front three-quarter studio product photograph, realistic leather grain and stitched panels. Entire ball visible, centered, fills 85% of square image. Soft natural shading on the ball itself. Truly transparent background with alpha, no floor, no cast shadow outside object, no text, no logo, no border, no other objects. This is a standalone project asset, not a website mockup.

### MacBook

A single photorealistic cutout sticker asset of a silver Apple MacBook laptop open at 105 degrees, three-quarter view from slightly above, facing toward viewer-right, keyboard and large trackpad visible. Screen dark charcoal with a tiny plain terminal window, no readable text. Accurate slim machined aluminum laptop shape. Product photograph, soft natural highlights, entire laptop visible centered with close crop and small margins. Isolated on a truly transparent background with alpha, no floor, no surrounding shadow or backdrop, no sticker border, no extra objects. Landscape composition. This is an individual portfolio website asset, not a mockup of a website.

## Argentina Handball Spezial

`argentina-spezial.png` is an image-tool edit of the official Adidas product photograph for HP3673 (black suede, white stripes, sky-blue laces, gum soles): https://www.adidas.com/us/argentina-handball-spezial-shoes/HP3673.html.

Source image: https://assets.adidas.com/images/w_800,f_png,q_auto/7c428b0201474aff871c09ecb2ce309a_9366/Argentina_Handball_Spezial_Shoes_Black_HP3673_HM1.png.

The built-in image tool returned an opaque checkerboard background. The website applies an outline clip in `app/minimal.css`; this is not a standalone transparent PNG. Product details in the edited image may differ slightly from the original photograph.

Final edit prompt:

Use case: background-extraction. Edit target: the attached official product photo of the Adidas Argentina Handball Spezial HP3673 pair. Remove only the entire gray studio background, floor, and cast shadow outside the shoes. Keep both shoes together, exact silhouettes, composition, black suede, white stripes, sky-blue laces and lettering, gum soles, all branding and material details unchanged. Output a closely cropped standalone photo cutout of the pair for a draggable portfolio sticker, on ACTUAL transparent alpha background. No white background, no checkerboard pattern painted into image, no outline, no border, no new objects or added text. Preserve the original product faithfully.

## World Cup trophy moment

`world-cup-moment.png` is the user-supplied 500 × 667 clipboard image. Its checkerboard is baked into the pixels, so it is not a transparent PNG. The website uses a CSS silhouette mask around the person and trophies. The source photo is unchanged. The plain hover caption is “a world cup moment.”

## Hack the North, plane, and drink

- `hack-the-north-2026.png`: original user-supplied HackTheNorth2026.png, kept as a complete postcard.
- `air-canada.png`: original user-supplied plane PNG. CSS crops the empty margins to fit the plane into its drag area.
- `coconut-mango.png`: built-in image-tool edit of the supplied IMG_8433.JPG. The hand and background were removed; obscured cup portions were reconstructed. The returned PNG has an opaque white background, hidden by a CSS outline mask. It is not a standalone transparent PNG.

Final drink edit prompt:

Use case: background-extraction. Edit target: supplied coconut mango drink photo. Create a standalone photo cutout of ONLY the cup and white lid, remove hand, fingers, and entire background. Preserve the exact cup shape, yellow mango and white coconut swirls, white lid, original label with Coconut Mango Boom (Large Cup), and photographic texture. Reconstruct only the small portions of cup obscured by fingers. Keep whole cup visible with close crop and small margins. Actual transparent alpha background, no checkerboard drawn in the image, no background, no cast shadow, no sticker outline or added text. Portrait composition. This is a personal portfolio sticker asset.
