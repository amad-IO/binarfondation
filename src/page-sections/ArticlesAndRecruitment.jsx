import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import registrationImage from '../assets/registration.svg';

const articles = [
    {
        category: 'Self Love',
        title: 'Mengenal Diri Sendiri adalah Langkah Pertama Pulih',
        date: '12 Mei 2024',
        image: '/5.jpg',
    },
    {
        category: 'Mental Health',
        title: 'Overthinking? Yuk, Kenali dan Kelola Bersama',
        date: '8 Mei 2024',
        image: '/6.jpg',
    },
    {
        category: 'Remaja',
        title: 'Remaja Kuat Mental, Masa Depan Hebat',
        date: '2 Mei 2024',
        image: '/13.jpg',
    },
];

const ArticlesAndRecruitment = () => {
    return (
        <section id="edukasi" className="w-full mt-12 lg:mt-20">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">

                {/* Kiri: Artikel Terbaru (Takes 2 columns on XL) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="xl:col-span-2 bg-white rounded-[2rem] p-6 lg:p-8 shadow-sm border border-slate-100"
                >
                    <div className="flex justify-between items-center mb-6 lg:mb-8">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Artikel Terbaru</h3>
                        <button onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Lihat Semua Artikel' } }))} className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
                            Lihat Semua <ArrowRight size={16} className="ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <div key={article.title} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div className="w-full aspect-[16/10] rounded-2xl mb-4 overflow-hidden shadow-sm group-hover:shadow-blue-900/10 transition-shadow bg-slate-100">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <span className="inline-block bg-blue-50/80 backdrop-blur-md border border-blue-100/50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3">
                                    {article.category}
                                </span>
                                <h4 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-xs text-slate-400 font-medium">{article.date}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Kanan: Open Recruitment (Takes 1 column on XL) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    id="relawan"
                    className="xl:col-span-1 h-full bg-[#F4F8FF] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm border border-blue-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                >
                    <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_220px] gap-6 xl:gap-8 items-center h-full">
                        <div className="flex min-w-0 flex-col items-center xl:items-start text-center xl:text-left xl:pr-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 xl:mb-4">Open Recruitment Relawan</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 xl:mb-8 xl:max-w-[100%]">
                            Yuk bergabung jadi relawan Binar dan berkontribusi untuk kesehatan mental anak dan remaja Indonesia.
                        </p>

                        <Button variant="primary" className="flex items-center gap-2 text-sm px-6 py-3 w-max relative z-10 xl:mt-auto" onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Daftar Sekarang' } }))}>
                            Daftar Sekarang <ArrowRight size={16} />
                        </Button>
                        </div>

                        {/* Illustration Asset - kept separate so it never overlaps the text */}
                        <div className="flex items-center justify-center xl:justify-end w-full xl:self-end">
                            <img
                                src={registrationImage}
                                alt="Ilustrasi Relawan"
                                className="w-full max-w-[220px] lg:max-w-[240px] xl:max-w-[220px] object-contain object-center"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ArticlesAndRecruitment;
