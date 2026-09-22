# Acceptance Test

Release diterima bila:
1. `npm run lint` lulus tanpa warning/error.
2. `npm run typecheck` lulus.
3. `npm test` lulus.
4. `npm run build` menghasilkan `dist/`.
5. Smoke test membuka build dan memainkan minimal satu misi per level.
6. Autosave/resume/checkpoint diuji manual.
7. GitHub Pages workflow tersedia dan memakai artifact Pages resmi.
