import { Link } from 'react-router-dom';
import logo2 from '../assets/logo 2.PNG';

const menuLinks = [
    { name: 'Beranda', to: '/' },
    { name: 'Tentang Kami', to: '/tentang-kami' },
    { name: 'Program Kami', to: '/program' },
    { name: 'Edukasi', to: '/edukasi' },
];

const bergabungLinks = [
    { name: 'Relawan', to: '/relawan' },
    { name: 'Gabung Komunitas', to: '/relawan' },
    { name: 'Kerja Sama', to: '/kontak' },
];

const dukungLinks = [
    { name: 'Donasi', to: '/donasi' },
    { name: 'Sponsorship', to: '/donasi' },
    { name: 'Media Partner', to: '/kontak' },
];

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-16 font-sans">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                
                {/* Mengurangi gap di sini akan membuat bagian menu bergeser ke kiri */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 xl:gap-10">

                    {/* Kolom 1: Logo & Deskripsi */}
                    <div className="w-full lg:max-w-[380px] xl:max-w-[420px] shrink-0">
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
                    <div className="flex-1 flex flex-wrap sm:flex-nowrap justify-between gap-8 lg:gap-4 xl:gap-8 pt-2">
                        
                        {/* Menu */}
                        <div className="min-w-[120px]">
                            {/* Font size dibesarkan dari 16px ke 18px */}
                            <h4 className="text-[18px] font-extrabold text-slate-900 mb-6">Menu</h4>
                            <ul className="space-y-4">
                                {menuLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bergabung */}
                        <div className="min-w-[140px]">
                            <h4 className="text-[18px] font-extrabold text-slate-900 mb-6">Bergabung</h4>
                            <ul className="space-y-4">
                                {bergabungLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dukung Kami */}
                        <div className="min-w-[130px]">
                            <h4 className="text-[18px] font-extrabold text-slate-900 mb-6">Dukung Kami</h4>
                            <ul className="space-y-4">
                                {dukungLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak Kami */}
                        <div className="min-w-[240px]">
                            <h4 className="text-[18px] font-extrabold text-slate-900 mb-6">Kontak Kami</h4>
                            <ul className="space-y-4">
                                {/* Email */}
                                <li>
                                    <a href="mailto:binarfoundation1@gmail.com" className="flex items-center gap-3 text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c5ce5] flex items-center justify-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                            </svg>
                                        </span>
                                        binarfoundation1@gmail.com
                                    </a>
                                </li>
                                {/* Phone */}
                                <li>
                                    <a href="tel:082384516469" className="flex items-center gap-3 text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c5ce5] flex items-center justify-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                            </svg>
                                        </span>
                                        0823 8451 6469
                                    </a>
                                </li>
                                {/* Instagram */}
                                <li>
                                    <a href="https://instagram.com/binar.community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c5ce5] flex items-center justify-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                            </svg>
                                        </span>
                                        @binar.foundation
                                    </a>
                                </li>
                                {/* TikTok */}
                                <li>
                                    <a href="https://www.tiktok.com/@binar.community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c5ce5] flex items-center justify-center text-white">
                                            <span className="text-xs font-bold">TT</span>
                                        </span>
                                        @binar.foundation
                                    </a>
                                </li>
                                {/* YouTube */}
                                <li>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[16px] font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c5ce5] flex items-center justify-center text-white">
                                            <span className="text-[10px] font-bold">YT</span>
                                        </span>
                                        binar foundation
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
