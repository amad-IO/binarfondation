import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import loveIcon from '../assets/love.svg';
import loveDonate from '../assets/love 1.svg';
import heroImage from '../assets/family.svg';
import curveShape from '../assets/curve1.svg';

const Hero = () => {
    const leftRef    = useRef(null);
    const rightRef   = useRef(null);
    const buttonsRef = useRef(null);
    const navigate = useNavigate();

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
            className="relative w-full pt-28 pb-12 lg:pt-24 lg:pb-12 overflow-hidden bg-white"
        >
            {/* Subtle Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[100px]"></div>
                <div className="absolute top-[45%] right-[15%] w-[40%] h-[40%] bg-yellow-100/40 rounded-full blur-[80px]"></div>
                {/* Fade out mask at the bottom to prevent sharp cut-off line */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Container Layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:items-center gap-x-8 lg:gap-x-10 gap-y-8 relative z-10">

                {/* LEFT COLUMN (Text + Buttons) */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                    {/* TEXT AREA */}
                    <div
                        ref={leftRef}
                        style={{ opacity: 0 }}
                    >
                        <h1 className="text-[2.25rem] sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-slate-900/90 leading-[1.1] mb-4 tracking-tight">
                            Ruang Aman untuk Tumbuh & <br className="hidden sm:block" /> Pulih Bersama
                            <img src={loveIcon} alt="Love" className="inline-block w-6 sm:w-8 lg:w-10 ml-2 align-baseline -translate-y-1" />
                        </h1>
                        <p className="text-base lg:text-base text-slate-500 leading-relaxed max-w-xl">
                            Binar Foundation hadir untuk mendampingi anak dan remaja Indonesia agar sehat mental, berani berbagi, dan tumbuh menjadi versi terbaik diri mereka.
                        </p>
                    </div>

                    {/* BUTTONS AREA */}
                    <div
                        ref={buttonsRef}
                        style={{ opacity: 0 }}
                        className="flex flex-col gap-3 mt-6 lg:mt-8 relative z-10 sm:flex-row sm:items-start"
                    >
                        <Button
                            variant="primary"
                            className="w-full sm:w-auto"
                            onClick={() => navigate('/relawan')}
                        >
                            Gabung komunitas
                        </Button>
                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                className="flex-1 sm:flex-none text-sm whitespace-nowrap"
                                onClick={() => navigate('/relawan')}
                            >
                                Jadi Relawan
                            </Button>
                            <Button
                                variant="accent"
                                className="flex-1 sm:flex-none text-sm whitespace-nowrap flex items-center justify-center gap-1.5"
                                onClick={() => navigate('/donasi')}
                            >
                                <img src={loveDonate} alt="" className="w-3.5 h-3.5" />
                                Donasi Sekarang
                            </Button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (Image) */}
                <div
                    ref={rightRef}
                    style={{ opacity: 0 }}
                    className="order-1 lg:order-2 w-full max-w-md lg:max-w-none lg:w-[90%] mx-auto lg:ml-auto relative z-10"
                >
                    <img
                        src={curveShape}
                        alt=""
                        aria-hidden="true"
                        className="absolute -z-10 w-[200%] sm:w-[150%] max-w-none -bottom-10 -right-20 object-cover pointer-events-none opacity-50"
                    />
                    <img
                        src={heroImage}
                        alt="Relawan Binar Foundation"
                        fetchPriority="high"
                        className="relative z-10 w-full max-h-[50vh] lg:max-h-[60vh] object-contain drop-shadow-sm mx-auto"
                    />

                    {/* Floating Bubble */}
                    <div
                        className="absolute top-0 right-0 sm:top-8 sm:right-0 z-20"
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
