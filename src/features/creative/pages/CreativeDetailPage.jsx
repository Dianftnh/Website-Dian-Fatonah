import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { ConceptArticle } from '../../../shared/components/ConceptArticle';
import { getCreativeBySlug } from '../services/creativeService';

export default function CreativeDetailPage() {
  const { slug } = useParams();
  const item = getCreativeBySlug(slug);

  usePageMeta({
    title: item ? `${item.title} | Karya Kreatif Dian Fatonah` : 'Kreatif | Portofolio Dian Fatonah',
    description: item ? item.description : 'Detail karya kreatif Dian Fatonah.',
  });

  if (!item) {
    return <Navigate to="/creative" replace />;
  }

  return (
    <article className="container mx-auto px-6 py-24">
      <div className="mb-8">
        <Link to="/creative" className="text-sm font-semibold text-text-secondary hover:text-primary">
          ← Kembali ke kreatif
        </Link>
      </div>

      <header className="mb-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{item.category}</p>
          <h1 className="mt-3 text-4xl font-bold text-text-primary">{item.title}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">{item.description}</p>
          {item.tools && item.tools.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-text-secondary">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm">
          <img src={item.thumbnail} alt={item.title} className="h-72 w-full rounded-xl object-cover" loading="lazy" />
        </div>
      </header>

      <ConceptArticle concept={item.concept} />

      {item.links && item.links.length > 0 && (
        <section className="mt-8 rounded-2xl border border-border bg-white p-6">
          <h2 className="text-2xl font-bold text-text-primary">Tautan Project</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {item.links.map((link) => (
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
        </section>
      )}
    </article>
  );
}
