// One mark per note type, drawn on a 12-unit grid in the hairline weight the
// rest of the drawing uses. Shared: the graphic sets them beside a label on the
// point field, the phone sets them on the cards that stand in for it.
export const ICONS: Record<string, string> = {
  person:
    'M6 5.4a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2M1.7 11c0-2.3 1.9-3.7 4.3-3.7S10.3 8.7 10.3 11',
  meeting: 'M2 1.6h8v8.8H2zM2 4h8M4.2 1v1.6M7.8 1v1.6M4.3 6.6h3.4M4.3 8.5h2',
  voice: 'M2 5v2M4.3 2.6v6.8M6.6 4.2v3.6M8.9 5.4v1.2',
  decision: 'M1.3 6h3.4M4.7 6 10.7 2.4M4.7 6l6 3.6',
  principle: 'M6 1.1 10.9 6 6 10.9 1.1 6Z',
  insight: 'M6 1v10M1 6h10M2.5 2.5l7 7M9.5 2.5l-7 7',
  assumption:
    'M6 1.1a4.9 4.9 0 0 1 4.2 2.4M10.9 6.8a4.9 4.9 0 0 1-3.3 3.8M4.3 10.5A4.9 4.9 0 0 1 1.2 7.3M1.3 4.4a4.9 4.9 0 0 1 3.2-3',
  article: 'M2.4 1.1h4.9L9.6 3.5v7.4H2.4ZM7.2 1.1v2.5h2.4M4.1 6.2h3.8M4.1 8.4h3.8',
};
