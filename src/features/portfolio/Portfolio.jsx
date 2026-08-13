import { useMemo, useRef, useState } from 'react';
import SectionHeading from '../../shared/components/SectionHeading';
import PortfolioCard from '../../shared/components/PortfolioCard';
import { projects } from '../../shared/data/portfolioData';

const categories = ['Semua', ...new Set(projects.map((project) => project.category))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const containerRef = useRef(null);

  const scroll = (direction) => {
    containerRef.current?.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  const filtered = useMemo(
    () =>
      activeCategory === 'Semua'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section
      id="portofolio"
      className="pt-10 pb-16"
    >
      <SectionHeading title="PORTOFOLIO" />

      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-lavender-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <>
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
              key={activeCategory}
              ref={containerRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth fade-in"
            >
              {filtered.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-secondary py-12 fade-in">
            Belum ada proyek di kategori ini
          </p>
        )}
      </div>
    </section>
  );
}
