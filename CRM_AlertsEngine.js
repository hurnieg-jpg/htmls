/* CRM Alerts Engine */

class CRMAlertsEngine {

constructor(interactions){
this.interactions = interactions;
}

getTodayFollowups(){

const today = new Date().toISOString().split('T')[0];

return this.interactions.filter(i=>{
if(!i.followUp) return false;
return i.followUp.startsWith(today);
});

}

getOverdue(){

const today = new Date();

return this.interactions.filter(i=>{
if(!i.followUp) return false;
return new Date(i.followUp) < today;
});

}

getInactive(contacts, days = 7){

const limit = new Date();
limit.setDate(limit.getDate() - days);

return contacts.filter(c=>{
if(!c.lastInteraction) return true;
return new Date(c.lastInteraction) < limit;
});

}

summary(contacts){

return {
followupsToday:this.getTodayFollowups().length,
overdue:this.getOverdue().length,
inactive:this.getInactive(contacts).length

};

}

}

window.CRMAlertsEngine = CRMAlertsEngine;
