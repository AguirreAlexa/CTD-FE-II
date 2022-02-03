/*
- que el usuario pueda elegir piedra, papel o tijera
- que la computadora tenga una eleccion random
- validar lo ingresado por el usuario
    - volver a preguntar si fue incorrecto
- mostrar un resultado comparando las elecciones
- mostrar el resultado al usuario
- tener un contador con las victorias de cada uno
*/

const MSJ_WIN = "Ganasteee!! 😎";
const MSJ_LOSE = "Que lastima perdiste!Vuelva a intentar 😐";
const MSJ_DRAW = "Que parejo, fue empate!! 🙄";
const CANT_JUGADAS = 3;

const scores = {
    player: 0,
    pc: 0
}

for (let i = 0; i < CANT_JUGADAS; i++) {
    /* ----------------------- elecciones de los jugadores ---------------------- */
    //TODO: validar la entrada
    let usuario;
    do{
        usuario = parseInt(prompt("Seleccione unicamente: piedra(1), papel(2) o tijera (3)"));
    }while(isNaN(usuario) || ( usuario < 1 || usuario > 3))

    let computadora = parseInt(Math.random() * 3 + 1);
    console.log(computadora);

    let resultado = "No hay resultado aun."

    /* ----------------------- comparaciones de resultado ----------------------- */
    if (usuario === computadora) {
        resultado = MSJ_DRAW
    } else if ((usuario === 1 && computadora === 3) || (usuario === 2 && computadora === 1) || (usuario === 3 && computadora === 2)) {
        resultado = MSJ_WIN;
        scores.player++;
    } else {
        resultado = MSJ_LOSE;
        scores.pc++;
    }

    /* -------------------- mostrandole resultado al usuario -------------------- */
    alert(resultado)
}

/* ------------------------ mostrar resultado global ------------------------ */
if(scores.player == scores.pc){
    alert("Empate en el resultado global.")
}else if(scores.player > scores.pc){
    alert("Te llevaste la partida, gran victoria globa!")
}else{
    alert("Una pena pero perdiste en el global.")
}