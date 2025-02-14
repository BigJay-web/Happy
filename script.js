// Parallax Effect
window.addEventListener('scroll', function () {
    var parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(function (section) {
        var speed = section.getAttribute('data-speed');
        var scrollPosition = window.pageYOffset;
        section.style.transform = 'translateY(' + (scrollPosition * speed) + 'px)';
    });
});

// Fade-In Effects for Elements
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.fade');
    elements.forEach(function (element) {
        var position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
