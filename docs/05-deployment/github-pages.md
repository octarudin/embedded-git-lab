# GitHub Pages

Workflow: `.github/workflows/deploy.yml`.

Permissions minimum:
- `contents: read`
- `pages: write`
- `id-token: write`

Deployment memakai `actions/configure-pages`, `actions/upload-pages-artifact`, dan `actions/deploy-pages`.

Jika nama repository berubah, update `base` production pada `vite.config.ts`.
