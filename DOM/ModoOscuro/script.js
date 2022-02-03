let modoOscuro = confirm("Cambiar a modo oscuro?");

let items = document.querySelectorAll('div .item');

if(modoOscuro){
    document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('h1').classList.add('h1-dark');

    for (let item of items){
        item.classList.add('item-dark', 'text-dark');
    }
}