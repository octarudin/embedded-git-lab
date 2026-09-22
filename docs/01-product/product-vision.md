# Product Vision — Embedded Git Lab

## Visi

Membuat platform pembelajaran berbasis web yang membantu developer embedded memahami Git dan GitHub melalui latihan berbasis skenario, sehingga pengguna tidak hanya menghafal command, tetapi mampu memahami kondisi repository, menentukan tujuan, memilih tindakan yang sesuai, dan memverifikasi hasilnya.

## Latar Belakang

Pemula sering mengenal Git sebagai kumpulan command, tetapi kesulitan saat menghadapi kondisi nyata seperti salah branch, salah commit, remote lebih baru, merge conflict, tag/release keliru, atau binary firmware yang tidak sesuai commit. Pada project embedded, masalah diperluas oleh build artifact, konfigurasi toolchain, submodule, binary firmware, dan file machine-specific.

## Target Pengguna

- Developer embedded pemula.
- Mahasiswa embedded system, IoT, firmware, computer/electrical engineering.
- Engineer yang beralih dari copy-folder atau Git GUI menuju workflow Git CLI.

## Masalah Utama

1. Menghafal command tanpa memahami state repository.
2. Takut melakukan kesalahan pada repository nyata.
3. Sulit memahami working tree, staging area, commit, branch, remote, tag, dan release.
4. Kurangnya latihan recovery dari kesalahan.

## Prinsip Pembelajaran

**Observasi kondisi → Tentukan target → Pilih command → Jalankan → Cek hasil → Lanjut**

Game menilai kondisi repository akhir dan proses yang masuk akal, bukan hanya kecocokan satu string command.

## Struktur Pembelajaran

1. Git Fundamentals.
2. Branch & Remote Workflow.
3. Git Recovery & Troubleshooting.
4. GitHub Collaboration.
5. Embedded Release Workflow.

## Konteks Embedded

Project fiktif utama: **Octa Sensor Node**.

Contoh struktur:

```text
octa-sensor-node/
├── App/
├── BSP/
├── Core/
├── Drivers/
├── Middlewares/
├── Tests/
├── docs/
├── scripts/
└── build/
```

## Konsep Produk

Embedded Git Lab adalah single-player web app yang mensimulasikan Git dan GitHub CLI. Pengguna menerima skenario, menggunakan terminal simulasi, melihat file explorer/Git graph, dan mendapat feedback berdasarkan perubahan state.

## Filosofi Keselamatan

Simulator tidak menjalankan Git atau shell asli pengguna. Kesalahan adalah bagian dari latihan dan tidak boleh merusak file atau repository nyata.

## Product Vision Statement

> Embedded Git Lab adalah platform pembelajaran Git dan GitHub berbasis web untuk developer embedded yang menggunakan simulasi repository dan skenario pekerjaan nyata agar pengguna belajar memahami kondisi repository, mengambil keputusan yang tepat, memperbaiki kesalahan, dan membangun workflow version control yang aman melalui praktik langsung.
