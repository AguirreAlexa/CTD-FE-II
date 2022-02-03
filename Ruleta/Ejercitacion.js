//1. Tragamonedas

const premioTotal = 2500;
const casilla = 10;

function calcular(aciertos){
    let porcentaje = (aciertos/casilla);
    return "El monto del premio es: " + (porcentaje*premioTotal);
};

console.log(calcular(5));

//2. Lotería

function resultadoLoteria(sueño){
    let premio;
    
    if(sueño === undefined){
        return "Elemento inválido";
    }else{
        let loteria = parseInt(Math.random()*4);
        switch(loteria){
            case 0: premio = "gana $1000"; break;
            case 1: premio = "gana $10000"; break;
            case 2: premio = "gana $10000"; break;
            case 3: premio = "gana $100000"; break;
        }
        return "Tu sueño era: " + sueño + " y " + premio;
    }
}
console.log(resultadoLoteria("Perros"));
console.log(resultadoLoteria());

//3. Ruleta

const finalRuleta = 25;

function tirarRuleta(){
    let ruleta = parseInt(Math.random()*26);
    for (let index = 1; index <= finalRuleta; index++) {
        if(ruleta === index){
            console.log("Numero ganador: " + ruleta);
        }else{
            console.log(index);
        } 
    }
}

tirarRuleta();