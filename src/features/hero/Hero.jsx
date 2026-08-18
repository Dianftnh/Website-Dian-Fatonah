import { Link } from 'react-router-dom';
import { getProfile } from '../../shared/services/profileService';

export default function Hero() {
  const profile = getProfile();

  return (
    <section id="home" className="pb-16 pt-24">
      <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {profile.hero.eyebrow}
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-text-primary md:text-5xl">
            Saya {profile.name}.
          </h1>
          <h2 className="mb-6 text-xl text-text-secondary md:text-2xl">
            {profile.hero.heading}
          </h2>
          <p className="mb-7 text-base leading-relaxed text-text-secondary md:text-lg">
            {profile.hero.summary}
          </p>
          <div className="mb-8 flex flex-wrap gap-3 text-sm text-text-secondary">
            {profile.hero.focus.map((item) => (
              <span key={item} className="rounded-full border border-border bg-white px-3 py-1.5">{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/portfolio" className="rounded-xl border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark">
              Lihat Portfolio
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[420px]">
          <div className="overflow-hidden rounded-[28px] border border-border bg-soft-surface p-6">
            <img
              src={profile.profileImage}
              alt={`Foto profil ${profile.name}`}
              className="aspect-square w-full rounded-2xl object-cover object-center"
            />
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {profile.hero.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
