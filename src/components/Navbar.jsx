import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.PNG';

const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Program', href: '#program' },
    { name: 'Edukasi', href: '#edukasi' },
    { name: 'Relawan', href: '#relawan' },
    { name: 'Donasi', href: '#donasi' },
    { name: 'Kontak', href: '#kontak' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('beranda');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll untuk efek background/shadow dan indikator active menu
    useEffect(() => {
        const handleScroll = () => {
            // Efek navbar saat di-scroll
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Deteksi section aktif
            const sections = navLinks.map(link => link.href.substring(1));
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 150)) {
                    current = section;
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset agar tidak tertutup navbar
                behavior: 'smooth',
            });
            setActiveSection(targetId);
            setIsMobileMenuOpen(false); // Tutup menu mobile setelah klik
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-4 pb-2' : 'py-4 lg:py-5'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
                <div className={`flex items-center justify-between px-4 sm:px-5 py-2 sm:py-2 mx-auto max-w-6xl rounded-2xl transition-all duration-300 relative border ${
                    isMobileMenuOpen 
                        ? 'bg-white border-gray-100 shadow-sm z-50' 
                        : (isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-lg' : 'bg-white border-gray-100 shadow-sm')
                }`}>

                    {/* Bagian Kiri: Logo */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center cursor-pointer hover:opacity-90 transition-opacity" onClick={(e) => scrollToSection(e, '#beranda')}>
                            <img src={logoImage} alt="Logo" className="h-10 sm:h-12 object-contain" />
                        </div>
                        {/* Pemisah Vertikal */}
                        <div className="h-8 sm:h-10 w-px bg-gray-200 block"></div>
                        {/* Teks Yayasan Binar Community */}
                        <div className="flex flex-col">
                            <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none">Yayasan</span>
                            <span className="text-[12px] sm:text-sm font-extrabold text-blue-700 leading-tight">Binar Community</span>
                        </div>
                    </div>

                    {/* Bagian Tengah: Navigasi Desktop */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${activeSection === link.href.substring(1)
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-slate-500 hover:text-blue-600'
                                    }`}
                            >
                                {link.name}
                                {/* Garis Bawah Aktif dengan Animasi Geser Menggunakan Framer Motion */}
                                {activeSection === link.href.substring(1) && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-3 right-3 h-[3px] bg-blue-600 rounded-t-md"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Bagian Kanan: Button Gabung Komunitas & Hamburger */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex">
                            <Button variant="primary" className="text-sm px-5 py-2" onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Gabung Komunitas' } }))}>
                                Gabung Komunitas
                            </Button>
                        </div>

                        {/* Hamburger Button untuk Mobile */}
                        <button
                            className="lg:hidden p-1.5 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none w-10 h-10 flex items-center justify-center relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <div className="relative w-6 h-[18px]">
                                <span className={`absolute left-0 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                                <span className={`absolute left-0 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
                            </div>
                        </button>
                    </div>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                {/* Full-screen backdrop overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.05, ease: "easeOut" }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="fixed inset-0 bg-white/40 backdrop-blur-lg lg:hidden -z-10"
                                    style={{ WebkitBackdropFilter: 'blur(16px)' }}
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[calc(100%+12px)] right-0 w-[200px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-3 px-2 flex flex-col gap-0.5 lg:hidden z-50 origin-top-right"
                                >
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className={`px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 block rounded-xl ${
                                                activeSection === link.href.substring(1)
                                                    ? 'text-blue-600 bg-blue-50/50'
                                                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                            }`}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <div className="mt-2 pt-3 px-2 border-t border-gray-100 sm:hidden">
                                        <Button variant="primary" className="w-full text-sm py-2.5 shadow-sm" onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Gabung Komunitas' } }))}>
                                            Gabung
                                        </Button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
