# Embedded Git Lab

**Embedded Git Lab** adalah game pembelajaran Git dan GitHub CLI berbasis web untuk developer embedded. Pemain belajar melalui skenario repository nyata, terminal simulator, objective berbasis state, dan workflow firmware dari commit hingga GitHub Release.

## Fitur v1.0.0

- 5 level, 25 misi tutorial/challenge berbahasa Indonesia.
- Simulator `git` dan `gh` yang aman, seluruhnya berjalan di browser.
- Terminal interaktif, repository state, branch view, dan virtual file explorer.
- Pola belajar **observasi → target → command → verifikasi**.
- XP, hint, achievement ringan, autosave, resume, checkpoint, reset mission.
- Skenario embedded: source, build artifact, secret, tag, release, `.bin`, `.hex`.
- Tanpa backend dan tanpa akses ke Git/repository asli pengguna.
- Siap di-deploy sebagai static site ke GitHub Pages.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Verifikasi penuh:

```bash
npm run check
```

Build production:

```bash
npm run build
npm run preview
```

## Struktur

```text
src/
  components/      UI reusable
  data/            katalog misi
  engine/          simulator Git/GitHub
  hooks/           autosave browser
docs/              dokumentasi SDLC
tests/             automated test
.github/workflows/  CI dan GitHub Pages
```

## Privasi dan keamanan

Aplikasi tidak menjalankan shell asli, tidak membaca repository lokal, dan tidak mengakses akun GitHub pemain. Semua repository, issue, pull request, tag, release, serta binary artifact merupakan data simulasi di browser. Progress disimpan pada `localStorage` browser.

## Repository metadata

Description: `Game pembelajaran Git dan GitHub CLI berbasis web untuk developer embedded, dengan terminal simulator, skenario nyata, dan latihan workflow version control.`

Topics: `git`, `github`, `github-cli`, `git-learning`, `git-simulator`, `embedded-systems`, `firmware`, `education`, `learning-game`, `react`, `typescript`, `vite`, `version-control`, `indonesia`, `open-source`.

## Dokumentasi

Mulai dari [`docs/01-product/product-vision.md`](docs/01-product/product-vision.md), lalu ikuti nomor folder SDLC.

## Lisensi

MIT. Lihat [LICENSE](LICENSE).
