# AGENTS.md — ekho-website

> Single-source entry point for everyone working on this repo, human or AI. Codex, OpenCode, Pi and others read this file directly; Claude Code loads it through the `CLAUDE.md` stub (`@AGENTS.md`). **Read it fully before touching any file.**
>
> Every rule here names where it is enforced. A rule with no enforcement point is documentation, not a rule — if you find one, that is a bug in this file.
>
> If you only want to change a sentence on the site, read §1, §5 and §6 and stop. The rest is for people changing how the site is built.

## 1 · What this repo is

The source of **[ekholabs.eu](https://ekholabs.eu)** — the public website of EKHO Labs. It is an [Astro](https://astro.build) project that compiles to plain static files and is served by GitHub Pages.

**What it is not:**

- **Not the product.** The `ekho` CLI lives in the `ekho` repo. Nothing here imports it, and no claim on this site should get ahead of what that repo actually ships.
- **Not a spec.** The specification lives in the `ekho-cockpit` spec vault. This site describes; it does not define.
- **Not an application.** There is no server, no database, no login, no API. If a change needs one of those, it does not belong here.

**The one property that shapes everything:** every push to `main` is **published to the public internet within a minute**, under the EKHO Labs name, with no review gate between the merge and the world. There is no staging environment. That is why §5 asks you to look at the page locally, and why §9's rollback path matters more than it would elsewhere.

## 2 · Non-negotiables

Violating one of these fails review regardless of what else the change does.

| #   | Rule                                                                                                                                               | Enforced by                                                    |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| N1  | `public/CNAME` contains exactly `ekholabs.eu` and is never deleted. Losing it drops the custom domain on the next deploy                           | CI step _Custom domain is intact_ (`.github/workflows/ci.yml`) |
| N2  | Never edit `dist/`. It is build output — edit the source and rebuild                                                                               | `.gitignore` · review                                          |
| N3  | Never commit a secret, token, analytics key or private URL. Everything in this repo is public the moment it merges                                 | review · repo is public                                        |
| N4  | No claim on the site that the `ekho` repo does not yet support. Unshipped things are marked as such, the way the install snippet is                | review                                                         |
| N5  | The site builds to static output — no SSR adapter, no server islands, no runtime environment variables. GitHub Pages serves files and nothing else | CI step _Build_ · `astro.config.mjs` has no `adapter`          |
| N6  | No third-party script that sets a cookie or profiles visitors without a legal basis. EKHO Labs is an EU entity and this is an EU domain            | review                                                         |
| N7  | Reformatting never shares a commit with a content or logic change                                                                                  | review (`git show -w` must differ from `git show`)             |
| N8  | Every internal link resolves to a page the build actually produced                                                                                 | CI step _No broken internal links_ (`tools/check-links.mjs`)   |

## 3 · Repo map

```
src/
  pages/           one file per URL — the filename IS the route
    index.astro      /            the homepage
    404.astro        /404         shown by Pages for unknown paths
  layouts/
    Base.astro     the shell every page wraps itself in:
                   <head>, meta tags, site header, footer
  styles/
    global.css     design tokens (:root) and every style in the site
public/            copied into the build verbatim, no processing
  CNAME            the custom domain — see N1
  favicon.svg      tab icon
  robots.txt       crawler policy, points at the sitemap
tools/
  check-links.mjs  internal link checker, run by CI against dist/
.github/workflows/
  ci.yml           format · types · build · CNAME · links — on every PR
  deploy.yml       build and publish to GitHub Pages — on push to main
astro.config.mjs   site URL and integrations
dist/              build output. Generated, git-ignored, never edited (N2)
```

Adding a file to `src/pages/` adds a URL. Adding `src/pages/about.astro` publishes `/about` — there is no router to register it with and no navigation to rebuild, though you will probably want to add it to the `.nav` block in `src/layouts/Base.astro` too.

## 4 · Commands

```bash
npm install          # once, after cloning or when package.json changes

npm run dev          # live site at http://localhost:4321, reloads as you save
npm run build        # static output into dist/
npm run preview      # serve dist/ exactly as GitHub Pages will

# checks — the same four CI runs, in the same order
npm run format:check # Prettier: is everything formatted?
npm run format       # Prettier: format it
npm run check        # Astro: broken templates, bad props, type errors
npm run build        # does it compile at all?
node tools/check-links.mjs   # after a build: do internal links resolve? (N8)
```

`npm run dev` is the one you want open the whole time you are editing. Leave it running; it rebuilds on every save.

## 5 · Editing the site

The common case, start to finish:

```bash
git switch -c docs/<slug>     # branch first — never work on main (N9 in §7)
npm run dev                   # open http://localhost:4321 and leave it open
# …edit, watch the browser update…
npm run format && npm run check && npm run build && node tools/check-links.mjs
git add -A && git commit -m "docs(content): <what changed>"
git push -u origin docs/<slug>
gh pr create --fill
```

**Where things live.** Text and page structure are in `src/pages/*.astro`; anything that appears on _every_ page — the header, footer, nav links, `<title>` fallback, meta tags — is in `src/layouts/Base.astro`; all styling is in `src/styles/global.css`.

**The shape of a page file.** Everything above the second `---` is a code block that runs at build time; everything below is the HTML that gets published.

```astro
---
import Base from '../layouts/Base.astro';
---

<Base title="Page title — EKHO Labs" description="One sentence for search results.">
  <h1>Heading</h1>
  <p class="lede">Opening paragraph.</p>
</Base>
```

`title` and `description` are required on every page: they are what Google and a link preview show. Write the description as a real sentence, not keywords.

**Writing HTML in `.astro` files.** It is ordinary HTML with two catches. `{` and `}` mean "evaluate this as JavaScript", so a literal brace in prose must be written `&#123;`. And a `<` inside text — in a command, say — must be written `&lt;`, which is why the install snippet on the homepage reads `&lt;key&gt;`.

**Adding a page.** Create `src/pages/<name>.astro`, copy the shape above, add a link to it in the `.nav` block of `src/layouts/Base.astro`. The URL is `/<name>`.

**Do not** hand-edit anything in `dist/` (N2). Those files are regenerated by the next build and your change disappears without a trace.

## 6 · Styling

`src/styles/global.css` opens with a `:root` block of design tokens. Change a colour or spacing value **there**, once, and it applies everywhere:

```css
--bg      page background        --text    body text
--surface cards and code blocks  --muted   secondary text
--border  hairlines              --accent  links and highlights
--radius  corner rounding        --maxw    content column width
```

Light mode is a second definition of the same tokens under `@media (prefers-color-scheme: light)`. **A colour added to one block must be added to the other**, or the site breaks for half its visitors — check both themes before opening a PR (macOS: System Settings → Appearance).

Rules that hold regardless of what you are styling:

- No CSS framework, no utility classes, no CSS-in-JS. One stylesheet, plain CSS, semantic class names.
- Never hardcode a colour in a page or layout file. Use a token, or add one.
- The site must work at 320px wide with no horizontal scroll. The `.wrap` class already handles the content column and its 16px gutters — use it rather than inventing margins.
- No web font unless someone decides the tradeoff is worth it. The current stack uses the reader's system font: nothing to download, nothing to ask consent for.

## 7 · Branches, commits, pull requests

```
main                  always deployable — it IS the live site
  feat/<slug>         a new page or capability
  fix/<slug>          something is wrong
  docs/<slug>         copy, wording, content
  style/<slug>        visual change, no copy change
  chore/<slug>        tooling, dependencies, CI
```

Commit: `type(scope): description`
Types: `feat` · `fix` · `docs` · `style` · `chore` · `build` · `ci`
Scopes: `content` · `layout` · `styles` · `seo` · `deploy` · `ci` · `deps`

Subject in the imperative, no trailing period, **72 bytes** or fewer — bytes, not characters, so an em dash costs three and a subject that reads as 71 characters can be 73. A body is only needed when the _why_ is not obvious from the subject.

| #   | Rule                                                                                                        | Enforced by                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| N9  | No direct commit to `main`. Every change goes through a PR **and a green CI**, with no exception for anyone | ruleset _main - every change through a PR, CI is the authority_ (no bypass actors) |
| N10 | A PR that changes what a visitor sees says so in its body, in one line                                      | review                                                                             |

N9 is enforced, not advisory: a push straight to `main` is rejected by the ruleset, as is a force-push, a branch deletion and a merge whose `check` run is not green. The ruleset requires the branch to be up to date before merging and allows **merge commits only** — no squash, no rebase, so the history of what was deployed stays readable. It requires zero approvals, because GitHub does not let you approve your own PR and a team this size would deadlock; CI is the gate, and a second pair of eyes is a convention here rather than a rule.

Because `main` deploys itself the moment it merges, "I will fix it right after merging" is not a plan — the broken version is live for as long as the fix takes.

## 8 · Checks

There is no test suite; a brochure site does not earn one. What stands in for it, in the order CI runs it:

| Check          | What it catches                              | Command                      |
| -------------- | -------------------------------------------- | ---------------------------- |
| Formatting     | inconsistent style, noisy diffs              | `npm run format:check`       |
| Astro check    | broken templates, missing props, type errors | `npm run check`              |
| Build          | anything that stops the site compiling       | `npm run build`              |
| CNAME intact   | the custom domain about to be dropped (N1)   | CI step, see `ci.yml`        |
| Internal links | a link to a page that does not exist (N8)    | `node tools/check-links.mjs` |

All five run on every pull request via `.github/workflows/ci.yml`. Run them locally before you push — they take seconds and CI runs the identical commands, so a local pass means a CI pass.

**What no check can catch:** whether the page _reads_ well, whether it looks right on a phone, whether both colour themes work, and whether a claim is true. Look at the page in a browser. Nothing here substitutes for that.

## 9 · Deployment

```
push to main → .github/workflows/deploy.yml
             → npm ci · npm run build
             → upload dist/ as a Pages artifact
             → actions/deploy-pages publishes it
             → live at https://ekholabs.eu (~1 minute)
```

Nobody deploys by hand and nobody should. There is no deploy key, no FTP, no server. `workflow_dispatch` is enabled if you need to re-run a deploy without a new commit.

```bash
gh run list --limit 5          # did the last deploy succeed?
gh run watch                   # follow the one in flight
gh run view --log-failed       # why the last one failed
```

**Rolling back** is `git revert <sha>` on a branch, then a PR — the revert deploys itself like anything else. Force-pushing `main` to undo a deploy is rejected by the ruleset, and rightly: the deployment history would stop matching the commit history and the next person could not tell what is actually live.

**The custom domain.** `public/CNAME` is copied into `dist/` by the build and is what binds the site to `ekholabs.eu` (N1). The domain is on **Hetzner DNS**, and the apex records must stay as:

```
A     @    185.199.108.153     AAAA  @    2606:50c0:8000::153
A     @    185.199.109.153     AAAA  @    2606:50c0:8001::153
A     @    185.199.110.153     AAAA  @    2606:50c0:8002::153
A     @    185.199.111.153     AAAA  @    2606:50c0:8003::153
CNAME www  ekholabs.github.io.
```

Those four IPv4 addresses are GitHub's, shared by every Pages site, and they change rarely but they do change — if the site goes dark with DNS errors, check them against [GitHub's current list](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site) before debugging anything in this repo. _Enforce HTTPS_ is on and must stay on.

**If the domain ever has to be set up again**, the order is not optional. DNS records first; then the domain on Pages (`gh api -X PUT repos/ekholabs/ekho-website/pages -f cname=ekholabs.eu`); then GitHub requests a Let's Encrypt certificate, which takes minutes; then, and only then, HTTPS enforcement (`-F https_enforced=true`). Passing `https_enforced` in the same call that sets the domain fails with `The certificate does not exist yet` — GitHub sets it to `false` by itself and it is turned on afterwards. Enforcing HTTPS before the certificate exists takes the site down rather than merely leaving it unencrypted.

## 10 · Definition of done

- [ ] `npm run format:check`, `npm run check` and `npm run build` pass
- [ ] `node tools/check-links.mjs` passes against a fresh build
- [ ] you loaded the page in a browser and read it
- [ ] it holds up at 320px wide and in both colour themes
- [ ] every new page has a real `title` and `description`
- [ ] no claim outruns what the `ekho` repo ships (N4)
- [ ] `public/CNAME` still says `ekholabs.eu` (N1)
- [ ] no reformatting mixed with content (`git show -w` differs from `git show`)
- [ ] the PR body names what a visitor will see differently (N10)

## 11 · Traps

- **Editing `dist/` and seeing it work.** `npm run preview` serves `dist/`, so a hand-edit there appears to take effect — and is erased by the next build. The source is `src/` (N2).
- **`{` in prose.** Astro reads it as the start of a JavaScript expression and the build fails with a parse error that points at a line with nothing wrong on it. Write `&#123;`.
- **Deleting `public/CNAME` while tidying.** It is one line and looks like leftovers. It is the domain (N1).
- **Adding a page and expecting it in the nav.** Routing is automatic; the header is not. Edit the `.nav` block in `src/layouts/Base.astro`.
- **A colour that only exists in the dark block.** It silently falls back to whatever was there in light mode, usually to something unreadable. Both `:root` blocks or neither (§6).
- **`npm install` instead of `npm ci` in CI.** `npm ci` is deliberate: it installs exactly what `package-lock.json` pins, so the deployed build matches the one you tested.
- **Trusting a green CI for copy.** CI proves the site compiles and its links resolve. It has no opinion about whether a sentence is true or a heading is good.

## 12 · Context

- `ekho` — the CLI this site describes. Its `AGENTS.md` is the model this file follows.
- `ekho-cockpit` — the spec vault. The source of truth for what EKHO is, when the site needs to describe it.
- [Astro docs](https://docs.astro.build) — for anything about the framework itself.
