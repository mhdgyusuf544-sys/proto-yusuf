# Portofolio Muhammad Yusuf

Website statis HTML, CSS, dan JavaScript. Tidak memerlukan instalasi dependency atau backend.

## Menjalankan

Buka `index.html` di browser. Untuk pengalaman lokal yang konsisten, jalankan server statis dari folder ini, misalnya `python -m http.server 8000`, lalu buka `http://localhost:8000`.

## Memperbarui isi

- Ubah biodata, pendidikan, kontak, skill, dan proyek di `js/data.js`.
- Field proyek seperti `background`, `purpose`, `features`, dan `status` sengaja kosong saat informasinya belum tersedia. Field kosong tidak akan ditampilkan.
- Untuk memakai foto sendiri, simpan foto yang Anda miliki sebagai `assets/images/profile.jpg`, lalu ubah `avatarMode` menjadi `"profile"` di `js/data.js`. Tombol Avatar/Fotoku di hero memungkinkan pengunjung mengganti tampilan. Avatar lokal selalu menjadi alternatif.
- Tambahkan CV ke `assets/documents/` dan tautan UI setelah file tersedia; website tidak menganggap CV sudah ada.
- Data tanggal lahir bisa disembunyikan dengan `showBirthDate: false`. Umur dihitung otomatis dari tanggal lokal saat halaman dibuka.

## GitHub Pages

1. Buat repository milik Anda di GitHub, misalnya `muhammad-yusuf-portfolio`.
2. Dari folder ini, inisialisasi Git dan push branch `main` ke repository tersebut: `git init`, `git add .`, `git commit -m "Build personal portfolio website"`, lalu tambahkan remote repository milik Anda dan push.
3. Di repository GitHub, buka **Settings â†’ Pages**. Pilih **Deploy from a branch**, pilih `main` dan folder `/ (root)`, lalu simpan.
4. Tunggu proses publikasi GitHub Pages. Karena semua aset memakai path relatif, halaman dapat berjalan pada project path Pages tanpa konfigurasi build atau base path.
5. Periksa halaman publik, foto, navigasi, dan link repository setelah publikasi.

Belum ada repository Git pada folder awal, jadi remote dan deployment belum disiapkan atau diverifikasi.

