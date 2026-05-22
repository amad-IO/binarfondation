import { useState, useEffect } from 'react';
import Button from './Button';

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
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'pt-4 pb-2' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className={`flex items-center justify-between px-6 py-3 mx-auto max-w-6xl bg-white/95 backdrop-blur-md rounded-2xl border transition-all duration-300 ${
          isScrolled ? 'shadow-lg border-gray-100' : 'shadow-sm border-gray-100'
        }`}>
          
          {/* Bagian Kiri: Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Placeholder Logo Bebas */}
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
                className={`px-3 py-2 text-sm font-bold transition-all duration-200 relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-600'
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {link.name}
                {/* Garis Bawah Aktif */}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-t-md"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Bagian Kanan: Button Gabung Komunitas */}
          <div className="flex items-center">
            <Button variant="primary" className="text-sm px-5 py-2">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
