'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useRef } from 'react';

type MermaidDiagramProps = {
  chart: string;
  className?: string;
  /** for screen readers */
  'aria-label'?: string;
};

export function MermaidDiagram({ chart, className, 'aria-label': ariaLabel }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, '');
  const runIdRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const graphId = `mmd-${reactId}-${++runIdRef.current}`;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      themeVariables: {
        background: 'transparent',
        mainBkg: '#f4f4f5',
        secondBkg: '#e4e4e7',
        lineColor: '#52525b',
        primaryTextColor: '#18181b',
        secondaryTextColor: '#3f3f46',
        primaryBorderColor: '#a1a1aa',
        clusterBkg: 'transparent',
        edgeLabelBackground: '#fafafa',
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: false,
        curve: 'basis',
      },
    });

    void (async () => {
      try {
        const { svg } = await mermaid.render(graphId, chart.trim());
        if (!cancelled) container.innerHTML = svg;
      } catch {
        if (!cancelled) container.textContent = 'diagram could not render';
      }
    })();

    return () => {
      cancelled = true;
      container.innerHTML = '';
    };
  }, [chart, reactId]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={ariaLabel ?? 'architecture diagram'}
      className={[
        'mermaid-diagram overflow-x-auto py-2 [&_svg]:mx-auto [&_svg]:max-w-none [&_svg]:bg-transparent',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
