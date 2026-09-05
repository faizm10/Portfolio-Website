# Writing on faizm.ca

Posts are built as static pages from trusted MDX in this repository. Keep the existing root-level URLs (for example `/uwreflection`); `/blog` is the archive. No database, API request, or client-side MDX compilation is needed to read a post.

## Add a post

1. Create `app/[slug]/mdx/my-note.mdx` with the body of your post. Use Markdown when possible; JSX, imported server components, images, and isolated client components also work.
2. Add its title, description, category, display date, and slug to `app/posts.ts`. Set `publishedAt` only when you know the exact ISO date. `ongoing: true` labels a living collection; `listed: false` retains a direct URL without showing it in the archive. `pinned` continues to control homepage selection. Set `featured: true` on one post to lead the archive, and provide an optional `shortTitle` and `cover` (src, alt, caption) for it.
3. Add an explicit import loader to `lib/writing.ts`. Routes are derived from the post/project catalogs, so there is no separate slug list to edit.
4. Run `npm run typecheck`, `npm run test:writing`, and `npm run build`.

The layout supplies the title, description, byline, date, estimated reading time, and contents. Do not duplicate these in the MDX body.

```mdx
An opening paragraph in your own voice.

## Where it started

Write naturally. Use **emphasis**, [links](https://example.com), and lists.

<ArticleFigure
  src="/notes/my-note/photo.jpg"
  alt="Describe what the image shows"
  width={1400}
  height={900}
  caption="A short caption with context."
/>

<Callout title="A small observation">
  A thought worth setting apart from the main text.
</Callout>

Some <Highlight>olive emphasis</Highlight>, or <Highlight tone="blue">blue</Highlight> and <Highlight tone="rust">rust</Highlight> accents.

---

## What I learned

### A detail worth keeping

More writing.
```

`ArticleFigure`, `Callout`, and `Highlight` are available to ordinary MDX through `mdx-components.tsx`. GitHub-flavored Markdown supports tables, footnotes, task lists, and strikethrough. Tables get a horizontal scroll container; fenced code blocks are highlighted on the server with Prism. Use `<video controls playsInline preload="none">` for clips. Add a client component only when the content needs browser interaction; keep the MDX itself on the server.

## Contents and reading time

`lib/mdx/recma-article.mjs` runs during MDX compilation. It recognizes Markdown and literal JSX `h2`/`h3` headings, preserves explicit IDs, and disambiguates duplicate heading names. Anchor IDs are present in the server HTML, so section links work before JavaScript loads. The browser only tracks the active heading and scroll progress.

For headings produced dynamically by a loop, supply matching IDs and export `tableOfContents` from the MDX (see `soccer-stats.mdx`). Static labels are required for automatic extraction.

Reading time is an estimate at 220 words per minute, based on visible literal text. It excludes code/metadata expressions and does not estimate time spent watching videos, reading diagrams, or exploring generated collections.

## Presentation

`app/writing.css` scopes the journal design to the writing archive and article reader. The homepage and project pages keep their own styling. The reader uses a single light appearance. The desktop contents rail stays within the article, stopping before the footer, and becomes a native expandable section menu below 960px. Reduced motion and print layouts are included.

## Checks

`npm run test:writing` checks compilation, duplicate headings, explicit anchors, JSX headings, and reading-time calculation. With a running server, `PORTFOLIO_ORIGIN=http://localhost:3000 npm run test:writing` also checks every article's response, title, contents anchors, metadata, unique IDs, and video controls.

`npm run test:smoke` checks the wider portfolio routes.
