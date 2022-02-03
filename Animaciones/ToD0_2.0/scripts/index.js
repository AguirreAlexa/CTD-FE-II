if(!localStorage.user){
  location.replace('login.html')
};

window.addEventListener('load', function(){
  const userName = document.querySelector('.user-info p');
  const btnCerrar = document.querySelector('#closeApp');

  const deposito = JSON.parse(localStorage.getItem('user'));

  //renderizamos el nombre de usuario
  userName.innerText = deposito.name;
  btnCerrar.addEventListener('click', function(){
    //limpio el localStorage
    localStorage.clear();
    //envio al usuario a loggearse
    location.replace('login.html');
  })







})



//template de tarea
/* <li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">Mi hermosa tarea</p>
        <p class="timestamp">Creada: 19/04/20</p>
      </div>
    </li> */
