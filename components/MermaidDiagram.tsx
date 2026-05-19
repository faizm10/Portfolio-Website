'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useRef, useState } from 'react';

type MermaidDiagramProps = {
  chart: string;
  className?: string;
  /** for screen readers */
  'aria-label'?: string;
};

function getThemeVars(isDark: boolean) {
  return isDark
    ? {
        background: 'transparent',
        mainBkg: '#1c3048',
        secondBkg: '#142436',
        lineColor: '#7a9ab8',
        primaryTextColor: '#ffffff',
        secondaryTextColor: '#c8d9ec',
        primaryBorderColor: '#2a4d6e',
        clusterBkg: 'transparent',
        edgeLabelBackground: '#142436',
      }
    : {
        background: 'transparent',
        mainBkg: '#e8e4d9',
        secondBkg: '#f0efe7',
        lineColor: '#8a8270',
        primaryTextColor: '#201a10',
        secondaryTextColor: '#5c5646',
        primaryBorderColor: '#d4cfc0',
        clusterBkg: 'transparent',
        edgeLabelBackground: '#f0efe7',
      };
}

export function MermaidDiagram({ chart, className, 'aria-label': ariaLabel }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, '');
  const runIdRef = useRef(0);
  const [isDark, setIsDark] = useState(false);

  // sync with data-theme attribute and watch for changes
  useEffect(() => {
    const read = () =>
      setIsDark(document.documentElement.getAttribute('data-theme') === 'navy');
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

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
      themeVariables: getThemeVars(isDark),
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
  }, [chart, reactId, isDark]);

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
