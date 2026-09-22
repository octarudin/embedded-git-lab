# Scope — Embedded Git Lab v1

## Tujuan v1

Menyediakan pengalaman belajar lengkap dari dasar Git hingga workflow release firmware berbasis GitHub dalam aplikasi web single-player, client-side, berbahasa Indonesia.

## In Scope

### Platform dan Teknologi
- Single-player web application.
- React + TypeScript + Vite + Tailwind CSS.
- Custom Git/GitHub state simulator.
- Browser local storage / IndexedDB.
- GitHub Pages.
- Desktop/laptop sebagai target utama.

### Level 1 — Git Fundamentals
- `git init`, `status`, `add`, `commit`, `log`, `diff`.
- Repository kosong dan repository yang sudah berisi source code.
- `.gitignore` untuk source embedded, build artifact, IDE/toolchain file.
- Clone dan restore sederhana.

### Level 2 — Branch & Remote Workflow
- Branch naming, create/switch branch.
- Remote, origin, fetch, pull, push, upstream.
- Local vs remote tracking branch.
- Merge, cleanup, prune, non-fast-forward.

### Level 3 — Git Recovery & Troubleshooting
- Salah stage/commit/branch.
- Amend, reset, revert, stash.
- Cherry-pick, conflict, abort merge, detached HEAD.
- File tracked yang kemudian di-ignore.
- Secret yang terlanjur staged.

### Level 4 — GitHub Collaboration
- Simulasi `gh auth`, repo, issue, PR, checkout, merge.
- PR tertinggal dari main, conflict, close, cleanup.

### Level 5 — Embedded Release Workflow
- Semantic versioning dasar.
- Tag lokal/remote, annotated tag.
- Release dan prerelease.
- Binary `.bin`, `.hex`, `.elf`, checksum.
- Koreksi tag/release dan binary artifact.
- Submodule dasar.

### Game Mechanics
- Mission dan challenge.
- Terminal simulator.
- File explorer.
- Git graph sederhana.
- Objective panel.
- Hint bertingkat.
- XP dan achievement ringan.
- Feedback edukatif.
- Autosave, resume, checkpoint, reset mission.

## Out of Scope v1

- Login/register/OAuth.
- Cloud save.
- Backend/database server.
- Multiplayer/realtime collaboration.
- Online leaderboard.
- Classroom/teacher dashboard.
- GitHub API nyata.
- Git/shell nyata.
- Embedded compiler/hardware simulator.
- Full IDE atau collaborative editor.

## Constraints

- Harus dapat di-host di GitHub Pages.
- Tidak boleh menjalankan arbitrary shell command.
- State game harus serializable.
- Operasi berisiko harus diperkenalkan dengan konteks dan peringatan.
- Solusi alternatif yang valid dapat diterima bila state akhirnya benar.

## Definition of Done v1

v1 dianggap selesai ketika lima level inti tersedia, simulator konsisten dan memiliki automated test, autosave/checkpoint/resume bekerja, GitHub/release workflow dapat disimulasikan, dan deployment GitHub Pages otomatis berfungsi.
