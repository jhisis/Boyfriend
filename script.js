function check() {
    if(document.getElementById('user').value === "NOVIO" && document.getElementById('pass').value === "VIERNES01") {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert("¡Intenta de nuevo!");
    }
}
