import { 
    ArrowRight, Mail, PhoneCall, MessageSquare, 
    MessageSquareText, MapPin, ExternalLink,
    Camera, PlayCircle, Heart, AlertTriangle, Lightbulb 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const SOCIAL_MEDIA = [
    { title: 'Instagram', value: '@binar.foundation', href: 'https://www.instagram.com/binar.community', icon: Camera, color: 'bg-pink-100 text-pink-600' },
    { title: 'TikTok', value: '@binar.foundation', href: 'https://www.tiktok.com/@binar.community', icon: MessageSquare, color: 'bg-slate-100 text-slate-700' },
    { title: 'YouTube', value: 'binar foundation', href: 'https://www.youtube.com', icon: PlayCircle, color: 'bg-red-100 text-red-500' },
];

const CONTACT_ITEMS = [
    { title: 'Merchandise Email', value: 'binarfoundation1@gmail.com', href: 'mailto:binarfoundation1@gmail.com', icon: Mail },
    { title: 'Contact Person', value: '0823 8451 6469 (Elsa)', href: 'tel:082384516469', icon: PhoneCall },
];

const COLLABORATION_CONTACTS = [
    { name: 'Elsa Nabila', phone: '0823 8451 6469', role: 'PJ Kolaborasi Binar Foundation' },
    { name: 'Lulu', phone: '0821 8310 0744', role: 'PJ Kolaborasi Binar Chapter' },
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
                eyebrow="Kontak"
                title="Saluran komunikasi dan kolaborasi BINAR FOUNDATION"
                description="Halaman ini memuat media sosial, kontak merchandise, jalur kolaborasi resmi, serta wadah aspirasi untuk terhubung dengan tim Binar."
            />

            <section className="w-full pb-16 lg:pb-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">

                    {/* ROW ATAS: 3 KOLOM */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* SOSIAL MEDIA */}
                        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm flex flex-col">
                            <div className="mb-5">
                                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-3">Jejaring Sosial</span>
                                <h3 className="text-lg font-extrabold text-slate-900">Sosial Media Resmi</h3>
                            </div>
                            <div className="space-y-3 flex-1">
                                {SOCIAL_MEDIA.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a key={social.title} href={social.href} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 transition-all hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm group">
                                            <div className="flex items-center gap-3">
                                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${social.color}`}>
                                                    <Icon size={18} className="stroke-[2]" />
                                                </span>
                                                <div>
                                                    <p className="font-bold text-sm text-slate-900 leading-tight">{social.title}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">{social.value}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-500" size={15} />
                                        </a>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-slate-400 mt-5 leading-relaxed">
                                Ikuti pembaruan aktivitas harian kami di berbagai platform media sosial di atas.
                            </p>
                        </div>

                        {/* MERCHANDISE & KONTAK */}
                        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm flex flex-col">
                            <div className="mb-5">
                                <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-3">Layanan Langsung</span>
                                <h3 className="text-lg font-extrabold text-slate-900">Merchandise & Kontak</h3>
                            </div>
                            <div className="space-y-3 flex-1">
                                {CONTACT_ITEMS.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a key={item.title} href={item.href}
                                            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 transition-all hover:border-yellow-100 hover:bg-yellow-50/30 hover:shadow-sm group">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                                                    <Icon size={18} className="stroke-[2]" />
                                                </span>
                                                <div>
                                                    <p className="font-bold text-sm text-slate-900 leading-tight">{item.title}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">{item.value}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-yellow-500" size={15} />
                                        </a>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-slate-400 mt-5 leading-relaxed">
                                Hubungi untuk pemesanan cinderamata resmi atau pusat informasi narahubung utama.
                            </p>
                        </div>

                        {/* BI-BETTER — gradient biru */}
                        <div className="rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:col-span-2 lg:col-span-1 relative"
                            style={{ background: 'linear-gradient(145deg, #1D4ED8, #2563EB 60%, #38BDF8)' }}>
                            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                            <div className="p-6 flex flex-col h-full relative z-10">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white">
                                        <MessageSquareText size={20} className="stroke-[2]" />
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200 mb-0.5">Suara Pengguna</p>
                                        <h3 className="text-lg font-extrabold text-white">Hubungan Komunitas</h3>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-blue-100 mb-5">
                                    Suara Anda berharga bagi kami. Salurkan ulasan, pengaduan, kritik konstruktif, atau saran program melalui platform resmi Bi-Better.
                                </p>
                                <div className="space-y-2.5 mb-6">
                                    <div className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3 py-2">
                                        <Heart size={14} className="text-rose-300 shrink-0" />
                                        <span className="text-xs text-white">Apresiasi & Ulasan Gerakan</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3 py-2">
                                        <AlertTriangle size={14} className="text-amber-300 shrink-0" />
                                        <span className="text-xs text-white">Pengaduan & Kendala Sistem</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3 py-2">
                                        <Lightbulb size={14} className="text-emerald-300 shrink-0" />
                                        <span className="text-xs text-white">Kritik & Saran Strategis</span>
                                    </div>
                                </div>
                                <a href="https://bit.ly/BiBetter" target="_blank" rel="noopener noreferrer"
                                    className="mt-auto inline-flex w-full items-center justify-center gap-2 bg-yellow-400 text-slate-900 font-bold text-sm px-4 py-3 rounded-2xl hover:bg-yellow-300 transition shadow-sm group">
                                    Isi Formulir Bi-Better
                                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* LOKASI */}
                    <div className="rounded-[2rem] border border-slate-100 bg-white p-6 lg:p-8 shadow-sm">
                        <div className="mb-6">
                            <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-3">Sekretariat Resmi</span>
                            <h2 className="text-xl font-extrabold text-slate-900">Lokasi & Alamat Kantor</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {OFFICE_ADDRESSES.map((office) => (
                                <div key={office.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 hover:shadow-md hover:border-slate-200 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                            <MapPin size={20} className="stroke-[2]" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-extrabold text-sm text-slate-900">{office.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{office.address}</p>
                                            <a href={office.gmaps} target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center text-xs text-blue-600 font-semibold hover:underline pt-2 group">
                                                Buka Rute Navigasi <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SOP KOLABORASI */}
                    <div className="rounded-[2rem] overflow-hidden shadow-sm" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)' }}>
                        <div className="p-6 lg:p-8 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <span className="inline-block bg-white text-blue-600 text-xs font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow-sm mb-3 border border-blue-50">Prosedur Kerja Sama</span>
                                    <h2 className="text-xl font-extrabold text-slate-900">SOP Kolaborasi Kemitraan</h2>
                                </div>
                                <a href="mailto:binarfoundation1@gmail.com"
                                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-md shrink-0 gap-2">
                                    Ajukan Aliansi Via Email <Mail size={15} />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {COLLABORATION_CONTACTS.map((person) => (
                                    <div key={person.name} className="rounded-2xl bg-white p-5 border border-blue-100/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                        <span className="inline-block px-2.5 py-1 rounded-xl text-[11px] font-bold bg-blue-50 text-blue-700 mb-3">
                                            {person.role}
                                        </span>
                                        <h3 className="text-base font-extrabold text-slate-900">{person.name}</h3>
                                        <p className="mt-1 text-sm text-slate-500 font-medium">{person.phone}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl bg-white border border-blue-100/50 text-sm leading-relaxed text-slate-600">
                                <strong className="text-slate-800">Catatan Alur:</strong> Hubungi terlebih dahulu Penanggung Jawab (PJ) resmi di atas sesuai dengan klasifikasi wilayah kerja sama Anda. Penyesuaian prosedur ini dilakukan demi efisiensi dan transparansi alur birokrasi kemitraan Binar Foundation.
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ContactPage;
