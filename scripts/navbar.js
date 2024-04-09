document.addEventListener("DOMContentLoaded", function() {
    // Pobieramy aktualną ścieżkę URL
    const currentPath = window.location.pathname;

    // Definiujemy nawigację
    const navLinks = [
        { href: "main.html", text: "Home" },
        { href: "menu.html", text: "Jadłospis" },
        { href: "galeria.html", text: "Galeria" },
        { href: "historia.html", text: "Historia" },
        { href: "kontakt.html", text: "Kontakt" },
        { href: "credits.html", text: "Credits" }
    ];

    // Tworzymy nawigację dynamiczną
    const navContainer = document.getElementById('dynamic-nav');
    const ul = document.createElement('ul');

    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', link.href);
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);

        // Sprawdzamy, czy ścieżka URL zawiera href linku
        if (currentPath.includes(link.href)) {
            a.classList.add('active');
        }
    });

    // Dodajemy nawigację do kontenera
    navContainer.appendChild(ul);
});
