// A sketch of the raw thing each card is about.
//
// The cards in chapter 01 carry a mark, a title and two lines of meta, and on a
// phone that is eight near-identical blocks of type: nothing tells a recording
// from an article at a glance. These do — one drawing each, in the same
// hairline the rest of the page is drawn in, so the strip reads as eight
// different kinds of material rather than eight paragraphs.
//
// Deliberately abstract: none of them is a screenshot of anything, because at
// this point in the story the material has not been through EKHO yet. Drawn on
// a 200 x 64 grid; `line` is the hairline, `sig` the one accent per card.

const bars = (rows: [number, number, number, number, string][]) =>
  rows
    .map(
      ([x, y, w, h, cls]) =>
        `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}"/>`,
    )
    .join('');

// a spoken minute, as the level meter of a recorder draws it
const wave = (() => {
  const h = [
    6, 11, 18, 27, 38, 30, 22, 34, 44, 52, 41, 30, 21, 33, 46, 38, 26, 17, 25,
    36, 28, 19, 12, 7,
  ];
  return h
    .map((v, i) => {
      const x = 8 + i * 8;
      const cls = i > 7 && i < 13 ? 'sk-sig' : 'sk-fill';
      return `<rect class="${cls}" x="${x}" y="${32 - v / 2}" width="3" height="${v}" rx="1.5"/>`;
    })
    .join('');
})();

// an insight is a node that already has somewhere to sit
const graph = (() => {
  const pts = [
    [36, 16],
    [22, 44],
    [72, 50],
    [86, 18],
    [148, 26],
    [166, 48],
    [124, 46],
  ];
  const c = [100, 32];
  const links = pts
    .map(([x, y]) => `<path class="sk-line" d="M${c[0]} ${c[1]} ${x} ${y}"/>`)
    .join('');
  const dots = pts
    .map(([x, y]) => `<circle class="sk-fill" cx="${x}" cy="${y}" r="3"/>`)
    .join('');
  return `${links}${dots}<circle class="sk-sig" cx="${c[0]}" cy="${c[1]}" r="5.5"/>`;
})();

// a week, with the one afternoon that is the meeting
const week = Array.from({ length: 7 }, (_, i) => {
  const x = 9 + i * 27;
  const on = i === 3;
  return `<rect class="${on ? 'sk-sig' : 'sk-line'}" x="${x}" y="12" width="20" height="40" rx="3"/>`;
}).join('');

export const SKETCHES: Record<string, string> = {
  // a face, and the two lines a card always carries next to one
  person:
    '<circle class="sk-line" cx="32" cy="23" r="11"/>' +
    '<path class="sk-line" d="M13 50a19 19 0 0 1 38 0"/>' +
    bars([
      [68, 16, 88, 6, 'sk-fill'],
      [68, 29, 56, 6, 'sk-fill'],
      [68, 42, 30, 6, 'sk-sig'],
    ]),

  meeting: week,
  voice: wave,

  // one path in, two out, and only one of them taken
  decision:
    '<path class="sk-line" d="M8 32h56"/>' +
    '<path class="sk-sig-stroke" d="M64 32c26 0 24-18 50-18h78"/>' +
    '<path class="sk-line sk-dash" d="M64 32c26 0 24 18 50 18h50"/>' +
    '<circle class="sk-sig" cx="64" cy="32" r="4.5"/>',

  insight: graph,

  // still open: the box is not ticked, and the line under it is not settled
  assumption:
    '<rect class="sk-line sk-dash" x="10" y="20" width="24" height="24" rx="4"/>' +
    bars([
      [46, 20, 104, 6, 'sk-fill'],
      [46, 33, 72, 6, 'sk-fill'],
    ]) +
    '<path class="sk-sig-stroke sk-dash" d="M46 48h84"/>',

  // a line that holds, with what rests on it
  principle:
    '<path class="sk-sig-stroke" d="M8 46h184"/>' +
    '<rect class="sk-sig" x="8" y="40" width="12" height="12" rx="2"/>' +
    bars([
      [30, 14, 60, 6, 'sk-fill'],
      [30, 26, 96, 6, 'sk-fill'],
      [134, 14, 46, 6, 'sk-fill'],
      [134, 26, 30, 6, 'sk-fill'],
    ]),

  // somebody else's text, with the part you kept
  article:
    bars([
      [10, 10, 96, 8, 'sk-fill'],
      [10, 26, 180, 5, 'sk-fill'],
      [10, 37, 180, 5, 'sk-fill'],
      [10, 48, 120, 5, 'sk-fill'],
    ]) + '<rect class="sk-sig" x="10" y="37" width="74" height="5" rx="2.5"/>',
};
