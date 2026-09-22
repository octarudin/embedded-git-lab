# Test Strategy

## Automated
1. **Engine unit tests:** branch creation, add/commit, non-fast-forward rejection, stash/pop, tag/release/upload.
2. **Catalog tests:** 5 level, 25 unique mission IDs, setiap misi memiliki objective dan hints.
3. **Static quality:** ESLint + TypeScript compile.
4. **Production build:** Vite build.

## Manual
- Playthrough mission penting setiap level.
- Reload browser saat misi berjalan untuk memastikan resume.
- Restore checkpoint dan reset misi.
- Keyboard navigation dan focus visibility.
- GitHub Pages route/base behavior.

## Release gate
`npm run check` harus lulus.
