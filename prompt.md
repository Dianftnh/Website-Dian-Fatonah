# Personal Portfolio Website Revamp

## Role

You are a senior frontend engineer, UI/UX designer, and product designer.

Your task is to **audit and redesign the existing personal portfolio website in the current repository**, then implement a complete portfolio website based on the requirements below.

Do not immediately start coding.

First, inspect the existing project thoroughly, understand its current architecture, identify the technologies already being used, and preserve the existing technology stack whenever it is reasonable to do so.

Do **not introduce a new framework or major dependency unless there is a clear technical reason**.

---

# 1. Main Objective

Transform the existing personal website from a simple landing page into a **professional personal portfolio platform** that communicates this identity:

> Seorang mahasiswa Informatika yang berfokus pada Artificial Intelligence dan pengembangan perangkat lunak, sekaligus memiliki pengalaman di bidang kreatif seperti desain grafis dan video editing.

Primary positioning:

**AI & Software Development**

Secondary capability:

**Creative Design & Video Production**

Website harus menunjukkan bahwa kedua kemampuan tersebut merupakan kombinasi yang membentuk identitas profesional pemilik website.

Website jangan terlihat seperti:

* portfolio developer generik
* portfolio graphic designer generik
* template SaaS
* website bertema "AI" yang penuh efek futuristik
* website kreatif yang menghilangkan identitas teknis
* website yang terlihat seperti hasil template AI

Visual identity harus menggabungkan:

**Teknologi + Kecerdasan + Kreativitas + Profesionalisme**

---

# 2. LANGUAGE — MANDATORY

**SELURUH COPYWRITING WEBSITE WAJIB MENGGUNAKAN BAHASA INDONESIA.**

Ini berlaku untuk:

* Hero
* Navigation
* Button
* Section title
* Description
* Portfolio
* Project detail
* Project concept
* Certificate
* Certificate detail
* Creative portfolio
* About
* Contact
* Footer
* Empty state
* Error message
* Metadata
* Filter
* Label
* CTA

Jangan menggunakan bahasa Inggris untuk UI text kecuali:

1. Nama produk/project
2. Nama teknologi
3. Nama sertifikat resmi
4. Nama organisasi/perusahaan
5. Istilah teknis yang memang lebih tepat dipertahankan dalam bahasa aslinya

Contoh istilah yang boleh tetap menggunakan bahasa Inggris:

* Artificial Intelligence
* Machine Learning
* Computer Vision
* React
* Flutter
* GitHub
* Figma
* Adobe Premiere Pro

Namun narasi yang menjelaskan istilah tersebut harus menggunakan Bahasa Indonesia.

Contoh:

**Benar:**

> Pengembangan sistem berbasis Artificial Intelligence untuk membantu proses klasifikasi data secara otomatis.

**Hindari:**

> Building intelligent systems to automate complex workflows.

---

# 3. COPYWRITING STYLE

Copywriting harus terasa seperti ditulis oleh manusia, bukan AI.

Gunakan gaya:

* natural
* profesional
* sederhana
* personal
* percaya diri tetapi tidak berlebihan
* informatif
* tidak terlalu marketing-heavy

Hindari:

* kalimat bombastis
* jargon pemasaran yang tidak perlu
* klaim berlebihan
* "revolutionary"
* "next-generation"
* "cutting-edge"
* "world-class"
* "unlock your potential"
* "transform your digital experience"
* kalimat yang terdengar seperti template AI

Jangan menggunakan pola copywriting generik seperti:

> "Saya membantu bisnis mengubah ide menjadi solusi digital yang inovatif."

kecuali memang sesuai dengan profil orang tersebut.

Copy harus berasal dari **data dan pengalaman nyata pemilik portfolio**.

Jangan membuat klaim pengalaman atau keahlian yang tidak tersedia dalam repository/data.

---

# 4. VISUAL DESIGN — AVOID AI SLOP

Website harus memiliki desain yang bersih dan intentional.

**JANGAN menggunakan gradient sebagai elemen visual utama.**

Secara default:

* gunakan warna solid
* gunakan kontras yang jelas
* gunakan whitespace
* gunakan typography sebagai elemen visual
* gunakan image sebagai visual utama
* gunakan border dan subtle shadow jika diperlukan

Hindari penggunaan:

* gradient background
* gradient text
* gradient button
* gradient border
* aurora gradient
* mesh gradient
* glowing gradient
* neon gradient

**Jangan menggunakan gradient hanya karena ingin membuat website terlihat "modern".**

Jika sistem desain yang sudah ada menggunakan gradient secara signifikan, evaluasi dan sederhanakan penggunaannya.

Prioritaskan:

**Typography + Layout + Image + Spacing + Contrast**

daripada:

**Gradient + Glow + Blur + Decoration**

---

# 5. NO EMOJI / EMOTICON

**Jangan menggunakan emoji atau emoticon dalam UI website.**

Contoh yang dilarang:

* 🚀
* AI
* 🎨
* 💻
* 📱
* ✨
* 🔥
* ❤️
* 👋

Gunakan typography dan layout untuk menyampaikan informasi.

Namun penggunaan icon dari library seperti:

* React Icons
* Lucide
* library icon yang sudah tersedia di project

**diperbolehkan.**

Gunakan icon secara fungsional, bukan sebagai dekorasi berlebihan.

Contoh:

* GitHub icon
* External link icon
* Arrow icon
* Menu icon
* Close icon
* Calendar icon
* Certificate icon
* Play icon

Jangan mengganti icon dengan emoji.

---

# 6. AVOID EXCESSIVE VISUAL EFFECTS

Jangan menggunakan efek visual hanya untuk membuat website terlihat kompleks.

Hindari secara default:

* excessive glassmorphism
* excessive blur
* floating blobs
* animated particles
* random geometric decorations
* glowing cards
* excessive shadows
* animated backgrounds
* cursor-following effects
* excessive parallax
* infinite marquee
* excessive hover animations

Animation hanya boleh digunakan apabila memberikan manfaat terhadap UX.

Contoh yang diperbolehkan:

* subtle page transition
* hover state
* card interaction
* navigation transition
* image reveal
* accordion transition

Animation harus cepat, subtle, dan tidak mengganggu pembacaan konten.

---

# 7. DESIGN PRINCIPLE

Gunakan prinsip:

> **Less decoration, more information.**

Website harus terlihat seperti website yang memang dirancang oleh seorang designer/developer, bukan kumpulan komponen visual yang dihasilkan AI.

Prioritaskan:

1. Information hierarchy
2. Typography
3. Layout
4. Spacing
5. Content
6. Imagery
7. Interaction
8. Decoration

Decoration adalah prioritas terakhir.

---

# 8. First Step — Audit Existing Repository

Before modifying anything, inspect the repository.

Determine:

* Framework
* Programming language
* Build tool
* CSS solution
* Component architecture
* Routing solution
* Existing dependencies
* Existing assets
* Existing pages
* Existing components
* Existing design system
* Existing responsive behavior
* Existing animations
* Existing data/content structure

Read the existing source code instead of making assumptions.

The existing technology stack should be reused whenever practical.

After the audit, internally determine:

1. What should be preserved
2. What should be refactored
3. What should be removed
4. What should be added
5. What architectural changes are necessary

Do not migrate the project to another framework simply because another technology may be preferable.

---

# 9. Website Architecture

The website must no longer be a single-page landing page.

Create a proper multi-page portfolio structure.

At minimum:

### `/`

Beranda

### `/portfolio`

Daftar portfolio

### `/portfolio/:slug`

Detail portfolio

### `/certificates`

Daftar sertifikat

### `/certificates/:slug`

Detail sertifikat

Additional pages may be created if justified, such as:

### `/about`

Profil lengkap

### `/creative`

Portfolio kreatif

Do not create unnecessary pages.

---

# 10. Navigation

Navigation should be simple.

Recommended:

* Beranda
* Tentang
* Portfolio
* Kreatif
* Sertifikat
* Kontak

Adapt the navigation if the existing content suggests a better structure.

Desktop:

* clean horizontal navigation

Mobile:

* hamburger menu or equivalent

All navigation labels must be in Bahasa Indonesia.

---

# 11. Landing Page

The landing page acts as the main introduction.

It must quickly communicate:

* siapa pemilik website
* bidang yang ditekuni
* fokus AI
* kemampuan software development
* kemampuan kreatif
* portfolio terbaik
* sertifikat pilihan
* cara menghubungi

It should not contain every piece of information.

---

# 12. Hero Section

Hero should communicate the person's identity immediately.

Include:

* Nama
* Status / bidang
* Fokus Artificial Intelligence
* Software development
* Creative capability
* CTA menuju portfolio
* CTA menuju profil atau kontak

Copywriting must be in Bahasa Indonesia.

Avoid generic statements such as:

> "Membangun masa depan digital dengan inovasi tanpa batas."

Prefer specific statements based on actual experience.

Example conceptual direction:

> Mahasiswa Informatika yang berfokus pada Artificial Intelligence dan pengembangan perangkat lunak, dengan pengalaman dalam desain grafis dan produksi video.

Do not blindly copy this sentence. Adapt it to the actual person's profile.

---

# 13. About Section

Explain briefly:

* latar belakang Informatika
* ketertarikan terhadap AI
* pengalaman software development
* pengalaman kreatif
* desain grafis
* video editing
* arah pengembangan profesional

Keep the landing page version concise.

Provide a link to a detailed profile if necessary.

---

# 14. Expertise Section

Primary:

### Artificial Intelligence & Software Development

Possible capabilities:

* Artificial Intelligence
* Machine Learning
* Computer Vision
* Web Development
* Mobile Development
* Backend Development
* API Integration
* Automation

Secondary:

### Creative

Possible capabilities:

* Graphic Design
* UI Design
* Video Editing
* Motion Graphics
* Visual Content
* Branding

Only display capabilities supported by actual data.

Do not fabricate skills.

---

# 15. Featured Portfolio

Show 3–6 selected portfolio items on the landing page.

Each card should contain:

* image
* category
* title
* short description
* technology/tool
* CTA

Programming projects may include:

* project image
* description
* problem
* solution
* technologies
* role
* GitHub
* demo
* project link

Only show links that actually exist.

Do not display empty buttons.

---

# 16. Portfolio Detail

Every project must have its own page:

`/portfolio/:slug`

Recommended structure:

## Header

* title
* category
* summary
* hero image
* external links

## Gambaran Umum

Explain what the project is.

## Latar Belakang

Explain the context/problem.

## Solusi

Explain what was developed.

## Teknologi

Display technologies used.

## Peran

Explain the owner's contribution.

## Konsep Project

This is a major part of the website.

The concept should be presented as a long-form case study.

Possible sections:

* Latar belakang
* Ide
* Permasalahan
* Tujuan
* Pendekatan
* Perancangan
* Implementasi
* Tantangan
* Hasil
* Pembelajaran
* Pengembangan selanjutnya

Do not force every section to exist.

The UI should make this feel like a professional technical article/case study.

It must not look like raw JSON.

---

# 17. Creative Portfolio

Creative works must be treated as a first-class portfolio category.

Examples:

* desain grafis
* video editing
* motion graphics
* poster
* social media design
* branding
* visual content

Each item supports:

* preview
* title
* category
* description
* tools
* project context
* external link

For video:

* thumbnail
* video embed or external link
* source/platform
* description

---

# 18. Creative Project Concept

Creative projects must also support:

**Konsep Project**

Possible content:

* Latar belakang
* Tujuan
* Target audiens
* Konsep visual
* Arah desain
* Warna
* Tipografi
* Editing approach
* Storytelling
* Proses
* Tantangan
* Hasil akhir
* Evaluasi

The content must come from JSON/data.

The UI should render it as a professional case study.

---

# 19. Certificates

Landing page must show:

**3 sertifikat unggulan**

Each card:

* image
* title
* issuer
* date
* short explanation

Include:

**Lihat Semua Sertifikat**

CTA.

---

# 20. Certificate Listing

Create:

`/certificates`

Display all certificates.

Categories may be added when enough data exists.

Examples:

* Artificial Intelligence
* Programming
* Technology
* Design
* Other

Do not add unnecessary filtering.

---

# 21. Certificate Detail

Create:

`/certificates/:slug`

The detail page must include:

* certificate image
* title
* issuer
* recipient
* issue date
* credential ID if available
* verification link if available
* description
* skills/topics
* significance/context

Do not make this page merely an enlarged certificate image.

The page should explain what was learned or demonstrated through the certificate.

---

# 22. Frontend-Only CMS

The website must function as a **frontend-only CMS**.

There must be:

**NO backend requirement.**

Content must be managed through local data files.

Recommended structure:

```text
src/
  data/
    profile.json
    projects.json
    certificates.json
    creative.json
    skills.json

    img/
      profile/
      projects/
      creative/
      certificates/
```

Adapt the structure to the existing project.

The principle is:

> Content is separated from presentation.

Do not hardcode portfolio content inside components.

---

# 23. JSON Data Model

Create structured JSON files.

### `profile.json`

Possible fields:

* name
* title
* bio
* specialization
* socialLinks
* contact
* profileImage

### `projects.json`

Possible fields:

* id
* slug
* title
* category
* featured
* thumbnail
* gallery
* shortDescription
* description
* technologies
* role
* links
* concept

### `certificates.json`

Possible fields:

* id
* slug
* title
* issuer
* date
* image
* credentialId
* verificationUrl
* description
* skills
* featured

### `creative.json`

Possible fields:

* id
* slug
* title
* category
* featured
* thumbnail
* gallery
* video
* description
* tools
* links
* concept

Improve the schema if necessary.

Avoid unnecessary duplication.

---

# 24. Image Structure

Create:

```text
data/img/
```

with:

```text
data/img/profile/
data/img/projects/
data/img/creative/
data/img/certificates/
```

Images should be referenced from JSON.

Components should not contain hardcoded portfolio image paths.

The portfolio owner should be able to:

1. Add image
2. Edit JSON
3. Rebuild website

without modifying application logic.

---

# 25. Content-Driven Components

Create reusable components such as:

```text
ProjectCard
ProjectDetail
CertificateCard
CertificateDetail
CreativeCard
ConceptArticle
FeaturedSection
SectionHeader
```

Pages should consume data.

Adding a new project should require adding data, not creating a new component.

Architecture:

```text
JSON
 ↓
Data Layer
 ↓
Reusable Components
 ↓
Pages
```

---

# 26. Routing

Use the existing routing technology.

Dynamic routes:

```text
/portfolio/:slug
/certificates/:slug
```

Handle invalid slugs using a proper not-found page.

All user-facing text must remain in Bahasa Indonesia.

---

# 27. UI / UX

The visual language should combine:

### Technical

* clean grid
* structured layout
* strong typography hierarchy
* precise spacing
* clear information architecture

### Creative

* strong imagery
* editorial composition
* visual storytelling
* tasteful interaction

The final result should feel:

**Modern, profesional, personal, cerdas, dan kreatif.**

But do not achieve "modern" by blindly adding modern-design trends.

---

# 28. Explicitly Avoid AI-Slop Design

The following are explicitly discouraged unless there is a strong UX reason:

* gradient
* gradient text
* neon
* glow
* excessive glassmorphism
* floating blobs
* excessive rounded cards
* excessive pill-shaped buttons
* excessive shadows
* random decorative shapes
* AI-generated abstract illustrations
* robot illustrations
* excessive particles
* excessive animations
* emoji
* emoticons
* generic inspirational slogans
* generic startup language
* excessive use of icons

The design should be recognizable through:

**layout, typography, content, imagery, and hierarchy.**

Not through visual gimmicks.

---

# 29. Icons

Icons are allowed when they improve usability.

Use the existing icon library if available.

If React Icons is already installed, it may be used.

Appropriate examples:

* GitHub
* External Link
* Arrow
* Menu
* Close
* Calendar
* Play
* Download
* Mail
* Map Pin
* Certificate

Do not use icons simply to fill empty spaces.

---

# 30. Responsive Design

The website must be fully responsive across:

* mobile
* tablet
* laptop
* desktop
* large desktop

Do not simply scale down the desktop layout.

Mobile should have intentional layouts for:

* navigation
* hero
* portfolio cards
* creative gallery
* certificate cards
* project detail
* long-form concept
* video
* buttons

---

# 31. User Experience

A visitor should understand the person's identity within a few seconds.

The information hierarchy should communicate:

> Informatics → AI → Software Development → Creative Experience

Use progressive disclosure:

```text
Beranda
   ↓
Ringkasan
   ↓
Portfolio
   ↓
Detail Project
   ↓
Konsep Project
```

The landing page should be concise.

The detail pages should provide depth.

---

# 32. Performance

Optimize:

* image size
* image format
* lazy loading
* JavaScript bundle
* dependencies
* animation overhead
* unnecessary rendering
* large assets

Do not introduce dependencies for simple functionality.

Do not sacrifice performance for decorative effects.

---

# 33. Accessibility

Implement:

* semantic HTML
* proper heading hierarchy
* alt text
* keyboard navigation
* accessible buttons
* accessible links
* sufficient contrast
* visible focus states

---

# 34. SEO

Implement basic SEO:

* page title
* description
* meaningful URLs
* Open Graph where appropriate
* semantic headings

Portfolio and certificate pages should have dynamic metadata where supported by the framework.

---

# 35. Empty / Missing Data

Handle optional content gracefully.

No GitHub:

→ hide GitHub button.

No demo:

→ hide demo button.

No gallery:

→ hide gallery.

No concept:

→ hide concept section.

No verification URL:

→ hide verification button.

Never render empty UI components.

---

# 36. Content Accuracy

Never invent:

* projects
* certificates
* achievements
* technologies
* experience
* clients
* employment
* AI expertise
* creative expertise

Use existing repository content as the source of truth.

If content is insufficient, create the structure and use clearly identifiable placeholders only where necessary.

---

# 37. Implementation Workflow

Follow this order:

### Phase 1 — Audit

Inspect repository and existing implementation.

### Phase 2 — Architecture

Design data/content architecture.

### Phase 3 — UI/UX

Create visual system and information architecture.

### Phase 4 — Implementation

Implement reusable components and pages.

### Phase 5 — Content

Move content into JSON/data files.

### Phase 6 — Responsive

Test mobile/tablet/desktop.

### Phase 7 — Quality Assurance

Check:

* build
* lint
* routes
* links
* images
* responsiveness
* accessibility
* console errors
* broken components
* missing content
* performance

---

# 38. Important Rule

Do not interpret this task as:

> "Make the landing page prettier."

Interpret it as:

> "Transform the existing personal landing page into a professional, content-driven personal portfolio platform."

The architecture, content model, navigation, UX, and visual identity are equally important.

---

# 39. Final Quality Standard

Before considering the task complete, ask yourself:

### Content

* Apakah semua copywriting menggunakan Bahasa Indonesia?
* Apakah tidak ada copywriting generik khas AI?
* Apakah seluruh informasi berasal dari data nyata?

### Design

* Apakah website tidak bergantung pada gradient?
* Apakah tidak terdapat emoji?
* Apakah icon digunakan secara fungsional?
* Apakah desain tetap menarik tanpa efek visual berlebihan?
* Apakah typography dan layout sudah menjadi elemen visual utama?

### Architecture

* Apakah konten benar-benar berasal dari JSON?
* Apakah image berada di folder data/img?
* Apakah penambahan project tidak memerlukan perubahan component?
* Apakah detail page menggunakan slug dinamis?

### UX

* Apakah pengguna memahami identitas pemilik website dalam beberapa detik?
* Apakah navigasi mudah dipahami?
* Apakah detail portfolio memiliki informasi yang cukup?
* Apakah konsep project mudah dibaca?
* Apakah website nyaman digunakan di mobile?

### Engineering

* Apakah tidak ada dependency yang tidak diperlukan?
* Apakah build berhasil?
* Apakah tidak ada console error?
* Apakah routing berjalan?
* Apakah asset loading optimal?

---

# 40. Final Deliverable

Implement seluruh perubahan langsung pada repository.

Setelah selesai, berikan laporan singkat yang menjelaskan:

1. Teknologi yang ditemukan dari repository
2. Perubahan arsitektur
3. Halaman yang ditambahkan
4. Struktur folder data
5. Struktur JSON
6. Cara menambahkan portfolio
7. Cara menambahkan creative work
8. Cara menambahkan sertifikat
9. Cara menambahkan gambar
10. Cara mengedit Konsep Project
11. Perubahan UI/UX utama
12. Hasil pengecekan build/lint/test
13. Hal yang masih membutuhkan perhatian

**Prioritas utama:**

> Konten yang nyata, desain yang intentional, Bahasa Indonesia yang natural, arsitektur yang maintainable, dan pengalaman pengguna yang baik.

Jangan mengejar "wow effect".

Buat website yang terlihat **dirancang dengan sengaja**, bukan website yang terlihat seperti kumpulan pola desain AI.



extend prompt
# 25. Feature-Based Architecture

Implementasikan **Feature-Based Architecture** sebagai struktur utama frontend.

Jangan membuat seluruh komponen, halaman, dan service dalam satu folder global berdasarkan tipe file seperti:

```text
components/
pages/
services/
```

Sebaliknya, struktur harus dikelompokkan berdasarkan **fitur/domain**.

Contoh struktur:

```text
src/
├── data/
│   ├── profile.json
│   ├── projects.json
│   ├── certificates.json
│   ├── creative.json
│   └── img/
│       ├── profile/
│       ├── projects/
│       ├── certificates/
│       └── creative/
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
├── routes/
└── ...
```

Sesuaikan struktur tersebut dengan framework dan struktur project yang ditemukan saat audit.

Tidak harus menggunakan nama fitur persis seperti contoh di atas apabila repository memiliki kebutuhan yang berbeda, tetapi prinsip Feature-Based Architecture **WAJIB dipertahankan**.

---

# 26. Struktur Setiap Feature

Setiap feature utama minimal memiliki tiga bagian:

```text
feature/
├── components/
├── pages/
└── services/
```

### `components/`

Berisi komponen UI yang hanya berkaitan dengan feature tersebut.

Contoh:

```text
features/
└── portfolio/
    └── components/
        ├── PortfolioCard
        ├── PortfolioGrid
        ├── PortfolioFilter
        ├── ProjectHeader
        ├── ProjectGallery
        └── ProjectConcept
```

Komponen tersebut tidak boleh ditempatkan di global `components` apabila hanya digunakan oleh feature portfolio.

---

### `pages/`

Berisi halaman yang menjadi entry point dari feature.

Contoh:

```text
features/
└── portfolio/
    └── pages/
        ├── PortfolioPage
        └── PortfolioDetailPage
```

Untuk certificates:

```text
features/
└── certificates/
    └── pages/
        ├── CertificatesPage
        └── CertificateDetailPage
```

Page bertanggung jawab mengatur komposisi UI feature, bukan menyimpan seluruh logic bisnis/data secara langsung.

---

### `services/`

Ini adalah bagian yang sangat penting.

`services/` berfungsi sebagai **jembatan antara `src/data` dengan feature**.

Alur data harus mengikuti:

```text
src/data
   ↓
feature/services
   ↓
feature/pages
   ↓
feature/components
```

Contoh:

```text
src/
├── data/
│   └── projects.json
│
└── features/
    └── portfolio/
        ├── components/
        ├── pages/
        └── services/
            └── portfolioService
```

`portfolioService` bertanggung jawab membaca dan mengolah data portfolio.

Page tidak boleh melakukan import langsung seperti:

```javascript
import projects from "../../../data/projects.json";
```

Page harus mengakses data melalui service:

```javascript
import { getProjects } from "../services/portfolioService";
```

Dengan demikian, page tidak mengetahui bagaimana data diperoleh.

---

# 27. Responsibility of Services

Service pada setiap feature bertanggung jawab sebagai abstraction layer antara data source dan UI.

Contoh responsibility:

### Portfolio Service

```text
getProjects()
getFeaturedProjects()
getProjectBySlug(slug)
getProjectsByCategory(category)
```

### Certificate Service

```text
getCertificates()
getFeaturedCertificates()
getCertificateBySlug(slug)
```

### Creative Service

```text
getCreativeProjects()
getFeaturedCreativeProjects()
getCreativeProjectBySlug(slug)
```

### Profile Service

```text
getProfile()
```

Nama dan method harus disesuaikan dengan kebutuhan aktual.

Jangan membuat service yang hanya menjadi wrapper tanpa alasan.

Service harus memberikan abstraction yang jelas dan berguna.

---

# 28. Service Must Hide Data Source

Feature tidak boleh mengetahui apakah data berasal dari:

* JSON
* JavaScript object
* local storage
* API
* database
* CMS

Untuk implementasi saat ini, sumber data memang berasal dari:

```text
src/data/
```

Tetapi feature hanya berinteraksi dengan service.

Contoh:

```text
src/data/projects.json
        ↓
portfolioService
        ↓
PortfolioPage
        ↓
PortfolioCard
```

Bukan:

```text
src/data/projects.json
        ↓
PortfolioPage
        ↓
PortfolioCard
```

Tujuannya adalah menjaga **separation of concerns**.

---

# 29. Future Backend Compatibility

Walaupun website saat ini merupakan frontend-only CMS dan menggunakan JSON lokal, arsitektur harus memungkinkan sumber data diganti di kemudian hari.

Contoh:

### Kondisi sekarang

```text
projects.json
    ↓
portfolioService
    ↓
PortfolioPage
```

### Jika suatu saat menggunakan API

```text
REST API
    ↓
portfolioService
    ↓
PortfolioPage
```

`PortfolioPage` dan `PortfolioCard` seharusnya tidak perlu mengetahui perubahan tersebut.

Jangan membuat arsitektur terlalu kompleks hanya untuk mengantisipasi backend.

Cukup buat abstraction layer yang sederhana dan jelas.

---

# 30. Feature Independence

Setiap feature harus sebisa mungkin memiliki batas yang jelas.

Contoh:

```text
features/
├── portfolio/
├── creative/
├── certificates/
├── about/
└── contact/
```

Portfolio tidak boleh bergantung langsung pada implementation detail certificates.

Jika portfolio membutuhkan data tertentu dari feature lain, evaluasi apakah:

1. data tersebut seharusnya berasal dari shared data
2. logic tersebut seharusnya dipindahkan ke shared layer
3. atau dependency tersebut memang diperlukan

Hindari circular dependency antar-feature.

---

# 31. Shared Components

Tidak semua komponen harus berada di dalam feature.

Gunakan shared components hanya untuk komponen yang benar-benar bersifat umum.

Contoh:

```text
src/
└── components/
    └── shared/
        ├── Button
        ├── Container
        ├── SectionHeader
        ├── Image
        ├── Modal
        └── NotFound
```

Jangan memasukkan komponen portfolio-specific ke shared components hanya agar struktur terlihat rapi.

Gunakan prinsip:

> Jika komponen hanya relevan terhadap satu feature, letakkan di feature tersebut.

---

# 32. Data Layer

`src/data` hanya berfungsi sebagai **content/data source**.

Contoh:

```text
src/
└── data/
    ├── profile.json
    ├── projects.json
    ├── creative.json
    ├── certificates.json
    └── img/
```

Jangan menempatkan business logic di dalam JSON.

JSON hanya berisi data.

Business/data access logic harus berada di:

```text
features/*/services/
```

---

# 33. Clear Separation of Responsibilities

Gunakan pembagian tanggung jawab berikut:

```text
DATA
↓
Menyimpan konten

SERVICE
↓
Mengambil dan mengolah data

PAGE
↓
Mengatur komposisi halaman

COMPONENT
↓
Menampilkan UI
```

Contoh konkret:

```text
projects.json
     ↓
portfolioService
     ↓
PortfolioPage
     ↓
PortfolioGrid
     ↓
PortfolioCard
```

Jangan mencampurkan seluruh tanggung jawab tersebut dalam satu file.

---

# 34. Feature Folder Example

Untuk portfolio, struktur idealnya dapat terlihat seperti:

```text
features/
└── portfolio/
    ├── components/
    │   ├── PortfolioCard
    │   ├── PortfolioGrid
    │   ├── PortfolioHeader
    │   ├── ProjectGallery
    │   ├── ProjectInfo
    │   └── ProjectConcept
    │
    ├── pages/
    │   ├── PortfolioPage
    │   └── PortfolioDetailPage
    │
    └── services/
        └── portfolioService
```

Untuk certificates:

```text
features/
└── certificates/
    ├── components/
    │   ├── CertificateCard
    │   ├── CertificateGrid
    │   ├── CertificateHeader
    │   └── CertificateInformation
    │
    ├── pages/
    │   ├── CertificatesPage
    │   └── CertificateDetailPage
    │
    └── services/
        └── certificateService
```

Untuk creative:

```text
features/
└── creative/
    ├── components/
    │   ├── CreativeCard
    │   ├── CreativeGrid
    │   ├── CreativeGallery
    │   └── CreativeConcept
    │
    ├── pages/
    │   ├── CreativePage
    │   └── CreativeDetailPage
    │
    └── services/
        └── creativeService
```

---

# 35. Architectural Constraint

**JANGAN membuat implementasi berikut:**

```text
Page
 ├── import JSON
 ├── filtering logic
 ├── data transformation
 ├── routing logic
 └── UI
```

Jika memungkinkan, pisahkan menjadi:

```text
Data
 ↓
Service
 ↓
Page
 ↓
Component
```

Page harus tetap relatif sederhana dan fokus pada composition.

---

# 36. Final Architecture Requirement

Sebelum menyelesaikan implementasi, pastikan struktur project memenuhi prinsip berikut:

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
│   └── ...
│
├── components/
│   └── shared/
│
└── routes/
```

Struktur akhir boleh berbeda secara minor sesuai teknologi yang ditemukan saat audit, tetapi **prinsip Feature-Based Architecture dan tiga bagian utama `components`, `pages`, dan `services` pada setiap feature harus dipertahankan.**

Service harus menjadi abstraction layer antara `src/data` dan feature.

Jangan membuat page atau component membaca file JSON secara langsung.
