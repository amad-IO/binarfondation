import userIcon from '../assets/user 3.svg';
import globeIcon from '../assets/globe.svg';
import loveIcon from '../assets/love-3.svg';
import starIcon from '../assets/star.svg';

const About = () => {
  return (
    <section id="tentang-kami" className="w-full pt-12 lg:pt-4 pb-12 lg:pb-20">
      {/* Card Container */}
      <div className="bg-[#F4F7FC] rounded-[2rem] p-8 md:p-10 lg:p-12 shadow-sm border border-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
          
          {/* Tentang Kami */}
          <div className="flex flex-col p-4 sm:p-6 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-slate-100 group">
            <div className="flex items-center gap-4 mb-4">
              <img src={userIcon} alt="Tentang Kami" className="w-11 h-11 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium">
              Bermula dari sebuah komunitas peduli kesehatan mental anak dan remaja, kini kami resmi bertransformasi menjadi Yayasan Binar Community.
            </p>
          </div>

          {/* Visi */}
          <div className="flex flex-col p-4 sm:p-6 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-slate-100 group">
            <div className="flex items-center gap-4 mb-4">
              <img src={globeIcon} alt="Visi" className="w-11 h-11 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Visi</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium">
              Terwujudnya generasi muda Indonesia yang sehat mental, berdaya, dan berani menjadi cahaya bagi sekitarnya.
            </p>
          </div>

          {/* Misi */}
          <div className="flex flex-col p-4 sm:p-6 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-slate-100 group">
            <div className="flex items-center gap-4 mb-4">
              <img src={loveIcon} alt="Misi" className="w-11 h-11 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Misi</h2>
            </div>
            <ul className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium list-disc list-outside ml-5 space-y-1.5">
              <li>Memberikan edukasi kesehatan mental yang mudah diakses</li>
              <li>Menyediakan ruang aman untuk berbagi dan pulih</li>
              <li>Menggerakkan aksi nyata untuk kesehatan mental anak & remaja</li>
            </ul>
          </div>

          {/* Nilai kami */}
          <div className="flex flex-col p-4 sm:p-6 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-slate-100 group">
            <div className="flex items-center gap-4 mb-4">
              <img src={starIcon} alt="Nilai kami" className="w-11 h-11 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Nilai kami</h2>
            </div>
            <ul className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium list-disc list-outside ml-5 space-y-1.5">
              <li>Empati</li>
              <li>Inklusif</li>
              <li>Aman & Nyaman</li>
              <li>Berkolaborasi</li>
              <li>Berdampak</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
