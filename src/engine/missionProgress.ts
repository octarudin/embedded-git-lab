import type { Mission, RepositoryState } from '../types/game'

export function completedObjectivePrefix(mission: Mission, completedIds: string[]): string[] {
  const completed = new Set(completedIds)
  const prefix: string[] = []

  for (const objective of mission.objectives) {
    if (!completed.has(objective.id)) break
    prefix.push(objective.id)
  }

  return prefix
}

export function advanceObjectives(
  mission: Mission,
  state: RepositoryState,
  completedIds: string[],
): string[] {
  const completed = completedObjectivePrefix(mission, completedIds)

  for (const objective of mission.objectives.slice(completed.length)) {
    if (!objective.check(state, state.commandHistory)) break
    completed.push(objective.id)
  }

  return completed
}
