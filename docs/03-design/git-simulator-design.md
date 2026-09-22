# Git Simulator Design

## Tujuan
Mensimulasikan subset perilaku Git/GitHub yang diperlukan misi v1, bukan mengimplementasikan Git secara penuh.

## RepositoryState
State utama mencakup `initialized`, `currentBranch`, `branches`, `commits`, `files`, `staged`, `remotes`, `remoteBranches`, `upstream`, `tags`, `stash`, `mergeState`, `issues`, `pullRequests`, `releases`, `authenticated`, dan `commandHistory`.

## Parser
Engine memakai exact match dan regular expression terkontrol. Input yang tidak dikenali menghasilkan error simulator. Tidak ada `eval`, shell, child process, network, atau filesystem host.

## Supported families
- Repository: init/status/log/diff.
- Branch: branch/switch/checkout/delete.
- Index: add/restore/commit/amend.
- Remote: remote/fetch/pull/push/delete remote branch.
- Integration: merge/stash/reset/revert/cherry-pick.
- Release metadata: tag.
- GitHub: auth/repo/issue/pr/release.

## Intentional simplification
Commit graph v1 memakai satu parent utama; merge divisualisasikan sebagai state update sederhana. Network, authentication, permission, hooks, signatures, LFS, rebase internals, dan full refspec semantics tidak dimodelkan.
