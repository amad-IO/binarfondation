import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Bagian Hero / Beranda utama */}
      <Hero />

      {/* Sections untuk Testing Scroll Navbar */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-20">
        
        <section id="tentang-kami" className="min-h-[80vh] flex flex-col items-center justify-center bg-blue-50 rounded-3xl shadow-sm border border-blue-100 p-8">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Tentang Kami</h2>
          <p className="text-blue-700">Cerita dan visi misi Yayasan Binar Community.</p>
        </section>
        
        <section id="program" className="min-h-[80vh] flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-5xl font-extrabold text-slate-800">Program</h2>
        </section>
        
        <section id="edukasi" className="min-h-[80vh] flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-5xl font-extrabold text-slate-800">Edukasi</h2>
        </section>
        
        <section id="relawan" className="min-h-[80vh] flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-5xl font-extrabold text-slate-800">Relawan</h2>
        </section>
        
        <section id="donasi" className="min-h-[80vh] flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-5xl font-extrabold text-slate-800">Donasi</h2>
        </section>
        
        <section id="kontak" className="min-h-[80vh] flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-20">
          <h2 className="text-5xl font-extrabold text-slate-800">Kontak</h2>
        </section>
        
      </main>
    </div>
  );
}

export default App;
