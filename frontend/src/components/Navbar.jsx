import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.PNG';

const navLinks = [
    { name: 'Beranda', to: '/' },
    { name: 'Tentang Kami', to: '/tentang-kami' },
    { name: 'Program', to: '/program' },
    { name: 'Edukasi', to: '/edukasi' },
    { name: 'Relawan', to: '/relawan' },
    { name: 'Galeri', to: '/galeri' },
    { name: 'Donasi', to: '/donasi' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const scrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled((prev) => {
                const scrolled = window.scrollY > 20;
                return prev !== scrolled ? scrolled : prev;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fallback: tetap tutup menu kalau pathname berubah (mis. navigasi dari luar)
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // --- Fix #1: body scroll lock, mencegah scroll "bocor" ke halaman
    // di belakang overlay saat menu mobile terbuka ---
    useEffect(() => {
        const body = document.body;
        if (isMobileMenuOpen) {
            const scrollY = window.scrollY;
            scrollYRef.current = scrollY;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}px`;
            body.style.left = '0';
            body.style.right = '0';
            body.style.width = '100%';
            body.style.overflowX = 'hidden';
        } else {
            const scrollY = scrollYRef.current;
            body.style.position = '';
            body.style.top = '';
            body.style.left = '';
            body.style.right = '';
            body.style.width = '';
            body.style.overflowX = '';
            window.scrollTo(0, scrollY);
        }
        return () => {
            body.style.position = '';
            body.style.top = '';
            body.style.left = '';
            body.style.right = '';
            body.style.width = '';
            body.style.overflowX = '';
        };
    }, [isMobileMenuOpen]);

    // --- Fix #2: fungsi close eksplisit, dipanggil langsung di onClick tiap link,
    // tidak lagi bergantung sepenuhnya pada perubahan pathname ---
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
                    isScrolled ? 'pt-3 pb-2' : 'py-4 lg:py-5'
                }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`flex items-center justify-between px-4 sm:px-5 py-2 mx-auto max-w-6xl rounded-2xl transition-all duration-300 border ${
                            isScrolled
                                ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-lg'
                                : 'bg-white border-transparent shadow-sm'
                        }`}
                    >
                        <div className="flex items-center gap-2 flex-shrink-0 z-20">
                            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity" onClick={closeMobileMenu}>
                                <img src={logoImage} alt="Binar Foundation" className="h-10 sm:h-12 object-contain" />
                            </Link>
                            <div className="h-8 sm:h-10 w-px bg-gray-200" />
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none">Binar</span>
                                <span className="text-[12px] sm:text-sm font-extrabold text-blue-700 leading-tight">Foundation</span>
                            </div>
                        </div>

                        <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2 relative z-30">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={({ isActive }) =>
                                        `flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                                            isActive
                                                ? 'text-blue-700 bg-blue-50 border-blue-100/50 font-semibold shadow-sm'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 border-transparent'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-20">
                            <Link
                                to="/kontak"
                                className="hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg text-sm"
                            >
                                Contact Us
                            </Link>

                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                aria-label="Toggle Menu"
                                aria-expanded={isMobileMenuOpen}
                                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                            >
                                <div className="relative w-6 h-[18px]">
                                    <span className={`absolute left-0 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
                                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
                                    <span className={`absolute left-0 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="fixed inset-0 z-50 lg:hidden bg-white/95 backdrop-blur-md pt-32 pb-8 px-4 overflow-y-auto overscroll-contain"
                    >
                        <div className="flex flex-col gap-2 max-w-sm mx-auto min-h-full relative z-30">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === '/'}
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `w-full px-5 py-4 text-base font-semibold rounded-2xl transition-colors duration-150 ${
                                            isActive
                                                ? 'text-blue-700 bg-blue-50'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50 active:bg-slate-100'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            <div className="w-full h-px bg-slate-200 my-2" />

                            <Link
                                to="/kontak"
                                onClick={closeMobileMenu}
                                className="w-full py-4 px-6 rounded-2xl font-bold text-center text-base bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150 shadow-md"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;