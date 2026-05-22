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
    { titulo: "Estación 1: El Inicio", texto: "Nuestro viaje comienza aquí. Todo motor necesita una guía divina." },
    { titulo: "Estación 2: El Taller del Perdón", texto: "70 veces 7. Aquí aprendemos que el perdón es nuestra mejor herramienta." },
    { titulo: "Estación 3: Combustible", texto: "La oración es nuestra parada para recargar energía y seguir adelante." },
    { titulo: "Estación 4: Navegando Curvas", texto: "Unidos en la tormenta, nada nos detiene. ¡Seguimos acelerando!" },
    { titulo: "Estación 5: Horizonte Eterno", texto: "Nuestra meta final es el amor eterno. ¿Estamos listos?" }
];

let indiceActual = 0;

function iniciarRecorrido() {
    // 1. Ocultar pregunta
    document.getElementById('pantalla-pregunta').style.display = 'none';
    
    // 2. Mostrar la estructura de la pista que definimos en HTML
    const contenedorPista = document.getElementById('contenedor-estaciones');
    contenedorPista.style.display = 'block';
    
    // 3. Inyectar el diseño de la pista
    contenedorPista.innerHTML = `
        <div class="pista-container">
            <div id="estacion-content" class="estacion-box">
                </div>
        </div>
    `;
    
    // 4. Cargar la primera estación
    cargarEstacion(0);
}

function cargarEstacion(i) {
    const contenedor = document.getElementById('estacion-content');
    if (i < estaciones.length) {
        contenedor.innerHTML = `
            <h2>${estaciones[i].titulo}</h2>
            <p>${estaciones[i].texto}</p>
            <button onclick="siguienteEstacion()" style="margin-top:15px; cursor:pointer;">Siguiente Estación →</button>
        `;
    } else {
        contenedor.innerHTML = `<h2>¡Meta Alcanzada!</h2><p>Gracias por recorrer este camino conmigo.</p>`;
    }
}

function siguienteEstacion() {
    indiceActual++;
    cargarEstacion(indiceActual);
}


function iniciarMosaicoDeFotos() {
    const imagenes = [
        'BESO.jpeg', 'LUNA.jpeg', 'MERCADO.jpeg', 'MIRADOR1.jpeg', 
        'MIRADOR2.jpeg', 'PUENTE.jpeg', 'SELFIE.jpeg', 'SELFIE2.jpeg', 
        'SELFIE3.jpeg', 'VIDEOLLAMADA.jpeg', 'VIDEOLLAMADA2.jpeg'
    ];

    // Ocultar la pista para que el mosaico sea el protagonista
    document.getElementById('contenedor-estaciones').style.display = 'none';

    imagenes.forEach((foto, index) => {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = 'images/' + foto;
            img.className = 'foto-polaroid';
            
            // Posicionamiento calculado para que se dispersen (evitando el centro)
            const posX = (index % 2 === 0) ? (index * 5) : (80 - index * 5);
            const posY = (index * 8); 
            
            img.style.left = posX + 'vw';
            img.style.top = posY + 'vh';
            
            document.body.appendChild(img);
        }, index * 400); // Aparecen una a una con suavidad
    });
}
