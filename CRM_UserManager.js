/* CRM V2 - User Manager */

class CRMUserManager {

constructor(){
this.users = this.load();
}

load(){
try{
return JSON.parse(localStorage.getItem('crm_users')) || [];
}catch(e){
return [];
}
}

save(){
localStorage.setItem('crm_users', JSON.stringify(this.users));
}

getAll(){
return this.users;
}

getById(id){
return this.users.find(u => u.id === id);
}

create(user){

user.id = Date.now();
user.role = user.role || 'user';
user.active = true;

this.users.push(user);
this.save();

return user;

}

update(id,data){

const user = this.getById(id);

if(!user) return null;

Object.assign(user,data);

this.save();

return user;

}

remove(id){

this.users = this.users.filter(u => u.id !== id);

this.save();

}

getSellers(){

return this.users.filter(u => u.role === 'seller');

}

getAdmins(){

return this.users.filter(u => u.role === 'admin');

}

}

window.CRMUserManager = CRMUserManager;
