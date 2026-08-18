import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import { CreativeCard } from '../components/CreativeCard';
import { getCreativeWorks } from '../services/creativeService';

export default function CreativePage() {
  const creative = getCreativeWorks();

  usePageMeta({
    title: 'Kreatif | Portofolio Dian Fatonah',
    description:
      'Kumpulan karya kreatif Dian Fatonah mencakup desain visual, konten media sosial, dan proses kreatif berbasis tujuan komunikasi.',
  });

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kreatif</p>
        <h1 className="mt-3 text-4xl font-bold text-text-primary">Karya visual dan konten kreatif</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {creative.map((item) => (
          <CreativeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
