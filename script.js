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
    // Escondemos la pregunta
    document.getElementById('pantalla-pregunta').style.display = 'none';
    
    // Mostramos la primera estación
    // Asumiremos que crearemos un div con id "estacion-1"
    const contenedor = document.getElementById('contenedor-estaciones');
    contenedor.style.display = 'block';
    contenedor.innerHTML = `
        <div class="estacion-card">
            <h2>Estación 1: El Inicio en Dios</h2>
            <p>Nuestro viaje comienza aquí. Todo motor necesita una guía divina para no perderse en la ruta.</p>
            <button onclick="siguienteEstacion(2)">Ir a la Estación 2</button>
        </div>
    `;
}

function siguienteEstacion(num) {
    const contenedor = document.getElementById('contenedor-estaciones');
    // Aquí puedes personalizar el texto/foto de cada estación
    const estaciones = {
        2: "<h2>Estación 2: El Taller del Perdón</h2><p>70 veces 7. Aquí aprendemos que el perdón es nuestra mejor herramienta.</p><button onclick='siguienteEstacion(3)'>Siguiente</button>",
        3: "<h2>Estación 3: Combustible de Gracia</h2><p>La oración es nuestra parada para recargar energía.</p><button onclick='siguienteEstacion(4)'>Siguiente</button>",
        4: "<h2>Estación 4: Navegando Curvas</h2><p>Unidos en la tormenta, nada nos detiene.</p><button onclick='siguienteEstacion(5)'>Siguiente</button>",
        5: "<h2>Estación 5: Horizonte Eterno</h2><p>Nuestra meta final es el amor eterno. ¿Estamos listos?</p>"
    };
    
    contenedor.innerHTML = `<div class="estacion-card">${estaciones[num]}</div>`;
}
}
