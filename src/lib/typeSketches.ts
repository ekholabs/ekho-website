// A still of each thing the way you last saw it.
//
// The eight cards in chapter 01 are the eight kinds of material a context is
// made of, and they fall into two halves. Four of them you did not make — a
// call, a recording, a page, a person in an address book — and those look like
// where they came from: the meeting has a call client's dark stage and its red
// leave button, the recording has the red playhead of a phone's voice memo,
// the page has browser chrome. Four of them are what EKHO makes of that
// material — a decision, an insight, an assumption, a principle — and those
// have no borrowed chrome at all: the page's own hairline, one yellow accent,
// nothing else. The split is the chapter's argument in a picture.
//
// Evocations, not screenshots: no wordmarks, no logos, no claim that any of
// these products is involved. Drawn on a 200 x 64 grid.

/** the four that wear the look of the app they came out of */
export const APP_STILLS = new Set(['person', 'meeting', 'voice', 'article']);

const rect = (
  x: number,
  y: number,
  w: number,
  h: number,
  cls: string,
  r = 2,
) => `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;

const circle = (cx: number, cy: number, r: number, cls: string) =>
  `<circle class="${cls}" cx="${cx}" cy="${cy}" r="${r}"/>`;

const surface = (cls = 'sk-surface') => rect(0, 0, 200, 64, cls, 0);

// ---------------------------------------------------------------- captured

// A call, two people in it, the bar you leave it by.
const meeting =
  surface('sk-stage') +
  rect(6, 5, 92, 36, 'sk-tile', 3) +
  rect(102, 5, 92, 36, 'sk-tile', 3) +
  circle(52, 23, 10, 'sk-quiet-on') +
  circle(148, 23, 10, 'sk-brand') +
  // the tile that is speaking
  `<rect class="sk-brand-stroke" x="102.5" y="5.5" width="91" height="35" rx="3"/>` +
  rect(56, 46, 88, 14, 'sk-tile', 7) +
  circle(70, 53, 2.2, 'sk-onstage') +
  circle(80, 53, 2.2, 'sk-onstage') +
  circle(90, 53, 2.2, 'sk-onstage') +
  rect(104, 48, 28, 10, 'sk-hang', 5);

// Three minutes on a phone, half of them played.
const voice = (() => {
  const h = [
    5, 9, 15, 24, 34, 27, 19, 30, 40, 47, 37, 27, 19, 29, 41, 34, 23, 15, 22,
    32, 25, 17, 11, 6,
  ];
  const head = 96;
  const bars = h
    .map((v, i) => {
      const x = 10 + i * 7.6;
      return rect(x, 24 - v / 2, 3, v, x < head ? 'sk-rec' : 'sk-quiet', 1.5);
    })
    .join('');
  return (
    surface() +
    bars +
    rect(head, 4, 1.6, 40, 'sk-rec', 0.8) +
    rect(12, 52, 18, 4, 'sk-quiet') +
    rect(170, 52, 18, 4, 'sk-quiet') +
    circle(100, 54, 8, 'sk-rec') +
    `<path class="sk-on-rec" d="M97.5 50.5 104 54l-6.5 3.5z"/>`
  );
})();

// Somebody else's page, with the part you kept.
const article =
  surface() +
  rect(0, 0, 200, 15, 'sk-chrome', 0) +
  circle(9, 7.5, 2.2, 'sk-quiet') +
  circle(17, 7.5, 2.2, 'sk-quiet') +
  circle(25, 7.5, 2.2, 'sk-quiet') +
  rect(36, 4, 124, 7, 'sk-surface', 3.5) +
  rect(12, 24, 96, 8, 'sk-ink') +
  rect(12, 39, 176, 4, 'sk-quiet') +
  rect(12, 47, 176, 4, 'sk-quiet') +
  rect(12, 55, 118, 4, 'sk-quiet') +
  rect(12, 47, 72, 4, 'sk-sig');

// A card in an address book, with the row of things you can do from it.
const person =
  surface() +
  circle(30, 28, 15, 'sk-chrome') +
  circle(30, 24, 5.5, 'sk-quiet') +
  `<path class="sk-quiet-stroke" d="M21 39a9.5 9.5 0 0 1 18 0"/>` +
  rect(56, 17, 86, 7, 'sk-ink') +
  rect(56, 30, 58, 5, 'sk-quiet') +
  [56, 78, 100, 122]
    .map((x) => rect(x, 44, 17, 15, 'sk-key', 4) + circle(x + 8.5, 51.5, 3.2, 'sk-blue'))
    .join('');

// ------------------------------------------------------------------- EKHO's

const bars = (rows: [number, number, number, number, string][]) =>
  rows.map(([x, y, w, h, cls]) => rect(x, y, w, h, cls, h / 2)).join('');

// one path in, two out, and only one of them taken
const decision =
  '<path class="sk-line" d="M8 32h56"/>' +
  '<path class="sk-sig-stroke" d="M64 32c26 0 24-18 50-18h78"/>' +
  '<path class="sk-line sk-dash" d="M64 32c26 0 24 18 50 18h50"/>' +
  circle(64, 32, 4.5, 'sk-sig');

// an insight is a node that already has somewhere to sit
const insight = (() => {
  const pts = [
    [36, 16],
    [22, 44],
    [72, 50],
    [86, 18],
    [148, 26],
    [166, 48],
    [124, 46],
  ];
  const links = pts
    .map(([x, y]) => `<path class="sk-line" d="M100 32 ${x} ${y}"/>`)
    .join('');
  const dots = pts.map(([x, y]) => circle(x, y, 3, 'sk-fill')).join('');
  return `${links}${dots}${circle(100, 32, 5.5, 'sk-sig')}`;
})();

// still open: the box is not ticked, and the line under it is not settled
const assumption =
  '<rect class="sk-line sk-dash" x="10" y="20" width="24" height="24" rx="4"/>' +
  bars([
    [46, 20, 104, 6, 'sk-fill'],
    [46, 33, 72, 6, 'sk-fill'],
  ]) +
  '<path class="sk-sig-stroke sk-dash" d="M46 48h84"/>';

// a line that holds, with what rests on it
const principle =
  '<path class="sk-sig-stroke" d="M8 46h184"/>' +
  rect(8, 40, 12, 12, 'sk-sig') +
  bars([
    [30, 14, 60, 6, 'sk-fill'],
    [30, 26, 96, 6, 'sk-fill'],
    [134, 14, 46, 6, 'sk-fill'],
    [134, 26, 30, 6, 'sk-fill'],
  ]);

export const SKETCHES: Record<string, string> = {
  person,
  meeting,
  voice,
  article,
  decision,
  insight,
  assumption,
  principle,
};
