# Changelog

## [1.2.0] - 2026-09-22

### Added

- Modal sukses di tengah layar dengan navigasi ke misi berikutnya.
- Auto-focus input command dan auto-scroll internal terminal.
- Regression test untuk urutan objective dan kompatibilitas autosave lama.

### Changed

- Objective di seluruh learning path sekarang wajib diselesaikan secara berurutan.
- Area history terminal memiliki tinggi terbatas dan dapat di-scroll.

### Fixed

- Command yang dijalankan sebelum objective terbuka tidak lagi dihitung.
- Progress objective lama yang tidak berurutan dinormalisasi secara otomatis.

## [1.1.0] - 2026-09-22

### Added

- Perintah eksplisit pada hint terakhir di seluruh 25 misi.
- Urutan command lengkap untuk misi dengan beberapa langkah.
- Automated test untuk memverifikasi command hint dapat menyelesaikan objective.

## [1.0.1] - 2026-09-22

### Fixed

- Terminal auto-scroll tidak lagi menggulir seluruh halaman dan menyebabkan tampilan terlihat blank.

## [1.0.0] - 2026-09-22

### Added

- 25 mission dalam 5 learning level.
- Stateful Git/GitHub CLI simulator untuk workflow utama v1.
- Terminal simulator, branch/repository state, virtual file explorer.
- XP, hint, achievement, autosave, resume, checkpoint, dan reset.
- Embedded release workflow: tag, release, binary artifact.
- Automated tests, lint/typecheck/build scripts.
- CI dan GitHub Pages deployment workflow.
- Dokumentasi SDLC lengkap untuk v1.
