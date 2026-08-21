import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X, ArrowRight } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors shadow-sm"
                    >
                        <X size={20} />
                    </button>

                    {/* Image Section (Uncropped) */}
                    <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center p-4 md:p-8 min-h-[300px] md:min-h-0 relative">
                        {/* Checkerboard or subtle pattern behind image to indicate it's a poster */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                        <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-contain max-h-[40vh] md:max-h-full rounded-xl relative z-10"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                        <div className="mb-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                                event.category === 'edukasi' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                                {event.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                {event.title}
                            </h2>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 mb-6">
                                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                                    <Calendar size={16} className="text-blue-600" />
                                    <span>{event.date}</span>
                                </div>
                                {event.time && event.time !== "-" && (
                                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                                        <Clock size={16} className="text-blue-600" />
                                        <span>{event.time}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="prose prose-slate prose-sm md:prose-base mb-8">
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                {event.description}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100 flex gap-4">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                            >
                                Tutup
                            </button>
                            <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                Daftar Sekarang <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EventModal;
