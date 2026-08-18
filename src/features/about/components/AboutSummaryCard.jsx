export function AboutSummaryCard({ title, children }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      <div className="mt-3 text-text-secondary leading-relaxed">{children}</div>
    </article>
  );
}
