'use client';

import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore, type ReactNode } from 'react';
import { site } from '@/app/data/site';

const themeKey = 'faiz-writing-theme';
function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener('writing-theme', onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener('writing-theme', onChange);
  };
}
function getTheme() {
  try { return localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light'; }
  catch { return 'light'; }
}

export default function WritingShell({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light');
  return (
    <div className="writing-shell" data-theme={theme}>
      <header className="journal-nav">
        <Link href="/" className="journal-identity" aria-label="Faiz Mustansar home">
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Writing navigation">
          <Link href="/">home</Link>
          <Link href="/blog" aria-current="page">thoughts</Link>
          <button className="journal-theme" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} reading theme`} onClick={() => {
            try { localStorage.setItem(themeKey, theme === 'light' ? 'dark' : 'light'); }
            catch { return; }
            window.dispatchEvent(new Event('writing-theme'));
          }}>
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </nav>
      </header>
      {children}
      <footer className="journal-footer">
        <Link href="/">{site.name}</Link>
      </footer>
    </div>
  );
}
