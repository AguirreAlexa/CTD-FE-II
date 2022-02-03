const form = document.querySelector('.search');
const inputBusqueda = document.querySelector('#busqueda');
const busquedasRealizadas = document.querySelector('#busquedas-realizadas')

let historial = [];

// chequeo la data en Storage, porque si encuentra la quiero almacenar en mi array
let dataStorage = JSON.parse(localStorage.getItem('datos')) //[revista, papel, pelicula]

//Al recargar la página vuelco el array anterior del local storage en el historial vacio.
if (dataStorage) {
    historial = dataStorage;
    renderizarBusquedas(historial); //Muestra las busquedas anteriores en la seccion historial cada vez que se reinicia.
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(captarDatos());
    historial.push(captarDatos());

    //guardarlo en localstorage
    localStorage.setItem('datos', JSON.stringify(historial));

    realizarBusqueda(captarDatos());

    //limpiar el form
    form.reset();
});

function captarDatos() {
    let termino = inputBusqueda.value.trim();
    return termino;
}

function realizarBusqueda(textoBuscado) {
    location.replace(`https://www.google.com/search?q=${textoBuscado}`)
}

function renderizarBusquedas(listado) {
    listado.forEach(busqueda => {
        let nodoTexto = document.createTextNode(busqueda);
        let nodoParrafo = document.createElement('p');
        nodoParrafo.appendChild(nodoTexto); 
        busquedasRealizadas.appendChild(nodoParrafo);
    });
}