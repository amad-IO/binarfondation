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
        <div className="min-h-screen bg-transparent font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative isolate overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
                <div className="absolute top-40 right-[-6rem] h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
                <div className="absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-emerald-100/35 blur-3xl" />
            </div>
            <Navbar />
            <main className="relative z-10 pt-24 lg:pt-28">
                <Outlet />
            </main>
            <Footer />
            <MaintenanceNotification />
        </div>
    );
};

export default PublicLayout;