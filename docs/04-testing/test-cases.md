# Test Cases

| ID | Area | Scenario | Expected |
|---|---|---|---|
| TC-01 | Branch | `git switch -c feature/bme280` | branch dibuat dan aktif |
| TC-02 | Commit | add file lalu commit | commit baru; file clean |
| TC-03 | Push | remote diverged | push ditolak non-fast-forward |
| TC-04 | Stash | stash lalu pop | state perubahan kembali |
| TC-05 | Release | tag → release → upload | release memiliki binary asset |
| TC-06 | Persistence | reload setelah command | session dipulihkan |
| TC-07 | Reward | selesaikan misi dua kali | XP completion tidak diduplikasi |
| TC-08 | Checkpoint | objective tercapai lalu command salah | restore mengembalikan state checkpoint |
| TC-09 | Unsupported | command acak | pesan unsupported; tidak ada shell execution |
| TC-10 | Catalog | load semua misi | 25 misi unik dan valid |
