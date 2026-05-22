function check() {
    if(document.getElementById('user').value === "NOVIO" && document.getElementById('pass').value === "VIERNES01") {
        window.location.href = "dashboard.html"; // Redirige a la página de las 5 estaciones
    } else {
        alert("¡Esa no es la ruta correcta!");
    }
}
