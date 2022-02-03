const listadoTareas = [
    {
        descripcion: "Mi hermosa tarea 1",
        fecha: "19/04/20"
    },
    {
        descripcion: "Mi hermosa tarea 2",
        fecha: "19/04/20"
    },
    {
        descripcion: "Mi hermosa tarea 3",
        fecha: "19/04/20"
    }
]


listadoTareas.forEach(tarea =>{
    //llamar a la funcion de renderizado
    renderizarTarea(tarea);
})


function renderizarTarea(tarea) {
    //pintar en pantalla la tarea(dentro del contenedor)
    console.log(tarea);
    let tareas = document.querySelector('.tareas-pendientes')
    tareas.innerHTML += `<li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">${tarea.descripcion}</p>
        <p class="timestamp">${tarea.fecha}</p>
      </div>
    </li>`
}