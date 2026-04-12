/* CRM V2 - Roles & Permissions Engine */

class CRMRolesEngine {

constructor(){
this.roles = {
admin:{
contacts:true,
edit:true,
delete:true,
reports:true,
users:true
},
manager:{
contacts:true,
edit:true,
delete:false,
reports:true,
users:false
},
seller:{
contacts:true,
edit:true,
delete:false,
reports:false,
users:false
},
viewer:{
contacts:true,
edit:false,
delete:false,
reports:false,
users:false
}
};
}

getRole(role){
return this.roles[role] || this.roles.viewer;
}

can(role,permission){

const r = this.getRole(role);

return !!r[permission];

}

addRole(name,permissions){
this.roles[name] = permissions;
}

getAll(){
return this.roles;
}

}

window.CRMRolesEngine = CRMRolesEngine;
