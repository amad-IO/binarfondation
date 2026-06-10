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

const VolunteerPage = () => {
    return (
        <>
            <PageHeader
                eyebrow="Relawan"
                title="Bergabung sebagai relawan Binar"
                description="Kalau kamu ingin terlibat langsung dalam gerakan yang memberi dampak, halaman ini adalah titik awal yang pas."
            />

            <section className="w-full pb-16 lg:pb-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {volunteerSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div key={step.title} className="rounded-[1.5rem] border border-slate-100 bg-[#F8FAFC] p-5 lg:p-6 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-300">0{index + 1}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-900">{step.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                        <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa yang akan kamu dapatkan</h2>
                            <ul className="space-y-4">
                                {volunteerPoints.map((point) => (
                                    <li key={point} className="flex gap-3 text-slate-600 leading-relaxed">
                                        <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={20} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="h-full bg-[#F4F8FF] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm border border-blue-50">
                            <div className="relative z-10 flex flex-col items-center xl:items-start text-center xl:text-left h-full">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">Open Recruitment Relawan</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 xl:mb-8 xl:max-w-[85%]">
                                    Kami membuka kesempatan untuk kamu yang siap belajar, terlibat, dan tumbuh bersama komunitas yang peduli.
                                </p>

                                <div className="flex-grow flex items-center justify-center w-full mb-8 xl:mb-0">
                                    <img
                                        src={registrationImage}
                                        alt="Ilustrasi relawan"
                                        className="w-full max-w-[220px] xl:absolute xl:bottom-0 xl:right-0 xl:max-w-[300px] object-contain object-bottom z-0"
                                    />
                                </div>

                                <Button
                                    variant="primary"
                                    className="flex items-center gap-2 text-sm px-6 py-3 w-max relative z-10 xl:mt-auto"
                                    onClick={() => window.dispatchEvent(new CustomEvent('show-maintenance', { detail: { feature: 'Daftar Relawan' } }))}
                                >
                                    Daftar Sekarang <ArrowRight size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VolunteerPage;