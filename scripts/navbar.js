document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const navLinks = [
        { href: "index.html", text: "Home" },
        { href: "menu.html", text: "Jadłospis" },
        { href: "galeria.html", text: "Galeria" },
        { href: "historia.html", text: "Historia" },
        { href: "kontakt.html", text: "Kontakt" }
    ];

    const navContainer = document.getElementById('dynamic-nav');
    const ul = document.createElement('ul');

    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', link.href);
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);

        if (currentPath.includes(link.href)) {
            a.classList.add('active');
            a.style.color = 'red';
            a.style.textDecorationColor = 'red';
        }
    });

    navContainer.appendChild(ul);
});
