# Mission Catalog v1

| ID | Level | Judul | Fokus |
|---|---:|---|---|
| L1-M01 | 1 | Repository Pertama | `git init`, status |
| L1-M02 | 1 | Source Code yang Sudah Ada | add + initial commit |
| L1-M03 | 1 | Jangan Commit Build Artifact | `.gitignore` mindset |
| L1-M04 | 1 | Bedakan Diff | diff vs staged diff |
| L1-M05 | 1 | Commit yang Terlewat | staging lengkap |
| L2-M01 | 2 | Feature Branch | branch naming + switch |
| L2-M02 | 2 | Push Pertama | upstream |
| L2-M03 | 2 | Remote Lebih Baru | fetch + verify |
| L2-M04 | 2 | Sinkronisasi Main | pull fast-forward |
| L2-M05 | 2 | Merge Fitur ke Main | merge + cleanup |
| L3-M01 | 3 | Salah Stage | unstage secret |
| L3-M02 | 3 | Salah Commit Lokal | reset soft |
| L3-M03 | 3 | Commit Sudah Dipush | revert |
| L3-M04 | 3 | Pindah Branch dengan Aman | stash |
| L3-M05 | 3 | Merge Conflict | conflict + abort |
| L4-M01 | 4 | Autentikasi GitHub CLI | auth status/login |
| L4-M02 | 4 | Issue untuk Pekerjaan | issue create |
| L4-M03 | 4 | Pull Request | PR create |
| L4-M04 | 4 | Review Status PR | status + merge |
| L4-M05 | 4 | PR Dibatalkan | close tanpa merge |
| L5-M01 | 5 | Tag Firmware | semantic tag |
| L5-M02 | 5 | GitHub Release | release create |
| L5-M03 | 5 | Upload Binary Firmware | release asset |
| L5-M04 | 5 | Pindahkan Tag | retag commit terbaru |
| L5-M05 | 5 | Release Engineer Challenge | tag + release + binary |

Detail executable untuk setiap misi berada di `src/data/missions.ts`; file tersebut menjadi single source of truth untuk state awal, objective evaluator, hints, dan reward.
