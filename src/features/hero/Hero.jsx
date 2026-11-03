import { Link } from 'react-router-dom';
import { getProfile } from '../../shared/services/profileService';
import cvUrl from '../../../CV Dian Fatonah.pdf';

export default function Hero() {
  const profile = getProfile();

  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-border bg-gradient-to-br from-white via-soft-surface to-background">
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-primary-soft/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 -z-10 h-80 w-80 rounded-full bg-white/90 blur-3xl" />
      <div className="container mx-auto grid items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr,0.85fr] md:py-24 lg:gap-16 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-bold leading-relaxed tracking-wide text-primary shadow-sm sm:text-sm">
            {profile.hero.eyebrow}
          </p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Saya <span className="text-primary">{profile.name}.</span>
          </h1>
          <h2 className="mb-5 max-w-xl text-xl font-semibold leading-snug text-text-primary md:text-2xl">
            {profile.hero.heading}
          </h2>
          <p className="mb-7 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
            {profile.hero.summary}
          </p>
          <div className="mb-8 flex flex-wrap gap-2.5 text-xs font-medium text-text-secondary sm:text-sm">
            {profile.hero.focus.map((item) => (
              <span key={item} className="rounded-full border border-border/80 bg-white/80 px-3.5 py-2 shadow-sm">{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/portfolio" className="rounded-xl border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/15 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark">
              Lihat Portfolio
            </Link>
            <a
              href={cvUrl}
              download="CV Dian Fatonah.pdf"
              className="rounded-xl border border-border bg-white/90 px-6 py-3 text-sm font-semibold text-text-primary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-3 -rotate-3 rounded-[34px] bg-primary-soft/70" />
          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-3 shadow-2xl shadow-[#6E3549]/10 sm:p-5">
            <img
              src={profile.profileImage}
              alt={`Foto profil ${profile.name}`}
              className="aspect-[4/4.3] w-full rounded-[20px] object-cover object-center"
            />
            <p className="px-2 pb-1 pt-4 text-sm leading-relaxed text-text-secondary">
              {profile.hero.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
