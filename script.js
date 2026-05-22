function check() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if (user === "NOVIO" && pass === "VIERNES01") {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        // OCULTAMOS TAMBIÉN LOS PERSONAJES SI QUIERES
        document.getElementById('rayo').style.display = 'none';
        document.getElementById('sally').style.display = 'none';
    } else {
        alert("¡Esa no es la ruta correcta!");
    }
}
