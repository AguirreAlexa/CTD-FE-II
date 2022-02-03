//CAPTURANDO BLOQUES
const item = document.querySelectorAll("li");
console.log(item);

//ARRAY
const array = [
  "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  "No more than 2GB. All files in your account must fit your allotted storage space.",
  "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  "Can I cancel my subscription? Yes! Send us a message and we’ll process your request no questions asked.",
  "Chat and email support is available 24/7. Phone lines are open during normal business hours."
]

//EVENTOS
item.addEventListener("mouseover", colorNaranja());


item.addEventListener("click", function(evento){
    evento.preventDefault();

    negrita();
    renderizarInfo();
})


//FUNCIONES
 function colorNaranja(){
    item.style.color = "#FF9429";
}

 function negrita(){
    item.bold();
}

 function renderizarInfo() {
    const p = document.createElement("p");
    item.appendChild(p);


    array.forEach(info => {
      p.innerHTML += 
    `<p class="infoExtra">${info}</p>`
    });
}
   