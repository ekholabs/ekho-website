import type { Copy } from './en';

// Deutsch, geschrieben und nicht übersetzt: die Sätze folgen dem englischen
// Aufbau, aber nicht seinem Satzbau. „compounds" heißt hier „verzinst sich",
// weil das der Begriff ist, den EKHO selbst benutzt; Gedankenstriche kommen in
// deutschem Fließtext nicht vor; und wo ein englisches Wort im Deutschen nichts
// trägt, steht das deutsche (Gut statt Asset, Tresor statt Wallet). Was zur
// Harness gehört, bleibt englisch: Vault, Skill, Harness, Ontology.
export const de: Copy = {
  meta: {
    title: 'EKHO Labs — KI ist nur so gut wie dein Kontext',
    description:
      'EKHO macht aus deinem Wissen einen verbundenen Kontext, der sich verzinst. Jede Nutzung deiner KI bringt mehr als die vorige, und der Kontext bleibt deiner.',
  },
  nav: {
    chapters: 'Kapitel',
    why: 'Warum',
    what: 'Was',
    how: 'Wie',
    architecture: 'Architektur',
    team: 'Team',
    waitlist: 'Auf die Warteliste',
    language: 'Sprache',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    next: 'Weiter',
    prev: 'Zurück',
    copy: 'Kopieren',
    copied: 'Kopiert',
  },
  hero: {
    titleBefore: 'KI ist nur so gut wie dein Kontext.',
    titleSignal: 'Er gehört dir.',
    lede: 'EKHO macht aus deinem Wissen einen verbundenen Kontext, mit dem deine KI arbeiten kann. Jede Nutzung bringt mehr als die vorige. Und er bleibt deiner.',
    cta: 'Auf die Warteliste',
    seeHow: 'So funktioniert es',
  },
  why: {
    title: 'Was wird knapp, wenn Intelligenz zur Ware wird?',
    a: 'Kontext. Alles, was du weißt: was du entschieden hast und warum, mit wem du arbeitest, was du gelesen und was du daraus geschlossen hast.',
    b: 'Das Modell ist für alle dasselbe, dein Kontext ist einzigartig.',
    c: 'Nur liegt Wissen von Natur aus verstreut: im Kopf, in Chats, in Mails, in Notizen, die nichts voneinander wissen. Es zusammenzuführen war aussichtslos. Bis jetzt.',
  },
  what: {
    title: 'Ein Tresor für dein wertvollstes Gut.',
    a: 'Dein Kontext wird dein wertvollstes Gut. EKHO hilft dir, ihn aufzubauen, und verwahrt ihn: ein Ordner auf deiner eigenen Festplatte, lesbar für dich und für jeden Agenten, den du heranlässt.',
    b: 'Nichts ist eingeschlossen. Dein Kontext liegt nicht im Gedächtnis eines fremden Modells.',
    commandLabel: 'Installiert die EKHO CLI',
    commandNote: 'Früher Zugang, auf Einladung. Den Installer gibt es noch nicht.',
  },
  how: {
    title: 'EKHO arbeitet dort, wo du arbeitest.',
    a: 'EKHO sitzt in dem Chat, den du ohnehin benutzt: Befehle, die du aufrufst, und Skills, die es von sich aus anwendet.',
    b: 'Und es ändert nie etwas, ohne es dir vorher zu zeigen.',
    sovereignty: 'Werde modellunabhängig',
    note: 'Die Modelle bauen inzwischen selbst ein Gedächtnis über Chats hinweg auf, und das ist nützlich. Es gehört aber ihnen: ihr Format, ihre Bedingungen, und je länger es wächst, desto teurer wird der Wechsel. EKHO baut denselben Kontext auf deiner eigenen Platte auf, in Markdown, wo jedes dieser Modelle ihn lesen kann und keines ihn besitzt.',
    edge: 'Er bleibt deiner, und ein Modell gegen ein anderes zu tauschen kostet dich nichts.',
  },
  compound: {
    title: 'Dein Wissen verzinst sich.',
    a: 'Jede Quelle, die du in dein EKHO einspeist, verbindet sich mit allem, was schon da ist. Eine Erkenntnis weiß, woher sie kommt, was sie stützt und was ihr widerspricht.',
    b: 'Genau so verzinst es sich: Jede neue Notiz vervielfacht die Verbindungen, also wächst die Qualität dessen, was zurückkommt, exponenziell und nicht Schritt für Schritt. Die Buchführung ist der Teil, den Menschen aufgeben, und genau den übernimmt EKHO.',
  },
  viewer: {
    title: 'Dein Kontext, in der Form, die du brauchst.',
    lede: 'Der EKHO Viewer baut Sichten auf deinen Vault. Du sagst, welche Notizen, welche Felder, welche Abschnitte und für wen, er baut die Seite daraus.',
    a: 'Eine Sicht ist keine Kopie. Sie liest dieselben Dateien, die dein Agent schreibt, die Seite bewegt sich also mit deinem Wissen, statt ihm hinterherzulaufen.',
    b: 'Ein Vault trägt so viele Sichten, wie du brauchst: eine Roadmap für die Woche, den Verlauf der Entscheidungen, eine Seite für jemanden, mit dem du arbeitest. Zu sehen ist EKHOs eigene Roadmap, erzeugt aus dem Vault, in dem diese Seite geschrieben wurde.',
    note: 'Der Viewer ist im Bau. Die Roadmap nicht: die wird heute erzeugt, aus denselben Dateien.',
    appTitle: 'EKHO Roadmap',
    nav: ['Überblick', 'Was jetzt', 'Was danach', 'Entscheidungen', 'Verlauf'],
    readOnly: 'nur lesend',
    stats: [
      ['4', 'Ergebnisse'],
      ['38', 'Elemente'],
      ['6', 'offene Entscheidungen'],
    ],
    recent: 'Läuft gerade',
    items: [
      ['e26', 'Tragen Ontologie und Daten Aktionsketten?', 'läuft'],
      ['e27', 'Vaults auf die neue Ontologie migrieren', 'läuft'],
      ['e21', 'Wer ist Member, Tester, Nutzer', 'Entscheidung'],
      ['e11', 'Testfall für das Geschäftsmodell benennen', 'als Nächstes'],
      ['e16', 'Pitch-Story und Landing Page', 'November'],
    ],
  },
  architecture: {
    title: 'Die EKHO-Architektur',
    lede: 'Notizen führen kann jede KI. EKHO bringt die Grammatik und die Abläufe dazu, die aus dem Notizenführen etwas Wiederholbares machen, verträglich mit jedem anderen EKHO-Vault.',
    layers: {
      conversation: {
        title: 'Conversation',
        note: 'zwischen Menschen',
        lead: 'Wo Wissen entsteht:',
        text: 'in den Gesprächen mit den Menschen, mit denen du arbeitest. Ein Anruf, ein Meeting, eine Entscheidung, die laut ausgesprochen wird. Fast nichts davon wird aufgeschrieben, und genau darauf zielt EKHO.',
      },
      llm: {
        title: 'LLM',
        note: 'austauschbar',
        lead: 'Das Mittel, nicht der Ort:',
        text: 'die Maschine, die liest, schreibt und verknüpft. EKHO arbeitet mit jedem Modell, ob Spitzenmodell, offenes Modell oder eines, das bei dir läuft. Du wechselst das Modell, dein Wissen bleibt genau dort, wo es war.',
      },
      harness: {
        title: 'Harness',
        note: 'CLI und Skills',
        lead: 'Die Schicht, die die Grammatik arbeiten lässt:',
        text: 'Skills, Abläufe und ein Linter, die Quellen aufnehmen, Fragen beantworten und alles stimmig halten. Aus etwas, das eine Person einmal in einen Prompt geschrieben hat, wird ein Verhalten, das jeder wiederholen kann.',
      },
      ontology: {
        title: 'Ontology',
        note: 'Typen, Kanten, Regeln',
        lead: 'Die gemeinsame Grammatik eines Vaults:',
        text: 'was eine Notiz ist (Erkenntnis, Hypothese, Entscheidung), wie Notizen zusammenhängen und welchen Regeln sie folgen. Das steht fest geschrieben und nicht in einem Prompt, deshalb verhält sich jeder Vault gleich, und jedes Fachgebiet kann die Grammatik erweitern, ohne den Kern zu brechen.',
      },
      vault: {
        title: 'EKHO Vault',
        note: 'offenes Format',
        lead: 'Was dir gehört:',
        text: 'schlichtes Markdown auf deiner eigenen Festplatte. Es wird mit jeder Sitzung wertvoller, und keine der Schichten darüber kann es festhalten.',
      },
    },
  },
  who: {
    title: 'Wer das hier baut',
    lede: 'EKHO Labs sind zwei Gründer. Wir bauen EKHO offen und benutzen es jeden Tag für EKHO selbst: der Vault hinter dieser Seite hält 710 Notizen, und jede Entscheidung auf dieser Seite ist eine davon.',
    lorenz: 'Semantik, Ontologie & Design',
    stephan: 'Harness, Daten & Engineering',
  },
  waitlist: {
    title: 'Wo wir stehen',
    lede: 'Die CLI läuft, wir benutzen sie täglich. Der Viewer ist im Bau. Es gibt noch kein gehostetes Produkt, keine Konten, keine Preise. Wenn du dabei sein willst, sobald es das gibt, schreib uns.',
    cta: 'Auf die Warteliste',
    note: 'Vorerst ist das eine Mail an uns. Eine Antwort, sobald es etwas zu sehen gibt, und kein Tracking.',
    label: 'Deine Mailadresse',
    formNote: 'Eine Mail, sobald es etwas zu sehen gibt. Sonst nichts, und kein Tracking.',
  },
  closing: {
    before: 'Wir bauen EKHO, damit Menschen ihren Kontext verzinsen können',
    mark: 'und ihn behalten.',
  },
  finder: { title: 'myEKHO' },
  chat: {
    windowTitle: 'Das Gespräch mit Anna aufarbeiten',
    newChat: 'Neuer Chat',
    today: 'Heute',
    yesterday: 'Gestern',
    recents: [
      'Das Gespräch mit Anna aufarbeiten',
      'Roadmap-Review vorbereiten',
      'Ontologie ablösen',
      'Pitch-Story schärfen',
    ],
    vault: 'Vault verbunden',
    connected: 'verbunden',
    ask: '/ekho Bitte lies die Aufnahme vom gestrigen Gespräch mit Anna ein',
    said: 'Ich transkribiere die Aufnahme und lege sie in deine Inbox.',
    terminal: 'Terminal',
    skill: 'Skill · ekho-inbox-digest',
    wouldWrite: 'Das würde ich in deinen Vault schreiben:',
    rows: [
      ['neu', 'Decision', 'Der Pilot rutscht auf Q1'],
      ['neu', 'Insight', 'Data Hosting ist der Blocker'],
      ['neu', 'Contact', 'Anna Berger'],
      ['link', '—', '7 Notizen, die du schon hast'],
    ],
    confirm: 'Bestätigen',
    adjust: 'Anpassen',
    reply: 'Antworten…',
    /* the line at the foot of the screen when a model is picked */
    picked: '{name} ausgewählt',
  },
  graphic: {
    frameTitle: 'Dein EKHO',
    /* what the vault behind this site actually holds; the graphic counts
       them up when it comes into view */
    stats: [
      ['710', 'Notizen'],
      ['1.240', 'Verbindungen'],
    ],
    label:
      'Dasselbe Wissen in vier Zuständen: zuerst weit verteilt und formlos, dann gestreut, dann zu einer Form gesammelt mit den ersten Verbindungen, und schließlich ein dichtes Netz aus mehreren hundert Punkten, ohne einen einzigen neuen.',
    types: {
      person: 'Person',
      meeting: 'Meeting',
      voice: 'Sprachnotiz',
      decision: 'Entscheidung',
      principle: 'Prinzip',
      insight: 'Erkenntnis',
      assumption: 'Annahme',
      article: 'Artikel',
    },
    titles: {
      person: 'Anna Berger, Produktleitung',
      meeting: 'Donnerstagscall mit Anna',
      voice: 'Preisidee, beim Spazieren',
      decision: 'Der Pilot rutscht auf Q1',
      principle: 'Erst zeigen, dann ändern',
      insight: 'Aufgegeben wird die Buchführung',
      assumption: 'Der Einkauf entscheidet, nicht das Team',
      article: 'Karpathy über das LLM-Wiki',
    },
    /* what each note carries besides its title: a field or two, and what it
       is joined to — which is the part that makes it context rather than a
       label */
    quotes: {
      person: 'Sie verantwortet den Rollout, nicht das Budget.',
      meeting: 'Ohne Security-Review unterschreiben sie nicht.',
      voice: 'Wenn wir pro Platz abrechnen, fallen die kleinen Teams raus.',
      article: 'Ein Wiki sind nicht die Notizen. Es sind die Verbindungen dazwischen.',
    },
    meta: {
      person: ['Pilotkunde · Produkt', '2 Gespräche · 1 Entscheidung'],
      meeting: ['25. Sep · 42 Min', 'Anna Berger · 3 Notizen'],
      voice: ['25. Sep · 3 Min', 'wurde zur Preis-Erkenntnis'],
      decision: ['ADR-0027 · angenommen', 'bestätigt H-24'],
      insight: ['I-296 · aus dem Gespräch', 'stützt H-24 · 4 Quellen'],
      assumption: ['H-40 · offen', 'der Pilot entscheidet sie'],
      principle: ['P-01 · seit Mai', '9 Verweise'],
      article: ['Quellen-Stufe 1 · Karpathy', 'speist I-296'],
    },
  },
};
