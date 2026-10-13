/* Edit data profil dan proyek di sini. Field kosong tidak ditampilkan. */
window.PORTFOLIO = {
  profile: {
    name: "Muhammad Yusuf", nickname: "Yusuf", birthplace: "Jakarta", birthDate: "2006-01-29",
    showBirthDate: true, city: "Kota Depok", university: "Universitas Pakuan Bogor",
    study: "Ilmu Komputer", semester: 5,
    headline: "Mahasiswa Ilmu Komputer | Aspiring Software Developer",
    description: "Saya adalah mahasiswa Ilmu Komputer di Universitas Pakuan Bogor yang tertarik pada pengembangan perangkat lunak, web development, aplikasi mobile, dan teknologi Internet of Things. Saya terus mengembangkan kemampuan melalui pembelajaran dan pengerjaan berbagai proyek.",
    about: "Saya mahasiswa Ilmu Komputer yang tertarik pada teknologi, pemrograman, pengembangan aplikasi, dan perangkat Internet of Things. Saat ini saya terus belajar dan mengasah kemampuan melalui proyek akademik maupun eksplorasi mandiri.",
    github: "https://github.com/mhdgyusuf544-sys",
    /* Taruh foto milik sendiri di assets/images/profile.jpg, lalu ubah avatarMode menjadi "profile". */
    avatarMode: "profile", profileImage: "assets/images/profile.jpg", avatarImage: "assets/images/avatar.svg"
  },
  education: [{ institution: "Universitas Pakuan Bogor", program: "Ilmu Komputer", detail: "Semester 5", period: "", description: "" }],
  skills: [
    { category: "Web Development", icon: "⌘", items: ["HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS"] },
    { category: "Database", icon: "▤", items: ["MySQL"] },
    { category: "Mobile Development", icon: "▣", items: ["Flutter", "Dart"] },
    { category: "Internet of Things", icon: "⌁", items: ["ESP32", "Arduino", "Raspberry Pi"] },
    { category: "Tools", icon: "⚙", items: ["Git", "GitHub", "Visual Studio Code"] },
    { category: "Data dan Pemrograman", icon: "〈〉", items: ["Python", "Pengolahan data"] }
  ],
  projects: [
    { name: "KelasPaham", category: "Web Development", description: "Proyek website pembelajaran.", repository: "", status: "Informasi proyek dapat diperbarui.", background: "", purpose: "", features: [], technologies: [], image: "", label: "Web" },
    { name: "Web Kantin", category: "Web Development", description: "Website kantin untuk proyek pengembangan aplikasi.", repository: "https://github.com/mhdgyusuf544-sys/tugasmopro-web-kantin", status: "Proyek pengembangan aplikasi.", background: "", purpose: "", features: [], technologies: [], image: "", label: "Web" },
    { name: "Racikara", category: "Web Development", description: "Website resep makanan dengan fitur penjelajahan resep dan pengelolaan data.", repository: "https://github.com/Kenscenezz/Racikara_Website", status: "", background: "", purpose: "", features: [], technologies: [], image: "", label: "Web" },
    { name: "Smart Campus", category: "Internet of Things", description: "Konsep proyek Internet of Things untuk mendukung pemantauan dan efisiensi energi ruang kelas menggunakan ESP32.", repository: "", status: "Konsep proyek.", background: "", purpose: "", features: [], technologies: ["ESP32"], image: "", label: "IoT" },
    { name: "Sistem Deteksi Kekeruhan Air", category: "Internet of Things", description: "Proyek pemantauan kekeruhan air menggunakan sensor dan mikrokontroler.", repository: "", status: "", background: "", purpose: "", features: [], technologies: [], image: "", label: "IoT" },
    { name: "Sistem Monitoring Kualitas Udara", category: "Internet of Things", description: "Proyek pemantauan kualitas udara menggunakan sensor dan mikrokontroler.", repository: "", status: "", background: "", purpose: "", features: [], technologies: [], image: "", label: "IoT" }
  ],
  contact: { email: "", linkedin: "", instagram: "", phone: "" },
  achievements: []
};
