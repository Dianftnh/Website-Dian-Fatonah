import profileImg from '../assets/img/profile-nobg.png';
import { projects } from './projects';
import { achievements } from './achievements';
import { socials, contactInfo } from './socials';

export const profile = {
  name: 'Dian Fatonah',
  title: 'Teknik Informatika | Data Analyst & AI Enthusiast',
  university: 'Universitas Lampung',
  description:
    'Saya adalah seorang mahasiswa dari Program Studi Teknik Informatika di Universitas Lampung dengan minat di bidang analisis data dan kecerdasan buatan. Selain itu, saya juga mampu melakukan pengeditan video, penulisan konten, dan sebagai pembuat konten. Saya siap berkontribusi dan mengembangkan keterampilan saya dalam tim dan proyek yang melibatkan analisis data untuk mengambil keputusan yang lebih baik.',
  motto: 'Learning by experience & learning by doing',
  image: profileImg,
};

export const skills = [
  {
    group: 'Data & AI',
    items: [
      'Python',
      'Data Analysis',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'OCR',
      'TensorFlow',
    ],
  },
  {
    group: 'Development & Tools',
    items: ['Streamlit', 'TensorFlow.js', 'TensorFlow Lite', 'Looker Studio', 'AR Development'],
  },
  {
    group: 'Design & Content',
    items: [
      'UI/UX Design',
      'Brand Identity',
      'Content Creation',
      'Copywriting',
      'Video Editing (CapCut)',
    ],
  },
];

export const contact = {
  email: contactInfo.email,
  address: contactInfo.address,
  socials: socials.map(({ name, href }) => ({ name, href })),
};

export const portfolioData = {
  profile,
  skills,
  projects,
  achievements,
  contact,
};

export { projects, achievements };