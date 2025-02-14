// Smooth Scrolling for Navigation Links
const scrollLinks = document.querySelectorAll('nav ul li a');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50, // Offset for header navigation
            behavior: 'smooth'
        });
    });
});

// Parallax Scrolling Effect (adjust speed for better user experience)
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5; // Default speed if not specified
        const offset = window.pageYOffset * speed;
        element.style.backgroundPosition = 'center ' + offset + 'px';
    });
});

// Dynamic Valentine's Message Based on Time of Day
const valentineMessage = document.querySelector('#valentine p');
const currentHour = new Date().getHours();

if (currentHour < 12) {
    valentineMessage.innerHTML = "Good morning, my love. Though distance separates us today, my heart is with you, wishing you a day filled with love.";
} else if (currentHour < 18) {
    valentineMessage.innerHTML = "Good afternoon, my beautiful Twyla. Even though we’re apart, know that I’m thinking of you and wishing you the best Valentine’s D
