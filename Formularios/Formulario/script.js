let usuario = {
    nombre: '',
    telefono: '',
    contrasenia: '',
    hobbies: [],
    nacionalidad: ''
}

//CAPTURANDO DATOS
const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const password = document.querySelector("#pass");
const tel = document.querySelector("#tel");
const checkboxes = document.getElementsByName('hobbies');
const radioButtons = document.getElementsByName('nacionalidad');

//NORMALIZANDO DATOS
function datos(){
    usuario.nombre = nombre.value.toUpperCase();
    usuario.contrasenia = password.value;
    usuario.telefono = tel.value;

    checkboxes.forEach(item => {
        if(item.checked){
            usuario.hobbies.push(item.parentNode.innerText.trim()); //MUY BUENO
        }
    });

    radioButtons.forEach(item => {
        if(item.checked){
            usuario.nacionalidad = item.parentNode.innerText.trim(); //MUY BUENO
        }
    });
}

form.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log(datos());
});

//VALIDANDO DATOS
// function validarDatos(){
//     if (nombre.value != "") {
//         usuario.nombre = nombre.value;
//     }else alert("Colocar un nombre")
//     if (pass.value.length > 8) {
//         usuario.pass = pass.value;
//     }else alert("El mínimo de caracteres es de 8")
//     if (tel.value.match(/^[0-9]+$/)) {
//         usuario.telefono = tel.value;
//     }
//     if (checkboxes != ) {

//     }
// }