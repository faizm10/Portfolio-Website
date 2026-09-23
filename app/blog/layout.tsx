import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/app/data/site';
export const metadata: Metadata = { alternates: { canonical: `${site.url}/blog` } };
export default function WritingLayout({ children }: { children: ReactNode }) {
  return children;
}
