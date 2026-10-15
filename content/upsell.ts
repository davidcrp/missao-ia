/**
 * Post-purchase (one-time) offer — shown AFTER checkout, not on the sales page.
 * Route: /oferta-especial
 *
 * ⚠️ Confirm the course specs (length, format, whether it is live or recorded,
 * certificate) before publishing. Copy was written to fit the layout.
 */

export const upsellMeta = {
  title: "Formação Express: Professor Preparado para a Era da IA",
  description:
    "Minicurso prático para o professor que quer dominar inteligência artificial na rotina da escola — planejamento, avaliação e uso responsável.",
} as const;

export const upsell = {
  eyebrow: "✅ Compra aprovada — oferta única",
  warning: "Esta página aparece uma vez só. Se você sair, ela não volta.",

  // Explicit parts — do not rebuild this by splitting a string on the accent.
  titleBefore: "Antes de ir, adicione a ",
  titleAccent: "Formação Express",
  titleAfter: " ao seu pedido",

  lead: "Você acabou de garantir as aulas prontas. A Formação Express é a parte que prepara você — para conduzir a discussão, responder o que a turma pergunta e usar IA no seu próprio planejamento.",

  price: "47",
  currency: "R$",
  terms: "Pagamento único · acesso vitalício",
  save: "Só nesta página",

  includes: [
    "Minicurso prático, direto ao ponto, sem enrolação teórica",
    "Como usar IA no seu planejamento sem terceirizar a aula",
    "O que responder quando o aluno diz que “a IA fez o trabalho”",
    "Critérios de avaliação para trabalhos feitos com IA",
    "Uso responsável: o que combinar com a turma e com a coordenação",
    "Acesso vitalício, no seu ritmo",
  ],

  cta: "Sim, quero a Formação Express",
  ctaHref: "#",
  decline: "Não, obrigado — quero continuar sem a formação",
  declineHref: "/obrigado",

  note: "O acesso é liberado no mesmo e-mail da sua compra.",
  guarantee: "🛡️ Mesma garantia de 7 dias do material principal.",
} as const;
