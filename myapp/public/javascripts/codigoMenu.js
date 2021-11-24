let tarea1 = document.getElementById("alta");
let tarea2 = document.getElementById("baja");

function irAlta() {
    location.href = 'administradorSitioAlta';
}

function irBaja() {
    location.href = 'administradorSitioBaja';
}

tarea1.addEventListener('click',irAlta,true);
tarea2.addEventListener('click',irBaja,true);