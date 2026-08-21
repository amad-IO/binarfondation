import { useState, useEffect } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import PageHeader from '../components/PageHeader';
import { Camera, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

// SVG for the 3D Pin
const PushPin = ({ color = "red" }) => {
    const colorClasses = {
        red: "from-red-400 to-red-600 shadow-red-500/50",
        blue: "from-blue-400 to-blue-600 shadow-blue-500/50",
        orange: "from-orange-400 to-orange-600 shadow-orange-500/50",
        purple: "from-purple-400 to-purple-600 shadow-purple-500/50",
    };

    return (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center drop-shadow-md">
            {/* Pin head */}
            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${colorClasses[color]} shadow-inner border border-white/20 z-10 relative`}>
                {/* Highlight */}
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full blur-[1px]"></div>
            </div>
            {/* Pin shadow/needle */}
            <div className="w-1.5 h-3 bg-gradient-to-b from-slate-400 to-slate-200 -mt-1 rounded-b-full shadow-sm z-0"></div>
        </div>
    );
};

const GalleryPage = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                // Urutkan berdasarkan kolom order (asc), lalu baru berdasarkan tanggal (desc)
                const results = await client.fetch(`*[_type == "gallery"] | order(order asc, date desc)`);
                const formattedResults = results.map(album => ({
                    _id: album._id,
                    title: album.title,
                    date: album.date,
                    coverUrl: album.images && album.images.length > 0 ? urlFor(album.images[0]).width(800).url() : '',
                    images: album.images ? album.images.map(img => ({
                        url: urlFor(img).width(1200).url(),
                        caption: img.caption || ''
                    })) : []
                }));
                setAlbums(formattedResults);
            } catch (error) {
                console.error("Error fetching gallery:", error);
                setAlbums([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const openAlbum = (album) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeAlbum = () => {
        setSelectedAlbum(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedAlbum) {
            setCurrentImageIndex((prev) => prev + 1);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedAlbum) {
            setCurrentImageIndex((prev) => prev - 1);
        }
    };

    const pinColors = ["orange", "blue", "purple", "red"];

    return (
        <>
            <PageHeader
                className="bg-[#f8f9fa] pt-28 lg:pt-32 pb-8"
                eyebrow="Jejak Kenangan"
                title="Galeri Binar"
                description="Kumpulan catatan, cerita, dan senyuman dari setiap kegiatan yang kami lalui."
            />

            <section className="w-full pb-32 bg-[#f8f9fa] min-h-[80vh] relative overflow-hidden">
                {/* Latar belakang bergaris mirip buku tulis */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #cbd5e1 40px)' }}></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 py-10">
                    
                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-100 border-t-blue-600"></div>
                        </div>
                    ) : albums.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 max-w-md">
                                <Camera size={48} className="text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-700 mb-2">Belum Ada Dokumentasi</h3>
                                <p className="text-sm text-slate-500">Galeri saat ini masih kosong.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative w-full pt-10 px-4 sm:px-0">
                            {albums.map((album, idx) => {
                                // Randomize rotation for bulletin board effect
                                const rotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-1'];
                                const hoverRotations = ['hover:-rotate-1', 'hover:rotate-1', 'hover:-rotate-1', 'hover:rotate-1', 'hover:-rotate-0', 'hover:rotate-0'];
                                const rotate = `${rotations[idx % rotations.length]} ${hoverRotations[idx % hoverRotations.length]}`;
                                const pinColor = pinColors[idx % pinColors.length];
                                
                                // Background Colors matching reference
                                const innerBgClass = pinColor === 'orange' ? 'bg-orange-50/80' : 
                                                     pinColor === 'blue' ? 'bg-blue-50/80' : 
                                                     pinColor === 'purple' ? 'bg-purple-50/80' : 'bg-red-50/80';
                                
                                const textColorClass = pinColor === 'orange' ? 'text-orange-500' : 
                                                       pinColor === 'blue' ? 'text-blue-500' : 
                                                       pinColor === 'purple' ? 'text-purple-500' : 'text-red-500';

                                return (
                                    <div key={album._id} className="relative flex flex-col items-center z-10 w-full max-w-sm mx-auto">
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            onClick={() => openAlbum(album)}
                                            className={`relative bg-white rounded-[2rem] p-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] cursor-pointer w-full transition-all duration-300 ${rotate} group`}
                                        >
                                            <PushPin color={pinColor} />
                                            
                                            {/* Colored Inner Container */}
                                            <div className={`relative z-10 flex flex-col rounded-3xl p-4 md:p-5 h-full border border-white/50 ${innerBgClass}`}>
                                                
                                                {/* Angka Index */}
                                                <span className={`font-mono text-xl md:text-2xl font-bold mb-3 ${textColorClass} drop-shadow-sm`}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>

                                                <h3 className="text-lg md:text-xl font-extrabold text-slate-800 mb-4 leading-tight">
                                                    {album.title}
                                                </h3>

                                                {/* Foto Mini Polaroid */}
                                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white shadow-sm border border-white relative mt-auto">
                                                    <img 
                                                        src={album.coverUrl} 
                                                        alt={album.title} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                        <div className="opacity-0 group-hover:opacity-100 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-4 py-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all shadow-md">
                                                            Buka Album
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5 opacity-80 mt-auto">
                                                    <Calendar size={12} /> 
                                                    {album.date ? new Date(album.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* LIGHTBOX / SURAT TERBUKA MODAL (React Portal) */}
            {createPortal(
                <AnimatePresence>
                    {selectedAlbum && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4 sm:p-8">
                            
                            {/* Backdrop Gelap */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeAlbum}
                                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md pointer-events-auto"
                            />
                            {/* Kontainer Surat Terbuka / Modal 3D Coverflow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="relative bg-white rounded-3xl p-4 sm:p-8 w-full max-w-6xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.15)] pointer-events-auto flex flex-col h-[85vh] overflow-hidden border border-slate-100"
                            >
                                {/* Close Button */}
                                <button 
                                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 p-2 sm:p-3 rounded-full transition-all z-[100] border border-slate-200"
                                    onClick={closeAlbum}
                                >
                                    <X size={24} />
                                </button>

                                {/* Header Modal */}
                                <div className="px-2 pt-2 pb-6 flex-shrink-0 text-center z-20">
                                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 mb-2 drop-shadow-sm">
                                        {selectedAlbum.title}
                                    </h2>
                                    <p className="text-sm text-slate-500 font-medium">
                                        {selectedAlbum.date ? new Date(selectedAlbum.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'} • Galeri Interaktif
                                    </p>
                                </div>

                                {/* Area Foto (3D Coverflow) */}
                                <div 
                                    className="relative flex-grow flex items-center justify-center min-h-[40vh] w-full"
                                    style={{ perspective: 1200 }}
                                >
                                    {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                                        const length = selectedAlbum.images.length;
                                        // Skip rendering side items if there's literally only 1 image in the album
                                        if (length <= 1 && offset !== 0) return null;

                                        const globalIndex = currentImageIndex + offset;
                                        // Positive modulo arithmetic to ensure realIndex is always valid
                                        const realIndex = ((globalIndex % length) + length) % length;
                                        const img = selectedAlbum.images[realIndex];
                                        
                                        const absOffset = Math.abs(offset);
                                        const direction = Math.sign(offset);
                                        const isActive = offset === 0;
                                        
                                        // Calculate 3D transforms
                                        const x = isActive ? '0%' : `${direction * (45 + (absOffset - 1) * 20)}%`;
                                        const rotateY = isActive ? 0 : direction * -40;
                                        const z = isActive ? 0 : -200 - (absOffset * 100);
                                        const scale = isActive ? 1 : 0.8;
                                        const opacity = absOffset > 2 ? 0 : 1; // Hide items far away

                                        return (
                                            <motion.div
                                                key={globalIndex}
                                                initial={false}
                                                animate={{ 
                                                    x, 
                                                    rotateY, 
                                                    z, 
                                                    scale, 
                                                    opacity 
                                                }}
                                                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                                                className={`absolute w-[70%] sm:w-[50%] md:w-[45%] lg:w-[40%] aspect-[4/3] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-pointer overflow-hidden border border-slate-200 bg-slate-100 ${isActive ? 'pointer-events-none' : ''}`}
                                                style={{ 
                                                    zIndex: 50 - absOffset,
                                                    transformStyle: "preserve-3d"
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Move by the offset amount directly
                                                    setCurrentImageIndex(prev => prev + offset);
                                                }}
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={`Foto galeri`}
                                                    className="w-full h-full object-cover select-none"
                                                />
                                                {/* Light overlay for inactive items to simulate depth/shadow */}
                                                {!isActive && (
                                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] transition-opacity duration-300 z-20"></div>
                                                )}
                                                
                                                {/* Caption over the active image */}
                                                {isActive && img.caption && (
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 z-30">
                                                        <p className="text-white text-base md:text-lg text-center font-medium drop-shadow-md">
                                                            {img.caption}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Navigation Arrows */}
                                {selectedAlbum.images.length > 1 && (
                                    <>
                                        <button 
                                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-3 sm:p-5 rounded-full backdrop-blur-md transition-all shadow-[0_4px_20px_-5px_rgba(0,0,0,0.2)] hover:scale-110 z-50 border border-slate-200"
                                            onClick={prevImage}
                                        >
                                            <ChevronLeft size={28} />
                                        </button>
                                        <button 
                                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-3 sm:p-5 rounded-full backdrop-blur-md transition-all shadow-[0_4px_20px_-5px_rgba(0,0,0,0.2)] hover:scale-110 z-50 border border-slate-200"
                                            onClick={nextImage}
                                        >
                                            <ChevronRight size={28} />
                                        </button>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default GalleryPage;
