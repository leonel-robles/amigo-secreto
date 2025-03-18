// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Almacenar los nombres de los amigos

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;
    const listaAmigosElement = document.getElementById("listaAmigos");

    if (nombreAmigo === "" || nombreAmigo == null) {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución de la función si el campo está vacío
    }

    amigos.push(nombreAmigo); // Añadir el nombre al array de amigos

    document.querySelector('#amigo').value = '';
    mostrarListaDeAmigos();

}

function mostrarListaDeAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento de la lista.

    if (listaAmigos) {
        listaAmigos.innerHTML = ''; // Limpia el contenido existente de la lista.

        for (let i = 0; i < amigos.length; i++) {
            const nombreAmigo = amigos[i]; // Obtiene el nombre del amigo actual.
            const nuevoItemLista = document.createElement('li'); // Crea un nuevo elemento de lista.
            nuevoItemLista.textContent = nombreAmigo; // Establece el texto del elemento de lista.
            listaAmigos.appendChild(nuevoItemLista); // Agrega el elemento de lista a la lista HTML.
        }
    } 
}

function obtenerAmigoAleatorio() {
    if (amigos.length === 0) {
        alert("No has agregado a ningun amigo");
        return null;
    }

    // Generar un índice aleatorio dentro del rango del array.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Devolver el nombre del amigo ubicado en el índice aleatorio.
    return amigos[indiceAleatorio];
}

function mostrarAmigoSorteado(amigo) {
    const resultadoDiv = document.getElementById('resultado'); // Obtiene el elemento con el ID 'resultado'.

    resultadoDiv.innerHTML = `El amigo secreto sorteado es: ${amigo}`;
    
}

// Ejemplo de cómo usar esta función dentro de tu lógica de sorteo:

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, añade al menos dos amigos para realizar el sorteo.");
        return;
    }

    const amigoSorteado = obtenerAmigoAleatorio();

    if (amigoSorteado) {
        mostrarAmigoSorteado(amigoSorteado); // Llama a la función para mostrar el resultado.
    } else {
        console.log("No se pudo obtener un amigo para sortear (posiblemente la lista está vacía).");
    }

    limpiarDatos();
    
}

function limpiarDatos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    amigos=[];
}