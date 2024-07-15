// Add any JavaScript functionality you need here
// For example, smooth scroll on navigation link click

document.querySelectorAll('nav .nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
