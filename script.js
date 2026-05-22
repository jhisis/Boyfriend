function check() {
    const user = document.getElementById('user').value.toUpperCase();
    const pass = document.getElementById('pass').value;

    if (user === "NOVIO" && pass === "VIERNES01") {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert("¡Esa no es la ruta correcta!");
    }
}

function iniciarRecorrido() {
    document.getElementById('pantalla-pregunta').style.display = 'none';
    document.getElementById('contenedor-estaciones').style.display = 'block';
    document.getElementById('contenedor-estaciones').innerHTML = "<h1>¡Comencemos la carrera!</h1>";
}

const estaciones = [
    { titulo: "Estación 1: Salida", texto: "Todo comienza con el amor de Dios. ¿Listo para arrancar?" },
    { titulo: "Estación 2: El Taller", texto: "El perdón es nuestro mantenimiento diario (70x7)." },
    { titulo: "Estación 3: Combustible", texto: "Nuestra oración nos mantiene en marcha." },
    { titulo: "Estación 4: Curva Peligrosa", texto: "Si nos desviamos, Su palabra nos guía." },
    { titulo: "Estación 5: Meta", texto: "Nuestro destino es una vida eterna juntos." }
];

let indiceActual = 0;

function cargarEstacion(i) {
    const contenedor = document.getElementById('estacion-content');
    if (i < estaciones.length) {
        contenedor.innerHTML = `
            <h2>${estaciones[i].titulo}</h2>
            <p>${estaciones[i].texto}</p>
            <button onclick="siguienteEstacion()">Siguiente →</button>
        `;
    } else {
        contenedor.innerHTML = `<h2>¡Meta Alcanzada!</h2><p>Gracias por recorrer este camino conmigo.</p>`;
    }
}

function siguienteEstacion() {
    indiceActual++;
    cargarEstacion(indiceActual);
}

// Modifica tu función iniciarRecorrido para que llame a la primera
function iniciarRecorrido() {
    document.getElementById('pantalla-pregunta').style.display = 'none';
    document.getElementById('contenedor-estaciones').style.display = 'block';
    cargarEstacion(0); // Llama a la primera estación
}
