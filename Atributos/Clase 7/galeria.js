const urlImagenes = [];

const imagenes = document.querySelectorAll('.imagen');

//poblar el array
for(let i=0; i<imagenes.length; i++){
    let url = prompt("Ingrese un url de imagen!");
    urlImagenes.push(url);
    console.log(i+1);
}

let rutas = document.querySelectorAll(".rutas-img");

//ahora agregamos a cada nodo el atributo 'src', y a cada a el atributo 'href'
for(let i=0; i<urlImagenes.length; i++){
    let nodoImagen = document.querySelector(`#imagen-${i+1}`);
    nodoImagen.setAttribute('src',urlImagenes[i]);
    rutas[i].setAttribute("href", urlImagenes[i]);
    rutas[i].setAttribute("target", "_blank");
}

/* ETAPA 3
- Nodo padre: #contenedor
- Nodo hijo repetitivo: div .tarjeta
- Explicación: Al ser que la estructura de los divs de las tarjetas es siempre la misma,
se puede generar una plantilla que se inserte en el HTML según la cantidad de fotos subidas 
por el usuario. También podemos hacer el usuario pueda subir todas las fotos que quiera (con 
un límite de 50) y si no quiere más, puede cancelarlo.
*/

// Intento de resolución de cambios pensados

// const urlImagenes = [];

// const imagenes = 50;

// for (let i = 0; i < imagenes; i++) {
//     let url = prompt("Ingrese un url de imagen! Si no querés subir más, hacé click en Cancelar")
//     if (url) {
//     urlImagenes.push(url);
//     console.log(i+1);
//     } else {
//         break;
//     } 
// }

// let contenedor = document.createElement('div').classList.add('contenedor');
// document.querySelector('body').appendChild(contenedor);

// for(let i=0; i<urlImagenes.length; i++) {
//     let plantilla = `<div class="tarjeta">
//     <a class="rutas_img" href=${urlImagenes[i]} target="_blank">
//         <img class="imagen" id="imagen-${i+1}" alt="imagen ${i+1}" src=${urlImagenes[i]}>
//     </a>
// </div>`

//     contenedor.appendChild(plantilla); //Aplicando .appendChild 

//     document.querySelector("body").innerHTML += plantilla //no logramos agregarlo con el .appendChild. Sospechamos que plantilla no es un nodo.
// }
