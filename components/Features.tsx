import { features } from "@/content/site";
import { Chip, Container, Pill, Section } from "./ui/Primitives";

export function Features() {
  return (
    <Section alt center>
      <Container>
        <Pill>{features.eyebrow}</Pill>
        <h3 className="t-h3 mt-4">
          {features.title}{" "}
          <span className="text-brand">{features.titleAccent}</span>
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3">
          {features.items.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-line bg-surface px-4 py-6 text-center"
            >
              <Chip className="mx-auto mb-3">{f.icon}</Chip>
              <p className="mb-1 text-[15px] font-extrabold text-ink">{f.title}</p>
              <p className="text-xs text-muted">{f.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
