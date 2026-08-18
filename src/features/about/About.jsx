import SectionHeading from '../../shared/components/SectionHeading';
import SocialIcons from '../../shared/components/SocialIcons';
import { getAboutProfile } from './services/aboutService';

export default function About() {
  const profile = getAboutProfile();

  return (
    <section id="about" className="pb-16 pt-6">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Tentang Saya"
          subtitle={profile.about.summary}
        />

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="mb-4 pt-6 text-2xl font-semibold text-text-primary lg:text-3xl lg:pt-10">
            {profile.about.headline}
          </h3>
          <p className="mb-6 text-base font-medium text-text-secondary lg:text-lg">
            {profile.about.detail}
          </p>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
