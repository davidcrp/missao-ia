import Image from "next/image";
import { bonuses } from "@/content/site";
import { Container, Pill, Section } from "./ui/Primitives";

export function Bonuses() {
  return (
    <Section alt>
      <Container>
        <div className="text-center">
          <Pill tone="amber">{bonuses.badge}</Pill>
          <h2 className="t-h2 mt-4">
            {bonuses.titleBefore}
            <span className="text-brand">{bonuses.titleAccent}</span>
            {bonuses.titleAfter}
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-xs text-muted md:text-sm">
            {bonuses.kicker}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {bonuses.items.map((b) => (
            <article
              key={b.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card"
            >
              {/* Source shots are 1536x1024, so the box matches at 3:2. */}
              <div className="relative aspect-[3/2] bg-surface-alt">
                <Image
                  src={b.image}
                  alt={b.title}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 46vw, 300px"
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-highlight px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.06em] text-white shadow-card">
                  Grátis
                </span>
              </div>

              <div className="flex grow flex-col p-5">
                <h3 className="text-[15px] font-extrabold leading-snug text-brand-deep">
                  {b.title}
                </h3>
                <p className="mt-2 grow text-xs leading-relaxed text-body">{b.text}</p>

                <div className="mt-4 border-t border-line pt-3">
                  {b.originalPrice ? (
                    <>
                      <p className="text-[11px] text-muted">
                        Valor original:{" "}
                        <s className="font-semibold">{b.originalPrice}</s>
                      </p>
                      <p className="mt-0.5 text-xs font-extrabold text-action-ink">
                        Hoje você recebe: R$ 0,00
                      </p>
                    </>
                  ) : (
                    <p className="text-xs font-extrabold text-action-ink">
                      Incluso no Pacote Completo
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </Section>
  );
}
