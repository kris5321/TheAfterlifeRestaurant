function losujRabat() {
    // Generowanie losowego rabatu od 0% do 10%
    var rabat = Math.floor(Math.random() * 11);
    // Generowanie losowego kodu
    var kod = Math.random().toString(36).substr(2, 8).toUpperCase();
    // Wyświetlenie alertu z rabatem i kodem
    alert("Gratulacje! Twój rabat wynosi: " + rabat + "%.\nTwój kod rabatowy to: " + kod);
}
function wege() {
    // Przekierowanie użytkownika na inną stronę
    window.location.href = "https://www.rp.pl/zdrowy-styl-zycia/art37419791-wegetarianizm-moze-byc-szkodliwy-dla-rozwoju-mozgu-inteligencji-i-zdrowia-psychicznego";
}