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

/* Powiększanie się zdjęć w galerii, jak użytkownik najedzie myszką */
const galeria = document.querySelector('.galeria');

galeria.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.style.transform = 'scale(1.2)';
  }
});

galeria.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.style.transform = 'scale(1)';
  }
});

