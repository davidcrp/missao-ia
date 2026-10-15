import Image from "next/image";
import { author } from "@/content/site";
import { Container, Pill, Section } from "./ui/Primitives";

export function Author() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Tilted portrait in a soft-blue mat, echoing the reference framing. */}
          <div className="mx-auto w-full max-w-[320px] rotate-[-3deg] rounded-[34px] bg-brand-soft p-3 shadow-card transition-transform duration-300 hover:rotate-0">
            <Image
              src="/profa-elis.png"
              alt="Profª Elis, criadora da Missão IA"
              width={1122}
              height={1402}
              sizes="(max-width: 768px) 80vw, 320px"
              className="h-auto w-full rounded-[26px]"
            />
          </div>

          <div>
            <Pill>{author.eyebrow}</Pill>
            <h2 className="t-h3 mt-4">{author.title}</h2>
            {author.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed md:text-base">
                {p}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-3 gap-4">
              {author.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-surface-alt px-3 py-4 text-center">
                  <p className="text-2xl font-black leading-none text-brand">{s.value}</p>
                  <p className="mt-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
