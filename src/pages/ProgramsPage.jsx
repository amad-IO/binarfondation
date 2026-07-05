import { useState } from 'react';
import { 
    Building2, GraduationCap, Image as ImageIcon, MessagesSquare, Sprout, UsersRound, 
    Heart, Sparkles, Calendar, Compass, Trophy, Gift, Target, 
    HelpCircle, BookOpen, School, HandHeart, Handshake
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

// 1. Menambahkan properti 'image' pada masing-masing divisi
// Silakan ganti path string di bawah ini sesuai dengan lokasi aset gambar aktual Anda
const DIVISIONS = [
    { 
        title: 'Bi-Main', 
        description: 'Membuat aturan, kebijakan, dan memastikan fasilitas untuk Bi-Family terpenuhi.', 
        icon: Building2, 
        color: 'bg-blue-50 text-blue-600',
        image: '/10.jpg' 
    },
    { 
        title: 'Teman Sembuh', 
        description: 'Penyediaan fasilitas dukungan kesehatan mental melalui pendekatan peer support oleh Bi-Friend.', 
        icon: MessagesSquare, 
        color: 'bg-rose-50 text-rose-500',
        image: '/9.jpg' 
    },
    { 
        title: 'Teman Tumbuh', 
        description: 'Konten edukasi seputar kesehatan mental dan pendidikan, termasuk upgrading class untuk Bi-Family.', 
        icon: GraduationCap, 
        color: 'bg-emerald-50 text-emerald-600',
        image: '/11.jpg' 
    },
    { 
        title: 'Binar Goes To You', 
        description: 'Mendampingi chapter, mengadakan pengurus chapter, dan menjembatani kolaborasi.', 
        icon: UsersRound, 
        color: 'bg-yellow-50 text-yellow-600',
        image: '/8.jpg' 
    },
    { 
        title: 'Med-U', 
        description: 'Mengabadikan momen perjalanan Binar Foundation dan mempublikasikannya ke berbagai platform.', 
        icon: ImageIcon, 
        color: 'bg-violet-50 text-violet-600',
        image: '/7.jpg' 
    },
];

const CHAPTERS = [
    { title: 'Binar Chapter Jatim', items: ['Rumah Belajar Kampung Pemulung', 'Rumah Belajar Gang Dolly', 'Rumah Belajar KBM Petojo'], icon: Sprout },
    { title: 'Binar Chapter Riau', items: ['Rumah Belajar Al-Muzakki'], icon: Sprout },
];

const INTERNAL_PROGRAMS = [
    { title: 'Bi-Friend', desc: 'Teman curhat sebaya yang siap menemani suka duka perjalanan kamu agar tidak berjalan sendirian.', icon: Heart, color: 'bg-rose-100 text-rose-500' },
    { title: 'Upgrading Bi-Family', desc: 'Kelas pengembangan diri (soft skills, FGD, outbonding) yang biasa disertai dengan butterfly hug.', icon: Sparkles, color: 'bg-amber-100 text-amber-600' },
    { title: 'Rapat Kenegaraan', desc: 'Rapat pembahasan program kerja yang dilaksanakan 3x dalam 1 masa periode pengurusan.', icon: Calendar, color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Fun Activity', desc: 'Aktivitas menarik dan seru seperti Picnic Party, games, CFD, dan masih banyak lagi.', icon: Compass, color: 'bg-emerald-100 text-emerald-600' },
    { title: 'Binar Berprestasi', desc: 'Pendampingan intensif minat bakat seperti kelas pendampingan ajang lomba, beasiswa, dan lainnya.', icon: Trophy, color: 'bg-purple-100 text-purple-600' },
    { title: 'Anniversary Binar', desc: 'Perayaan kebahagiaan lembaran baru Binar Foundation disertai dengan Binar Awards dan Content Challenge.', icon: Gift, color: 'bg-pink-100 text-pink-500' },
    { title: 'Bi-Better', desc: 'Wadah apresiasi dan evaluasi pengurus, peri binar, dan Bi-Star untuk kebaikan bersama ke depan.', icon: Target, color: 'bg-sky-100 text-sky-600' },
];

const EXTERNAL_PROGRAMS = [
    { title: 'Konseling Gratis', desc: 'Layanan teman curhat sebaya online oleh mahasiswa/i psikologi yang berkompeten untuk Bi-Star.', icon: HelpCircle, color: 'bg-teal-100 text-teal-600' },
    { title: 'Edukasi Kesehatan Mental', desc: 'Mengedukasi Bi-star melalui konten edukatif, live instagram, podcast, hingga psikoedukasi offline.', icon: GraduationCap, color: 'bg-blue-100 text-blue-600' },
    { title: 'Mengajar Anak Marginal', desc: 'Program unggulan mendampingi adik-adip di wilayah marginal seputar kesehatan mental, karakter, dan akademik.', icon: BookOpen, color: 'bg-orange-100 text-orange-600' },
    { title: 'Binar Goes to School', desc: 'Kolaborasi dengan berbagai sekolah untuk mengedukasi siswa seputar pembentukan karakter dan kesehatan mental.', icon: School, color: 'bg-violet-100 text-violet-600' },
    { title: 'Binar Charity & Donasi', desc: 'Open donasi berkala untuk terus bertahan dan memberikan dampak nyata bagi ruang lingkup sekitar.', icon: HandHeart, color: 'bg-red-100 text-red-500' },
];

const PARTNERS = [
    { name: 'Universitas Negeri Surabaya', detail: 'Fakultas Psikologi, Sedjiwa, Putra Putri Unesa, dsb.' },
    { name: 'UIN Sunan Ampel Surabaya (UINSA)', detail: 'Kolaborasi program eksternal & akademisi' },
    { name: 'Ilimac Peduli', detail: 'Mitra aksi sosial dan keberlanjutan komunitas' },
    { name: 'Universitas Muhammadiyah Surabaya', detail: 'Sinergi riset, edukasi kesehatan mental & pengabdian' },
    { name: 'Sekolah Budaya Anak Gang Dolly Surabaya', detail: 'Lokasi implementasi program Rumah Belajar' }
];

const ProgramsPage = () => {
    const [activeTab, setActiveTab] = useState('internal');

    return (
        <>
            <PageHeader
                eyebrow="Program & Struktur"
                title="Program, divisi, dan chapter yang bergerak bersama"
                description="Halaman ini merangkum cakupan kerja Binar Foundation, dari program inti sampai struktur komunitas di daerah."
            />

            <section className="w-full bg-white pb-16 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16 lg:space-y-24">
                    
                    {/* SECTION 1: DIVISI UTAMA DENGAN GAMBAR */}
                    <div>
                        <div className="mb-6 lg:mb-8">
                            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Bagian di Binar</span>
                            <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Divisi Utama</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
                            {DIVISIONS.map(({ title, description, icon: Icon, color, image }) => (
                                <div key={title} className="group rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                                    
                                    {/* 2. AREA GAMBAR DI ATAS TULISAN */}
                                    <div className="w-full aspect-[21/10] bg-slate-100 relative overflow-hidden border-b border-slate-50">
                                        <img 
                                            src={image} 
                                            alt={`Ilustrasi ${title}`} 
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                                        />
                                        {/* Badge Ikon Mengambang Di Sudut Gambar */}
                                        <div className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl shadow-xs border border-white/20 backdrop-blur-md ${color}`}>
                                            <Icon size={18} className="stroke-[2.25]" />
                                        </div>
                                    </div>

                                    {/* AREA TEKS */}
                                    <div className="p-5 lg:p-6 flex-grow flex flex-col justify-start">
                                        <h3 className="text-base font-extrabold text-slate-900">{title}</h3>
                                        <p className="mt-1.5 text-xs lg:text-sm leading-relaxed text-slate-500">{description}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 2: PROGRAM KAMI */}
                    <div className="rounded-[2rem] overflow-hidden shadow-sm" style={{ background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDF4 100%)' }}>
                        <div className="p-6 lg:p-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                                <div>
                                    <span className="inline-block bg-white text-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm mb-3">Dampak Nyata</span>
                                    <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Program Kami</h2>
                                </div>
                                <div className="flex p-1.5 bg-white rounded-2xl shadow-sm max-w-xs border border-slate-100">
                                    <button 
                                        onClick={() => setActiveTab('internal')}
                                        className={`flex-1 px-5 py-2.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'internal' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                                    >
                                        Internal
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('external')}
                                        className={`flex-1 px-5 py-2.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'external' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                                    >
                                        Eksternal
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
                                {(activeTab === 'internal' ? INTERNAL_PROGRAMS : EXTERNAL_PROGRAMS).map((prog) => {
                                    const Icon = prog.icon;
                                    return (
                                        <div key={prog.title} className="bg-gradient-to-br from-white via-white to-slate-50 p-5 lg:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                            <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${prog.color}`}>
                                                <Icon size={20} className="stroke-[2]" />
                                            </div>
                                            <h3 className="text-base font-bold text-slate-900 mb-2">{prog.title}</h3>
                                            <p className="text-sm leading-relaxed text-slate-500">{prog.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: MITRA KOLABORASI */}
                    <div>
                        <div className="mb-6 lg:mb-8">
                            <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Jaringan Gerakan</span>
                            <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Mitra Kolaborasi</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                            {PARTNERS.map((partner, index) => (
                                <div key={index} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-white to-emerald-50/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 items-start">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                        <Handshake size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{partner.name}</h4>
                                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{partner.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 4: CHAPTER */}
                    <div className="rounded-[2rem] overflow-hidden shadow-sm" style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 60%, #60A5FA 100%)' }}>
                        <div className="p-6 lg:p-10">
                            <div className="mb-8">
                                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">Chapter</span>
                                <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-white tracking-tight">Perluasan Gerakan ke Daerah</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {CHAPTERS.map(({ title, items, icon: Icon }) => (
                                    <div key={title} className="rounded-2xl bg-white/15 border border-white/25 backdrop-blur-sm p-6">
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">
                                            <Icon size={20} className="stroke-[2.25]" />
                                        </div>
                                        <h3 className="text-base font-bold text-white mb-4">{title}</h3>
                                        <ul className="space-y-3">
                                            {items.map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                                                    <span className="text-sm text-blue-100 leading-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProgramsPage;