import { useRef } from 'react';
import ProgramCard from './ProgramCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const programsData = [
  {
    id: 1,
    title: "Teman Sembuh",
    description: "Ruang curhat & dukungan sebaya untuk saling menguatkan.",
    image: null,
  },
  {
    id: 2,
    title: "Edukasi Mental Health",
    description: "Webinar, workshop, dan kelas edukasi seputar kesehatan mental.",
    image: null,
  },
  {
    id: 3,
    title: "Binar Goes to You",
    description: "Kegiatan edukasi & kampanye langsung ke sekolah, kampus, dan komunitas.",
    image: null,
  },
  {
    id: 4,
    title: "Charity & Social Action",
    description: "Aksi sosial, donasi, dan kegiatan nyata untuk berbagi kebaikan.",
    image: null,
  },
  {
    id: 5,
    title: "Konseling Gratis",
    description: "Layanan konseling dengan tenaga ahli bagi remaja yang membutuhkan bantuan.",
    image: null,
  },
  {
    id: 6,
    title: "Binar Volunteer Camp",
    description: "Pelatihan khusus untuk relawan agar lebih siap mendampingi anak-anak.",
    image: null,
  },
  {
    id: 7,
    title: "Festival Sehat Mental",
    description: "Acara tahunan berisi talkshow, art therapy, dan bazar kesehatan mental.",
    image: null,
  },
  {
    id: 8,
    title: "Pojok Curhat",
    description: "Menyediakan ruang khusus di sekolah untuk siswa bercerita dengan aman.",
    image: null,
  }
];

const Programs = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="program" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-slate-800 mb-4 tracking-tight">
            Program Kami
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Berbagai program untuk mendukung kesehatan mental anak dan remaja
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative group">
          
          {/* Tombol Kiri (Muncul saat hover di layar besar) */}
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-blue-600 text-white rounded-full p-2.5 shadow-lg hover:bg-blue-700 hover:scale-110 transition-all focus:outline-none hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Geser Kiri"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Kontainer Scroll Horizontal */}
          <div 
            ref={scrollContainerRef} 
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2"
          >
            {programsData.map((program) => (
              <div key={program.id} className="snap-start shrink-0 flex">
                <ProgramCard 
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  onLinkClick={() => console.log(`Navigasi ke ${program.title}`)}
                />
              </div>
            ))}
          </div>

          {/* Tombol Kanan (Muncul saat hover di layar besar) */}
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-blue-600 text-white rounded-full p-2.5 shadow-lg hover:bg-blue-700 hover:scale-110 transition-all focus:outline-none hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
            aria-label="Geser Kanan"
          >
            <ChevronRight size={24} />
          </button>
          
        </div>

        {/* Indikator Mobile (Optional hint for mobile users) */}
        <div className="md:hidden flex justify-center mt-2">
          <p className="text-xs text-slate-400">Geser untuk melihat program lainnya ➔</p>
        </div>

      </motion.div>
    </section>
  );
};

export default Programs;
