import { Link } from 'react-router-dom';

export function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{project.category}</p>
        <h2 className="mt-2 text-xl font-semibold text-text-primary">{project.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 3).map((technology) => (
            <span key={technology} className="rounded-full border border-border px-2.5 py-1 text-xs text-text-secondary">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
