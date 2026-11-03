import { Link } from 'react-router-dom';

export function HomeContactCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-soft-surface via-white to-primary-soft/50 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Kolaborasi</p>
          <h2 className="mt-3 text-3xl font-semibold text-text-primary">Terbuka untuk proyek data, AI, dan konten kreatif</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Jika Anda membutuhkan partner yang memahami sisi teknis sekaligus komunikasi visual, saya siap berdiskusi lebih lanjut.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
