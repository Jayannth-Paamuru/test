document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a.scrolly').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});