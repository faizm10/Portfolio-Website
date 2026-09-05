'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { WritingEntry } from '@/lib/writing';
import { thoughtCategoryLabels, type PostCategory } from '@/app/posts';

const categories = ['All writing', 'Essays', 'Build notes', 'Field notes'] as const;
export default function WritingArchive({ entries }: { entries: WritingEntry[] }) {
  const [category, setCategory] = useState<PostCategory | 'All writing'>('All writing');
  const featured = entries.find((post) => post.featured) ?? entries[0];
  const visible = entries.filter((entry) => category === 'All writing' ? entry.slug !== featured?.slug : entry.category === category);
  return (
    <main id="main-content" className="journal-index">
      <header className="journal-intro">
        <p className="journal-eyebrow"><span className="journal-dot" /> a little space for my thoughts</p>
        <h1>some <em>thoughts</em></h1>
        <p>things on my mind, lessons along the way,<br className="journal-desktop-break" /> and moments i want to remember.</p>
      </header>
      {category === 'All writing' && featured && (
        <section className="journal-feature" aria-labelledby="featured-title">
          <div className="journal-feature-copy">
            <p className="journal-eyebrow">a recent thought <span> / {featured.date}</span></p>
            <Link href={`/${featured.slug}`} className="journal-feature-title"><h2 id="featured-title">{featured.shortTitle ?? featured.title}</h2></Link>
            <p>{featured.description.toLowerCase()}</p>
            <Link href={`/${featured.slug}`} className="journal-read-link">read this thought <ArrowRight size={17} /><span>{featured.readingMinutes} min read</span></Link>
          </div>
          {featured.cover && <Link className="journal-feature-image" href={`/${featured.slug}`} aria-label={`Read ${featured.title}`}>
            <Image src={featured.cover.src} alt={featured.cover.alt} width={700} height={520} sizes="(max-width: 640px) calc(100vw - 40px), 420px" priority />
            <span className="journal-image-note">{featured.cover.caption}</span>
          </Link>}
        </section>
      )}
      <section className="journal-archive" aria-label="Writing archive">
        <div className="journal-filter-bar">
          <div className="journal-filters" role="group" aria-label="Filter writing by category">
            {categories.map((item) => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item === 'All writing' ? 'all thoughts' : thoughtCategoryLabels[item]}{' '}<span>{String(item === 'All writing' ? entries.length : entries.filter((entry) => entry.category === item).length).padStart(2, '0')}</span></button>)}
          </div>
          <span className="journal-archive-label">more thoughts</span>
        </div>
        <p className="sr-only" role="status">{visible.length} {category === 'All writing' ? 'more pieces' : 'pieces'} shown.</p>
        <ol className="journal-entries">
          {visible.map((entry, index) => (
            <li key={entry.slug}>
              <Link href={`/${entry.slug}`} className="journal-entry">
                <span className="journal-entry-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="journal-entry-copy">
                  <div className="journal-entry-meta"><span className={`journal-category category-${entry.category.toLowerCase().replace(' ', '-')}`}>{thoughtCategoryLabels[entry.category]}</span><span>{entry.date}</span>{entry.ongoing && <span className="journal-ongoing">growing collection</span>}</div>
                  <h2>{entry.title.toLowerCase()}</h2>
                  <p>{entry.description.toLowerCase()}</p>
                  <span className="journal-entry-time">{entry.readingMinutes} min read</span>
                </div>
                {entry.image && <Image className="journal-entry-image" src={entry.image} alt="" width={112} height={88} sizes="(max-width: 640px) 64px, 100px" />}
                <ArrowUpRight className="journal-entry-arrow" size={20} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
        <p className="journal-archive-end"><span /> more thoughts, as they come. <span /></p>
      </section>
    </main>
  );
}
