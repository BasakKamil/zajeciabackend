
window.onload=function(){
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
    const salary = document.getElementById('salary').value; 
    if(salary<=2000){
        log.textContent = `Jestes biedny`;
    }
    else{
        log.textContent = `Jestes bogaty`; 
    }
    
    event.preventDefault();
    }
}