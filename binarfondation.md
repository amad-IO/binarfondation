# Binar Fondation - Project Context & Guidelines

Dokumen ini berfungsi sebagai panduan (clue) bagi AI Agent (atau developer lain) untuk memahami konteks, struktur, aturan, dan tujuan dari proyek website Binar Fondation.

##  Deskripsi Proyek
Proyek ini adalah website *company profile* untuk **Yayasan Binar Community (Binar Fondation)**. Website ini dibangun hanya untuk *frontend (frontend-only)* dan dikonfigurasi untuk proses *deployment* yang mulus ke **Netlify**. Yayasan ini berfokus pada pendampingan anak dan remaja Indonesia agar sehat mental, berani berbagi, dan tumbuh menjadi versi terbaik mereka.

##  Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (dengan konfigurasi standar)
- **Icons & Animations:** Lucide React & Framer Motion (jika diperlukan)
- **Deployment:** Netlify

##  Struktur Folder Utama
- `src/components/`: Kumpulan komponen UI yang dapat digunakan kembali (*reusable*).
- `src/assets/`: Tempat penyimpanan aset statis seperti logo, gambar ilustrasi (`gambar 1.png`), dan bentuk background SVG (`curve1.svg`, `love.svg`, `love 1.svg`).
- `src/pages/`: Folder untuk halaman jika nantinya menggunakan router (saat ini masih *single-page* di `App.jsx`).
- `src/App.jsx`: Titik masuk utama (*entry point*) tempat semua seksi (Beranda/Hero, Tentang Kami, dll) digabungkan.

##  Daftar Komponen Utama
1. **Button (`Button.jsx`)**
   - Komponen tombol fleksibel dengan properti `variant`.
   - Varian yang didukung: 
     - `primary` (biru solid)
     - `outline` (garis tepi biru)
     - `ghost` (teks saja dengan *hover effect*)
     - `accent` (latar krem dengan teks coklat, khusus digunakan untuk tombol donasi/spesial).
   - Mendukung penyisipan ikon (seperti ikon SVG) melalui *children*.
2. **Navbar (`Navbar.jsx`)**
   - Menempel di bagian atas layar (`sticky/fixed`) dan berada di layer terdepan (`z-50`).
   - Berfungsi sebagai navigasi internal halaman dengan sistem *smooth scroll* (menggunakan *anchor links* seperti `#beranda`, `#tentang-kami`).
3. **Hero / Beranda (`Hero.jsx`)**
   - Dirancang agar memenuhi tinggi layar (`h-screen`).
   - Sistem tata letak adaptif: Di HP berurutan (Teks -> Gambar -> Tombol), sedangkan di Desktop terbagi dua kolom (Kiri: Teks & Tombol, Kanan: Gambar).

##  ATURAN: Boleh Dilakukan (Do's)
- **Gunakan Aset SVG Asli:** Untuk bentuk latar belakang yang kompleks (seperti gelombang), selalu `import` dan gunakan file `.svg` dari folder `assets`. Jangan mencoba membuat bentuk organik (*blob*) rumit menggunakan CSS murni karena tidak akan presisi.
- **Anchor Bottom untuk Gambar Terpotong:** Jika gambar objek/manusia terpotong rata di bagian bawah (contoh: `gambar 1.png`), pastikan menggunakan kelas Tailwind `items-end` atau `bottom-0`. Hal ini penting agar gambar menempel sempurna di garis bawah layar dan tidak terlihat "melayang".
- **Gunakan Komponen yang Ada:** Selalu panggil komponen `<Button />` dengan varian yang sesuai ketika membuat tombol baru, jangan membuat gaya CSS tombol dari awal di dalam halaman.
- **Mobile-First Responsiveness:** Gunakan urutan fleksibel (`order-1`, `order-2`) di Tailwind untuk memastikan susunan elemen enak dilihat di HP sebelum menyesuaikannya untuk layar Desktop.

##  ATURAN: Tidak Boleh Dilakukan (Don'ts)
- **Jangan Membuat Fitur Backend:** Proyek ini dideklarasikan sebagai *"frontend doang"*. Jangan menyarankan, mengonfigurasi, atau membangun fitur berbasis server (Node.js, database, API login backend, dsb).
- **Jangan Menggunakan `import React`:** Proyek berjalan di Vite (React 17+). Dilarang keras menulis `import React from 'react'` di atas file komponen karena akan memicu peringatan/linting error *(React is defined but never used)*. Cukup import *hooks* yang dibutuhkan seperti `import { useState } from 'react'`.
- **Jangan Menyisakan Celah Kosong di Bawah Layar Hero:** Kontainer bagian gambar tidak boleh memiliki padding bawah (`pb`) yang membuat gambar terpotong dan menciptakan ruang putih yang mengganggu estetika.
