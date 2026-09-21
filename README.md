# ekho-website

Source for [ekholabs.eu](https://ekholabs.eu) — the EKHO Labs website.

Built with [Astro](https://astro.build), output is fully static, and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output
```

## Content

The site is currently a scaffold with placeholder copy:

- `src/pages/index.astro` — homepage
- `src/pages/404.astro` — not-found page
- `src/layouts/Base.astro` — shell, `<head>`, header and footer
- `src/styles/global.css` — design tokens and styles

## Deployment

`public/CNAME` pins the custom domain to `ekholabs.eu`; it is copied verbatim
into `dist/`. The apex domain needs these DNS records at the registrar:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
CNAME www ekholabs.github.io
```
