# State Transition Rules

| Command family | Transition utama |
|---|---|
| `git add` | modified/untracked → staged |
| `git restore --staged` | staged → modified |
| `git restore` | modified/staged → clean |
| `git commit` | staged files → clean; HEAD → commit baru |
| `git switch -c` | branch baru pada HEAD; currentBranch berubah |
| `git fetch` | remote-tracking refs diperbarui |
| `git pull` | branch aktif fast-forward pada remote ref untuk skenario v1 |
| `git push` | remote branch → local branch head; upstream terset |
| `git stash` | perubahan disimpan; working tree dibersihkan |
| `git stash pop` | stash terakhir diaplikasikan kembali |
| `git reset --soft` | HEAD mundur; perubahan dipertahankan staged |
| `git revert` | commit baru pembalik dibuat |
| `git tag` | tag name → commit id |
| `gh pr create` | PR virtual baru |
| `gh release create` | release virtual baru dari tag |
| `gh release upload` | asset path ditambahkan ke release |
