/* Edit data profil dan proyek di sini. Field kosong tidak ditampilkan. */
window.PORTFOLIO = {
  profile: {
    name: "Muhammad Yusuf", nickname: "Yusuf", birthplace: "Jakarta", birthDate: "2006-01-29",
    showBirthDate: true, city: "Kota Depok", university: "Universitas Pakuan Bogor",
    study: "Ilmu Komputer", semester: 5,
    headline: "Mahasiswa Ilmu Komputer | Aspiring Software Developer",
    description: "Saya adalah mahasiswa Ilmu Komputer di Universitas Pakuan Bogor yang tertarik pada software development, web, aplikasi mobile, IoT, dan pengembangan perangkat berbasis Raspberry Pi. Saya terus belajar melalui proyek akademik dan eksplorasi mandiri.",
    about: "Saya tertarik membangun solusi teknologi dari aplikasi web dan mobile hingga perangkat IoT. Saya senang mengeksplorasi ide, menguji perangkat, memperbaiki masalah, dan mengembangkan kemampuan melalui proyek.",
    github: "https://github.com/mhdgyusuf544-sys",
    avatarMode: "profile", profileImage: "assets/images/profile.jpg", avatarImage: "assets/images/avatar.svg"
  },
  education: [{ institution: "Universitas Pakuan Bogor", program: "Ilmu Komputer", detail: "Semester 5", period: "", description: "" }],
  skills: [
    { category: "Web Development", icon: "⌘", items: ["HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS"] },
    { category: "Database", icon: "▤", items: ["MySQL", "CRUD", "Database Replication"] },
    { category: "Mobile Development", icon: "▣", items: ["Flutter", "Dart"] },
    { category: "Internet of Things", icon: "⌁", items: ["ESP32", "Arduino", "Raspberry Pi", "Sensor"] },
    { category: "Tools dan Deployment", icon: "⚙", items: ["Git", "GitHub", "Visual Studio Code", "Laragon", "Cloudflare Tunnel"] },
    { category: "Data dan Pemrograman", icon: "〈〉", items: ["Python", "Pengolahan data", "GNUSim8085"] },
    { category: "Desain Grafis", icon: "✳", items: ["Adobe Photoshop", "Komposisi visual"] }
  ],
  projects: [
    {
      name: "KelasPaham — AI Pembantu Materi Kuliah", category: "Web Development",
      description: "Aplikasi pembelajaran untuk membantu mahasiswa merangkum dan memahami materi kuliah, termasuk materi dari file PowerPoint.",
      repository: "", status: "Dikembangkan; fitur dan deployment masih dapat terus disempurnakan.",
      background: "Membantu mahasiswa mengolah materi kuliah menjadi ringkasan yang lebih mudah dipelajari.",
      purpose: "Membuat proses belajar dan meninjau materi lebih praktis.",
      features: ["Rangkuman materi", "Unggah PowerPoint untuk dirangkum", "Integrasi Gemini API", "Ekspor hasil ke Word"],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Gemini API", "Cloudflare"], image: "", label: "AI WEB"
    },
    {
      name: "Portfolio Muhammad Yusuf", category: "Web Development",
      description: "Website portofolio pribadi untuk menampilkan profil, keahlian, dan proyek pengembangan perangkat lunak.",
      repository: "https://github.com/mhdgyusuf544-sys/proto-yusuf", status: "Website portofolio dikembangkan dan diperbarui secara bertahap.",
      background: "Menyediakan tempat untuk memperkenalkan diri dan mendokumentasikan karya.",
      purpose: "Menampilkan pengalaman belajar dan proyek dalam satu website.",
      features: ["Profil dan pendidikan", "Daftar keahlian", "Kartu proyek dengan detail", "Navigasi responsif"],
      technologies: ["HTML", "CSS", "JavaScript", "GitHub"], image: "", label: "PORTO"
    },
    {
      name: "Kantin Bu Sari — Aplikasi Pemesanan Makanan", category: "Mobile Development",
      description: "Project aplikasi kantin dengan daftar menu dan alur pemesanan makanan untuk tugas pengembangan aplikasi.",
      repository: "https://github.com/mhdgyusuf544-sys/tugasmopro-web-kantin", status: "Dalam pengembangan; fitur yang dibahas belum berarti pembayaran sungguhan.",
      background: "Membuat pengalaman pemesanan makanan yang mudah digunakan.",
      purpose: "Membangun aplikasi dengan alur menu, keranjang, dan konfirmasi pesanan.",
      features: ["Daftar menu", "Keranjang belanja", "Favorit", "Simulasi pembayaran dan konfirmasi pesanan"],
      technologies: ["Flutter", "Dart"], image: "", label: "MOBILE"
    },
    {
      name: "Racikara — Website Berbagi Resep", category: "Web Development",
      description: "Website resep masakan dengan halaman beranda, eksplorasi resep, detail resep, dan pengelolaan data.",
      repository: "https://github.com/Kenscenezz/Racikara_Website", status: "Project pengembangan; status final belum diverifikasi.",
      background: "Memudahkan pengguna menemukan dan berbagi resep masakan.",
      purpose: "Membangun website resep dengan antarmuka dan backend database.",
      features: ["Eksplorasi resep", "Detail resep", "Login dan registrasi untuk unggah", "CRUD resep"],
      technologies: ["HTML", "Tailwind CSS", "PHP", "MySQL"], image: "", label: "WEB"
    },
    {
      name: "Web Sensor Mudball", category: "Internet of Things",
      description: "Antarmuka web untuk menampilkan data sensor turbidity; pernah dikembangkan dengan dukungan pembacaan Arduino Uno.",
      repository: "", status: "Masih perlu perbaikan karena halaman pernah tampil putih/kosong.",
      background: "Menghubungkan pembacaan sensor dengan visualisasi pada halaman web.",
      purpose: "Membantu melihat nilai sensor dan kondisi air dengan lebih jelas.",
      features: ["Tampilan nilai sensor", "Pembacaan tegangan dan ADC", "Pengembangan JavaScript"],
      technologies: ["HTML", "JavaScript", "Arduino Uno", "ESP32"], image: "", label: "SENSOR"
    },
    {
      name: "Smart Cat Health Detector", category: "Internet of Things",
      description: "Konsep perangkat pemantauan kondisi kucing melalui karakteristik kotoran dan gas atau bau yang terdeteksi.",
      repository: "", status: "Konsep dan perancangan; sistem lengkap belum terkonfirmasi berjalan.",
      background: "Eksplorasi penggunaan sensor dan perangkat komputasi untuk mendukung pemantauan hewan.",
      purpose: "Membantu mengamati indikator awal kondisi kucing, bukan menggantikan diagnosis dokter hewan.",
      features: ["Konsep sensor gas dan bau", "Rencana kamera dan LCD", "Opsi pemrosesan ESP32-S3 atau Raspberry Pi"],
      technologies: ["ESP32-S3", "Raspberry Pi", "Sensor gas", "Kamera", "LCD"], image: "", label: "IOT"
    },
    {
      name: "Mudball — Pengujian Sensor Turbidity", category: "Internet of Things",
      description: "Pengujian sensor kekeruhan air dan kalibrasi pembacaan tegangan serta ADC untuk mendukung project mudball.",
      repository: "", status: "Pengujian dan kalibrasi sensor.",
      background: "Mengamati perubahan pembacaan sensor pada sampel air dengan tingkat kekeruhan berbeda.",
      purpose: "Menguji pembacaan sensor sebagai bagian dari pemantauan kondisi air.",
      features: ["Uji air bersih dan keruh", "Kalibrasi tegangan dan ADC", "Konsep pemetaan area dengan DroneDeploy"],
      technologies: ["ESP32-S3", "Sensor turbidity", "ADC", "DroneDeploy"], image: "", label: "IOT"
    },
    {
      name: "Kontrol Lampu 12 V dengan Raspberry Pi 5", category: "Internet of Things",
      description: "Project pengendalian lampu menggunakan Raspberry Pi 5, relay satu kanal, dan catu daya 12 V.",
      repository: "", status: "Perakitan dan troubleshooting; hasil akhir belum terkonfirmasi.",
      background: "Menguji kendali perangkat listrik melalui rangkaian elektronik.",
      purpose: "Memahami kendali relay dan integrasi Raspberry Pi dengan beban lampu.",
      features: ["Relay 5 V satu kanal", "Pengujian kontak COM dan NO", "Troubleshooting rangkaian lampu"],
      technologies: ["Raspberry Pi 5", "Relay", "Step-down converter", "Lampu 12 V"], image: "", label: "PI"
    },
    {
      name: "Monitoring Ketinggian Air dan Lokasi", category: "Internet of Things",
      description: "Konsep pemantauan ketinggian air dengan sensor dan rencana visualisasi lokasi.",
      repository: "", status: "Konsep sistem; implementasi penuh belum terkonfirmasi.",
      background: "Eksplorasi pemantauan kondisi air dan penyajian informasi lokasi.",
      purpose: "Mendukung pemantauan melalui data sensor dan peta.",
      features: ["Sensor ketinggian air", "Rencana penyimpanan data", "Konsep integrasi GPS/GIS"],
      technologies: ["ESP32", "Sensor", "GPS/GIS", "Database"], image: "", label: "IOT"
    },
    {
      name: "EWS Gajah Sumatra — Early Warning System", category: "Internet of Things",
      description: "Project sistem peringatan dini berbasis Raspberry Pi untuk mendukung pemantauan gajah Sumatra dan membantu mengurangi risiko konflik manusia dengan satwa liar.",
      repository: "", status: "Project tercatat dalam riwayat; rincian implementasi dan status perangkat perlu diperbarui.",
      background: "Mendukung upaya konservasi dan meningkatkan kewaspadaan di area yang berpotensi mengalami konflik manusia-gajah.",
      purpose: "Mengembangkan sistem peringatan dini berdasarkan metode deteksi yang digunakan dalam project.",
      features: ["Raspberry Pi sebagai platform utama", "Konsep pemantauan dan deteksi", "Peringatan dini sebagai tujuan sistem"],
      technologies: ["Raspberry Pi", "IoT", "Sistem peringatan dini"], image: "", label: "EWS"
    },
    {
      name: "Smart Campus — Ruang Kelas Pintar Hemat Energi", category: "Internet of Things",
      description: "Konsep ruang kelas pintar berbasis IoT untuk memantau kondisi ruangan dan mendukung efisiensi energi.",
      repository: "", status: "Perancangan sistem dan materi presentasi; implementasi penuh belum terkonfirmasi.",
      background: "Menggunakan teknologi untuk membantu pengelolaan ruang kelas.",
      purpose: "Mengeksplorasi otomasi dan efisiensi energi di lingkungan kampus.",
      features: ["Konsep pemantauan ruang", "Rencana otomasi perangkat", "Perancangan sistem dan presentasi"],
      technologies: ["ESP32", "Sensor", "IoT"], image: "", label: "CAMPUS"
    },
    {
      name: "MySQL Database Replication", category: "Database & Server",
      description: "Praktikum konfigurasi replikasi database dan troubleshooting koneksi serta sinkronisasi.",
      repository: "", status: "Pernah dikerjakan dalam konteks praktikum; hasil akhir belum tercatat.",
      background: "Mempelajari replikasi dan pengelolaan server database.",
      purpose: "Memahami sinkronisasi data antarkonfigurasi database.",
      features: ["Konfigurasi server", "Pengujian koneksi", "Troubleshooting MySQL/InnoDB"],
      technologies: ["MySQL 8.0.30", "MySQL 8.3"], image: "", label: "DB"
    },
    {
      name: "Home Server Gratis dengan Cloudflare Tunnel", category: "Database & Server",
      description: "Menjalankan website dari laptop rumah agar dapat diakses dari internet tanpa menyewa hosting tradisional.",
      repository: "", status: "Akses tunnel pernah digunakan; konfigurasi permanen dan ketersediaan saat ini perlu diperiksa.",
      background: "Memanfaatkan laptop pribadi sebagai lingkungan hosting.",
      purpose: "Mempelajari deployment, server lokal, dan akses publik.",
      features: ["Laragon dan PHP", "MySQL lokal", "Cloudflare Tunnel", "Hosting KelasPaham dan portofolio"],
      technologies: ["Windows", "Laragon", "PHP", "MySQL", "Cloudflare", "GitHub"], image: "", label: "SERVER"
    },
    {
      name: "Maroon Sport Store", category: "Web Development",
      description: "Project website toko olahraga yang pernah dibahas dalam konteks pengembangan web dan database.",
      repository: "", status: "Pernah dikerjakan; fitur final dan status repository belum diverifikasi.",
      background: "Project toko online sebagai latihan pengembangan website.",
      purpose: "Mempelajari penyajian produk dan pengelolaan data toko.",
      features: ["Konsep katalog produk", "Pengembangan website toko"],
      technologies: ["PHP", "MySQL"], image: "", label: "WEB"
    },
    {
      name: "Poster Selamatkan Bumi, Mulai dari Hal Kecil", category: "Desain Grafis",
      description: "Desain poster bertema lingkungan dengan elemen bumi, tangan, pohon, dan pesan kepedulian terhadap bumi.",
      repository: "", status: "Project desain; file hasil akhir belum diverifikasi.",
      background: "Mengangkat pesan kepedulian lingkungan melalui media visual.",
      purpose: "Menerapkan prinsip desain grafis dalam poster edukasi.",
      features: ["Komposisi visual", "Elemen bumi dan alam", "Rencana output JPG/PNG, PSD, dan PDF"],
      technologies: ["Adobe Photoshop"], image: "", label: "DESAIN"
    },
    {
      name: "Simulasi Sistem Digital 8085", category: "Sistem Digital",
      description: "Praktikum simulasi instruksi assembly untuk memahami register, operasi data, dan kerja mikroprosesor.",
      repository: "", status: "Project praktikum; detail hasil akhir belum tercatat.",
      background: "Mempelajari konsep dasar mikroprosesor melalui simulator.",
      purpose: "Memahami instruksi dan alur eksekusi program assembly.",
      features: ["Menulis instruksi assembly", "Menjalankan simulasi", "Memeriksa register dan hasil instruksi"],
      technologies: ["GNUSim8085", "Assembly"], image: "", label: "8085"
    },
    {
      name: "Sistem Monitoring Kualitas Udara", category: "Internet of Things",
      description: "Project pemantauan kualitas udara menggunakan sensor dan mikrokontroler yang pernah tercantum pada portofolio.",
      repository: "", status: "Detail implementasi dan status terakhir belum terverifikasi.",
      background: "Eksplorasi pemantauan kualitas udara menggunakan perangkat sensor.",
      purpose: "Mengamati parameter kualitas udara melalui pembacaan sensor.",
      features: ["Konsep pembacaan sensor", "Pemantauan parameter udara"],
      technologies: ["Sensor", "Mikrokontroler"], image: "", label: "AIR"
    }
  ],
  contact: { email: "", linkedin: "", instagram: "", phone: "" },
  achievements: []
};
