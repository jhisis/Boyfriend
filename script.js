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
