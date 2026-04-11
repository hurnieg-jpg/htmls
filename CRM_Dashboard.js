/* CRM Dashboard Engine */

class CRMDashboard {

constructor(contacts, interactions){
this.contacts = contacts || [];
this.interactions = interactions || [];
}

getTotalContacts(){
return this.contacts.length;
}

getActiveLeads(){
return this.contacts.filter(c=>c.status !== 'Ganado' && c.status !== 'Perdido').length;
}

getWonDeals(){
return this.contacts.filter(c=>c.status === 'Ganado').length;
}

getLostDeals(){
return this.contacts.filter(c=>c.status === 'Perdido').length;
}

getConversionRate(){

const won = this.getWonDeals();
const total = this.contacts.length;

if(total === 0) return 0;

return Math.round((won/total)*100);

}

getTodayActivity(){

const today = new Date().toISOString().split('T')[0];

return this.interactions.filter(i=>i.date.startsWith(today)).length;

}

summary(){

return {
contacts:this.getTotalContacts(),
active:this.getActiveLeads(),
won:this.getWonDeals(),
lost:this.getLostDeals(),
conversion:this.getConversionRate(),
activity:this.getTodayActivity()

};

}

}

window.CRMDashboard = CRMDashboard;
