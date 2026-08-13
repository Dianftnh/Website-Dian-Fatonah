import { useRef } from 'react';
import SectionHeading from '../../shared/components/SectionHeading';
import AchievementCard from '../../shared/components/AchievementCard';
import { achievements } from '../../shared/data/achievements';

export default function Achievements() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    containerRef.current?.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <section id="prestasi" className="pt-10 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="PRESTASI" textColor="text-navy" />

        <div className="w-full flex justify-center gap-4 mb-4">
          <button
            type="button"
            aria-label="Scroll kiri"
            onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full bg-navy text-white hover:bg-accent transition duration-300"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll kanan"
            onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full bg-navy text-white hover:bg-accent transition duration-300"
          >
            →
          </button>
        </div>

        <div
          ref={containerRef}
          className="w-full overflow-x-auto overflow-y-hidden scroll-smooth"
        >
          <div className="flex gap-3 snap-x snap-mandatory scroll-smooth">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
