import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import Contact from '../Contact';

export default function ContactPage() {
  usePageMeta({
    title: 'Kontak | Portofolio Dian Fatonah',
    description:
      'Hubungi Dian Fatonah untuk kolaborasi data analytics, analisis data, dashboard, visualisasi, dan machine learning.',
  });

  return <Contact />;
}
