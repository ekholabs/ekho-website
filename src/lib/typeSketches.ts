// The body of each widget in chapter 01.
//
// Every card in that strip is built the same way — a head with an app tile, a
// label and a time, a title, then a body — and what changes between them is
// the dress. Four of the eight came out of somebody else's app and wear that
// app's colours and controls: a violet join key on a meeting, a red play key
// and a waveform on a recording, an address bar on a page, a row of contact
// keys on a person. The other four are what EKHO makes of that material, and
// they keep the page's own hairline with one yellow accent and nothing else.
//
// Evocations, not screenshots: no wordmarks, no logos, no claim that any of
// these products is involved. Bodies are drawn on a 200 x 36 grid.

/** the four that wear the look of the app they came out of */
export const APP_STILLS = new Set(['person', 'meeting', 'voice', 'article']);

const rect = (x: number, y: number, w: number, h: number, cls: string, r = 2) =>
  `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;

const circle = (cx: number, cy: number, r: number, cls: string) =>
  `<circle class="${cls}" cx="${cx}" cy="${cy}" r="${r}"/>`;

// ---------------------------------------------------------------- captured

// the row of keys a contact card is acted from
const person = [8, 58, 108, 158]
  .map(
    (x) =>
      rect(x, 4, 34, 28, 'sk-key', 7) +
      circle(x + 17, 18, 4.5, 'sk-blue'),
  )
  .join('');

// who is in it, and the key you join by
const meeting =
  [18, 34, 50]
    .map((cx, i) =>
      circle(cx, 18, 10, i === 2 ? 'sk-brand' : 'sk-quiet-ring'),
    )
    .join('') +
  rect(64, 12, 34, 5, 'sk-quiet') +
  rect(64, 22, 22, 5, 'sk-quiet') +
  rect(144, 4, 52, 28, 'sk-brand', 14) +
  rect(158, 13, 14, 10, 'sk-on-brand', 2) +
  `<path class="sk-on-brand" d="M174 14.5 182 12v12l-8-2.5z"/>`;

// three minutes, half of them played
const voice = (() => {
  const h = [
    5, 9, 14, 22, 30, 24, 17, 27, 34, 30, 22, 16, 24, 32, 27, 19, 13, 20, 28,
    22, 15, 10, 6,
  ];
  const head = 16 + 11 * 7.4;
  return (
    circle(14, 18, 13, 'sk-rec') +
    `<path class="sk-on-rec" d="M10.5 13 19 18l-8.5 5z"/>` +
    h
      .map((v, i) => {
        const x = 34 + i * 7.4;
        return rect(x, 18 - v / 2, 3, v, x < head ? 'sk-rec' : 'sk-quiet', 1.5);
      })
      .join('')
  );
})();

// a post: who wrote it, that they are who they say, and the part you kept
const article =
  circle(9, 9, 9, 'sk-chrome') +
  rect(24, 2, 54, 7, 'sk-ink', 3.5) +
  circle(86, 5.5, 5, 'sk-blue') +
  `<path class="sk-on-brand" d="m83.6 5.6 1.8 1.8 3-3.2" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>` +
  rect(24, 13, 38, 5, 'sk-quiet', 2.5) +
  rect(0, 24, 200, 5, 'sk-quiet') +
  rect(0, 24, 88, 5, 'sk-sig') +
  rect(0, 32, 132, 4, 'sk-quiet');

// ------------------------------------------------------------------- EKHO's

const bars = (rows: [number, number, number, number, string][]) =>
  rows.map(([x, y, w, h, cls]) => rect(x, y, w, h, cls, h / 2)).join('');

// one path in, two out, and only one of them taken
const decision =
  '<path class="sk-line" d="M2 18h54"/>' +
  '<path class="sk-sig-stroke" d="M56 18c24 0 22-10 46-10h96"/>' +
  '<path class="sk-line sk-dash" d="M56 18c24 0 22 10 46 10h54"/>' +
  circle(56, 18, 4.5, 'sk-sig');

// a node that already has somewhere to sit
const insight = (() => {
  const pts = [
    [34, 6],
    [20, 30],
    [70, 33],
    [84, 7],
    [148, 12],
    [168, 31],
    [126, 29],
  ];
  const links = pts
    .map(([x, y]) => `<path class="sk-line" d="M100 18 ${x} ${y}"/>`)
    .join('');
  const dots = pts.map(([x, y]) => circle(x, y, 3, 'sk-fill')).join('');
  return `${links}${dots}${circle(100, 18, 5.5, 'sk-sig')}`;
})();

// still open: the box is not ticked, the line under it is not settled
const assumption =
  '<rect class="sk-line sk-dash" x="2" y="6" width="24" height="24" rx="4"/>' +
  bars([
    [38, 7, 112, 6, 'sk-fill'],
    [38, 19, 76, 6, 'sk-fill'],
  ]) +
  '<path class="sk-sig-stroke sk-dash" d="M38 31h88"/>';

// a line that holds, and what rests on it
const principle =
  '<path class="sk-sig-stroke" d="M2 30h196"/>' +
  rect(2, 24, 12, 12, 'sk-sig') +
  bars([
    [24, 4, 62, 6, 'sk-fill'],
    [24, 15, 98, 6, 'sk-fill'],
    [132, 4, 48, 6, 'sk-fill'],
    [132, 15, 32, 6, 'sk-fill'],
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

/** the tile in the head of each widget: the app's mark, or EKHO's type mark */
export const TILES: Record<string, string> = {
  // A portrait rather than the grey silhouette a contact falls back to: at
  // this size it is four shapes, and four shapes is enough to read as a
  // person instead of as a missing photo. Nobody in particular — Anna Berger
  // is a persona, and the card is a mockup.
  person:
    `<clipPath id="pfp"><circle cx="11" cy="11" r="11"/></clipPath>` +
    `<g clip-path="url(#pfp)">` +
    rect(0, 0, 22, 22, 'sk-pfp-bg', 0) +
    `<path class="sk-pfp-top" d="M11 14c5.4 0 9 3.6 9 8H2c0-4.4 3.6-8 9-8z"/>` +
    rect(9.2, 11.5, 3.6, 4, 'sk-pfp-skin', 1.2) +
    `<ellipse class="sk-pfp-hair" cx="11" cy="9.6" rx="6.6" ry="7.2"/>` +
    `<ellipse class="sk-pfp-skin" cx="11" cy="10.2" rx="4.9" ry="5.6"/>` +
    `<path class="sk-pfp-hair" d="M6.1 8.9a4.9 4.9 0 0 1 9.8 0c-1.3-2.4-8.5-2.4-9.8 0z"/>` +
    `</g>`,
  meeting:
    rect(0, 0, 22, 22, 'sk-brand', 6) +
    rect(4.5, 7, 8.5, 8, 'sk-on-brand', 1.5) +
    `<path class="sk-on-brand" d="M14.5 8.2 18.5 6.6v8.8l-4-1.6z"/>`,
  voice:
    rect(0, 0, 22, 22, 'sk-rec', 6) +
    rect(6, 8, 2, 6, 'sk-on-rec', 1) +
    rect(10, 5, 2, 12, 'sk-on-rec', 1) +
    rect(14, 8.5, 2, 5, 'sk-on-rec', 1),
  article:
    rect(0, 0, 22, 22, 'sk-x', 6) +
    `<path class="sk-x-on" d="M6 6.2 16 15.8M16 6.2 6 15.8" fill="none" stroke-width="2" stroke-linecap="round"/>`,
};
