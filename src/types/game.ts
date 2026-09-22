export type FileState='clean'|'modified'|'staged'|'untracked'|'ignored'
export interface VirtualFile{path:string;state:FileState}
export interface Commit{id:string;message:string;parent?:string}
export interface RepositoryState{currentBranch:string;branches:Record<string,string>;commits:Record<string,Commit>;files:VirtualFile[];commandHistory:string[]}
export interface PlayerProgress{xp:number;completedMissions:string[];activeMissionId:string|null}
