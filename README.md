# Lapor Mangan! - Aplikasi Pemetaan Kuliner Purwokerto

**Lapor Mangan!** adalah aplikasi web berbasis peta interaktif yang memudahkan pengguna untuk menemukan, menjelajahi, dan berbagi informasi mengenai kuliner legendaris dan populer di Purwokerto dan sekitarnya.

## 🌟 Fitur Utama

### 1. **Peta Kuliner Interaktif**
*   Menampilkan lokasi kuliner menggunakan peta interaktif (Leaflet.js).
*   Marker khusus untuk berbagai kategori (Makanan Berat, Jajanan, Minuman, dll).
*   Geolokasi untuk melihat posisi pengguna saat ini.

### 2. **Pencarian & Filter Canggih**
*   **Cari Kuliner**: Pencarian real-time berdasarkan nama atau menu.
*   **Filter Kategori**: Filter berdasarkan jenis makanan (Soto, Sate, Bakso, dll).
*   **Filter Halal**: Opsi khusus untuk menampilkan kuliner yang terverifikasi halal.
*   **Urutkan**: Urutkan berdasarkan harga termurah, termahal, atau rating tertinggi.

### 3. **Detail Kuliner Lengkap**
*   Informasi detail: Alamat, Jam Buka, Harga, Deskripsi, dan Foto.
*   **Status Verifikasi**: Menandakan data valid.
*   **Rute**: Petunjuk arah lokasi.
*   **Klaim Bisnis**: Fitur bagi pemilik usaha untuk mengklaim listing mereka.

### 4. **Fitur Pengguna**
*   **Favorit**: Simpan kuliner ke daftar favorit pribadi.
*   **Review & Rating**: Berikan ulasan dan bintang untuk kuliner yang pernah dikunjungi.
*   **Chatbot AI**: Asisten virtual "MakanBot" untuk rekomendasi kuliner pintar.

### 5. **Berita & Promo**
*   Info terbaru seputar kuliner Purwokerto.
*   Kode promo diskon eksklusif.

### 6. **Panel Admin & Manajemen Data (Simulasi)**
*   **Mode Admin**: Akses khusus untuk mengelola data.
*   **CRUD Data**: Tambah, Edit, dan Hapus data kuliner.
*   **Moderasi**: Setujui atau tolak pengajuan kuliner baru dari pengguna.
*   **Manajemen Berita**: Tambah berita dan promo baru.

---

## 🛠️ Teknologi yang Digunakan

*   **Frontend**: HTML5, CSS3 (Modern Glassmorphism Design), Vanilla JavaScript (ES6+).
*   **Peta**: Leaflet.js (OpenStreetMap).
*   **Icons**: Font Awesome 6.
*   **AI**: Integrasi simulasi logika AI sederhana untuk Chatbot.
*   **Penyimpanan**: `localStorage` browser (Simulasi Database tanpa Backend).

---

## 🚀 Cara Menjalankan

1.  **Clone Repository**
    ```bash
    git clone https://github.com/hanif-12-01/TUBES-APPL.git
    ```

2.  **Buka Aplikasi**
    *   Buka file `index.html` langsung di browser, ATAU
    *   Gunakan Live Server (VS Code extension) atau Python server untuk pengalaman terbaik:
        ```bash
        python -m http.server 8000
        ```
        Buka `http://localhost:8000` di browser.

---

## 🔑 Panduan Admin (Simulasi)

Untuk mengakses fitur Admin:
1.  Klik icon **Profil/Login** di pojok kanan atas.
2.  Masuk dengan email: `admin@lapormangan.id`.
3.  Masukkan Kode Akses: `12345`.
4.  Mode Admin akan aktif. Anda sekarang dapat melihat tombol **Edit**, **Hapus**, dan menu **Tambah Berita**.

---

## 📂 Struktur Project

```
├── index.html          # File utama aplikasi
├── style.css           # Styling utama (Glassmorphism & Responsive)
├── script.js           # Logika utama (Data, Map, UI, Admin)
├── chatbot.js          # Logika Chatbot & Knowledge Base
├── README.md           # Dokumentasi Project
└── images/             # Folder aset gambar (jika ada)
```

---
*Dibuat untuk Tugas Besar Struktur Data & Algoritma / Pengembangan Aplikasi Web.*
