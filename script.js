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

    function iniciarRecorrido() {
    // Ocultamos la pregunta
    document.getElementById('pantalla-pregunta').style.display = 'none';
    
    // Mostramos el contenedor donde irán las estaciones
    document.getElementById('contenedor-estaciones').style.display = 'block';
    
    // Aquí podemos disparar la lógica para cargar las 5 estaciones
    console.log("El usuario aceptó recorrer la vida juntos.");
}
}
