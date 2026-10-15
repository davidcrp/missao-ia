import { orderBumps } from "@/content/site";
import { Container, Pill, Section } from "./ui/Primitives";

export function OrderBumps() {
  return (
    <Section alt tight>
      <Container>
        <div className="text-center">
          <Pill>{orderBumps.badge}</Pill>
          <h2 className="t-h3 mt-3">{orderBumps.title}</h2>
          <p className="mt-2 text-xs text-muted">{orderBumps.kicker}</p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {orderBumps.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border-2 border-dashed border-line bg-surface p-5"
            >
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-xl">
                  {item.icon}
                </span>
                <p className="text-[15px] font-extrabold leading-snug text-ink">
                  {item.name}
                </p>
              </div>

              <p className="mt-3 grow text-sm leading-relaxed">{item.text}</p>

              <div className="mt-4 flex items-center justify-between border-t border-line pt-3.5">
                <Pill tone="green">No checkout</Pill>
                <span className="text-lg font-black text-ink">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
