# Missão IA — landing page e funil de vendas

Página de vendas de um produto digital para professores: **12 aulas-jogo prontas
para ensinar Inteligência Artificial** em sala de aula. Inclui o funil completo:
página de vendas, oferta pós-compra e página de obrigado.

**Site no ar:** https://missao-ia-smoky.vercel.app

![Missão IA](public/mockup-missao-ia.png)

## Funcionalidades

- Página de vendas por seções: problema, benefícios, bônus, depoimentos, autora, planos, garantia e FAQ
- Dois planos de preço e prévia dos order bumps
- Oferta única pós-compra (`/oferta-especial`) e página de confirmação (`/obrigado`)
- CTA flutuante e integração com Meta Pixel
- Todo o texto centralizado e tipado em `content/`, separado dos componentes

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4, com tokens de design em `@theme`
- Fonte Poppins via `next/font`
- Deploy na Vercel

## Estrutura

| Caminho | O que é |
|---|---|
| `content/site.ts` | Textos da página de vendas |
| `content/upsell.ts` | Textos da oferta pós-compra |
| `app/globals.css` | Tokens de design (cores, tipografia) |
| `components/` | Um componente por seção da página |
| `components/ui/Primitives.tsx` | Componentes base: `Section`, `Container`, `Btn`, `Card`… |
| `DESIGN.md` | Sistema visual documentado |

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.
