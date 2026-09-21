# ekho-website

Source for [ekholabs.eu](https://ekholabs.eu) — the EKHO Labs website.

Built with [Astro](https://astro.build), compiled to static files, deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321, reloads as you save
```

Edit copy in `src/pages/`, the header and footer in `src/layouts/Base.astro`,
and colours in `src/styles/global.css`. Styling is Tailwind CSS v4 — see §6 of
`AGENTS.md` for the token utilities.

Before opening a pull request:

```bash
npm run format && npm run check && npm run build && node tools/check-links.mjs
```

## Read this first

**[`AGENTS.md`](AGENTS.md)** is the single source for how this repo is worked
on — what may and may not change, how to add a page, how styling is organised,
commit and branch conventions, what CI enforces, and how deployment and the
custom domain work. It covers humans and AI agents alike; `CLAUDE.md` is a stub
that imports it.
