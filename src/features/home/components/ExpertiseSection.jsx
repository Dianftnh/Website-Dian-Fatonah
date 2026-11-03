export function ExpertiseSection({ skills }) {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Keahlian</p>
          <h2 className="mt-3 text-3xl font-semibold text-text-primary">Fokus utama pada analisis data dan insight</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <article key={skill.id} className="rounded-2xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-semibold text-text-primary">{skill.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
