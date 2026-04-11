/* CRM WhatsApp First Module */

class CRMWhatsApp {

constructor(){
this.templates = [
"Hola {{nombre}}, te escribo por...",
"Hola {{nombre}}, te envio la info que hablamos",
"Hola {{nombre}}, hago seguimiento"
];
}

createLink(phone, message){

if(!phone) return null;

const text = encodeURIComponent(message || 'Hola');

return `https://wa.me/${phone}?text=${text}`;

}

quickMessage(contact, templateIndex = 0){

const template = this.templates[templateIndex] || this.templates[0];

const message = template.replace('{{nombre}}', contact.name || '');

return this.createLink(contact.phone, message);

}

addTemplate(text){
this.templates.push(text);
}

}

window.CRMWhatsApp = CRMWhatsApp;
