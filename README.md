# 📱 DiaryCard - Daily Diary & Mood Tracker
> Repository untuk Ujian Tengah Semester (UTS) Mata Kuliah **Mobile Programming Native**  
> **Fakultas Sains dan Teknologi, Universitas Muhammadiyah Sukabumi (UMMI)**  

---

## 📌 Tentang Aplikasi
**DiaryCard** adalah aplikasi mobile berbasis *cross-platform* yang dirancang menggunakan framework **React Native** dengan pendekatan **Expo Router**. Aplikasi ini bertujuan untuk membantu pengguna mencatat aktivitas harian (*daily diary*) sekaligus memantau suasana hati (*mood tracker*) guna mendukung produktivitas dan kesehatan mental.

---

## 🛠️ Tech Stack & Tools
* **Framework:** React Native (Expo)
* **Routing:** Expo Router (Stack Navigator)
* **Language:** TypeScript / JavaScript (TSX)
* **Styling:** React Native StyleSheet (Palet warna *Soft Pastel / Rose Gold*)
* **Version Control:** Git & GitHub

---

## 📂 Struktur Folder Project
```text
DiaryCardUTS/
├── src/
│   └── app/
│       ├── _layout.tsx      # Konfigurasi Navigasi Stack Utama
│       ├── index.tsx        # Halaman Utama (Home Screen - Menampilkan Daftar Catatan)
│       ├── add-diary.tsx    # Halaman Form Tambah Catatan Baru
│       ├── detail.tsx       # Halaman Detail Catatan (Menerima Data via Params)
│       └── about.tsx        # Halaman Informasi / Tentang Aplikasi
├── assets/                  # Aset gambar dan ikon aplikasi
├── package.json             # Konfigurasi dependensi project
└── README.md                # Dokumentasi Project
