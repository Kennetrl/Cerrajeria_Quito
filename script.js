const menuLineas = document.querySelector('.lineas3');
const domLineas = document.querySelector('.domLineas');
const domLineasDropbtn = document.querySelector('.domLineas-dropbtn');
const domLineasDropdownContent = document.querySelector('.domLineas-dropdown-content');

menuLineas.addEventListener('click', toggleMenu);
domLineasDropbtn.addEventListener('click', toggleServiciosMobile);

function toggleMenu() {
    domLineas.classList.toggle('inactive');
}

function toggleServiciosMobile() {
    domLineasDropdownContent.classList.toggle('inactive');
    domLineasDropbtn.classList.toggle('open');
}
