import type { RepositoryState } from '../types/game'
export interface CommandResult{state:RepositoryState;output:string;changed:boolean}
export const initialRepositoryState:RepositoryState={currentBranch:'main',branches:{main:'c0'},commits:{c0:{id:'c0',message:'Initial simulated state'}},files:[{path:'Core/Src/main.c',state:'clean'},{path:'Drivers/BME280/bme280.c',state:'untracked'},{path:'build/firmware.bin',state:'ignored'}],commandHistory:[]}
export function runGitCommand(state:RepositoryState,rawCommand:string):CommandResult{
 const command=rawCommand.trim(); const next=structuredClone(state); next.commandHistory.push(command)
 if(command==='git status'){const changed=next.files.filter(f=>f.state!=='clean'&&f.state!=='ignored');const lines=changed.length?changed.map(f=>`  ${f.state.padEnd(9)} ${f.path}`):['nothing to commit, working tree clean'];return{state:next,output:`On branch ${next.currentBranch}\n${lines.join('\n')}`,changed:false}}
 if(command==='git branch'){return{state:next,output:Object.keys(next.branches).map(b=>`${b===next.currentBranch?'*':' '} ${b}`).join('\n'),changed:false}}
 const m=command.match(/^git switch -c ([a-zA-Z0-9._/-]+)$/); if(m){const branch=m[1];if(next.branches[branch])return{state:next,output:`fatal: a branch named '${branch}' already exists`,changed:false};next.branches[branch]=next.branches[next.currentBranch];next.currentBranch=branch;return{state:next,output:`Switched to a new branch '${branch}'`,changed:true}}
 return{state:next,output:`embedded-git-lab: command belum didukung pada prototype: ${command}`,changed:false}
}
