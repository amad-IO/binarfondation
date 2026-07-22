import { ArrowRight, BookOpenText, CalendarRange, MessageSquareQuote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ArticlesAndRecruitment from '../page-sections/ArticlesAndRecruitment';

const educationBlocks = [
    { title: 'Artikel baru', description: 'Konten ringan untuk memahami topik kesehatan mental.', icon: BookOpenText, color: 'bg-blue-100 text-blue-600', grad: 'from-blue-50 to-sky-50' },
    { title: 'Ruang diskusi', description: 'Bahan untuk memicu percakapan yang aman dan reflektif.', icon: MessageSquareQuote, color: 'bg-emerald-100 text-emerald-600', grad: 'from-emerald-50 to-teal-50' },
    { title: 'Agenda edukasi', description: 'Webinar, kelas, dan aktivitas yang dirancang rutin.', icon: CalendarRange, color: 'bg-violet-100 text-violet-600', grad: 'from-violet-50 to-purple-50' },
];

const EducationPage = () => {
    return (
        <>
            <PageHeader
                eyebrow="Edukasi"
                title="Artikel, insight, dan ajakan untuk ikut bergerak"
                description="Bagian ini menggabungkan konten edukasi terbaru dan kesempatan bergabung bersama tim Binar."
            />

            <section className="w-full bg-white pb-8 lg:pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-5 lg:space-y-6">

                    {/* 3 blok edukasi */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                        {educationBlocks.map((block) => {
                            const Icon = block.icon;
                            return (
                                <div key={block.title} className={`flex flex-col justify-center rounded-[2rem] bg-gradient-to-br ${block.grad} p-6 lg:p-7 border border-white/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
                                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${block.color}`}>
                                        <Icon size={22} className="stroke-[2]" />
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-slate-900">{block.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{block.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Banner */}
                    <div className="rounded-[2rem] overflow-hidden shadow-sm relative"
                        style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #38BDF8 100%)' }}>
                        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/10 pointer-events-none" />
                        <div className="absolute -bottom-10 -left-8 w-44 h-44 rounded-full bg-yellow-400/20 pointer-events-none" />
                        <div className="relative z-10 p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200 mb-2">Fokus page</p>
                                <h2 className="text-2xl lg:text-3xl font-extrabold text-white">Baca, pahami, lalu ikut bergerak</h2>
                                <p className="mt-2 text-blue-200 text-sm">Jadilah bagian dari gerakan yang peduli pada kesehatan mental.</p>
                            </div>
                            <a href="/relawan" className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-yellow-300 hover:shadow-lg shrink-0 gap-2">
                                Lihat Relawan <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <ArticlesAndRecruitment />
        </>
    );
};

export default EducationPage;
