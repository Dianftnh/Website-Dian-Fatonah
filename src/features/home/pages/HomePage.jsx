import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import About from '../../about/About';
import { CertificateCard } from '../../certificates/components/CertificateCard';
import { CreativeCard } from '../../creative/components/CreativeCard';
import Hero from '../../hero/Hero';
import { ProjectCard } from '../../portfolio/components/ProjectCard';
import { ExpertiseSection } from '../components/ExpertiseSection';
import { HomeContactCTA } from '../components/HomeContactCTA';
import { getHomeData } from '../services/homeService';
import { ExperienceSection } from '../../../experience/components/ExperienceSection';

const { featuredProjects, featuredCertificates, featuredCreative, skills } = getHomeData();

export default function HomePage() {
  usePageMeta({
    title: 'Beranda | Portofolio Dian Fatonah',
    description:
      'Ringkasan portofolio Dian Fatonah mencakup fokus Artificial Intelligence, software development, karya kreatif, dan sertifikat unggulan.',
  });

  return (
    <>
      <Hero />
      <ExpertiseSection skills={skills} />
      <About />
      <ExperienceSection />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
              <h2 className="text-3xl font-bold text-text-primary">Proyek unggulan</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold text-text-secondary hover:text-primary">
              Lihat semua
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kreatif</p>
              <h2 className="text-3xl font-bold text-text-primary">Karya kreatif terpilih</h2>
            </div>
            <Link to="/creative" className="text-sm font-semibold text-text-secondary hover:text-primary">
              Lihat semua
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCreative.map((item) => (
              <CreativeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sertifikat</p>
              <h2 className="text-3xl font-bold text-text-primary">Sertifikat unggulan</h2>
            </div>
            <Link to="/certificates" className="text-sm font-semibold text-text-secondary hover:text-primary">
              Lihat semua
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCertificates.map((item) => (
              <CertificateCard key={item.id} certificate={item} />
            ))}
          </div>
        </div>
      </section>

      <HomeContactCTA />
    </>
  );
}
