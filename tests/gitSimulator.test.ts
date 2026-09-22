import { describe,expect,it } from 'vitest'
import { initialRepositoryState,runGitCommand } from '../src/engine/gitSimulator'
describe('git simulator prototype',()=>{it('menampilkan branch aktif pada git status',()=>{const result=runGitCommand(initialRepositoryState,'git status');expect(result.output).toContain('On branch main')});it('membuat dan berpindah ke branch baru',()=>{const result=runGitCommand(initialRepositoryState,'git switch -c feature/bme280');expect(result.state.currentBranch).toBe('feature/bme280');expect(result.state.branches['feature/bme280']).toBeDefined()})})
