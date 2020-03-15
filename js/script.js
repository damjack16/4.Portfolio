// HAMBURGER AND MENU
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('menu--active')
}

hamburger.addEventListener('click', hamburgerClick);