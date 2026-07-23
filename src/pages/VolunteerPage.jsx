import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, HeartHandshake, Users2, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import EventModal from '../components/EventModal';
import { upcomingActivities } from '../data/content';
import creativeTeamImage from '../assets/creative team.svg';

const volunteerPoints = [
    'Mendampingi kegiatan edukasi dan kampanye kesehatan mental.',
    'Membantu proses dokumentasi, publikasi, dan koordinasi komunitas.',
    'Belajar bekerja di lingkungan yang aman, kolaboratif, dan berdampak.',
];


const VolunteerPage = () => {
    const relawanEvents = upcomingActivities.filter(item => item.category === 'relawan' && item.status === 'active');
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <>
            <PageHeader
                className="bg-white pt-28 lg:pt-32 pb-8"
                eyebrow="Relawan"
                title="Bergabung sebagai relawan Binar"
                description="Kalau kamu ingin terlibat langsung dalam gerakan yang memberi dampak, halaman ini adalah titik awal yang pas."
            />

            <section className="w-full pb-16 lg:pb-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                    <div className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-1 w-full">
                            <h2 className="text-2xl lg:text-[2.35rem] font-bold text-slate-900 mb-6">
                                Apa yang akan kamu dapatkan
                            </h2>
                            <ul className="space-y-5">
                                {volunteerPoints.map((point) => (
                                    <li key={point} className="flex gap-4 text-slate-600 leading-relaxed text-[15px]">
                                        <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={22} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full flex justify-center items-center">
                            <img src={creativeTeamImage} alt="Ilustrasi Relawan Binar" className="w-full max-w-sm lg:max-w-md drop-shadow-sm hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-12 w-full relative overflow-hidden rounded-[2rem] border border-blue-50 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 lg:p-10 shadow-sm min-h-[360px] flex flex-col justify-center">
                            {relawanEvents.length > 0 ? (
                                <div className="space-y-6 z-10 relative">
                                    <h2 className="text-2xl lg:text-[2.2rem] font-bold text-slate-900 mb-2">
                                        Program Relawan
                                    </h2>
                                    <div className="space-y-4">
                                        {relawanEvents.map((event) => (
                                            <div 
                                                key={event.id} 
                                                onClick={() => setSelectedEvent(event)}
                                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-5 items-start sm:items-center transition-all hover:bg-white hover:shadow-lg cursor-pointer group"
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
                        </div>
                    ) : (
                                <div className="text-center py-10 flex flex-col items-center justify-center h-full z-10 relative">
                                    <div className="w-20 h-20 bg-white shadow-sm text-blue-400 rounded-full flex items-center justify-center mb-6">
                                        <Users2 size={36} className="text-blue-500" />
                                    </div>
                                    <p className="text-slate-600 text-[17px] max-w-[85%] leading-relaxed font-medium">
                                        Pendaftaran relawan saat ini sedang ditutup. Tetap pantau halaman ini atau ikuti media sosial kami untuk kabar rekrutmen berikutnya!
                                    </p>
                                </div>
                            )}
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
                        </div>
                </div>
            </section>
            
            {/* Event Modal */}
            {selectedEvent && (
                <EventModal 
                    event={selectedEvent} 
                    onClose={() => setSelectedEvent(null)} 
                />
            )}
        </>
    );
};

export default VolunteerPage;