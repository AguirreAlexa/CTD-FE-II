//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let card = document.getElementById("tarjeta");
card.classList.toggle("card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
card.querySelector("img").setAttribute("src" , "https://www.youtube.com/img/desktop/yt_1200.png")

//3- Quitarle al titulo la clase que le estÃ¡ dando un formato feo
card.querySelector("h1").classList.remove("titulo-feo")

//4- Chequear si el link a youtube posee o no el atributo href
let link = document.querySelector("#link_youtube")
let existe = link.hasAttribute("href")

//5- Obtener el href del link a wikipedia y mostrarlo por consola
let linkw = document.querySelector("#link_wikipedia")
let existew = linkw.getAttribute("href")