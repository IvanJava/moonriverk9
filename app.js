//variables
const hambIcon = document.querySelector('#hamb__menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar__logo');
const homeLink = document.querySelector('#home-link');
const benefitsLink = document.querySelector('#benefits-link');
const reviewsLink = document.querySelector('#reviews-link');
const contactLink = document.querySelector('#contact-link');

//async scrolling
const scrollHome = () => {
    window.scrollTo(0, document.getElementById('home-page').offsetTop);
}
homeLink.addEventListener('click', scrollHome);
navLogo.addEventListener('click', scrollHome);

const scrollBenefits = () => {
    window.scrollTo(0, document.getElementById('benefits-page').offsetTop);
}
benefitsLink.addEventListener('click', scrollBenefits);

const scrollReviews = () => {
    window.scrollTo(0, document.getElementById('reviews-page').offsetTop);
}
reviewsLink.addEventListener('click', scrollReviews);

const scrollContact = () => {
    window.scrollTo(0, document.getElementById('contact-page').offsetTop);
}
contactLink.addEventListener('click', scrollContact);

//display mobile menu
const popMenu = () => {
    hambIcon.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
hambIcon.addEventListener('click', popMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    let scrollPos = window.scrollY;
    //adds highlight class to my menu items when device width is more than 1000
    if(window.innerWidth > 1000 && scrollPos < 930){
        homeLink.classList.add('highlight');
        benefitsLink.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 1000 && scrollPos < 1550){
        benefitsLink.classList.add('highlight');
        homeLink.classList.remove('highlight');
        reviewsLink.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 1000 && scrollPos < 2150){
        reviewsLink.classList.add('highlight');
        benefitsLink.classList.remove('highlight');
        contactLink.classList.remove('highlight-contact');
        return;
    }else if(window.innerWidth > 1000 && scrollPos > 2150){
        contactLink.classList.add('highlight-contact');
        reviewsLink.classList.remove('highlight');
        benefitsLink.classList.remove('highlight');
        return;
    }
        //adds highlight class to my menu items when device width is more than 760
    if(window.innerWidth > 760 && scrollPos < 1100){
        homeLink.classList.add('highlight');
        benefitsLink.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 760 && scrollPos < 2250){
        benefitsLink.classList.add('highlight');
        homeLink.classList.remove('highlight');
        reviewsLink.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 760 && scrollPos < 2900){
        reviewsLink.classList.add('highlight');
        benefitsLink.classList.remove('highlight');
        contactLink.classList.remove('highlight-contact');
        return;
    }else if(window.innerWidth > 760 && scrollPos > 2900){
        contactLink.classList.add('highlight-contact');
        reviewsLink.classList.remove('highlight');
        return;
    }
}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
//close mobile menu when clicking on a menu item
const closeMenu = () => {
if(hambIcon.classList.contains('is-active')){
    hambIcon.classList.toggle('is-active');
    menuLinks.classList.remove('active');
}
}
menuLinks.addEventListener('click', closeMenu);
navLogo.addEventListener('click', closeMenu);