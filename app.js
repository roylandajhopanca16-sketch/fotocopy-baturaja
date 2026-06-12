let map;
let ruteKontrol;
let userCoords = [-4.131013, 104.156557]; // Titik Tengah Default: Taman Kota Baturaja

// DATA KOORDINAT 11 TEMPAT FOTOKOPI RIIL BATURAJA
const dataFotocopy = [
    {
        id: 1,
        nama: "Fotocopy Unbara Mandiri",
        lat: -4.130541,
        lng: 104.161122,
        alamat: "Jl. Ki Ratu Penghulu, Karang Sari (Samping Gerbang Utama Kampus Unbara)"
    },
    {
        id: 2,
        nama: "Percetakan & Fotocopy Megah Jaya",
        lat: -4.1253645,
        lng: 104.1733866,
        alamat: "Jl. Jenderal Ahmad Yani, Baturaja Lama, Baturaja Timur"
    },
    {
        id: 3,
        nama: "Rizka Print & Fotocopy",
        lat: -4.131607,
        lng: 104.1557895,
        alamat: "Depan Sekolah, Jl. MTsN, Tanjung Agung, Baturaja Barat"
    },
    {
        id: 4,
        nama: "Linda Fotocopy",
        lat: -4.1242321,
        lng: 104.1720331,
        alamat: "Kemalaraja, Jl. Jenderal S. Parman, Baturaja Lama, Baturaja Timur"
    },
    {
        id: 5,
        nama: "Foto Copy Doris Abadi 7",
        lat: -4.1273312,
        lng: 104.1810026,
        alamat: "Jl. Dr. M. Hatta, Tanjung Baru, Baturaja Timur"
    },
    {
        id: 6,
        nama: "Percetakan Dunia Warna Baturaja",
        lat: -4.125415,
        lng: 104.173757,
        alamat: "Jl. Jenderal Ahmad Yani No.075, Kemalaraja, Baturaja Timur"
    },
    {
        id: 7,
        nama: "Foto Copy Angkasa",
        lat: -4.1252343,
        lng: 104.1699228,
        alamat: "Jl. Jenderal Ahmad Yani No.308-309, Kemala Raja, Baturaja Timur"
    },
    {
        id: 8,
        nama: "Foto Copy & ATK Aqilah",
        lat: -4.1146712,
        lng: 104.2043856,
        alamat: "Jl. Kolonel Wahab Sarobu, Sekar Jaya, Baturaja Timur"
    },
    {
        id: 9,
        nama: "Alfina Fotocopy",
        lat: -4.1153072,
        lng: 104.1768403,
        alamat: "Jl. Mayor Ismail Husein No.796B, Kemalaraja, Baturaja Timur"
    },
    {
        id: 10,
        nama: "Yrdesign Percetakan dan Fotocopy",
        lat: -4.1282487,
        lng: 104.1804924,
        alamat: "Tanjung Baru, Baturaja Timur"
    },
    {
        id: 11,
        nama: "ATK Berlin Grup",
        lat: -4.1203179,
        lng: 104.1692887,
        alamat: "Jl. Dr. M. Hatta, Baturaja Lama, Baturaja Timur"
    }
];

// 1. Inisialisasi Sistem Peta Digital
function initMap() {
    // Membangun peta di area Baturaja
    map = L.map('map').setView(userCoords, 14);

    // Mengambil aset desain rupa bumi dari OpenStreetMap OpenSource
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Membaca Titik GPS Real-time Gawai Pengguna
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            userCoords = [position.coords.latitude, position.coords.longitude];
            map.setView(userCoords, 14);
            
            // Memberi marker penanda di posisi user saat ini
            L.marker(userCoords).addTo(map)
                .bindPopup('<strong>Posisi Anda Sekarang</strong>').openPopup();
                
            prosesTampilanData();
        }, () => {
            alert("Akses GPS ditolak. Sistem menggunakan koordinat acuan Taman Kota Baturaja.");
            prosesTampilanData();
        });
    } else {
        prosesTampilanData();
    }
}

// 2. Merender Pin Peta dan List Kartu Samping
function prosesTampilanData() {
    const daftarEl = document.getElementById('daftar-lokasi');
    daftarEl.innerHTML = ''; // Membersihkan loading text

    dataFotocopy.forEach(item => {
        // Menyematkan Pin Lokasi Fotocopy di Peta
        L.marker([item.lat, item.lng]).addTo(map)
            .bindPopup(`<strong>${item.nama}</strong><br><span style="font-size:11px; color:#475569;">${item.alamat}</span>`);

        // Mencetak Kartu Navigasi di Panel Samping
        const itemEl = document.createElement('div');
        itemEl.className = "card-fotocopy";
        itemEl.innerHTML = `
            <h4>${item.nama}</h4>
            <p>${item.alamat}</p>
            <button class="btn-route" onclick="kalkulasiRuteJalan(${item.lat}, ${item.lng})">
                Cari Rute Jalan
            </button>
        `;
        daftarEl.appendChild(itemEl);
    });
}

// 3. Menghitung Rute Jalan Menggunakan Routing Machine API (Real-time)
function kalkulasiRuteJalan(destLat, destLng) {
    // Hapus rute lama jika pengguna berganti memilih toko lain
    if (ruteKontrol) {
        map.removeControl(ruteKontrol);
    }

    // Gambar rute jalan otomatis
    ruteKontrol = L.Routing.control({
        waypoints: [
            L.latLng(userCoords[0], userCoords[1]), // Asal (GPS User)
            L.latLng(destLat, destLng)              // Tujuan (Toko Pilihan)
        ],
        routeWhileDragging: false,
        lineOptions: {
            styles: [{ color: '#1e3a8a', weight: 6 }] // Garis rute diubah sewarna dengan tinta biru navy
        },
        createMarker: function() { return null; } // Menyembunyikan pin duplikat agar visual bersih
    }).addTo(map);
}

// 4. Manajemen Tampilan Popup Login
function toggleModal(show) {
    const modal = document.getElementById('login-modal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

function prosesLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'mahasiswa' && pass === 'unbara') {
        document.getElementById('auth-section').innerHTML = `<span class="login-status-box">Halo, Mahasiswa Unbara</span>`;
        toggleModal(false);
    } else {
        alert('Kombinasi sandi atau nama pengguna salah!');
    }
}

// Trigger inisialisasi peta setelah seluruh dokumen siap
window.onload = initMap;
