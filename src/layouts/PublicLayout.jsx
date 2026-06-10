import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MaintenanceNotification from '../components/MaintenanceNotification';

const PublicLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main className="pt-24 lg:pt-28">
                <Outlet />
            </main>
            <Footer />
            <MaintenanceNotification />
        </div>
    );
};

export default PublicLayout;