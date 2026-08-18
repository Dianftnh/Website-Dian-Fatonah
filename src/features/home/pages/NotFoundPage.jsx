import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../shared/hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Halaman Tidak Ditemukan | Portofolio Dian Fatonah',
    description: 'Halaman yang Anda cari tidak tersedia. Kembali ke beranda portofolio Dian Fatonah.',
  });

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-soft-surface p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold text-text-primary">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-text-secondary">
          Tautan yang Anda buka tidak tersedia. Silakan kembali ke beranda untuk melanjutkan penjelajahan portfolio.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
