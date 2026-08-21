// src/data/content.js

/**
 * upcomingActivities menyimpan semua kegiatan yang akan datang.
 * Kategori yang didukung: 
 * - "edukasi" (Webinar, Seminar, dll)
 * - "relawan" (Open Recruitment Event/Insidental maupun Jangka Panjang)
 * 
 * Status yang didukung:
 * - "active" (Kegiatan sedang berlangsung/dibuka)
 * - "finished" (Kegiatan sudah selesai, akan disembunyikan dari UI active)
 */
export const upcomingActivities = [
    {
        id: 1,
        title: "Webinar: Menjaga Kesehatan Mental Remaja",
        category: "edukasi",
        date: "25 Agustus 2026",
        time: "14:00 - 16:00 WIB",
        description: "Bergabunglah dalam diskusi interaktif bersama psikolog anak dan remaja. Kita akan membahas cara membangun lingkungan yang mendukung kesehatan mental di era digital.",
        registrationLink: "https://bit.ly/daftar-webinar-dummy",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", // Dummy poster
        status: "Finished" 
    },
    {
        id: 2,
        title: "Open Recruitment Volunteer mengajar vol.2 & Intern Media",
        category: "relawan",
        date: "Hingga 31 Agustus 2026",
        time: "-",
        description: "Kami membuka kesempatan untuk kamu yang siap belajar, terlibat, dan tumbuh bersama Binar Foundation Chapter Jatim dalam memberikan dampak positif bagi anak-anak di Surabaya serta pengembangan media informasi.",
        registrationLink: "https://binar-oprec.netlify.app/",
        image: "/oprec_vol2.jpeg", // Dummy poster
        status: "active" 
    },
    {
        id: 3,
        title: "Open Recruitment Volunteer Hari Anak Nasional 2026",
        category: "relawan",
        date: "Hingga 25 Juli 2026",
        time: "-",
        description: "Kami membuka kesempatan untuk kamu yang siap untuk berkontribusi dalam kegiatan Hari Anak Nasional 2026, yang akan diadakan di Kampung Dolly Surabaya. Bergabunglah untuk memberikan pengalaman yang menyenangkan dan edukatif bagi anak-anak Di Kampung Dolly.",
        registrationLink: "https://bit.ly/VolunteerHAN2026", // Dummy link
        image: "/hari_anak.jpeg", // Dummy poster
        status: "finished" 
    }
];

export const articles = []; // Dikosongkan sementara untuk memicu Empty State 'Coming Soon'
