/* Intelligent Duplicate Detection Engine */

class AIDedupEngine {

constructor(){
this.threshold = 0.85;
}

similarity(a,b){

if(!a || !b) return 0;

a = a.toLowerCase();
b = b.toLowerCase();

let matches = 0;

for(let i=0;i<Math.min(a.length,b.length);i++){
if(a[i]===b[i]) matches++;
}

return matches / Math.max(a.length,b.length);

}

isDuplicate(a,b){

let score = 0;

score += this.similarity(a.name,b.name);
score += this.similarity(a.lastname,b.lastname);
score += this.similarity(a.company,b.company);

if(a.phone && b.phone && a.phone===b.phone){
score += 1;
}

return score/4 > this.threshold;

}

findDuplicates(list){

const duplicates = [];

for(let i=0;i<list.length;i++){
for(let j=i+1;j<list.length;j++){

if(this.isDuplicate(list[i],list[j])){

duplicates.push([list[i],list[j]]);

}

}
}

return duplicates;

}

}

window.AIDedupEngine = AIDedupEngine;
