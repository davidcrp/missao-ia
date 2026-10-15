"use client";

import { useState } from "react";
import { faq } from "@/content/site";
import { Container, Pill, Section, cx } from "./ui/Primitives";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
      <Container prose>
        <div className="text-center">
          <Pill>{faq.eyebrow}</Pill>
          <h2 className="t-h2 mt-4 text-brand">{faq.title}</h2>
        </div>

        <div className="mt-10 grid gap-3">
          {faq.items.map((item, i) => {
            const expanded = open === i;
            return (
              <div
                key={item.q}
                className={cx(
                  "overflow-hidden rounded-xl bg-surface transition-colors duration-200",
                  expanded
                    ? "border-2 border-brand"
                    : "border border-line hover:border-brand-soft",
                )}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                  className={cx(
                    "flex w-full items-center justify-between gap-4 px-5 text-left",
                    expanded ? "pt-4 pb-2" : "py-4",
                  )}
                >
                  <span
                    className={cx(
                      "text-[15px] font-bold transition-colors",
                      expanded ? "text-brand" : "text-ink",
                    )}
                  >
                    {item.q}
                  </span>

                  <span
                    aria-hidden
                    className={cx(
                      "grid size-7 shrink-0 place-items-center rounded-full text-lg leading-none transition-colors",
                      expanded
                        ? "bg-brand text-white"
                        : "bg-brand-tint text-brand",
                    )}
                  >
                    {expanded ? "−" : "+"}
                  </span>
                </button>

                {expanded && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="px-5 pb-4 text-sm leading-relaxed text-body"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
