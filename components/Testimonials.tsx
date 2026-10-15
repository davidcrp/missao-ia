import { testimonials } from "@/content/site";
import { Container, Pill, Section } from "./ui/Primitives";

// Pastel avatar tints, cycled by position.
const avatarTones = [
  "bg-[#fde4d3] text-[#c2410c]",
  "bg-[#d6ecfd] text-[#1d4ed8]",
  "bg-[#e6dcfb] text-[#6d28d9]",
];

export function Testimonials() {
  return (
    <Section alt>
      <Container>
        <div className="text-center">
          <Pill>{testimonials.eyebrow}</Pill>
          <h2 className="t-h2 mt-4">{testimonials.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-line bg-surface p-6 shadow-card"
            >
              <div
                className="text-lg tracking-[2px] text-star"
                role="img"
                aria-label={`${t.rating} de 5 estrelas`}
              >
                {"★".repeat(t.rating)}
              </div>

              <blockquote className="mt-4 grow text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-base font-black ${
                    avatarTones[i % avatarTones.length]
                  }`}
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
