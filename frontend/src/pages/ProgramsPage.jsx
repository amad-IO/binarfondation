import { useState, useEffect } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import { 
    Building2, GraduationCap, Image as ImageIcon, MessagesSquare, Sprout, UsersRound, 
    Heart, Sparkles, Calendar, Compass, Trophy, Gift, Target, 
    HelpCircle, BookOpen, School, HandHeart, Handshake
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// 1. Menambahkan properti 'image' pada masing-masing divisi
// Silakan ganti path string di bawah ini sesuai dengan lokasi aset gambar aktual Anda
const DIVISIONS = [
    { 
        title: 'Bi-Main', 
        description: 'Membuat aturan, kebijakan, dan memastikan fasilitas untuk Bi-Family terpenuhi.', 
        icon: Building2, 
        color: 'bg-blue-50 text-blue-600',
        image: '/divisions-compressed/bi-main.webp' 
    },
    { 
        title: 'Teman Sembuh', 
        description: 'Penyediaan fasilitas dukungan kesehatan mental melalui pendekatan peer support oleh Bi-Friend.', 
        icon: MessagesSquare, 
        color: 'bg-rose-50 text-rose-500',
        image: '/divisions-compressed/teman-sembuh.webp' 
    },
    { 
        title: 'Teman Tumbuh', 
        description: 'Konten edukasi seputar kesehatan mental dan pendidikan, termasuk upgrading class untuk Bi-Family.', 
        icon: GraduationCap, 
        color: 'bg-emerald-50 text-emerald-600',
        image: '/divisions-compressed/teman-tumbuh.webp' 
    },
    { 
        title: 'Binar Goes To You', 
        description: 'Mendampingi chapter, mengadakan pengurus chapter, dan menjembatani kolaborasi.', 
        icon: UsersRound, 
        color: 'bg-yellow-50 text-yellow-600',
        image: '/divisions-compressed/binar-goes-to-you.webp' 
    },
    { 
        title: 'Med-U', 
        description: 'Mengabadikan momen perjalanan Binar Foundation dan mempublikasikannya ke berbagai platform.', 
        icon: ImageIcon, 
        color: 'bg-violet-50 text-violet-600',
        image: '/divisions-compressed/med-u.webp' 
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
    { title: 'Mengajar Anak Marginal', desc: 'Program unggulan mendampingi adik-adik di wilayah marginal seputar kesehatan mental, karakter, dan akademik.', icon: BookOpen, color: 'bg-orange-100 text-orange-600' },
    { title: 'Binar Goes to School', desc: 'Kolaborasi dengan berbagai sekolah untuk mengedukasi siswa seputar pembentukan karakter dan kesehatan mental.', icon: School, color: 'bg-violet-100 text-violet-600' },
    { title: 'Binar Charity & Donasi', desc: 'Open donasi berkala untuk terus bertahan dan memberikan dampak nyata bagi ruang lingkup sekitar.', icon: HandHeart, color: 'bg-red-100 text-red-500' },
];

const LOGOS = [
    '/logos-compressed/bemfapsi.webp',
    '/logos-compressed/ddv-riau.webp',
    '/logos-compressed/fapsi.webp',
    '/logos-compressed/fisip-unair.webp',
    '/logos-compressed/geng-gemes.webp',
    '/logos-compressed/hmp-gizi-unesa.webp',
    '/logos-compressed/hmps-bki-uin-riau.webp',
    '/logos-compressed/ilimac-peduli.webp',
    '/logos-compressed/imm-uinsa.webp',
    '/logos-compressed/putra-putri-unesa.webp',
    '/logos-compressed/ruang-bertumbuh.webp',
    '/logos-compressed/sedjiwa.webp',
    '/logos-compressed/sekolah-budaya.webp',
    '/logos-compressed/superindo.webp',
    '/logos-compressed/ukm-peduli-kemanusiaan.webp',
    '/logos-compressed/unesa.webp',
];

const ProgramsPage = () => {
    const [activeTab, setActiveTab] = useState('internal');
    const [sanityLogos, setSanityLogos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const logos = await client.fetch(`*[_type == "collaboration"] | order(_createdAt desc)`);
                setSanityLogos(logos);
            } catch (error) {
                console.error("Error fetching Sanity data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <PageHeader
                className="bg-white pt-28 lg:pt-32 pb-8"
                eyebrow="Program"
                title="Integrasi Program, Divisi, dan Kolaborasi untuk Aksi Nyata"
            />

            <section className="w-full bg-white pb-16 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16 lg:space-y-24">
                    
                    {/* SECTION 1: DIVISI UTAMA DENGAN GAMBAR */}
                    <div>
                        <div className="mb-6 lg:mb-8">
                            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Bagian di Binar</span>
                            <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Divisi Utama</h2>
                        </div>

                        <div className="-mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slideToClickedSlide={true}
                                loop={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 5,
                                    stretch: 0,
                                    depth: 150,
                                    modifier: 2,
                                    slideShadows: true,
                                }}
                                modules={[EffectCoverflow]}
                                className="w-full py-12"
                            >
                                {[...DIVISIONS, ...DIVISIONS, ...DIVISIONS].map(({ title, description, icon: Icon, color, image }, idx) => (
                                    <SwiperSlide key={`${title}-${idx}`} className="!w-[80vw] sm:!w-[340px] lg:!w-[380px]">
                                        <div className="h-full group rounded-2xl border border-slate-100 bg-white shadow-xl overflow-hidden flex flex-col justify-between">
                                            
                                            {/* AREA GAMBAR DI ATAS TULISAN */}
                                            <div className="w-full aspect-[21/10] bg-slate-100 relative overflow-hidden border-b border-slate-50">
                                                <img 
                                                    src={image} 
                                                    alt={`Ilustrasi ${title}`} 
                                                    draggable="false"
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102 select-none"
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
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* SECTION 2: PROGRAM KAMI (TABS DENGAN SWIPER) */}
                    <div className="rounded-[2rem] overflow-hidden shadow-sm" style={{ background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDF4 100%)' }}>
                        <div className="p-6 lg:p-10">
                            <div className="flex flex-row items-center justify-between gap-2 sm:gap-6 mb-6 lg:mb-8">
                                <div>
                                    <span className="hidden sm:inline-block bg-white text-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm mb-3">Dampak Nyata</span>
                                    <h2 className="text-lg sm:text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Program Kami</h2>
                                </div>
                                <div className="flex p-1 sm:p-1.5 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 relative z-10 shrink-0">
                                    <button 
                                        onClick={() => setActiveTab('internal')}
                                        className={`px-3 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-sm font-bold rounded-lg sm:rounded-xl transition-all ${activeTab === 'internal' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                                    >
                                        Internal
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('external')}
                                        className={`px-3 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-sm font-bold rounded-lg sm:rounded-xl transition-all ${activeTab === 'external' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                                    >
                                        Eksternal
                                    </button>
                                </div>
                            </div>
                            
                            <div className="-mx-6 px-6 sm:-mx-10 sm:px-10 overflow-hidden">
                                <Swiper
                                    key={activeTab} // Force re-render when tab changes
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slideToClickedSlide={true}
                                    loop={true}
                                    navigation={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 50,
                                        modifier: 1,
                                        scale: 0.95,
                                        slideShadows: false,
                                    }}
                                    modules={[EffectCoverflow, Navigation]}
                                    className="w-full py-8 lg:py-10"
                                    style={{
                                        '--swiper-navigation-size': '24px',
                                        '--swiper-navigation-color': 'rgba(15, 23, 42, 0.25)' // Transparan dan halus
                                    }}
                                >
                                    {[...(activeTab === 'internal' ? INTERNAL_PROGRAMS : EXTERNAL_PROGRAMS), ...(activeTab === 'internal' ? INTERNAL_PROGRAMS : EXTERNAL_PROGRAMS), ...(activeTab === 'internal' ? INTERNAL_PROGRAMS : EXTERNAL_PROGRAMS)].map((prog, idx) => {
                                        const Icon = prog.icon;
                                        return (
                                            <SwiperSlide key={`${prog.title}-${idx}`} className="!w-[70vw] sm:!w-[280px] lg:!w-[320px]">
                                                <div className="h-full bg-white p-5 lg:p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center transition-all duration-300">
                                                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${prog.color}`}>
                                                        <Icon size={24} className="stroke-[2]" />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{prog.title}</h3>
                                                    <p className="text-sm leading-relaxed text-slate-500">{prog.desc}</p>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* SECTION: TEMAN SEMBUH (LAYANAN KONSELING) */}
                    <div id="teman-sembuh" className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-8">
                        {/* KOLOM KIRI: Deskripsi & Tombol */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                    <Heart size={16} className="fill-blue-600" />
                                </span>
                                <h2 className="text-xl font-bold text-slate-900">Konseling Teman Sembuh</h2>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed lg:max-w-md mb-2">
                                Dukungan kesehatan mental <i>peer support</i> (sebaya) bersama Bi-Friend terlatih, dengan jaminan kerahasiaan penuh untuk Anda.
                            </p>
                            <a 
                                href="https://wa.me/6281371152087" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-sm w-full sm:w-fit"
                            >
                                <MessagesSquare size={16} />
                                Daftar Sekarang
                            </a>
                        </div>

                        {/* KOLOM KANAN: 3 Kotak Susun */}
                        <div className="flex flex-col gap-3">
                            <div className="bg-white p-4 rounded-xl border border-blue-50 shadow-xs flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">Hubungi Admin</h3>
                                    <p className="text-xs text-slate-500 leading-tight">Kirim pesan singkat ke Elsa Nabila.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-blue-50 shadow-xs flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">Penjadwalan</h3>
                                    <p className="text-xs text-slate-500 leading-tight">Pilih jadwal luang konseling.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-blue-50 shadow-xs flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">Sesi Dimulai</h3>
                                    <p className="text-xs text-slate-500 leading-tight">Sesi konseling online dimulai.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: MITRA KOLABORASI */}
                    <div>
                        <div className="mb-6 lg:mb-8">
                            <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Jaringan Gerakan</span>
                            <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Mitra Kolaborasi</h2>
                        </div>
                        
                        {/* Kumpulan Logo Kolaborasi */}
                        <div className="mb-10 lg:mb-12 flex flex-wrap justify-center gap-4 lg:gap-6">
                            {/* Logo dari Sanity (Dinamis) */}
                            {sanityLogos.map((logo, idx) => (
                                <div key={`sanity-${idx}`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-white hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center p-2 sm:p-3 relative group">
                                    {logo.logo && <img src={urlFor(logo.logo).url()} alt={logo.name || `Mitra`} className="w-full h-full object-contain rounded-full mix-blend-multiply" />}
                                    <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                </div>
                            ))}
                            
                            {/* Logo Lama (Hardcoded) */}
                            {LOGOS.map((src, idx) => (
                                <div key={idx} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-white hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center p-2 sm:p-3 relative group">
                                    <img src={src} alt={`Mitra Kolaborasi ${idx + 1}`} className="w-full h-full object-contain rounded-full mix-blend-multiply" />
                                    <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* SECTION 4: CHAPTER */}
                    <div className="rounded-[2rem] overflow-hidden shadow-sm" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)' }}>
                        <div className="p-6 lg:p-10">
                            <div className="mb-8">
                                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">Chapter</span>
                                <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Perluasan Gerakan ke Daerah</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {CHAPTERS.map(({ title, items, icon: Icon }) => (
                                    <div key={title} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">
                                            <Icon size={20} className="stroke-[2.25]" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-4">{title}</h3>
                                        <ul className="space-y-3">
                                            {items.map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                                                    <span className="text-sm text-slate-600 leading-normal">{item}</span>
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