/* AI Auto Correction Engine */

class AIAutoCorrectionEngine {

constructor(){
this.commonFixes = {
"ceo":"CEO",
"gerente comercial":"Gerente Comercial",
"director comercial":"Director Comercial"
};
}

normalizeName(name){

if(!name) return name;

return name
.toLowerCase()
.split(' ')
.map(n=>n.charAt(0).toUpperCase()+n.slice(1))
.join(' ');

}

normalizeEmail(email){

if(!email) return null;

email = email.trim().toLowerCase();

if(!email.includes('@')) return null;

return email;

}

normalizeCompany(company){

if(!company) return company;

return this.normalizeName(company);

}

normalizeCargo(cargo){

if(!cargo) return cargo;

const lower = cargo.toLowerCase();

if(this.commonFixes[lower]){
return this.commonFixes[lower];
}

return this.normalizeName(cargo);

}

correct(contact){

return {
...contact,
name:this.normalizeName(contact.name),
lastname:this.normalizeName(contact.lastname),
company:this.normalizeCompany(contact.company),
email:this.normalizeEmail(contact.email),
cargo:this.normalizeCargo(contact.cargo)
};

}

}

window.AIAutoCorrectionEngine = AIAutoCorrectionEngine;
