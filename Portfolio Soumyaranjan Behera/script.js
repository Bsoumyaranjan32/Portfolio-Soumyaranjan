
const scrolltotop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrolltotop.classList.add('active');
    } else {
        scrolltotop.classList.remove('active');
    }
});

scrolltotop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});




const description = document.querySelector('.description');

description.innerHTML = 'I am into <span class="typed-text"></span><span class="cursor">&nbsp;</span>';

const typed = new Typed('.typed-text', {
    strings: ['Web Developer.', 'Frontend Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});