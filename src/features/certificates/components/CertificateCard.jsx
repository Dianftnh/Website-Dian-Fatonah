import { Link } from 'react-router-dom';

export function CertificateCard({ certificate }) {
  return (
    <Link
      to={`/certificates/${certificate.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-[#6E3549]/10"
    >
      <div className="flex aspect-[16/10] items-center justify-center bg-soft-surface p-4">
        <img src={certificate.image} alt={certificate.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-primary">{certificate.issuer}</p>
        <h3 className="mt-2 text-xl font-semibold text-text-primary">{certificate.title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{certificate.date}</p>
      </div>
    </Link>
  );
}
