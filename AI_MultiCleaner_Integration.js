/* Integration Layer for ContactUnifier */

(async function(){

if(!window.MultiAICleaner){
console.warn('MultiAICleaner not loaded');
return;
}

const cleaner = new MultiAICleaner();

// Example providers (user keys loaded from config later)
window.MultiCleaner = cleaner;

window.cleanContactsWithAI = async function(contacts){

const results = [];

for(const c of contacts){

const cleaned = await cleaner.cleanContact(c);

results.push({
original:c,
cleaned,
confidence:calculateConfidence(cleaned)
});

}

return results;

}

function calculateConfidence(contact){

let score = 0;

if(contact?.name) score+=20;
if(contact?.lastname) score+=20;
if(contact?.company) score+=20;
if(contact?.phone) score+=20;
if(contact?.email) score+=20;

return score;

}

})();
