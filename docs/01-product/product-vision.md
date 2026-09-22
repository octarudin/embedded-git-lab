# Product Vision — Embedded Git Lab

## Visi
Embedded Git Lab adalah platform pembelajaran Git dan GitHub CLI berbasis web untuk developer embedded yang menggunakan simulasi repository dan skenario pekerjaan nyata agar pengguna memahami kondisi repository, mengambil keputusan yang tepat, memperbaiki kesalahan, dan membangun workflow version control yang aman melalui praktik langsung.

## Masalah
Pemula sering menghafal command tanpa memahami working tree, staging area, branch, remote, tag, release, dan konsekuensi operasi berisiko. Pada proyek embedded, kebingungan bertambah karena adanya binary build, toolchain files, secrets, submodule, dan artifact firmware.

## Target pengguna
- Developer embedded pemula.
- Mahasiswa embedded/IoT/firmware.
- Engineer yang berpindah dari workflow manual/GUI ke Git CLI.

## Prinsip pembelajaran
**Observasi kondisi → tentukan target → pilih command → jalankan → cek hasil → lanjut.**

Game menilai state akhir, bukan sekadar kecocokan satu string command. Alternatif workflow yang aman dapat didukung selama menghasilkan state yang benar.

## Nilai utama
1. Aman untuk salah dan mencoba lagi.
2. Skenario dekat dengan pekerjaan firmware nyata.
3. Git CLI dan GitHub CLI dipelajari bersama.
4. Verifikasi adalah bagian dari workflow, bukan langkah opsional.
5. Operasi destruktif diberi konteks dan peringatan.

## Konteks fiktif
Seluruh game menggunakan project firmware **Octa Sensor Node** dengan struktur seperti `Core/`, `Drivers/`, `App/`, `build/`, serta release artifact seperti `.bin` dan `.hex`.
