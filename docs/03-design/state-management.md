# State Management

v1 memakai React local state melalui custom hook `useAutosave`; tidak memerlukan Redux/Zustand karena satu session tree masih kecil.

## Update flow
`Terminal input → runGitCommand(previous.repository) → evaluate objective → update checkpoint/reward → setSession → localStorage`.

## Rules
- Update session dilakukan immutably.
- Engine meng-clone repository input sebelum mutasi internal.
- Completion reward idempotent: XP hanya diberikan jika mission ID belum ada di `completedMissions`.
