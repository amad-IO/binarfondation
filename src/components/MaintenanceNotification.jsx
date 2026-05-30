import { useState, useEffect } from 'react';

const MaintenanceNotification = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleShow = () => {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3500); // Sembunyikan setelah 3.5 detik
        };

        window.addEventListener('show-maintenance', handleShow);
        return () => window.removeEventListener('show-maintenance', handleShow);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 max-w-sm w-[90vw] sm:w-[380px] bg-white rounded-xl shadow-2xl p-5 border-l-4 border-[#1c5ce5] transform transition-all duration-500 z-[9999] flex gap-4 items-start ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'
            }`}
        >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1c5ce5]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
            </div>
            <div className="flex-1 pt-0.5">
                <h4 className="text-[16px] font-bold text-slate-800 mb-1">Fitur Sedang Diperbarui</h4>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                    Halo sahabat Binar! Mohon maaf ya, fitur ini sedang dalam perbaikan rutin. Silakan coba lagi nanti! 😊
                </p>
            </div>
            <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                aria-label="Tutup notifikasi"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    );
};

export default MaintenanceNotification;
