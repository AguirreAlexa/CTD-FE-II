//obtener el elemento contenedor
let contenedor = document.getElementById("contenedor")

//pedirle al usuario que ingrese una pregunta
let pregunta = prompt("Ingresá una pregunta")

//inyectar en el contenedor un parrafo con la pregunta del usuario
contenedor.innerHTML = `<p>${pregunta}</p>`

let respuesta = prompt("Ingrese la respuesta");
//armado del nodo parrafo completo
let elementoParrafo = document.createElement('p');
let nodoTexto = document.createTextNode(respuesta);
elementoParrafo.appendChild(nodoTexto);

//agregamos al contenedor
contenedor.appendChild(elementoParrafo);




