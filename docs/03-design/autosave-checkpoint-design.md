# Autosave & Checkpoint Design

## Autosave
Key: `embedded-git-lab:v1:session`. Setiap perubahan session ditulis ke localStorage melalui `useEffect`.

## Resume
Saat app start, hook mencoba parse save. Jika invalid/tidak ada, app memakai default session.

## Checkpoint
Checkpoint awal = initial state misi. Setiap objective baru tercapai, repository state disalin menjadi checkpoint terbaru.

## Recovery controls
- **Checkpoint:** mengembalikan repository state saja, menjaga progress global.
- **Reset misi:** membangun ulang session dari initial state misi, menjaga progress global.
- **Hapus seluruh save:** menghapus key localStorage dan kembali ke default.
