import { describe, expect, it } from 'vitest'
import { missions } from '../src/data/missions'
import { runGitCommand } from '../src/engine/gitSimulator'
describe('mission catalog',()=>{
 it('contains five levels and 25 missions',()=>{expect(new Set(missions.map(m=>m.level)).size).toBe(5);expect(missions).toHaveLength(25)})
 it('has unique ids and objectives',()=>{expect(new Set(missions.map(m=>m.id)).size).toBe(missions.length);for(const m of missions){expect(m.objectives.length).toBeGreaterThan(0);expect(m.hints.length).toBeGreaterThanOrEqual(3)}})
 it('includes explicit commands in the final hint',()=>{for(const m of missions){expect(m.hints.at(-1)).toMatch(/Perintah: (git|gh) /)}})
 it('completes every mission with the hinted commands',()=>{for(const m of missions){let state=structuredClone(m.initialState);const commands=m.hints.at(-1)!.split('Perintah: ')[1].split(' → ');for(const command of commands)state=runGitCommand(state,command).state;expect(m.objectives.every(objective=>objective.check(state,state.commandHistory)),m.id).toBe(true)}})
})
