import { Link } from 'react-router-dom';

export function CreativeCard({ item }) {
  return (
    <Link
      to={`/creative/${item.slug}`}
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img src={item.thumbnail} alt={item.title} className="h-56 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-primary">{item.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-text-primary">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
      </div>
    </Link>
  );
}
