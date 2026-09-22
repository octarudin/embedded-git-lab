export interface MissionSummary{id:string;level:number;title:string;description:string;status:'ready'|'planned'}
export const missions:MissionSummary[]=[
{id:'L1-M01',level:1,title:'Repository Pertama',description:'Observasi folder kosong dan inisialisasikan repository Git.',status:'ready'},
{id:'L1-M02',level:1,title:'Source Code yang Sudah Ada',description:'Mulai version control pada project firmware yang sudah memiliki source code.',status:'planned'},
{id:'L1-M03',level:1,title:'Jangan Commit Build',description:'Tentukan file dan folder embedded yang perlu masuk .gitignore.',status:'planned'},
{id:'L2-M01',level:2,title:'Feature Branch',description:'Buat branch dengan nama yang jelas sebelum menambah fitur sensor.',status:'planned'},
{id:'L3-M01',level:3,title:'Salah Stage',description:'Pulihkan staging area tanpa kehilangan perubahan lokal.',status:'planned'},
{id:'L4-M01',level:4,title:'Pull Request Pertama',description:'Simulasikan workflow GitHub CLI dari branch ke pull request.',status:'planned'},
{id:'L5-M01',level:5,title:'Firmware Release',description:'Hubungkan commit, tag, release, dan binary firmware dengan benar.',status:'planned'}]
