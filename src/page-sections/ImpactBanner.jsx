import { useState, useEffect, useRef } from 'react';
import impactImage from '../assets/creative team.svg';
import { Calendar, Heart, Users } from 'lucide-react';

// useInView dengan native IntersectionObserver — tidak perlu framer-motion
const useInView = (options = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (options.once) observer.disconnect();
            }
        }, { rootMargin: options.margin || '0px' });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return [ref, inView];
};

const AnimatedNumber = ({ value, duration = 2000, prefix = "+ " }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ once: true, margin: "-50px" });

    useEffect(() => {
        if (!inView) return;
        let start = null;
        let animationFrame;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // easeOutExpo untuk pergerakan awal cepat lalu melambat
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * value));
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };
        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [inView, value, duration]);

    return <span ref={ref}>{prefix}{count.toLocaleString('id-ID')}</span>;
};

const ImpactBanner = () => {
    return (
        <section className="w-full bg-[#3668C6] mt-16 lg:mt-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full">

                {/* Kontainer Flex utama dibatasi 85% lebar di desktop agar tidak nabrak gambar */}
                <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start py-8 lg:py-10 gap-8 xl:gap-16 w-full xl:w-[85%]">

                    <div className="text-center xl:text-left z-10 shrink-0 px-2">
                        <h2 className="text-lg min-[375px]:text-[20px] sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug tracking-tight xl:tracking-normal">
                            <span className="block whitespace-nowrap">Bersama, kita bisa jadi cahaya</span>
                            <span className="block">untuk lebih banyak jiwa</span>
                        </h2>
                        <p className="text-blue-100 text-sm lg:text-base font-medium">
                            Yuk jadi bagian dari gerakan kebaikan ini!
                        </p>
                    </div>

                    {/* Kolom Tengah: Statistik */}
                    <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-6 sm:gap-5 lg:gap-6 z-10 mt-4 sm:mt-0">

                        {/* Stat 1 */}
                        <div className="flex items-center gap-4 sm:gap-2 shrink-0">
                            <Calendar strokeWidth={1.5} color="white" className="w-12 h-12 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                            <div className="text-left">
                                <div className="text-3xl sm:text-lg lg:text-xl font-bold text-white"><AnimatedNumber value={20} /></div>
                                <div className="text-sm sm:text-[10px] font-medium text-blue-100">Kegiatan</div>
                            </div>
                        </div>

                        {/* Garis Pemisah */}
                        <div className="hidden sm:block w-px h-8 lg:h-10 bg-white/40"></div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-4 sm:gap-2 shrink-0">
                            <Heart strokeWidth={1.5} color="white" className="w-12 h-12 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                            <div className="text-left">
                                <div className="text-3xl sm:text-lg lg:text-xl font-bold text-white"><AnimatedNumber value={200} duration={2500} /></div>
                                <div className="text-sm sm:text-[10px] font-medium text-blue-100">Penerima Manfaat</div>
                            </div>
                        </div>

                        {/* Garis Pemisah */}
                        <div className="hidden sm:block w-px h-8 lg:h-10 bg-white/40"></div>

                        {/* Stat 3 */}
                        <div className="flex items-center gap-4 sm:gap-2 shrink-0">
                            <Users strokeWidth={1.5} color="white" className="w-12 h-12 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                            <div className="text-left">
                                <div className="text-3xl sm:text-lg lg:text-xl font-bold text-white"><AnimatedNumber value={50} /></div>
                                <div className="text-sm sm:text-[10px] font-medium text-blue-100">Relawan Aktif</div>
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
