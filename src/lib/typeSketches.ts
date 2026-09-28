import * as si from 'simple-icons';

// The tile in the head of each widget in chapter 01.
//
// Most of these came out of somebody else's app, and the tile is where that
// shows: the app's own mark in its own colour on a neutral ground. The marks
// come from simple-icons, the same package the model row on this page already
// draws from — nothing is redrawn and nothing is recoloured, which is what
// every one of those guidelines asks for. Two of them are not in that package,
// so they are drawn: a mail client's envelope and the ribbon of an assistant
// whose mark is a gradient. The four EKHO makes of this material take the
// page's own type marks instead.
//
// Nominative use: these say which app a thing came out of. They do not say
// anybody is involved in this.

const mark = (path: string, hex: string, ground = '#ececee') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="6" fill="${ground}"/><g transform="translate(5 5) scale(0.5833)"><path d="${path}" fill="${hex}"/></g></svg>`;

/** the ones that wear the look of the app they came out of */
export const APP_STILLS = new Set([
  'mail',
  'person',
  'meeting',
  'voice',
  'article',
  'video',
  'recap',
  'passage',
  'encyclopedia',
  'claude',
  'gemini',
]);

const rect = (x: number, y: number, w: number, h: number, cls: string, r = 2) =>
  `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;

/** the tile in the head of each widget: the app's mark, or EKHO's type mark */
export const TILES: Record<string, string> = {
  meeting:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="6" fill="#5b5fc7"/><rect x="5" y="8" width="9" height="8.6" rx="1.6" fill="#fff"/><path d="M15.6 9.4 19.6 7.6v8.8l-4-1.8z" fill="#fff"/></svg>`,
  voice:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="6" fill="#ff3b30"/><rect x="6.6" y="9" width="2.1" height="6" rx="1.05" fill="#fff"/><rect x="10.9" y="5.8" width="2.1" height="12.4" rx="1.05" fill="#fff"/><rect x="15.2" y="9.6" width="2.1" height="4.8" rx="1.05" fill="#fff"/></svg>`,
  article: mark(si.siX.path, '#000000'),

  video: mark(si.siYoutube.path, `#${si.siYoutube.hex}`),
  encyclopedia: mark(si.siWikipedia.path, '#000000'),
  claude: mark(si.siClaude.path, `#${si.siClaude.hex}`),
  gemini: mark(si.siGooglegemini.path, `#${si.siGooglegemini.hex}`),

  // A mail client's envelope and an assistant's ribbon: neither mark is in the
  // package, so both are drawn rather than lifted from somewhere uncertain.
  mail:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><linearGradient id="ekho-mail" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D62F0"/><stop offset="1" stop-color="#23CFFD"/></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ekho-mail)"/><rect x="4.3" y="7.4" width="15.4" height="9.2" rx="0.9" fill="#fff"/><g fill="none" stroke="#2c9ef0" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"><rect x="4.3" y="7.4" width="15.4" height="9.2" rx="0.9"/><path d="M4.6 7.7 11.1 12.9a1.4 1.4 0 0 0 1.8 0L19.4 7.7"/><path d="M4.6 16.3 9.6 12"/><path d="M19.4 16.3 14.4 12"/></g></svg>`,
  recap:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><linearGradient id="ekho-recap" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f6cbd"/><stop offset="0.5" stop-color="#b83ec8"/><stop offset="1" stop-color="#ff8c42"/></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ekho-recap)"/><path d="M6 16.5c0-4.5 1.4-8 4.2-8 2.4 0 3 2.2 3.6 4.4.6 2.2 1.2 4.4 3.6 4.4 1.4 0 2.2-.9 2.6-2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>`,

  // a passage out of a book, which has no app and no mark of its own
  passage:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="6" fill="#1a1a18"/><path d="M5.2 13.4c0-3 1.3-5 3.6-5.6l.5 1.4c-1.2.4-1.9 1.2-2 2.3h1.7v3.6H5.2zm6.8 0c0-3 1.3-5 3.6-5.6l.5 1.4c-1.2.4-1.9 1.2-2 2.3h1.7v3.6H12z" fill="#fff"/></svg>`,
};
