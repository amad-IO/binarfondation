# Binar Foundation — Project Context

> **Catatan untuk Agent**: Baca section [⚠️ Aturan Wajib untuk Agent](#️-aturan-wajib-untuk-agent) sebelum menambahkan aset apapun ke project ini.

## Identitas Proyek

| Atribut | Detail |
|---|---|
| **Nama** | Binar Foundation (Yayasan Binar Community) |
| **Jenis** | Website Company Profile / Landing Page |
| **Bahasa UI** | Bahasa Indonesia |
| **Status** | Aktif dikembangkan — fitur-fitur masih dalam tahap pembangunan (maintenance mode) |
| **Pemilik** | binar fondation |
| **Copyright** | © 2026 Mochammad Isthmata. All rights reserved. |

---

## Tujuan Website

Website landing page untuk **Yayasan Binar Community** — organisasi yang bergerak di bidang **kesehatan mental anak dan remaja** di Indonesia. Tagline: **#Berbinar Untuk Bersinar**.

Website ini bertujuan untuk:
- Memperkenalkan visi, misi, dan nilai yayasan
- Menampilkan program-program yang dijalankan
- Menarik relawan dan donatur
- Menjadi pintu masuk komunitas

---

## Tech Stack

| Lapisan | Teknologi |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Tailwind CSS v4 (via PostCSS) |
| **Animasi** | Framer Motion v12 |
| **Ikon** | Lucide React |
| **Font** | Poppins (Google Fonts) |
| **Build** | `npm run dev` (dev), `npm run build` (prod) |

---

## Struktur File

```
src/
├── App.jsx                        # Root component, susun semua section
├── main.jsx                       # Entry point React
├── index.css                      # Global CSS: Tailwind + hide-scrollbar utility (Google Fonts di-load via <link> di index.html, BUKAN @import)
│
├── components/                    # Komponen reusable
│   ├── Button.jsx                 # Button UI (variant: primary, outline, accent, ghost)
│   ├── Navbar.jsx                 # Fixed navbar dengan smooth scroll & active section indicator
│   ├── Footer.jsx                 # Footer 4 kolom: Logo, Menu, Bergabung, Dukung Kami, Kontak
│   ├── ProgramCard.jsx            # Card program dengan gambar, judul, deskripsi
│   └── MaintenanceNotification.jsx # Pop-up "Fitur Sedang Maintenance" (dipicu custom event)
│
├── page-sections/                 # Section-section halaman utama (urut dari atas ke bawah)
│   ├── Hero.jsx                   # Section pertama: headline, 3 CTA button, gambar keluarga
│   ├── About.jsx                  # Section: Tentang Kami, Visi, Misi, Nilai Kami (4 kolom)
│   ├── Programs.jsx               # Section: horizontal scroll carousel 8 program
│   ├── ImpactBanner.jsx           # Section: banner biru statistik (50 kegiatan, 50K penerima, 300 relawan)
│   ├── ArticlesAndRecruitment.jsx # Section: 3 artikel + card Open Recruitment Relawan
│   └── SupportBanner.jsx          # Section: banner donasi (kuning/cream)
│
└── assets/                        # Gambar & ikon SVG/PNG
    ├── logo.PNG                   # Logo utama (dipakai di Navbar)
    ├── logo 2.PNG                 # Logo versi 2 (dipakai di Footer & watermark notifikasi)
    ├── family.svg                 # Ilustrasi Hero (keluarga)
    ├── creative team.svg          # Ilustrasi ImpactBanner
    ├── registration.svg           # Ilustrasi Recruitment card
    ├── questions.svg              # Ilustrasi MaintenanceNotification
    ├── curve1.svg                 # Background shape Hero
    ├── globe.svg                  # Ikon Visi (About)
    ├── love.svg / love 1.svg / love-3.svg  # Ikon cinta (Hero & About)
    ├── star.svg                   # Ikon Nilai Kami (About)
    └── user 3.svg                 # Ikon Tentang Kami (About)
```

---

## Urutan Layout Halaman (App.jsx)

```
<Navbar />              ← Fixed top, smooth scroll ke section by ID
<Hero />                ← id="beranda"
  <About />             ← id="tentang-kami" (dalam <main> container)
<Programs />            ← id="program" (full width)
<ImpactBanner />        ← full width, bg biru #3668C6
  <ArticlesAndRecruitment />  ← id="edukasi" + id="relawan"
  <SupportBanner />     ← id="donasi"
<Footer />
<MaintenanceNotification />  ← Fixed overlay, z-index tertinggi
```

---

## Navigasi & Section IDs

Navbar menggunakan anchor hash dan smooth scroll. Semua section harus punya `id` yang cocok:

| Link Navbar | Section ID |
|---|---|
| Beranda | `#beranda` |
| Tentang Kami | `#tentang-kami` |
| Program | `#program` |
| Edukasi | `#edukasi` |
| Relawan | `#relawan` |
| Donasi | `#donasi` |
| Kontak | `#kontak` ← belum ada section-nya |

---

## Pola Penting: Maintenance Notification

Semua tombol CTA yang fiturnya belum tersedia **TIDAK menggunakan link biasa**, melainkan men-dispatch custom event:

```js
window.dispatchEvent(new CustomEvent('show-maintenance', {
  detail: { feature: 'Nama Fitur' }
}))
```

`MaintenanceNotification.jsx` mendengarkan event ini dan menampilkan pop-up dengan nama fitur yang relevan. Pop-up auto-close setelah 5 detik.

**Daftar fitur yang masih maintenance:**
- Gabung Komunitas
- Jadi Relawan
- Donasi Sekarang
- Lihat Selengkapnya (semua program & artikel)
- Daftar Sekarang (relawan)
- Tentang Kami Selengkapnya

---

## Design System

### Warna Utama

| Variabel | Nilai | Digunakan |
|---|---|---|
| Primary Blue | `#1C5CE5` / `blue-600` | CTA button, link aktif, ikon kontak |
| Banner Blue | `#3668C6` | ImpactBanner background |
| Dark Navy | `#1a2b4b` | Heading About |
| Accent Yellow | `#FFF4D2` / `#FCD368` | Floating bubble Hero, SupportBanner |
| Background | `white` / `#F8FAFC` | Body, About card |

### Button Variants (Button.jsx)

| Variant | Tampilan |
|---|---|
| `primary` | Biru solid, shadow, hover lift |
| `outline` | Border biru, hover fill biru muda |
| `accent` | Kuning cream, hover lebih gelap |
| `ghost` | Transparan, text biru saat hover |

### Animasi

- Semua section pakai `framer-motion` `whileInView` dengan `once: true`
- Navbar indicator aktif pakai `layoutId="navbar-indicator"` (spring animation)
- Hero pakai `useScroll` + `useTransform` untuk parallax fade saat scroll
- ImpactBanner angka statistik menggunakan `AnimatedNumber` — count-up saat masuk viewport

---

## State & Behavior

- **Navbar**: `isScrolled` → berubah style saat scroll > 20px. `activeSection` → diperbarui berdasarkan posisi scroll. `isMobileMenuOpen` → toggle hamburger.
- **ProgramCard**: gambar masih `null` (belum ada aset program). Placeholder teks "[Aset Gambar Belum Ada]".
- **ArticlesAndRecruitment**: artikel masih statis/hardcoded dengan placeholder `[Gambar Kosong]`.
- **ImpactBanner**: gambar relawan pop-out dari bawah banner di layar XL.

---

## Hal yang Belum Ada / Perlu Dikerjakan

- Section `#kontak` belum dibuat
- Gambar untuk masing-masing program (8 program) masih kosong (`image: null`)
- Gambar artikel masih placeholder
- Semua fitur CTA masih maintenance — belum ada routing/halaman baru
- Tidak ada state management eksternal (Redux/Zustand) — semua state lokal
- Tidak ada backend / API call

---

## ⚠️ Aturan Wajib untuk Agent

Section ini berisi aturan yang **HARUS diikuti** oleh agent setiap kali menambahkan atau memodifikasi aset di project ini.

### 📦 Kompresi Aset — WAJIB Sebelum Digunakan

**Setiap kali menambahkan file gambar baru ke `src/assets/`, agent WAJIB mengompres file tersebut terlebih dahulu sebelum menggunakannya di komponen manapun.**

#### Untuk file SVG — gunakan `svgo`:
```bash
# Kompresi satu file SVG (overwrite langsung)
npx svgo "src/assets/nama-file.svg"

# Kompresi beberapa file SVG sekaligus
npx svgo "src/assets/file1.svg" "src/assets/file2.svg"

# Kompresi seluruh folder assets
npx svgo --folder src/assets
```

#### Untuk file PNG/JPG — gunakan `sharp-cli` atau `imagemin`:
```bash
# Kompresi PNG
npx sharp-cli -i "src/assets/gambar.png" -o "src/assets/gambar.png"

# Atau gunakan squoosh-cli
npx @squoosh/cli --oxipng auto "src/assets/gambar.png"
```

#### Ukuran aset yang direkomendasikan:
| Tipe File | Ukuran Maks (setelah kompresi) |
|-----------|--------------------------------|
| SVG ilustrasi besar | < 80 KB |
| SVG ikon kecil | < 5 KB |
| PNG logo | < 30 KB |
| PNG/JPG gambar konten | < 150 KB |

> **Kenapa ini penting?** SVG yang tidak dioptimasi bisa berukuran 100KB+ padahal setelah kompresi bisa turun 50–70%. Ini langsung mempengaruhi First Contentful Paint (FCP) dan pengalaman pengguna di koneksi lambat.

---

## ⚡ Optimasi Performa (Riwayat Perubahan)

Optimasi berikut telah diterapkan pada **3 Juni 2026** untuk mempercepat loading di Netlify:

### 1. Google Fonts — Pindah ke `<link>` Preconnect
- **Sebelum**: `@import url(...)` di `index.css` → render-blocking
- **Sesudah**: `<link rel="preconnect">` + `<link rel="stylesheet">` di `index.html` → non-blocking
- File yang diubah: `index.html`, `src/index.css`

### 2. Lazy Loading Section dengan `React.lazy` + `Suspense`
- **Sebelum**: Semua section di-import statik → seluruh bundle diload sekaligus
- **Sesudah**: `Hero` saja yang statik, sisanya `lazy()` → halaman tampil lebih cepat
- Skeleton loader (bola bouncing) ditampilkan saat section sedang diload
- File yang diubah: `src/App.jsx`

### 3. Build Optimization — Manual Chunk Splitting
- **Sebelum**: Satu bundle besar berisi React + Framer Motion + semua komponen
- **Sesudah**: Bundle dipecah menjadi chunk terpisah:
  - `vendor-react` → React core (bisa di-cache browser jangka panjang)
  - `vendor-framer` → Framer Motion (hanya diload saat dibutuhkan)
  - `vendor-lucide` → Lucide Icons
  - Tiap section menjadi chunk kecil sendiri (~1–8 KB)
- File yang diubah: `vite.config.js`

### 4. Kompresi SVG dengan `svgo`

| File | Sebelum | Sesudah | Hemat |
|------|---------|---------|-------|
| `registration.svg` | 123 KB | 51 KB | **−59%** |
| `user 3.svg` | 2.8 KB | 0.88 KB | **−69%** |
| `globe.svg` | 2.6 KB | 0.85 KB | **−67%** |
| `love-3.svg` | 0.9 KB | 0.4 KB | **−57%** |
| `creative team.svg` | 126 KB | 105 KB | **−17%** |
| `family.svg` | 85 KB | 71 KB | **−14%** |

### 5. SEO & HTML
- Tambah `lang="id"` pada tag `<html>`
- Tambah `<meta name="description">` di `index.html`

---

## Kontak Yayasan (data di Footer)

- **Email**: hello@binarcommunity.org
- **Telepon**: 0812-3456-7890
- **Instagram**: @binar.community
