import { stats } from "@/content/site";

export function Stats() {
  return (
    <section className="border-b border-line bg-surface px-4 py-12">
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-black leading-none text-brand">{s.value}</p>
            <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
