# Data Model

## RepositoryState
```ts
interface RepositoryState {
  initialized: boolean
  currentBranch: string
  branches: Record<string,string>
  commits: Record<string,Commit>
  files: VirtualFile[]
  remotes: Record<string,string>
  remoteBranches: Record<string,string>
  tags: Record<string,string>
  stash: VirtualFile[][]
  issues: Issue[]
  pullRequests: PullRequest[]
  releases: Release[]
}
```

## Mission
Mission memuat metadata, initial state, objective evaluators, hint, mode, dan XP.

## GameSession
Session memuat repository aktif, terminal history, global progress, checkpoint, dan objective checkpoint.

Semua bagian state persistence harus JSON-serializable. Function evaluator hanya berada pada static mission catalog dan tidak disimpan ke localStorage.
