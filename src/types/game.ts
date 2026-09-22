export type FileState = 'clean' | 'modified' | 'staged' | 'untracked' | 'ignored' | 'deleted'
export type MissionMode = 'tutorial' | 'challenge'

export interface VirtualFile { path: string; state: FileState; secret?: boolean }
export interface Commit { id: string; message: string; parent?: string; branch?: string }
export interface PullRequest { id: number; title: string; head: string; base: string; status: 'open' | 'merged' | 'closed' }
export interface Release { tag: string; title: string; assets: string[]; prerelease?: boolean }
export interface RepositoryState {
  initialized: boolean
  currentBranch: string
  branches: Record<string, string>
  commits: Record<string, Commit>
  files: VirtualFile[]
  staged: string[]
  remotes: Record<string, string>
  remoteBranches: Record<string, string>
  upstream?: string
  tags: Record<string, string>
  stash: VirtualFile[][]
  mergeState?: { from: string; conflict: boolean }
  issues: Array<{ id: number; title: string; open: boolean }>
  pullRequests: PullRequest[]
  releases: Release[]
  authenticated: boolean
  commandHistory: string[]
}

export interface MissionObjective {
  id: string
  label: string
  check: (state: RepositoryState, commandHistory: string[]) => boolean
}

export interface Mission {
  id: string
  level: number
  title: string
  subtitle: string
  mode: MissionMode
  briefing: string
  objectives: MissionObjective[]
  hints: string[]
  initialState: RepositoryState
  xp: number
}

export interface Achievement { id: string; label: string; description: string }
export interface TerminalEntry { command: string; output: string; kind?: 'normal' | 'success' | 'error' | 'info' }
export interface PlayerProgress {
  xp: number
  completedMissions: string[]
  achievements: string[]
  activeMissionId: string
  hintUsage: Record<string, number>
}
export interface GameSession {
  repository: RepositoryState
  terminal: TerminalEntry[]
  progress: PlayerProgress
  checkpoint?: RepositoryState
  checkpointObjectives?: string[]
}
