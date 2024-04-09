function wege() {
    window.location.href = "https://www.rp.pl/zdrowy-styl-zycia/art37419791-wegetarianizm-moze-byc-szkodliwy-dla-rozwoju-mozgu-inteligencji-i-zdrowia-psychicznego";
}

document.addEventListener("DOMContentLoaded", function() {
    var logo3 = document.querySelector('.logo3');
    logo3.style.opacity = '0'; 
    logo3.style.transition = 'opacity 1.5s ease'; 
    setTimeout(function() {
        logo3.style.opacity = '1'; 
    }, 100);


    setTimeout(function() {
        logo3.style.opacity = '0'; 
    }, 2000); 
});



