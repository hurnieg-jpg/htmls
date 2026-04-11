/* AI Data Quality Engine */

class AIDataQualityEngine {

scoreContact(contact){

let score = 0;
let issues = [];

if(contact.name) score += 15;
else issues.push("Sin nombre");

if(contact.lastname) score += 15;
else issues.push("Sin apellido");

if(contact.phone) score += 20;
else issues.push("Sin WhatsApp");

if(contact.email) score += 15;
else issues.push("Sin email");

if(contact.company) score += 20;
else issues.push("Sin empresa");

if(contact.cargo) score += 15;
else issues.push("Sin cargo");

return {
score,
issues,
quality: this.getQuality(score)
};

}

getQuality(score){

if(score >= 90) return "Excelente";
if(score >= 70) return "Buena";
if(score >= 50) return "Regular";
return "Mala";

}

scoreDatabase(contacts){

let total = 0;

const report = contacts.map(c=>{

const r = this.scoreContact(c);

 total += r.score;

return {
contact:c,
...r
};

});

return {

average: total / contacts.length,
report

};

}

}

window.AIDataQualityEngine = AIDataQualityEngine;
