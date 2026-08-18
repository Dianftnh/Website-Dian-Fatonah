import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { getCertificateBySlug } from '../services/certificatesService';

export default function CertificateDetailPage() {
  const { slug } = useParams();
  const certificate = getCertificateBySlug(slug);

  usePageMeta({
    title: certificate
      ? `${certificate.title} | Sertifikat Dian Fatonah`
      : 'Sertifikat | Portofolio Dian Fatonah',
    description: certificate
      ? certificate.description
      : 'Detail sertifikat dan kompetensi Dian Fatonah.',
  });

  if (!certificate) {
    return <Navigate to="/certificates" replace />;
  }

  return (
    <article className="container mx-auto px-6 py-24">
      <div className="mb-8">
        <Link to="/certificates" className="text-sm font-semibold text-text-secondary hover:text-primary">
          ← Kembali ke sertifikat
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm">
          <img src={certificate.image} alt={certificate.title} className="w-full rounded-xl object-contain" loading="lazy" />
        </div>

        <div className="rounded-2xl border border-border bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{certificate.issuer}</p>
          <h1 className="mt-3 text-4xl font-bold text-text-primary">{certificate.title}</h1>
          <p className="mt-4 text-text-secondary">{certificate.description}</p>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="font-semibold text-text-primary">Penerima</dt>
              <dd className="text-text-secondary">{certificate.recipient}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="font-semibold text-text-primary">Tanggal</dt>
              <dd className="text-text-secondary">{certificate.date}</dd>
            </div>
            {certificate.credentialId && (
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="font-semibold text-text-primary">Credential ID</dt>
                <dd className="text-text-secondary">{certificate.credentialId}</dd>
              </div>
            )}
          </dl>

          {certificate.skills && certificate.skills.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-text-primary">Topik yang dikuasai</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border px-3 py-1.5 text-sm text-text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {certificate.verificationUrl && (
            <div className="mt-6">
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                Verifikasi Sertifikat
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
