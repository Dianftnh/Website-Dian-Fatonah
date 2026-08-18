# Design Specification — Personal Portfolio

## 1. Design Objective

Website ini merupakan personal portfolio untuk seorang perempuan dengan latar belakang Informatika yang memiliki fokus utama pada **Artificial Intelligence dan software development**, serta memiliki pengalaman di bidang kreatif seperti **desain grafis dan video editing**.

Desain harus menyatukan dua identitas tersebut:

- **Teknologi dan AI** sebagai identitas profesional utama.
- **Kreativitas visual** sebagai kemampuan pendukung yang membedakan portfolio.

Hasil akhir harus terlihat seperti portfolio personal yang dirancang secara sengaja, bukan template SaaS, bukan portfolio developer generik, dan bukan website yang penuh efek visual khas AI-generated design.

---

## 2. Visual Direction

Arah visual:

> **Soft feminine + professional + technical + creative**

Karakter visual yang diinginkan:

- feminin tetapi tidak kekanak-kanakan
- lembut tetapi tetap profesional
- modern tetapi tidak mengikuti tren secara berlebihan
- clean
- editorial
- personal
- elegan
- approachable
- memiliki identitas visual yang kuat

Palet warna utama menggunakan **pink/pastel pink** sebagai aksen.

Pink digunakan untuk memberikan karakter feminin dan personal, tetapi jangan sampai seluruh halaman menjadi pink.

Gunakan dasar:

- putih
- off-white
- very light pink
- soft gray
- dark navy / charcoal untuk teks

Pink digunakan sebagai accent color untuk:

- CTA
- active navigation
- category badge
- link
- icon
- selected state
- highlight tertentu

---

## 3. Strict Visual Rules

### 3.1 No Gradient

**Jangan menggunakan gradient.**

Hindari:

- gradient background
- gradient text
- gradient button
- gradient border
- mesh gradient
- aurora gradient
- glowing gradient

Gunakan warna solid.

Jika membutuhkan kedalaman visual, gunakan:

- whitespace
- border
- subtle shadow
- perubahan tone warna
- image
- typography
- layout

---

### 3.2 No Emoji

Jangan menggunakan emoji atau emoticon pada UI.

Contoh yang tidak boleh digunakan:

- 🚀
- ✨
- 💻
- 🎨
- ❤️
- 👋

Gunakan icon dari library seperti React Icons apabila diperlukan.

Icon harus memiliki fungsi yang jelas, bukan sekadar dekorasi.

---

### 3.3 Avoid AI-Slop

Hindari pola desain yang terlalu sering digunakan oleh AI-generated websites:

- excessive glassmorphism
- excessive blur
- glowing elements
- neon effects
- floating blobs
- random geometric decorations
- excessive rounded cards
- excessive pill UI
- huge gradients
- particle backgrounds
- animated backgrounds
- excessive parallax
- excessive scroll effects
- random 3D objects
- robot illustrations
- generic AI brain illustrations
- excessive shadows
- excessive animations

Website harus tetap menarik walaupun seluruh efek dekoratif tersebut dihilangkan.

---

## 4. Color System

Gunakan sistem warna yang konsisten.

### Primary

Soft / pastel pink.

Contoh arah warna:

```text
Primary Pink: #E56B9A
Light Pink:   #FCE7EF
Very Light:   #FFF7FA
```

Nilai warna dapat disesuaikan saat implementasi berdasarkan existing design system.

### Neutral

```text
Background:   #FFFFFF
Soft Surface:  #FFF9FB
Border:        #E9E4E6
Text Primary:  #17171A
Text Secondary:#68656A
```

Jangan menggunakan terlalu banyak warna.

Targetkan sekitar:

- 1 warna utama
- 2–3 variasi pink
- 3–4 warna neutral

---

## 5. Typography

Typography harus menjadi salah satu elemen visual utama.

Gunakan font yang:

- modern
- clean
- mudah dibaca
- memiliki karakter feminin secara halus
- tetap cocok untuk portfolio teknologi

Gunakan hierarchy yang jelas:

### Heading

Bold / semibold, kuat dan mudah dibaca.

### Body

Regular, line-height nyaman.

### Metadata

Ukuran lebih kecil dengan warna secondary.

Jangan menggunakan terlalu banyak jenis font.

Idealnya gunakan maksimal:

- 1 font family utama
- 1 font family tambahan jika benar-benar diperlukan

Jangan menggunakan script/cursive font sebagai font utama.

Jika ingin sentuhan personal/feminin, gunakan aksen typography hanya secara sangat terbatas.

---

## 6. Layout Philosophy

Gunakan layout berbasis:

- whitespace
- grid
- alignment
- visual hierarchy
- editorial composition

Jangan membuat semua section berbentuk card.

Gunakan kombinasi:

- open section
- bordered content
- image block
- cards
- text blocks
- grids

Website harus terasa seperti portfolio editorial modern.

---

# 7. Global Navigation

Navigation harus minimal dan bersih.

Struktur:

```text
Logo / Nama
Beranda
Tentang
Portfolio
Kreatif
Sertifikat
Kontak
```

Desktop:

- horizontal navigation
- fixed/sticky jika sesuai
- active page indicator menggunakan pink
- tidak menggunakan background gradient

Mobile:

- hamburger menu
- menu full-width atau drawer sederhana
- tetap mudah digunakan dengan satu tangan

Navigation tidak boleh terlalu tinggi.

---

# 8. Homepage

Homepage harus menjadi ringkasan dari seluruh identitas portfolio.

Struktur:

```text
Hero
↓
Keahlian
↓
Tentang Singkat
↓
Portfolio Unggulan
↓
Karya Kreatif
↓
Sertifikat Unggulan
↓
CTA / Contact
↓
Footer
```

Landing page tidak boleh terlalu panjang hanya karena semua data ditampilkan.

Gunakan progressive disclosure.

---

# 9. Hero Section

Hero adalah bagian paling penting.

Tujuan:

Dalam beberapa detik, pengguna harus mengetahui:

1. siapa pemilik website
2. bahwa ia berasal dari bidang Informatika
3. bahwa fokus utamanya adalah AI
4. bahwa ia juga memiliki kemampuan kreatif

Contoh struktur:

```text
Halo, saya

[Nama]

Informatika | AI Enthusiast
Developer & Creative Designer

Deskripsi singkat mengenai fokus dan pengalaman.

[ Lihat Portfolio ]
[ Hubungi Saya ]
```

Tambahkan visual personal berupa foto atau artwork yang relevan.

Untuk persona perempuan, visual dapat menggunakan:

- foto profesional
- workspace
- laptop
- visual coding
- elemen kreatif
- dekorasi feminin yang sangat halus

Jangan menggunakan visual perempuan generik yang tidak merepresentasikan pemilik portfolio.

Jika foto asli tersedia di data, prioritaskan foto tersebut.

---

# 10. Feminine Visual Language

Nuansa feminin harus muncul secara halus.

Gunakan:

- pastel pink
- soft white
- rounded corners secukupnya
- clean photography
- subtle floral/organic accent jika sesuai
- soft editorial composition
- delicate border
- gentle shadow

Jangan menggunakan:

- pink pada semua elemen
- motif bunga berlebihan
- karakter kawaii
- heart decoration berlebihan
- cute stickers
- childish illustrations
- terlalu banyak script font

Target visual:

> **feminine professional**

bukan:

> cute personal blog.

---

# 11. Expertise Section

Gunakan section yang menunjukkan dua sisi kemampuan.

Contoh:

### Artificial Intelligence

Machine Learning, Deep Learning, Computer Vision, NLP, atau bidang lain berdasarkan data nyata.

### Software Development

Web, mobile, backend, API, atau teknologi lain yang benar-benar dikuasai.

### Graphic Design

Desain grafis, branding, visual content, UI/UX jika relevan.

### Video Editing

Video editing, motion graphics, storytelling, atau production jika relevan.

Gunakan icon dari React Icons jika tersedia.

Jangan menggunakan emoji.

---

# 12. About Section

About section harus terasa personal.

Jelaskan:

- latar belakang Informatika
- alasan/minat terhadap AI
- pengalaman pengembangan software
- pengalaman kreatif
- hubungan antara teknologi dan kreativitas

Gunakan Bahasa Indonesia natural.

Jangan menggunakan copywriting motivasional generik.

---

# 13. Featured Portfolio

Homepage menampilkan sekitar 3–6 portfolio unggulan.

Card harus berisi:

```text
[Image]

Category

Project Title

Short description

Technology

Lihat Detail →
```

Card tidak boleh terlalu dekoratif.

Image harus menjadi elemen visual utama.

Gunakan ratio gambar yang konsisten.

---

# 14. Portfolio Page

Route:

```text
/portfolio
```

Halaman ini menampilkan seluruh project.

Gunakan grid responsif:

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Filter kategori hanya dibuat jika jumlah project memang cukup untuk membutuhkannya.

Contoh:

- Semua
- AI
- Software Development
- Web
- Mobile
- Lainnya

---

# 15. Portfolio Detail

Route:

```text
/portfolio/:slug
```

Layout harus terasa seperti case study.

Struktur:

```text
Breadcrumb

Project Title
Category
Short Summary

Hero Image

Project Information
├── Peran
├── Tahun
├── Teknologi
└── Link

Gambaran Umum

Latar Belakang

Solusi

Konsep Project

Teknologi

Proses / Gallery

Hasil

Pembelajaran

Project Links
```

Jangan menampilkan semua section jika datanya tidak tersedia.

---

# 16. Project Concept

"Konsep Project" adalah bagian penting.

Tampilkan seperti artikel / case study.

Jangan membuatnya terlihat seperti:

```text
Konsep:
Lorem ipsum...
```

Gunakan typography editorial.

Contoh:

```text
Konsep Project

Latar Belakang
[paragraph]

Tujuan
[paragraph]

Pendekatan
[list]

Implementasi
[paragraph]

Tantangan
[paragraph]

Pembelajaran
[paragraph]
```

Content berasal dari JSON.

Service feature bertanggung jawab mengambil data tersebut.

---

# 17. Creative Page

Route:

```text
/creative
```

Creative portfolio harus memiliki visual yang lebih kuat daripada portfolio programming.

Kategori:

- Desain Grafis
- Video Editing
- Motion Graphics
- Branding
- Lainnya

Gunakan image/video sebagai focal point.

Jangan mengorbankan readability hanya untuk visual.

---

# 18. Creative Detail

Route dapat menggunakan:

```text
/creative/:slug
```

Detail dapat berisi:

- preview
- video
- tools
- project context
- creative objective
- visual direction
- process
- final result
- concept

Jika item berupa video, thumbnail harus jelas dan gunakan play icon dari icon library.

---

# 19. Certificate Section

Homepage menampilkan **3 sertifikat unggulan**.

Layout:

```text
Sertifikat Unggulan

[Certificate 1]
[Certificate 2]
[Certificate 3]

Lihat Semua Sertifikat →
```

Certificate card:

- image
- title
- issuer
- date
- short description

Jangan hanya membuat card berdasarkan gambar.

---

# 20. Certificate Page

Route:

```text
/certificates
```

Tampilkan seluruh sertifikat dalam grid.

Gunakan image sebagai focal point.

Filter hanya jika jumlah data cukup banyak.

---

# 21. Certificate Detail

Route:

```text
/certificates/:slug
```

Detail:

```text
Certificate Image

Nama Sertifikat

Penerbit
Tanggal
Credential ID

Tentang Sertifikat

Materi / Kompetensi

Link Verifikasi
```

Gunakan layout dua kolom pada desktop:

```text
[Certificate Image] [Information]
```

Pada mobile menjadi satu kolom.

---

# 22. Image Direction

Gunakan gambar sebagai bagian penting dari identitas website.

Project image:

- clean
- high quality
- consistent ratio

Creative image:

- dapat menggunakan crop yang lebih editorial

Certificate:

- jangan crop informasi penting
- gunakan object-fit yang sesuai

Profile:

- gunakan foto profesional

Optimalkan image untuk web.

---

# 23. Card Design

Card harus simple.

Karakteristik:

- white / very light background
- thin border
- subtle shadow
- rounded corners secukupnya
- image
- clear typography

Jangan membuat setiap card terlihat seperti floating glass panel.

---

# 24. Buttons

Primary button:

- pink solid
- dark/pink text sesuai contrast
- rounded secukupnya

Secondary:

- white background
- border
- dark text

Jangan menggunakan:

- gradient button
- glowing button
- excessive pill button

Button text menggunakan Bahasa Indonesia.

Contoh:

- Lihat Portfolio
- Lihat Detail
- Lihat Semua
- Hubungi Saya
- Lihat Project
- Verifikasi Sertifikat

---

# 25. Icons

Gunakan icon library.

React Icons diperbolehkan.

Icon harus konsisten dalam:

- size
- stroke/weight
- alignment

Jangan mencampurkan terlalu banyak icon style.

---

# 26. Feature-Based Architecture

Implementasikan Feature-Based Architecture.

Setiap feature utama memiliki:

```text
components/
pages/
services/
```

Contoh:

```text
src/
├── data/
│
├── features/
│   ├── home/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   │
│   ├── portfolio/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   │
│   ├── creative/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   │
│   ├── certificates/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   │
│   ├── about/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   │
│   └── contact/
│       ├── components/
│       ├── pages/
│       └── services/
│
├── components/
│   └── shared/
│
└── routes/
```

Sesuaikan dengan teknologi yang ditemukan dalam repository.

---

# 27. Service Architecture

Service menjadi abstraction layer antara data dan feature.

Alur:

```text
src/data
    ↓
Feature Service
    ↓
Feature Page
    ↓
Feature Components
```

Contoh:

```text
src/data/projects.json
        ↓
features/portfolio/services/portfolioService
        ↓
features/portfolio/pages/PortfolioPage
        ↓
features/portfolio/components/PortfolioCard
```

**Page dan component tidak boleh mengimport JSON secara langsung.**

Contoh yang dilarang:

```javascript
import projects from "../../../data/projects.json";
```

Gunakan:

```javascript
import { getProjects } from "../services/portfolioService";
```

Service bertanggung jawab untuk:

- mengambil data
- filtering
- lookup berdasarkan slug
- featured selection
- transformasi data sederhana

Jangan menempatkan UI logic di service.

---

# 28. Data Architecture

Data disimpan di:

```text
src/data/
```

Contoh:

```text
src/data/
├── profile.json
├── projects.json
├── creative.json
├── certificates.json
├── skills.json
└── img/
    ├── profile/
    ├── projects/
    ├── creative/
    └── certificates/
```

JSON hanya menyimpan content.

Business/data access logic berada di service.

---

# 29. Responsive Design

Breakpoint harus dipikirkan dari mobile terlebih dahulu.

### Mobile

- single column
- compact navigation
- readable typography
- large tap targets
- no horizontal overflow

### Tablet

- two-column layouts jika sesuai

### Desktop

- multi-column grid
- editorial composition
- two-column detail pages

### Large Desktop

Jangan membiarkan content menjadi terlalu lebar.

Gunakan max-width yang nyaman untuk membaca.

---

# 30. Motion

Animation sangat minimal.

Gunakan hanya untuk:

- hover
- navigation
- page transition
- image interaction
- subtle reveal

Tidak menggunakan:

- infinite animation
- excessive floating
- animated gradient
- particle animation
- excessive scroll animation

---

# 31. Accessibility

Pastikan:

- semantic HTML
- proper heading hierarchy
- alt text
- keyboard navigation
- focus state
- contrast
- accessible links
- accessible buttons

Pink tidak boleh digunakan sebagai satu-satunya indikator status.

---

# 32. SEO

Setiap page harus memiliki:

- title
- description
- meaningful URL
- semantic headings

Portfolio detail dan certificate detail harus memiliki metadata yang sesuai dengan kontennya.

---

# 33. Performance

Prioritaskan:

- optimized images
- lazy loading
- minimal dependencies
- minimal JavaScript
- efficient rendering
- no unnecessary animation

Portfolio harus cepat dimuat walaupun memiliki banyak gambar.

---

# 34. Content Language

**Semua copywriting wajib Bahasa Indonesia.**

Gunakan Bahasa Inggris hanya untuk:

- nama teknologi
- nama organisasi
- nama produk
- nama sertifikat resmi
- istilah teknis yang lebih tepat dipertahankan

Contoh:

```text
Artificial Intelligence
Machine Learning
Computer Vision
React
Flutter
GitHub
Figma
```

Tetapi deskripsi tetap Bahasa Indonesia.

---

# 35. Final Visual Target

Target visual website secara keseluruhan:

```text
        SOFT PINK
             +
      CLEAN WHITE SPACE
             +
       STRONG TYPOGRAPHY
             +
      TECHNICAL CONTENT
             +
      CREATIVE IMAGERY
             +
     FEMININE DETAILS
             =
  PROFESSIONAL PERSONAL PORTFOLIO
```

Website harus terasa feminin tanpa menjadi childish.

Website harus terasa teknis tanpa menjadi terlalu kaku.

Website harus terasa kreatif tanpa menjadi terlalu dekoratif.

Website harus terasa modern tanpa menggunakan tren desain AI secara berlebihan.

---

# 36. Quality Checklist

Sebelum menyelesaikan implementasi:

## Visual

- [ ] Tidak ada gradient
- [ ] Tidak ada emoji
- [ ] Tidak ada AI-slop decoration
- [ ] Pink digunakan sebagai accent, bukan seluruh background
- [ ] Typography jelas
- [ ] Spacing konsisten
- [ ] Image berkualitas
- [ ] Layout tidak terlalu padat

## UX

- [ ] Identitas pemilik website dapat dipahami dalam beberapa detik
- [ ] Navigasi jelas
- [ ] Portfolio mudah dijelajahi
- [ ] Detail project informatif
- [ ] Konsep project mudah dibaca
- [ ] Sertifikat memiliki detail
- [ ] Creative portfolio mudah dijelajahi
- [ ] Mobile friendly

## Architecture

- [ ] Feature-Based Architecture
- [ ] Setiap feature memiliki components
- [ ] Setiap feature memiliki pages
- [ ] Setiap feature memiliki services
- [ ] Service menjadi jembatan antara data dan feature
- [ ] Page tidak mengimport JSON secara langsung
- [ ] Content terpisah dari UI
- [ ] Image berada di src/data/img
- [ ] Penambahan project cukup melalui data

## Engineering

- [ ] Build berhasil
- [ ] Tidak ada console error
- [ ] Tidak ada broken route
- [ ] Tidak ada broken image
- [ ] Tidak ada horizontal overflow
- [ ] Asset dioptimalkan
- [ ] Tidak ada dependency yang tidak diperlukan
