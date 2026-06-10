import { Heart } from 'lucide-react';

const SupportBanner = () => {
  return (
    <section id="donasi" className="w-full mt-6 lg:mt-8 mb-16 lg:mb-24">
      <div className="w-full bg-[#FFF4D2] rounded-[2rem] p-6 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        
        {/* Teks */}
        <div className="text-center md:text-left">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">Dukung Binar Foundation</h3>
          <p className="text-slate-700 text-sm lg:text-base">
            Setiap dukunganmu berarti untuk kesehatan mental anak dan remaja Indonesia.
          </p>
        </div>

        {/* Tombol Donasi */}
        <button 
            onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Donasi Sekarang' } }))}
            className="bg-[#FCD368] hover:bg-[#f0c558] transition-colors text-slate-800 font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-full flex items-center gap-2 whitespace-nowrap shadow-sm"
        >
            Donasi Sekarang <Heart size={20} className="fill-slate-800" />
        </button>

      </div>
    </section>
  );
};

export default SupportBanner;
