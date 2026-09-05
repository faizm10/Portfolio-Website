import assert from 'node:assert/strict';
import { compile } from '@mdx-js/mdx';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
const require = createRequire(import.meta.url);
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import recmaArticle from '../lib/mdx/recma-article.mjs';
import remarkGfm from 'remark-gfm';

async function render(source) {
  const code = String(await compile(source, { remarkPlugins: [remarkGfm], recmaPlugins: [recmaArticle] })).replaceAll('\"react/jsx-runtime\"', JSON.stringify(pathToFileURL(require.resolve('react/jsx-runtime')).href));
  const compiled = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
  return { data: compiled.articleData, html: renderToStaticMarkup(createElement(compiled.default)) };
}
const markdown = await render('## Déjà vu\n\nHello **world**.\n\n## Déjà vu\n\n### Details\n\n<h2 id="custom">Custom heading</h2>\n\n## Overview');
assert.deepEqual(markdown.data.toc.map((h) => h.id), ['deja-vu', 'deja-vu-2', 'details', 'custom', 'overview-2']);
for (const item of markdown.data.toc) assert.ok(markdown.html.includes(`id="${item.id}"`));
const jsx = await render('export default function Post() { return <div><h2>My <em>section</em></h2><p>Hello world.</p><h3 id="saved-anchor">Details</h3></div> }');
assert.deepEqual(jsx.data.toc, [{ id: 'my-section', title: 'My section', depth: 2 }, { id: 'saved-anchor', title: 'Details', depth: 3 }]);
assert.match(jsx.html, /id="my-section"/);
const long = await render('word '.repeat(441));
assert.equal(long.data.readingMinutes, 3);
assert.equal(jsx.data.readingMinutes, 1);
const rich = await render('## Sources\n\nA footnote.[^one]\n\n| Name | Value |\n| --- | --- |\n| One | Two |\n\n[^one]: A source.');
assert.match(rich.html, /<table>/);
assert.match(rich.html, /data-footnote-ref/);
assert.match(rich.html, /id="user-content-fn-one"/);
console.log('PASS MDX metadata: Markdown and JSX anchors, duplicate headings, explicit IDs, reading time');

if (process.env.PORTFOLIO_ORIGIN) {
  const routes = ['hackathons', 'jachacks', 'hc26', 'footy', 'fast-tracked-uni-career', 'uwreflection', 'uogreflection', 'soccer-stats'];
  for (const slug of routes) {
    const response = await fetch(`${process.env.PORTFOLIO_ORIGIN}/${slug}`);
    assert.equal(response.status, 200, slug);
    const html = (await response.text()).replace(/<main[^>]*class="route-loading"[^>]*>.*?<\/main>/s, "");
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${slug}: exactly one article title`);
    assert.match(html, /property="og:type" content="article"/, `${slug}: article metadata`);
    assert.match(html, /name="description" content="[^"]+"/, `${slug}: description`);
    const nav = html.match(/<nav[^>]*aria-label="Table of contents"[^>]*>(.*?)<\/nav>/s)?.[1];
    assert.ok(nav, `${slug}: server-rendered contents`);
    const anchors = [...nav.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
    assert.ok(anchors.length > 1, `${slug}: contents has sections`);
    for (const id of anchors) assert.ok(html.includes(`id="${id}"`), `${slug}: ${id} anchor exists before hydration`);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${slug}: unique IDs`);
    if (slug === 'footy') {
      assert.equal((html.match(/<video/g) ?? []).length, 8);
      assert.equal((html.match(/<video[^>]*controls/g) ?? []).length, 8);
    }
    console.log(`PASS article /${slug}`);
  }
}
