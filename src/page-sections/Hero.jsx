import { useRef, useEffect } from 'react';
import Button from '../components/Button';
import loveIcon from '../assets/love.svg';
import loveDonate from '../assets/love 1.svg';
import heroImage from '../assets/family.svg';
import curveShape from '../assets/curve1.svg';

const Hero = () => {
    const leftRef    = useRef(null);
    const rightRef   = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        // ── ENTRY ANIMATION ──────────────────────────────────────────────
        // Elemen sudah mulai opacity:0 dari JSX (style prop).
        // Di sini kita pasang transition lalu ubah ke opacity:1 + translateX(0)
        const triggerEntry = (el, fromX, fromY, delay) => {
            if (!el) return;
            el.style.transform  = `translateX(${fromX}px) translateY(${fromY}px)`;
            el.style.transition = `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`;
            requestAnimationFrame(() => requestAnimationFrame(() => {
                el.style.opacity   = '1';
                el.style.transform = 'translateX(0) translateY(0)';
            }));
        };

        triggerEntry(leftRef.current,    -40, 30, 0);
        triggerEntry(rightRef.current,    40,  0, 0.2);
        triggerEntry(buttonsRef.current, -40, 20, 0.4);

        // Setelah semua entry selesai, hapus transition agar scroll handler
        // dapat mengupdate transform secara instan tanpa lag/delay
        const clearTimer = setTimeout(() => {
            [leftRef, rightRef, buttonsRef].forEach(({ current: el }) => {
                if (el) el.style.transition = '';
            });
        }, 1600);

        // ── SCROLL PARALLAX ───────────────────────────────────────────────
        // Reproduksi useScroll + useTransform framer-motion dengan native scroll
        const handleScroll = () => {
            const scrollY  = window.scrollY;
            const progress = Math.min(scrollY / 400, 1);
            const opacity  = 1 - progress;
            const xLeft    = -200 * progress;
            const xRight   =  200 * progress;

            if (leftRef.current) {
                leftRef.current.style.opacity   = opacity;
                leftRef.current.style.transform = `translateX(${xLeft}px)`;
            }
            if (rightRef.current) {
                rightRef.current.style.opacity   = opacity;
                rightRef.current.style.transform = `translateX(${xRight}px)`;
            }
            if (buttonsRef.current) {
                buttonsRef.current.style.opacity   = opacity;
                buttonsRef.current.style.transform = `translateX(${xLeft}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(clearTimer);
        };
    }, []);

    return (
        <section
            id="beranda"
            className="relative w-full min-h-[100dvh] flex items-center pt-20 pb-6 lg:pt-20 lg:pb-0 overflow-hidden bg-white"
        >
            {/* Subtle Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-yellow-100/40 rounded-full blur-[80px]"></div>
            </div>



            {/* Container Layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-8 gap-y-0 lg:gap-y-6 pt-4 lg:pt-24 relative z-10">

                {/* TEXT AREA — dimulai opacity:0, dianimasikan via JS */}
                <div
                    ref={leftRef}
                    style={{ opacity: 0 }}
                    className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-end lg:justify-center pt-4 lg:pt-0 relative z-10"
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
                </div>

                {/* IMAGE AREA — dimulai opacity:0, dianimasikan via JS */}
                <div
                    ref={rightRef}
                    style={{ opacity: 0 }}
                    className="order-2 lg:col-start-2 lg:row-span-2 relative flex items-end justify-center w-full sm:min-h-[160px] lg:min-h-0"
                >
                    {/* Curve background — posisi asli di dalam image div */}
                    <img
                        src={curveShape}
                        alt=""
                        aria-hidden="true"
                        className="absolute -z-10 w-[200%] sm:w-[170%] lg:w-[175%] max-w-none bottom-0 right-[-15%] lg:right-[-35%] object-contain pointer-events-none"
                    />
                    <img
                        src={heroImage}
                        alt="Relawan Binar Community"
                        className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none lg:w-[82%] object-contain lg:translate-x-12 lg:translate-y-3 drop-shadow-sm"
                    />

                    {/* Floating Bubble */}
                    <div
                        className="absolute top-2 right-0 sm:top-8 sm:right-2 lg:top-0 lg:right-[4.5rem] z-20"
                        style={{ animation: 'heroBubble 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both' }}
                    >
                        <div className="relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105 rotate-3 hover:rotate-6">
                            <div className="bg-[#FFF4D2] px-4 py-2 lg:px-5 lg:py-3 rounded-[1.25rem] shadow-lg shadow-yellow-900/10 border border-yellow-200/50">
                                <span className="font-bold text-slate-800 text-xs sm:text-sm lg:text-base leading-snug block">
                                    #Berbinar <br /> Untuk Bersinar ✨
                                </span>
                            </div>
                            <div className="absolute -bottom-1.5 left-6 w-4 h-4 bg-[#FFF4D2] rotate-45 border-r border-b border-yellow-200/50 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* BUTTONS AREA — dimulai opacity:0, dianimasikan via JS */}
                <div
                    ref={buttonsRef}
                    style={{ opacity: 0 }}
                    className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-3 mt-2 lg:mt-0 relative z-10 lg:flex-row lg:flex-wrap lg:items-start"
                >
                    {/* Baris 1: Gabung komunitas — full width di mobile */}
                    <Button
                        variant="primary"
                        className="w-full lg:w-auto"
                        onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Gabung Komunitas' } }))}
                    >
                        Gabung komunitas
                    </Button>

                    {/* Baris 2: Jadi Relawan + Donasi berdampingan di mobile */}
                    <div className="flex gap-3 lg:contents">
                        <Button
                            variant="outline"
                            className="flex-1 lg:flex-none text-sm whitespace-nowrap"
                            onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Jadi Relawan' } }))}
                        >
                            Jadi Relawan
                        </Button>
                        <Button
                            variant="accent"
                            className="flex-1 lg:flex-none text-sm whitespace-nowrap flex items-center justify-center gap-1.5"
                            onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Donasi Sekarang' } }))}
                        >
                            <img src={loveDonate} alt="" className="w-3.5 h-3.5" />
                            Donasi Sekarang
                        </Button>
                    </div>
                </div>


            </div>

            <style>{`
                @keyframes heroBubble {
                    from { opacity: 0; transform: scale(0.8); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
