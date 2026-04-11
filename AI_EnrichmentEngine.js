/* AI Enrichment Engine */

class AIEnrichmentEngine {

constructor(){
this.domains = {
"gmail.com":"Personal",
"hotmail.com":"Personal",
"outlook.com":"Personal",
"yahoo.com":"Personal"
};
}

extractDomain(email){

if(!email) return null;

const parts = email.split('@');

return parts[1] || null;

}

inferCompanyFromEmail(email){

const domain = this.extractDomain(email);

if(!domain) return null;

if(this.domains[domain]) return null;

const company = domain.split('.')[0];

return company.charAt(0).toUpperCase()+company.slice(1);

}

inferCountryFromPhone(phone){

if(!phone) return null;

if(phone.startsWith('+54')) return 'Argentina';
if(phone.startsWith('+1')) return 'USA';
if(phone.startsWith('+34')) return 'España';

return null;

}

inferSeniority(cargo){

if(!cargo) return null;

cargo = cargo.toLowerCase();

if(cargo.includes('ceo')) return 'C-Level';
if(cargo.includes('director')) return 'Director';
if(cargo.includes('gerente')) return 'Manager';
if(cargo.includes('jefe')) return 'Manager';

return 'Staff';

}

enrich(contact){

return {
...contact,
inferredCompany: contact.company || this.inferCompanyFromEmail(contact.email),
country: this.inferCountryFromPhone(contact.phone),
seniority: this.inferSeniority(contact.cargo)
};

}

}

window.AIEnrichmentEngine = AIEnrichmentEngine;
