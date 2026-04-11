/* AI Learning Engine - learns from user corrections */

class AILearningEngine {

constructor(){
this.memory = this.loadMemory();
}

loadMemory(){
try{
return JSON.parse(localStorage.getItem('ai_learning_memory')) || {};
}catch(e){
return {};
}
}

saveMemory(){
localStorage.setItem('ai_learning_memory',JSON.stringify(this.memory));
}

learn(original, corrected){

Object.keys(corrected).forEach(key=>{

if(original[key] && corrected[key] && original[key]!==corrected[key]){

if(!this.memory[key]) this.memory[key] = {};

this.memory[key][original[key]] = corrected[key];

}

});

this.saveMemory();

}

applyLearning(contact){

Object.keys(this.memory).forEach(field=>{

if(contact[field] && this.memory[field][contact[field]]){
contact[field] = this.memory[field][contact[field]];
}

});

return contact;

}

}

window.AILearningEngine = AILearningEngine;
