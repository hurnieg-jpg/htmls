/* CRM V2 - Authentication Engine */

class CRMAuth {

constructor(){
this.users = this.loadUsers();
this.session = null;
}

loadUsers(){
try{
return JSON.parse(localStorage.getItem('crm_users')) || [];
}catch(e){
return [];
}
}

saveUsers(){
localStorage.setItem('crm_users', JSON.stringify(this.users));
}

register(user){

user.id = Date.now();
user.role = user.role || 'user';

this.users.push(user);
this.saveUsers();

return user;

}

login(email, password){

const user = this.users.find(u => u.email === email && u.password === password);

if(user){
this.session = user;
localStorage.setItem('crm_session', JSON.stringify(user));
return user;
}

return null;

}

logout(){
this.session = null;
localStorage.removeItem('crm_session');
}

current(){

if(this.session) return this.session;

try{
this.session = JSON.parse(localStorage.getItem('crm_session'));
return this.session;
}catch(e){
return null;
}

}

isAdmin(){

const user = this.current();

return user && user.role === 'admin';

}

}

window.CRMAuth = CRMAuth;
