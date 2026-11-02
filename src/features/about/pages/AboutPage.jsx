import { Link } from 'react-router-dom';
import SocialIcons from '../../../shared/components/SocialIcons';
import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { AboutSummaryCard } from '../components/AboutSummaryCard';
import { getAboutProfile } from '../services/aboutService';

export default function AboutPage() {
  const profile = getAboutProfile();

  usePageMeta({
    title: 'Tentang | Portofolio Dian Fatonah',
    description:
      'Profil Dian Fatonah: Data Analyst dengan pengalaman data cleaning, analisis, visualisasi, dashboard, forecasting, serta machine learning.',
  });

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Tentang</p>
        <h1 className="mt-3 text-4xl font-bold text-text-primary">Profil lengkap</h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <AboutSummaryCard title="Latar belakang">
            <p className="leading-relaxed text-text-secondary">
              {profile.bio}
            </p>
            <p className="mt-5 leading-relaxed text-text-secondary">
              {profile.about.detail}
            </p>
          </AboutSummaryCard>

          <AboutSummaryCard title="Bidang yang ditekuni">
            <ul className="space-y-3">
              {profile.specialization.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutSummaryCard>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-soft-surface p-6">
          <h2 className="text-2xl font-bold">Arah pengembangan</h2>
          <p className="mt-3 leading-relaxed text-text-secondary">
            {profile.about.developmentDirection}
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-text-secondary">Ikuti aktivitas saya di media sosial</p>
          <SocialIcons />
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex rounded-xl border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
            Hubungi saya
          </Link>
        </div>
      </div>
    </section>
  );
}
