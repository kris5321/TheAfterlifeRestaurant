function losujRabat() {
    // Generowanie losowego rabatu od 0% do 20%
    var rabat = Math.floor(Math.random() * 21);
    // Generowanie losowego kodu
    var kod = Math.random().toString(36).substr(2, 8).toUpperCase();
    // Wyświetlenie alertu z rabatem i kodem
    alert("Gratulacje! Twój rabat wynosi: " + rabat + "%.\nTwój kod rabatowy to: " + kod);
}
function wege() {
    // Przekierowanie użytkownika na inną stronę
    window.location.href = "https://www.rp.pl/zdrowy-styl-zycia/art37419791-wegetarianizm-moze-byc-szkodliwy-dla-rozwoju-mozgu-inteligencji-i-zdrowia-psychicznego";
}

// Dodaj poniższy kod na końcu skryptu.js

// Po załadowaniu strony
document.addEventListener("DOMContentLoaded", function() {
    // Pokaż logo3 z animacją fadeIn przez 1.5 sekundy
    var logo3 = document.querySelector('.logo3');
    logo3.style.opacity = '0'; // Ustaw początkową wartość przezroczystości na 0
    logo3.style.transition = 'opacity 1.5s ease'; // Dodaj animację przejścia dla właściwości opacity
    setTimeout(function() {
        logo3.style.opacity = '1'; // Ustaw wartość przezroczystości na 1 po 1.5 sekundy
    }, 100); // Opóźnienie startu animacji o 100ms

    // Ukryj logo3 po 2 sekundach
    setTimeout(function() {
        logo3.style.opacity = '0'; // Ustaw wartość przezroczystości na 0 po 2 sekundach
    }, 2000); // Opóźnienie ukrycia logo3 o 2 sekundy
});



