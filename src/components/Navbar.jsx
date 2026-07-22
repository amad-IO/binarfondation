import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.PNG';

// TIDAK ADA import framer-motion — animasi menu pakai CSS transition
// Ini menghapus vendor-framer (43KB gzip) dari critical path sepenuhnya

const navLinks = [
    { name: 'Beranda', to: '/' },
    { name: 'Tentang Kami', to: '/tentang-kami' },
    { name: 'Program', to: '/program' },
    { name: 'Edukasi', to: '/edukasi' },
    { name: 'Relawan', to: '/relawan' },
    { name: 'Donasi', to: '/donasi' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-4 pb-2' : 'py-4 lg:py-5'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
                    <div className={`flex items-center justify-between px-4 sm:px-5 py-2 mx-auto max-w-6xl rounded-2xl transition-all duration-300 relative border ${
                        isMobileMenuOpen
                            ? 'bg-white border-gray-100 shadow-sm z-50'
                            : (isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-lg' : 'bg-white border-gray-100 shadow-sm')
                    }`}>

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Link to="/" className="flex items-center cursor-pointer hover:opacity-90 transition-opacity">
                                <img src={logoImage} alt="Logo Binar Community" className="h-10 sm:h-12 object-contain" />
                            </Link>
                            <div className="h-8 sm:h-10 w-px bg-gray-200 block"></div>
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none">Binar</span>
                                <span className="text-[12px] sm:text-sm font-extrabold text-blue-700 leading-tight">Foundation</span>
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.to;
                                return (
                                    <NavLink
                                        key={link.name}
                                        to={link.to}
                                        end={link.to === '/'}
                                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                                            isActive ? 'text-blue-600 font-semibold' : 'text-slate-500 hover:text-blue-600'
                                        }`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-0 left-3 right-3 h-[3px] bg-blue-600 rounded-t-md transition-all duration-300 ${
                                            isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                                        }`} />
                                    </NavLink>
                                );
                            })}
                        </nav>

                        {/* Kanan: Button + Hamburger */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex">
                                <Link to="/kontak" className="inline-flex whitespace-nowrap items-center justify-center px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 focus:ring-blue-500 shadow-md hover:shadow-lg text-sm">
                                    Contact Us
                                </Link>
                            </div>

                            {/* Hamburger */}
                            <button
                                className="lg:hidden p-1.5 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none w-10 h-10 flex items-center justify-center relative z-[60]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle Menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <div className="relative w-6 h-[18px]">
                                    <span className={`absolute left-0 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
                                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                                    <span className={`absolute left-0 w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* Mobile Backdrop & Menu Overlay (Fixed to Viewport for 100% clickability) */}
            <div 
                className={`fixed inset-0 w-full h-[100dvh] bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 z-[90] ${
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className={`fixed top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 flex flex-col gap-1 lg:hidden z-[95] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
            }`}>
                <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            end={link.to === '/'}
                            onClick={() => setTimeout(() => setIsMobileMenuOpen(false), 150)}
                            className={`px-4 py-3.5 text-[16px] font-semibold transition-colors duration-200 block rounded-2xl ${
                                location.pathname === link.to
                                    ? 'text-blue-600 bg-blue-50/50'
                                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                            }`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                <div className="mt-2 pt-4 px-2 border-t border-gray-100">
                    <Link onClick={() => setTimeout(() => setIsMobileMenuOpen(false), 150)} to="/kontak" className="inline-flex w-full whitespace-nowrap items-center justify-center px-6 py-3.5 rounded-full font-bold transition-all duration-300 ease-in-out bg-blue-600 text-white hover:bg-blue-700 shadow-md text-base">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
