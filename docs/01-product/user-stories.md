# User Stories

## Epic A — Dasar Git
- Sebagai pemula, saya ingin menginisialisasi repository kosong agar project mulai terlacak.
- Saya ingin menambahkan source existing ke Git tanpa mengikutkan build artifact.
- Saya ingin melihat perbedaan working tree dan staging sebelum commit.
- Saya ingin mengetahui file mana yang modified, staged, ignored, dan untracked.

## Epic B — Branch dan Remote
- Saya ingin membuat feature branch dengan nama yang jelas agar `main` tetap stabil.
- Saya ingin push branch pertama kali dan set upstream.
- Saya ingin fetch perubahan remote tanpa langsung mengubah working tree.
- Saya ingin menyinkronkan local branch ketika remote lebih baru.
- Saya ingin merge feature ke main dan membersihkan branch lama.

## Epic C — Recovery
- Saya ingin mengeluarkan secret dari staging tanpa menghapus file lokal.
- Saya ingin membatalkan commit lokal sambil mempertahankan perubahan.
- Saya ingin membalik commit publik dengan revert.
- Saya ingin menyimpan pekerjaan sementara dengan stash.
- Saya ingin mengenali dan membatalkan merge conflict.

## Epic D — GitHub CLI
- Saya ingin memeriksa authentication sebelum memakai `gh`.
- Saya ingin membuat issue untuk melacak bug.
- Saya ingin membuat PR, memeriksa statusnya, merge, atau close tanpa merge.

## Epic E — Release Firmware
- Saya ingin menandai commit release dengan semantic tag.
- Saya ingin membuat GitHub Release dari tag.
- Saya ingin mengunggah binary firmware tanpa memasukkannya ke commit.
- Saya ingin memperbaiki tag yang menunjuk commit salah.
- Saya ingin menyelesaikan workflow final tag → release → artifact.

## Epic F — Progress
- Saya ingin progress tersimpan otomatis ketika aplikasi ditutup.
- Saya ingin melanjutkan state terakhir atau kembali ke checkpoint.
- Saya ingin reset satu misi tanpa menghapus progress misi lain.
