import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'pt-4 pb-2' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className={`flex items-center justify-between px-4 sm:px-6 py-3 mx-auto max-w-6xl bg-white/95 backdrop-blur-md rounded-2xl border transition-all duration-300 relative ${
          isScrolled ? 'shadow-lg border-gray-100' : 'shadow-sm border-gray-100'
        }`}>
          
          {/* Bagian Kiri: Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity" onClick={(e) => scrollToSection(e, '#beranda')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
                B
              </div>
              <span className="text-xl font-extrabold text-blue-700 tracking-tight">Logo.</span>
            </div>
            {/* Pemisah Vertikal */}
            <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
            {/* Teks Yayasan Binar Community */}
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none">Yayasan</span>
              <span className="text-xs font-bold text-slate-600 leading-tight">Binar Community</span>
            </div>
          </div>

          {/* Bagian Tengah: Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === link.href.substring(1)
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
              <Button variant="primary" className="text-sm px-5 py-2">
                Gabung Komunitas
              </Button>
            </div>
            
            {/* Hamburger Button untuk Mobile */}
            <button 
              className="lg:hidden p-1.5 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col gap-2 lg:hidden overflow-hidden"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-3 text-base font-medium rounded-xl transition-colors duration-200 flex items-center ${
                      activeSection === link.href.substring(1)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100 sm:hidden">
                  <Button variant="primary" className="w-full text-base py-3">
                    Gabung Komunitas
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
