let encabezado = document.getElementById("titulo");
let cerrar = document.getElementById("cerrar-sesion");

function irHome() {
    location.href = 'administradorSitioMenu';
}

function cerrarSesion() {
    location.href = '/';
}

encabezado.addEventListener('click',irHome,true);
cerrar.addEventListener('click',cerrarSesion,true);