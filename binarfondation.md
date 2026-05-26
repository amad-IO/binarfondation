# Yayasan Binar Community - Project Context & Guidelines

Dokumen ini berfungsi sebagai panduan (clue) bagi AI Agent (atau developer lain) untuk memahami konteks, struktur, aturan, dan tujuan dari proyek website Binar Community.

## Deskripsi Proyek
Proyek ini adalah website *company profile* untuk **Yayasan Binar Community**. Website ini dibangun murni di sisi *frontend (frontend-only)*. Yayasan ini berfokus pada pendampingan anak dan remaja Indonesia agar sehat mental, berani berbagi, dan tumbuh menjadi versi terbaik mereka.

## Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (Mobile-First approach)
- **Icons & Animations:** Lucide React & Framer Motion (digunakan untuk scroll animations, indikator navbar, hamburger menu, dan efek *count-up* angka).
- **Deployment target:** Frontend static hosting (e.g. Netlify / Vercel).

## Struktur Folder Utama
- `src/components/`: Kumpulan komponen UI yang modular dan *section* halaman.
- `src/assets/`: Tempat penyimpanan aset statis seperti gambar, logo, ilustrasi, dan SVG.
- `src/App.jsx`: Titik masuk utama (*entry point*) tempat semua seksi (*section*) digabungkan secara berurutan.

## Daftar Komponen Utama
1. **Button (`Button.jsx`)**
   - Komponen tombol kustom dengan varian `primary`, `outline`, `ghost`, dan `accent`.
2. **Navbar (`Navbar.jsx`)**
   - Tipe *sticky/fixed* di bagian atas layar (`z-50`).
   - Berfungsi sebagai navigasi *smooth scroll* antar section.
   - Menggunakan efek garis bawah aktif (*active indicator*) menggunakan `<motion.span>` dari `framer-motion`.
   - **Mobile-Responsive:** Memiliki menu Hamburger untuk tampilan *smartphone* dengan efek dropdown animasi mulus menggunakan `AnimatePresence`.
3. **Hero / Beranda (`Hero.jsx`)**
   - Tampilan pembuka yang dirancang agar memenuhi *viewport* dengan komposisi dua sisi pada desktop (Teks di kiri, Gambar & Bubble "#Berbinar Untuk Bersinar" di kanan). Pada *mobile*, konten menumpuk ke bawah (Stack).
4. **Tentang & Program (`About.jsx` & `Programs.jsx`)**
   - `About`: Konten 4 kotak berjajar pada desktop, menyusut menjadi 1 kolom sejajar vertikal pada mobile. Animasi muncul berurutan (*staggered fade-up*).
   - `Programs`: Kartu program dengan layout slider *horizontal scroll* (`overflow-x-auto snap-x`) yang mudah di-*swipe* pada perangkat mobile.
5. **Impact Banner (`ImpactBanner.jsx`)**
   - Spanduk biru memuat data statistik yayasan.
   - **Fitur Khusus:** Menggunakan komponen `AnimatedNumber` custom dengan *framer-motion* untuk efek menghitung angka dari 0 saat masuk ke dalam layar (*in-view*).
   - Memiliki gambar relawan (*pop-out image*) di sisi kanan.
6. **Footer (`Footer.jsx`)**
   - Tata letak menu tautan dan kontak yang menggunakan **Flexbox** (alih-alih sistem *Grid* kaku) agar tautan berkumpul merapat ke kiri mendekati logo dan terlihat natural di desktop. Menumpuk rapi di tampilan mobile.

## ATURAN: Boleh Dilakukan (Do's)
- **Utamakan Mobile-First (Responsive):** Semua komponen HARUS dirancang dengan pola *Mobile-First*. Pastikan menggunakan kelas `sm:`, `md:`, `lg:`, `xl:` pada Tailwind agar tampilan tetap estetis, tidak terpotong, dan nyaman di-klik di *smartphone*.
- **Gunakan ID yang Sama dengan Menu:** Agar navigasi *smooth scroll* berfungsi sempurna, pastikan setiap *section* memiliki atribut `id` (contoh `id="tentang-kami"`) yang cocok dengan `href` pada `navLinks` di `Navbar.jsx`.
- **Gunakan Flexbox untuk Layout Fluid:** Prioritaskan struktur flexbox (`flex-wrap`, `justify-start/between`) pada deretan elemen yang jumlahnya tidak menentu atau teks panjang (seperti *Footer*) untuk mencegah jarak kosong yang canggung.
- **Gambar Meluap (Pop-out):** Gunakan lebar statis (misal `w-[400px] xl:max-w-none`) untuk membebaskan gambar dari batasan lebar wadah induknya.

## ATURAN: Tidak Boleh Dilakukan (Don'ts)
- **Jangan Membuat Fitur Backend:** Proyek ini *frontend-only*. Jangan membuat logika *server-side* atau panggilan API backend sungguhan tanpa instruksi spesifik.
- **Jangan Menggunakan Padding Kanan/Kiri Paksa untuk Margin:** Jika teks di sebuah kontainer perlu dibatasi lebarnya, gunakan properti pembatas dimensi seperti `max-w-2xl` atau persentase `w-[85%]`. Jangan menggunakan nilai padding raksasa (contoh `pr-[500px]`) karena akan langsung merusak layout pada perangkat berlayar sempit.
- **Jangan Impor `React`:** Gunakan versi standar *React 17+* (Vite), tidak perlu ada `import React from 'react';` kecuali sangat dibutuhkan oleh *hooks* spesifik pihak ketiga.
