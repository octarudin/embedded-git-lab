import type { RepositoryState, VirtualFile } from '../types/game'

export interface CommandResult { state: RepositoryState; output: string; changed: boolean; kind?: 'normal'|'success'|'error'|'info' }
const clone = <T,>(value:T):T => structuredClone(value)
const nextId=(s:RepositoryState)=>`c${Object.keys(s.commits).length}`
const head=(s:RepositoryState)=>s.branches[s.currentBranch] || ''
const setFile=(s:RepositoryState,path:string,state:VirtualFile['state'])=>{const f=s.files.find(x=>x.path===path);if(f)f.state=state;else s.files.push({path,state})}
const allChanged=(s:RepositoryState)=>s.files.filter(f=>['modified','untracked','deleted','staged'].includes(f.state))
const resolvePath=(raw:string)=>raw.replace(/^['"]|['"]$/g,'')

export function createBaseState():RepositoryState{
 return {initialized:true,currentBranch:'main',branches:{main:'c0'},commits:{c0:{id:'c0',message:'chore: initial firmware project'}},files:[{path:'Core/Src/main.c',state:'clean'},{path:'App/sensor.c',state:'clean'},{path:'README.md',state:'clean'},{path:'build/firmware.bin',state:'ignored'}],staged:[],remotes:{origin:'https://github.com/example/octa-sensor-node.git'},remoteBranches:{'origin/main':'c0'},upstream:'origin/main',tags:{},stash:[],issues:[],pullRequests:[],releases:[],authenticated:false,commandHistory:[]}
}

function status(s:RepositoryState){
 const changed=allChanged(s).filter(f=>f.state!=='staged');
 const staged=s.files.filter(f=>f.state==='staged');
 const lines=[`On branch ${s.currentBranch}`]
 if(s.upstream) lines.push(`Your branch tracks '${s.upstream}'.`)
 if(staged.length){lines.push('\nChanges to be committed:');staged.forEach(f=>lines.push(`  staged:    ${f.path}`))}
 if(changed.length){lines.push('\nChanges not staged for commit:');changed.forEach(f=>lines.push(`  ${f.state.padEnd(10)} ${f.path}`))}
 if(!staged.length&&!changed.length) lines.push('nothing to commit, working tree clean')
 return lines.join('\n')
}
function log(s:RepositoryState){let id=head(s);const out:string[]=[];const seen=new Set<string>();while(id&&s.commits[id]&&!seen.has(id)){seen.add(id);const c=s.commits[id];const decorations:string[]=[];Object.entries(s.branches).forEach(([b,v])=>v===id&&decorations.push(b===s.currentBranch?`HEAD -> ${b}`:b));Object.entries(s.tags).forEach(([t,v])=>v===id&&decorations.push(`tag: ${t}`));out.push(`${id} ${decorations.length?`(${decorations.join(', ')}) `:''}${c.message}`);id=c.parent||''}return out.join('\n')}
function commit(s:RepositoryState,message:string){const staged=s.files.filter(f=>f.state==='staged');if(!staged.length)return null;const id=nextId(s);s.commits[id]={id,message,parent:head(s),branch:s.currentBranch};s.branches[s.currentBranch]=id;staged.forEach(f=>f.state='clean');s.staged=[];return id}

export function runGitCommand(state:RepositoryState,rawCommand:string):CommandResult{
 const command=rawCommand.trim();const s=clone(state);if(!command)return{state:s,output:'',changed:false};s.commandHistory.push(command)
 const ok=(output:string,changed=true):CommandResult=>({state:s,output,changed,kind:changed?'success':'normal'})
 const err=(output:string):CommandResult=>({state:s,output,changed:false,kind:'error'})
 if(command==='help'||command==='git help'||command==='gh help') return ok('Perintah utama: git status, branch, switch, add, restore, commit, log, diff, remote, fetch, pull, push, merge, stash, tag, reset, revert, cherry-pick; gh auth, repo, issue, pr, release.',false)
 if(command==='clear') return ok('__CLEAR__',false)
 if(command==='git init'){s.initialized=true;if(!s.branches.main)s.branches.main='c0';return ok('Initialized empty Git repository in /octa-sensor-node/.git/')}
 if(!s.initialized && command.startsWith('git ')) return err("fatal: not a git repository (or any of the parent directories): .git")
 if(command==='git status'||command==='git status --short') return ok(status(s),false)
 if(command==='git branch'||command==='git branch --list') return ok(Object.keys(s.branches).map(b=>`${b===s.currentBranch?'*':' '} ${b}`).join('\n'),false)
 let m=command.match(/^git (?:switch -c|checkout -b) ([\w./-]+)$/);if(m){const b=m[1];if(s.branches[b])return err(`fatal: a branch named '${b}' already exists`);s.branches[b]=head(s);s.currentBranch=b;s.upstream=undefined;return ok(`Switched to a new branch '${b}'`)}
 m=command.match(/^git (?:switch|checkout) ([\w./-]+)$/);if(m){const b=m[1];if(s.branches[b]){s.currentBranch=b;s.upstream=s.remoteBranches[`origin/${b}`]?`origin/${b}`:undefined;return ok(`Switched to branch '${b}'`)}if(s.tags[b]){s.branches['detached-head']=s.tags[b];s.currentBranch='detached-head';s.upstream=undefined;return ok(`HEAD is now at ${s.tags[b]} (${b})`)}return err(`error: pathspec '${b}' did not match any branch or tag`)}
 m=command.match(/^git branch -[dD] ([\w./-]+)$/);if(m){const b=m[1];if(b===s.currentBranch)return err(`error: Cannot delete branch '${b}' checked out`);if(!s.branches[b])return err(`error: branch '${b}' not found`);delete s.branches[b];return ok(`Deleted branch ${b}.`)}
 if(command==='git add .'||command==='git add -A'){s.files.filter(f=>!['clean','ignored'].includes(f.state)).forEach(f=>f.state='staged');s.staged=s.files.filter(f=>f.state==='staged').map(f=>f.path);return ok(`Staged ${s.staged.length} file(s).`)}
 m=command.match(/^git add (.+)$/);if(m){const p=resolvePath(m[1]);const f=s.files.find(x=>x.path===p);if(!f)return err(`fatal: pathspec '${p}' did not match any files`);if(f.state==='ignored')return err(`The following paths are ignored by one of your .gitignore files:\n${p}`);f.state='staged';if(!s.staged.includes(p))s.staged.push(p);return ok(`Staged ${p}.`)}
 m=command.match(/^git restore --staged (.+)$/);if(m){const p=resolvePath(m[1]);const f=s.files.find(x=>x.path===p);if(!f)return err(`error: pathspec '${p}' did not match any file`);f.state='modified';s.staged=s.staged.filter(x=>x!==p);return ok(`Unstaged ${p}.`)}
 m=command.match(/^git restore (.+)$/);if(m){const p=resolvePath(m[1]);const f=s.files.find(x=>x.path===p);if(!f)return err(`error: pathspec '${p}' did not match any file`);f.state='clean';s.staged=s.staged.filter(x=>x!==p);return ok(`Restored ${p}.`)}
 m=command.match(/^git commit(?: --amend)? -m ["'](.+)["']$/);if(m){const amend=command.includes('--amend');if(amend){const id=head(s);if(!id)return err('fatal: You have nothing to amend.');s.commits[id].message=m[1];s.files.filter(f=>f.state==='staged').forEach(f=>f.state='clean');s.staged=[];return ok(`[${s.currentBranch} ${id}] ${m[1]} (amended)`)}const id=commit(s,m[1]);return id?ok(`[${s.currentBranch} ${id}] ${m[1]}`):err('nothing to commit, working tree clean')}
 if(command.startsWith('git log')) return ok(log(s),false)
 if(command==='git diff') return ok(s.files.filter(f=>['modified','deleted'].includes(f.state)).map(f=>`diff -- ${f.path}\n+ simulated change`).join('\n')||'',false)
 if(command==='git diff --staged'||command==='git diff --cached') return ok(s.files.filter(f=>f.state==='staged').map(f=>`diff --cached ${f.path}\n+ simulated staged change`).join('\n')||'',false)
 if(command==='git remote -v') return ok(Object.entries(s.remotes).flatMap(([n,u])=>[`${n}\t${u} (fetch)`,`${n}\t${u} (push)`]).join('\n'),false)
 m=command.match(/^git remote add (\w+) (.+)$/);if(m){s.remotes[m[1]]=m[2];return ok(`Remote '${m[1]}' added.`)}
 m=command.match(/^git remote set-url (\w+) (.+)$/);if(m){if(!s.remotes[m[1]])return err(`error: No such remote '${m[1]}'`);s.remotes[m[1]]=m[2];return ok(`Remote '${m[1]}' URL updated.`)}
 if(command==='git fetch'||command==='git fetch origin'||command==='git fetch --prune'||command==='git fetch origin --prune'){if(s.remoteBranches['origin/main-next']){s.remoteBranches['origin/main']=s.remoteBranches['origin/main-next'];delete s.remoteBranches['origin/main-next']}if(command.includes('--prune'))Object.keys(s.remoteBranches).filter(k=>k.includes('deleted')).forEach(k=>delete s.remoteBranches[k]);return ok('From origin\n * fetched remote updates')}
 if(command==='git pull'||command==='git pull origin main'){const remote=s.remoteBranches['origin/main'];if(remote&&remote!==head(s)){s.branches[s.currentBranch]=remote;return ok(`Updating local branch to ${remote}\nFast-forward`)}return ok('Already up to date.',false)}
 m=command.match(/^git push(?: -u| --set-upstream)? origin ([\w./-]+)$/);if(m){const b=m[1];if(!s.branches[b])return err(`error: src refspec ${b} does not match any`);const remoteKey=`origin/${b}`;const remote=s.remoteBranches[remoteKey];if(remote&&remote!==s.branches[b]&&!command.includes('--force'))return err('! [rejected] non-fast-forward\nhint: Fetch and integrate remote changes before pushing again.');s.remoteBranches[remoteKey]=s.branches[b];s.upstream=remoteKey;return ok(`branch '${b}' set up to track '${remoteKey}'.\nPushed to origin.`)}
 m=command.match(/^git push origin --delete ([\w./-]+)$/);if(m){delete s.remoteBranches[`origin/${m[1]}`];return ok(`- [deleted] ${m[1]}`)}
 if(command==='git merge --abort'){if(!s.mergeState)return err('fatal: There is no merge to abort');s.mergeState=undefined;setFile(s,'App/sensor.c','clean');return ok('Merge aborted.')}
 m=command.match(/^git merge ([\w./-]+)$/);if(m){const from=m[1];const target=s.branches[from]||s.remoteBranches[from];if(!target)return err(`merge: ${from} - not something we can merge`);if(s.mergeState?.conflict)return err('error: Merging is not possible because you have unmerged files.');if(from.includes('conflict')){s.mergeState={from,conflict:true};setFile(s,'App/sensor.c','modified');return err('CONFLICT (content): Merge conflict in App/sensor.c\nAutomatic merge failed; fix conflicts and then commit the result.')}s.branches[s.currentBranch]=target;return ok(`Updating ${s.currentBranch}\nFast-forward`)}
 if(command==='git stash'||command==='git stash push'){const changed=s.files.filter(f=>['modified','untracked','staged'].includes(f.state));if(!changed.length)return ok('No local changes to save',false);s.stash.push(clone(changed));changed.forEach(f=>f.state='clean');s.staged=[];return ok(`Saved working directory and index state WIP on ${s.currentBranch}`)}
 if(command==='git stash pop'||command==='git stash apply'){const item=s.stash[s.stash.length-1];if(!item)return err('No stash entries found.');item.forEach((f:VirtualFile)=>setFile(s,f.path,f.state));if(command.endsWith('pop'))s.stash.pop();return ok('Applied stash.')}
 m=command.match(/^git tag -[dD] ([\w.-]+)$/);if(m){if(!s.tags[m[1]])return err(`error: tag '${m[1]}' not found.`);delete s.tags[m[1]];return ok(`Deleted tag '${m[1]}'`)}
 m=command.match(/^git tag(?: -a)? ([\w.-]+)(?: -m ["'].+["'])?(?: ([\w]+))?$/);if(m){const tag=m[1];const id=m[2]||head(s);if(s.tags[tag])return err(`fatal: tag '${tag}' already exists`);s.tags[tag]=id;return ok(`Created tag ${tag} at ${id}.`)}
 m=command.match(/^git push origin ([\w.-]+)$/);if(m&&s.tags[m[1]])return ok(`* [new tag] ${m[1]} -> ${m[1]}`)
 m=command.match(/^git reset (--soft|--mixed|--hard) HEAD~1$/);if(m){const id=head(s),c=s.commits[id];if(!c?.parent)return err('fatal: ambiguous argument HEAD~1');s.branches[s.currentBranch]=c.parent;if(m[1]!=='--hard')setFile(s,'App/sensor.c',m[1]==='--soft'?'staged':'modified');return ok(`HEAD is now at ${c.parent}`)}
 m=command.match(/^git revert ([\w]+)$/);if(m){const id=nextId(s);s.commits[id]={id,message:`Revert ${m[1]}`,parent:head(s),branch:s.currentBranch};s.branches[s.currentBranch]=id;return ok(`[${s.currentBranch} ${id}] Revert ${m[1]}`)}
 m=command.match(/^git cherry-pick ([\w]+)$/);if(m){if(!s.commits[m[1]])return err(`fatal: bad revision '${m[1]}'`);const id=nextId(s);s.commits[id]={id,message:s.commits[m[1]].message,parent:head(s),branch:s.currentBranch};s.branches[s.currentBranch]=id;return ok(`[${s.currentBranch} ${id}] ${s.commits[m[1]].message}`)}
 if(command==='gh auth status'){return s.authenticated?ok('✓ Logged in to github.com',false):err('You are not logged into any GitHub hosts. Run gh auth login.')}
 if(command==='gh auth login'){s.authenticated=true;return ok('✓ Authentication simulated. Logged in to github.com.')}
 m=command.match(/^gh repo create ([\w.-]+).*$/);if(m){if(!s.authenticated)return err('authentication required');s.remotes.origin=`https://github.com/learner/${m[1]}.git`;return ok(`✓ Created repository learner/${m[1]} on GitHub`)}
 m=command.match(/^gh issue create(?: --title ["'](.+)["'])?.*$/);if(m){if(!s.authenticated)return err('authentication required');const id=s.issues.length+1;s.issues.push({id,title:m[1]||'Firmware task',open:true});return ok(`https://github.com/learner/octa-sensor-node/issues/${id}`)}
 m=command.match(/^gh pr create(?: .*--title ["'](.+)["'])?.*$/);if(m){if(!s.authenticated)return err('authentication required');const id=s.pullRequests.length+1;s.pullRequests.push({id,title:m[1]||`Merge ${s.currentBranch}`,head:s.currentBranch,base:'main',status:'open'});return ok(`https://github.com/learner/octa-sensor-node/pull/${id}`)}
 if(command==='gh pr status')return ok(s.pullRequests.map(pr=>`#${pr.id} ${pr.title} [${pr.status}] ${pr.head} -> ${pr.base}`).join('\n')||'No pull requests found.',false)
 m=command.match(/^gh pr merge (\d+)(?: --merge| --squash| --rebase)?$/);if(m){const prId=Number(m[1]);const pr=s.pullRequests.find(p=>p.id===prId);if(!pr)return err('pull request not found');pr.status='merged';if(s.branches[pr.head])s.branches.main=s.branches[pr.head];return ok(`✓ Merged pull request #${pr.id}`)}
 m=command.match(/^gh pr close (\d+)$/);if(m){const prId=Number(m[1]);const pr=s.pullRequests.find(p=>p.id===prId);if(!pr)return err('pull request not found');pr.status='closed';return ok(`✓ Closed pull request #${pr.id}`)}
 m=command.match(/^gh release create ([\w.-]+)(?: .*--title ["'](.+)["'])?.*$/);if(m){if(!s.tags[m[1]])return err(`tag ${m[1]} does not exist locally`);s.releases.push({tag:m[1],title:m[2]||m[1],assets:[],prerelease:command.includes('--prerelease')});return ok(`✓ Created release ${m[1]}`)}
 m=command.match(/^gh release upload ([\w.-]+) (.+?)(?: --clobber)?$/);if(m){const releaseTag=m[1];const r=s.releases.find(x=>x.tag===releaseTag);if(!r)return err(`release ${m[1]} not found`);const asset=resolvePath(m[2].split(' ')[0]);if(!r.assets.includes(asset))r.assets.push(asset);return ok(`✓ Successfully uploaded ${asset}`)}
 m=command.match(/^gh release delete ([\w.-]+).*$/);if(m){s.releases=s.releases.filter(r=>r.tag!==m[1]);return ok(`✓ Deleted release ${m[1]}`)}
 return err(`embedded-git-lab: command belum didukung: ${command}\nKetik 'help' untuk melihat command yang tersedia.`)
}
