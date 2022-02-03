window.addEventListener('load', function(){
    const form = document.forms[0];
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const btnSubmit = document.querySelector('form button');
    const spinner = document.querySelector('.spinner');

    const url = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

    function desactivarBoton() {
        //desabilitamos el boton de ingresar
        btnSubmit.setAttribute('disabled','');
        btnSubmit.style.opacity="0.5";
        spinner.classList.toggle('oculto');
    }
    
    function activarBoton() {
        //habilitamos el boton de ingresar
        btnSubmit.removeAttribute('disabled');
        btnSubmit.style.opacity="1"
        spinner.classList.toggle('oculto');
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log("submit");

        desactivarBoton();

        const payload = {
            email: email.value,
            password: password.value
        }

        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //lanzamos la peticion a la API
        fetch(url, settings)
        .then( response =>  response.json())
        .then( data => {
            console.log(data);

            const usuario = {
                jwt: data.jwt,
                name: email.value.split('@')[0]
            }

            if(data.jwt){
                //guardamos la data en el localStorage
                localStorage.setItem('user', JSON.stringify(usuario))
                location.replace('./index.html');
            }
            
        
            activarBoton();


            form.reset();

        })
    });




});