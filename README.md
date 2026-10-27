# Koperasi Keuangan Amanah Mandiri - Corporate Website

Website korporat modern, responsif, dan multi-bahasa untuk Koperasi Keuangan berbasis **React 19 + Vite**, didukung **Consolidated CSS** dengan CSS Variables (`:root` & `[data-theme="dark"]`), **React Context API**, serta integrasi formulir pendaftaran ke **Google Sheets** via Google Apps Script.

---

## 🌟 Fitur Utama

1. **Multi-Bahasa (ID, EN, AR, FR)**
   - Penyimpanan persisten ke `localStorage` (`'selected_language'`).
   - Deteksi otomatis preferensi bahasa browser (`navigator.language`) saat pertama dibuka dengan fallback otomatis ke Bahasa Indonesia (`'id'`).
   - Mendukung pergantian bahasa dinamis melalui fungsi `changeLanguage(code)` dan alias `setLang`.
   - Dukungan **RTL (Right-to-Left)** otomatis untuk Bahasa Arab (`[dir="rtl"]`, font Cairo).
   - Perlindungan data kamus terjemahan dengan fallback default guna mencegah error `undefined` runtime.

2. **Mode Gelap / Terang (Dark & Light Mode)**
   - Tersimpan persisten di `localStorage` (`'app_theme'`).
   - Manipulasi atribut `data-theme="dark"` / `"light"` pada elemen root `<html>`.
   - Mendukung sinkronisasi preferensi OS (`prefers-color-scheme`).

3. **Interactive Modal Layanan (`Services.jsx`)**
   - Kartu layanan interaktif yang dapat diklik untuk membuka modal popup detail.
   - Menampilkan judul, deskripsi lengkap, poin-poin syarat utama, dan outro konsultasi.
   - Aksesibilitas: navigasi keyboard (Enter/Spasi), penutupan via tombol Esc, backdrop overlay click, dan penguncian scroll layar.

4. **Fintech Preview & Simulasi SHU (`Hero.jsx`)**
   - Header hero modern dengan statistik koperasi (Anggota, Aset, NPL, Dividen).
   - Kartu interaktif simulasi perhitungan bagi hasil / Sisa Hasil Usaha (SHU) tahunan.
   - Tab switcher ke kode TypeScript smart-ledger (`cooperativeLedger.ts`) dengan tombol salin kode.

5. **Formulir Kontak & Integrasi Google Sheets (`Contact.jsx`)**
   - Pengiriman form asynchronous via `fetch()` POST JSON ke endpoint Google Apps Script.
   - Status loading interaktif (`LoadingSpinner.jsx`) dengan tulisan "Mengirim Data...".
   - Banner notifikasi responsif (Sukses / Gagal) dan reset otomatis form saat berhasil terkirim.

6. **Desain Korporat Prestisius & Deep Navy Footer (`Footer.jsx`)**
   - Footer bernuansa deep navy profesional (`#0a1128`) lengkap dengan status regulasi, navigasi tautan cepat, dan disclaimer hukum koperasi.

---

## 📁 Struktur Berkas

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx          # Mobile hamburger, selector bahasa, toggle tema
│   ├── Hero.jsx            # Title, slogan, badge, simulasi SHU & preview code TS
│   ├── About.jsx           # Deskripsi, Visi, Misi, & Nilai Tata Kelola
│   ├── Services.jsx        # Grid layanan & modal pop-up detail interaktif
│   ├── WhyUs.jsx           # 4 Pilar keunggulan bernomor (01, 02, 03, 04)
│   ├── Contact.jsx         # Informasi kantor & formulir integrasi Google Sheets
│   ├── Footer.jsx          # Deep navy footer & regulasi resmi
│   └── LoadingSpinner.jsx  # Komponen loading indikator SVG
├── context/
│   ├── LanguageContext.jsx # State bahasa, deteksi browser, alias setLang
│   └── ThemeContext.jsx    # State tema light/dark, DOM attribute data-theme
├── data/
│   ├── translations.js     # Kamus terjemahan seragam (ID, EN, AR, FR)
│   └── newsData.js         # Data informasi & edukasi finansial
├── index.css               # Consolidated CSS, CSS variables, Dark Mode, RTL
├── App.jsx                 # Provider wrapper & root layout
└── main.jsx                # Entry point React 19
```

---

## 🚀 Panduan Menjalankan Proyek

1. **Instalasi Dependensi**:
   ```bash
   npm install
   ```

2. **Menjalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```

3. **Membangun Proyek untuk Produksi**:
   ```bash
   npm run build
   ```

---

## 📊 Contoh Kode Google Apps Script (Backend Google Sheets)

Buat Spreadsheet baru di Google Sheets, buka menu **Extensions > Apps Script**, lalu tempel kode berikut:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Header kolom: Waktu, Bahasa, Nama Lengkap, Email, Telepon, Layanan, Pesan
    sheet.appendRow([
      data.timestamp || new Date(),
      data.language || 'id',
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.serviceOfInterest || '',
      data.message || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Setelah itu klik **Deploy > New Deployment**, pilih jenis **Web App**, set *Who has access* ke **Anyone**, lalu salin URL Web App ke berkas `.env`:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
```

