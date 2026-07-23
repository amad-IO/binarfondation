import { motion, useScroll, useTransform } from 'framer-motion';

const PageHeader = ({ title, eyebrow, className = "bg-transparent pt-6 lg:pt-10 pb-8 lg:pb-12" }) => {
    const { scrollY } = useScroll();
    // Move the line to the right up to 100px as the user scrolls down 400px
    const xLine = useTransform(scrollY, [0, 400], [0, 100]);
    return (
        <section className={`w-full relative overflow-hidden ${className}`}>
            {/* Ornamen Latar Belakang (Bintang & Maskot) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <svg className="absolute top-[10%] right-[10%] w-6 h-6 text-yellow-400/60 animate-float" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="absolute bottom-[20%] left-[5%] w-4 h-4 text-blue-300/60 animate-float-delayed" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="absolute top-[40%] right-[3%] w-3 h-3 text-emerald-400/50 animate-float" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <img 
                    src="/tersipu malu.PNG" 
                    alt="Dekorasi Binar" 
                    className="absolute -top-10 -right-10 w-32 sm:w-40 lg:w-48 opacity-[0.07] -rotate-12 select-none"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="relative inline-block max-w-4xl">
                    {eyebrow && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
                        </motion.div>
                    )}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: eyebrow ? 0.1 : 0 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
                    >
                        {title}
                    </motion.h1>
                    
                    {/* Elemen Dekoratif: Garis Aksen Minimalis */}
                    <motion.div 
                        style={{ x: xLine }}
                        className="mt-6 flex items-center gap-2"
                    >
                        <motion.div 
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "circOut" }}
                            className="h-1.5 w-16 bg-blue-600 rounded-full origin-left"
                        />
                        <motion.div 
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.35, ease: "circOut" }}
                            className="h-1.5 w-4 bg-amber-400 rounded-full origin-left"
                        />
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 300 }}
                            className="h-1.5 w-1.5 bg-emerald-400 rounded-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;