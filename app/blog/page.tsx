import type { Metadata } from 'next';
import { site } from '@/app/data/site';
import { getWritingEntries } from '@/lib/writing';
import WritingArchive from '@/app/components/writing/WritingArchive';

export const metadata: Metadata = {
  title: `some thoughts · ${site.name}`,
  description: `some thoughts by ${site.name}: things on my mind, lessons along the way, and moments i want to remember.`,
};
export default async function BlogPage() {
  return <WritingArchive entries={await getWritingEntries()} />;
}
