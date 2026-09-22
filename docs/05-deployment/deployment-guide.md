# Deployment Guide

## Local build
```bash
npm install --no-audit --no-fund
npm run check
```

## GitHub Pages
1. Push repository ke GitHub.
2. Settings → Pages → Source: **GitHub Actions**.
3. Push ke `main` atau jalankan workflow `Deploy GitHub Pages` secara manual.
4. Workflow build dan deploy `dist/`.

`vite.config.ts` menggunakan base `/embedded-git-lab/` pada production agar asset path sesuai project Pages.
