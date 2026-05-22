function check() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if (user === "NOVIO" && pass === "VIERNES01") {
        // Escondemos el login
        document.getElementById('login-box').style.display = 'none';
        
        // Mostramos el dashboard que ya vive en el index.html
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert("¡Esa no es la ruta correcta! Intenta de nuevo.");
    }
}
