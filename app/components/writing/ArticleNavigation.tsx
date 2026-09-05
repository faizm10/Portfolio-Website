'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUp, ChevronDown } from 'lucide-react';
import type { TocEntry } from '@/lib/writing';

export default function ArticleNavigation({ title, toc, readingMinutes }: { title: string; toc: TocEntry[]; readingMinutes: number }) {
  const [active, setActive] = useState('overview');
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const entries = [{ id: 'overview', title: 'overview', depth: 2 }, ...toc];
  useEffect(() => {
    const ids = ['overview', ...toc.map((entry) => entry.id)];
    const headings = ids.map((id) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    const article = document.getElementById('article-body');
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = 'overview';
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= 150) current = heading.id;
      }
      setActive(current);
      if (article) {
        const rect = article.getBoundingClientRect();
        const distance = Math.max(1, rect.height - window.innerHeight + 120);
        const percent = Math.round(Math.max(0, Math.min(1, (120 - rect.top) / distance)) * 100);
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${percent / 100})`;
        if (percentRef.current) percentRef.current.textContent = `${percent}%`;
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resize = new ResizeObserver(schedule);
    if (article) resize.observe(article);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      resize.disconnect();
    };
  }, [toc]);
  useEffect(() => {
    const rail = railRef.current;
    const link = rail?.querySelector<HTMLElement>('[aria-current="location"]');
    if (rail && link) {
      const offset = link.getBoundingClientRect().top - rail.getBoundingClientRect().top;
      if (offset < 0 || offset + link.offsetHeight > rail.clientHeight) {
        rail.scrollTop += offset - rail.clientHeight / 2;
      }
    }
  }, [active]);
  const links = entries.map((entry) => (
    <a key={entry.id} href={`#${entry.id}`} className={entry.depth === 3 ? 'journal-toc-subsection' : undefined} aria-current={active === entry.id ? 'location' : undefined} onClick={() => { if (detailsRef.current) detailsRef.current.open = false; }}>
      {entry.title.toLowerCase()}
    </a>
  ));
  return (
    <>
      <div className="journal-progress" aria-hidden="true"><div ref={progressRef} /></div>
      <aside className="journal-rail">
        <Link className="journal-back" href="/blog"><ArrowLeft size={14} /> all thoughts</Link>
        <p className="journal-rail-title">{title.toLowerCase()}</p>
        <p className="journal-rail-meta">{readingMinutes} min read <span>·</span> <span ref={percentRef}>0%</span></p>
        <p className="journal-eyebrow journal-toc-label">in this thought</p>
        <nav ref={railRef} aria-label="Table of contents" className="journal-toc">{links}</nav>
        <a className="journal-back-top" href="#overview">back to top <ArrowUp size={13} /></a>
      </aside>
      <details className="journal-mobile-toc" ref={detailsRef}>
        <summary><span>in this thought <span> / {entries.find((entry) => entry.id === active)?.title}</span></span><ChevronDown size={15} /></summary>
        <nav aria-label="Article sections">{links}</nav>
      </details>
    </>
  );
}
