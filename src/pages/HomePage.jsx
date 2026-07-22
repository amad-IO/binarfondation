import { Link } from 'react-router-dom';
import { Info, BookOpen, Users, HeartHandshake } from 'lucide-react';
import Hero from '../page-sections/Hero';
import UpcomingActivities from '../page-sections/UpcomingActivities';
import ImpactBanner from '../page-sections/ImpactBanner';

const quickLinks = [
    {
        to: '/tentang-kami',
        label: 'Tentang Kami',
        description: 'Visi, misi, dan nilai yang jadi dasar gerakan Binar.',
        icon: Info,
        iconBg: 'bg-violet-50',
        iconColor: 'text-violet-700',
        cardBg: 'bg-gradient-to-br from-violet-50 via-white to-blue-50',
        borderColor: 'border-violet-100/80',
    },
    {
        to: '/program',
        label: 'Program',
        description: 'Rangkaian program yang mendampingi anak dan remaja.',
        icon: BookOpen,
        iconBg: 'bg-teal-50',
        iconColor: 'text-teal-700',
        cardBg: 'bg-gradient-to-br from-teal-50 via-white to-cyan-50',
        borderColor: 'border-teal-100/80',
    },
    {
        to: '/relawan',
        label: 'Relawan',
        description: 'Cara bergabung dan berkontribusi bersama tim Binar.',
        icon: Users,
        iconBg: 'bg-orange-50',
        iconColor: 'text-orange-700',
        cardBg: 'bg-gradient-to-br from-orange-50 via-white to-amber-50',
        borderColor: 'border-orange-100/80',
    },
    {
        to: '/donasi',
        label: 'Donasi',
        description: 'Dukung gerakan kebaikan lewat kontribusi yang berdampak.',
        icon: HeartHandshake,
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-700',
        cardBg: 'bg-gradient-to-br from-amber-50 via-white to-rose-50',
        borderColor: 'border-amber-100/80',
    },
];

const HomePage = () => {
    return (
        <>
            <Hero />
            
            <UpcomingActivities />

            <section className="w-full py-14 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="flex flex-col gap-3 mb-8 lg:mb-10 max-w-3xl">
                        <span className="inline-flex w-max items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">
                            Mulai dari sini
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900">
                            Jelajahi Binar lebih dekat
                        </h2>
                        <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
                            Setiap halaman dirancang untuk memberikan gambaran lengkap tentang Binar. Pilih bagian yang paling relevan untukmu.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
                        {quickLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className={`group flex flex-col gap-4 rounded-2xl border p-5 lg:p-6 min-h-[160px] transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${item.cardBg} ${item.borderColor}`}
                                >
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5 flex items-center gap-1.5">
                                            {item.label}
                                            <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <ImpactBanner />
        </>
    );
};

export default HomePage;