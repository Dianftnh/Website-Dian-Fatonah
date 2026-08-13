import arRupiahImg from '../assets/img/portfolio/ar-rupiah-169.png';
import contentImg from '../assets/img/portfolio/content-169.jpg';
import ui1Img from '../assets/img/portfolio/ui1-169.jpg';
import ui2Img from '../assets/img/portfolio/ui2-169.jpg';
import beauscanImg from '../assets/img/portfolio/beauscan-169.jpg';
import nlpImg from '../assets/img/portfolio/nlp-169.svg';
import wccImg from '../assets/img/portfolio/wcc-169.svg';
import dlImg from '../assets/img/portfolio/dl-169.svg';
import sentiplayImg from '../assets/img/portfolio/sentiplay-169.svg';
import carSalesImg from '../assets/img/portfolio/car-sales-169.svg';
import dropoutImg from '../assets/img/portfolio/dropout-169.svg';
import tpkImg from '../assets/img/portfolio/tpk-169.svg';
import bikeImg from '../assets/img/portfolio/bike-169.svg';

export const projects = [
  {
    id: 'prediksi-anak-putus-sekolah',
    title: 'Proyek',
    subtitle: 'Data Analyst',
    name: 'Prediksi Anak Putus Sekolah di Bandar Lampung',
    category: 'Data Analyst',
    description:
      'Dashboard interaktif untuk menganalisis data anak putus sekolah di Bandar Lampung serta menampilkan hasil prediksi berdasarkan data yang tersedia.',
    technologies: ['Python', 'Data Analysis', 'Machine Learning'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://dashboard-angka-putus-sekolah-di-bandar-lampung.streamlit.app/',
      },
    ],
    images: [{ src: dropoutImg, alt: 'Prediksi Anak Putus Sekolah di Bandar Lampung' }],
  },
  {
    id: 'analisis-tpk-hotel',
    title: 'Proyek',
    subtitle: 'Data Analyst',
    name: 'Analisis & Prediksi TPK Hotel',
    category: 'Data Analyst',
    description:
      'Dashboard interaktif untuk menganalisis dan memprediksi Tingkat Penghunian Kamar (TPK) hotel di Provinsi Lampung berdasarkan data periode 2022–2025.',
    technologies: ['Looker Studio', 'Data Analysis'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://lookerstudio.google.com/embed/reporting/43a1513e-6f6d-4136-8cee-4c59b38b046d/page/FcWRF',
      },
    ],
    images: [{ src: tpkImg, alt: 'Analisis & Prediksi TPK Hotel' }],
  },
  {
    id: 'bike-sharing-analysis',
    title: 'Proyek',
    subtitle: 'Data Analyst',
    name: 'Bike Sharing Analysis Dashboard',
    category: 'Data Analyst',
    description:
      'Dashboard interaktif untuk menganalisis pola penggunaan layanan bike sharing berdasarkan faktor waktu, kondisi cuaca, dan karakteristik pengguna.',
    technologies: ['Streamlit', 'Data Analysis'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://bike-sharing-analysis-project-dianftnh.streamlit.app/',
      },
    ],
    images: [{ src: bikeImg, alt: 'Bike Sharing Analysis Dashboard' }],
  },
  {
    id: 'ar-developer',
    title: 'Proyek',
    subtitle: 'AR Developer',
    name: 'AR CPB Rupiah',
    category: 'AR Developer',
    description:
      'Aplikasi AR CPB Rupiah adalah aplikasi mobile berbasis Augmented Reality yang bertujuan untuk belajar mengenai ruang rupiah, dan belajar untuk mengimplementasikan program Cinta, Bangga, dan Paham Rupiah',
    technologies: ['Augmented Reality'],
    links: [
      {
        label: 'Unduh Aplikasi',
        href: 'https://drive.google.com/drive/folders/1-tf8uRdSQRBXkGvHzEUyU9IG2NH_2eSm',
      },
    ],
    images: [{ src: arRupiahImg, alt: 'Aplikasi AR Rupiah' }],
  },
  {
    id: 'content-creator',
    title: 'Proyek',
    subtitle: 'Content Creator',
    name: 'Konten Kreatif Media Sosial Ruber Academy',
    category: 'Content Creator',
    description:
      'Membuat konten kreatif untuk media sosial dengan konsep plan yang terarah.',
    technologies: ['Content Creation', 'Copywriting', 'Instagram'],
    items: [
      {
        label: 'Merencanakan konten yang akan dibuat untuk media sosial Ruber Academy',
        href: null,
      },
      {
        label:
          'Menjadi Content Creator di Instagram @janganngajardong berkolaborasi dengan Ruber Academy dengan views mencapai 8000+',
        href: null,
      },
      {
        label: 'Berkontribusi dalam copywriting untuk promosi produk dan event pelatihan',
        href: null,
      },
    ],
    links: [
      {
        label: 'Kunjungi Instagram',
        href: 'https://www.instagram.com/janganngajardong',
      },
    ],
    images: [{ src: contentImg, alt: 'Content 1' }],
  },
  {
    id: 'ui-designer',
    title: 'Proyek',
    subtitle: 'UI Designer',
    name: 'Logo, Brand Identity & UI',
    category: 'UI Designer',
    description:
      'Membuat desain logo, brand identity, dan user interface untuk berbagai kebutuhan organisasi dan bisnis. Setiap karya dirancang tidak hanya menarik secara visual, tetapi juga memperhatikan pengalaman pengguna agar lebih interaktif, konsisten, dan mudah digunakan di berbagai perangkat.',
    technologies: ['UI Design', 'Brand Identity', 'Logo Design'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://drive.google.com/drive/folders/1zWLfvcEcpITvfcbxdcEK8Eqzu3gtQA6P',
      },
    ],
    images: [
      { src: ui1Img, alt: 'Desain Logo 1' },
      { src: ui2Img, alt: 'Desain Logo 2' },
    ],
  },
  {
    id: 'sib-batch-7',
    title: 'Proyek',
    subtitle: 'Machine Learning',
    name: 'SIB Batch 7 2024',
    category: 'Machine Learning',
    description:
      'Aplikasi BeauScan dikembangkan dalam program Bangkit Academy sebagai Machine Learning Cohort. Proyek ini menggunakan OCR untuk membaca kandungan skincare, lalu NLP untuk menganalisis dan menilai kecocokan terhadap jenis kulit: Normal, Oily, Dry, Combination, Sensitive, dan Mature.',
    technologies: ['Machine Learning', 'OCR', 'NLP'],
    items: [
      { label: 'Machine Learning, OCR, dan NLP', href: null },
      {
        label: 'Implementasi ke aplikasi mobile dengan UI interaktif',
        href: null,
      },
    ],
    links: [
      {
        label: 'Lihat Dokumentasi',
        href: 'https://github.com/Jenaferonika/skincare_apps/blob/bb832e90e96356615e073add9b97d020c699cc40/README.md',
      },
      {
        label: 'Lihat Demo Aplikasi',
        href: 'https://youtu.be/lmAlZ6TqJXw?si=4mtOd3_afyAJCAjA',
      },
    ],
    images: [{ src: beauscanImg, alt: 'BeauScan App' }],
  },
  {
    id: 'similarity-judul-skripsi',
    title: 'Proyek',
    subtitle: 'NLP',
    name: 'Similarity Judul Skripsi',
    category: 'NLP',
    description:
      'Sistem berbasis NLP untuk mengukur kemiripan judul skripsi secara otomatis menggunakan Cosine Similarity. Penelitian membandingkan TF-IDF, Word2Vec, dan S-BERT, dengan TF-IDF terpilih sebagai model terbaik dan diimplementasikan dalam aplikasi Streamlit.',
    technologies: ['NLP', 'TF-IDF', 'Word2Vec', 'S-BERT', 'Cosine Similarity', 'Streamlit'],
    links: [
      {
        label: 'Lihat Dokumentasi',
        href: 'https://github.com/Dianftnh/similarity_judul_skripsi.git',
      },
      {
        label: 'Lihat Website',
        href: 'https://similarityjudulskripsi.streamlit.app/',
      },
    ],
    images: [{ src: nlpImg, alt: 'Similarity Judul Skripsi' }],
  },
  {
    id: 'wcc',
    title: 'Proyek',
    subtitle: 'WCC',
    name: 'Wedding Content Creator',
    category: 'WCC',
    description:
      'Sebagai Wedding Content Creator (WCC), bertugas mengabadikan momen pernikahan secara real-time, mulai dari momen candid, interaksi pengantin dan tamu, hingga detail acara. Konten kemudian diedit menggunakan CapCut untuk menghasilkan video yang siap dibagikan ke media sosial.',
    technologies: ['Content Creation', 'Video Editing (CapCut)', 'Social Media'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://drive.google.com/drive/folders/1rHKKcctkHkyK1JVEP0AHfrPAC2Uh3vx6?usp=sharing',
      },
    ],
    images: [{ src: wccImg, alt: 'Wedding Content Creator' }],
  },
  {
    id: 'klasifikasi-gambar',
    title: 'Proyek',
    subtitle: 'Deep Learning',
    name: 'Klasifikasi Gambar',
    category: 'Deep Learning',
    description:
      'Proyek klasifikasi gambar menggunakan Convolutional Neural Network (CNN) untuk mengenali enam kategori lingkungan, seperti buildings, forest, mountain, sea, dan street. Model kemudian dikonversi ke TensorFlow Lite dan TensorFlow.js.',
    technologies: ['Deep Learning', 'CNN', 'TensorFlow Lite', 'TensorFlow.js'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://github.com/Dianftnh/Dicoding-Projek-Klasifikasi-Gambar.git',
      },
    ],
    images: [{ src: dlImg, alt: 'Klasifikasi Gambar' }],
  },
  {
    id: 'sentiplay',
    title: 'Proyek',
    subtitle: 'Deep Learning',
    name: 'SentiPlay - Analisis Sentimen',
    category: 'Deep Learning',
    description:
      'Proyek analisis sentimen ulasan aplikasi Gojek dari Google Play Store dengan membandingkan SVM + TF-IDF, Bidirectional LSTM + Word Embedding, dan Random Forest + SBERT untuk klasifikasi sentimen.',
    technologies: ['SVM + TF-IDF', 'Bidirectional LSTM', 'Word Embedding', 'Random Forest + SBERT'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://github.com/Dianftnh/SentiPlay.git',
      },
    ],
    images: [{ src: sentiplayImg, alt: 'SentiPlay' }],
  },
  {
    id: 'analisis-data-penjualan-mobil',
    title: 'Proyek',
    subtitle: 'Data Analyst',
    name: 'Analisis Data Penjualan Mobil',
    category: 'Data Analyst',
    description:
      'Proyek analisis data penjualan mobil menggunakan dataset periode 2021–2025 untuk mengeksplorasi tren penjualan beberapa merek kendaraan. Data diolah dan divisualisasikan menggunakan Python untuk menghasilkan insight dari pola penjualan.',
    technologies: ['Python', 'Data Analysis', 'Data Visualization'],
    links: [
      {
        label: 'Lihat Selengkapnya',
        href: 'https://github.com/Dianftnh/TheLuna_PeDaS2025.git',
      },
    ],
    images: [{ src: carSalesImg, alt: 'Analisis Data Penjualan Mobil' }],
  },
];
