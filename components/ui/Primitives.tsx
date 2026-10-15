import Image from "next/image";
import type { ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---------- Section ---------- */

export function Section({
  children,
  alt = false,
  tight = false,
  center = false,
  id,
  className,
}: {
  children: ReactNode;
  alt?: boolean;
  tight?: boolean;
  center?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        "px-4",
        tight ? "py-10" : "py-10 md:py-14",
        alt ? "bg-surface-alt" : "bg-surface",
        center && "text-center",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  prose = false,
  className,
}: {
  children: ReactNode;
  prose?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "mx-auto w-full",
        prose ? "max-w-[768px]" : "max-w-[896px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------- Button ---------- */

export function Btn({
  children,
  href = "#pricing",
  size = "md",
  shape = "default",
  block = false,
  className,
}: {
  children: ReactNode;
  href?: string;
  size?: "md" | "lg";
  shape?: "default" | "pill";
  block?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2.5 bg-action text-white",
        "transition-[background-color,transform] duration-200 hover:bg-action-strong hover:-translate-y-0.5",
        shape === "pill" ? "rounded-full" : "rounded-xl",
        size === "lg"
          ? "px-10 py-5 text-xl font-black"
          : "px-10 py-4 text-lg font-extrabold",
        block ? "flex w-full" : "max-sm:flex max-sm:w-full",
        className,
      )}
    >
      {children}
    </a>
  );
}

/* ---------- Pill ---------- */

const pillTones = {
  blue: "bg-brand-tint text-brand-deep",
  green: "bg-action-tint text-action-ink",
  red: "bg-urgent-tint text-urgent",
  amber: "bg-highlight text-white",
  ghost: "bg-white/15 text-white border border-white/35",
} as const;

export function Pill({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof pillTones;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5",
        "text-[11px] font-extrabold uppercase tracking-[0.04em]",
        pillTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Chip (emoji is the icon system) ---------- */

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "grid size-14 place-items-center rounded-2xl bg-brand-tint text-[26px] leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Card ---------- */

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-line bg-surface p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------- Product shot ----------
   Real artwork on a near-white background (no alpha), so it needs no frame —
   it sits straight on the white hero band. */

export function ProductShot({
  src = "/mockup-missao-ia.png",
  alt = "Materiais da Missão IA: guia do professor, dossiê do aluno, planos de aula, mapa de missões, cartas de missão, passaporte do agente, tabuleiro, folha de registro e certificado de conclusão",
  className,
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1536}
      height={1024}
      priority
      sizes="(max-width: 768px) 92vw, 640px"
      // No vertical margin here — spacing belongs to the caller's layout.
      className={cx("mx-auto h-auto w-full max-w-[640px] rounded-2xl", className)}
    />
  );
}

/* ---------- Phone mockup placeholder ----------
   Stands in for the source page's video embed.
   Swap for <video> or next/image before publishing. */

export function Mockup({ caption = "Substituir por vídeo próprio" }: { caption?: string }) {
  return (
    <div
      className={cx(
        "relative mx-auto my-4 mb-6 aspect-[9/16] w-full max-w-[280px] md:max-w-[320px]",
        "grid place-items-center overflow-hidden rounded-[32px] border-[6px] border-ink",
        "bg-[linear-gradient(160deg,#1e3a8a,#2563eb_55%,#3b82f6)]",
      )}
      aria-label="Prévia do material em vídeo"
    >
      <div className="absolute inset-0 grid grid-cols-2 gap-2 p-3.5 opacity-55" aria-hidden>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="rounded-[10px] bg-white/20" />
        ))}
      </div>
      <span
        className="relative grid size-[68px] place-items-center rounded-full bg-white/90 pl-1 text-2xl text-brand"
        aria-hidden
      >
        ▶
      </span>
      <span className="absolute inset-x-3.5 bottom-3.5 text-center text-xs font-bold text-white">
        {caption}
      </span>
    </div>
  );
}
