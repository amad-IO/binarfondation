import { ArrowRight, BadgeCheck, Heart, Landmark, Sparkles, ShieldCheck, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const vision = 'Mewujudkan generasi muda Indonesia yang sehat mental, bertumbuh, dan mampu memberdayakan diri serta lingkungannya secara berkelanjutan.';

const missions = [
    'Menyediakan ruang edukasi dan layanan kesehatan mental yang inklusif, aman, dan mudah diakses.',
    'Meningkatkan kesadaran kesehatan mental melalui diskusi terbuka dan pendampingan empatik berbasis komunitas.',
    'Mendorong proses tumbuh dan pulih bersama melalui dukungan emosional, sosial, spiritual, dan konseling sebaya.',
    'Menghadirkan program pendidikan untuk anak marginal yang mengintegrasikan akademik, karakter, dan kesehatan mental.',
    'Mengembangkan gerakan kolaboratif ke berbagai daerah secara berkelanjutan.',
];

const coreValues = [
    { title: 'Nilai Moral', description: 'Menjunjung nilai baik agama & masyarakat.', icon: Landmark },
    { title: 'Etika', description: 'Berperilaku baik, terdidik, dan layak dicontoh.', icon: ShieldCheck },
    { title: 'Kebersamaan', description: 'Semangat tumbuh & saling menguatkan.', icon: Users },
    { title: 'Empati', description: 'Memahami, mendengar, & menguatkan tanpa menghakimi.', icon: Heart },
    { title: 'Integritas', description: 'Jujur, bertanggung jawab, & amanah.', icon: BadgeCheck },
    { title: 'Keberlanjutan', description: 'Program terarah, konsisten, & terus berkembang.', icon: Sparkles },
];

const AboutPage = () => {
    return (
        <>
            <PageHeader
                eyebrow="Tentang BINAR FOUNDATION"
                title="BINAR FOUNDATION"
                description="Membangun Generasi Emas Indonesia yang Sehat Mental & Berdaya"
            />

            <section className="w-full bg-slate-50/50 pb-20 lg:pb-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12 lg:space-y-16 pt-12">

                    {/* SEKSI 1: VISI & FILOSOFI NAMA (GRID SEIMBANG & RINGKAS) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        
                        {/* Box Kiri: Visi Utama — Ukuran Teks & Bingkai Gambar Diperkecil */}
                        <div className="lg:col-span-7 rounded-2xl border border-blue-100 bg-blue-50/40 p-5 lg:p-6 flex flex-col justify-between gap-4 shadow-sm">
                            <div>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <Sparkles className="text-blue-600" size={12} />
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Visi Utama Gerakan</p>
                                </div>
                                <h2 className="text-lg lg:text-2xl font-extrabold text-slate-950 leading-snug tracking-tight">
                                    "{vision}"
                                </h2>
                            </div>
                            
                            {/* Bingkai Gambar yang Ceper dan Proporsional (max-w-md) */}
                            <div className="rounded-xl overflow-hidden aspect-video bg-white p-1.5 border border-blue-100/60 shadow-2xs w-full max-w-md mx-auto lg:mx-0">
                                <img
                                    src="/10.jpg"
                                    alt="Kegiatan utama Binar"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Box Kanan: Tentang Binar & Komposisi Makna */}
                        <div className="lg:col-span-5 flex flex-col gap-4">
                            {/* Tentang Binar */}
                            <div className="rounded-2xl border border-slate-100 bg-white p-5 lg:p-6 shadow-2xs flex-1 flex flex-col justify-center">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-1.5">Tentang Binar</p>
                                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                                    Berawal dari Binar Community, sebuah komunitas yang lahir dari ketulusan hati pada tanggal 11 Desember 2024, kini kami telah berkiprah lebih luas.
                                    Pada tahun 2026 ini, Binar resmi menjadi yayasan: <span className="font-bold text-blue-600">BINAR FOUNDATION.</span>
                                </p>
                                <p className="mt-2 text-xs lg:text-sm text-slate-600 leading-relaxed">
                                    Berfokus pada penguatan kesehatan mental dan pendidikan untuk anak serta remaja di Indonesia.
                                </p>
                            </div>

                            {/* Sub Grid: Berbinar & Bersinar */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-2xs">
                                    <h3 className="text-xs font-bold text-slate-900 mb-1">Berbinar</h3>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">
                                        Mengekspresikan emosi mendalam, penuh kejujuran, dan tulus apa adanya menuju kebahagiaan.
                                    </p>
                                </div>
                                <div className="rounded-xl bg-blue-600 p-4 shadow-sm text-white relative overflow-hidden"
                                    style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }}>
                                    <h3 className="text-xs font-bold text-white mb-1">Bersinar</h3>
                                    <p className="text-[11px] text-blue-100 leading-relaxed">
                                        Diri yang selalu ingin bertumbuh, berdaya, dan mampu memberdayakan sekitar.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* SEKSI 2: MISI STRATEGIS DENGAN POLA GRAFIS */}
                    <div className="rounded-2xl bg-white border border-slate-100 p-6 lg:p-8 shadow-sm relative overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="lines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                                    <line x1="0" y1="0" x2="0" y2="20" stroke="#2563eb" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" h="100%" fill="url(#lines)" />
                        </svg>

                        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">Langkah Kerja</p>
                                    <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Misi Gerakan</h2>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed max-w-xs hidden xl:block">
                                    Implementasi program kerja terstruktur guna merealisasikan pilar-pilar utama yayasan secara transparan.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {missions.map((mission, index) => (
                                    <li key={mission} className="flex gap-4 rounded-xl bg-blue-50/40 p-4 border border-blue-100/40 items-start transition-all hover:bg-blue-50/80">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-[10px] font-bold text-white shadow-sm mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="text-xs lg:text-sm text-slate-700 leading-relaxed">{mission}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* SEKSI 3: CORE VALUES */}
                    <div className="rounded-2xl border border-slate-100 bg-white p-5 lg:p-8 shadow-2xs space-y-6">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">Core Values</p>
                                <h2 className="text-2xl lg:text-[2.35rem] font-extrabold text-slate-900 tracking-tight">Pedoman Arah Gerakan</h2>
                            </div>
                            <ArrowRight className="hidden md:block text-blue-600" size={20} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
                            {coreValues.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <div key={value.title} className="rounded-xl border border-slate-100 bg-white p-4 hover:border-blue-200 hover:shadow-xs transition-all group flex items-start gap-3.5">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                                            <Icon size={18} className="stroke-[2.25]" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-sm font-bold text-slate-950 transition-colors group-hover:text-blue-700">{value.title}</h3>
                                            <p className="text-xs leading-relaxed text-slate-500">{value.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutPage;