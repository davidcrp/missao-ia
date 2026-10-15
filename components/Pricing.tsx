import { pricing, type Plan } from "@/content/site";
import { BasicPlanCta } from "./UpsellModal";
import { Btn, Container, Pill, Section, cx } from "./ui/Primitives";

export function Pricing() {
  return (
    <Section id="pricing" center>
      <Container>
        <Pill>{pricing.eyebrow}</Pill>
        <h2 className="t-h2 mt-4 font-black tracking-[-1.2px] [font-size:clamp(1.6rem,5vw,3rem)]">
          {pricing.title}
        </h2>

        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {pricing.pills.map((p) => (
            <Pill key={p} tone="green">
              {p}
            </Pill>
          ))}
        </div>

        <div className="mt-9 grid items-start gap-5 md:grid-cols-2">
          {pricing.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-[22px] text-xs text-muted">{pricing.footnote}</p>
      </Container>
    </Section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cx(
        "relative rounded-3xl bg-surface px-6 text-left",
        plan.featured
          ? "order-first border-2 border-highlight pt-[38px] pb-7 shadow-card md:order-none"
          : "border border-line py-7",
      )}
    >
      {plan.ribbon && (
        <Pill
          tone="amber"
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          {plan.ribbon}
        </Pill>
      )}

      <p className="text-center text-2xl font-black text-ink">{plan.name}</p>
      {plan.oldPrice && (
        <s className="mt-3 block text-center text-sm font-bold text-muted">
          {plan.oldPrice}
        </s>
      )}
      <p
        className={cx(
          "text-center text-5xl font-black leading-tight tracking-[-1.5px] text-ink max-[420px]:text-[40px]",
          !plan.oldPrice && "mt-3",
        )}
      >
        <small className="align-super text-2xl">{plan.currency}</small>
        {plan.price}
      </p>
      <p className="mt-0.5 text-center text-xs font-semibold text-muted">{plan.terms}</p>

      {plan.save ? (
        <div className="my-3.5 mb-5 flex justify-center">
          <Pill tone={plan.featured ? "red" : "green"}>{plan.save}</Pill>
        </div>
      ) : (
        <div className="h-5" />
      )}

      <ul>
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 py-[7px] text-sm leading-normal">
            <span aria-hidden>✅</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {plan.excludes && (
        <>
          <p className="mt-[18px] border-t border-line pt-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-muted">
            {plan.excludesLabel}
          </p>
          <ul>
            {plan.excludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 py-[7px] text-sm leading-normal text-muted"
              >
                <span aria-hidden className="font-bold">
                  ✖
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {plan.bonusBox && (
        <div className="my-4 mb-5 rounded-xl border border-[#bbf7d0] bg-action-tint px-4 py-3.5">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.06em] text-action-ink">
            {plan.bonusBox.label}
          </p>
          <ul>
            {plan.bonusBox.items.map((b) => (
              <li
                key={b.name}
                className="flex justify-between gap-2.5 py-1 text-[13px] text-[#14532d]"
              >
                <span>{b.name}</span>
                {b.price && <s className="opacity-80">{b.price}</s>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.featured ? (
        <Btn href={plan.href} block size="lg">
          {plan.cta}
        </Btn>
      ) : (
        // Basic plan opens the upgrade modal first; declining still checks out.
        <div className={plan.excludes ? "mt-5" : undefined}>
          <BasicPlanCta href={plan.href} label={plan.cta} />
        </div>
      )}

      <p className="mt-3.5 text-center text-[11px] leading-normal text-muted">
        {plan.note}
      </p>
    </div>
  );
}
