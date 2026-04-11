/* CRM Interactions Module */

class CRMInteractions {

constructor(){
this.interactions = [];
}

addInteraction(data){

const interaction = {
id: Date.now(),
date: new Date().toISOString(),
...data
};

this.interactions.push(interaction);

return interaction;

}

getByContact(contactId){
return this.interactions.filter(i=>i.contactId === contactId);
}

getFollowUps(){

const today = new Date();

return this.interactions.filter(i=>{
if(!i.followUp) return false;
return new Date(i.followUp) <= today;
});

}

}

window.CRMInteractions = CRMInteractions;
