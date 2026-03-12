const menuLineas = document.querySelector('.lineas3');
const domLineas = document.querySelector('.domLineas');
const domLineasDropbtn = document.querySelector('.domLineas-dropbtn');
const domLineasDropdownContent = document.querySelector('.domLineas-dropdown-content');

menuLineas.addEventListener('click', toggleMenu);
domLineasDropbtn.addEventListener('click', toggleServiciosMobile);

const isIndex = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

function toggleMenu(){
    domLineas.classList.toggle('inactive');
    if(isIndex){
        if(domLineas.classList.contains('inactive')){
            menuLineas.src = './icons/menu1.webp';
        } else {
            menuLineas.src = './icons/menu.webp';
        }
    }
}

function toggleServiciosMobile(){
    domLineasDropdownContent.classList.toggle('inactive');
    domLineasDropbtn.classList.toggle('open');
}
