import React, { useState } from 'react';
import { ArrowRight, Calendar, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import EventModal from '../components/EventModal';
import { upcomingActivities, articles } from '../data/content';

const ArticlesAndRecruitment = () => {
    const edukasiEvents = upcomingActivities.filter(item => item.category === 'edukasi' && item.status === 'active');
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id="edukasi" className="w-full pb-16 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-8 lg:gap-10">

                {/* Atas: Kegiatan Edukasi (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    id="events"
                    className="w-full bg-[#F4F8FF] rounded-[2rem] p-6 lg:p-10 flex flex-col relative shadow-sm border border-blue-50/50 overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Kegiatan Edukasi</h3>
                        </div>

                        {edukasiEvents.length > 0 ? (
                            <div className="space-y-4">
                                {edukasiEvents.map((event) => (
                                    <div 
                                        key={event.id} 
                                        onClick={() => setSelectedEvent(event)}
                                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-5 items-start sm:items-center transition-all hover:bg-white hover:shadow-lg cursor-pointer group z-20 relative"
                                    >
                                        <div className="w-full sm:w-36 h-36 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                                            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                                            <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed max-w-3xl">{event.description}</p>
                                            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-100/50 w-max px-3 py-1.5 rounded-lg">
                                                <Calendar size={14} /> {event.date}
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-auto shrink-0 flex items-center justify-end sm:ml-4">
                                            <a 
                                                href={event.registrationLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors gap-2 shadow-sm"
                                            >
                                                Daftar <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center flex-grow py-12 z-10 relative">
                                <div className="w-16 h-16 bg-white shadow-sm text-blue-400 rounded-full flex items-center justify-center mb-4">
                                    <Calendar size={28} className="text-blue-500" />
                                </div>
                                <p className="text-slate-600 text-sm md:text-base max-w-md leading-relaxed font-medium">
                                    Saat ini belum ada jadwal terdekat. Kami sedang menyiapkan materi seru lainnya untuk kamu!
                                </p>
                            </div>
                        )}
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
                </motion.div>

                {/* Bawah: Artikel Terbaru (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full bg-white rounded-[2rem] p-6 lg:p-10 shadow-sm border border-slate-100 flex flex-col"
                >
                    <div className="flex justify-between items-center mb-6 lg:mb-8">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Artikel Terbaru</h3>
                        <button onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Lihat Semua Artikel' } }))} className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
                            Lihat Semua <ArrowRight size={16} className="ml-1" />
                        </button>
                    </div>

                    {articles.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Render articles here in the future */}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10 text-center flex-grow bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                            <div className="h-14 w-14 mb-4 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-slate-700 text-[17px]">Segera Hadir</h4>
                            <p className="text-[13px] text-slate-500 mt-2 max-w-sm px-4 leading-relaxed">
                                Kami sedang menyiapkan artikel edukasi dan bacaan ringan seputar kesehatan mental khusus untukmu. Nantikan ya!
                            </p>
                        </div>
                    )}
                </motion.div>

            </div>

            {/* Event Modal */}
            {selectedEvent && (
                <EventModal 
                    event={selectedEvent} 
                    onClose={() => setSelectedEvent(null)} 
                />
            )}
        </section>
    );
};

export default ArticlesAndRecruitment;
