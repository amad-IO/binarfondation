import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './page-sections/Hero'; // Static import — tampil pertama, harus cepat

// Lazy load semua section di bawah Hero
// Ini memecah bundle menjadi chunk terpisah yang diload sesuai kebutuhan
const About                 = lazy(() => import('./page-sections/About'));
const Programs              = lazy(() => import('./page-sections/Programs'));
const ImpactBanner          = lazy(() => import('./page-sections/ImpactBanner'));
const ArticlesAndRecruitment = lazy(() => import('./page-sections/ArticlesAndRecruitment'));
const SupportBanner         = lazy(() => import('./page-sections/SupportBanner'));
const Footer                = lazy(() => import('./components/Footer'));
const MaintenanceNotification = lazy(() => import('./components/MaintenanceNotification'));

// Skeleton loader sederhana sebagai fallback saat section sedang diload
function SectionSkeleton() {
    return (
        <div className="w-full py-20 flex items-center justify-center">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-300 animate-bounce [animation-delay:0ms]" />
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]" />
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero: static import — tampil langsung tanpa menunggu */}
            <Hero />

            {/* Semua section di bawah ini di-lazy load */}
            <Suspense fallback={<SectionSkeleton />}>
                {/* Main Content Area */}
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-12 lg:mt-20">
                    {/* Bagian Tentang Kami */}
                    <About />
                </main>

                {/* Bagian Program (Full Width) */}
                <Programs />

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

                <MaintenanceNotification />
            </Suspense>
        </div>
    );
}

export default App;

