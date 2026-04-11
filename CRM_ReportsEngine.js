/* CRM Reports Engine */

class CRMReportsEngine {

constructor(contacts, interactions){
this.contacts = contacts || [];
this.interactions = interactions || [];
}

salesByStatus(){

const result = {};

this.contacts.forEach(c=>{
const status = c.status || 'Lead';
result[status] = (result[status] || 0) + 1;
});

return result;

}

salesBySeller(){

const result = {};

this.interactions.forEach(i=>{
const seller = i.seller || 'Sin asignar';
result[seller] = (result[seller] || 0) + 1;
});

return result;

}

lostReasons(){

const result = {};

this.contacts
.filter(c=>c.status === 'Perdido')
.forEach(c=>{

const reason = c.lostReason || 'Sin motivo';

result[reason] = (result[reason] || 0) + 1;

});

return result;

}

activityByDay(){

const result = {};

this.interactions.forEach(i=>{

const day = i.date.split('T')[0];

result[day] = (result[day] || 0) + 1;

});

return result;

}

summary(){

return {
status:this.salesByStatus(),
sellers:this.salesBySeller(),
lost:this.lostReasons(),
activity:this.activityByDay()

};

}

}

window.CRMReportsEngine = CRMReportsEngine;
