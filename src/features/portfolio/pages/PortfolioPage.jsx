import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { ProjectCard } from '../components/ProjectCard';
import { getProjects } from '../services/projectsService';

export default function PortfolioPage() {
  const projects = getProjects();

  usePageMeta({
    title: 'Portfolio | Portofolio Dian Fatonah',
    description:
      'Kumpulan proyek analisis data Dian Fatonah, mencakup data cleaning, eksplorasi, visualisasi, dashboard, forecasting, dan machine learning.',
  });

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl">Proyek dan pengalaman yang saya bangun</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
