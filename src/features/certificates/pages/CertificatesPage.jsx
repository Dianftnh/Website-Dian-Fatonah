import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { CertificateCard } from '../components/CertificateCard';
import { getCertificates } from '../services/certificatesService';

export default function CertificatesPage() {
  const certificates = getCertificates();

  usePageMeta({
    title: 'Sertifikat | Portofolio Dian Fatonah',
    description:
      'Daftar sertifikat dan penghargaan Dian Fatonah yang menunjukkan kompetensi pada AI, analisis data, dan komunikasi.',
  });

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sertifikat</p>
        <h1 className="mt-3 text-4xl font-bold text-text-primary">Pencapaian dan kompetensi yang saya raih</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((item) => (
          <CertificateCard key={item.id} certificate={item} />
        ))}
      </div>
    </section>
  );
}
