import { ArrowRight, CheckCircle2, ClipboardList, HeartHandshake, Users2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import registrationImage from '../assets/registration.svg';

const volunteerPoints = [
    'Mendampingi kegiatan edukasi dan kampanye kesehatan mental.',
    'Membantu proses dokumentasi, publikasi, dan koordinasi komunitas.',
    'Belajar bekerja di lingkungan yang aman, kolaboratif, dan berdampak.',
];

const volunteerSteps = [
    { title: 'Pilih minat', description: 'Tentukan bidang kontribusi yang paling cocok.', icon: ClipboardList },
    { title: 'Ikut orientasi', description: 'Kenali alur kerja, nilai, dan tim Binar.', icon: Users2 },
    { title: 'Mulai berkontribusi', description: 'Gabung ke kegiatan yang sesuai dengan kapasitasmu.', icon: HeartHandshake },
];

const stepSurfaces = [
    'bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100',
    'bg-gradient-to-br from-amber-50 via-white to-orange-50 border-amber-100',
    'bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-emerald-100',
];

const VolunteerPage = () => {
    return (
        <>
            <PageHeader
                eyebrow="Relawan"
                title="Bergabung sebagai relawan Binar"
                description="Kalau kamu ingin terlibat langsung dalam gerakan yang memberi dampak, halaman ini adalah titik awal yang pas."
            />

            <section className="w-full pb-16 lg:pb-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {volunteerSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div key={step.title} className={`rounded-[1.5rem] border p-5 lg:p-6 shadow-sm ${stepSurfaces[index]}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-300">0{index + 1}</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-slate-900">{step.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                        <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl lg:text-[2.35rem] font-bold text-slate-900 mb-4">
                                Apa yang akan kamu dapatkan
                            </h2>
                            <ul className="space-y-4">
                                {volunteerPoints.map((point) => (
                                    <li key={point} className="flex gap-3 text-slate-600 leading-relaxed">
                                        <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={20} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-blue-50 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 lg:p-8 shadow-sm min-h-[360px]">
                            <div className="relative z-10 grid h-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
                                <div className="min-w-0">
                                    <h3 className="mb-3 text-3xl font-bold text-slate-800 lg:text-[2.6rem]">
                                        Open Recruitment Relawan
                                    </h3>
                                    <p className="mb-6 text-sm leading-relaxed text-slate-600 lg:max-w-[92%]">
                                        Kami membuka kesempatan untuk kamu yang siap belajar, terlibat, dan tumbuh bersama komunitas yang peduli.
                                    </p>
                                    <Button
                                        variant="primary"
                                        className="inline-flex items-center gap-2 px-6 py-3 text-sm"
                                        onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Daftar Sekarang' } }))}
                                    >
                                        Daftar Sekarang <ArrowRight size={16} />
                                    </Button>
                                </div>

                                <div className="flex items-end justify-center lg:justify-end">
                                    <img
                                        src={registrationImage}
                                        alt="Ilustrasi relawan"
                                        className="w-full max-w-[190px] sm:max-w-[220px] lg:max-w-[220px] object-contain object-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VolunteerPage;