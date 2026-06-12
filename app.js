// Data Koordinat dan Atribut Sekolah di Baturaja untuk Tugas Akhir
const dataSekolah = [
    {
        id: 1,
        nama: "SMA Negeri 1 OKU",
        jenjang: "SMA",
        status: "Negeri",
        akreditasi: "A", // BAN-S/M 2010, nilai 89
        koordinat: [-4.1271315, 104.1809816],
        alamat: "Jl. Dr. M. Hatta No.261, Sukaraya, Baturaja Timur",
        fasilitas: "Laboratorium Komputer, Lapangan Basket, Perpustakaan Digital",
        kontak: "(0735) 320326"
    },
    {
        id: 2,
        nama: "SMA Negeri 5 OKU",
        jenjang: "SMA",
        status: "Negeri",
        akreditasi: "B", // belum ditemukan data resmi, perlu verifikasi
        koordinat: [-4.1305788, 104.1692815],
        alamat: "Jl. Dr. Ak. Gani, Baturaja Lama, Baturaja Timur",
        fasilitas: "Laboratorium IPA, Perpustakaan, Lapangan Olahraga",
        kontak: "(0735) 323992"
    },
    {
        id: 3,
        nama: "SMA Negeri 3 OKU",
        jenjang: "SMA",
        status: "Negeri",
        akreditasi: "A", // BAN-S/M 2011, nilai 87
        koordinat: [-4.1419013, 104.1543479],
        alamat: "Jl. Jend. Gatot Subroto No.21, Pasarbaru, Baturaja Barat",
        fasilitas: "Ruang Multimedia, Lapangan Voli, Perpustakaan",
        kontak: "(0735) 323922"
    },
    {
        id: 4,
        nama: "SMA Xaverius Baturaja",
        jenjang: "SMA",
        status: "Swasta",
        akreditasi: "B", // BAN-S/M 2011, nilai 83
        koordinat: [-4.1288545, 104.1477108],
        alamat: "Jl. Kol. Burlian No.361, Tj. Agung, Baturaja Barat",
        fasilitas: "Laboratorium Komputer, Kapel, Perpustakaan",
        kontak: "(0735) 3742614"
    },
    {
        id: 5,
        nama: "SMP Negeri 1 OKU",
        jenjang: "SMP",
        status: "Negeri",
        akreditasi: "A", // perlu verifikasi
        koordinat: [-4.1236098, 104.1708345],
        alamat: "Jl. H.S. Simanjuntak No.0786, Baturaja Lama",
        fasilitas: "Laboratorium IPA, Perpustakaan, Lapangan Upacara",
        kontak: "-"
    },
    {
        id: 6,
        nama: "SMP Negeri 2 OKU",
        jenjang: "SMP",
        status: "Negeri",
        akreditasi: "A", // perlu verifikasi
        koordinat: [-4.1246166, 104.1703617],
        alamat: "Baturaja Lama, Baturaja Timur",
        fasilitas: "Laboratorium Komputer, Perpustakaan, Mushola",
        kontak: "(0735) 320083"
    },
    {
        id: 7,
        nama: "SMP Xaverius Baturaja",
        jenjang: "SMP",
        status: "Swasta",
        akreditasi: "A", // perlu verifikasi
        koordinat: [-4.1302300, 104.1615500],
        alamat: "Baturaja Lama, Baturaja Timur",
        fasilitas: "Laboratorium Komputer, Kapel, Perpustakaan",
        kontak: "-"
    },
    {
        id: 8,
        nama: "SMP Muhammadiyah Baturaja",
        jenjang: "SMP",
        status: "Swasta",
        akreditasi: "B", // perlu verifikasi
        koordinat: [-4.1245420, 104.1697045],
        alamat: "Jl. BLL Kulon No.0809, Baturaja Lama, Baturaja Timur",
        fasilitas: "Mushola, Perpustakaan, Lapangan Olahraga",
        kontak: "-"
    },
    {
        id: 9,
        nama: "SMK Negeri 1 OKU",
        jenjang: "SMK",
        status: "Negeri",
        akreditasi: "A", // klaim ISO 9001:2008 di website resmi, BAN-S/M perlu verifikasi
        koordinat: [-4.1296583, 104.1687849],
        alamat: "Baturaja Lama, Baturaja Timur",
        fasilitas: "Bengkel Praktik, Laboratorium Komputer, Perpustakaan",
        kontak: "(0735) 320409"
    },
    {
        id: 10,
        nama: "SMK Negeri 2 OKU",
        jenjang: "SMK",
        status: "Negeri",
        akreditasi: "A", // perlu verifikasi
        koordinat: [-4.1279714, 104.1842609],
        alamat: "Tanjung Baru, Baturaja Timur",
        fasilitas: "Ruang Praktik Tata Boga, Salon Kecantikan, Hotel Mini",
        kontak: "(0895) 6045-34184"
    },
    {
        id: 11,
        nama: "SMK Negeri 3 OKU",
        jenjang: "SMK",
        status: "Negeri",
        akreditasi: "A", // perlu verifikasi
        koordinat: [-4.1232342, 104.1930076],
        alamat: "Jl. MS. Oeding No.695, Air Paoh, Baturaja Timur",
        fasilitas: "Bengkel Teknik, Laboratorium Komputer, Lapangan Olahraga",
        kontak: "(0735) 320906"
    },
    {
        id: 12,
        nama: "SMK Yadika Baturaja",
        jenjang: "SMK",
        status: "Swasta",
        akreditasi: "A", // SMA Yadika BAN-S/M 2011 nilai 96 (data jenjang SMA, SMK perlu cek terpisah)
        koordinat: [-4.1185108, 104.1781458],
        alamat: "Jl. Sultan Mahmud Badarudin, Sukaraya, Baturaja Timur",
        fasilitas: "Laboratorium Komputer, Ruang Praktik, Perpustakaan",
        kontak: "(0735) 325026"
    },
    {
        id: 13,
        nama: "SMK Bina Marta Baturaja",
        jenjang: "SMK",
        status: "Swasta",
        akreditasi: "B", // perlu verifikasi
        koordinat: [-4.1190646, 104.1697277],
        alamat: "Baturaja Lama, Baturaja Timur",
        fasilitas: "Ruang Praktik Keperawatan, Laboratorium Farmasi, Perpustakaan",
        kontak: "(0735) 322586"
    },
    {
        id: 14,
        nama: "SMK Sentosa Bhakti Baturaja",
        jenjang: "SMK",
        status: "Swasta",
        akreditasi: "A", // SMA Sentosa Bhakti BAN-S/M 2011 nilai 89 (jenjang SMA, SMK perlu cek terpisah)
        koordinat: [-4.1223999, 104.1758277],
        alamat: "Baturaja Lama, Baturaja Timur",
        fasilitas: "Laboratorium Komputer, Ruang Praktik, Perpustakaan",
        kontak: "-"
    }
];
