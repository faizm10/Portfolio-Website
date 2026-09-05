import Link from 'next/link';
import { type ReactNode } from 'react';
import { site } from '@/app/data/site';

export default function WritingShell({ children }: { children: ReactNode }) {
  return (
    <div className="writing-shell">
      <header className="journal-nav">
        <Link href="/" className="journal-identity" aria-label="Faiz Mustansar home">
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Writing navigation">
          <Link href="/">home</Link>
          <Link href="/blog" aria-current="page">thoughts</Link>
        </nav>
      </header>
      {children}
      <footer className="journal-footer">
        <Link href="/">{site.name}</Link>
      </footer>
    </div>
  );
}
