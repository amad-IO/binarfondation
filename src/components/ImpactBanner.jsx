import impactImage from '../assets/gambar 2.png';
import { Calendar, Heart, Users } from 'lucide-react';

const ImpactBanner = () => {
  return (
    <section className="w-full bg-[#3668C6] mt-16 lg:mt-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        
        {/* Kontainer Flex utama dibatasi 75% lebar di desktop agar tidak nabrak gambar */}
        <div className="flex flex-col xl:flex-row items-center justify-between py-8 lg:py-10 gap-8 lg:gap-10 w-full xl:w-[75%]">
          
          {/* Kolom Kiri: Teks */}
          <div className="flex-1 text-center xl:text-left z-10">
            <h2 className="text-2xl lg:text-[2rem] font-bold text-white mb-2 leading-snug tracking-tight">
              Bersama, kita bisa jadi cahaya <br className="hidden xl:block" />
              untuk lebih banyak jiwa
            </h2>
            <p className="text-blue-100 text-sm lg:text-base">
              Yuk jadi bagian dari gerakan kebaikan ini!
            </p>
          </div>

          {/* Kolom Tengah: Statistik */}
          <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-6 sm:gap-6 lg:gap-8 z-10">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <Calendar size={56} strokeWidth={1} color="white" className="w-12 h-12 lg:w-14 lg:h-14" />
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">+ 50</div>
                <div className="text-xs lg:text-sm font-medium text-blue-100">Kegiatan</div>
              </div>
            </div>
            
            {/* Garis Pemisah */}
            <div className="hidden sm:block w-px h-12 lg:h-14 bg-white/40"></div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <Heart size={56} strokeWidth={1} color="white" className="w-12 h-12 lg:w-14 lg:h-14" />
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">+ 50.000</div>
                <div className="text-xs lg:text-sm font-medium text-blue-100">Penerima Manfaat</div>
              </div>
            </div>

            {/* Garis Pemisah */}
            <div className="hidden sm:block w-px h-12 lg:h-14 bg-white/40"></div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <Users size={56} strokeWidth={1} color="white" className="w-12 h-12 lg:w-14 lg:h-14" />
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">+ 300</div>
                <div className="text-xs lg:text-sm font-medium text-blue-100">Relawan Aktif</div>
              </div>
            </div>

          </div>
        </div>

        {/* Gambar Relawan Pop-out */}
        {/* Menggunakan fixed width (w-[450px]) bukan max-w, agar gambar dipaksa membesar melampaui ukuran aslinya jika perlu */}
        <div className="w-full xl:w-auto flex justify-center xl:block xl:absolute xl:right-0 xl:bottom-0 z-20 mt-8 xl:mt-0 pointer-events-none">
          <img 
            src={impactImage} 
            alt="Relawan Binar Community" 
            className="w-[280px] xl:w-[480px] xl:max-w-none object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ImpactBanner;
