import type { Copy } from './en';

// Español. Traducido a partir del inglés y NO revisado por un hablante nativo.
// Ver docs/landing-v2.md antes de publicar.
export const es: Copy = {
  meta: {
    title: 'EKHO Labs — la IA vale lo que vale tu contexto',
    description:
      'EKHO convierte lo que sabes en un contexto conectado que se capitaliza, para que saques más de la IA cada vez que la uses, y siga siendo tuyo.',
  },
  nav: {
    chapters: 'Capítulos',
    why: 'Por qué',
    what: 'Qué',
    how: 'Cómo',
    architecture: 'Arquitectura',
    team: 'Equipo',
    waitlist: 'Únete a la lista',
    language: 'Idioma',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    next: 'Siguiente',
    prev: 'Atrás',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  hero: {
    titleBefore: 'La IA vale lo que vale tu contexto.',
    titleSignal: 'Hazlo tuyo.',
    lede: 'EKHO convierte lo que sabes en una única fuente de contexto conectada con la que tu IA puede trabajar. Crea tu memoria sintética y consérvala. Cada vez que la usas, sacas más de ella - sin perder el control.',
    cta: 'Únete a la lista',
    seeHow: 'Cómo funciona',
  },
  why: {
    title: '¿Qué se vuelve escaso cuando la inteligencia abunda?',
    a: 'El contexto. Todo lo que sabes: tus decisiones y por qué, las personas con las que trabajas, lo que has leído y lo que concluiste.',
    b: 'El modelo es el mismo para todos, tu contexto es único.',
    c: 'Pero el conocimiento está disperso por naturaleza, entre tu cabeza, chats, correos y notas. Reunirlo era una causa perdida. Hasta ahora.',
  },
  what: {
    title: 'Una cartera para tu activo más valioso.',
    a: 'Tu contexto se convierte en tu activo más valioso. EKHO te ayuda a construirlo y luego lo guarda: una carpeta en tu propio disco, legible por ti y por cualquier agente que permitas.',
    b: 'Nada queda encerrado. No es una memoria dentro del modelo de otro.',
    commandLabel: 'Instala la CLI de EKHO',
    commandNote: 'En acceso anticipado, por invitación. El instalador aún no está disponible.',
  },
  how: {
    title: 'EKHO trabaja donde trabajas tú.',
    a: 'EKHO se acopla al chat que ya usas: comandos que tú invocas y skills que aplica por su cuenta.',
    b: 'Y nunca cambia nada sin enseñártelo antes.',
    sovereignty: 'Hazte independiente del modelo',
    note: 'Los modelos ya construyen una memoria tuya a lo largo de los chats, y es útil. También es suya: su formato, sus condiciones, y cuanto más crece, más caro sale marcharse. EKHO construye ese mismo contexto en tu propio disco, en Markdown, donde cualquiera de ellos puede leerlo y ninguno lo retiene.',
    edge: 'Sigue siendo tuyo, y cambiar uno por otro no te cuesta nada.',
  },
  compound: {
    title: 'Tu conocimiento se capitaliza.',
    a: 'Cada fuente que incorporas se enlaza con todo lo que ya está ahí. Una idea sabe de dónde viene, qué la sostiene y qué la contradice.',
    b: 'En eso consiste capitalizarse: cada nota que añades multiplica las conexiones, así que la calidad de lo que recibes crece de forma exponencial. La contabilidad es la parte que la gente abandona, y es justo la parte que hace EKHO.',
  },
  viewer: {
    title: 'Tu contexto, con la forma que necesitas.',
    lede: 'El EKHO Viewer construye vistas de tu vault: tú indicas qué notas, qué campos, qué secciones y para quién, y él renderiza esa página.',
    a: 'Una vista no es una copia. Lee los mismos archivos que escribe tu agente, así que la página se mueve con tu conocimiento en lugar de quedarse atrás.',
    note: 'El viewer está en construcción. La hoja de ruta no: hoy ya se genera, desde los mismos archivos.',
    appTitle: 'EKHO Roadmap',
    nav: ['Resumen', 'Ahora', 'Después', 'Decisiones', 'Historial'],
    readOnly: 'solo lectura',
    recent: 'En marcha',
    items: [
      ['e26', '¿La ontología soporta cadenas de acciones?', 'en marcha'],
      ['e27', 'Migrar los vaults a la nueva ontología', 'en marcha'],
      ['e21', 'Quién es member, tester y usuario', 'decisión'],
      ['e11', 'Nombrar un caso de prueba para el modelo de negocio', 'siguiente'],
      ['e16', 'Relato del pitch y landing page', 'noviembre'],
    ],
  },
  architecture: {
    title: 'La arquitectura de EKHO',
    lede: 'Cualquier IA puede tomar notas. EKHO añade la gramática y los flujos que las hacen repetibles y compatibles con cualquier otro vault de EKHO.',
    layers: {
      conversation: {
        title: 'Conversation',
        note: 'entre personas',
        lead: 'Donde empieza el conocimiento:',
        text: 'en las conversaciones con las personas con las que trabajas. Una llamada, una reunión, una decisión dicha en voz alta. Casi nada de eso se escribe, y es justo lo que EKHO busca.',
      },
      llm: {
        title: 'LLM',
        note: 'intercambiable',
        lead: 'El medio, no el lugar:',
        text: 'el motor que lee, escribe y enlaza. EKHO funciona con cualquier modelo, frontera, abierto o local, así que puedes cambiar de modelo y tu conocimiento se queda donde estaba.',
      },
      harness: {
        title: 'Harness',
        note: 'CLI y skills',
        lead: 'La capa que pone la gramática a trabajar:',
        text: 'skills, flujos y un linter que incorporan fuentes, responden preguntas y mantienen todo coherente. Convierte algo que una persona pidió una vez en un comportamiento que cualquiera puede repetir.',
      },
      ontology: {
        title: 'Ontology',
        note: 'tipos, aristas, reglas',
        lead: 'La gramática común de un vault:',
        text: 'qué es una nota (idea, hipótesis, decisión), cómo se relacionan y qué reglas siguen. Se declara en lugar de pedirse, así cada vault se comporta igual y cada disciplina puede extenderlo sin romper el núcleo.',
      },
      vault: {
        title: 'EKHO Vault',
        note: 'formato abierto',
        lead: 'Lo que es tuyo:',
        text: 'Markdown sencillo en tu propio disco. Vale más con cada sesión, y ninguna de las capas de encima puede retenerlo.',
      },
    },
  },
  who: {
    title: 'Por qué construimos esto',
    /* The conviction first, then what backs it. The claim is set in
       full ink and the grounding a tone back, the same order the
       rest of the page uses: say the thing, then show the receipt. */
    claim:
      'Si la IA es una revolución industrial de la mente, quienes piensan deberían ser aquellos para los que se paga. Hoy la memoria se está construyendo del otro lado.',
    lede: 'Dos fundadores en Berlín. Creemos que Europa se debe a sí misma una versión que responda a las personas y no al modelo. El vault detrás de esta página guarda 710 notas, y cada decisión de esta página es una de ellas.',
    lorenz: 'Semántica, ontología y diseño',
    stephan: 'Harness, datos e ingeniería',
  },
  waitlist: {
    title: 'Dónde estamos',
    lede: 'La CLI funciona y la usamos a diario. El visor está en construcción. Todavía no hay producto alojado, ni cuentas, ni precios. Si quieres estar cuando los haya, déjanos tu correo.',
    cta: 'Únete a la lista',
    note: 'De momento es un correo para nosotros. Una respuesta cuando haya algo que ver, y sin rastreo.',
    label: 'Tu correo',
    formNote: 'Un correo cuando haya algo que ver. Nada más, y sin rastreo.',
  },
  closing: {
    before: 'Construimos EKHO para que la gente pueda capitalizar su contexto',
    mark: 'y conservarlo.',
  },
  finder: { title: 'myEKHO' },
  chat: {
    windowTitle: 'Procesando la llamada con Anna',
    newChat: 'Nuevo chat',
    today: 'Hoy',
    yesterday: 'Ayer',
    recents: [
      'Procesando la llamada con Anna',
      'Preparar la revisión de la hoja de ruta',
      'Sustituir la ontología',
      'Afinar el relato del pitch',
    ],
    vault: 'vault conectado',
    connected: 'conectado',
    ask: '/ekho Incorpora la grabación de la llamada de ayer con Anna',
    said: 'Transcribo la grabación y la dejo en tu bandeja.',
    terminal: 'Terminal',
    skill: 'Skill · ekho-inbox-digest',
    wouldWrite: 'Esto es lo que escribiría en tu vault:',
    rows: [
      ['nuevo', 'Decision', 'El piloto pasa a Q1'],
      ['nuevo', 'Insight', 'El alojamiento de datos es el bloqueo'],
      ['nuevo', 'Contact', 'Anna Berger'],
      ['link', '—', '7 notas que ya tienes'],
    ],
    confirm: 'Confirmar',
    adjust: 'Ajustar',
    reply: 'Responder…',
    /* the line at the foot of the screen when a model is picked */
    picked: '{name} seleccionado',
  },
  graphic: {
    frameTitle: 'Tu EKHO',
    /* what the vault behind this site actually holds; the graphic counts
       them up when it comes into view */
    stats: [
      ['710', 'notas'],
      ['1.240', 'enlaces'],
    ],
    label:
      'El mismo conocimiento en cuatro estados: primero disperso y sin forma, luego esparcido, después reunido en una forma con las primeras conexiones, y por último una red densa de varios cientos de puntos sin uno solo nuevo.',
    strip:
      'Tres semanas de un mismo trabajo, en el orden en que llegó. Nada de esto sabe nada del resto.',
    types: {
      person: 'Persona',
      meeting: 'Reunión',
      voice: 'Nota de voz',
      decision: 'Decisión',
      principle: 'Principio',
      insight: 'Idea',
      assumption: 'Supuesto',
      article: 'Artículo',
      mail: 'Email',
      video: 'Vídeo',
      recap: 'Resumen',
      passage: 'Pasaje',
      encyclopedia: 'Enciclopedia',
      claude: 'Investigación',
      gemini: 'Investigación',
    },
    titles: {
      person: 'Anna Berger, jefa de producto',
      meeting: 'Llamada del jueves con Anna',
      voice: 'Idea de precios, paseando',
      decision: 'El piloto pasa a Q1',
      principle: 'Mostrar el cambio antes de hacerlo',
      insight: 'Lo que se abandona es la contabilidad',
      assumption: 'Decide compras, no el equipo',
      article: 'Karpathy sobre el LLM wiki',
      mail: '¿Nos pueden enviar una propuesta para el lunes?',
      video: '¿Por qué corremos hacia el precipicio de la IA?',
      recap: 'Resumen: la llamada con Anna',
      passage: '«La información no es verdad. La información es conexión.»',
      encyclopedia: 'Niklas Luhmann',
      claude: '¿Quién firma realmente una implantación?',
      gemini: '¿Por qué se abandonan los sistemas de notas?',
    },
    /* what each note carries besides its title: a field or two, and what it
       is joined to — which is the part that makes it context rather than a
       label */
    quotes: {
      person: 'Ella lleva el despliegue, no el presupuesto.',
      meeting: 'No firman sin una revisión de seguridad.',
      voice: 'Si cobramos por puesto, los equipos pequeños se caen.',
      article: 'Un wiki no son las notas. Son los enlaces entre ellas.',
      mail: 'Hemos visto tres proveedores. Lo que no hemos visto es a alguien que ya lo haya hecho.',
      recap: 'El alojamiento de datos es el bloqueo, no el precio. Firma compras, no el equipo.',
      encyclopedia: 'Luhmann fue célebre por su uso extensivo del fichero de notas o Zettelkasten.',
      claude: 'En los casos que revisamos, la firma estaba en compras mucho más que en el equipo.',
      gemini: 'Los que sobreviven tienen un paso de archivo tan aburrido que no exige decisión.',
    },
    details: {
      person: [
        ['rol', 'Product lead'],
        ['visto', '25 sep, en una llamada'],
      ],
      meeting: [
        ['duración', '42 min'],
        ['con', 'Anna Berger'],
      ],
      voice: [
        ['duración', '3 min'],
        ['dónde', 'de camino a casa'],
      ],
      decision: [
        ['tomada', '25 sep'],
        ['por', 'Lorenz'],
      ],
      insight: [
        ['anotado', '25 sep'],
        ['de', 'la llamada con Anna'],
      ],
      assumption: [
        ['planteada', '12 sep'],
        ['abierta', '13 días'],
      ],
      principle: [
        ['desde', 'mayo'],
        ['usado', '9 veces'],
      ],
      article: [
        ['de', 'Andrej Karpathy'],
        ['leído', '24 sep'],
      ],
      mail: [
        ['de', 'un cliente potencial'],
        ['quiere', 'una propuesta el lunes'],
      ],
      video: [
        ['canal', 'The Ezra Klein Show'],
        ['visto', '22 sep'],
      ],
      recap: [
        ['escrito por', 'el asistente de reunión'],
        ['de', 'la llamada con Anna'],
      ],
      passage: [
        ['libro', 'Nexus'],
        ['autor', 'Yuval Noah Harari'],
      ],
      encyclopedia: [
        ['quién', 'sociólogo alemán'],
        ['leído', '19 sep, en Wikipedia'],
      ],
      claude: [
        ['asistente', 'Claude'],
        ['vive en', 'su app, no la tuya'],
      ],
      gemini: [
        ['asistente', 'Gemini'],
        ['vive en', 'su app, no la tuya'],
      ],
    },
    meta: {
      person: ['25 sep', '2 llamadas · 1 decisión'],
      meeting: ['25 sep · 42 min', 'Anna Berger · 3 notas'],
      voice: ['25 sep · 3 min', 'se volvió la idea de precios'],
      decision: ['25 sep', 'valida H-24'],
      insight: ['25 sep', 'apoya H-24 · 4 fuentes'],
      assumption: ['12 sep', 'el piloto la resuelve'],
      principle: ['desde mayo', '9 referencias'],
      article: ['24 sep', 'alimenta I-296'],
      mail: ['25 sep · 09:12', 'respondida desde tres notas'],
      video: ['20 sep · 29:37', 'alimenta el principio'],
      recap: ['25 sep · 42 min', 'produjo dos notas'],
      passage: ['18 sep', 'alimenta el hallazgo'],
      encyclopedia: ['19 sep', 'alimenta el hallazgo'],
      claude: ['4 sep · 28 mensajes', 'produjo la hipótesis'],
      gemini: ['11 sep · 16 mensajes', 'llevó a Luhmann'],
    },
  },
};
