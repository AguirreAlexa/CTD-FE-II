console.log("hello");

window.addEventListener('load', function(){
    console.log("window cargada");
})

let contador = 0;
let estado = true;

const cuenta = document.querySelector('#cuenta')
const btn = document.querySelector('#btn-stop')

cuenta.innerText = contador;

btn.addEventListener('click', function(evento){
    clearInterval(timer);
    console.log("Se frenó el timer");
})

const link = document.querySelector('a')

link.addEventListener('click', function(event){
    event.preventDefault();
    link.style.fontSize = '2rem'
})
//escuchar cuando te aprita la barra espaciadora + frenar
window.addEventListener('keypress', function(event){
    console.log(event);
    if(event.code=="Space" && estado){
        clearInterval(timer)
        estado=false;
    }else if(event.code=="Space" && !estado){
        arrancar()
        estado=true
    }
    
})

let timer;

arrancar();

function arrancar() {
    timer = setInterval(function(){
        contador++;
        cuenta.innerText = contador;
        
    },1);
}



console.log("posterior al interval");









