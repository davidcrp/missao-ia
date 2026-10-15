import { hero } from "@/content/site";
import { Btn, Container, Pill, ProductShot, Section } from "./ui/Primitives";

export function OfferBar({ text }: { text: string }) {
  return (
    <div className="bg-urgent px-4 py-2.5 text-center text-xs font-bold tracking-[0.02em] text-white">
      {text}
    </div>
  );
}

export function Hero() {
  return (
    <Section center className="pt-9 pb-10">
      <Container>
        <Pill tone="green">{hero.badge}</Pill>

        <h1 className="t-display mx-auto mt-5 max-w-[800px]">
          {hero.titleBefore}
          <span className="text-brand">{hero.titleAccent}</span>
          {hero.titleAfter}
        </h1>

        <p className="mx-auto mt-4 max-w-[620px] text-sm leading-relaxed text-body md:text-base">
          {hero.subheadBefore}
          <strong className="font-bold text-ink">{hero.subheadBold}</strong>
          {hero.subheadAfter}
        </p>

        {/* CTA sits above the product shot on purpose — the offer is readable
            before the image, and the image then answers "what do I get?". */}
        <Btn shape="pill" className="mt-7">
          {hero.cta}
          <span aria-hidden>→</span>
        </Btn>

        <p className="mt-3.5 flex items-center justify-center gap-1.5 text-xs font-semibold text-action-ink">
          <span aria-hidden>✅</span>
          {hero.trustLine}
        </p>

        <div className="relative mx-auto mt-8 w-full max-w-[680px]">
          <span className="absolute -top-3 right-3 z-10 rounded-full bg-highlight px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.04em] text-white shadow-card sm:right-6">
            +{hero.imageBadge}
          </span>
          <div className="rounded-3xl border border-line bg-surface p-4 shadow-card sm:p-6">
            <ProductShot className="max-w-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
