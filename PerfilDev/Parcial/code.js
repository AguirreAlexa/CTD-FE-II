let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

/*PUNTO 1*/
let anioActual = new Date();

function obtenerDatosDelUsuario() {
  let nombre = prompt("Ingrese su nombre: ");
  datosPersona.nombre = nombre;

  let nacimiento = prompt("Ingrese su año de nacimiento: ");
  datosPersona.edad = anioActual.getFullYear() - nacimiento;

  let ciudad = prompt("Ingrese su lugar de residencia: ");
  datosPersona.ciudad = ciudad;

  let interesPorJs = confirm("Le interesa javascript?");
  if(!interesPorJs){
    datosPersona.interesPorJs = "No";
  }else{
    datosPersona.interesPorJs = "Sí";
  }
}
console.log(datosPersona);

/*PUNTO 2*/
function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  document.querySelector("#nombre").appendChild(document.createTextNode(datosPersona.nombre));
  document.querySelector("#edad").appendChild(document.createTextNode(datosPersona.edad));
  document.querySelector("#ciudad").appendChild(document.createTextNode(datosPersona.ciudad));
  document.querySelector("#javascript").appendChild(document.createTextNode(datosPersona.interesPorJs));
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

/*PUNTO 3*/
function recorrerListadoYRenderizarTarjetas() {

  let fila = document.querySelector("#fila");

  listado.forEach(materia => {
    fila.innerHTML += 
  `<section class="caja">
    <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
    <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
    <p class="bimestre">Bimestre: ${materia.bimestre}</p>
  </section>`
  });
}

 /*PUNTO 4*/
function mostrarYOcultarDescripcionCompleta() {

 let vermas = document.querySelector(".sobre-mi").classList.toggle("sobre-mi-completo");
}
