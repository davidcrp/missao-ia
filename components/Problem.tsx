import { problem } from "@/content/site";
import { Container, Pill, Section } from "./ui/Primitives";

export function Problem() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <Pill tone="red">{problem.eyebrow}</Pill>
          <h2 className="t-h2 mx-auto mt-4 max-w-[720px]">{problem.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problem.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-line bg-surface p-6"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-urgent-tint text-2xl">
                {item.icon}
              </span>
              <p className="mt-4 text-lg font-extrabold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
