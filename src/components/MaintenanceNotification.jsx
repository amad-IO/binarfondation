import { useState, useEffect } from 'react';
import questionsSvg from '../assets/questions.svg';
import logo2Png from '../assets/logo 2.PNG';
import { X } from 'lucide-react';

const MaintenanceNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [featureName, setFeatureName] = useState('');

    useEffect(() => {
        const handleShow = (e) => {
            // Retrieve feature name from custom event detail, default to a generic text
            const feature = e.detail?.feature || 'tersebut';
            setFeatureName(feature);
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 5000); // Auto close after 5 seconds
        };

        window.addEventListener('show-maintenance', handleShow);
        return () => window.removeEventListener('show-maintenance', handleShow);
    }, []);

    return (
        <>
            {/* Mobile Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/40 z-[9998] md:hidden transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsVisible(false)}
            />

            <div className={`fixed z-[9999] pointer-events-none flex 
                /* Mobile positioning (center) */
                inset-0 items-center justify-center
                /* Desktop positioning (bottom right) */
                md:inset-auto md:bottom-10 md:right-10 md:left-auto
                transition-all duration-500 ease-out
                ${isVisible ? 'opacity-100' : 'opacity-0 md:opacity-100 pointer-events-none'}
            `}>
                
                <div className={`pointer-events-auto relative bg-white rounded-[1.25rem] shadow-2xl overflow-hidden transition-all duration-500 
                    w-[85vw] max-w-[280px] md:max-w-none md:w-[520px] p-4 md:py-5 md:px-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border border-blue-50
                    ${isVisible ? 'scale-100 md:translate-x-0' : 'scale-95 md:scale-100 md:translate-x-[150%]'}
                `}>
                    
                    {/* Background Watermark */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
                        <img src={logo2Png} alt="watermark" className="w-full h-[140%] object-contain scale-[1.4] translate-x-6 md:scale-[1.2] md:translate-x-24" />
                    </div>

                    {/* macOS buttons (decorative & functional) */}
                    <div className="absolute top-3 left-3 flex gap-1.5 z-20 group">
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-[#FF3B30] flex items-center justify-center hover:bg-red-500 transition-colors focus:outline-none"
                            aria-label="Tutup"
                        >
                            <X size={8} className="text-white/90 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                        </button>
                        <div className="w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-[#FFCC00]"></div>
                        <div className="w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-[#34C759]"></div>
                    </div>

                {/* Left: Illustration */}
                <div className="flex-shrink-0 flex justify-center mt-3 md:mt-0 z-10">
                    <img src={questionsSvg} alt="Maintenance" className="w-16 md:w-[130px] object-contain drop-shadow-sm" />
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[2px] bg-[#1C5CE5] rounded-full h-20 flex-shrink-0 z-10 mx-1"></div>

                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col items-center text-center z-10 px-1 mt-1 md:mt-0">
                    <h3 className="text-[15px] md:text-[19px] font-bold text-[#1C5CE5] mb-1.5 tracking-tight whitespace-nowrap">
                        Fitur Sedang Maintenance
                    </h3>
                    <p className="text-slate-800 text-[11px] md:text-[13px] leading-snug md:leading-relaxed font-medium">
                        Halo sahabat Binar! Mohon maaf ya, fitur {featureName !== 'tersebut' ? <span className="font-bold text-[#1C5CE5]">"{featureName}"</span> : 'ini'} sedang dalam perbaikan rutin. Silakan coba lagi nanti! 😊
                    </p>
                </div>

            </div>
        </div>
        </>
    );
};

export default MaintenanceNotification;
