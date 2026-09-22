import { describe, expect, it } from 'vitest'
import { createBaseState, runGitCommand } from '../src/engine/gitSimulator'

describe('git simulator',()=>{
 it('creates and switches to a feature branch',()=>{const s=createBaseState();const r=runGitCommand(s,'git switch -c feature/bme280');expect(r.state.currentBranch).toBe('feature/bme280');expect(r.state.branches['feature/bme280']).toBe('c0')})
 it('stages and commits a modified file',()=>{const s=createBaseState();s.files.find(f=>f.path==='App/sensor.c')!.state='modified';const staged=runGitCommand(s,'git add App/sensor.c');const committed=runGitCommand(staged.state,'git commit -m "feat: sensor"');expect(Object.keys(committed.state.commits)).toHaveLength(2);expect(committed.state.files.find(f=>f.path==='App/sensor.c')?.state).toBe('clean')})
 it('rejects push when remote diverged',()=>{const s=createBaseState();s.commits.c1={id:'c1',message:'local',parent:'c0'};s.commits.c2={id:'c2',message:'remote',parent:'c0'};s.branches.main='c1';s.remoteBranches['origin/main']='c2';const r=runGitCommand(s,'git push -u origin main');expect(r.kind).toBe('error');expect(r.output).toContain('non-fast-forward')})
 it('supports stash and pop',()=>{const s=createBaseState();s.files.find(f=>f.path==='App/sensor.c')!.state='modified';const stashed=runGitCommand(s,'git stash');expect(stashed.state.stash).toHaveLength(1);const popped=runGitCommand(stashed.state,'git stash pop');expect(popped.state.stash).toHaveLength(0);expect(popped.state.files.find(f=>f.path==='App/sensor.c')?.state).toBe('modified')})
 it('creates tag, release and release asset',()=>{let s=createBaseState();s.authenticated=true;s=runGitCommand(s,'git tag v1.0.0').state;s=runGitCommand(s,'gh release create v1.0.0 --title "v1.0.0"').state;s=runGitCommand(s,'gh release upload v1.0.0 build/firmware.bin').state;expect(s.tags['v1.0.0']).toBe('c0');expect(s.releases[0].assets).toContain('build/firmware.bin')})
})
