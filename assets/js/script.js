// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.querySelector('.header').clientHeight;

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - scrollPosition) <= delta)
        return;

    if(scrollPosition < navbarHeight) {
        document.body.classList.remove('is-scrolled', 'is-scrolled--upwards', 'is-scrolled--downwards');
    } else if(scrollPosition < lastScrollTop) {
        document.body.classList.add('is-scrolled', 'is-scrolled--upwards');
        document.body.classList.remove('is-scrolled--downwards');
    } else {
        document.body.classList.add('is-scrolled', 'is-scrolled--downwards');
        document.body.classList.remove('is-scrolled--upwards');
    }

    lastScrollTop = scrollPosition;
});