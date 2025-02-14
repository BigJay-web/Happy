// Parallax Effect for Scrolling
window.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function (el) {
        const speed = el.getAttribute('data-speed');
        const offset = window.pageYOffset;
        el.style.transform = 'translateY(' + (offset * speed) + 'px)';
    });
});
