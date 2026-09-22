# Acceptance Criteria

## Core gameplay
- Setiap misi memiliki kondisi awal, briefing, objective, minimal 3 hint, dan XP.
- Objective dinilai dari repository state dan/atau command history.
- Misi selesai hanya ketika seluruh objective terpenuhi.
- Hint mengurangi reward misi, tetapi tidak memblokir penyelesaian.

## Persistence
- State aktif disimpan otomatis ke browser setelah perubahan session.
- Reload halaman memulihkan misi, terminal, repository state, XP, dan progress.
- Checkpoint diperbarui saat objective baru tercapai.
- Reset misi mengembalikan state awal tanpa menghapus XP/history completion global.

## Simulator
- Command yang tidak didukung menghasilkan pesan aman, bukan menjalankan shell.
- Tidak ada akses file system pengguna atau GitHub API nyata.
- Git/GitHub entity tetap serializable untuk persistence.

## Release
- `npm run lint`, `npm run typecheck`, `npm test`, dan `npm run build` harus lulus sebelum release.
