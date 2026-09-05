# Current addition: FIFA night controller and editable captions

Added the supplied transparent controller PNG as a draggable sticker with the caption “fifa night.” It starts beside the first project row on desktop and joins the compact randomized arrangement on mobile. The source image is preserved; CSS frames its transparent margins. All 11 captions now live in app/data/sticker-captions.json, with editing instructions in public/stickers/README.md.

Production build and lint pass (two existing warnings). Browser review confirmed the controller loads, its focus caption reads “fifa night,” and the page has no horizontal overflow.

---

# Current refinement: composed desktop starting layout

At viewport widths of 1280px and above, stickers start in the arrangement from the supplied reference: trophy photo, laptop, ball, and player on the left; drink, postcard, Originals, and shoes on the right; plane and Claude above the projects. Side clusters scale with available space. Untouched positions adapt as desktop width changes; dragged stickers retain their placement within page bounds. The shuffle control still randomizes the layout, while a fresh desktop visit restores the composition. Smaller viewports retain randomized, compact stickers down the page.

Build and lint pass (two existing lint warnings). Browser review confirmed the reference composition and identical positions after desktop refresh, along with compact mobile sizes and no horizontal overflow.

---

# Current refinement: shuffle on arrival and mobile stickers

Sticker order, position, and tilt now randomize when the homepage mounts. A “shuffle stickers” control starts a fresh arrangement. Desktop placements start in the outer margins; mobile and tablet placements are scattered across the page in shuffled vertical rows, with smaller artwork and a cap on tall cutouts. All stickers scroll with the document and remain draggable over the content. Width changes adapt the layout without reshuffling on mobile browser-toolbar height changes.

Production build, route smoke checks, and lint pass (two existing warnings). Browser checks confirmed a different arrangement after refresh, all 11 stickers visible at 390px without horizontal overflow, and dragging a small sticker over the project section.

---

# Current refinement: three stickers and centered final project

Added the supplied Hack the North postcard, Air Canada plane, and a drink cutout derived from IMG_8433.JPG. All three use the existing page-relative dragging and plain hover captions. The plane is framed to remove empty margins; the drink uses a CSS outline mask because the image-tool output was opaque. Asset sources and the final built-in edit prompt are in public/stickers/README.md.

When the desktop project count is odd, the final card spans both grid columns while retaining the same width as a regular card and centering horizontally. Mobile remains a full-width single column. Production build, lint (two existing warnings), and route smoke checks pass. Browser checks confirmed all 11 sticker assets load, the final project has zero center offset and matches the other cards at 442px, and all mobile cards are 344px without overflow at a 390px viewport.

---

# Current refinement: 2026 World Cup ball

Replaced the classic soccer-ball sticker with the official Adidas Trionda Pro JD8021 product image. The original photograph is preserved, with a circular CSS mask hiding the studio background. Adjusted the display size to retain a similar visible ball diameter. The plain caption reads “trionda · world cup 2026”; all drag behavior remains available. Source is documented in public/stickers/README.md.

---

# Current addition: Argentina Spezial shoes

Added the Adidas Argentina Handball Spezial HP3673 pair as a sixth draggable sticker, with the plain caption “argentina handball spezial.” The asset is an image-tool edit of an official product photo, with a CSS outline mask because the generated PNG has no alpha channel. Product source and final edit prompt are in public/stickers/README.md. Production build passed; browser review confirmed the image loads and the masked outline displays without a rectangular background.

---

# Current refinement: Adidas Originals

Replaced the Adidas performance sticker with the black Originals trefoil and wordmark SVG from Wikimedia Commons. Existing placement, dragging, and plain hover caption remain in place. Asset provenance is recorded in public/stickers/README.md.

---

# Current refinement: automatic avatar playback

Removed the avatar play/pause control and manual pause state. The robot animates automatically when visible, resumes when returning to the page, and retains the system reduced-motion preference and offscreen rendering suspension. Click-to-wave remains available.

---

# Current addition: personal soccer sticker

Added the supplied Subject.png as public/stickers/faiz-soccer.png, preserving its transparency and proportions. The player joins the existing stickers with page-wide dragging and the plain hover caption “me, away from the keyboard.” Production build passed and browser review confirmed the image loads with a transparent background.

---

# Current refinement: plain sticker captions

Hover captions are now plain text, with no background, border, or shadow. Sticker image effects are scoped to the images so they do not outline the captions.

---

# Current refinement: sticker captions

Each sticker now has a short draft caption in a small, tilted white label beneath it. Captions appear on hover and keyboard focus, remain reachable by the pointer, hide during dragging, and dismiss with Escape. Native title tooltips were removed to avoid duplicate labels. The fade respects reduced-motion preferences.

Production build and lint pass (two existing warnings). Browser review verified the label appearance, keyboard focus, Escape dismissal, hover after dragging, and no horizontal overflow. Captions are editable in app/components/DesktopStickers.tsx.

---

# Current refinement: stickers move with the page

Stickers now use document positioning and scroll with the page. They start in the outer margins but can be dragged across any section, including work. Page-edge dragging scrolls the document while keeping the held sticker under the pointer. Resizing preserves placement within page bounds. The reset control also scrolls with the page.

Production build and lint pass (two existing warnings). Browser verification confirmed dragging into the center and over the work section, document-relative positioning after scrolling, and no horizontal overflow.

---

# Current addition: desktop stickers

Removed the visible command shortcut from the shared header. Added four screen-fixed, draggable stickers in the homepage margins: a soccer ball, Claude symbol, MacBook, and Adidas symbol. Dragging is constrained to the outer lanes so the 920px project gallery remains clear. Arrow keys move a focused sticker, Shift increases the step, Home resets it, and a reset control restores all four. Stickers are hidden below 1280px and in print.

The object assets were generated with the built-in image tool and use CSS outline masks; the original returned PNGs contain opaque checkerboard backgrounds. Logo assets come from Simple Icons. See public/stickers/README.md for sources and exact generation prompts. A custom player sticker awaits a suitable photo.

Production build and route smoke checks pass; lint has the same two existing warnings. Browser checks verified all four loaded assets, dragging, keyboard movement, reset, fixed positions while scrolling, and no horizontal overflow at 390px. The original user edits remain unchanged.

---

# Latest refinement

Removed organization logo frames. Homepage writing uses short display labels while preserving the full titles in the blog and articles. Removed the “on github” heading, profile link, and disclosure; the contribution graph now appears directly above the footer and loads as it approaches the viewport.

Production build, lint (two existing warnings), and route checks pass. Browser review verified border-free logos, shortened writing links, and the visible contribution graph. Original user edits remain unchanged.

---

# Current refinement: dates and closing sections

Removed the intro email. Work and education date ranges now display abbreviated month/year values such as “May 2026 – Aug 2026,” with Present preserved. Source date data stays unchanged.

The closing area now has consistent writing rows with light separators, an “outside of work” section with a two-column link list, and an “on github” section with one profile link and an expandable contribution graph. Removed duplicated graph labels/links and aligned its content to the main column.

Production build, lint (the same two existing warnings), and route checks pass. Browser review verified all 13 displayed experience/education date ranges, removal of the intro email, the loaded graph and disclosure toggle, and desktop/mobile layouts without overflow. Original user edits remain unchanged.

Earlier iteration notes follow and are superseded where relevant.

---

# Current refinement: hierarchy, logos, and work timeline

Section headings are now 20px/600, project titles 17px/600, and employer names 16px/600, with smaller supporting text. Work and education use larger, higher-quality local logos in 44px holders, a light connecting line, separated role rows, and a subtle current badge. All 11 work/community positions remain visible. uOttawa is excluded from the homepage education list; the shared historical data and résumé are unchanged.

The footer replaces its visible webring text with the official Gryphon SVG, served locally as `/gryphon.svg`, between the existing previous/next arrows. Accessible link names remain intact. Asset source: https://www.uguelph.network/webAssets/gryphon.svg.

Production build, route smoke checks, and lint pass (two existing warnings). Desktop and 320px phone review confirmed typography, all work positions, two education entries, working logo assets, and no horizontal overflow. Original user edits were hash-checked unchanged.

Earlier iteration notes below are superseded where relevant.

---

# Current update: borderless gallery and complete experience

Projects now lead into the work history in a server-rendered, two-column gallery. Only this section expands to 920px; the rest stays at 512px. Below 700px it becomes one column. Screenshots have no added borders, shadows, rounded frames, or backgrounds. Each project has its description, metrics, and applicable about/live/GitHub links underneath. The previous deck component and its CSS were removed.

All 11 work/community positions are now visible, grouped under their organization, including every teaching term and both Lang roles. All three education entries are shown. Existing local logos appear beside school and workplace names and in the bio. The animated avatar remains available.

Production build, lint (two existing warnings), and route smoke checks pass. Browser checks confirmed desktop/mobile widths, all 11 positions and three schools, loaded logos, and project links. Original user edits remain unchanged.

Earlier design notes below are superseded by this update where they conflict.

---

# Current addition: project cards and a 3D companion

The minimal 512px layout now includes a single browsable stack of project image cards. Cards use the real project screenshots, gentle pointer tilt, and a sliding crossfade. Previous/next and named project buttons work on keyboard and touch. Each selection exposes its description, verified metrics, live site, source (where available), and project page.

A small custom robot appears beside the name on the homepage. It is built from Three.js meshes with soft lighting, blinking eyes, a floating body, damped pointer tracking, and a click-to-wave greeting. The Three.js scene loads in a separate client chunk. Animation is capped at 30fps and stops when paused, offscreen, hidden, or reduced motion is requested. GPU resources and listeners are disposed on unmount; an illustrated fallback remains if WebGL initialization fails or its context is lost. No external model or image service is required.

Added `three` and its TypeScript definitions. Renderer lifecycle follows the [official Three.js documentation](https://threejs.org/docs/pages/WebGLRenderer.html). Existing Motion handles the card transitions.

Verified the live WebGL render, greeting, pause control, all five project selections and destinations, and mobile layout in the browser. Production build, lint, and route checks pass, with the same two pre-existing lint warnings. Original user edits remain unchanged.

Earlier iteration notes follow and are superseded by the additions above where relevant.

---

# Current direction: minimal portfolio

The homepage now follows the supplied narrow, text-first reference: a white canvas, 512px centered column, small sans-serif typography, a brief bio, two recent employers, five project links, two recent articles, personal links, and a compact footer. Full experience remains on the résumé. Project metrics remain in the shared data and project link descriptions. GitHub activity is available through a disclosure; the command menu and keyboard shortcuts remain available.

The oversized hero, cursor trail, floating previews, postcard playground, and promotional contact section are no longer mounted on the homepage. Their earlier components remain in the working tree. The shared header/footer and supporting page titles use the quieter typography.

Validated with a production build, route smoke checks, lint (two existing warnings), desktop/mobile browser review, and command-menu focus. Original user edits were hash-checked unchanged.

The notes below document the earlier design iterations and are superseded by this direction where they conflict.

---

# Interactive portfolio v2

Branch: `design/interactive-portfolio-v2`. Local-only; no push or merge.

## Design

Warm paper (`#f9f8f5`), near-black ink, a muted olive accent, Newsreader display type, and DM Sans for UI/body text. The original Newsreader and signature font remain. Thin rules, a numbered project index, and generous type-driven spacing replace gradients and logo/card grids.

Homepage order: introduction and project snapshots → selected work → Off the clock → about/experience/GitHub activity → recent writing → contact. All existing routes remain available. Photos, travel, résumé, writing, and project stories share the new shell.

Reference audit:

- [Carolyn Lee](https://www.carolynlee.me/): concise framing, clearly separated work, inline personal objects, simple navigation. Adopted the restraint and purposeful use of imagery.
- [Bao To](https://www.baothiento.com/): a playable opening can establish personality before a project list. Adopted the idea of one bounded interactive space; kept engineering context visible immediately.
- [Lei Wu](https://laywu.ca/): specific personal writing, hobbies, and activity make a compact site feel inhabited. Preserved Faiz’s photos, soccer, university stories, and GitHub activity.
- [Jeremy Su](https://www.jeremysu.ca/): a consistent visual metaphor and tactile objects make the work memorable. Used restrained project snapshots and postcards without copying the crime-scene concept.

The references were inspected in the browser; the latter two were available there despite web-fetch failures. No external reference assets were copied.

## Interaction system

- `ProjectTrail`: five reusable project snapshots; 100px movement threshold and 65ms minimum interval; one RAF update at a time; velocity-sensitive rotation capped at roughly 14 degrees. Transform/opacity animations fade out in 1.7 seconds. Animations cancel on scrolling, resizing, hiding the tab, motion-preference changes, or unmount. The italic hero word responds by only a few pixels. A switch disables the trail.
- `WorkIndex`: a single floating preview surface with crossfading images and damped movement. Placement stays in the outer right margin so titles remain readable; viewports below 1300px use inline previews. It disappears on scroll/exit and stops requesting frames once settled. React state changes only when the active project changes.
- Touch/small screens: project images appear inline. The hero’s Next snapshot button and linked screenshot work with keyboard and touch; they remain available when motion is reduced.
- `Playground`: existing Berlin, Salzburg, and New York photos become constrained draggable postcards. Arrow keys move a focused postcard; Home and Reset restore positions. The original loading characters become an explicit work/break toggle.
- `Cmd`: searchable navigation with Cmd/Ctrl+K, arrows, Enter, Escape, and corrected Shift+number shortcuts from the existing navigation data. It now works on mobile, has an accessible title/description, and focuses search on opening.
- `Activity`: the existing GitHub contribution component/API is loaded when the disclosure opens, including its existing loading/error handling.

## Content preserved

Project descriptions, links, real metrics, all work/community/education data, MDX narratives, photo gallery/lightbox, travel map, résumé and PDF, social links, hobbies, and Guelph webring URLs. PitchPulse remains linked to its live site because it has no existing detail page. uoguelph.courses’ placeholder story now uses only facts already recorded in project data.

The pre-existing edits to `SlugPageClient.tsx`, soccer stats, slug registration, blog index, posts, the new university article, its image, and the local degree-flow preview were hash-checked unchanged. Blog styling lives in a new layout/CSS so the existing edited page stayed untouched. `next-env.d.ts` is generated by Next; the production build restores its production route-types import.

## Main files

- `app/page.tsx`, `app/layout.tsx`, `app/redesign.css`: page composition, typography, responsive system, focus/motion styles, shared shell.
- `app/components/ProjectTrail.tsx`, `WorkIndex.tsx`, `Playground.tsx`, `ProjectStory.tsx`, `Activity.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`, `Cmd.tsx`.
- `app/[slug]/page.tsx` and new blog/photos/travel/resume layouts: existing routes, story framing, page titles/canonicals.
- `app/loading.tsx`: compact real-loading state, replacing the fullscreen character fallback. The artificial loading gate is no longer mounted; old components remain in the repository.
- `components/ui/PlacesMap.tsx`: reduced-motion/hidden-tab handling and a visitor-friendly missing-map fallback.
- `package.json`, `eslint.config.mjs`: repair lint for the installed Next 16 / ESLint 9 / Next ESLint 15 combination using the already-installed FlatCompat; add typecheck and smoke commands.
- `components/ui/link-preview.tsx`: remove two unused destructured defaults exposed by the repaired lint command; public prop types remain compatible.

## Dependencies

No project dependencies added or upgraded. Reuses Next Image, next/font, Motion, cmdk, Radix, and the existing map/photo infrastructure. Prettier was run as a temporary formatting tool; it is not a project dependency. The package lock is unchanged.

## Verification

Run against a local production server:

```sh
npm run lint
npm run typecheck
npm run build
npm run start -- --port 3000
# In another terminal:
npm run test:smoke
```

The smoke script checks 17 routes, core metrics/features in server HTML, skip-link targets, shared navigation, the PDF, and a real 404. It adds no test dependencies. Browser review covers desktop, tablet, and mobile layouts, trail visibility, preview switching, snapshots, postcard keyboard movement/reset, character toggle, command search/navigation, and secondary pages. This is functional/visual QA, not a measured FPS or Lighthouse claim. Reduced-motion branches are guarded in JS and CSS; an OS-level reduced-motion emulation was not available in the browser tool.

Two legacy lint warnings remain: the existing raw image in `link-preview.tsx` and an unused eslint-disable in `use-controlled-state.tsx`. Neither is introduced by the new interface.

During validation the machine ran out of disk space. Only this repository’s generated webpack/development output was cleared to recover, and the production build was rebuilt from source.

## Deliberate exclusions / next experiments

Rejected a site-wide replacement cursor, scroll hijacking, WebGL, extra animation libraries, and motion on every row. Those add friction or cost without strengthening this direction. Kept the browser’s native cursor and ordinary links.

Next: add a short, real interaction recording for each project; try a small TransitFlow route toy using the project’s actual data; expand the postcard collection with captions from the photo metadata. Richer contribution narratives should wait for Faiz’s own details rather than inventing ownership or outcomes.

## Narrow column refinement

The shared content width is now 32rem (512px), centered with 20px minimum side margins. Hero typography is scaled to the column; the hero snapshot, playground, about, and experience sections stack naturally. The same limit applies to writing, project stories, and personal pages. Desktop (1600px), tablet (768px), and phone (320px) layouts were visually checked without horizontal overflow. Production build, lint, and the route smoke checks pass (the two existing lint warnings remain).
