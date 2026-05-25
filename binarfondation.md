# Binar Fondation - Project Context & Guidelines

Dokumen ini berfungsi sebagai panduan (clue) bagi AI Agent (atau developer lain) untuk memahami konteks, struktur, aturan, dan tujuan dari proyek website Binar Fondation.

##  Deskripsi Proyek
Proyek ini adalah website *company profile* untuk **Yayasan Binar Community (Binar Fondation)**. Website ini dibangun hanya untuk *frontend (frontend-only)* dan dikonfigurasi untuk proses *deployment* yang mulus ke **Netlify**. Yayasan ini berfokus pada pendampingan anak dan remaja Indonesia agar sehat mental, berani berbagi, dan tumbuh menjadi versi terbaik mereka.

##  Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (dengan konfigurasi standar v4)
- **Icons & Animations:** Lucide React & Framer Motion (`framer-motion` digunakan untuk animasi *layoutId* yang halus).
- **Deployment:** Netlify

##  Struktur Folder Utama
- `src/components/`: Kumpulan komponen UI yang dapat digunakan kembali dan *section* halaman.
- `src/assets/`: Tempat penyimpanan aset statis seperti gambar ilus, logo, dan SVG.
- `src/App.jsx`: Titik masuk utama (*entry point*) tempat semua seksi digabungkan secara berurutan.

##  Daftar Komponen Utama
1. **Button (`Button.jsx`)**
   - Komponen tombol fleksibel dengan varian `primary`, `outline`, `ghost`, dan `accent`.
2. **Navbar (`Navbar.jsx`)**
   - Menempel di bagian atas layar (`sticky/fixed`, `z-50`).
   - Berfungsi sebagai navigasi internal dengan sistem *smooth scroll* asli browser.
   - Menggunakan efek garis bawah aktif (*active indicator*) yang bergeser secara halus dengan `<motion.span layoutId="navbar-indicator">` dari `framer-motion`.
3. **Hero / Beranda (`Hero.jsx`)**
   - Dirancang agar memenuhi tinggi layar (`h-screen`). Memiliki masking memudar (*fade-out mask*) pada foto manusia agar menyatu dengan latar belakang. (`id="beranda"`)
4. **Tentang & Program (`About.jsx` & `Programs.jsx`)**
   - Seksi konten standar. (`id="tentang-kami"` & `id="program"`)
5. **Impact Banner (`ImpactBanner.jsx`)**
   - Spanduk biru yang memuat data statistik (kegiatan, penerima, relawan).
   - **Penting:** Terdapat gambar (*pop-out image*) di sebelah kanan yang secara eksplisit dipaksa membesar menggunakan ukuran statis (seperti `w-[480px]`) agar menembus/melebihi batas kontainer biru tersebut.
6. **Artikel & Open Recruitment (`ArticlesAndRecruitment.jsx`)**
   - Menggunakan layout `grid-cols-3`. Kiri (2 kolom) untuk artikel (`id="edukasi"`), Kanan (1 kolom) untuk kotak *recruitment* dengan latar biru super muda (`id="relawan"`).
7. **Support / Donasi (`SupportBanner.jsx`)**
   - Spanduk kuning pucat dengan tombol CTA donasi (`id="donasi"`).
8. **Footer (`Footer.jsx`)**
   - Menggunakan logo "B Logo." asli (jangan diganti teks *stylized* kecuali diminta eksplisit). Terdapat navigasi dan kontak (`id="kontak"`).

##  ATURAN: Boleh Dilakukan (Do's)
- **Gunakan ID yang Sama dengan Menu:** Agar navigasi *smooth scroll* berfungsi sempurna, pastikan setiap *section* (Hero, Program, Footer, dll) memiliki properti `id` yang sama persis dengan `href` pada konfigurasi `navLinks` di Navbar.
- **Gambar Pop-out:** Jika diminta membuat gambar membesar/meluap ke luar kotak, jangan gunakan `max-w`. Gunakan lebar pasti (`w-[400px] xl:max-w-none`) agar gambar benar-benar bisa lebih besar dari batas alami file-nya.
- **Gunakan SVG Inline untuk Ikon Eror:** Jika paket ikon seperti `lucide-react` melempar *error build* (contoh: ekspor `Instagram` tidak ditemukan karena versi lawas), segera ganti dengan kode *inline SVG* murni untuk mencegah *blank screen*.

##  ATURAN: Tidak Boleh Dilakukan (Don'ts)
- **Jangan Membuat Fitur Backend:** Proyek ini dideklarasikan sebagai *"frontend doang"*. Jangan membangun fitur berbasis server atau API eksternal.
- **Jangan Menggunakan `import React`:** Proyek berjalan di Vite (React 17+).
- **Jangan Gunakan Padding Kanan/Kiri Raksasa untuk Membatasi Teks:** Jika teks di sebuah kontainer terlalu panjang (seperti di `ImpactBanner`), batasi dengan membungkus teks menggunakan `w-[75%]` atau `max-w-2xl` daripada menggunakan *padding* berlebihan (`pr-[500px]`) yang akan merusak *layout* saat resolusi berubah.
