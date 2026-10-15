import { finalCta, footer } from "@/content/site";
import { Btn, Pill } from "./ui/Primitives";

export function FinalCta() {
  return (
    <section className="bg-brand px-4 py-16 text-center text-white">
      <h2 className="t-h2 mx-auto max-w-[768px] font-black uppercase italic text-white">
        {finalCta.title}
      </h2>
      <p className="mx-auto mb-7 mt-4 max-w-[768px] text-[15px] leading-relaxed text-white/90">
        {finalCta.text}
      </p>
      <Btn size="lg">{finalCta.cta}</Btn>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        {finalCta.pills.map((p) => (
          <Pill key={p} tone="ghost">
            {p}
          </Pill>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface px-4 py-12 text-center text-xs text-body">
      <p>{footer.copyright}</p>
      <div className="mt-2.5 flex flex-wrap justify-center gap-[18px] text-[11px] font-semibold">
        {footer.badges.map((b) => (
          <span key={b}>{b}</span>
        ))}
      </div>
    </footer>
  );
}
