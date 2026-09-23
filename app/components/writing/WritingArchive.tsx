'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { WritingEntry } from '@/lib/writing';
import { thoughtCategoryLabels, type PostCategory } from '@/app/posts';

const categories = ['All writing', 'Essays', 'Build notes', 'Field notes'] as const;

export default function WritingArchive({ entries }: { entries: WritingEntry[] }) {
  const [category, setCategory] = useState<PostCategory | 'All writing'>('All writing');
  const visible = entries.filter((entry) => category === 'All writing' || entry.category === category);

  return (
    <main id="main-content" className="portfolio thoughts-index">
      <header className="thoughts-intro">
        <h1>some thoughts</h1>
        <p>things on my mind, lessons along the way, and moments i want to remember.</p>
      </header>

      <div className="thoughts-filters" role="group" aria-label="Filter thoughts by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item === 'All writing' ? 'all thoughts' : thoughtCategoryLabels[item]}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">{visible.length} thoughts shown.</p>
      <ul className="thoughts-list">
        {visible.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/${entry.slug}`} className="thoughts-row">
              <span className="thoughts-row-copy">
                <span className="thoughts-row-title">{entry.title}</span>
                <span className="thoughts-row-description">{entry.description}</span>
              </span>
              <span className="thoughts-row-date">{entry.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
