// Fails when an internal link in the built site points at a path the build did
// not generate. Run it against dist/ after `npm run build`; CI runs it on every
// pull request. Only root-relative hrefs are checked — external URLs, mailto:
// and bare anchors are somebody else's problem.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

/** Drop the query string, the fragment and any trailing slash. */
function normalise(href) {
  const path = href.split('#')[0].split('?')[0];
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

const files = await walk(DIST);

// Every path the deployed site can serve. A file at dist/a/index.html answers
// both /a/index.html and /a, so both spellings go in.
const served = new Set();
for (const file of files) {
  const url = '/' + relative(DIST, file).split(/[\\/]/).join('/');
  served.add(url);
  if (url.endsWith('/index.html')) {
    served.add(url.slice(0, -'/index.html'.length) || '/');
  }
}

const failures = [];

for (const page of files.filter((f) => f.endsWith('.html'))) {
  const html = await readFile(page, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="([^"]*)"/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = normalise(href);
    if (!served.has(path)) {
      failures.push(`${relative(DIST, page)} → ${href}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`Broken internal links (${failures.length}):`);
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}

console.log(
  `Checked internal links across ${files.filter((f) => f.endsWith('.html')).length} page(s): all resolve.`,
);
