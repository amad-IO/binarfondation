import { Mail, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 14, strokeWidth = 2.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer id="kontak" className="w-full bg-white pt-12 lg:pt-16 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16">
          
          {/* Logo & Deskripsi (Lebih lebar) */}
          <div className="lg:w-[35%] xl:w-[40%] shrink-0 pr-4">
            <div className="mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                B
              </div>
              <span className="text-3xl font-extrabold text-blue-700 tracking-tight">Logo.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed pr-4 font-medium">
              Yayasan Binar Community adalah organisasi nirlaba yang bergerak di bidang kesehatan mental dan pendidikan anak serta remaja di Indonesia.
            </p>
          </div>

          {/* Links Wrapper */}
          <div className="flex-1 flex flex-wrap sm:flex-nowrap gap-10 sm:gap-8 lg:gap-10 xl:gap-16 lg:justify-start">
            
            {/* Menu */}
            <div className="w-[45%] sm:w-auto shrink-0">
              <h4 className="font-extrabold text-slate-800 mb-4 text-[15px]">Menu</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Beranda</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Program Kami</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Edukasi</a></li>
              </ul>
            </div>

            {/* Bergabung */}
            <div className="w-[45%] sm:w-auto shrink-0">
              <h4 className="font-extrabold text-slate-800 mb-4 text-[15px]">Bergabung</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Relawan</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Gabung Komunitas</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Kerja Sama</a></li>
              </ul>
            </div>

            {/* Dukung Kami */}
            <div className="w-[45%] sm:w-auto shrink-0">
              <h4 className="font-extrabold text-slate-800 mb-4 text-[15px]">Dukung Kami</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Donasi</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Sponsorship</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Media Partner</a></li>
              </ul>
            </div>

            {/* Kontak Kami */}
            <div className="w-[45%] sm:w-auto shrink-0">
              <h4 className="font-extrabold text-slate-800 mb-4 text-[15px]">Kontak Kami</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-600 p-1.5 rounded-full text-white shrink-0">
                    <Mail size={14} strokeWidth={2.5} />
                  </div>
                  <a href="mailto:hello@binarcommunity.org" className="hover:text-blue-600 transition-colors text-xs lg:text-sm">hello@binarcommunity.org</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-600 p-1.5 rounded-full text-white shrink-0">
                    <Phone size={14} strokeWidth={2.5} />
                  </div>
                  <a href="tel:081234567890" className="hover:text-blue-600 transition-colors text-xs lg:text-sm">0812-3456-7890</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-600 p-1.5 rounded-full text-white shrink-0">
                    <InstagramIcon size={14} strokeWidth={2.5} />
                  </div>
                  <a href="#" className="hover:text-blue-600 transition-colors text-xs lg:text-sm">@binar.community</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="w-full bg-[#3668C6] py-3 text-center">
        <p className="text-white/90 text-sm font-medium">
          &copy; 2026 Mochammad isthimata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
