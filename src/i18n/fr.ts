import type { Copy } from './en';

// Français. Traduit depuis l'anglais et NON relu par un locuteur natif.
// Voir docs/landing-v2.md avant publication.
export const fr: Copy = {
  meta: {
    title: "EKHO Labs — l'IA ne vaut que votre contexte",
    description:
      "EKHO transforme ce que vous savez en un contexte relié qui fructifie, pour tirer davantage de l'IA à chaque usage, sans jamais cesser de vous appartenir.",
  },
  nav: {
    chapters: 'Chapitres',
    why: 'Pourquoi',
    what: 'Quoi',
    how: 'Comment',
    architecture: 'Architecture',
    team: 'Équipe',
    waitlist: 'Rejoindre la liste',
    language: 'Langue',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    next: 'Suivant',
    prev: 'Retour',
    copy: 'Copier',
    copied: 'Copié',
  },
  hero: {
    titleBefore: "L'IA ne vaut que votre contexte.",
    titleSignal: 'Gardez-le.',
    lede: 'EKHO transforme ce que vous savez en un contexte relié avec lequel votre IA peut travailler. À chaque usage, vous en tirez davantage. Et il reste le vôtre.',
    cta: 'Rejoindre la liste',
    seeHow: 'Voir comment',
  },
  why: {
    title: "Qu'est-ce qui devient rare quand l'intelligence abonde ?",
    a: 'Le contexte. Tout ce que vous savez : vos décisions et pourquoi, les gens avec qui vous travaillez, ce que vous avez lu et ce que vous en avez conclu.',
    b: 'Le modèle est le même pour tout le monde, votre contexte est unique.',
    c: "Mais le savoir est dispersé par nature, entre votre tête, des conversations, des mails et des notes. Le rassembler était peine perdue. Jusqu'à maintenant.",
  },
  what: {
    title: 'Un portefeuille pour votre actif le plus précieux.',
    a: 'Votre contexte devient votre actif le plus précieux. EKHO vous aide à le construire, puis le garde : un dossier sur votre propre disque, lisible par vous et par tout agent que vous autorisez.',
    b: "Rien n'est verrouillé. Ce n'est pas une mémoire dans le modèle de quelqu'un d'autre.",
    commandLabel: 'Installe la CLI EKHO',
    commandNote: "En accès anticipé, sur invitation. L'installateur n'existe pas encore.",
  },
  how: {
    title: 'EKHO travaille là où vous travaillez.',
    a: "EKHO se greffe sur la conversation que vous avez déjà : des commandes que vous lancez et des skills qu'il applique de lui-même.",
    b: "Et il ne change jamais rien sans vous le montrer d'abord.",
    sovereignty: 'Devenez indépendant du modèle',
    note: "Les modèles se constituent désormais une mémoire de vous d'une conversation à l'autre, et elle est utile. Elle est aussi la leur : leur format, leurs conditions, et plus elle grandit, plus partir coûte cher. EKHO constitue ce même contexte sur votre propre disque, en Markdown, là où chacun d'eux peut le lire et où aucun ne le détient.",
    edge: "Il reste le vôtre, et passer de l'un à l'autre ne vous coûte rien.",
  },
  compound: {
    title: 'Votre savoir fructifie.',
    a: "Chaque source que vous versez se relie à tout ce qui est déjà là. Une idée sait d'où elle vient, ce qui l'appuie et ce qui la contredit.",
    b: "C'est en cela qu'elle fructifie : chaque note ajoutée multiplie les liens, si bien que la qualité de ce qui revient croît de façon exponentielle plutôt que pas à pas. La tenue des comptes est la partie que l'on abandonne, et c'est justement celle qu'EKHO prend en charge.",
  },
  viewer: {
    title: "Votre contexte, dans la forme qu'il vous faut.",
    lede: "L'EKHO Viewer construit des vues de votre vault : vous dites quelles notes, quels champs, quelles sections et pour qui, il en rend la page.",
    a: "Une vue n'est pas une copie. Elle lit les fichiers mêmes que votre agent écrit : la page suit votre savoir au lieu de prendre du retard sur lui.",
    b: "Un vault porte autant de vues qu'il vous en faut : une feuille de route pour la semaine, un historique des décisions, une page pour quelqu'un avec qui vous travaillez. Ici, c'est la feuille de route d'EKHO elle-même, issue du vault dans lequel ce site a été écrit.",
    note: "Le viewer est en construction. La feuille de route, non : elle est produite aujourd'hui, depuis les mêmes fichiers.",
    appTitle: 'EKHO Roadmap',
    nav: ['Vue générale', 'En cours', 'Ensuite', 'Décisions', 'Historique'],
    readOnly: 'lecture seule',
    stats: [
      ['4', 'résultats'],
      ['38', 'éléments'],
      ['6', 'décisions ouvertes'],
    ],
    recent: 'En cours',
    items: [
      ['e26', "L'ontologie porte-t-elle les chaînes d'actions ?", 'en cours'],
      ['e27', 'Migrer les vaults vers la nouvelle ontologie', 'en cours'],
      ['e21', 'Qui est member, testeur, utilisateur', 'décision'],
      ['e11', 'Nommer un cas de test pour le modèle économique', 'ensuite'],
      ['e16', 'Récit du pitch et landing page', 'novembre'],
    ],
  },
  architecture: {
    title: "L'architecture d'EKHO",
    lede: "N'importe quelle IA peut prendre des notes. EKHO ajoute la grammaire et les workflows qui les rendent reproductibles et compatibles avec tout autre vault EKHO.",
    layers: {
      conversation: {
        title: 'Conversation',
        note: 'entre personnes',
        lead: 'Là où le savoir commence :',
        text: "dans les conversations avec les gens avec qui vous travaillez. Un appel, une réunion, une décision dite à voix haute. Presque rien n'en est écrit, et c'est précisément ce que vise EKHO.",
      },
      llm: {
        title: 'LLM',
        note: 'interchangeable',
        lead: 'Le moyen, pas le lieu :',
        text: "le moteur qui lit, écrit et relie. EKHO fonctionne avec n'importe quel modèle, frontière, ouvert ou hébergé chez vous, donc vous pouvez en changer et votre savoir reste exactement où il était.",
      },
      harness: {
        title: 'Harness',
        note: 'CLI et skills',
        lead: 'La couche qui met la grammaire au travail :',
        text: "des skills, des workflows et un linter qui absorbent les sources, répondent aux questions et gardent le tout cohérent. Ce qu'une personne a demandé une fois devient un comportement que chacun peut répéter.",
      },
      ontology: {
        title: 'Ontology',
        note: 'types, arêtes, règles',
        lead: "La grammaire commune d'un vault :",
        text: "ce qu'est une note (idée, hypothèse, décision), comment les notes se relient et quelles règles elles suivent. Elle est déclarée plutôt que demandée, donc chaque vault se comporte pareil et chaque domaine peut l'étendre sans casser le noyau.",
      },
      vault: {
        title: 'EKHO Vault',
        note: 'format ouvert',
        lead: 'Ce qui vous appartient :',
        text: "du Markdown simple sur votre propre disque. Il gagne en valeur à chaque séance, et aucune des couches au-dessus n'a le droit de le retenir.",
      },
    },
  },
  who: {
    title: 'Qui construit cela',
    lede: "EKHO Labs, ce sont deux fondateurs. Nous construisons EKHO à découvert et nous l'utilisons chaque jour pour EKHO lui-même : le vault derrière cette page contient 710 notes, et chaque décision de cette page en est une.",
    lorenz: 'Sémantique, ontologie et design',
    stephan: 'Harness, données et ingénierie',
  },
  waitlist: {
    title: 'Où nous en sommes',
    lede: "La CLI fonctionne et nous l'utilisons tous les jours. La visionneuse est en cours. Il n'y a pas encore de produit hébergé, pas de compte, pas de tarifs. Si vous voulez être là quand ce sera le cas, laissez-nous votre adresse.",
    cta: 'Rejoindre la liste',
    note: "Pour l'instant c'est un mail chez nous. Une réponse quand il y aura quelque chose à voir, et aucun traçage.",
    label: 'Votre adresse',
    formNote: "Un mail quand il y aura quelque chose à voir. Rien d'autre, et aucun traçage.",
  },
  closing: {
    before: 'Nous construisons EKHO pour que chacun puisse faire fructifier son contexte',
    mark: 'et le garder.',
  },
  finder: { title: 'myEKHO' },
  chat: {
    windowTitle: "Traiter l'appel avec Anna",
    newChat: 'Nouvelle conversation',
    today: "Aujourd'hui",
    yesterday: 'Hier',
    recents: [
      "Traiter l'appel avec Anna",
      'Préparer la revue de roadmap',
      "Remplacer l'ontologie",
      'Affiner le récit du pitch',
    ],
    vault: 'vault connecté',
    connected: 'connecté',
    ask: "Verse dans EKHO l'appel d'hier avec Anna.",
    said: 'Je transcris l’enregistrement et je le dépose dans ta boîte.',
    terminal: 'Terminal',
    skill: 'Skill · ekho-inbox-digest',
    wouldWrite: 'Voici ce que j’écrirais dans ton vault :',
    rows: [
      ['nouveau', 'Decision', 'Le pilote passe au T1'],
      ['nouveau', 'Insight', "L'hébergement des données bloque"],
      ['nouveau', 'Contact', 'Anna Berger'],
      ['lien', '—', 'sept notes que tu as déjà'],
    ],
    confirm: 'Confirmer',
    adjust: 'Ajuster',
    reply: 'Répondre…',
    /* the line at the foot of the screen when a model is picked */
    picked: '{name} sélectionné',
  },
  graphic: {
    frameTitle: 'Votre EKHO',
    /* what the vault behind this site actually holds; the graphic counts
       them up when it comes into view */
    stats: [
      ['710', 'notes'],
      ['1 240', 'liens'],
    ],
    label:
      "Le même savoir en quatre états : d'abord dispersé et sans forme, puis éparpillé, puis rassemblé en une forme avec les premiers liens, et enfin un réseau dense de plusieurs centaines de points sans un seul nouveau.",
    types: {
      person: 'Personne',
      meeting: 'Réunion',
      voice: 'Note vocale',
      decision: 'Décision',
      principle: 'Principe',
      insight: 'Idée',
      assumption: 'Hypothèse',
      article: 'Article',
    },
    titles: {
      person: 'Anna Berger, cheffe de produit',
      meeting: 'Appel de jeudi avec Anna',
      voice: 'Idée de prix, en marchant',
      decision: 'Le pilote passe au T1',
      principle: 'Montrer avant de changer',
      insight: "Ce qu'on abandonne, c'est la tenue des comptes",
      assumption: "Les achats décident, pas l'équipe",
      article: 'Karpathy sur le LLM wiki',
    },
    /* what each note carries besides its title: a field or two, and what it
       is joined to — which is the part that makes it context rather than a
       label */
    meta: {
      person: ['Bettermile · produit', '2 appels · 1 décision'],
      meeting: ['25 sept · 42 min', 'Anna Berger · 3 notes'],
      voice: ['25 sept · 3 min', "devenue l'idée de prix"],
      decision: ['ADR-0027 · acceptée', 'valide H-24'],
      insight: ["I-296 · issu de l'appel", 'appuie H-24 · 4 sources'],
      assumption: ['H-40 · ouverte', 'le pilote tranchera'],
      principle: ['P-01 · depuis mai', '9 renvois'],
      article: ['source niveau 1 · Karpathy', 'alimente I-296'],
    },
  },
};
