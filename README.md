# Embedded Git Lab

Game pembelajaran Git dan GitHub CLI berbasis web untuk developer embedded, dengan terminal simulator, skenario nyata, dan latihan workflow version control.

## Status

**v0.1.0 — Project scaffold / SDLC foundation**

Versi ini berisi fondasi repository, dokumentasi awal, simulator Git prototype, autosave browser, test awal, dan workflow GitHub Pages.

## Prinsip Pembelajaran

**Observasi kondisi → Tentukan target → Pilih command → Jalankan → Cek hasil → Lanjut**

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- Browser local storage
- GitHub Pages

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

Test:

```bash
npm test
```

## Prototype Command

Simulator awal mendukung:

```bash
git status
git branch
git switch -c feature/bme280
```

Dukungan command akan berkembang mengikuti mission catalog dan simulator design.

## Struktur SDLC

1. Product Vision
2. Scope
3. User Stories
4. Requirements
5. Game Design
6. Simulator Design
7. Architecture
8. Test Strategy
9. Implementation
10. Deployment
11. Changelog / Maintenance

Dokumentasi berada di folder [`docs/`](docs/).

## Deployment

Repository disiapkan untuk GitHub Pages dengan base path:

```text
/embedded-git-lab/
```

Aktifkan GitHub Pages dengan **Source: GitHub Actions**.

## License

MIT License.
