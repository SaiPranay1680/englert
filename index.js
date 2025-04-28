
let lastScrollTop = 0;
const navbar = document.querySelector('.nav-bg');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
    // Scrolling up
    navbar.classList.add('scrolled-up');
    } else {
    // Scrolling down
    navbar.classList.remove('scrolled-up');

    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
