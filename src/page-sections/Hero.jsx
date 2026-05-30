import Button from '../components/Button';
import loveIcon from '../assets/love.svg';
import loveDonate from '../assets/love 1.svg';
import heroImage from '../assets/family.svg';
import curveShape from '../assets/curve1.svg';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    // Opacity will go from 1 to 0 as user scrolls from 0 to 400px
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    // Split effect: left content moves left, right content moves right
    const xLeft = useTransform(scrollY, [0, 400], [0, -200]);
    const xRight = useTransform(scrollY, [0, 400], [0, 200]);

    return (
        <section
            id="beranda"
            className="relative w-full h-screen min-h-[650px] flex items-center pt-20 overflow-hidden bg-white"
        >
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
                    style={{ x: xLeft, opacity }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-end lg:justify-center z-10 pt-4 lg:pt-0 pb-10 lg:pb-0"
                >
                    <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-semibold text-slate-900/90 leading-[1.1] mb-6 tracking-tight">
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
                    style={{ x: xRight, opacity }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="order-2 lg:col-start-2 lg:row-span-2 relative flex items-end justify-center w-full h-full min-h-[300px] lg:min-h-0 z-0"
                >
                    {/* Latar Belakang Gelombang Asli (SVG) */}
                    <img
                        src={curveShape}
                        alt="Background Curve"
                        className="absolute -z-10 w-[200%] sm:w-[170%] lg:w-[175%] max-w-none bottom-0 right-[-15%] lg:right-[-35%] object-contain"
                    />

                    <img
                        src={heroImage}
                        alt="Relawan Binar Community"
                        className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none lg:w-[82%] object-contain lg:translate-x-12 lg:translate-y-3 drop-shadow-sm"
                    />

                    {/* Floating Bubble #Berbinar Untuk Bersinar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
                        className="absolute top-2 right-0 sm:top-8 sm:right-2 lg:top-0 lg:right-[4.5rem] z-20"
                    >
                        <div className="relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105 rotate-3 hover:rotate-6">
                            <div className="bg-[#FFF4D2] px-4 py-2 lg:px-5 lg:py-3 rounded-[1.25rem] shadow-lg shadow-yellow-900/10 border border-yellow-200/50">
                                <span className="font-bold text-slate-800 text-xs sm:text-sm lg:text-base leading-snug block">
                                    #Berbinar <br /> Untuk Bersinar ✨
                                </span>
                            </div>
                            <div className="absolute -bottom-1.5 left-6 w-4 h-4 bg-[#FFF4D2] rotate-45 border-r border-b border-yellow-200/50 rounded-sm"></div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* BUTTONS AREA (Mobile: Bawah, Desktop: Kiri Bawah) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ x: xLeft, opacity }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="order-3 lg:col-start-1 lg:row-start-2 flex flex-wrap items-start gap-3 sm:gap-4 z-10 mt-2 lg:mt-0"
                >
                    <Button variant="primary" onClick={() => window.dispatchEvent(new Event('show-maintenance'))}>Gabung komunitas</Button>
                    <Button variant="outline" onClick={() => window.dispatchEvent(new Event('show-maintenance'))}>Jadi Relawan</Button>
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
