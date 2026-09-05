/** Compile reading metadata and stable heading anchors into each MDX module.
 * Runs after MDX's JSX transform, covering Markdown AND authored JSX headings.
 * Only visible literal children count toward the approximate reading time.
 */
const property = (name, value) => ({
  type: 'Property', key: { type: 'Identifier', name }, value,
  kind: 'init', method: false, shorthand: false, computed: false,
});
const literal = (value) => ({ type: 'Literal', value });
const toAst = (value) => Array.isArray(value)
  ? { type: 'ArrayExpression', elements: value.map(toAst) }
  : value && typeof value === 'object'
    ? { type: 'ObjectExpression', properties: Object.entries(value).map(([key, val]) => property(key, toAst(val))) }
    : literal(value);
const walk = (node, visitor) => {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach((child) => walk(child, visitor)); return; }
  visitor(node);
  for (const [key, value] of Object.entries(node)) {
    if (key !== 'loc' && key !== 'range') walk(value, visitor);
  }
};
const prop = (node, name) => node?.properties?.find((p) => (p.key?.name ?? p.key?.value) === name);
const slugify = (text) => text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-');

export default function recmaArticle() {
  return (tree) => {
    const factories = new Set();
    for (const node of tree.body) {
      if (node.type === 'ImportDeclaration' && /react\/jsx(?:-dev)?-runtime/.test(node.source.value)) {
        node.specifiers.forEach((s) => {
          if (['jsx', 'jsxs', 'jsxDEV'].includes(s.imported?.name)) factories.add(s.local.name);
        });
      }
    }
    const isJsx = (node) => node?.type === 'CallExpression' && factories.has(node.callee?.name);
    const childText = (node) => {
      if (node?.type === 'Literal' && typeof node.value === 'string') return node.value;
      if (node?.type === 'ArrayExpression') return node.elements.map(childText).join('');
      if (isJsx(node)) return childText(prop(node.arguments[1], 'children')?.value);
      return '';
    };
    const headings = [];
    const used = new Set(['overview', 'article-end']);
    let words = 0;
    walk(tree, (node) => {
      if (!isJsx(node)) return;
      const [tag, props] = node.arguments;
      const id = prop(props, 'id')?.value?.value;
      if (typeof id === 'string') used.add(id);
      const children = prop(props, 'children')?.value;
      const directText = children?.type === 'ArrayExpression'
        ? children.elements.filter((n) => n?.type === 'Literal').map(childText).join(' ')
        : children?.type === 'Literal' ? childText(children) : '';
      words += directText.trim().split(/\s+/).filter(Boolean).length;
      const name = tag.value ?? (tag.object?.name === '_components' ? tag.property?.name : undefined);
      if (!['h2', 'h3'].includes(name)) return;
      const title = childText(children).replace(/\s+/g, ' ').trim();
      if (title && props.type === 'ObjectExpression') headings.push({ title, depth: Number(name[1]), id, props, position: node.start ?? 0 });
    });
    headings.sort((a, b) => a.position - b.position);
    const toc = headings.map(({ title, depth, id, props }) => {
      if (!id) {
        const base = slugify(title) || 'section';
        id = base;
        let suffix = 2;
        while (used.has(id)) id = `${base}-${suffix++}`;
        used.add(id);
        props.properties.push(property('id', literal(id)));
      }
      return { id, title, depth };
    });
    tree.body.push({
      type: 'ExportNamedDeclaration', specifiers: [], source: null,
      declaration: {
        type: 'VariableDeclaration', kind: 'const', declarations: [{
          type: 'VariableDeclarator', id: { type: 'Identifier', name: 'articleData' },
          init: toAst({ toc, readingMinutes: Math.max(1, Math.ceil(words / 220)) }),
        }],
      },
    });
  };
}
