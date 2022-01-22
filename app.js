//variables
const hambIcon = document.querySelector('#hamb__menu');
const menuLinks = document.querySelector('.navbar-menu');

const popMenu = () => {
    menuLinks.classList.toggle('active');
    hambIcon.classList.toggle('is-active');
}

hambIcon.addEventListener('click', popMenu);