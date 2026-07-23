import { useState } from 'react';
import { ChevronDown, PieChart, ShieldCheck, Heart, Copy, CheckCircle2, CreditCard, Wallet, Package, MessageCircle } from 'lucide-react';
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

const CopyableAccount = ({ label, accountNumber, name, type }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 shrink-0">
                    {type === 'bank' ? <CreditCard size={18} /> : <Wallet size={18} />}
                </div>
                <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-lg font-bold text-slate-900 font-mono tracking-tight">{accountNumber}</p>
                    <p className="text-xs text-slate-500 mt-0.5">a.n {name}</p>
                </div>
            </div>
            <button 
                onClick={handleCopy}
                className={`p-2.5 rounded-lg border transition-all flex items-center justify-center gap-1.5 ${copied ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm'}`}
                title="Salin Nomor Rekening"
            >
                {copied ? <><CheckCircle2 size={16} /> <span className="text-xs font-bold hidden sm:inline">Tersalin</span></> : <><Copy size={16} /> <span className="text-xs font-bold hidden sm:inline">Salin</span></>}
            </button>
        </div>
    );
};

const DonatePage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('dana');

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <PageHeader
                className="bg-slate-50/50 pt-28 lg:pt-32 pb-8"
                eyebrow="Donasi & Transparansi"
                title="Satu Donasi, Wujudkan Banyak Kebaikan"
                description="Setiap rupiah yang kamu berikan akan diakumulasikan ke dalam dana abadi Binar Foundation untuk mendukung pendidikan dan kesehatan mental."
            />

            {/* Menggunakan background slate tipis untuk memberikan efek pop-out pada kartu putih */}
            <section className="w-full bg-slate-50/50 pb-16 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12 pt-12">

                    {/* SPLIT SCREEN & TABS (OPSI 1 MODIFIED) */}
                    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch">
                        
                        {/* LEFT COLUMN: PHOTO */}
                        <div className="lg:w-[45%] flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-blue-950 mb-4 leading-tight">Dukunganmu Mengubah Hidup Mereka</h3>
                                <p className="text-sm text-blue-800/80 leading-relaxed mb-6">Pilih metode donasi yang paling nyaman untukmu. Berapapun nominal atau barang yang kamu berikan, itu adalah wujud kepedulian yang sangat berarti.</p>
                                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <img src="/9.jpg" alt="Kegiatan Binar Foundation" className="w-full h-auto object-cover max-h-64" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: TABS CARD */}
                        <div className="lg:w-[55%] rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 shadow-sm flex flex-col h-full">
                            
                            {/* TABS HEADER */}
                            <div className="flex border-b border-slate-100 mb-6 gap-6">
                                <button 
                                    onClick={() => setActiveTab('dana')} 
                                    className={`pb-4 px-2 font-bold text-sm lg:text-base transition-all border-b-2 flex items-center gap-2 ${activeTab === 'dana' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200'}`}
                                >
                                    <ShieldCheck size={18} className={activeTab === 'dana' ? 'text-blue-600' : 'text-slate-400'} />
                                    Donasi Dana
                                </button>
                                <button 
                                    onClick={() => setActiveTab('barang')} 
                                    className={`pb-4 px-2 font-bold text-sm lg:text-base transition-all border-b-2 flex items-center gap-2 ${activeTab === 'barang' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200'}`}
                                >
                                    <Package size={18} className={activeTab === 'barang' ? 'text-blue-600' : 'text-slate-400'} />
                                    Donasi Barang
                                </button>
                            </div>

                            {/* TAB CONTENT */}
                            <div className="flex-grow flex flex-col">
                                {activeTab === 'dana' ? (
                                    <div className="flex flex-col h-full animate-[fadeIn_0.3s_ease-out]">
                                        <div className="space-y-4 mb-8 flex-grow">
                                            <CopyableAccount 
                                                label="Bank Syariah Indonesia (BSI)"
                                                accountNumber="7295976092"
                                                name="Syifa Assafira (Bendahara)"
                                                type="bank"
                                            />
                                            <CopyableAccount 
                                                label="GoPay"
                                                accountNumber="081371152087"
                                                name="Syifa Assafira (Bendahara)"
                                                type="ewallet"
                                            />
                                        </div>
                                        
                                        <div className="pt-6 border-t border-slate-100 mt-auto">
                                            <p className="text-xs font-medium text-slate-500 mb-3 text-center">Sudah transfer? Konfirmasi ke admin agar tercatat:</p>
                                            <a href="https://wa.me/6281371152087" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-sm group">
                                                <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
                                                Konfirmasi Donasi Dana
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col h-full animate-[fadeIn_0.3s_ease-out]">
                                        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 mb-8 flex-grow">
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                Punya <strong className="text-blue-700">buku cerita, alat tulis, perlengkapan sekolah, atau pakaian layak pakai?</strong> Yuk salurkan ke Rumah Belajar Binar Foundation.
                                            </p>
                                        </div>
                                        
                                        <div className="pt-6 border-t border-slate-100 mt-auto">
                                            <p className="text-xs font-medium text-slate-500 mb-3 text-center">Hubungi kami untuk atur pengirimannya:</p>
                                            <div className="grid grid-cols-2 gap-3">
                                                <a href="https://wa.me/6283849583464" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs py-3.5 px-2 rounded-xl transition-all shadow-sm group">
                                                    <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
                                                    Awa (Jatim)
                                                </a>
                                                <a href="https://wa.me/6282280002658" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs py-3.5 px-2 rounded-xl transition-all shadow-sm group">
                                                    <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
                                                    Haris (Riau)
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* SEKSI LAPORAN ANGGARAN (ACCORDION) */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
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