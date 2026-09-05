import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { highlightCode } from '@/lib/mdx/syntax';

function ArticleFigure({ src, alt, caption, width = 1400, height = 900 }: {
  src: string; alt: string; caption?: string; width?: number; height?: number;
}) {
  return <figure><Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 959px) 90vw, 690px" />{caption && <figcaption>{caption}</figcaption>}</figure>;
}
function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return <aside className="article-callout">{title && <p><strong>{title}</strong></p>}{children}</aside>;
}
function Highlight({ tone = 'olive', children }: { tone?: 'olive' | 'blue' | 'rust'; children: ReactNode }) {
  return <mark className="article-highlight" data-tone={tone}>{children}</mark>;
}
function ArticleLink({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) {
  const external = href?.startsWith('https://') || href?.startsWith('http://');
  return <a href={href} {...props} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>;
}
function ArticleCode({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) {
  const language = className?.match(/language-([\w-]+)/)?.[1];
  const html = language && typeof children === 'string' ? highlightCode(children, language) : null;
  return html
    ? <code {...props} className={className} dangerouslySetInnerHTML={{ __html: html }} />
    : <code {...props} className={className}>{children}</code>;
}
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ArticleLink,
    code: ArticleCode,
    table: ({ children, ...props }) => <div className="article-table"><table {...props}>{children}</table></div>,
    ArticleFigure, Callout, Highlight,
    ...components,
  };
}
