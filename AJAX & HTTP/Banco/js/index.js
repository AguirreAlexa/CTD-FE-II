console.log("Promesas");
const pantallaUI = document.querySelector('.bancaMobile');

// estamos simulando una peticion al servidor que no sabemos como va a resultar ni cuanto va a tardar
const promesa = new Promise((resolve, reject)=>{
    // simulamos info en la base de datos
    let usuario = {
        estado: "activa",
        nombre: "Michael Scott",
        fondos: 0
    }

    setTimeout(function(){
        if(usuario.estado == "inactiva"){
            reject({
                mensaje: "Rechazado por cuenta inactiva.",
                codigo: "X100"
            });
        } else if( usuario.fondos < 1){
            reject({
                mensaje: "Rechazado por falta de fondos.",
                codigo: "Z250"
            });
        } else {
            resolve({
                mensaje: "Pago procesado con éxito.",
                codigo: "Y300"
            });
        }
    }, 4000);
});

//la ejecuto sin esperar
console.log(promesa);

//trabajamos correctamente la promesa
promesa.then( respuesta =>{
    //hacemos algo con lo que salió por Resolve
    console.log(respuesta);
    console.log(respuesta.mensaje);
    pantallaUI.innerHTML = `<h5>${respuesta.mensaje}</h5>`
    pantallaUI.style.border='4px solid green';
}).catch( error => {
    //hacemos algo con lo que salió por Reject
    console.log(error);
    console.log(error.mensaje);
    pantallaUI.innerHTML = `<h5>${error.mensaje}</h5>`
    pantallaUI.style.border='4px solid red';
});