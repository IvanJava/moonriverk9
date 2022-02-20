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
    const homeMenu = document.querySelector('#home-link');
    const benefitsMenu = document.querySelector('#benefits-link');
    const reviewsMenu = document.querySelector('#reviews-link');
    const contactMenu = document.querySelector('#contact-link');
    let scrollPos = window.scrollY;
    //adds highlight class to my menu items
    if(window.innerWidth > 1000 && scrollPos < 930){
        homeMenu.classList.add('highlight');
        benefitsMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 1000 && scrollPos < 1550){
        benefitsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        reviewsMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 1000 && scrollPos < 2150){
        reviewsMenu.classList.add('highlight');
        benefitsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight-contact');
        return;
    }else if(window.innerWidth > 1000 && scrollPos > 2150){
        contactMenu.classList.add('highlight-contact');
        reviewsMenu.classList.remove('highlight');
        benefitsMenu.classList.remove('highlight');
        return;
    }
    if(window.innerWidth > 760 && scrollPos < 1100){
        homeMenu.classList.add('highlight');
        benefitsMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 760 && scrollPos < 2250){
        benefitsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        reviewsMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 760 && scrollPos < 2900){
        reviewsMenu.classList.add('highlight');
        benefitsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight-contact');
        return;
    }else if(window.innerWidth > 760 && scrollPos > 2900){
        contactMenu.classList.add('highlight-contact');
        reviewsMenu.classList.remove('highlight');
        return;
    }
    if(window.innerWidth < 760){
        elem.classList.remove("highlight");
        contactMenu.classList.remove('highlight-contact');
    }
}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
