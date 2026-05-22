function check() {
    const user = document.getElementById('user').value.toUpperCase();
    const pass = document.getElementById('pass').value;

    if (user === "NOVIO" && pass === "VIERNES01") {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('rayo').style.display = 'none';
        document.getElementById('sally').style.display = 'none';
    } else {
        alert("¡Esa no es la ruta correcta!");
    }
}

function iniciarRecorrido() {
    document.getElementById('pantalla-pregunta').style.display = 'none';
    document.getElementById('contenedor-estaciones').style.display = 'block';
    document.getElementById('contenedor-estaciones').innerHTML = "<h1>¡Comencemos la carrera!</h1>";
}
