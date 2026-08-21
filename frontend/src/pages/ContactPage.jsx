import { 
    ArrowRight, Mail, PhoneCall, MessageSquare, 
    MessageSquareText, MapPin, ExternalLink,
    Heart, AlertTriangle, Lightbulb 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const SOCIAL_MEDIA = [
    { title: 'Instagram', value: '@binar.foundation', href: 'https://www.instagram.com/binar.foundation', icon: InstagramIcon, color: 'bg-pink-100 text-pink-600' },
    { title: 'TikTok', value: '@binar.foundation', href: 'https://www.tiktok.com/@binar.foundation', icon: TikTokIcon, color: 'bg-slate-200 text-slate-900' },
    { title: 'YouTube', value: 'binar foundation', href: 'https://www.youtube.com/@binar.foundation', icon: YoutubeIcon, color: 'bg-red-100 text-red-600' },
];

const CONTACT_ITEMS = [
    { title: 'Email', value: 'binarfoundation1@gmail.com', href: 'mailto:binarfoundation1@gmail.com', icon: Mail },
    { title: 'Contact Person', value: '0823 8451 6469 (Elsa)', href: 'tel:082384516469', icon: PhoneCall },
];

const COLLABORATION_CONTACTS = [
    { name: 'Elsa Nabila', phone: '0823 8451 6469', role: 'PJ Kolaborasi Binar Foundation' },
    { name: 'Lucky Marpaung', phone: '0821 8310 0744', role: 'PJ Kolaborasi Binar Chapter' },
    { name: 'Nabila Cahya', phone: '0856 4833 0433', role: 'PJ Kolaborasi Binar Chapter' },
];

const OFFICE_ADDRESSES = [
    {
        title: 'Binar Pusat',
        address: 'Jl. Purwodadi Ujung, Kel. Sialangmunggu, Kec. Tuah Madani, Kota Pekanbaru, Provinsi Riau',
        gmaps: 'https://maps.google.com'
    },
    {
        title: 'Binar Chapter Jatim',
        address: 'Pasar Burung Gang Dolly, Kel. Putat Jaya, Kec. Sawahan, Kota Surabaya, Provinsi Jawa Timur',
        gmaps: 'https://maps.google.com'
    }
];

const ContactPage = () => {
    return (
        <>
            <PageHeader
                className="bg-slate-50/50 pt-28 lg:pt-32 pb-8"
                eyebrow="Kontak"
                title="Saluran komunikasi dan kolaborasi Binar Foundation"
                description="Halaman ini memuat media sosial, kontak merchandise, jalur kolaborasi resmi, serta wadah aspirasi untuk terhubung dengan tim Binar."
            />

            <section className="w-full pb-16 lg:pb-24 bg-slate-50/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-8">
                    
                    <div className="flex flex-col gap-5">
                        
                        {/* ROW 1: 3 KOLOM (SOSMED, MERCH, BI-BETTER) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            
                            {/* SOSIAL MEDIA */}
                            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <h3 className="text-xl font-extrabold text-slate-900 mb-1">Sosial Media</h3>
                                <p className="text-xs text-slate-500 mb-6">Ikuti aktivitas harian kami</p>
                                
                                <div className="space-y-3 flex-1">
                                    {SOCIAL_MEDIA.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a key={social.title} href={social.href} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-3.5 transition-all hover:bg-blue-50/50 group border border-transparent hover:border-blue-100">
                                                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${social.color} shadow-sm`}>
                                                    <Icon size={20} className="stroke-[2]" />
                                                </span>
                                                <div>
                                                    <p className="font-bold text-sm text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{social.title}</p>
                                                    <p className="text-[11px] text-slate-500 mt-0.5">{social.value}</p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* MERCHANDISE & KONTAK */}
                            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <h3 className="text-xl font-extrabold text-slate-900 mb-1">Kontak Binar</h3>
                                <p className="text-xs text-slate-500 mb-6">Merchandise & Info Umum</p>
                                
                                <div className="space-y-3 flex-1 flex flex-col justify-start">
                                    {CONTACT_ITEMS.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <a key={item.title} href={item.href}
                                                className="flex flex-col gap-3 rounded-2xl bg-yellow-50/50 p-5 transition-all hover:bg-yellow-100/50 group border border-yellow-100/50 hover:border-yellow-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-yellow-600 shadow-sm">
                                                        <Icon size={18} className="stroke-[2]" />
                                                    </span>
                                                    <p className="font-bold text-sm text-slate-900 leading-tight group-hover:text-yellow-700 transition-colors">{item.title}</p>
                                                </div>
                                                <p className="text-xs text-slate-600 font-medium break-words bg-white/60 p-2 rounded-lg">{item.value}</p>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* BI-BETTER (Dikecilkan & Warnanya dilembutkan) */}
                            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 sm:p-8 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                                        <MessageSquareText size={20} className="stroke-[2]" />
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-0.5">Suara Pengguna</p>
                                        <h3 className="text-xl font-extrabold text-slate-900 leading-tight">Hubungan<br/>Komunitas</h3>
                                    </div>
                                </div>
                                
                                <p className="text-xs leading-relaxed text-slate-600 mb-5 relative z-10">
                                    Salurkan apresiasi, pengaduan, atau saran program melalui platform resmi Bi-Better.
                                </p>
                                
                                <div className="space-y-2 mb-6 flex-1 relative z-10">
                                    <div className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2.5 border border-slate-100">
                                        <Heart size={14} className="text-rose-500 shrink-0" />
                                        <span className="text-[11px] font-bold text-slate-700">Apresiasi & Ulasan</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2.5 border border-slate-100">
                                        <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                                        <span className="text-[11px] font-bold text-slate-700">Pengaduan Sistem</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2.5 border border-slate-100">
                                        <Lightbulb size={14} className="text-emerald-500 shrink-0" />
                                        <span className="text-[11px] font-bold text-slate-700">Kritik & Saran</span>
                                    </div>
                                </div>

                                <a href="https://bit.ly/BiBetter" target="_blank" rel="noopener noreferrer"
                                    className="mt-auto relative z-10 inline-flex items-center justify-center w-full bg-blue-600 text-white font-bold text-sm px-4 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-600/20 gap-2 group">
                                    Isi Form Bi-Better
                                    <ExternalLink size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>

                        </div>

                        {/* ROW 2: 2 KOLOM (LOKASI PUSAT & JATIM) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* LOKASI PUSAT */}
                            <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-5 items-start transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                                    <MapPin size={24} className="stroke-[2]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">{OFFICE_ADDRESSES[0].title}</h3>
                                    <p className="text-xs lg:text-sm text-slate-600 leading-relaxed mb-4">{OFFICE_ADDRESSES[0].address}</p>
                                    <a href={OFFICE_ADDRESSES[0].gmaps} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs text-emerald-700 font-bold hover:text-emerald-800 bg-emerald-100/50 px-4 py-2 rounded-lg transition-colors">
                                        Buka di Maps <ArrowRight size={12} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            {/* LOKASI JATIM */}
                            <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-5 items-start transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                                    <MapPin size={24} className="stroke-[2]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">{OFFICE_ADDRESSES[1].title}</h3>
                                    <p className="text-xs lg:text-sm text-slate-600 leading-relaxed mb-4">{OFFICE_ADDRESSES[1].address}</p>
                                    <a href={OFFICE_ADDRESSES[1].gmaps} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs text-emerald-700 font-bold hover:text-emerald-800 bg-emerald-100/50 px-4 py-2 rounded-lg transition-colors">
                                        Buka di Maps <ArrowRight size={12} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ROW 3: SOP KOLABORASI (FULL WIDTH) */}
                        <div className="rounded-[2rem] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col lg:flex-row mt-2">
                            <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col justify-center relative overflow-hidden border-r border-blue-100">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                                <span className="relative z-10 inline-block bg-white text-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm mb-4 w-max border border-blue-100">Kerja Sama</span>
                                <h3 className="relative z-10 text-2xl font-extrabold text-slate-900 mb-3">SOP Kolaborasi Kemitraan</h3>
                                <p className="relative z-10 text-sm text-slate-600 leading-relaxed mb-8">Hubungi PJ resmi sesuai klasifikasi wilayah Anda untuk transparansi alur birokrasi kemitraan Binar Foundation.</p>
                                <a href="mailto:binarfoundation1@gmail.com"
                                    className="relative z-10 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-md shadow-blue-600/20 gap-2 w-max group">
                                    Ajukan Proposal Via Email <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                            <div className="lg:w-2/3 p-8 bg-white flex flex-col justify-center">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {COLLABORATION_CONTACTS.map((person) => (
                                        <div key={person.name} className="rounded-2xl bg-white p-5 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
                                            <span className="inline-flex px-2.5 py-1 rounded-xl text-[10px] font-bold bg-blue-50 text-blue-700 mb-4 h-8 items-center text-center leading-tight">
                                                {person.role}
                                            </span>
                                            <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">{person.name}</h4>
                                            <p className="mt-1 text-sm text-slate-500 font-medium">{person.phone}</p>
                                            <a href={`https://wa.me/62${person.phone.replace(/[^0-9]/g, '').substring(1)}`} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center w-full bg-blue-50 py-2 rounded-xl gap-1.5 text-xs font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-colors">
                                                <MessageSquare size={14} /> Hubungi PJ
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
