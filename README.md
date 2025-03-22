PalmWatcher adalah aplikasi berbasis web yang dikembangkan menggunakan **Vite**, **React**, dan **TypeScript**. Proyek ini juga menggunakan **shadcn/ui** serta **Radix UI** untuk komponen antarmuka pengguna (UI).

PalmWatcher bertujuan untuk menyediakan antarmuka yang responsif dan modern untuk pengguna, dengan memanfaatkan teknologi UI terbaru. Proyek ini dirancang agar mudah dikembangkan lebih lanjut serta mendukung integrasi dengan berbagai layanan tambahan di masa depan.

## Struktur Proyek
Berikut adalah struktur utama proyek:
```
├── .gitignore
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── vite.config.ts
├── src/
│   ├── main.tsx    # Entry point aplikasi React
│   ├── App.tsx     # Komponen utama aplikasi
│   ├── components/ # Direktori untuk komponen UI
│   ├── pages/      # Halaman-halaman aplikasi
│   ├── assets/     # Berkas statis seperti gambar dan ikon
│   ├── styles/     # Berkas CSS dan konfigurasi Tailwind
```

## Cara Instalasi dan Menjalankan
### Persyaratan
- **Node.js** dan **npm** (disarankan menggunakan nvm untuk manajemen versi)

### Langkah Instalasi
1. Clone repositori ini:
   ```sh
   git clone <URL_REPO>
   cd palmwatcher-main
   ```
2. Install dependensi:
   ```sh
   npm install
   ```
3. Jalankan server pengembangan:
   ```sh
   npm run dev
   ```
   Server akan berjalan di `http://localhost:5173/` secara default.

## Dependensi Utama
Proyek ini menggunakan beberapa pustaka penting, termasuk:
- **React & React DOM** - Library utama untuk pengembangan frontend.
- **Vite** - Build tool yang cepat untuk proyek berbasis JavaScript/TypeScript.
- **shadcn/ui** - Library komponen UI yang fleksibel dan modern.
- **Radix UI** - Komponen UI berbasis aksesibilitas.
- **Tailwind CSS** - Framework CSS berbasis utility-first.

## Cara Berkontribusi
1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan yang ingin ditambahkan.
   ```sh
   git checkout -b fitur-baru
   ```
3. Lakukan perubahan dan commit.
   ```sh
   git commit -m "Menambahkan fitur baru"
   ```
4. Push ke branch Anda dan buat Pull Request.
   ```sh
   git push origin fitur-baru
   ```

---

Dokumentasi ini dapat diperbarui sesuai perkembangan proyek.

