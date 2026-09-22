import { describe, expect, it } from 'vitest'
import { missions } from '../src/data/missions'
describe('mission catalog',()=>{
 it('contains five levels and 25 missions',()=>{expect(new Set(missions.map(m=>m.level)).size).toBe(5);expect(missions).toHaveLength(25)})
 it('has unique ids and objectives',()=>{expect(new Set(missions.map(m=>m.id)).size).toBe(missions.length);for(const m of missions){expect(m.objectives.length).toBeGreaterThan(0);expect(m.hints.length).toBeGreaterThanOrEqual(3)}})
})
