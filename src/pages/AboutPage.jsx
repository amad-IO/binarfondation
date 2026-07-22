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

            <section className="w-full bg-slate-50/50 pb-20 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-16 lg:pt-24 space-y-24 lg:space-y-40">
                    
                    {/* SECTION 1: GIANT TYPOGRAPHY VISION (EDITORIAL HERO) */}
                    <div className="relative text-center max-w-4xl mx-auto">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-5 pointer-events-none">
                            <Sparkles size={200} />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-8">Visi Utama Kami</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-950 leading-[1.1] tracking-tight text-balance">
                            "Mewujudkan generasi muda Indonesia yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">sehat mental, bertumbuh</span>, dan mampu memberdayakan lingkungannya."
                        </h2>
                    </div>

                    {/* SECTION 2: ASYMMETRIC ABOUT & HISTORY */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        <div className="lg:col-span-5 relative flex justify-center lg:justify-start px-6 sm:px-12 lg:px-0">
                            <div className="relative group w-full max-w-md">
                                {/* Latar Belakang Biru / Card Effect */}
                                <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] transform translate-x-4 translate-y-4 shadow-lg group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                                
                                {/* Bingkai Gambar (Rotate 8 deg -> 0 deg) */}
                                <div className="aspect-[4/5] rounded-[2rem] bg-white p-3 shadow-2xl relative z-10 transform rotate-[8deg] group-hover:rotate-0 transition-all duration-500 ease-out origin-center">
                                    <img
                                        src="/10.jpg"
                                        alt="Kegiatan utama Binar"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                                
                                {/* Badge 2026 */}
                                <div className="absolute -bottom-8 -left-8 bg-white p-5 shadow-xl rounded-2xl border border-slate-100 max-w-[180px] hidden md:block z-20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                    <p className="text-3xl font-extrabold text-blue-600">2026</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Resmi Menjadi Yayasan</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 border-l-2 border-blue-600 pl-3">Jejak Langkah</p>
                                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Dari Komunitas Hati,<br/>Menuju Dampak Nyata.</h3>
                                <div className="space-y-4 text-slate-600 text-sm lg:text-base leading-relaxed">
                                    <p>
                                        Berawal dari <strong>Binar Community</strong>, sebuah komunitas yang lahir murni dari ketulusan hati pada tanggal 11 Desember 2024. Kami mulai dengan langkah kecil, namun dengan mimpi yang besar untuk sesama.
                                    </p>
                                    <p>
                                        Kini, pada tahun 2026, kami resmi melangkah lebih jauh dan berevolusi menjadi <strong>BINAR FOUNDATION</strong>. Sebuah yayasan yang berfokus secara profesional pada penguatan kesehatan mental dan pendidikan inklusif untuk anak serta remaja di Indonesia.
                                    </p>
                                </div>
                            </div>

                            {/* FILOSOFI (MAGAZINE STYLE QUOTES) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                                <div className="p-6 bg-slate-900 text-white rounded-2xl relative overflow-hidden group">
                                    <Heart size={100} className="absolute -bottom-6 -right-6 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                                    <h4 className="text-xl font-extrabold mb-3">Berbinar</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                                        Mengekspresikan emosi mendalam, penuh kejujuran, tulus apa adanya menuju kebahagiaan.
                                    </p>
                                </div>
                                <div className="p-6 bg-blue-600 text-white rounded-2xl relative overflow-hidden group">
                                    <Sparkles size={100} className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                                    <h4 className="text-xl font-extrabold mb-3">Bersinar</h4>
                                    <p className="text-xs text-blue-100 leading-relaxed relative z-10">
                                        Diri yang selalu ingin bertumbuh, berdaya, dan mampu memberdayakan sekitar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: EDITORIAL STICKY MISSIONS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
                        
                        {/* KIRI: STICKY TITLE */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Langkah Kerja</p>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                                Misi<br/>Gerakan
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                            <p className="text-sm lg:text-base text-slate-500 leading-relaxed max-w-sm">
                                Implementasi program kerja terstruktur guna merealisasikan pilar-pilar utama yayasan secara transparan dan berdampak.
                            </p>
                        </div>

                        {/* KANAN: SCROLLING LIST */}
                        <div className="lg:col-span-7 space-y-6 lg:space-y-12 lg:pt-32 pb-16">
                            {missions.map((mission, index) => (
                                <div key={mission} className="flex gap-6 lg:gap-8 border-t border-slate-200 pt-6 lg:pt-8 group">
                                    <span className="text-4xl lg:text-6xl font-extrabold text-slate-200 group-hover:text-blue-600 transition-colors duration-500 font-serif italic">
                                        0{index + 1}
                                    </span>
                                    <p className="text-base lg:text-2xl font-medium text-slate-800 leading-relaxed lg:leading-snug">
                                        {mission}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 4: CORE VALUES (MINIMALIST GRID) */}
                    <div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 border-b-2 border-slate-900 pb-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Pedoman</p>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Core Values</h2>
                            </div>
                            <p className="text-sm text-slate-500 max-w-xs leading-relaxed hidden md:block">
                                Nilai-nilai dasar yang menjadi kompas bagi setiap langkah dan kebijakan Binar Foundation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {coreValues.map((value, idx) => {
                                const Icon = value.icon;
                                return (
                                    <div key={value.title} className="group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-xs font-bold text-slate-300">0{idx + 1}</span>
                                            <div className="h-px bg-slate-200 flex-1 group-hover:bg-blue-600 transition-colors duration-500"></div>
                                            <Icon size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-xl font-extrabold text-slate-900 mb-3">{value.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
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