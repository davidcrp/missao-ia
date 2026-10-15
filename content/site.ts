/**
 * All page copy lives here so sections stay presentational.
 *
 * ⚠️ Before publishing, confirm every product claim in this file against the
 * real product — page count, faixa etária, delivery format, whether the
 * activities really work without computers, and the 7-day guarantee. Copy was
 * written to fit the layout; the specs are yours to verify.
 */

export const meta = {
  title: "Missão IA — 12 Aulas-Jogo Prontas para Ensinar Inteligência Artificial",
  description:
    "12 aulas-jogo prontas para ensinar Inteligência Artificial na escola. Roteiro do professor, material do aluno e gabarito. Imprima e aplique na próxima segunda.",
} as const;

export const offerBar = "🤖 Oferta de lançamento por tempo limitado";

export const hero = {
  /**
   * No rating stars until you have real reviews — a star row with an invented
   * count is a fabricated claim. Once you have them, swap this for the count
   * and set `showStars` to true.
   */
  showStars: false,
  socialProof: "Feito para professores que precisam ensinar IA e não são da área de tecnologia",

  /**
   * Objection-killer badge above the headline. Kept to a claim the page already
   * makes elsewhere. Do NOT swap this for an alignment claim (BNCC or similar)
   * unless the material really is aligned and you can show it.
   */
  badge: "🤖 Não precisa saber programar",

  // Explicit parts — never rebuild this by splitting a string on the accent.
  titleBefore: "",
  titleAccent: "12 aulas-jogo prontas",
  titleAfter: " para ensinar Inteligência Artificial na sua turma",

  subheadBefore: "Cada aula vem com ",
  subheadBold: "roteiro do professor, material do aluno e gabarito",
  subheadAfter: " — você abre, imprime e aplica, sem precisar programar nada.",

  cta: "Quero minhas aulas de IA",
  trustLine: "Acesso imediato após a compra",
  imageBadge: "12 aulas-jogo",
} as const;

/**
 * Stats bar under the hero.
 *
 * ⚠️ Slots 2 and 3 are audience/rating claims, supplied by the site owner.
 * They must reflect real sales and real reviews — a customer count or average
 * rating you cannot evidence is false advertising (CDC arts. 36-38), and the
 * liability sits with the seller. Keep them current, and be able to show the
 * reviews behind the 4,9 if anyone asks.
 */
export const stats = [
  { value: "12", label: "Aulas-jogo prontas" },
  { value: "+11k", label: "Professores atendidos" },
  { value: "4,9", label: "Avaliação média" },
] as const;

export const problem = {
  eyebrow: "Você já passou por isso?",
  title: "Ensinar IA virou cobrança antes de virar formação",
  items: [
    {
      icon: "⏳",
      title: "Sem material nenhum",
      text: "A escola pede que você “trabalhe IA”, mas ninguém entrega atividade pronta. Você monta do zero, no fim de semana, sem saber se está no caminho certo.",
    },
    {
      icon: "🤷",
      title: "Você não é da área",
      text: "Todo conteúdo que você acha assume que você já entende de tecnologia. O que falta é um roteiro que conduza a aula sem exigir que você vire programadora.",
    },
    {
      icon: "📱",
      title: "A turma já usa escondido",
      text: "Os alunos entregam trabalho feito por IA e ninguém combinou regra nenhuma. A conversa sobre uso responsável fica sempre para depois.",
    },
  ],
} as const;

export const features = {
  eyebrow: "O que você recebe",
  title: "Ensinar Inteligência Artificial",
  titleAccent: "sem virar professor de programação",
  items: [
    { icon: "🎮", title: "12 aulas-jogo prontas", sub: "roteiro, material e gabarito" },
    { icon: "🧠", title: "Sem pré-requisito técnico", sub: "não precisa saber programar" },
    { icon: "⏱️", title: "Cabe no tempo de aula", sub: "uma aula, do início ao fim" },
    { icon: "🖨️", title: "Pronto para imprimir", sub: "PDF em A4, sem editar nada" },
    { icon: "🔓", title: "Acesso vitalício", sub: "pague uma vez, use sempre" },
    { icon: "⚡", title: "Entrega imediata", sub: "cai no seu e-mail na hora" },
  ],
} as const;

export const bonuses = {
  badge: "🎁 Bônus exclusivos",
  titleBefore: "E ainda leva ",
  titleAccent: "5 BÔNUS",
  titleAfter: " de presente",
  kicker: "Todas as expansões entram no Pacote Completo — sem custo adicional.",

  /**
   * `originalPrice` drives the "Valor original / Hoje você recebe" pair on each
   * card. It is null on every item because these expansions have never been sold
   * separately — an invented anchor price is a fake discount (CDC art. 37 §1).
   * Set a real list price and the card switches to the struck-through treatment
   * automatically; leave it null and the card shows "Incluso no Pacote Completo".
   */
  items: [
    {
      icon: "⚡",
      title: "20 Missões Relâmpago de Inteligência Artificial",
      image: "/bonus-missoes-relampago.png",
      text: "Atividades curtas para abrir a aula, preencher a sobra de tempo ou salvar o dia em que o plano não fecha. Cada missão cabe numa folha.",
      originalPrice: null as string | null,
    },
    {
      icon: "🔐",
      title: "Escape Room Código Fantasma",
      image: "/bonus-escape-room.png",
      text: "Uma aula inteira em formato de escape room: a turma resolve enigmas sobre inteligência artificial para destravar o código final.",
      originalPrice: null as string | null,
    },
    {
      icon: "🔬",
      title: "Feira de Projetos com Inteligência Artificial",
      image: "/bonus-feira-projetos.png",
      text: "Roteiro completo para montar uma feira de projetos na escola — do convite às famílias até os critérios de avaliação dos trabalhos.",
      originalPrice: null as string | null,
    },
    {
      icon: "📜",
      title: "Protocolo de Uso Responsável da IA na Escola",
      image: "/bonus-protocolo.png",
      text: "Documento pronto para combinar as regras com a turma e apresentar à coordenação. Resolve a conversa difícil antes que ela vire problema.",
      originalPrice: null as string | null,
    },
    {
      icon: "📚",
      title: "IA em Todas as Matérias — Aplicações para 8 Disciplinas",
      image: "/bonus-todas-materias.png",
      text: "Como puxar inteligência artificial para dentro de português, matemática, ciências, história, geografia, arte, inglês e educação física.",
      originalPrice: null as string | null,
    },
  ],
} as const;

/**
 * Quotes and attributions supplied by the site owner.
 * Keep the record of who said each one and when, in case anyone asks — and only
 * publish attributions the person agreed to. `rating` drives the star row.
 */
export const testimonials = {
  eyebrow: "Quem já usa, recomenda",
  title: "O que dizem os professores",
  items: [
    {
      quote:
        "As aulas ficaram muito mais práticas e os alunos participaram de verdade.",
      name: "Mariana Alves",
      role: "Professora",
      rating: 5,
    },
    {
      quote:
        "O material já vem organizado e economizou muito tempo de planejamento.",
      name: "Carlos Souza",
      role: "Professor",
      rating: 5,
    },
    {
      quote:
        "As missões tornaram um assunto complexo muito mais fácil de ensinar.",
      name: "Juliana Costa",
      role: "Coordenadora pedagógica",
      rating: 5,
    },
  ],
} as const;

/** Bio and figures supplied by the site owner. */
export const author = {
  eyebrow: "Quem está por trás",
  title: "Olá! Eu sou a Profª Elis",
  paragraphs: [
    "Criei o Missão IA para ajudar professores a abordarem inteligência artificial de forma prática, criativa e responsável — sem precisarem dominar tecnologia.",
    "Cada missão foi pensada para facilitar o planejamento e transformar um tema complexo em uma experiência que realmente envolva os alunos.",
  ],
  stats: [
    { value: "12", label: "Aulas-jogo" },
    { value: "100+", label: "Materiais" },
    { value: "5", label: "Expansões especiais" },
  ],
} as const;

export type Plan = {
  name: string;
  oldPrice?: string | null;
  currency: string;
  price: string;
  terms: string;
  save?: string | null;
  includes: readonly string[];
  excludes?: readonly string[];
  excludesLabel?: string;
  bonusBox?: {
    label: string;
    items: readonly { name: string; price?: string | null }[];
  };
  cta: string;
  href: string;
  note: string;
  featured?: boolean;
  ribbon?: string;
};

export const pricing = {
  eyebrow: "Escolha seu acesso",
  title: "Um investimento que se paga em uma aula",
  pills: ["✅ Acesso imediato", "🛡️ Garantia de 7 dias", "💳 Pagamento único"],
  footnote: "🔒 Compra segura · 🛡️ 7 dias de garantia",
  plans: [
    {
      name: "Missão IA",
      currency: "R$",
      price: "10",
      terms: "Pagamento único",
      includes: [
        "12 aulas-jogo prontas para ensinar IA",
        "Roteiro do professor, material do aluno e gabarito",
        "Acesso vitalício",
      ],
      excludesLabel: "Não inclusos neste pacote",
      excludes: [
        "20 Missões Relâmpago",
        "Escape Room Código Fantasma",
        "Feira de Projetos com IA",
        "Protocolo de Uso Responsável da IA na Escola",
        "IA em Todas as Matérias — 8 disciplinas",
      ],
      cta: "Quero agora",
      href: "https://pay.cakto.com.br/32tztgo",
      note: "O link de download chega no seu e-mail assim que o pagamento é aprovado.",
    },
    {
      name: "Missão IA + 5 Expansões",
      currency: "R$",
      price: "29",
      terms: "Pagamento único",
      save: "5 expansões inclusas",
      includes: [
        "As 12 aulas-jogo completas",
        "Mais as 5 expansões especiais, sem pagar nada a mais",
        "Escape room e feira de projetos prontos para aplicar",
        "Acesso vitalício ao material principal e às expansões",
      ],
      bonusBox: {
        label: "🎁 As 5 expansões especiais",
        items: [
          { name: "⚡ 20 Missões Relâmpago de IA" },
          { name: "🔐 Escape Room Código Fantasma" },
          { name: "🔬 Feira de Projetos com IA" },
          { name: "📜 Protocolo de Uso Responsável da IA" },
          { name: "📚 IA em Todas as Matérias — 8 disciplinas" },
        ],
      },
      cta: "Quero o Premium",
      href: "https://pay.cakto.com.br/kvyy66y_1057741",
      note: "O link de download chega no seu e-mail assim que o pagamento é aprovado.",
      featured: true,
      ribbon: "⭐ Mais escolhido ⭐",
    },
  ] satisfies readonly Plan[],
} as const;

/** Checkout add-ons. Shown as a preview here; they are ticked at the checkout. */
export const orderBumps = {
  badge: "➕ Adicione ao pedido",
  title: "Dois complementos que aparecem no checkout",
  kicker: "Opcionais. Você marca se quiser, na hora de finalizar a compra.",
  items: [
    {
      icon: "🗝️",
      name: "Cofre com 200 Prompts Prontos para Professores",
      price: "R$ 9,90",
      text: "Prompts prontos para planejar aula, montar avaliação, corrigir redação e escrever recado para as famílias. É copiar, colar e ajustar o assunto.",
    },
    {
      icon: "📝",
      name: "Kit de Avaliações e Trabalhos Escolares com IA",
      price: "R$ 7,90",
      text: "Modelos de avaliação, rubricas de correção e propostas de trabalho pensados para turmas que já chegam com inteligência artificial na mão.",
    },
  ],
} as const;

/**
 * Order-bump modal fired by the basic plan's CTA.
 * The R$ 29 anchor is the real listed price of the complete package on this same
 * page, so the R$ 17,90 upgrade is a genuine discount — keep it that way: if the
 * complete package price changes, change `oldPrice` with it.
 */
export const upsellModal = {
  title: "ESPERE! Vai deixar esses bônus para trás?",
  excludedLabel: "O Pacote Básico NÃO INCLUI:",
  // Kept short on purpose: each must fit one line at 360px so the modal never
  // needs an inner scrollbar.
  excluded: [
    "20 Missões Relâmpago",
    "Escape Room Código Fantasma",
    "Feira de Projetos com IA",
    "Protocolo de Uso Responsável",
    "IA em 8 Disciplinas",
  ],
  offerLead: "Por apenas",
  offerDelta: "+R$ 7,90",
  offerTail: "destrave o",
  offerName: "PACOTE COMPLETO",
  oldPrice: "R$ 29",
  newPrice: "R$ 17,90",
  offerNote: "com os 5 bônus",
  acceptCta: "SIM! Quero por R$ 17,90",
  acceptHref: "https://pay.cakto.com.br/7h66j7t",
  declineCta: "Continuar apenas com o pacote básico",
  declineHref: "#",
  closeLabel: "Fechar",
} as const;

export const guarantee = {
  icon: "🛡️",
  title: "Garantia Incondicional de 7 Dias",
  text: "Baixe, imprima e aplique com a sua turma. Se em 7 dias você achar que não valeu, é só mandar um e-mail que devolvemos 100% do valor — sem formulário e sem justificativa.",
  pills: ["Reembolso total", "Sem perguntas", "Processo rápido"],
} as const;

export const faq = {
  eyebrow: "Tirando suas dúvidas",
  title: "Perguntas Frequentes",
  items: [
    {
      q: "Preciso saber programar ou entender de IA?",
      a: "Não. Cada aula-jogo vem com roteiro passo a passo, incluindo o que falar na abertura e as respostas comentadas. Se você nunca deu aula sobre o assunto, o roteiro conduz.",
    },
    {
      q: "Em quanto tempo recebo o material?",
      a: "Na hora. Assim que o pagamento é aprovado, o link de download chega no e-mail cadastrado na compra.",
    },
    {
      q: "É pagamento único ou assinatura?",
      a: "Pagamento único. Não existe mensalidade nem renovação: você paga uma vez e o acesso é vitalício.",
    },
    {
      q: "Qual a diferença entre os dois pacotes?",
      a: "O pacote de R$10 traz as 12 aulas-jogo. O Pacote Completo, por R$29, traz as mesmas 12 aulas mais as 5 expansões especiais — missões relâmpago, escape room, feira de projetos, protocolo de uso responsável e as aplicações para 8 disciplinas.",
    },
    {
      q: "E se não funcionar com a minha turma?",
      a: "Você tem 7 dias para testar em sala. Se não funcionar, devolvemos o valor integral.",
    },
    {
      q: "Funciona para aula online e presencial?",
      a: "Sim. O material é PDF em A4 para impressão, e funciona igualmente bem projetado ou compartilhado em tela.",
    },
  ],
} as const;

export const finalCta = {
  title: "Professor, sua primeira aula de IA já está pronta",
  text: "Pare de adiar o assunto que a escola já está cobrando. Baixe hoje e entre na sala na próxima aula com a atividade na mão.",
  cta: "🔒 Quero começar agora",
  pills: ["Acesso imediato", "Garantia de 7 dias", "Sem mensalidade"],
} as const;

/** Floating CTA pinned bottom-right; jumps to the pricing block. */
export const floatingCta = {
  label: "Garantir Acesso",
  href: "#pricing",
} as const;

export const footer = {
  copyright: "© 2026 Missão IA. Todos os direitos reservados.",
  badges: ["🔒 Segurança garantida", "🛡️ Dados protegidos"],
} as const;
