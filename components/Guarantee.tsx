import { guarantee } from "@/content/site";
import { Chip, Pill, Section } from "./ui/Primitives";

export function Guarantee() {
  return (
    <Section alt>
      <div className="mx-auto max-w-[768px] rounded-[32px] border-2 border-brand bg-surface px-7 py-9 text-center">
        <Chip className="mx-auto mb-4">{guarantee.icon}</Chip>
        <h2 className="t-h2">{guarantee.title}</h2>
        <p className="mx-auto mt-3.5 max-w-[672px] text-sm font-medium leading-relaxed text-body md:text-lg">
          {guarantee.text}
        </p>
        <div className="mt-[22px] flex flex-wrap justify-center gap-2.5">
          {guarantee.pills.map((p) => (
            <Pill key={p} tone="green">
              {p}
            </Pill>
          ))}
        </div>
      </div>
    </Section>
  );
}
