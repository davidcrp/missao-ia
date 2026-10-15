import type { Metadata } from "next";
import { upsell, upsellMeta } from "@/content/upsell";
import { Btn, Container, Pill, Section } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: upsellMeta.title,
  description: upsellMeta.description,
  // Post-purchase page — should never show up in search results.
  robots: { index: false, follow: false },
};

export default function OfertaEspecial() {
  return (
    <>
      <div className="bg-action px-4 py-2.5 text-center text-xs font-bold tracking-[0.02em] text-white">
        {upsell.eyebrow}
      </div>

      <Section center className="pt-10 pb-8">
        <Container>
          <Pill tone="red">{upsell.warning}</Pill>

          <h1 className="t-display mx-auto mt-5 max-w-[800px]">
            {upsell.titleBefore}
            <span className="text-brand">{upsell.titleAccent}</span>
            {upsell.titleAfter}
          </h1>

          <p className="mx-auto mt-[18px] max-w-[672px] text-sm font-medium leading-relaxed text-body md:text-lg">
            {upsell.lead}
          </p>

          <div className="mx-auto mt-8 max-w-[560px] rounded-3xl border-2 border-highlight bg-surface p-7 text-left shadow-card">
            <p className="text-center text-2xl font-black text-ink">
              {upsellMeta.title}
            </p>

            <p className="mt-4 text-center text-5xl font-black leading-tight tracking-[-1.5px] text-ink">
              <small className="align-super text-2xl">{upsell.currency}</small>
              {upsell.price}
            </p>
            <p className="mt-0.5 text-center text-xs font-semibold text-muted">
              {upsell.terms}
            </p>

            <div className="my-4 flex justify-center">
              <Pill tone="red">{upsell.save}</Pill>
            </div>

            <ul>
              {upsell.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 py-[7px] text-sm leading-normal"
                >
                  <span aria-hidden>✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Btn href={upsell.ctaHref} block size="lg" className="mt-6">
              {upsell.cta}
            </Btn>

            <p className="mt-3.5 text-center text-[11px] leading-normal text-muted">
              {upsell.note}
            </p>
            <p className="mt-2 text-center text-[11px] font-semibold text-action-ink">
              {upsell.guarantee}
            </p>
          </div>

          <a
            href={upsell.declineHref}
            className="mt-6 inline-block text-xs text-muted underline underline-offset-4 transition-colors hover:text-body"
          >
            {upsell.decline}
          </a>
        </Container>
      </Section>
    </>
  );
}
