// Takes the pictures for the Live page of the site's Figma file (ADR-0029): one
// screen per chapter at 1440 × 900, and the phone layout screen by screen at
// 375 × 812, top to bottom, the way a reader scrolls through it. Light mode,
// because light is the main mode.
//
//   npm run capture                         # the site as it is online
//   npm run capture -- http://localhost:4321/   # a branch, before it merges
//
// The PNGs land in captures/ (git-ignored) and are placed into Figma from there.
// Nothing here talks to Figma; the script only looks at the page.
//
// It drives the Chrome that is already installed rather than downloading one.
// Elsewhere than on a Mac, point CHROME_PATH at the browser binary.
import { mkdir, rm } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const URL_TO_CAPTURE = process.argv[2] ?? 'https://ekholabs.eu/';
const OUT = 'captures';
const CHROME =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// how long a chapter gets to finish revealing before the picture is taken
const SETTLE_MS = 1800;
// on a phone the screens overlap by the header's height, so nothing falls
// between two pictures
const PHONE_OVERLAP = 72;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const written = [];

async function open(viewport, userAgent) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  if (userAgent) await page.setUserAgent(userAgent);
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
  await page.goto(URL_TO_CAPTURE, { waitUntil: 'networkidle0' });
  await sleep(2500);
  return page;
}

// Desktop: the page is built as chapters a screen tall, so one picture each.
{
  const page = await open({ width: 1440, height: 900, deviceScaleFactor: 1 });
  const ids = await page.$$eval('section.chapter', (all) => all.map((s) => s.id));
  for (const [i, id] of ids.entries()) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      window.scrollTo(0, id === 'hero' ? 0 : el.getBoundingClientRect().top + window.scrollY);
    }, id);
    await sleep(SETTLE_MS);
    const file = `${OUT}/desktop-${String(i + 1).padStart(2, '0')}-${id}.png`;
    await page.screenshot({ path: file });
    written.push(file);
  }
  await page.close();
}

// Phone: chapters flow into each other, so scroll a screen at a time.
{
  const viewport = {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  };
  const page = await open(
    viewport,
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  );
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0, i = 1; y < height; y += viewport.height - PHONE_OVERLAP, i++) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await sleep(SETTLE_MS);
    const file = `${OUT}/mobile-${String(i).padStart(2, '0')}.png`;
    await page.screenshot({ path: file });
    written.push(file);
  }
  await page.close();
}

await browser.close();
console.log(`${written.length} pictures of ${URL_TO_CAPTURE} in ${OUT}/`);
