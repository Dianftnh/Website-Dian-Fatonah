import { Link } from 'react-router-dom';

export function CreativeCard({ item }) {
  return (
    <Link
      to={`/creative/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-[#6E3549]/10"
    >
      <div className="overflow-hidden">
        <img src={item.thumbnail} alt={item.title} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-primary">{item.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-text-primary">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{item.description}</p>
      </div>
    </Link>
  );
}
