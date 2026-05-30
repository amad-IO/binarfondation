import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const ArticlesAndRecruitment = () => {
    return (
        <section id="edukasi" className="w-full mt-12 lg:mt-20 overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

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
                        <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
                            Lihat Semua <ArrowRight size={16} className="ml-1" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Artikel 1 */}
                        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                            <div className="w-full aspect-[16/10] bg-slate-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-slate-400 text-sm shadow-sm group-hover:shadow-blue-900/10 transition-shadow">
                                [Gambar Kosong]
                            </div>
                            <span className="inline-block bg-blue-50/80 backdrop-blur-md border border-blue-100/50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3">Self Love</span>
                            <h4 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                                Mengenal Diri Sendiri adalah Langkah Pertama Pulih
                            </h4>
                            <p className="text-xs text-slate-400 font-medium">12 Mei 2024</p>
                        </div>

                        {/* Artikel 2 */}
                        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                            <div className="w-full aspect-[16/10] bg-slate-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-slate-400 text-sm shadow-sm group-hover:shadow-blue-900/10 transition-shadow">
                                [Gambar Kosong]
                            </div>
                            <span className="inline-block bg-blue-50/80 backdrop-blur-md border border-blue-100/50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3">Mental Health</span>
                            <h4 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                                Overthinking? Yuk, Kenali dan Kelola Bersama
                            </h4>
                            <p className="text-xs text-slate-400 font-medium">8 Mei 2024</p>
                        </div>

                        {/* Artikel 3 */}
                        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                            <div className="w-full aspect-[16/10] bg-slate-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-slate-400 text-sm shadow-sm group-hover:shadow-blue-900/10 transition-shadow">
                                [Gambar Kosong]
                            </div>
                            <span className="inline-block bg-blue-50/80 backdrop-blur-md border border-blue-100/50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3">Remaja</span>
                            <h4 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                                Remaja Kuat Mental, Masa Depan Hebat
                            </h4>
                            <p className="text-xs text-slate-400 font-medium">2 Mei 2024</p>
                        </div>
                    </div>
                </motion.div>

                {/* Kanan: Open Recruitment (Takes 1 column on XL) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    id="relawan"
                    className="xl:col-span-1 bg-[#F4F8FF] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm border border-blue-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                >
                    <div className="relative z-10">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">Open Recruitment Relawan</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 xl:max-w-[85%]">
                            Yuk bergabung jadi relawan Binar dan berkontribusi untuk kesehatan mental anak dan remaja Indonesia.
                        </p>
                        <Button variant="primary" className="flex items-center gap-2 text-sm px-6 py-3 w-max">
                            Daftar Sekarang <ArrowRight size={16} />
                        </Button>
                    </div>

                    {/* Illustration Placeholder (Asset kosong) */}
                    <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-blue-100/50 rounded-tl-full z-0 flex items-end justify-end p-6 text-blue-300 text-sm font-medium">
                        [Aset Kosong]
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ArticlesAndRecruitment;
