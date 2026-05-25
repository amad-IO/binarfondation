import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import ImpactBanner from './components/ImpactBanner';
import ArticlesAndRecruitment from './components/ArticlesAndRecruitment';
import SupportBanner from './components/SupportBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Bagian Hero / Beranda utama */}
      <Hero />

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-12 lg:mt-20">
        
        {/* Bagian Tentang Kami */}
        <About />
        
        {/* Bagian Program */}
        <Programs />
      </main>

      {/* Bagian Impact Banner (Full Width) */}
      <ImpactBanner />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Artikel & Open Recruitment */}
        <ArticlesAndRecruitment />

        {/* Bagian Support / Dukungan */}
        <SupportBanner />
      </main>

      {/* Bagian Kaki (Footer) */}
      <Footer />
    </div>
  );
}

export default App;
