// ============================================
// LAPOR MANGAN! - Complete Application
// All FR & NFR Features Implemented
// ============================================

// ============================================
// DATABASE (LocalStorage Simulation)
// ============================================
const DB = {
    // Get data from localStorage
    get(key, defaultValue = []) {
        try {
            const data = localStorage.getItem(`lm_${key}`);
            return data ? JSON.parse(data) : defaultValue;
        } catch { return defaultValue; }
    },
    
    // Save data to localStorage
    set(key, value) {
        localStorage.setItem(`lm_${key}`, JSON.stringify(value));
    },
    
    // Initialize default data
    init() {
        if (!localStorage.getItem('lm_initialized')) {
            this.set('kuliner', initialKulinerData);
            this.set('berita', initialBeritaData);
            this.set('promo', initialPromoData);
            this.set('users', [{ id: 1, email: 'admin@lapormangan.id', name: 'Admin', role: 'admin' }]);
            this.set('submissions', []);
            this.set('initialized', true);
        }
    }
};

// ============================================
// INITIAL DATA
// ============================================
const initialKulinerData = [
    {
        id: 1,
        nama: "Soto Sokaraja",
        kategori: "Soto",
        alamat: "Jl. Jend. Sudirman No.58, Purwokerto",
        jam: "07:00 - 15:00",
        harga: "Rp15.000 - Rp20.000",
        deskripsi: "Kuah kental dengan irisan daging sapi, khas Sokaraja yang legendaris.",
        foto: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
        lat: -7.421, lng: 109.242,
        keliling: false,
        halal: "halal",
        kontak: "081234567890",
        parkir: "Tersedia luas",
        rute: "Area Sokaraja, dekat pasar",
        verified: true,
        ownerId: null,
        reviews: [
            { userId: 1, name: "Budi", rating: 5, comment: "Soto terenak di Purwokerto!", date: "2025-12-10" },
            { userId: 2, name: "Ani", rating: 4, comment: "Kuahnya gurih, porsi pas", date: "2025-12-08" }
        ]
    },
    {
        id: 2,
        nama: "Sate Bebek Tambak",
        kategori: "Sate",
        alamat: "Jl. Tambak, Purwokerto",
        jam: "16:00 - 22:00",
        harga: "Rp25.000 - Rp40.000",
        deskripsi: "Sate bebek gurih dengan bumbu kacang dan arang khas, favorit malam hari.",
        foto: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400",
        lat: -7.423, lng: 109.240,
        keliling: false,
        halal: "halal",
        kontak: "081234567891",
        parkir: "Tersedia",
        rute: "Jl. Tambak",
        verified: true,
        ownerId: null,
        reviews: [{ userId: 3, name: "Dimas", rating: 5, comment: "Wajib coba!", date: "2025-12-05" }]
    },
    {
        id: 3,
        nama: "Mendoan Bu Parti",
        kategori: "Jajanan",
        alamat: "Pasar Sokaraja, Purwokerto",
        jam: "06:00 - 18:00",
        harga: "Rp2.000 - Rp5.000",
        deskripsi: "Tempe tipis digoreng renyah, disajikan dengan sambal kecap pedas.",
        foto: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
        lat: -7.420, lng: 109.230,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567892",
        parkir: "Area Pasar",
        rute: "Berkeliling Pasar Sokaraja",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 4,
        nama: "Nasi Liwet Mbah Maimun",
        kategori: "Nasi",
        alamat: "Jl. Pahlawan No.123, Purwokerto",
        jam: "16:00 - 22:00",
        harga: "Rp18.000 - Rp25.000",
        deskripsi: "Nasi gurih santan dengan lauk ayam suwir, telur, dan tempe orek.",
        foto: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
        lat: -7.425, lng: 109.250,
        keliling: false,
        halal: "halal",
        kontak: "081234567893",
        parkir: "Tersedia",
        rute: "Jl. Pahlawan",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 5,
        nama: "Bakso President",
        kategori: "Bakso",
        alamat: "Jl. Dr. Angka No.88, Purwokerto",
        jam: "08:00 - 21:00",
        harga: "Rp15.000 - Rp25.000",
        deskripsi: "Bakso besar dengan kuah gurih dan tekstur kenyal, ikonik di Purwokerto.",
        foto: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
        lat: -7.418, lng: 109.245,
        keliling: false,
        halal: "halal",
        kontak: "081234567894",
        parkir: "Luas",
        rute: "Jl. Dr. Angka",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 6,
        nama: "Gudeg Mbah Siti",
        kategori: "Gudeg",
        alamat: "Jl. Slamet Riyadi No.45, Purwokerto",
        jam: "09:00 - 19:00",
        harga: "Rp20.000 - Rp30.000",
        deskripsi: "Gudeg manis khas Jawa dengan krengsengan ayam.",
        foto: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        lat: -7.430, lng: 109.235,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567895",
        parkir: "Tersedia",
        rute: "Jl. Slamet Riyadi",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 7,
        nama: "Cilok Bang Jali",
        kategori: "Jajanan",
        alamat: "Keliling area GOR Satria",
        jam: "14:00 - 21:00",
        harga: "Rp5.000 - Rp10.000",
        deskripsi: "Cilok kenyal dengan bumbu kacang spesial.",
        foto: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400",
        lat: -7.424, lng: 109.244,
        keliling: true,
        halal: "unknown",
        kontak: "081234567896",
        parkir: "-",
        rute: "Keliling GOR Satria",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 8,
        nama: "Es Dawet Ayu",
        kategori: "Minuman",
        alamat: "Alun-alun Purwokerto",
        jam: "10:00 - 22:00",
        harga: "Rp5.000 - Rp8.000",
        deskripsi: "Es dawet segar dengan santan dan gula merah.",
        foto: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
        lat: -7.422, lng: 109.241,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567897",
        parkir: "Area Alun-alun",
        rute: "Alun-alun Purwokerto",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 9,
        nama: "Ayam Bakar Pak Tono",
        kategori: "Ayam",
        alamat: "Jl. Diponegoro No.78, Purwokerto",
        jam: "11:00 - 23:00",
        harga: "Rp25.000 - Rp40.000",
        deskripsi: "Ayam bakar bumbu rempah dengan sambal matah.",
        foto: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400",
        lat: -7.422, lng: 109.248,
        keliling: false,
        halal: "halal",
        kontak: "081234567898",
        parkir: "Luas",
        rute: "Jl. Diponegoro",
        verified: true,
        ownerId: null,
        reviews: []
    },
    {
        id: 10,
        nama: "Lontong Sayur Mbah Rini",
        kategori: "Lontong",
        alamat: "Jl. Ahmad Yani No.90, Purwokerto",
        jam: "07:00 - 14:00",
        harga: "Rp12.000 - Rp18.000",
        deskripsi: "Lontong dengan sayur labu siam santan.",
        foto: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
        lat: -7.415, lng: 109.240,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567899",
        parkir: "Tersedia",
        rute: "Jl. Ahmad Yani",
        verified: true,
        ownerId: null,
        reviews: []
    }
];

const initialBeritaData = [
    {
        id: 1,
        hot: true,
        judul: "Festival Kuliner Purwokerto 2025",
        konten: "Festival kuliner terbesar di Purwokerto akan diselenggarakan pada tanggal 20-25 Desember 2025 di Alun-alun Purwokerto. Berbagai UMKM kuliner akan hadir memeriahkan acara ini.",
        gambar: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
        tanggal: "2025-12-15",
        kategori: "Event",
        author: "Admin"
    },
    {
        id: 2,
        judul: "Tips Mencari Kuliner Halal di Purwokerto",
        konten: "Berikut adalah tips untuk menemukan kuliner halal yang terpercaya di Purwokerto. Pastikan tempat makan memiliki sertifikat halal MUI atau minimal sudah dikenal masyarakat sebagai tempat makan halal.",
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
        tanggal: "2025-12-12",
        kategori: "Tips",
        author: "Admin"
    },
    {
        id: 3,
        judul: "Soto Sokaraja: Warisan Kuliner Banyumas",
        konten: "Soto Sokaraja adalah kuliner khas Banyumas yang terkenal dengan kuahnya yang kental dan gurih. Berbeda dengan soto lainnya, Soto Sokaraja menggunakan kacang tanah yang dihaluskan.",
        gambar: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600",
        tanggal: "2025-12-10",
        kategori: "Artikel",
        author: "Admin"
    }
];

const initialPromoData = [
    {
        id: 1,
        judul: "Diskon 20% Soto Sokaraja",
        deskripsi: "Dapatkan diskon 20% untuk pembelian minimal Rp50.000",
        kulinerId: 1,
        berlakuSampai: "2025-12-31",
        kode: "SOTO20",
        aktif: true
    },
    {
        id: 2,
        judul: "Beli 2 Gratis 1 Mendoan",
        deskripsi: "Promo spesial akhir tahun! Beli 2 porsi mendoan gratis 1 porsi",
        kulinerId: 3,
        berlakuSampai: "2025-12-25",
        kode: "MENDOAN3",
        aktif: true
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================
let state = {
    currentUser: null,
    currentPage: 'home',
    kulinerData: [],
    favorites: new Set(),
    map: null,
    markers: [],
    weather: null
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    DB.init();
    loadState();
    initApp();
});

// Helper modal functions to support multiple HTML ID variants
function openDetailHTML(html) {
    const modal = document.getElementById('detailModal') || document.getElementById('detailPopup');
    const content = document.getElementById('modalContent') || document.getElementById('detailContent');
    if (content) content.innerHTML = html;
    if (modal) {
        if (modal.classList) modal.classList.add('show');
        else modal.style.display = 'block';
    }
}

function closeDetail() {
    const modal = document.getElementById('detailModal') || document.getElementById('detailPopup');
    if (modal) {
        if (modal.classList) modal.classList.remove('show');
        else modal.style.display = 'none';
    }
}

function loadState() {
    state.kulinerData = DB.get('kuliner', initialKulinerData);
    state.favorites = new Set(DB.get('favorites', []));
    state.currentUser = DB.get('currentUser', null);
}

function initApp() {
    initMap();
    renderKulinerList();
    populateFilters();
    fetchWeather();
    setupEventListeners();
    updateAuthUI();
    checkUrlHash();
}

// ============================================
// NAVIGATION
// ============================================
function navigate(page) {
    state.currentPage = page;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`)?.classList.add('active');
    
    if (page === 'berita') renderBerita();
    if (page === 'promo') renderPromo();
    if (page === 'favorit') renderFavorites();
    if (page === 'admin') renderAdmin();
    
    window.location.hash = page;
}

function checkUrlHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'berita', 'promo', 'favorit', 'admin'].includes(hash)) {
        navigate(hash);
    }
}

// ============================================
// MAP (FR-01, FR-02)
// ============================================
function initMap() {
    state.map = L.map('map').setView([-7.4212, 109.2422], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(state.map);
    renderMarkers();
}

function renderMarkers(data = state.kulinerData) {
    state.markers.forEach(m => state.map.removeLayer(m));
    state.markers = [];
    
    data.forEach((item) => {
        const icon = item.keliling ? '🛵' : '📍';
        const marker = L.marker([item.lat, item.lng], {
            icon: L.divIcon({
                html: `<div class="marker-icon ${item.keliling ? 'keliling' : ''}">${icon}</div>`,
                className: '',
                iconSize: [32, 32]
            })
        }).addTo(state.map);
        
        marker.bindPopup(`<strong>${item.nama}</strong><br>${item.kategori}`);
        marker.on('click', () => showDetail(item.id));
        state.markers.push(marker);
    });
}

// FR-02: Sort by distance
function sortByDistance() {
    if (!navigator.geolocation) {
        showToast('Geolocation tidak didukung', 'error');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(pos => {
        const sorted = [...state.kulinerData].sort((a, b) => {
            const distA = getDistance(pos.coords.latitude, pos.coords.longitude, a.lat, a.lng);
            const distB = getDistance(pos.coords.latitude, pos.coords.longitude, b.lat, b.lng);
            return distA - distB;
        });
        renderKulinerList(sorted);
        renderMarkers(sorted);
        showToast('Diurutkan berdasarkan jarak terdekat');
    }, () => {
        showToast('Tidak dapat mengakses lokasi', 'error');
    });
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function openRoute(lat, lng) {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
}

// ============================================
// FILTERS & SORTING (FR-03, FR-04, FR-05, FR-06, FR-19)
// ============================================
function populateFilters() {
    const categories = [...new Set(state.kulinerData.map(k => k.kategori))];
    const select = document.getElementById('categoryFilter');
    if (select) {
        select.innerHTML = '<option value="">Kategori</option>';
        categories.forEach(cat => {
            select.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }
}

function applyFilters() {
    const search = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const type = document.getElementById('typeFilter')?.value || '';
    const halal = document.getElementById('halalFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || '';
    const openNow = document.getElementById('openNowFilter')?.checked || false;
    
    let filtered = state.kulinerData.filter(k => {
        const matchSearch = k.nama.toLowerCase().includes(search) || k.kategori.toLowerCase().includes(search);
        const matchCategory = !category || k.kategori === category;
        const matchType = !type || (type === 'tetap' ? !k.keliling : k.keliling);
        const matchHalal = !halal || k.halal === halal;
        const matchOpen = !openNow || isOpen(k.jam);
        return matchSearch && matchCategory && matchType && matchHalal && matchOpen;
    });
    
    // Sorting (FR-06)
    if (sort === 'nama') filtered.sort((a, b) => a.nama.localeCompare(b.nama, 'id'));
    else if (sort === 'rating') filtered.sort((a, b) => getAvgRating(b) - getAvgRating(a));
    else if (sort === 'harga-asc') filtered.sort((a, b) => parsePrice(a.harga) - parsePrice(b.harga));
    else if (sort === 'harga-desc') filtered.sort((a, b) => parsePrice(b.harga) - parsePrice(a.harga));
    
    renderKulinerList(filtered);
    renderMarkers(filtered);
}

function isOpen(jam) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const [start, end] = jam.split(' - ').map(t => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + (m || 0);
    });
    return currentMinutes >= start && currentMinutes <= end;
}

function parsePrice(harga) {
    const match = harga.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
}

function getAvgRating(item) {
    if (!item.reviews || item.reviews.length === 0) return 0;
    return item.reviews.reduce((sum, r) => sum + r.rating, 0) / item.reviews.length;
}

function filterOpenNow() {
    document.getElementById('openNowFilter').checked = true;
    applyFilters();
}

function showRandom() {
    const random = state.kulinerData[Math.floor(Math.random() * state.kulinerData.length)];
    showDetail(random.id);
}

// ============================================
// KULINER LIST & DETAIL (FR-15, FR-16)
// ============================================
function renderKulinerList(data = state.kulinerData) {
    // support legacy id `list` or new `kulinerList`
    const list = document.getElementById('kulinerList') || document.getElementById('list');
    if (!list) return;
    
    if (data.length === 0) {
        list.innerHTML = '<div class="empty-state"><p>Tidak ada hasil ditemukan</p></div>';
        return;
    }
    
    list.innerHTML = data.map(item => `
        <div class="kuliner-card" onclick="showDetail(${item.id})">
            <img src="${item.foto}" alt="${item.nama}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x150?text=No+Image'">
            <div class="card-body">
                <div class="card-header">
                    <h3>${item.nama}</h3>
                    ${getHalalBadge(item.halal)}
                </div>
                <p class="card-category">${item.kategori} ${item.keliling ? '• 🛵 Keliling' : ''}</p>
                <p class="card-address"><i class="fas fa-map-marker-alt"></i> ${item.alamat}</p>
                <div class="card-footer">
                    <span class="card-hours ${isOpen(item.jam) ? 'open' : 'closed'}">${isOpen(item.jam) ? '● Buka' : '○ Tutup'}</span>
                    <span class="card-rating">★ ${getAvgRating(item).toFixed(1)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function getHalalBadge(halal) {
    const badges = {
        'halal': '<span class="badge badge-halal">Halal MUI</span>',
        'halal-self': '<span class="badge badge-halal-self">Halal</span>',
        'unknown': '<span class="badge badge-unknown">?</span>'
    };
    return badges[halal] || '';
}

function showDetail(id) {
    const item = state.kulinerData.find(k => k.id === id);
    if (!item) return;

    const isFav = state.favorites.has(id);
    const canReview = state.currentUser !== null;

    const detailHtml = `
        <img src="${item.foto}" alt="${item.nama}" class="detail-image">
        <div class="detail-body">
            <h2>${item.nama}</h2>
            <div class="detail-badges">
                ${getHalalBadge(item.halal)}
                <span class="badge ${item.keliling ? 'badge-keliling' : 'badge-tetap'}">${item.keliling ? '🛵 Keliling' : '🏠 Tetap'}</span>
                ${item.verified ? '<span class="badge badge-verified">✓ Terverifikasi</span>' : ''}
            </div>
            <div class="detail-info">
                <div class="info-row"><i class="fas fa-tag"></i> ${item.kategori}</div>
                <div class="info-row"><i class="fas fa-map-marker-alt"></i> ${item.alamat}</div>
                <div class="info-row"><i class="fas fa-clock"></i> ${item.jam} <span class="${isOpen(item.jam) ? 'text-success' : 'text-danger'}">(${isOpen(item.jam) ? 'Buka' : 'Tutup'})</span></div>
                <div class="info-row"><i class="fas fa-money-bill"></i> ${item.harga}</div>
                <div class="info-row"><i class="fas fa-parking"></i> ${item.parkir}</div>
                <div class="info-row"><i class="fas fa-route"></i> ${item.rute}</div>
                ${item.kontak ? `<div class="info-row"><i class="fas fa-phone"></i> <a href="tel:${item.kontak}">${item.kontak}</a></div>` : ''}
            </div>
            <p class="detail-desc">${item.deskripsi}</p>
            <div class="detail-actions">
                <button class="btn btn-primary" onclick="openRoute(${item.lat}, ${item.lng})">
                    <i class="fas fa-directions"></i> Rute
                </button>
                ${item.kontak ? `<button class="btn btn-whatsapp" onclick="openWhatsApp('${item.kontak}')">
                    <i class="fab fa-whatsapp"></i> WA
                </button>` : ''}
                <button class="btn ${isFav ? 'btn-favorited' : 'btn-secondary'}" onclick="toggleFavorite(${item.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="reviews-section">
                <h3>Ulasan (${item.reviews.length})</h3>
                <div class="reviews-list">
                    ${item.reviews.length ? item.reviews.map(r => `
                        <div class="review-item">
                            <div class="review-header">
                                <strong>${r.name}</strong>
                                <span class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
                            </div>
                            <p>${r.comment}</p>
                            <small>${r.date}</small>
                        </div>
                    `).join('') : '<p class="text-muted">Belum ada ulasan</p>'}
                </div>
                ${canReview ? `
                <div class="add-review">
                    <h4>Tulis Ulasan</h4>
                    <select id="reviewRating">
                        <option value="5">★★★★★</option>
                        <option value="4">★★★★☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="1">★☆☆☆☆</option>
                    </select>
                    <textarea id="reviewComment" placeholder="Tulis ulasan..."></textarea>
                    <button class="btn btn-primary" onclick="submitReview(${item.id})">Kirim</button>
                </div>
                ` : '<p class="login-prompt">Login untuk memberikan ulasan</p>'}
            </div>
        </div>
    `;

    openDetailHTML(detailHtml);
    if (state.map && item.lat && item.lng) state.map.setView([item.lat, item.lng], 16);
}

function closeModal() {
    closeDetail();
}

function openWhatsApp(phone) {
    window.open(`https://wa.me/${phone.replace(/^0/, '62')}`, '_blank');
}

// ============================================
// AUTH (FR-07)
// ============================================
function showLoginModal() {
    const m = document.getElementById('loginModal');
    if (m) m.classList.add('show');
}

function closeLoginModal() {
    const m = document.getElementById('loginModal');
    if (m) m.classList.remove('show');
}

function loginWithGoogle() {
    // Try Firebase Auth popup if available (module-based imports exposed in index.html), otherwise fallback to prompt
    if (window.signInWithPopup && window.GoogleAuthProvider && window.firebaseAuth) {
        try {
            const provider = new window.GoogleAuthProvider();
            window.signInWithPopup(window.firebaseAuth, provider).then(result => {
                const user = result.user;
                const name = user.displayName || (user.email || '').split('@')[0];
                const isAdmin = user.email && user.email.includes('admin');
                state.currentUser = { id: user.uid || Date.now(), email: user.email, name, role: isAdmin ? 'admin' : 'user' };
                DB.set('currentUser', state.currentUser);
                updateAuthUI();
                closeLoginModal();
                showToast(`Selamat datang, ${name}!`);
            }).catch(err => {
                console.warn('Firebase signIn error', err);
                fallbackPromptLogin();
            });
            return;
        } catch (e) {
            console.warn('Firebase auth attempt failed', e);
        }
    }

    // Fallback when Firebase not configured
    fallbackPromptLogin();
}

function fallbackPromptLogin() {
    const email = prompt('Masukkan email Google Anda:');
    if (!email) return;
    const name = email.split('@')[0];
    const isAdmin = email.includes('admin');
    state.currentUser = {
        id: Date.now(),
        email: email,
        name: name,
        role: isAdmin ? 'admin' : 'user'
    };
    DB.set('currentUser', state.currentUser);
    updateAuthUI();
    closeLoginModal();
    showToast(`Selamat datang, ${name}!`);
}

function logout() {
    state.currentUser = null;
    DB.set('currentUser', null);
    updateAuthUI();
    showToast('Anda telah logout');
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const adminNav = document.getElementById('adminNav');
    if (authBtn) {
        if (state.currentUser) {
            authBtn.innerHTML = `<span>${state.currentUser.name}</span> <button onclick="logout()" class="btn-logout">Logout</button>`;
        } else {
            authBtn.innerHTML = '<button onclick="showLoginModal()" class="btn btn-login">Login</button>';
        }
    }
    if (adminNav) {
        if (state.currentUser && state.currentUser.role === 'admin') adminNav.style.display = 'block';
        else adminNav.style.display = 'none';
    }
}

// Compatibility wrappers used by index.html (legacy names)
function signInWithGoogle() { loginWithGoogle(); }
function signOut() { logout(); }
function toggleAuthModal() {
    const m = document.getElementById('authModal');
    if (!m) return;
    if (m.classList) m.classList.toggle('show'); else m.style.display = (m.style.display === 'none' ? 'block' : 'none');
}
function closeAuthModal() { const m = document.getElementById('authModal'); if (m) m.classList.remove('show'); }
function openAddKulinerModal() { const m = document.getElementById('addKulinerModal'); if (m) m.classList.add('show'); }
function closeAddKulinerModal() { const m = document.getElementById('addKulinerModal'); if (m) m.classList.remove('show'); }
function openSettings() { showToast('Pengaturan belum tersedia di demo'); }
function showMyReviews() { showToast('Fitur Ulasan Saya belum diimplementasikan'); }
function showMyContributions() { showToast('Fitur Kontribusi Saya belum diimplementasikan'); }

// ============================================
// FAVORITES (FR-09)
// ============================================
function toggleFavorite(id) {
    if (!state.currentUser) {
        showToast('Login untuk menyimpan favorit', 'warning');
        return;
    }
    
    if (state.favorites.has(id)) {
        state.favorites.delete(id);
        showToast('Dihapus dari favorit');
    } else {
        state.favorites.add(id);
        showToast('Ditambahkan ke favorit');
    }
    
    DB.set('favorites', [...state.favorites]);
    showDetail(id); // Refresh
}

function renderFavorites() {
    const container = document.getElementById('favoritList');
    if (!container) return;
    
    const favItems = state.kulinerData.filter(k => state.favorites.has(k.id));
    
    if (favItems.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Belum ada favorit</p></div>';
        return;
    }
    
    container.innerHTML = favItems.map(item => `
        <div class="kuliner-card" onclick="showDetail(${item.id})">
            <img src="${item.foto}" alt="${item.nama}">
            <div class="card-body">
                <h3>${item.nama}</h3>
                <p>${item.kategori}</p>
            </div>
        </div>
    `).join('');
}

// ============================================
// REVIEWS (FR-08)
// ============================================
function submitReview(kulinerId) {
    if (!state.currentUser) {
        showToast('Login untuk memberikan ulasan', 'warning');
        return;
    }
    
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value.trim();
    
    if (!comment) {
        showToast('Tulis komentar terlebih dahulu', 'warning');
        return;
    }
    
    const kuliner = state.kulinerData.find(k => k.id === kulinerId);
    kuliner.reviews.push({
        userId: state.currentUser.id,
        name: state.currentUser.name,
        rating: rating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    });
    
    DB.set('kuliner', state.kulinerData);
    showDetail(kulinerId);
    showToast('Ulasan berhasil dikirim!');
}

// ============================================
// SUBMISSIONS (FR-10, FR-18)
// ============================================
function showSubmitForm() {
    if (!state.currentUser) {
        showToast('Login untuk menambahkan kuliner', 'warning');
        return;
    }
    document.getElementById('submitModal').classList.add('show');
}

function closeSubmitModal() {
    document.getElementById('submitModal').classList.remove('show');
}

function submitKuliner(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        nama: document.getElementById('subNama').value,
        kategori: document.getElementById('subKategori').value,
        alamat: document.getElementById('subAlamat').value,
        jam: document.getElementById('subJam').value,
        harga: document.getElementById('subHarga').value,
        deskripsi: document.getElementById('subDeskripsi').value,
        foto: document.getElementById('subFoto').value || 'https://via.placeholder.com/400x200?text=Foto+Kuliner',
        lat: parseFloat(document.getElementById('subLat').value) || -7.4212,
        lng: parseFloat(document.getElementById('subLng').value) || 109.2422,
        keliling: document.getElementById('subKeliling').checked,
        halal: document.getElementById('subHalal').value,
        kontak: document.getElementById('subKontak').value,
        parkir: document.getElementById('subParkir').value,
        rute: document.getElementById('subRute').value,
        verified: false,
        submittedBy: state.currentUser.id,
        status: 'pending',
        reviews: []
    };
    
    const submissions = DB.get('submissions', []);
    submissions.push(formData);
    DB.set('submissions', submissions);
    
    closeSubmitModal();
    showToast('Kuliner berhasil diajukan! Menunggu moderasi admin.');
    e.target.reset();
}

// ============================================
// WEATHER (FR-12, FR-14) - Using Free API
// ============================================
async function fetchWeather() {
    try {
        // Using wttr.in - Free weather API, no key needed!
        const res = await fetch('https://wttr.in/Purwokerto?format=j1');
        const data = await res.json();
        
        state.weather = {
            temp: parseFloat(data.current_condition[0].temp_C),
            feelsLike: parseFloat(data.current_condition[0].FeelsLikeC),
            humidity: data.current_condition[0].humidity,
            description: data.current_condition[0].weatherDesc[0].value,
            code: parseInt(data.current_condition[0].weatherCode),
            windSpeed: data.current_condition[0].windspeedKmph
        };
        
        updateWeatherUI();
    } catch (e) {
        console.log('Weather fetch failed, using fallback');
        // Fallback to default
        state.weather = { temp: 28, description: 'Cerah', code: 113 };
        updateWeatherUI();
    }
}

function updateWeatherUI() {
    if (!state.weather) return;
    
    const icon = getWeatherIcon(state.weather.code);
    
    document.getElementById('weatherWidget').innerHTML = `
        <span class="weather-icon">${icon}</span>
        <span class="weather-temp">${Math.round(state.weather.temp)}°C</span>
    `;
}

function getWeatherIcon(code) {
    // wttr.in weather codes
    if (code === 113) return '☀️';  // Sunny
    if (code === 116) return '⛅';  // Partly cloudy
    if (code === 119 || code === 122) return '☁️';  // Cloudy
    if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 311, 314].includes(code)) return '🌧️';  // Rain
    if ([200, 386, 389, 392, 395].includes(code)) return '⛈️';  // Thunder
    if ([179, 182, 185, 227, 230, 323, 326, 329, 332, 335, 338, 350, 368, 371, 374, 377].includes(code)) return '❄️';  // Snow
    return '🌤️';
}

function getWeatherCondition() {
    if (!state.weather) return 'unknown';
    const code = state.weather.code;
    
    if (code === 113) return 'sunny';
    if ([116, 119, 122].includes(code)) return 'cloudy';
    if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 311, 314, 200, 386, 389].includes(code)) return 'rainy';
    return 'normal';
}

function getWeatherRecommendation() {
    if (!state.weather) {
        showToast('Menunggu data cuaca...', 'warning');
        return null;
    }
    
    const temp = state.weather.temp;
    const condition = getWeatherCondition();
    
    let recommendations = [];
    let message = '';
    
    if (condition === 'rainy') {
        // Hujan - rekomendasikan makanan hangat di warung tetap
        recommendations = state.kulinerData.filter(k => 
            !k.keliling && (
                k.kategori === 'Soto' || 
                k.kategori === 'Bakso' || 
                k.kategori === 'Gudeg' ||
                k.nama.toLowerCase().includes('soto') ||
                k.nama.toLowerCase().includes('bakso')
            )
        );
        message = '🌧️ Hujan! Enaknya makan yang hangat-hangat:';
    } else if (temp > 32) {
        // Panas banget - minuman segar
        recommendations = state.kulinerData.filter(k => 
            k.kategori === 'Minuman' || 
            k.nama.toLowerCase().includes('es') ||
            k.nama.toLowerCase().includes('dawet')
        );
        message = '🥵 Panas banget! Segerkan dengan:';
    } else if (temp > 28) {
        // Hangat - jajanan ringan
        recommendations = state.kulinerData.filter(k => 
            k.kategori === 'Jajanan' || k.keliling
        );
        message = '☀️ Cuaca cerah, enak buat jajan:';
    } else if (temp < 25) {
        // Dingin - makanan berat hangat
        recommendations = state.kulinerData.filter(k => 
            k.kategori === 'Soto' || 
            k.kategori === 'Nasi' || 
            k.kategori === 'Ayam' ||
            k.kategori === 'Sate'
        );
        message = '🌙 Sejuk, cocok makan yang menghangatkan:';
    } else {
        // Normal
        recommendations = state.kulinerData.filter(k => isOpen(k.jam));
        message = '🌤️ Cuaca pas! Rekomendasi yang buka:';
    }
    
    if (recommendations.length) {
        const rec = recommendations[Math.floor(Math.random() * recommendations.length)];
        showDetail(rec.id);
        showToast(`${message} ${rec.nama}`);
        return rec;
    }
    
    return null;
}

// ============================================
// BERITA (FR-21, FR-22)
// ============================================
function renderBerita() {
    const container = document.getElementById('newsList') || document.getElementById('beritaList');
    if (!container) return;

    const berita = DB.get('berita', initialBeritaData);

    // Featured / hot article first
    const hot = berita.find(b => b.hot) || berita[0];
    const others = berita.filter(b => b.id !== (hot && hot.id));

    let html = '';
    if (hot) {
        html += `
        <section class="berita-featured" onclick="showBeritaDetail(${hot.id})">
            <img src="${hot.gambar}" alt="${hot.judul}">
            <div class="featured-body">
                <span class="badge badge-hot">HOT</span>
                <h2>${hot.judul}</h2>
                <p>${hot.konten.substring(0, 140)}...</p>
                <small>${hot.tanggal}</small>
            </div>
        </section>
        `;
    }

    html += '<div class="berita-grid">';
    html += others.map(b => `
        <article class="berita-card" onclick="showBeritaDetail(${b.id})">
            <img src="${b.gambar}" alt="${b.judul}">
            <div class="berita-body">
                <span class="berita-category">${b.kategori}</span>
                <h3>${b.judul}</h3>
                <p>${b.konten.substring(0, 100)}...</p>
                <small>${b.tanggal}</small>
            </div>
        </article>
    `).join('');
    html += '</div>';

    container.innerHTML = html;
}

function showBeritaDetail(id) {
    const berita = DB.get('berita', []).find(b => b.id === id);
    if (!berita) return;
    const html = `
        <img src="${berita.gambar}" class="detail-image">
        <div class="detail-body">
            <span class="badge">${berita.kategori}</span>
            <h2>${berita.judul}</h2>
            <small>Oleh ${berita.author} • ${berita.tanggal}</small>
            <p class="berita-content">${berita.konten}</p>
        </div>
    `;
    openDetailHTML(html);
}

// ============================================
// PROMO (FR-23, FR-24)
// ============================================
function renderPromo() {
    const container = document.getElementById('promoList');
    if (!container) return;
    
    const promo = DB.get('promo', initialPromoData).filter(p => p.aktif && new Date(p.berlakuSampai) >= new Date());
    
    if (promo.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Tidak ada promo saat ini</p></div>';
        return;
    }
    
    container.innerHTML = promo.map(p => {
        const kuliner = state.kulinerData.find(k => k.id === p.kulinerId);
        return `
            <div class="promo-card">
                <div class="promo-badge">PROMO</div>
                <h3>${p.judul}</h3>
                <p>${p.deskripsi}</p>
                ${kuliner ? `<p class="promo-kuliner">Di: ${kuliner.nama}</p>` : ''}
                <div class="promo-footer">
                    <span class="promo-code">Kode: ${p.kode}</span>
                    <span class="promo-expire">s/d ${p.berlakuSampai}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// ADMIN PANEL (FR-17, FR-18, FR-20, FR-22, FR-24)
// ============================================
function renderAdmin() {
    if (!state.currentUser || state.currentUser.role !== 'admin') {
        document.getElementById('page-admin').innerHTML = '<p>Akses ditolak</p>';
        return;
    }
    
    const submissions = DB.get('submissions', []).filter(s => s.status === 'pending');
    
    document.getElementById('adminContent').innerHTML = `
        <div class="admin-section">
            <h3>Moderasi Pengajuan (${submissions.length})</h3>
            ${submissions.length ? submissions.map(s => `
                <div class="submission-card">
                    <h4>${s.nama}</h4>
                    <p>${s.kategori} • ${s.alamat}</p>
                    <div class="submission-actions">
                        <button class="btn btn-success" onclick="approveSubmission(${s.id})">Setujui</button>
                        <button class="btn btn-danger" onclick="rejectSubmission(${s.id})">Tolak</button>
                    </div>
                </div>
            `).join('') : '<p>Tidak ada pengajuan pending</p>'}
        </div>
        
        <div class="admin-section">
            <h3>Kelola Kuliner</h3>
            <button class="btn btn-primary" onclick="showAddKulinerForm()">+ Tambah Kuliner</button>
            <div class="admin-list">
                ${state.kulinerData.map(k => `
                    <div class="admin-item">
                        <span>${k.nama}</span>
                        <div>
                            <button onclick="editKuliner(${k.id})">Edit</button>
                            <button onclick="deleteKuliner(${k.id})">Hapus</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function approveSubmission(id) {
    const submissions = DB.get('submissions', []);
    const submission = submissions.find(s => s.id === id);
    
    if (submission) {
        submission.status = 'approved';
        submission.verified = true;
        state.kulinerData.push(submission);
        DB.set('kuliner', state.kulinerData);
        DB.set('submissions', submissions);
        renderAdmin();
        showToast('Pengajuan disetujui!');
    }
}

function rejectSubmission(id) {
    const submissions = DB.get('submissions', []);
    const idx = submissions.findIndex(s => s.id === id);
    if (idx > -1) {
        submissions[idx].status = 'rejected';
        DB.set('submissions', submissions);
        renderAdmin();
        showToast('Pengajuan ditolak');
    }
}

function deleteKuliner(id) {
    if (!confirm('Yakin hapus kuliner ini?')) return;
    state.kulinerData = state.kulinerData.filter(k => k.id !== id);
    DB.set('kuliner', state.kulinerData);
    renderKulinerList();
    renderMarkers();
    renderAdmin();
    showToast('Kuliner dihapus');
}

// ============================================
// CHATBOT AI (FR-11) - Smart Assistant
// ============================================
function toggleChat() {
    document.getElementById('chatPanel').classList.toggle('show');
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    
    const messages = document.getElementById('chatMessages');
    messages.innerHTML += `<div class="chat-msg user">${msg}</div>`;
    input.value = '';
    
    // Show typing indicator
    messages.innerHTML += `<div class="chat-msg bot typing" id="typingIndicator">...</div>`;
    messages.scrollTop = messages.scrollHeight;
    
    setTimeout(() => {
        document.getElementById('typingIndicator')?.remove();
        const reply = MakanBotAI.generateResponse(msg);
        messages.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 600 + Math.random() * 400);
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChat();
}

// ============================================
// MAKANBOT AI - Intelligent Chatbot System
// ============================================
const MakanBotAI = {
    // Intent patterns - what the user might be asking
    intents: {
        greeting: ['halo', 'hai', 'hi', 'hey', 'selamat', 'pagi', 'siang', 'sore', 'malam', 'apa kabar', 'gimana'],
        farewell: ['bye', 'dadah', 'sampai jumpa', 'makasih', 'terima kasih', 'thanks', 'ok', 'oke', 'siap'],
        askFood: ['makan', 'kuliner', 'makanan', 'lapar', 'laper', 'hungry', 'mau makan', 'pengen makan', 'cari makan'],
        askRecommend: ['rekomen', 'saran', 'suggest', 'enak', 'paling enak', 'terbaik', 'favorit', 'best', 'recommend', 'bagus'],
        askCheap: ['murah', 'cheap', 'budget', 'hemat', 'terjangkau', 'murmer', 'gak mahal', 'tidak mahal', 'kantong'],
        askExpensive: ['mahal', 'mewah', 'premium', 'spesial', 'special'],
        askOpen: ['buka', 'open', 'sekarang', 'jam', 'tutup', 'masih buka', 'udah buka'],
        askNearby: ['dekat', 'terdekat', 'nearby', 'sekitar', 'deket', 'lokasi', 'dimana', 'mana'],
        askWeather: ['cuaca', 'hujan', 'panas', 'dingin', 'gerah', 'weather', 'mendung'],
        askCategory: ['soto', 'sate', 'bakso', 'ayam', 'nasi', 'gudeg', 'jajanan', 'minuman', 'es', 'mendoan', 'tempe', 'lontong'],
        askHalal: ['halal', 'muslim', 'haram'],
        askKeliling: ['keliling', 'gerobak', 'pkl', 'kaki lima', 'pedagang'],
        askHelp: ['help', 'bantu', 'bisa apa', 'fitur', 'cara', 'gimana cara', 'bagaimana'],
        random: ['acak', 'random', 'terserah', 'apa aja', 'bebas', 'bingung', 'gatau', 'gak tau'],
        askRating: ['rating', 'bintang', 'review', 'ulasan', 'populer', 'rame', 'ramai']
    },
    
    // Detect intent from message
    detectIntent(msg) {
        const lower = msg.toLowerCase();
        const detected = [];
        
        for (const [intent, patterns] of Object.entries(this.intents)) {
            for (const pattern of patterns) {
                if (lower.includes(pattern)) {
                    detected.push(intent);
                    break;
                }
            }
        }
        
        return detected.length ? detected : ['unknown'];
    },
    
    // Extract category from message
    extractCategory(msg) {
        const lower = msg.toLowerCase();
        const categories = {
            'soto': 'Soto',
            'sate': 'Sate',
            'bakso': 'Bakso',
            'ayam': 'Ayam',
            'nasi': 'Nasi',
            'gudeg': 'Gudeg',
            'jajanan': 'Jajanan',
            'minuman': 'Minuman',
            'es': 'Minuman',
            'mendoan': 'Jajanan',
            'tempe': 'Jajanan',
            'lontong': 'Lontong'
        };
        
        for (const [key, value] of Object.entries(categories)) {
            if (lower.includes(key)) return value;
        }
        return null;
    },
    
    // Get weather context for recommendations
    getWeatherContext() {
        if (!state.weather) return null;
        
        const temp = state.weather.temp;
        const condition = getWeatherCondition();
        
        return { temp, condition };
    },
    
    // Generate smart response
    generateResponse(msg) {
        const intents = this.detectIntent(msg);
        const category = this.extractCategory(msg);
        const weather = this.getWeatherContext();
        
        // Priority handling based on detected intents
        
        // Greeting
        if (intents.includes('greeting')) {
            const greetings = [
                'Halo! 👋 Lagi cari makan enak di Purwokerto? Tanya aja ke aku!',
                'Hai! Selamat datang di Lapor Mangan! 🍽️ Mau makan apa hari ini?',
                'Halo! Aku MakanBot, asisten kuliner Purwokerto. Ada yang bisa dibantu? 😊',
                'Hi! Lapar ya? Yuk aku bantu carikan makanan enak! 🤤'
            ];
            return this.randomPick(greetings);
        }
        
        // Farewell
        if (intents.includes('farewell')) {
            const farewells = [
                'Sama-sama! Selamat menikmati makanannya ya! 🙏',
                'Oke, semoga makannya enak! Kalau butuh bantuan, tanya aja lagi! 👋',
                'Siap! Jangan lupa review makanannya ya setelah makan! ⭐',
                'Terima kasih sudah pakai Lapor Mangan! 😊'
            ];
            return this.randomPick(farewells);
        }
        
        // Help
        if (intents.includes('askHelp')) {
            return `Aku bisa bantu kamu:
• 🔍 Cari kuliner: "cari soto" atau "mau makan bakso"
• 💰 Cari yang murah: "yang murah dong"
• 🕐 Yang buka sekarang: "yang buka sekarang"
• 📍 Terdekat: "kuliner terdekat"
• 🌧️ Rekomendasi cuaca: "cuaca gimana?"
• 🎲 Random: "bingung mau makan apa"
• ✅ Halal: "yang halal"
Coba tanya apa aja! 😊`;
        }
        
        // Random / Confused
        if (intents.includes('random')) {
            const random = state.kulinerData[Math.floor(Math.random() * state.kulinerData.length)];
            setTimeout(() => showDetail(random.id), 500);
            return `Bingung? Tenang, aku pilihin! 🎲\n\nCoba **${random.nama}**!\n${random.deskripsi}\n\n📍 ${random.alamat}\n💰 ${random.harga}`;
        }
        
        // Weather-based recommendation
        if (intents.includes('askWeather')) {
            if (!weather) return 'Waduh, data cuacanya belum siap nih. Coba lagi ya! 🌤️';
            
            let response = `Cuaca sekarang: ${getWeatherIcon(state.weather.code)} ${state.weather.temp}°C\n\n`;
            
            if (weather.condition === 'rainy') {
                const warmFood = state.kulinerData.filter(k => k.kategori === 'Soto' || k.kategori === 'Bakso');
                if (warmFood.length) {
                    const pick = this.randomPick(warmFood);
                    response += `🌧️ Lagi hujan nih! Enaknya makan yang anget-anget.\n\nCoba **${pick.nama}**!\n📍 ${pick.alamat}`;
                    setTimeout(() => showDetail(pick.id), 500);
                }
            } else if (weather.temp > 30) {
                const coldFood = state.kulinerData.filter(k => k.kategori === 'Minuman' || k.nama.toLowerCase().includes('es'));
                if (coldFood.length) {
                    const pick = this.randomPick(coldFood);
                    response += `🥵 Panas banget! Segerkan diri dengan:\n\n**${pick.nama}**\n📍 ${pick.alamat}`;
                    setTimeout(() => showDetail(pick.id), 500);
                }
            } else {
                response += `Cuaca enak nih! Bebas mau makan apa aja. Mau aku rekomendasikan? 😊`;
            }
            
            return response;
        }
        
        // Category-specific search
        if (category) {
            const matches = state.kulinerData.filter(k => 
                k.kategori === category || k.nama.toLowerCase().includes(category.toLowerCase())
            );
            
            if (matches.length) {
                // Filter yang buka jika ditanya sekarang
                let filtered = intents.includes('askOpen') 
                    ? matches.filter(k => isOpen(k.jam))
                    : matches;
                
                if (filtered.length === 0) filtered = matches;
                
                const pick = this.randomPick(filtered);
                setTimeout(() => showDetail(pick.id), 500);
                
                const statusText = isOpen(pick.jam) ? '✅ Buka sekarang' : '⏰ ' + pick.jam;
                
                return `Untuk ${category}, aku rekomendasikan:\n\n🍽️ **${pick.nama}**\n${pick.deskripsi}\n\n📍 ${pick.alamat}\n💰 ${pick.harga}\n${statusText}\n\n${filtered.length > 1 ? `Ada ${filtered.length} pilihan lainnya lho!` : ''}`;
            }
            return `Hmm, belum ada ${category} di database kami. Coba kategori lain ya! 🤔`;
        }
        
        // Cheap food
        if (intents.includes('askCheap')) {
            const cheap = state.kulinerData
                .filter(k => parsePrice(k.harga) <= 15000)
                .sort((a, b) => parsePrice(a.harga) - parsePrice(b.harga));
            
            if (cheap.length) {
                const pick = cheap[0];
                setTimeout(() => showDetail(pick.id), 500);
                return `Yang ramah di kantong? 💰\n\n**${pick.nama}** cuma ${pick.harga}!\n📍 ${pick.alamat}\n\n${cheap.length > 1 ? `Ada ${cheap.length} pilihan murah lainnya!` : ''}`;
            }
            return 'Semua kuliner di sini terjangkau kok! Coba cari kategori yang kamu mau 😊';
        }
        
        // Open now
        if (intents.includes('askOpen')) {
            const open = state.kulinerData.filter(k => isOpen(k.jam));
            
            if (open.length) {
                const pick = this.randomPick(open);
                setTimeout(() => showDetail(pick.id), 500);
                return `🕐 Ada ${open.length} tempat yang buka sekarang!\n\nSalah satunya: **${pick.nama}**\n📍 ${pick.alamat}\n💰 ${pick.harga}\n\nMau lihat semua? Klik tombol "Buka" di filter ya!`;
            }
            return 'Waduh, sepertinya belum banyak yang buka sekarang. Coba lagi nanti ya! 😅';
        }
        
        // Nearby
        if (intents.includes('askNearby')) {
            return '📍 Untuk cari yang terdekat, klik tombol "Terdekat" di halaman utama ya! Pastikan izinkan akses lokasi di browser kamu.';
        }
        
        // Halal
        if (intents.includes('askHalal')) {
            const halal = state.kulinerData.filter(k => k.halal === 'halal' || k.halal === 'halal-self');
            if (halal.length) {
                const pick = this.randomPick(halal);
                setTimeout(() => showDetail(pick.id), 500);
                return `✅ Ada ${halal.length} kuliner halal di Purwokerto!\n\nCoba **${pick.nama}** - ${pick.halal === 'halal' ? 'Bersertifikat MUI' : 'Halal (self-declared)'}\n📍 ${pick.alamat}`;
            }
        }
        
        // Keliling / PKL
        if (intents.includes('askKeliling')) {
            const keliling = state.kulinerData.filter(k => k.keliling);
            if (keliling.length) {
                const pick = this.randomPick(keliling);
                setTimeout(() => showDetail(pick.id), 500);
                return `🛵 Ada ${keliling.length} pedagang keliling!\n\n**${pick.nama}**\nBiasa mangkal di: ${pick.rute}\n⏰ ${pick.jam}`;
            }
        }
        
        // Best rating
        if (intents.includes('askRating') || intents.includes('askRecommend')) {
            const sorted = [...state.kulinerData].sort((a, b) => getAvgRating(b) - getAvgRating(a));
            const best = sorted[0];
            if (best) {
                setTimeout(() => showDetail(best.id), 500);
                return `⭐ Yang paling direkomendasikan:\n\n**${best.nama}** - Rating ${getAvgRating(best).toFixed(1)}/5\n${best.deskripsi}\n\n📍 ${best.alamat}`;
            }
        }
        
        // General food request
        if (intents.includes('askFood')) {
            const open = state.kulinerData.filter(k => isOpen(k.jam));
            const pool = open.length ? open : state.kulinerData;
            const pick = this.randomPick(pool);
            setTimeout(() => showDetail(pick.id), 500);
            
            return `Lagi pengen makan? 🤤\n\nCoba **${pick.nama}**!\n${pick.deskripsi}\n\n📍 ${pick.alamat}\n💰 ${pick.harga}\n\nMau kategori spesifik? Bilang aja, misal "soto" atau "bakso"!`;
        }
        
        // Unknown intent - friendly fallback
        const fallbacks = [
            'Hmm, aku kurang paham 🤔 Coba tanya dengan kata kunci seperti "soto", "yang murah", atau "yang buka sekarang"!',
            'Maaf, aku belum ngerti maksudnya 😅 Coba ketik "help" untuk lihat apa yang bisa aku bantu!',
            'Aku MakanBot, fokusnya bantu cari kuliner di Purwokerto. Coba tanya "mau makan apa ya?" 🍽️',
            'Kayaknya pertanyaannya di luar kemampuanku 😅 Tapi kalau soal makan-makan di Purwokerto, tanya aja!'
        ];
        
        return this.randomPick(fallbacks);
    },
    
    // Utility: random pick from array
    randomPick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};

// ============================================
// UTILITIES
// ============================================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function setupEventListeners() {
    document.getElementById('searchInput')?.addEventListener('input', applyFilters);
    document.getElementById('categoryFilter')?.addEventListener('change', applyFilters);
    document.getElementById('typeFilter')?.addEventListener('change', applyFilters);
    document.getElementById('halalFilter')?.addEventListener('change', applyFilters);
    document.getElementById('sortFilter')?.addEventListener('change', applyFilters);
    document.getElementById('openNowFilter')?.addEventListener('change', applyFilters);
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    });
}
