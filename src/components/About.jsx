import userIcon from '../assets/user 3.svg';
import globeIcon from '../assets/globe.svg';
import loveIcon from '../assets/love-3.svg';
import starIcon from '../assets/star.svg';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
        
        {/* Container Grid dengan animasi staggered */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          
          {/* Tentang Kami */}
          <motion.div variants={cardVariants} className="bg-[#F4F7FC] p-6 lg:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 group">
            <div className="flex flex-col gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-100/80">
                <img src={userIcon} alt="Tentang Kami" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">Tentang Kami</h2>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  Bermula dari sebuah komunitas peduli kesehatan mental anak dan remaja, kini kami resmi bertransformasi menjadi Yayasan Binar Community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visi */}
          <motion.div variants={cardVariants} className="bg-[#F4F7FC] p-6 lg:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 group">
            <div className="flex flex-col gap-5">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50/80 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-indigo-100/80">
                <img src={globeIcon} alt="Visi" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">Visi</h2>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  Terwujudnya generasi muda Indonesia yang sehat mental, berdaya, dan berani menjadi cahaya bagi sekitarnya.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Misi */}
          <motion.div variants={cardVariants} className="bg-[#F4F7FC] p-6 lg:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 group">
            <div className="flex flex-col gap-5">
              <div className="w-14 h-14 rounded-2xl bg-rose-50/80 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-rose-100/80">
                <img src={loveIcon} alt="Misi" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Misi</h2>
                <ul className="space-y-3">
                  {[
                    "Memberikan edukasi kesehatan mental yang mudah diakses",
                    "Menyediakan ruang aman untuk berbagi dan pulih",
                    "Menggerakkan aksi nyata untuk kesehatan mental"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 bg-blue-100 p-0.5 rounded-full">
                        <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-slate-500 leading-relaxed text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Nilai kami */}
          <motion.div variants={cardVariants} className="bg-[#F4F7FC] p-6 lg:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 group">
            <div className="flex flex-col gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-50/80 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-100/80">
                <img src={starIcon} alt="Nilai kami" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Nilai Kami</h2>
                <ul className="space-y-3">
                  {["Empati", "Inklusif", "Aman & Nyaman", "Berkolaborasi", "Berdampak"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="shrink-0 bg-blue-100 p-0.5 rounded-full">
                        <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-slate-500 leading-relaxed text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
