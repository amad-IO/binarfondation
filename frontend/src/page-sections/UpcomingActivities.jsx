import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanityClient';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { upcomingActivities } from '../data/content';
import { motion } from 'framer-motion';

const UpcomingActivities = () => {
    const [sanityActivities, setSanityActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const results = await client.fetch(`*[_type == "program" && isActive == true] | order(_createdAt desc)`);
                setSanityActivities(results);
            } catch (error) {
                console.error("Error fetching upcoming activities:", error);
            }
        };
        fetchActivities();
    }, []);

    const hardcodedActivities = upcomingActivities.filter(item => item.status === 'active');
    const activeActivities = [
        ...sanityActivities.map(event => {
            let category = 'lainnya';
            if (event.type === 'volunteer') category = 'relawan';
            if (event.type === 'seminar' || event.type === 'webinar') category = 'edukasi';
            
            return {
                id: event._id,
                title: event.title,
                category: category,
                status: event.isActive ? 'active' : 'inactive',
                date: event.date ? new Date(event.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Segera Hadir',
                image: event.poster ? urlFor(event.poster).url() : '',
            };
        }),
        ...hardcodedActivities
    ];

    return (
        <section className="w-full py-10 lg:py-14 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                        Kegiatan Terdekat
                    </h2>
                    {activeActivities.length > 0 && (
                        <Link to="/edukasi" className="text-sm font-semibold text-blue-600 hover:underline">
                            Lihat Semua
                        </Link>
                    )}
                </div>

                {activeActivities.length > 0 ? (
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {activeActivities.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="snap-start shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image Container */}
                                <div className="relative h-36 w-full overflow-hidden bg-slate-100 p-3 pb-0">
                                    <div className="w-full h-full rounded-t-xl overflow-hidden relative">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                                            item.category === 'edukasi' ? 'bg-blue-600' : 'bg-orange-500'
                                        }`}>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="px-5 py-4 flex flex-col flex-grow">
                                    <h3 className="text-[17px] font-bold text-slate-900 mb-1 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    
                                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-4">
                                        <div className="flex items-center gap-1">
                                            <span>{item.date.replace('Hingga ', '')}</span>
                                        </div>
                                        {item.category === 'edukasi' && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                <div className="flex items-center gap-1">
                                                    <span>Edukasi</span>
                                                </div>
                                            </>
                                        )}
                                        {item.category === 'relawan' && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                <div className="flex items-center gap-1">
                                                    <span>Relawan</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                                            {item.status === 'active' ? 'Dibuka' : 'Ditutup'}
                                        </span>
                                        <Link 
                                            to={item.category === 'edukasi' ? '/edukasi' : '/relawan'} 
                                            className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                                        >
                                            Detail <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full bg-white rounded-3xl border border-dashed border-slate-200 p-8 lg:p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                        <div className="w-16 h-16 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-4">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Belum ada kegiatan terdekat</h3>
                        <p className="text-slate-500 max-w-md">Saat ini belum ada pendaftaran sedang dibuka. Tetap pantau halaman ini atau media sosial kami agar tidak ketinggalan informasi terbaru!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingActivities;
