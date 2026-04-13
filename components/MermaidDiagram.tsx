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
      theme: 'base',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      themeVariables: {
        darkMode: true,
        background: 'transparent',
        mainBkg: 'rgba(255,255,255,0.06)',
        secondBkg: 'rgba(255,255,255,0.06)',
        tertiaryColor: 'transparent',
        lineColor: 'rgba(255,255,255,0.45)',
        primaryTextColor: 'rgba(255,255,255,0.92)',
        secondaryTextColor: 'rgba(255,255,255,0.75)',
        tertiaryTextColor: 'rgba(255,255,255,0.65)',
        primaryBorderColor: 'rgba(255,255,255,0.25)',
        secondaryBorderColor: 'rgba(255,255,255,0.2)',
        clusterBkg: 'transparent',
        titleColor: 'rgba(255,255,255,0.9)',
        edgeLabelBackground: 'rgba(30,28,26,0.92)',
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
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
