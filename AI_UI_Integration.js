/* UI Integration - Smart Clean Button */

(function(){

window.runFullAI = async function(contacts){

if(!window.AIFullPipeline){
console.error('Pipeline not loaded');
return;
}

const pipeline = new window.AIFullPipeline();

const result = await pipeline.process(contacts);

if(window.updateDashboard){
window.updateDashboard({
quality: result.quality?.average?.toFixed(0) + '%',
duplicates: result.duplicates?.length || 0,
enriched: result.contacts?.length || 0,
confidence: result.quality?.average?.toFixed(0) + '%'
});
}

return result;

}

window.createSmartButton = function(){

const btn = document.createElement('button');
btn.innerText = 'Limpieza Inteligente Total';
btn.style.padding = '12px 20px';
btn.style.fontSize = '16px';
btn.style.margin = '10px';

btn.onclick = async ()=>{

if(!window.contacts){
alert('No hay contactos cargados');
return;
}

await window.runFullAI(window.contacts);

alert('Limpieza Inteligente completada');

};

document.body.appendChild(btn);

}

})();
