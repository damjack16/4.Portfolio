// HAMBURGER AND MENU
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('menu--active')
}

hamburger.addEventListener('click', hamburgerClick);

// SMOOTH SCROLL
scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
    })

}

document.querySelector(".menu__item--home").addEventListener('click', () => {
    scrollTo(document.getElementById("home"));
})

document.querySelector(".menu__item--about").addEventListener('click', () => {
    scrollTo(document.getElementById("about"));
})

document.querySelector(".menu__item--technologies").addEventListener('click', () => {
    scrollTo(document.getElementById("technologies"));
})

document.querySelector(".menu__item--projects").addEventListener('click', () => {
    scrollTo(document.getElementById("projects"));
})

document.querySelector(".menu__item--contact").addEventListener('click', () => {
    scrollTo(document.getElementById("contact"));
})

document.querySelector(".btn--contact").addEventListener('click', () => {
    scrollTo(document.getElementById("contact"));
})

// ARROW UP
document.querySelector(".fa-arrow-alt-circle-up").addEventListener('click', () => {
    scrollTo(document.getElementById("home"));
})

// VISIBLE ARROW AND SECTIONS
const visibleElements = () => {
    const windowHeight = window.innerHeight;
    const scrollValue = window.scrollY;

    // ARROW VARIABLE
    const arrow = document.querySelector('.fa-arrow-alt-circle-up');

    // ABOUT SECTION VARIABLES
    const about = document.querySelector('.about__container');
    const aboutFromTop = about.offsetTop;
    const aboutHeight = about.offsetHeight;

    // TECHNOLOGIES SECTION VARIABLES
    const technologiesStack = document.querySelector('.technologies__stack');
    const stackFromTop = technologiesStack.offsetTop;
    const stackHeight = technologiesStack.offsetHeight;
    const technologiesTools = document.querySelector('.technologies__tools');
    const toolsFromTop = technologiesTools.offsetTop;
    const toolsHeight = technologiesTools.offsetHeight;

    // PROJECTS SECTION VARIABLES
    const projectOne = document.querySelector('.project__one');
    const projectOneFromTop = projectOne.offsetTop;
    const projectOneHeight = projectOne.offsetHeight;
    const projectTwo = document.querySelector('.project__two');
    const projectTwoFromTop = projectTwo.offsetTop;
    const projectTwoHeight = projectTwo.offsetHeight;
    const projectThree = document.querySelector('.project__three');
    const projectThreeFromTop = projectThree.offsetTop;
    const projectThreeHeight = projectThree.offsetHeight;

    // ARROW
    if (scrollValue > aboutFromTop + aboutHeight) {
        arrow.style.transform = "translateX(0)"
    } else {
        arrow.style.transform = "translateX(100vw)"
    }

    // SECTIONS

    // ABOUT
    if (scrollValue > aboutFromTop + aboutHeight - windowHeight) {
        about.style.transform = "translateX(0vw)"
    } else {
        about.style.transform = "translateX(100vw)";
    }

    // TECHNOLOGIES
    if (scrollValue > stackFromTop + stackHeight - windowHeight) {
        technologiesStack.style.transform = "translateX(0vw)"
    } else {
        technologiesStack.style.transform = "translateX(-100vw)";
    }

    if (scrollValue > toolsFromTop + toolsHeight - windowHeight) {
        technologiesTools.style.transform = "translateX(0vw)"
    } else {
        technologiesTools.style.transform = "translateX(100vw)"
    }

    // PROJECTS
    // PROJECT ONE
    if (scrollValue > projectOneFromTop + projectOneHeight) {
        projectOne.style.transform = "translateX(0vw)"
    } else {
        projectOne.style.transform = "translateX(-100vw)";
    }
    // PROJECT TWO
    if (scrollValue > projectTwoFromTop + projectTwoHeight - windowHeight) {
        projectTwo.style.transform = "translateX(0vw)"
    } else {
        projectTwo.style.transform = "translateX(100vw)"
    }
    // PROJECT THREE
    if (scrollValue > projectThreeFromTop + projectThreeHeight - windowHeight) {
        projectThree.style.transform = "translateX(0vw)"
    } else {
        projectThree.style.transform = "translateX(100vw)"
    }
}
window.addEventListener('scroll', visibleElements)