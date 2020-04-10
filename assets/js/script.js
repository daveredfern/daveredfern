/* Hide Header on on scroll down */
var didScroll;
var lastScrollTop = 0;

var className = {
    scrolled: 'is-scrolled',
    downwards: 'is-scrolled--downwards',
    upwards: 'is-scrolled--upwards'
};

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    var navbarHeight = document.querySelector('.header').clientHeight;
    var tolerance = navbarHeight / 2;

    // Make sure they scroll more than tolerance
    if (Math.abs(lastScrollTop - scrollPosition) <= tolerance)
        return;

    if (scrollPosition < tolerance) {
        document.body.classList.remove(className.scrolled, className.upwards, className.downwards);
    } else if (scrollPosition < lastScrollTop) {
        document.body.classList.add(className.scrolled, className.upwards);
        document.body.classList.remove(className.downwards);
    } else {
        document.body.classList.add(className.scrolled, className.downwards);
        document.body.classList.remove(className.upwards);
    }

    lastScrollTop = scrollPosition;
});

/* Form forms, auto fill in the referrer URL */
var referrer = document.getElementById('referrer');
if (referrer) {
    referrer.value = document.referrer;
}