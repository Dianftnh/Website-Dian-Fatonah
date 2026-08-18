import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { ConceptArticle } from '../../../shared/components/ConceptArticle';
import { getProjectBySlug } from '../services/projectsService';

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  usePageMeta({
    title: project ? `${project.title} | Portfolio Dian Fatonah` : 'Portfolio | Portofolio Dian Fatonah',
    description: project
      ? project.shortDescription
      : 'Detail proyek portfolio Dian Fatonah di bidang teknologi dan AI.',
  });

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <article className="container mx-auto px-6 py-24">
      <div className="mb-8">
        <Link to="/portfolio" className="text-sm font-semibold text-text-secondary hover:text-primary">
          ← Kembali ke portfolio
        </Link>
      </div>

      <header className="mb-10 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{project.category}</p>
          <h1 className="mt-3 text-4xl font-bold text-text-primary">{project.title}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-text-secondary">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-3 shadow-sm">
          <img src={project.thumbnail} alt={project.title} className="h-72 w-full rounded-xl object-cover" loading="lazy" />
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-2xl font-bold text-text-primary">Peran</h2>
          <p className="mt-3 leading-relaxed text-text-secondary">{project.role}</p>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-2xl font-bold text-text-primary">Tautan</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="mt-10"><ConceptArticle concept={project.concept} /></div>
    </article>
  );
}
