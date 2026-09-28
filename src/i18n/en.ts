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
    lede: 'EKHO turns what you know into one connected context source your AI can work with. Create and hold your synthetic Memory. Every time you use it, you get more out of it - without losing control.',
    cta: 'Join the waitlist',
    seeHow: 'See how it works',
  },
  why: {
    title: 'What becomes scarce when intelligence is abundant?',
    a: 'Context. Everything you know: your decisions and why you made them, the people you work with, what you have read and what you concluded.',
    b: 'The model is the same for everyone - your context is unique.',
    c: 'But knowledge is scattered by nature, across your head, chats, emails and notes. Pulling it together was a lost cause. Until now.',
  },
  what: {
    title: 'A wallet for your most valuable asset.',
    a: 'Your context becomes your most valuable asset. EKHO helps you build it, then keeps it: a folder on your own disk, readable by you and any agent you allow.',
    b: "Nothing is locked in. It is not a memory inside somebody else's model.",
    commandLabel: 'Installs the EKHO CLI',
    commandNote: 'In early access, by invitation. The installer is not live yet.',
  },
  how: {
    title: 'EKHO works where you work.',
    a: 'EKHO docks into the chat you already use: commands you call, and skills it applies on its own.',
    b: 'And it never changes anything without showing you first.',
    sovereignty: 'Become model-independent',
    note: 'The models build a memory of you across chats now, and it is useful. It is also theirs: their format, their terms, and the longer it grows the more it costs to leave. EKHO builds that context on your own disk, in Markdown, where any of these can read it and none of them holds it.',
    edge: 'It stays yours, and swapping one for another costs you nothing.',
  },
  compound: {
    title: 'Your knowledge is compounding.',
    a: 'Every source you ingest into your EKHO links to everything already there. An insight knows where it came from, what supports it and what contradicts it.',
    b: 'That is what compounding means here: every note you add multiplies the connections, so the quality of what comes back grows exponentially. The bookkeeping is the part people give up on, and it is the part EKHO does.',
  },
  viewer: {
    title: 'Your context, in the shape you need it.',
    lede: 'The EKHO Viewer builds views of your vault: you say which notes, which fields, which sections and who it is for, and it renders that page.',
    a: 'A view is not a copy. It reads the same files your agent writes, so the page moves with your knowledge instead of falling behind it.',
    note: 'The viewer is in build. The roadmap is not: it is generated today, from the same files.',
    appTitle: 'EKHO Roadmap',
    nav: ['Overview', 'What now', 'Next up', 'Decisions', 'Timeline'],
    readOnly: 'read only',
    recent: 'Running now',
    items: [
      ['e26', 'Can the ontology carry action chains?', 'running'],
      ['e27', 'Migrate the vaults to the new ontology', 'running'],
      ['e21', 'Who is member, tester, user', 'decision'],
      ['e11', 'Name a test case for the business model', 'next'],
      ['e16', 'Pitch story and landing page', 'November'],
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
        note: 'an open format',
        lead: 'What you own:',
        text: 'plain Markdown on your own disk. It becomes more valuable with every session, and nothing in the layers above it is allowed to hold it hostage.',
      },
    },
  },
  who: {
    title: 'Who is building this',
    lede: 'EKHO Labs is two founders. We build EKHO in the open and we use it every day for EKHO itself: the vault behind this site holds 710 notes, and every decision on this page is one of them.',
    lorenz: 'Semantics, Ontology & Design',
    stephan: 'Harness, Data & Engineering',
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
    connected: 'connected',
    ask: "/ekho Please ingest the recording from yesterday's call with Anna",
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
    /* the line at the foot of the screen when a model is picked */
    picked: '{name} selected',
  },
  graphic: {
    frameTitle: 'Your EKHO',
    /* what the vault behind this site actually holds; the graphic counts
       them up when it comes into view */
    stats: [
      ['710', 'notes'],
      ['1,240', 'links'],
    ],
    label:
      'The same knowledge in four states: spread wide and formless at first, then scattered, then gathered into one form with the first connections, and finally a dense network of several hundred points without a single new one.',
    strip:
      'Three weeks of one piece of work, in the order it arrived. None of it knows about any of the rest.',
    types: {
      person: 'Person',
      meeting: 'Meeting',
      voice: 'Voice note',
      decision: 'Decision',
      principle: 'Principle',
      insight: 'Insight',
      assumption: 'Assumption',
      article: 'Article',
      mail: 'Email',
      video: 'Video',
      recap: 'Recap',
      passage: 'Passage',
      encyclopedia: 'Encyclopedia',
      claude: 'Research',
      gemini: 'Research',
    },
    titles: {
      person: 'Anna Berger, their product lead',
      meeting: 'Thursday call with Anna',
      voice: 'Pricing idea, on the walk',
      decision: 'The pilot moves to Q1',
      principle: 'Show the change before making it',
      insight: 'The bookkeeping is what people quit',
      assumption: 'Procurement decides, not the team',
      article: 'Karpathy on the LLM wiki',
      mail: 'Can you send us a proposal by Monday?',
      video: 'Why Are We Sprinting Off the A.I. Cliff?',
      recap: 'Meeting recap: the call with Anna',
      passage: '“In sum, information is not truth. Information is connection.”',
      encyclopedia: 'Niklas Luhmann',
      claude: 'Who actually signs off a rollout?',
      gemini: 'Why do note systems get abandoned?',
    },
    /* what each note carries besides its title: a field or two, and what it
       is joined to — which is the part that makes it context rather than a
       label */
    quotes: {
      person: 'She owns the rollout, not the budget.',
      meeting: 'They will not sign without a security review.',
      voice: 'If we price per seat, the small teams fall out.',
      article: 'A wiki is not the notes. It is the links between them.',
      mail: 'We have seen three vendors. What we have not seen is somebody who has done this before.',
      recap: 'Data hosting is the blocker, not the price. Procurement signs it off, not the team.',
      encyclopedia:
        'Luhmann was famous for his extensive use of the “slip box” or Zettelkasten note-taking method.',
      claude:
        'Across the cases we went through, sign-off sat with procurement far more often than with the team.',
      gemini: 'The ones that survive have a filing step so dull it needs no decision.',
    },
    details: {
      person: [
        ['role', 'Product lead'],
        ['met', '25 Sep, on a call'],
      ],
      meeting: [
        ['length', '42 min'],
        ['with', 'Anna Berger'],
      ],
      voice: [
        ['length', '3 min'],
        ['where', 'walking home'],
      ],
      decision: [
        ['taken', '25 Sep'],
        ['by', 'Lorenz'],
      ],
      insight: [
        ['noted', '25 Sep'],
        ['from', 'the call with Anna'],
      ],
      assumption: [
        ['raised', '12 Sep'],
        ['open for', '13 days'],
      ],
      principle: [
        ['since', 'May'],
        ['used', '9 times'],
      ],
      article: [
        ['by', 'Andrej Karpathy'],
        ['read', '24 Sep'],
      ],
      mail: [
        ['from', 'a logistics prospect'],
        ['wants', 'a proposal by Monday'],
      ],
      video: [
        ['channel', 'The Ezra Klein Show'],
        ['watched', '22 Sep'],
      ],
      recap: [
        ['written by', 'the meeting assistant'],
        ['from', 'Thursday call with Anna'],
      ],
      passage: [
        ['book', 'Nexus'],
        ['author', 'Yuval Noah Harari'],
      ],
      encyclopedia: [
        ['who', 'German sociologist'],
        ['read', '19 Sep, on Wikipedia'],
      ],
      claude: [
        ['assistant', 'Claude'],
        ['lives in', 'their app, not yours'],
      ],
      gemini: [
        ['assistant', 'Gemini'],
        ['lives in', 'their app, not yours'],
      ],
    },
    meta: {
      person: ['25 Sep', '2 calls · 1 decision'],
      meeting: ['25 Sep · 42 min', 'Anna Berger · 3 notes written'],
      voice: ['25 Sep · 3 min', 'became the pricing insight'],
      decision: ['25 Sep', 'validates H-24'],
      insight: ['25 Sep', 'supports H-24 · 4 sources'],
      assumption: ['12 Sep', 'the pilot settles it'],
      principle: ['since May', 'referenced 9 times'],
      article: ['24 Sep', 'feeds I-296'],
      mail: ['25 Sep · 09:12', 'answered from three notes'],
      video: ['20 Sep · 29:37', 'fed the principle'],
      recap: ['25 Sep · 42 min', 'produced two notes'],
      passage: ['18 Sep', 'feeds the insight'],
      encyclopedia: ['19 Sep', 'feeds the insight'],
      claude: ['4 Sep · 28 messages', 'produced the hypothesis'],
      gemini: ['11 Sep · 16 messages', 'led to Luhmann'],
    },
  },
};

// Deliberately not `as const`: with literal types every sentence becomes its own
// type and no translation can ever satisfy the shape. What matters here is the
// set of keys, not the words.
export type Copy = typeof en;
