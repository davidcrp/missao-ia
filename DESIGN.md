# DESIGN.md: 400 Dinâmicas Pedagógicas

## Source
- URL: https://xn--400dinmicaspedaggicas-10b51b.shop/ (`400dinâmicaspedagógicas.shop`)
- Capture date: 2026-08-21
- Evidence: full-page screenshot (1425×8861), live DOM + `getComputedStyle` audit, section/heading/button/container inventory, page metadata
- Note: Firecrawl CLI/API key not present on this machine — equivalent evidence captured via Playwright (screenshot + computed styles + DOM). Same inputs, different collector.

## Reference Screenshot
![Full-page screenshot of 400 Dinâmicas Pedagógicas](./.firecrawl/site-screenshot.png)

Use this screenshot as the visual source of truth for layout, hierarchy, density, and feel. Tokens below describe the same page in machine-readable form.

## Design Summary
Single-page Brazilian info-product sales page (Next.js + Tailwind, Poppins). Trust-blue plus action-green on near-white. Everything sits in a **centered narrow column** (`max-w-4xl` / 896px, prose at `max-w-3xl` / 768px) stacked as alternating white / slate-50 bands — no sidebars, no multi-column page grid. Heavy weights (800–900) on short punchy headings, emoji as the icon system, pill badges everywhere, rounded cards with soft borders instead of heavy shadows. Green is reserved exclusively for CTAs; blue carries brand and headings; red appears only in the urgency top bar and struck-through "before" prices.

Personality: warm, urgent, teacher-friendly. Not corporate SaaS — closer to a friendly printable-worksheet shop with conversion-funnel discipline.

## Design Tokens

### Colors
| Role | Value | Notes |
|---|---|---|
| `--brand` primary | `#2563EB` (blue-600) | headings, CTA band bg, links, icon chips |
| `--brand-deep` | `#1D4ED8` (blue-700) | section headings, gradient end |
| `--brand-darkest` | `#1E3A8A` (blue-900) | small eyebrow headings |
| `--brand-tint` | `#EFF6FF` (blue-50) | icon chips, callout card backgrounds |
| `--action` CTA | `#22C55E` (green-500) | all buy buttons |
| `--action-strong` | `#16A34A` (green-600) | hero CTA / hover state |
| `--action-tint` | `#F0FDF4` (green-50) | "included free" bonus block |
| `--ink` | `#0F172A` (slate-900) | all headings, price numerals |
| `--body` | `#475569` (slate-600) | paragraphs |
| `--muted` | `#94A3B8` (slate-400) | fine print, struck prices |
| `--surface` | `#FFFFFF` | white bands, cards |
| `--surface-alt` | `#F8FAFC` (slate-50) | alternating bands + page background |
| `--border` | `#E2E8F0` (slate-200) | card + divider borders |
| `--urgent` | `#DC2626` (red-600) | top offer bar, "before" prices |
| `--star` | `#FACC15` (yellow-400) | rating stars |
| `--highlight` | `#F97316` (orange-500) | *inferred* — glow/border on the featured plan |

Observed exactly: `rgb(37,99,235)` (52 uses), `rgb(34,197,94)` (26), `rgb(239,246,255)` (17 backgrounds), body background slate-50. Remaining values resolved from the site's Tailwind class names (`bg-slate-50`, `text-slate-900`, `bg-blue-50`, `bg-[#2563eb]`).

### Typography
- Family: `Poppins` (self-hosted via `next/font`), fallback `ui-sans-serif, system-ui, sans-serif`. Single family across the whole page — 600 of 600 audited elements. Weights needed: 400, 500, 600, 700, 800, 900.
- Body: 16px / 400 / 1.5 (24px). Secondary body 16px / 400 / 1.625.
- Scale (desktop, measured):

| Token | Size / weight / line-height | Use |
|---|---|---|
| `display` | 48px / 900 / 1.12 | hero H1; pricing H2 adds `letter-spacing: -1.2px` |
| `h2` | 36px / 800 / 1.11 | section headings |
| `h3` | 30px / 800 / 1.25 | sub-section headings |
| `card-title` | 24px / 900 / 1.33 | pricing plan names |
| `lead` | 18px / 800 / 1.55 | bonus item titles |
| `body` | 16px / 400 / 1.5 | paragraphs |
| `small` | 14px / 400–700 / 1.25 | card copy, list items |
| `badge` | 11–13px / 700–900 / 1.25 | pill badges, eyebrows; often uppercase + tracking |

- Mobile step-down is aggressive: the hero H1 runs `text-xl` (20px) → `text-5xl` (48px) across five breakpoints (`375px`, `sm`, `md`, `lg`).

### Spacing And Layout
- Containers: `896px` (main), `768px` (prose / FAQ), `672px` (hero subhead), `320px` (phone-mockup media, `280px` on mobile).
- Horizontal gutter: `16px`.
- Section rhythm: `padding: 40–64px 16px` desktop, `24–40px` mobile. Compact for a sales page — bands are close-packed.
- Radius scale: `8px`, `12px` (buttons), `16px` (cards), `24px` / `32px` / `48px` (media + feature cards), `9999px` (pills — 32 uses, the dominant shape).
- Borders: `1–2px solid #E2E8F0`; the highlighted plan uses a `2px` colored border.
- Shadows: effectively absent in computed styles — depth comes from **borders plus tinted fills**, not elevation. Reserve one soft shadow (`0 10px 30px rgba(2,6,23,.08)`) for the featured pricing card.
- Full page ≈ 8861px tall at 1425px wide — 10 stacked sections.

## Components
- **Top offer bar** — full-bleed red, white 11–12px bold centered text, emoji lead.
- **Rating cluster** — 5 yellow stars plus a social-proof count in 12–13px, sitting above the H1.
- **Primary CTA button** — green fill, white text, 18–20px / 700–900, padding `14–20px × 32–40px`, radius `12–16px`, full-width inside pricing cards and auto-width elsewhere. Hover: darken to green-600 plus `translateY(-2px)`.
- **Icon chip** — 48–56px rounded square, `#EFF6FF` fill, emoji centered. The entire icon system is emoji; there is no SVG icon set.
- **Pill badge** — rounded-full, tinted background plus matching darker text, uppercase 10–12px / 700–900. Variants: blue (info), green (savings), red (urgency), amber (featured).
- **Before/after comparison** — two columns: left ❌ red-tinted pain rows, right ✅ green-tinted gain rows, one row per pair, thin dividers.
- **Feature grid** — 6 items, 3-up desktop / 2-up mobile: icon chip, bold short label, one muted sub-line.
- **Bonus list card** — stacked white bordered cards, product thumbnail left, title (18/800) plus paragraph right.
- **Value-stack block** — blue band, struck-through bundle total, free-inclusion line in white/green.
- **Testimonial carousel** — phone-screenshot images in a rounded frame, prev/next chevrons, dot indicators.
- **Pricing pair** — two cards side by side; the featured card is taller, colour-bordered, carries a floating ribbon, struck old price, large price, "pagamento único" line, green savings pill, ✅ feature list, a green-tinted bonus sub-block, full-width CTA, and a fine-print reassurance line.
- **Guarantee card** — centered blue-bordered rounded card on slate-50, badge icon at top, three trust pills at the bottom.
- **FAQ accordion** — `max-w-3xl`, `<button>` rows, 16px/400 question plus chevron, `16px` padding, thin divider, expands on click.
- **Final CTA band** — full-bleed `#2563EB`, white uppercase 900-weight H2, one green button, three white trust pills below.
- **Footer** — white band (not dark), `48px 16px` padding, slate-600 text at 11–12px, copyright plus two trust labels. Measured, not assumed: `background #FFFFFF`, `color #475569`.

## Page Patterns
Section order (top → bottom) with band colour:
1. Red offer bar
2. **Hero** (white) — stars → H1 → subhead → phone video mockup (9:16, 320px) → green CTA
3. **Transformação** (white) — before/after comparison plus 4 outcome pills
4. **What's inside** (slate-50) — second video mockup → blue CTA strip
5. **Feature grid** (white) — 6 benefit tiles
6. **Bonuses** (white) — 4 bonus cards → value-stack block → mid CTA
7. **Testimonials** (slate-50) — carousel
8. **Pricing** (white) — 2 plans
9. **Guarantee** (slate-50) — guarantee card
10. **FAQ** (white) — 6 accordion rows
11. **Final CTA** (blue) → footer

Responsive: mobile-first, one column throughout; grids collapse 3→2→1; the type scale is the main responsive lever. Media mockups stay `280px`/`320px` at every size. All CTAs anchor to `#pricing`; the final purchase links leave to an external checkout.

## Content Style
- Second person, addressed to one teacher — "seu domingo", "sua turma".
- Headings are a promise or a pain question, 6–12 words; the money heading is rhetorical.
- Pain → relief framing throughout; concrete numbers (400, 7 days, 10 minutes, 1.250+) instead of adjectives.
- CTA wording is first-person desire ("Quero…", "Começar agora") — never "Comprar" or "Assinar".
- Every CTA is immediately followed by a risk-reducer line (guarantee, one-time payment, instant delivery).
- Emoji used as punctuation and iconography, roughly one per badge, never inside body prose.
- Prices always shown as struck anchor → discounted price → savings pill.

## Agent Build Instructions
1. Load Poppins 400/500/600/700/800/900. Set `body { background: #F8FAFC; color: #475569; font: 400 16px/1.5 Poppins; }`.
2. Declare the colour table above as CSS custom properties on `:root`. Never let green appear outside a CTA; never let red appear outside urgency or anchor prices.
3. Build every section as `<section>` with `padding: 56px 16px` and an inner `.container { max-width: 896px; margin-inline: auto; }`. Alternate surface / surface-alt backgrounds in the order under Page Patterns.
4. Headings: `color: var(--ink); font-weight: 800–900; line-height: 1.1–1.2`. Clamp the hero: `font-size: clamp(1.5rem, 6vw, 3rem)`.
5. Reuse three primitives everywhere — `.btn` (green, radius 12px, weight 800), `.pill` (radius 9999px, uppercase, 11px/800), `.card` (white, `1px solid var(--border)`, radius 16px, padding 24px). Resist adding shadows; only the featured pricing card gets one.
6. Emoji is the icon system. Wrap each in a `.chip` (56px, radius 16px, `background: var(--brand-tint)`).
7. Interactions are limited to CTA hover lift, accordion toggle, and carousel prev/next. No entrance animations beyond `transition: .2s ease`.
8. Assets: the source page's product mockups, testimonial screenshots, and video thumbnails are third-party — do not copy them. Use `assets/images/` placeholders and swap in your own artwork before publishing.
9. Keep the funnel skeleton: every band except FAQ and footer ends within one scroll of a CTA anchored to `#pricing`.

## Legal Note
This file documents an observed visual system. Logos, product imagery, testimonial screenshots, the brand name, and marketing copy on the source page belong to their owner. The clone in this folder reproduces the layout and design tokens with original placeholder copy and generated placeholder art — replace the brand name and any remaining source-derived wording before shipping anything public.

## Rerun Inputs
workflow: firecrawl-website-design-clone
source_url: https://xn--400dinmicaspedaggicas-10b51b.shop/
target_stack: static HTML + CSS (vanilla), Poppins via Google Fonts
output: DESIGN.md
