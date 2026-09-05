declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { ArticleData, TocEntry } from '@/lib/writing';
  export const articleData: ArticleData;
  export const tableOfContents: TocEntry[] | undefined;
  const MDXContent: ComponentType;
  export default MDXContent;
}
