# System Architecture

## Overview
Embedded Git Lab v1 adalah static single-page application.

```text
Browser
 ├─ React UI
 │   ├─ Learning Path
 │   ├─ Mission/Objective Panel
 │   ├─ Terminal
 │   └─ Repository/File Views
 ├─ Mission Catalog
 ├─ Git/GitHub Simulator Engine
 └─ Persistence (localStorage)
```

Tidak ada backend. Semua state diserialisasi di browser.

## Boundaries
- UI tidak mengetahui detail parser command; UI memanggil `runGitCommand`.
- Mission catalog mendefinisikan state awal dan evaluator objective.
- Engine hanya mengubah state simulasi dan mengembalikan output.
- Persistence menangani session penuh.

## Deployment
Vite membangun static assets ke `dist/`. GitHub Actions mengunggah artifact Pages dan men-deploy ke GitHub Pages.
