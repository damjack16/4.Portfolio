// HAMBURGER AND MENU
const hamburger = document.querySelector('.jsHamburger');
const nav = document.querySelector('.jsNav');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('menu--active')
}

hamburger.addEventListener('click', hamburgerClick);

// SMOOTH SCROLL
document.addEventListener('DOMContentLoaded', () => {
    const scrollIt = (element) => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': element.offsetTop,
        });
    };

    const menuEvents = () => {
        const menu = document.querySelector('.jsMenu'),
            menuItems = menu.querySelectorAll('.jsMenuItem');

        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                const link = item.querySelector('a');
                const dest = link.getAttribute('data-dest');
                const destElem = document.getElementById(dest);

                scrollIt(destElem)
            });
        });
    };
    menuEvents();

    // CONTACT BUTTON
    document.querySelector('.btn--contact').addEventListener('click', () => {
        scrollIt(document.getElementById("contact"));
    })

    // ARROW UP
    document.querySelector(".fa-arrow-alt-circle-up").addEventListener('click', () => {
        scrollIt(document.getElementById("home"));
    })
})

// INITIALIZE ANIMATE ON SCROLL LIBRARY
AOS.init({
    offset: 200,
    duration: 800,
});

// RESET PREVENT DEFAULT ON SEND BUTTON
document.querySelector('.btn--send').addEventListener('click', (e) => {
    e.preventDefault()
})