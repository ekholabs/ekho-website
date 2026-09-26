# Landing v2 — build spec

> One document that describes the whole homepage, synthesised from the CI work of
> 2026-09-23 to 2026-09-26 (Figma file _EKHO CI · Vorschlag_, pages 04 to 13) and
> from what `src/pages/index.astro` already does today.
>
> It is a spec, not a decision record. The decisions it rests on are
> **ADR-0027** (Braun formal language, light-first) and **ADR-0007** (shadcn/ui
> as the component base), both in `EKHO_brain/02 - Areas/Decisions/`.
> Design tokens: `~/Documents/EKHO/EKHO_DS.md` v0.5.

## 0 · The one idea

**The scroll is the lifecycle of a vault.** Not a stack of boxes. One page, one
movement, three states of the same picture:

```
scattered            connected             compounding
before EKHO    ->    with EKHO       ->    EKHO compounds
```

Everything else hangs off that movement. The graphic on the right is a permanent
companion that builds. The left side builds in parallel: the statement text, the
real environment the reader already works in, and the EKHO architecture assembling
layer by layer. By the time the reader reaches chapter 06, both are complete and
the architecture diagram is a recap, not a reveal.

Three rules that keep it honest:

1. **No chapter introduces a box.** Each one moves the two columns forward.
2. **Nothing is claimed that the `ekho` repo does not support** (N4). Where the
   mockup runs ahead of the build, the page says so in words.
3. **The real environment is shown, not abstracted.** macOS Finder, a chat client,
   a terminal line. The reader has to recognise their own desk.

## 1 · Token migration

`src/styles/global.css` still carries the v0.4 dark-only theme. Replace `:root`
wholesale. Light is the main mode; dark is the second mode, not the default.

| Token              | Light (main)            | Dark                |
| ------------------ | ----------------------- | ------------------- |
| `--bg`             | `#EDEBE6`               | `#1C1B19`           |
| `--surface`        | `#F5F4F1`               | `#232220`           |
| `--surface-raised` | `#E2DFD9`               | `#2C2B28`           |
| `--line`           | `#D8D4CD`               | `#302E2B`           |
| `--line-strong`    | `#BFBAB2`               | `#45423E`           |
| `--muted-deep`     | `#9B968E`               | `#6E6A64`           |
| `--muted`          | `#6B6762`               | `#A09B93`           |
| `--text`           | `#1A1A18`               | `#EDEBE6`           |
| `--signal`         | `#F5C400`               | `#F5C400`           |
| `--shadow`         | `rgb(26 26 24 / 0.045)` | `rgb(0 0 0 / 0.30)` |

Also changing:

- `--radius: 4px` everywhere. No exceptions, no per-component radii.
- `--lift: 0 0 48px var(--shadow)`. **Centred**, never offset, never clipped:
  any container holding a lifted box needs the padding to let the blur finish.
  Shadows only on dark and white panels. **Never in the architecture diagram**,
  except on hover.
- `color-scheme: light dark`, with the dark values under
  `@media (prefers-color-scheme: dark)`.
- `--surface` is _lighter_ than `--bg`, like a front panel set onto a case. Do
  not invert this when porting the dark values.
- Weight ladder: display from 48px in **400**, headline 20 to 40px in **600**,
  label **500**, body **400**. 700 is gone. Helvetica Neue has no real 600 and
  renders it as Bold, so the typeface with a true 600 is still open (candidates:
  Söhne, Instrument Sans, Archivo, Inter Tight). Until it is decided, keep
  Helvetica Neue and accept the heavier 600.
- Yellow marks exactly one meaning: **what is yours**. Underline, square, or the
  active chapter. At most one filled yellow area per screen. Never a whole tile,
  never a link colour.
- Bounding boxes in one row are always the same size.

## 2 · The page, chapter by chapter

Nav (sticky, in the header): `01 Why · 02 What · 03 How · 04 Architecture`. The
active chapter carries a 1.5px yellow underline.

The Figma frames also carry `Context sovereignty` top right and a footer with
`01 WHY · 02 / 07`. Both belong to a deck of slides and neither is on the page:
a scrolling page has no slide count, so the footer would be a claim that is not
true, and the tagline was decided against.

Below 64rem the chapters do not fit in a row, so the same `<nav>` becomes a
full-screen panel behind a burger button, the way the large AI labs' sites do
it. One list of links laid out two ways, not two lists. The panel adds two rows
that only exist there, the waitlist and GitHub, and marks the chapter you are in
with a yellow square rather than colouring the row.

### 00 · Hero

Full height, nothing on the right yet except the empty disc at very low opacity:
the form that is about to fill.

- **H1** `AI is only as good as your context. Own it.`
  ("Own it." in signal.)
- **Lede** `EKHO turns what you know into one connected context your AI can work
with. Every time you use it, you get more out of it. And it stays yours.`
- **CTA** primary `Join the waitlist` · secondary `See how it works`

Keep the existing scale-and-settle animation on the H1, but drop the bento grid
below it. The bento was the old table of contents and the chapters now do that job.

### 01 · Why — scattered

- **Label** `01 WHY`
- **H2** `Everything is already there. None of it is connected.`
- **Statements** (one per reading line, the nearest one full, the rest dim, as
  `[data-seq]` already does)
  1. `Your decisions, the people you work with, what you have read, what you
concluded from it. It exists. In your head, in chats that close, in mails
and meetings and notes that know nothing of each other.`
  2. `So every session with an AI starts near zero. You explain yourself again.
And again.`
  3. `The model is the same for everyone. Your context is the only part that is
yours.`
- **Right** `ContextGraphic` stage 1, scattered. The cloud is Poisson-sampled
  inside a disc, not a lattice: small dots, hairline links, the picture carries
  by density and never by weight. Hover and focus reveal what a dot
  is, with a tick and two lines: type above, title below.
  Types on the labelled dots: `Person` · `Decision` · `Insight` · `Principle` ·
  `Assumption` · `Voice note` · `Article` · `Meeting`.
  Three opacity tiers so the scatter has depth and no grid is readable yet.
- **Left, below the statement** the architecture stack. There is exactly one
  instance of it for the whole story, pinned to the bottom of the viewport (the
  _rail_), and each chapter declares which layers it lights through
  `data-layers` and `data-done`. Two stacks are never on screen at once, and the
  chapters reserve its height as bottom padding. Here every row is an inactive
  hairline: the silhouette of what is coming. Below 64rem the rail is hidden and
  chapter 06 carries the architecture alone.

### 02 · What — connected

- **Label** `02 WHAT`
- **H2** `One place your knowledge actually lives.`
- **Statements**
  1. `EKHO is a folder on your machine. Markdown files, one form, one grammar.
Readable by you and by any agent you let near it.`
  2. `Nothing is locked in. You can open it, read it, move it, delete it. It is
not a memory inside somebody else's model.`
- **Right** the graphic snaps into the disc: **connected**. Same number of dots,
  first chords across the grid, at most two per dot. Most dots stay loose. The
  jump from 01 to 02 is the jump from before EKHO to with EKHO and has to read
  as a snap, not a fade.
- **On the graph** a **macOS Finder window** with real blue folder icons, laid
  over the cloud the way the Figma frame "What · Ordner über Graph" does it: one
  plain list, no sidebar, no columns. Content is the actual PARA layout:
  `00 - Now` · `01 - Projects` · `02 - Areas` · `03 - Resources` · `04 - Archive`,
  one folder open showing `.md` files. This is the single most convincing frame
  on the page: it shows there is no app to adopt.
- **Stack** `EKHO Vault` lights up, with its three parts `Knowledge · Specs · Code`.

### 03 · How — the conversation

- **Label** `03 HOW`
- **H2** `The conversation is the interface.`
- **Statements**
  1. `No new app. EKHO docks into the chat you already use: as commands it runs
and skills it applies.`
  2. `And it never changes anything without showing you first.`
- **On the graph** a **chat window**, close to the clients people actually use:
  sidebar with recents grouped by day, user message as a bubble on the right,
  the answer as plain text with no bubble, tool use as bordered collapsible
  cards, composer as a pill with a round send button and a model line beneath.
  Two cards in the thread:
  - `Terminal` — `$ ekho tools transcribe 260925_anna.m4a`
  - `SKILL · ekho-inbox-digest` — the confirm table:
    `new Decision`, `new Insight`, `new Contact`, `link 7 existing notes`,
    with `Confirm` and `Adjust` buttons.
- **Caption row under the window** the three steps, as a strip, not as cards:
  `01 Throw it in.` · `02 Let it be digested.` · `03 Ask.`
- **Stack** `Conversation`, `LLM` and `Harness` light up.
- **Right** the graphic stays connected; links start multiplying around the dot
  the digest just touched.

> **Open, needs Stephan.** The chat window in Figma is built close to a real
> client. Shipping a recognisable third-party interface on our own landing page
> is a brand decision, not a design one. Either it stays generic, or we decide
> deliberately to show the client we actually use.

### 04 · Compounding

- **Label** stays `03 HOW`, this is the payoff of the same chapter.
- **H2** `Not one new point. Three times the connections.`
- **Statements**
  1. `Every source you bring in links to everything already there. An insight
knows where it came from, what supports it and what contradicts it.`
  2. `That is why it compounds instead of gathering dust. The bookkeeping is the
part people give up on, and it is the part the agent does.`
- **Right** stage 3: no new dots, three times the links, a handful of hubs, a
  stronger spread in dot size, a few edges that leave the disc. It must not look
  perfect. A finished graph reads as a diagram; an open one reads as alive.
- **Stack** `Ontology` lights up. The stack is now complete.

### 05 · What EKHO is

The concrete answer to "but what _is_ it", and the section the page did not have.
Text alone has not carried this; an interface does.

- **H2** `This is what it looks like.`
- **Lede** `Your vault, readable. On your desk and in your pocket.`
- **Visual** the viewer on desktop and mobile, in website CI, oriented on the
  roadmap view. Full-bleed, on a dark panel so the light UI reads as a screen.
- **Caption** `710 notes · read only · your files stay files.`
- **Honesty line, required by N4** `The viewer is in build. The vault underneath
it is not: it is the one this site was written in.`

### 06 · Architecture

The same five layers the rail assembles while you scroll, at full size and
openable. **One model on the page, not two:** the compact recap next to a second,
differently drawn diagram was a duplication, and the reader had to work out that
both said the same thing.

- **Label** `04 ARCHITECTURE`
- **H2** `The EKHO architecture`
- **Lede** `Any AI can keep notes. EKHO adds the grammar and the workflows that
make them repeatable, and compatible with every other EKHO vault.`
- **The five layers**, each a `<details>` that opens onto its description. Only
  one is open at a time, and it works by keyboard and without JavaScript.

  | Layer        | Note                     | Repo           |
  | ------------ | ------------------------ | -------------- |
  | Conversation | between people           |                |
  | LLM          | interchangeable          |                |
  | Harness      | CLI and skills           | `ekho-cockpit` |
  | Ontology     | types, edges, rules      | `ekho-core`    |
  | EKHO Vault   | Knowledge · Specs · Code |                |

  The vault opens onto its three parts with their repositories. The yellow
  square sits on the vault row and nowhere else, so the one thing the reader
  owns is the one thing marked.

> **Sharpening carried into the copy.** `Conversation` means the conversation
> between people first. The LLM is the means by which those conversations get
> processed, not the place the knowledge lives. The deck's version reads as if
> conversation meant chatting with a model, which is the smaller half. Second
> dimension, for when context sharing enters the story: the context is read by
> people and by agents, and so is the conversation.

### 07 · Who is building this

Missing today, and the biggest gap for where EKHO actually stands. A pre-seed
company with no product does not get trusted for its roadmap. It gets trusted for
the people and for the fact that they use the thing themselves.

- **H2** `Who is building this`
- **Body** `EKHO Labs is two founders. We build EKHO in the open and we use it
every day for EKHO itself: the vault behind this site holds 710 notes, and
every decision on this page is one of them.`
- Two people, name, one line each, no titles, no stock photos.

### 08 · Where we are, and the waitlist

- **H2** `Where we are`
- **Body** `The CLI works and we use it daily. The viewer is in build. There is
no hosted product, no account and no pricing yet. If you want to be there when
there is, leave your mail.`
- **Waitlist** one field, one button, one line of consent copy.
- **Closing statement** `We build EKHO so people can make their context compound,
and keep it theirs.`

> **Open.** The site is static (N5), so the waitlist needs an external endpoint.
> It must be one that is lawful to embed from an EU domain without a consent
> banner (N6): a plain form POST to a provider that sets no cookie and does no
> profiling. Buttondown and Listmonk both qualify; anything that loads a script
> does not. Decide the provider before building the form.

## 3 · Components

| Component                    | State           | Work                                                                                                                                                 |
| ---------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ContextGraphic.astro`       | exists, current | Repoint to the Braun tokens. The three stages, the disc, the tiers, the hover labels are all already right. Add the `Person` and `Assumption` types. |
| `Architecture.astro`         | exists          | Rework into the five-row stack that can be driven layer by layer, and reuse the same component for the recap in 06.                                  |
| `GapExample.astro`           | exists          | Retire. Chapter 03 makes the point with the chat window.                                                                                             |
| `FinderWindow.astro`         | new             | macOS chrome, PARA folders. Static, no interaction.                                                                                                  |
| `ChatWindow.astro`           | new             | The window from chapter 03, including the two tool cards and the confirm table.                                                                      |
| `ViewerMockup.astro`         | new             | Desktop and mobile, chapter 05.                                                                                                                      |
| `Waitlist.astro`             | new             | One field, one button, external POST.                                                                                                                |
| bento tiles in `index.astro` | exists          | Retire with the hero rework.                                                                                                                         |

## 4 · Build order

Each step is a commit that leaves the site shippable. Never mix a reformat with a
change (N7).

1. **Tokens.** `:root` to Braun, light first, radius 4, centred shadow. The
   existing page will look wrong in places; fix only what breaks.
2. **Graphic to tokens.** `ContextGraphic` on the new variables, plus the two
   missing dot types.
3. **Chapter spine.** Hero without the bento, chapters 01 to 04 as the two-column
   movement, the stack driven by the active chapter.
4. **Finder window** into chapter 02.
5. **Chat window** into chapter 03.
6. **Architecture** reworked as the driven stack plus the recap in 06.
7. **Viewer** into chapter 05.
8. **Who we are** and **Where we are**, text only.
9. **Waitlist**, once the provider is decided.
10. **Cleanup.** Done. The styles for the retired bento, tiles, overview, scene
    and gap blocks are gone, in a commit of their own (N7). `global.css` went
    from 2762 to 2244 lines.

## 4a · Narrow screens

The two columns cannot sit side by side, so below 64rem:

- the stage becomes a band pinned under the header at 52svh, and the text
  scrolls beneath it. The graph still builds through its three states.
- the windows stop being overlays. Each is rendered a second time inside its
  chapter and flows with the text; exactly one of the two copies is ever
  displayed. A window floating over a 52svh band is unreadable at 375px.
- the architecture rail is hidden. A fifth of a phone screen is too much to
  spend on it, and chapter 06 carries the same five layers in full.
- the chat window drops its sidebar, the way the real clients do at this width.
- the header nav becomes a burger menu. `Escape` closes it, following a link
  closes it, and crossing back over 64rem closes it.

## 5 · Still open

- Typeface with a real 600.
- Wordmark: three drafts exist in Figma, none chosen.
- Braun values sharpened against real product references, not against reproductions.
- The pitch deck still runs on `#FFF056` and has not been brought to ADR-0027.
- Rule **N4** needs precising rather than deleting: the site does show mockups
  that run ahead of the build, and that is allowed as long as the page says so in
  words. Change via PR, with Stephan.
- Real or invented numbers in the viewer mockup. `EKHO_brain` genuinely has 710
  notes, so the real ones are available and stronger. The link count and the
  type count on the mockup are still placeholders.
- The window chrome keeps a 10px radius (`--win-radius`) because it depicts
  somebody else's window rather than an EKHO surface. Every EKHO surface on the
  page is on the 4px rule. Confirm that reading, or drop the windows to 4px.
