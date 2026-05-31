import userIcon from '../assets/user 3.svg';
import globeIcon from '../assets/globe.svg';
import loveIcon from '../assets/love-3.svg';
import starIcon from '../assets/star.svg';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  // Variabel animasi untuk efek stagger (muncul berurutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    }
  };

  return (
    <section id="tentang-kami" className="w-full pt-16 lg:pt-24 pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Banner dengan animasi staggered */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#F8FAFC] rounded-[2rem] shadow-sm border border-slate-100 p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8"
        >
          
          {/* Tentang Kami */}
          <motion.div variants={cardVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="shrink-0 flex items-center justify-center">
                <img src={userIcon} alt="Tentang Kami" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1a2b4b]">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 text-sm lg:text-sm font-medium leading-relaxed">
              Bermula dari sebuah komunitas peduli kesehatan mental anak dan remaja, kini kami resmi bertransformasi menjadi Yayasan Binar Community.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Tentang Kami Selengkapnya' } }))} 
              className="text-blue-600 font-semibold text-sm mt-2 w-max hover:underline flex items-center gap-1 group"
            >
              Selengkapnya <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Visi */}
          <motion.div variants={cardVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="shrink-0 flex items-center justify-center">
                <img src={globeIcon} alt="Visi" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1a2b4b]">Visi</h2>
            </div>
            <p className="text-slate-600 text-sm lg:text-sm font-medium leading-relaxed">
              Terwujudnya generasi muda Indonesia yang sehat mental, berdaya, dan berani menjadi cahaya bagi sekitarnya.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div variants={cardVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="shrink-0 flex items-center justify-center">
                <img src={loveIcon} alt="Misi" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1a2b4b]">Misi</h2>
            </div>
            <ul className="space-y-3 text-slate-600 text-sm lg:text-sm font-medium leading-relaxed list-outside ml-4">
              {[
                "Memberikan edukasi kesehatan mental yang mudah diakses",
                "Menyediakan ruang aman untuk berbagi dan pulih",
                "Menggerakkan aksi nyata untuk kesehatan mental anak & remaja"
              ].map((item, index) => (
                <li key={index} className="list-disc pl-1">{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Nilai kami */}
          <motion.div variants={cardVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="shrink-0 flex items-center justify-center">
                <img src={starIcon} alt="Nilai kami" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1a2b4b]">Nilai Kami</h2>
            </div>
            <ul className="space-y-3">
              {["Empati", "Inklusif", "Aman & Nyaman", "Berkolaborasi", "Berdampak"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" className="shrink-0"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span className="text-slate-600 text-sm lg:text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
