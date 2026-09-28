// The tile in the head of each widget in chapter 01.
//
// Four of the eight kinds of material came out of somebody else's app, and the
// tile is where that shows: the call client's violet, the recorder's red, the
// post client's mark, a portrait for the person. The other four are what EKHO
// makes of that material and take the page's own type mark instead.
//
// There used to be a drawing under each of these as well — a waveform, an
// address bar, a row of keys — and it was decoration: grey bars saying what
// the label above them had already said. They are gone. What a captured thing
// carries now is one line of itself.
//
// Evocations, not screenshots: no wordmarks, no logos, no claim that any of
// these products is involved. Drawn on a 22 x 22 grid.

/** the four that wear the look of the app they came out of */
export const APP_STILLS = new Set(['person', 'meeting', 'voice', 'article']);

const rect = (x: number, y: number, w: number, h: number, cls: string, r = 2) =>
  `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;

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
