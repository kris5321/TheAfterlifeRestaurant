document.addEventListener("DOMContentLoaded", function() {
    // Pobieramy aktualną ścieżkę URL
    const currentPath = window.location.pathname;

    // Pobieramy wszystkie linki z nawigacji
    const navLinks = document.querySelectorAll('nav a');

    // Iterujemy przez wszystkie linki
    navLinks.forEach(link => {
        // Sprawdzamy, czy ścieżka URL zawiera href linku
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});




