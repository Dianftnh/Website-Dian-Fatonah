Saya ingin melakukan revisi pada website portfolio saya.

TUJUAN UTAMA:
Ubah fungsi tombol "Unduh Portofolio" pada Hero Section menjadi generator PowerPoint (.pptx) otomatis.

Konsep yang harus digunakan:

WEBSITE PORTFOLIO = SINGLE SOURCE OF TRUTH

Artinya, saya hanya ingin mengelola data portfolio satu kali di website.

Ketika data portfolio di website diperbarui, PowerPoint yang dihasilkan juga harus otomatis menggunakan data terbaru tersebut.

JANGAN membuat file PPT yang statis/hardcoded terpisah dari data website.

==================================================
ATURAN PALING PENTING
==================================================

1. JANGAN mengubah desain website yang sudah ada.
2. JANGAN mengubah layout Hero Section.
3. JANGAN mengubah Navbar.
4. JANGAN mengubah section About.
5. JANGAN mengubah section Portfolio.
6. JANGAN mengubah filter portfolio.
7. JANGAN mengubah card portfolio yang sudah ada.
8. JANGAN mengubah warna, typography, spacing, animation, responsive behavior, atau visual design existing.
9. Tombol "Unduh Portofolio" tetap berada di posisi dan memiliki style yang sama.
10. Yang diubah hanya FUNCTION tombol tersebut.
11. Jangan melakukan redesign.
12. Jangan melakukan refactor besar yang tidak diperlukan.

Gunakan screenshot website saat ini sebagai referensi visual dan pertahankan tampilannya.

==================================================
FITUR YANG DIINGINKAN
==================================================

Ketika user klik:

"Unduh Portofolio"

maka website harus:

1. Mengambil data portfolio terbaru dari sumber data yang sama dengan website.
2. Membuat file PowerPoint (.pptx) secara otomatis.
3. Menampilkan loading state selama proses generate.
4. Setelah selesai, browser otomatis mengunduh file.
5. Nama file:

Dian_Fatonah_Portfolio.pptx

Jika terjadi error:
- tampilkan pesan error yang sederhana dan informatif
- jangan membuat website crash
- tombol dapat digunakan kembali.

==================================================
TEKNOLOGI
==================================================

Gunakan:

PptxGenJS

untuk membuat file PowerPoint.

Install dependency jika belum tersedia:

npm install pptxgenjs

Jangan menggunakan library lain untuk generate PPT jika tidak diperlukan.

Pastikan implementasi kompatibel dengan environment/project yang sekarang.

SEBELUM CODING:

1. Inspect package.json.
2. Identifikasi apakah project menggunakan React, Vite, Next.js, atau framework lain.
3. Identifikasi struktur folder existing.
4. Identifikasi lokasi data portfolio existing.
5. Identifikasi bagaimana Portfolio Card saat ini mendapatkan data.
6. Gunakan struktur existing sebisa mungkin.

Jangan mengasumsikan struktur project sebelum memeriksanya.

==================================================
ARSITEKTUR DATA
==================================================

Buat atau rapikan satu sumber data portfolio.

Jika project saat ini sudah memiliki array/object data portfolio, gunakan dan kembangkan sumber data tersebut.

JANGAN membuat data portfolio kedua hanya untuk PPT.

Jika diperlukan, buat:

src/data/portfolioData.js

atau sesuaikan dengan struktur project existing.

Data minimal harus memiliki struktur seperti:

portfolioData = {
  profile: {
    name,
    title,
    university,
    description,
    motto
  },

  skills: [...],

  projects: [
    {
      title,
      category,
      description,
      image,
      technologies,
      github,
      demo,
      document
    }
  ],

  achievements: [...],

  contact: {
    email,
    github,
    linkedin,
    website
  }
}

Gunakan struktur yang paling sesuai dengan data existing.

JANGAN menghapus data portfolio yang sudah ada.

==================================================
PORTFOLIO YANG HARUS MASUK KE PPT
==================================================

Generator harus mengambil SELURUH proyek yang saat ini tersedia di website.

Termasuk kategori:

- Data Analyst
- AR Developer
- Content Creator
- UI Designer
- SIB Batch 7 / Machine Learning
- NLP
- WCC
- Deep Learning

Jangan hardcode hanya beberapa proyek.

Jika proyek baru ditambahkan ke portfolioData di masa depan, proyek tersebut otomatis ikut masuk ke PPT tanpa perlu mengubah fungsi generator.

==================================================
STRUKTUR POWERPOINT
==================================================

Buat PPT dengan desain profesional, modern, minimalis, dan konsisten dengan visual website.

Gunakan tema warna yang terinspirasi dari website existing:

- dark blue/slate
- lavender/light background
- teal/green accent
- white

Namun JANGAN mengubah website.

PPT hanya mengambil inspirasi visual dari website.

==================================================
SLIDE 1 — COVER
==================================================

Isi:

Dian Fatonah

Teknik Informatika | Data Analyst & AI Enthusiast

Universitas Lampung

Motto:

"Learning by experience & learning by doing."

Buat cover minimalis dan profesional.

Jika profile image tersedia di website, gunakan image tersebut.

Jika tidak tersedia atau sulit diakses, jangan memaksakan image.

==================================================
SLIDE 2 — ABOUT ME
==================================================

Ambil informasi dari data profile website.

Tampilkan:

- Nama
- Pendidikan
- Fokus bidang
- Deskripsi singkat
- Kompetensi utama

Jangan membuat informasi baru yang tidak terdapat dalam website/data.

==================================================
SLIDE 3 — SKILLS
==================================================

Ambil skills dari sumber data website.

Kelompokkan jika data existing memungkinkan.

Contoh:

Data & AI
- Python
- Pandas
- Scikit-learn
- TensorFlow
- NLP

Development
- HTML
- CSS
- JavaScript
- Streamlit
- Flask

Gunakan data aktual yang tersedia.

Jangan mengarang skill.

==================================================
PORTFOLIO SLIDES
==================================================

Setelah About dan Skills, buat slide portfolio.

Gunakan SEMUA portfolio project dari portfolioData.

Kelompokkan berdasarkan category.

Contoh:

DATA ANALYST

- Analisis Data Penjualan Mobil
- Prediksi Anak Putus Sekolah di Bandar Lampung
- Analisis & Prediksi TPK Hotel
- Bike Sharing Analysis Dashboard
- proyek Data Analyst existing lainnya

NLP

- Similarity Judul Skripsi

DEEP LEARNING

- Klasifikasi Gambar
- SentiPlay - Analisis Sentimen

WCC

- Proyek Wedding Content Creator

dan seterusnya.

Jangan menghapus kategori existing.

==================================================
LAYOUT PROJECT SLIDE
==================================================

Untuk setiap project, tampilkan:

[Category Badge]

Project Title

Description

Technologies / Tools

Links jika tersedia.

Contoh:

NLP

Similarity Judul Skripsi

Sistem berbasis NLP untuk mengukur kemiripan
judul skripsi secara otomatis menggunakan
Cosine Similarity...

Tech:
TF-IDF · Word2Vec · S-BERT · Streamlit

Links:
GitHub
Website

==================================================
JUMLAH PROJECT PER SLIDE
==================================================

Jangan memaksakan terlalu banyak project dalam satu slide.

Jika project banyak:

- maksimal sekitar 2–3 project per slide
atau
- 1 project per slide jika deskripsi/image membutuhkan ruang besar.

Prioritaskan readability.

Jangan sampai teks terlalu kecil.

Jika jumlah project bertambah di masa depan, jumlah slide harus otomatis bertambah.

==================================================
PROJECT IMAGE
==================================================

Jika portfolioData memiliki image/screenshot project:

gunakan image tersebut.

Jika tidak tersedia:

gunakan placeholder sederhana dengan gradient/shape yang konsisten.

Jangan menggunakan gambar random.

Jika image berasal dari URL dan browser memiliki masalah CORS:

jangan membuat generator gagal total.

Gunakan fallback tanpa image.

==================================================
LINK
==================================================

Jika project memiliki:

github
demo
document
website

maka tampilkan link tersebut di PPT sebagai hyperlink yang dapat diklik.

Jangan menampilkan URL yang tidak tersedia.

Jangan mengarang URL.

==================================================
ACHIEVEMENTS
==================================================

Jika website memiliki section Prestasi/Achievements:

buat satu atau beberapa slide:

"Prestasi & Pengalaman"

Ambil data langsung dari sumber data website.

Jangan mengarang achievement.

==================================================
CONTACT
==================================================

Slide terakhir:

"Let's Connect"

Ambil contact dari website.

Contoh:

Dian Fatonah

Email
GitHub
LinkedIn
Website

Gunakan hyperlink jika tersedia.

==================================================
PPT DESIGN
==================================================

Gunakan ukuran:

LAYOUT_WIDE

16:9.

Gunakan font yang aman untuk PowerPoint.

Prioritaskan:

- Aptos
- Arial
- Calibri

Gunakan typography hierarchy:

Title:
30–36 pt

Subtitle:
18–24 pt

Body:
14–18 pt

Jangan membuat body text terlalu kecil.

Gunakan whitespace yang cukup.

Gunakan rounded rectangle, garis, dan shape sederhana untuk memperkuat visual.

Jangan membuat PPT terlalu ramai.

==================================================
WEBSITE BUTTON
==================================================

Tombol existing:

"Unduh Portofolio"

JANGAN ubah visualnya.

Tambahkan event handler:

onClick={handleDownloadPortfolio}

atau mekanisme yang sesuai dengan framework existing.

Ketika diklik:

STATE:
isGeneratingPortfolio = true

Tampilkan loading sederhana.

Contoh:

"Membuat Portfolio..."

Setelah selesai:

download Dian_Fatonah_Portfolio.pptx

Kemudian:

isGeneratingPortfolio = false

Jika error:

isGeneratingPortfolio = false

Tampilkan:

"Gagal membuat portfolio. Silakan coba lagi."

==================================================
ANTI DOUBLE CLICK
==================================================

Saat proses generate berjalan:

disable tombol.

Jangan sampai user dapat menghasilkan beberapa file secara bersamaan karena double click.

Contoh state:

isGenerating

Jika true:

disabled = true

==================================================
FILE ORGANIZATION
==================================================

Jika sesuai dengan struktur project, buat:

src/
├── data/
│   └── portfolioData.js
│
├── utils/
│   └── generatePortfolioPPT.js
│
└── components/
    └── ...

Tetapi jika project memiliki struktur berbeda, ikuti struktur existing.

Jangan memaksakan struktur baru jika tidak diperlukan.

==================================================
IMPORTANT: SINGLE SOURCE OF TRUTH
==================================================

Ini adalah bagian PALING PENTING.

Portfolio Card website dan PowerPoint HARUS membaca data dari sumber yang sama.

Jangan:

Portfolio website:
projects.js

PPT:
pptProjects.js

SALAH.

Yang diinginkan:

portfolioData
      │
      ├── Portfolio UI
      │
      └── PPT Generator

BENAR.

Dengan demikian jika saya menambahkan:

{
  title: "Proyek Baru",
  category: "NLP",
  description: "...",
  ...
}

ke portfolioData,

maka:

1. Card baru muncul di website.
2. Card baru masuk filter category.
3. Card baru muncul di "Semua".
4. Card baru otomatis masuk PPT ketika tombol "Unduh Portofolio" diklik.

Tidak perlu mengubah generatePortfolioPPT.js.

==================================================
JANGAN BREAK EXISTING FEATURE
==================================================

Setelah implementasi:

Pastikan:

- Navbar tetap berjalan.
- Hero tetap sama.
- Lihat CV tetap berjalan.
- Portfolio filter tetap berjalan.
- Semua tetap berjalan.
- Data Analyst tetap berjalan.
- NLP tetap berjalan.
- WCC tetap berjalan.
- Deep Learning tetap berjalan.
- Card lama tetap ada.
- Horizontal scroll tetap berjalan.
- Responsive mobile tetap berjalan.
- Semua link existing tetap berjalan.

==================================================
RESPONSIVE
==================================================

Tidak perlu mengubah responsive design website.

Generator PPT hanya berjalan ketika tombol ditekan.

Pastikan tidak menyebabkan layout shift pada website.

==================================================
ERROR HANDLING
==================================================

Handle minimal:

- PptxGenJS gagal import
- project data kosong
- image gagal dimuat
- browser download error
- user melakukan double click
- project memiliki field kosong

Satu project yang memiliki image/link bermasalah tidak boleh menyebabkan seluruh PPT gagal dibuat jika masih memungkinkan untuk menggunakan fallback.

==================================================
QUALITY CHECK
==================================================

Setelah coding:

1. Jalankan npm install jika diperlukan.
2. Jalankan npm run build.
3. Pastikan tidak ada error compile.
4. Pastikan tidak ada error lint jika project menggunakan lint.
5. Jalankan website.
6. Klik "Unduh Portofolio".
7. Pastikan file .pptx terdownload.
8. Buka file PPT.
9. Pastikan slide dapat dibuka tanpa corruption.
10. Pastikan seluruh project portfolio masuk.
11. Pastikan hyperlink dapat diklik.
12. Pastikan teks tidak overflow.
13. Pastikan image memiliki fallback.
14. Pastikan tombol kembali normal setelah generate selesai.

==================================================
OUTPUT YANG SAYA INGINKAN
==================================================

Implementasikan langsung ke project existing.

Jangan hanya memberikan contoh kode.

Pertama-tama inspect project dan pahami struktur existing.

Kemudian implementasikan fitur generator PPT.

Setelah selesai, berikan ringkasan:

1. File apa saja yang dibuat/diubah.
2. Dependency yang ditambahkan.
3. Bagaimana single source of truth diterapkan.
4. Bagaimana tombol "Unduh Portofolio" bekerja.
5. Hasil build/test.
6. Jika ada bagian yang tidak dapat diambil otomatis, jelaskan.

SEKALI LAGI:

Jangan redesign website.

Jangan mengubah tampilan existing.

Jangan menghapus portfolio.

Jangan membuat PPT statis.

Fokus hanya membuat tombol:

"Unduh Portofolio"

menjadi generator PowerPoint otomatis yang selalu mengambil data portfolio terbaru dari website.