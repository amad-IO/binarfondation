import { Link } from 'react-router-dom';
import logo2 from '../assets/logo 2.PNG';

const menuLinks = [
    { name: 'Beranda', to: '/' },
    { name: 'Tentang Kami', to: '/tentang-kami' },
    { name: 'Program', to: '/program' },
    { name: 'Edukasi', to: '/edukasi' },
];

const bergabungLinks = [
    { name: 'Relawan', to: '/relawan' },
    { name: 'Gabung Komunitas', to: '/relawan' },
    { name: 'Kerja Sama', to: '/kontak' },
];

const dukungLinks = [
    { name: 'Donasi', to: '/donasi' },
    { name: 'Media Partner', to: '/kontak' },
];

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-20 font-sans relative rounded-t-[3rem] shadow-[0_-10px_40px_rgba(59,130,246,0.03)]">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                
                {/* Mengurangi gap di sini akan membuat bagian menu bergeser ke kiri */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 xl:gap-10">

                    {/* Kolom 1: Logo & Deskripsi */}
                    <div className="w-full lg:max-w-[380px] xl:max-w-[420px] shrink-0 relative">
                        {/* Mascot Peluk Diri */}
                        <img 
                            src="/peluk diri.PNG" 
                            alt="Binar Mascot Peluk Diri" 
                            className="absolute -top-32 -left-6 w-24 sm:w-32 z-20 animate-float drop-shadow-md pointer-events-none"
                        />
                        <div className="-mt-8 -mb-6 -ml-7">
                            <img
                                src={logo2}
                                alt="Binar Foundation Logo"
                                className="w-48 sm:w-52 object-contain object-left"
                            />
                        </div>
                        <p className="-mt-10 text-[14px] font-medium text-slate-500 leading-relaxed pr-2">
                            BINAR FOUNDATION adalah yayasan yang berfokus pada kesehatan mental dan pendidikan untuk anak serta remaja di Indonesia.
                        </p>
                    </div>

                    {/* Kolom 2-5: Menu, Bergabung, Dukung, Kontak */}
                    <div className="flex-1 grid grid-cols-2 xl:grid-cols-4 gap-8 gap-y-10 pt-2 w-full">
                        
                        {/* Menu */}
                        <div className="col-span-1">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Menu</h4>
                            <ul className="space-y-3">
                                {menuLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bergabung */}
                        <div className="col-span-1">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Bergabung</h4>
                            <ul className="space-y-3">
                                {bergabungLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dukung Kami (Sisi Kiri di Mobile) */}
                        <div className="col-span-1">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Dukung Kami</h4>
                            <ul className="space-y-3">
                                {dukungLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak Kami (Sisi Kanan di Mobile) */}
                        <div className="col-span-1">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Kontak Kami</h4>
                            <ul className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:flex-col lg:space-y-3 lg:gap-0">
                                {/* Email */}
                                <li>
                                    <a href="mailto:binarfoundation1@gmail.com" className="flex items-center gap-2.5 text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                        </svg>
                                        <span className="hidden lg:inline">binarfoundation1@gmail.com</span>
                                    </a>
                                </li>
                                {/* Phone */}
                                <li>
                                    <a href="tel:082384516469" className="flex items-center gap-2.5 text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                        <span className="hidden lg:inline">0823 8451 6469</span>
                                    </a>
                                </li>
                                {/* Instagram */}
                                <li>
                                    <a href="https://www.instagram.com/binar.foundation" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2.5 text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-pink-600 transition-colors" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                        </svg>
                                        <span className="hidden lg:inline">@binar.foundation</span>
                                    </a>
                                </li>
                                {/* TikTok */}
                                <li>
                                    <a href="https://www.tiktok.com/@binar.foundation" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-2.5 text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                        <span className="hidden lg:inline">@binar.foundation</span>
                                    </a>
                                </li>
                                {/* YouTube */}
                                <li>
                                    <a href="https://www.youtube.com/@binar.foundation" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center gap-2.5 text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        <span className="hidden lg:inline">binar foundation</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Bar - Full Width Blue Background */}
            <div className="bg-[#1c5ce5] py-5 mt-6">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center text-center">
                    <p className="text-[14px] font-medium text-white tracking-wide">
                        © 2026 Rafif X Isthmata. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
