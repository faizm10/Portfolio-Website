'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useRef } from 'react';

type MermaidDiagramProps = {
  chart: string;
  className?: string;
  /** for screen readers */
  'aria-label'?: string;
};

const themeVariables = {
  background: 'transparent',
  mainBkg: '#f5f5f5',
  secondBkg: '#fafafa',
  lineColor: '#737373',
  primaryTextColor: '#171717',
  secondaryTextColor: '#525252',
  primaryBorderColor: '#e5e5e5',
  clusterBkg: 'transparent',
  edgeLabelBackground: '#fafafa',
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
      theme: 'base',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      themeVariables,
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
