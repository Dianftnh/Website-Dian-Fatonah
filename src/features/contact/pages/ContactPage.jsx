import { usePageMeta } from '../../../shared/hooks/usePageMeta';
import Contact from '../Contact';

export default function ContactPage() {
  usePageMeta({
    title: 'Kontak | Portofolio Dian Fatonah',
    description:
      'Hubungi Dian Fatonah untuk kolaborasi proyek Artificial Intelligence, software development, dan kebutuhan kreatif.',
  });

  return <Contact />;
}
