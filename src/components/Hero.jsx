import Button from './Button';
import loveIcon from '../assets/love.svg';
import loveDonate from '../assets/love 1.svg';
import heroImage from '../assets/gambar 1.png';
import curveShape from '../assets/curve1.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="beranda" className="relative w-full h-screen min-h-[650px] flex items-center pt-20 overflow-hidden bg-white">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-yellow-100/40 rounded-full blur-[80px]"></div>
      </div>

      {/* Container Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-8 gap-y-6 pt-6 pb-0 lg:pt-24 lg:pb-0">
        
        {/* TEXT AREA (Mobile: Atas, Desktop: Kiri Atas) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-end lg:justify-center z-10 pt-4 lg:pt-0 pb-10 lg:pb-0"
        >
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Ruang Aman <br className="hidden sm:block" />
            untuk Tumbuh & <br className="hidden sm:block" />
            Pulih Bersama
            <img src={loveIcon} alt="Love" className="inline-block w-8 sm:w-10 lg:w-12 ml-2 sm:ml-4 align-baseline -translate-y-1 sm:-translate-y-2" />
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
            Yayasan Binar Community hadir untuk mendampingi anak dan remaja Indonesia agar sehat mental, berani berbagi, dan tumbuh menjadi versi terbaik diri mereka.
          </p>
        </motion.div>

        {/* IMAGE AREA (Mobile: Tengah, Desktop: Kanan Full Row) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-2 lg:col-start-2 lg:row-span-2 relative flex items-end justify-center w-full h-full min-h-[300px] lg:min-h-0 z-0"
        >
          {/* Latar Belakang Gelombang Asli (SVG) */}
          <img 
            src={curveShape} 
            alt="Background Curve" 
            className="absolute -z-10 w-[180%] sm:w-[150%] lg:w-[145%] max-w-none bottom-0 right-[-10%] lg:right-[-25%] object-contain"
          />
          
          <img 
            src={heroImage} 
            alt="Relawan Binar Community" 
            className="relative z-10 w-full max-w-[450px] lg:max-w-none lg:w-[115%] object-contain lg:translate-x-8 drop-shadow-sm"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', 
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
            }}
          />
        </motion.div>

        {/* BUTTONS AREA (Mobile: Bawah, Desktop: Kiri Bawah) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="order-3 lg:col-start-1 lg:row-start-2 flex flex-wrap items-start gap-3 sm:gap-4 z-10 mt-2 lg:mt-0"
        >
          <Button variant="primary">Gabung komunitas</Button>
          <Button variant="outline">Jadi Relawan</Button>
          {/* Tombol Donasi dengan Ikon */}
          <Button variant="accent" className="flex items-center gap-2">
            <img src={loveDonate} alt="Love icon" className="w-4 h-4" />
            Donasi Sekarang
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
