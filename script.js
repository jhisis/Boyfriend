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


// Estas son las fotos que tienes en tu carpeta images/
const imagenes = [
    'BESO.jpeg', 
    'LUNA.jpeg', 
    'MERCADO.jpeg', 
    'MIRADOR1.jpeg', 
    'MIRADOR2.jpeg', 
    'PUENTE.jpeg', 
    'SELFIE.jpeg', 
    'SELFIE2.jpeg', 
    'SELFIE3.jpeg', 
    'VIDEOLLAMADA.jpeg', 
    'VIDEOLLAMADA2.jpeg'
];

function cargarEstacion(i) {
    const contenedor = document.getElementById('estacion-content');
    if (i < estaciones.length) {
        contenedor.innerHTML = `
            <h2>${estaciones[i].titulo}</h2>
            <p>${estaciones[i].texto}</p>
            <button onclick="siguienteEstacion()" style="background: #ff416c; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;">Siguiente →</button>
        `;
    } else {
        // Al llegar a la meta:
        contenedor.innerHTML = `<h2>¡Meta Alcanzada!</h2><p>Gracias por recorrer este camino conmigo.</p>`;
        iniciarLluviaDeFotos(); // Llama a la función de las fotos
    }
}

function iniciarLluviaDeFotos() {
    // Vamos a mostrar 10 fotos de tu lista
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            // Usamos la carpeta 'images/' y el nombre exacto de tu archivo
            img.src = 'images/' + imagenes[i % imagenes.length];
            img.className = 'foto-voladora';
            
            // Posición aleatoria horizontal
            img.style.left = Math.random() * 80 + 'vw';
            // Retraso para que no salgan todas a la vez
            img.style.animationDelay = (i * 0.4) + 's';
            
            document.body.appendChild(img);
            
            // Eliminar la foto después de que termine la animación (6 segundos)
            setTimeout(() => img.remove(), 6000);
        }, i * 500);
    }
}
