let map;
let ruteKontrol;
let userCoords = [-4.1300, 104.1600]; // Koordinat default Baturaja jika GPS mati

// Data Koordinat Tempat Fotokopi di Baturaja (Bisa Anda tambahkan manual di sini)
const dataFotocopy = [
    { id: 1, nama: "Fotocopy Unbara Mandiri", lat: -4.1312, lng: 104.1615, alamat: "Dekat Area Kampus Universitas Baturaja" },
    { id: 2, nama: "Percetakan & FC Ogan", lat: -4.1255, lng: 104.1670, alamat: "Jl. Jend. Ahmad Yani, Baturaja" },
    { id: 3, nama: "Fotocopy Kilat Pasar Baru", lat: -4.1350, lng: 104.1580, alamat: "Area Pasar Baru, Baturaja" }
];

// 1. Fungsi Inisialisasi Peta
function initMap() {
    // Buat objek peta ke arah koordinat default Baturaja
    map = L.map('map').setView(userCoords, 14);

    // Render visual peta jalan OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Minta izin akses lokasi browser (GPS Real-time)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            userCoords = [position.coords.latitude, position.coords.longitude];
            map.setView(userCoords, 15);
            
            // Pasang Penanda Posisi Pengguna
            L.marker(userCoords).addTo(map)
                .bindPopup('<strong>Posisi Anda Sekarang</strong>').openPopup();
                
            tampilkanTempatFotocopy();
        }, () => {
            alert("Gagal membaca GPS. Menggunakan koordinat default pusat kota.");
            tampilkanTempatFotocopy();
        });
    } else {
        tampilkanTempatFotocopy();
    }
}

// 2. Fungsi Menampilkan Semua List & Pin Fotocopy
function tampilkanTempatFotocopy() {
    const daftarEl = document.getElementById('daftar-lokasi');
    daftarEl.innerHTML = ''; // Reset loading text

    dataFotocopy.forEach(item => {
        // Pasang Pin Toko di Peta
        L.marker([item.lat, item.lng]).addTo(map)
            .bindPopup(`<strong>${item.nama}</strong><br>${item.alamat}`);

        // Buat Blok Kartu List di Samping
        const itemEl = document.createElement('div');
        itemEl.className = "card-fotocopy";
        itemEl.innerHTML = `
            <h4>${item.nama}</h4>
            <p>${item.alamat}</p>
            <button class="btn-route" onclick="buatRuteRealtime(${item.lat}, ${item.lng})">
                Cari Rute Jalan
            </button>
        `;
        daftarEl.appendChild(itemEl);
    });
}

// 3. Logika Penarikan Garis Rute Jalan Real-time
function buatRuteRealtime(destLat, destLng) {
    // Hapus rute lama jika sebelumnya pengguna sudah mengklik tombol toko lain
    if (ruteKontrol) {
        map.removeControl(ruteKontrol);
    }

    // Bangun kalkulasi rute baru
    ruteKontrol = L.Routing.control({
        waypoints: [
            L.latLng(userCoords[0], userCoords[1]), // Titik Mulai (GPS Anda)
            L.latLng(destLat, destLng)              // Titik Akhir (Toko Fotocopy)
        ],
        routeWhileDragging: false,
        lineOptions: {
            styles: [{ color: '#2563eb', weight: 6 }] // Garis rute warna biru
        },
        createMarker: function() { return null; } // Hilangkan penanda bawaan plugin agar rapi
    }).addTo(map);
}

// 4. Pengaturan Sistem Buka/Tutup Modal Login
function toggleModal(show) {
    const modal = document.getElementById('login-modal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

// 5. Verifikasi Login Sederhana
function prosesLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'mahasiswa' && pass === 'unbara') {
        document.getElementById('auth-section').innerHTML = `<span class="login-status-box">Halo, Mahasiswa Unbara</span>`;
        toggleModal(false);
    } else {
        alert('Maaf, kombinasi Username atau Password salah!');
    }
}

// Eksekusi fungsi peta secara otomatis saat dokumen html selesai dibaca browser
window.onload = initMap;