// The page's copy, in the language it was written in. Every other file in this
// folder is a translation of this one, so this is the shape they all follow.
export const en = {
  meta: {
    title: 'EKHO Labs — AI is only as good as your context',
    description:
      'EKHO turns what you know into connected context that compounds, so you get more out of AI every time you use it, and it stays yours.',
  },
  nav: {
    chapters: 'Chapters',
    why: 'Why',
    what: 'What',
    how: 'How',
    architecture: 'Architecture',
    team: 'Team',
    waitlist: 'Join the waitlist',
    language: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    next: 'Next',
    prev: 'Back',
    copy: 'Copy',
    copied: 'Copied',
  },
  hero: {
    titleBefore: 'AI is only as good as your context.',
    titleSignal: 'Own it.',
    lede: 'EKHO turns what you know into one connected context your AI can work with. Every time you use it, you get more out of it. And it stays yours.',
    cta: 'Join the waitlist',
    seeHow: 'See how it works',
  },
  why: {
    title: 'What becomes scarce when intelligence is abundant?',
    a: 'Context. Everything you know: your decisions and why you made them, the people you work with, what you have read and what you concluded.',
    b: 'But knowledge is scattered by nature, across your head, chats, emails and notes. Pulling it together was a lost cause. Until AI.',
    c: 'The model is the same for everyone. Your context is the only part that is yours.',
  },
  what: {
    title: 'A wallet for your most valuable asset.',
    a: 'Your context becomes your most valuable asset. EKHO helps you build it, then keeps it: a folder on your own disk, readable by you and any agent you allow.',
    b: "Nothing is locked in. It is not a memory inside somebody else's model.",
    commandLabel: 'Installs the EKHO CLI',
    commandNote: 'In early access, by invitation. The installer is not live yet.',
  },
  how: {
    title: 'The conversation is the interface.',
    a: 'No new app. EKHO docks into the chat you already use: as commands it runs and skills it applies.',
    b: 'And it never changes anything without showing you first.',
    sovereignty: 'Context sovereignty',
    note: 'Hand your context to a model provider and it becomes theirs to keep: their memory, their format, their terms. EKHO keeps it on your own disk, in Markdown, where any of these can read it.',
    edge: 'It stays yours, and swapping one for another costs you nothing.',
  },
  compound: {
    title: 'Not one new point. Three times the connections.',
    a: 'Every source you bring in links to everything already there. An insight knows where it came from, what supports it and what contradicts it.',
    b: 'That is why it compounds instead of gathering dust. The bookkeeping is the part people give up on, and it is the part the agent does.',
  },
  viewer: {
    title: 'This is what it looks like.',
    lede: 'Your vault, readable. On your desk and in your pocket.',
    note: '710 notes, read only, your files stay files. The viewer is in build. The vault underneath it is not: it is the one this site was written in.',
    nav: ['Overview', 'Timeline', 'Graph', 'Meta'],
    readOnly: 'read only',
    stats: [
      ['710', 'notes'],
      ['1,240', 'links'],
      ['12', 'types'],
    ],
    recent: 'Recently touched',
    items: [
      ['Decision', 'ADR-0027 · The Braun formal language', 'accepted · today'],
      ['Insight', 'Context compounds when it is connected', 'validates H-24'],
      ['Principle', 'Clarity beats automation', 'P-0001 · 9 references'],
      ['Contact', 'Anna Berger', 'Goyatz · 4 sessions'],
      ['Reference', 'Karpathy, LLM wiki', 'source tier 1'],
    ],
  },
  architecture: {
    title: 'The EKHO architecture',
    lede: 'Any AI can keep notes. EKHO adds the grammar and the workflows that make them repeatable, and compatible with every other EKHO vault.',
    layers: {
      conversation: {
        title: 'Conversation',
        note: 'between people',
        lead: 'Where knowledge starts:',
        text: 'the conversations you have with the people you work with. A call, a meeting, a decision made out loud. Almost none of it is written down, and that is the part EKHO is after.',
      },
      llm: {
        title: 'LLM',
        note: 'interchangeable',
        lead: 'The means, not the place:',
        text: 'the engine that reads, writes and links. EKHO works with any model, frontier, open or locally hosted, so you can swap the model and your knowledge stays exactly where it was.',
      },
      harness: {
        title: 'Harness',
        note: 'CLI and skills',
        lead: 'The layer that puts the grammar to work:',
        text: 'skills, workflows and a linter that take in sources, answer questions and keep everything consistent. It turns something one person prompted once into behaviour anyone can repeat.',
      },
      ontology: {
        title: 'Ontology',
        note: 'types, edges, rules',
        lead: 'The shared grammar of a vault:',
        text: 'what a note is (insight, hypothesis, decision), how notes relate, and which rules they follow. It is declared rather than prompted, so every vault behaves the same and each field can extend it without breaking the core.',
      },
      vault: {
        title: 'EKHO Vault',
        note: 'Knowledge · Specs · Code',
        lead: 'What you own:',
        text: 'plain Markdown on your own disk. It becomes more valuable with every session, and nothing in the layers above it is allowed to hold it hostage.',
        parts: [
          ['Knowledge', 'Sources, insights, hypotheses and decisions. Where the thinking lives.'],
          [
            'Specs',
            'The bridge from validated knowledge to buildable requirements. Anything built can be traced back to why.',
          ],
          [
            'Code',
            'The running software, built from specs and fed back in as evidence. Every shipped feature closes the loop.',
          ],
        ],
      },
    },
  },
  who: {
    title: 'Who is building this',
    lede: 'EKHO Labs is two founders. We build EKHO in the open and we use it every day for EKHO itself: the vault behind this site holds 710 notes, and every decision on this page is one of them.',
    lorenz: 'Semantics and ontology design, and the front end.',
    stephan: 'Harness and data engineering, and the back end.',
  },
  waitlist: {
    title: 'Where we are',
    lede: 'The CLI works and we use it daily. The viewer is in build. There is no hosted product, no account and no pricing yet. If you want to be there when there is, leave your mail.',
    cta: 'Join the waitlist',
    note: 'It is a mail to us for now. One reply when there is something to see, and no tracking.',
    label: 'Your mail',
    formNote: 'One mail when there is something to see. Nothing else, and no tracking.',
  },
  closing: {
    before: 'We build EKHO so people can make their context compound,',
    mark: 'and keep it theirs.',
  },
  finder: { title: 'myEKHO' },
  chat: {
    windowTitle: 'Working through the call with Anna',
    newChat: 'New chat',
    today: 'Today',
    yesterday: 'Yesterday',
    recents: [
      'Working through the call with Anna',
      'Preparing the roadmap review',
      'Replacing the ontology',
      'Sharpening the pitch story',
    ],
    vault: 'vault connected',
    ask: "Throw yesterday's call with Anna into EKHO.",
    said: 'I will transcribe the recording and put it in your inbox.',
    terminal: 'Terminal',
    skill: 'Skill · ekho-inbox-digest',
    wouldWrite: 'This is what I would write into your vault:',
    rows: [
      ['new', 'Decision', 'The pilot moves to Q1'],
      ['new', 'Insight', 'Data hosting is the blocker'],
      ['new', 'Contact', 'Anna Berger'],
      ['link', '—', '7 notes you already have'],
    ],
    confirm: 'Confirm',
    adjust: 'Adjust',
    reply: 'Reply…',
  },
  graphic: {
    frameTitle: 'Your EKHO',
    label:
      'The same knowledge in four states: spread wide and formless at first, then scattered, then gathered into one form with the first connections, and finally a dense network of several hundred points without a single new one.',
    types: {
      person: 'Person',
      meeting: 'Meeting',
      voice: 'Voice note',
      decision: 'Decision',
      principle: 'Principle',
      insight: 'Insight',
      assumption: 'Assumption',
      article: 'Article',
    },
    titles: {
      person: 'Anna Berger',
      meeting: 'The call on Thursday',
      voice: 'Tuesday, on the walk',
      decision: 'The pilot moves to Q1',
      principle: 'No start dates before the review',
      insight: 'Context compounds when connected',
      assumption: 'They will host it themselves',
      article: 'The future of knowledge work',
    },
  },
};

// Deliberately not `as const`: with literal types every sentence becomes its own
// type and no translation can ever satisfy the shape. What matters here is the
// set of keys, not the words.
export type Copy = typeof en;
