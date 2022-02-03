/*
- que el usuario pueda elegir piedra, papel o tijera
- que la computadora tenga una elección random
- validar lo ingresado por el usuario
- volver a preguntar si fue incorrecto
- mostrar un resultado comparando las elecciones
- mostrar el resultado al usuario
- contador con las victorias de cada uno
*/

let resultado = "No hay resultado aún."
let puntosUsuario = 0
let puntosComputadora = 0
do {
    jugar()
} while (window.confirm("¿Quiere seguir jugando?"));

function jugar () {
    do {
        let usuario = parseInt(prompt("Seleccione: Piedra (1), papel (2) o tijera (3)"));
        let computadora = parseInt(Math.random() * 3 + 1);
        if (usuario < 1 || usuario > 3 || isNaN(usuario) === true) { 
            alert("Por favor ingrese datos correctos.");
        } else {
            if (usuario === computadora) {
                resultado = "Empate";
            }
            if (usuario === 1) {
                if (computadora === 2) {
                    resultado = "Derrota";
                    puntosComputadora ++;
                }else if (computadora === 3) {
                    resultado = "Triunfo";
                    puntosUsuario ++;
                }
            }
            if (usuario === 2) {
                if (computadora === 1) {
                    resultado = "Triunfo";
                    puntosUsuario ++;
                }
                if (computadora === 3) {
                    resultado = "Derrota";
                    puntosComputadora ++;
                }
            }
            if (usuario === 3) {
                if (computadora === 1) {
                    resultado = "Derrota";
                    puntosComputadora ++;
                }
                if (computadora === 2) {
                    resultado = "Triunfo";
                    puntosUsuario ++;
                }
            }
            alert("Resultado de la partida: " + resultado + 
            ".\nUsted ha elegido " + usuario + " y la computadora " + computadora + 
            ".\nPuntos del usuario: " + puntosUsuario + 
            ".\nPuntos de la computadora: " + puntosComputadora + ".")
        }
    } while (resultado === "No hay resultado aún.");
}

