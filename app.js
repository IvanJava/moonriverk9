//variables
const hambIcon = document.querySelector('#hamb__menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar__logo');

//display mobile menu
const popMenu = () => {
    hambIcon.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
hambIcon.addEventListener('click', popMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const benefitsMenu = document.querySelector('#benefits-page');
    const reviewsMenu = document.querySelector('#reviews-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;
    //adds highlight class to my menu items
    if(window.innerWidth > 760 && scrollPos < 900){
        homeMenu.classList.add('highlight');
        benefitsMenu.classList.remove('highlight');
        return;
    }
}