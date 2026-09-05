import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';

/** Runs at build/render time; Prism never needs to hydrate in the browser. */
export function highlightCode(code: string, language: string): string | null {
  const aliases: Record<string, string> = { ts: 'typescript', js: 'javascript', sh: 'bash', py: 'python', html: 'markup' };
  const grammar = Prism.languages[aliases[language] ?? language];
  return grammar ? Prism.highlight(code, grammar, language) : null;
}
