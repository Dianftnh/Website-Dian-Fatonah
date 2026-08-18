import { Link } from 'react-router-dom';

export function CertificateCard({ certificate }) {
  return (
    <Link
      to={`/certificates/${certificate.slug}`}
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-56 items-center justify-center bg-soft-surface p-3">
        <img src={certificate.image} alt={certificate.title} className="h-full w-full object-contain" loading="lazy" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-primary">{certificate.issuer}</p>
        <h3 className="mt-2 text-xl font-semibold text-text-primary">{certificate.title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{certificate.date}</p>
      </div>
    </Link>
  );
}
