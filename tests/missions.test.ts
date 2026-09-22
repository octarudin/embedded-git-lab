import { describe, expect, it } from 'vitest'
import { missions } from '../src/data/missions'
import { runGitCommand } from '../src/engine/gitSimulator'
import { advanceObjectives, completedObjectivePrefix } from '../src/engine/missionProgress'
describe('mission catalog',()=>{
 it('contains five levels and 25 missions',()=>{expect(new Set(missions.map(m=>m.level)).size).toBe(5);expect(missions).toHaveLength(25)})
 it('has unique ids and objectives',()=>{expect(new Set(missions.map(m=>m.id)).size).toBe(missions.length);for(const m of missions){expect(m.objectives.length).toBeGreaterThan(0);expect(m.hints.length).toBeGreaterThanOrEqual(3)}})
 it('includes explicit commands in the final hint',()=>{for(const m of missions){expect(m.hints.at(-1)).toMatch(/Perintah: (git|gh) /)}})
 it('completes every mission with the hinted commands in order',()=>{for(const m of missions){let state=structuredClone(m.initialState);let completed:string[]=[];const commands=m.hints.at(-1)!.split('Perintah: ')[1].split(' → ');for(const command of commands){state=runGitCommand(state,command).state;completed=advanceObjectives(m,state,completed)}expect(completed,m.id).toEqual(m.objectives.map(objective=>objective.id))}})
 it('does not complete a locked objective with an earlier command',()=>{const mission=missions.find(m=>m.id==='L1-M01')!;let state=structuredClone(mission.initialState);let completed:string[]=[];state=runGitCommand(state,'git status').state;completed=advanceObjectives(mission,state,completed);expect(completed).toEqual([]);state=runGitCommand(state,'git init').state;completed=advanceObjectives(mission,state,completed);expect(completed).toEqual(['init']);state=runGitCommand(state,'git status').state;completed=advanceObjectives(mission,state,completed);expect(completed).toEqual(['init','observe'])})
 it('discards out-of-order objective progress from an older save',()=>{const mission=missions.find(m=>m.id==='L1-M01')!;expect(completedObjectivePrefix(mission,['observe'])).toEqual([])})
})
