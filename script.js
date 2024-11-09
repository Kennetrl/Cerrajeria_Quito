const menuLineas = document.querySelector('.lineas3');
const domLineas = document.querySelector('.domLineas');

menuLineas.addEventListener('click', toggleMenu);

function toggleMenu(){
    domLineas.classList.toggle('inactive');
}
