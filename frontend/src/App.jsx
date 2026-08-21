import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import EducationPage from './pages/EducationPage';
import VolunteerPage from './pages/VolunteerPage';
import GalleryPage from './pages/GalleryPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="tentang-kami" element={<AboutPage />} />
                    <Route path="program" element={<ProgramsPage />} />
                    <Route path="edukasi" element={<EducationPage />} />
                    <Route path="relawan" element={<VolunteerPage />} />
                    <Route path="galeri" element={<GalleryPage />} />
                    <Route path="donasi" element={<DonatePage />} />
                    <Route path="kontak" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

