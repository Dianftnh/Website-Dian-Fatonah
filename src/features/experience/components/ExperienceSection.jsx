
import { getExperiences } from '../services/experienceService';

export function ExperienceSection() {
  const experiences = getExperiences();

  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="bg-white/60 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Pengalaman
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-text-primary">
            Pengalaman profesional, proyek, dan organisasi
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Perjalanan saya dalam bidang analisis data, kecerdasan buatan,
            pengelolaan konten, dan administrasi.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.organization}-${experience.role}-${index}`}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-primary">
                {experience.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-text-primary">
                {experience.role}
              </h3>

              <p className="mt-1 font-medium text-text-secondary">
                {experience.organization}
              </p>

              <p className="mt-2 text-sm text-text-secondary">
                {experience.period}
              </p>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
