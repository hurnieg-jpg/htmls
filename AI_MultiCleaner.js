/* Multi AI Contact Cleaner Engine */

class MultiAICleaner {

constructor(config){
this.config = config || {};
this.providers = [];
}

addProvider(provider){
this.providers.push(provider);
}

async cleanContact(rawContact){

const results = await Promise.all(
this.providers.map(p=>this.askAI(p,rawContact))
);

return this.consensus(results);

}

async askAI(provider,data){

try{

const response = await fetch(provider.url,{
method:'POST',
headers:{
'Content-Type':'application/json',
'Authorization':`Bearer ${provider.key}`
},
body:JSON.stringify({
model:provider.model,
messages:[{
role:'user',
content:`Normalize this contact into JSON: ${JSON.stringify(data)}`
}]
})
});

return await response.json();

}catch(e){
return null;
}

}

consensus(results){

const filtered = results.filter(Boolean);

if(filtered.length===0) return null;

// simple consensus
return filtered[0];

}

validateWhatsApp(number){

let clean = number.replace(/\D/g,'');

if(clean.startsWith('54') && clean.length>=12){
return '+'+clean;
}

return null;

}

}

window.MultiAICleaner = MultiAICleaner;
