const apiURL = 'https://dog.ceo/api/breeds/image/random'

function consultaApi() {
    fetch(apiURL)
        .then(respuesta => {
            console.log("parseando la carta")
            return respuesta.json()
        }).then(info => {
            //info lista para manipular
            console.log(info);
            renderizarPerro(info.message);

        }).catch(error => {
            console.log("salio por el catch");
            console.log(error);
        })
}

function renderizarPerro(url) {
    const imagen = document.querySelector('.tarjeta img')

    // imagen.setAttribute('src', url)
    imagen.src = url;
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    consultaApi();
});