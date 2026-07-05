import { useState } from 'react';
import { ChevronDown, FileText, PieChart, ShieldCheck, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const BUDGET_DATA = [
    {
        category: 'Pengurus Pusat',
        reports: [
            { year: 'Tahun 2025', detail: 'Alokasi operasional program utama, website development, pengadaan sistem peer-support, dan manajemen pengurus.' },
            { year: 'Tahun 2026', detail: 'Peningkatan kapasitas server konseling online, ekspansi kurikulum edukasi, dan pendampingan intensif minat bakat.' }
        ]
    },
    {
        category: 'Pengurus Chapter Jatim',
        reports: [
            { year: 'Tahun 2025', detail: 'Pendanaan Rumah Belajar Kampung Pemulung & Dolly, serta pengadaan modul ajar karakter anak marginal.' },
            { year: 'Tahun 2026', detail: 'Optimalisasi fasilitas Rumah Belajar KBM Petojo, perluasan jangkauan psikologi komunitas, dan aktivitas sosial CFD.' }
        ]
    },
    {
        category: 'Pengurus Chapter Riau',
        reports: [
            { year: 'Tahun 2025', detail: 'Inisiasi Rumah Belajar Al-Muzakki, pengadaan alat tulis dasar, dan edukasi kesehatan mental skala sekolah.' },
            { year: 'Tahun 2026', detail: 'Pengembangan kapasitas pengajar relawan lokal, peningkatan sarana belajar, dan kampanye sosial offline.' }
        ]
    }
];

const DonatePage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <PageHeader
                eyebrow="Donasi & Transparansi"
                title="Mari Bergandeng Tangan Memberi Dampak Nyata"
                description="Dukung wadah kebaikan ini untuk terus bertahan dan memberikan ruang aman bagi kesehatan mental dan pendidikan anak-anak marginal."
            />

            {/* Menggunakan background slate tipis untuk memberikan efek pop-out pada kartu putih */}
            <section className="w-full bg-slate-50/50 pb-16 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10 pt-12">

                    {/* HERO CARD (KARTU UTAMA DONASI) */}
                    <div className="rounded-2xl border border-blue-100 bg-white p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-6 shadow-xs">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/50">
                            <ShieldCheck size={24} className="stroke-[2.25]" />
                        </div>
                        <div className="flex-grow">
                            <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-2.5">
                                Akuntabilitas Finansial
                            </span>
                            <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 mb-1.5">Binar Charity &amp; Donasi</h3>
                            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed mb-5">
                                Kami melakukan Open Donasi secara berkala. Seluruh dana yang masuk dipertanggungjawabkan sepenuhnya secara terbuka demi menjaga keberlanjutan operasional yayasan.
                            </p>
                            <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-blue-700 transition-all hover:shadow-md shadow-sm group">
                                <Heart size={14} className="stroke-[2.5] transition-transform group-hover:scale-110" />
                                Salurkan Donasi Sekarang
                            </button>
                        </div>
                    </div>

                    {/* SEKSI LAPORAN ANGGARAN (ACCORDION) */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/40">
                                <PieChart size={18} className="stroke-[2.25]" />
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">Laporan Penggunaan Anggaran</h2>
                                <p className="text-xs text-slate-400 mt-0.5">Bentuk akuntabilitas finansial pengurus pusat dan daerah</p>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            {BUDGET_DATA.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-2xs transition-all duration-200"
                                    >
                                        {/* ACCORDION TRIGGER */}
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50/50 transition-colors"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-sm font-bold text-slate-900">{item.category}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                                                strokeWidth={2.25}
                                            />
                                        </button>

                                        {/* ACCORDION BODY */}
                                        {isOpen && (
                                            <div className="border-t border-slate-100 bg-slate-50/30 p-4 lg:p-5">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {item.reports.map((report, rIdx) => (
                                                        <div
                                                            key={rIdx}
                                                            className="bg-white p-4 rounded-xl border border-slate-100 shadow-3xs flex flex-col justify-between space-y-3"
                                                        >
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                                                                        {report.year}
                                                                    </span>
                                                                </div>
                                                                <p className="text-xs leading-relaxed text-slate-500">{report.detail}</p>
                                                            </div>
                                                            
                                                            <div className="pt-2 border-t border-slate-50">
                                                                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline group">
                                                                    <FileText size={13} className="stroke-[2.25]" />
                                                                    Lihat Unduhan PDF
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default DonatePage;