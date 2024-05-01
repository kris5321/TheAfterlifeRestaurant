function wege() {
    window.location.href = "https://www.rp.pl/zdrowy-styl-zycia/art37419791-wegetarianizm-moze-byc-szkodliwy-dla-rozwoju-mozgu-inteligencji-i-zdrowia-psychicznego";
}

document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.logo3',
        opacity: [
            {value: 0, duration: 0},
            {value: 1, duration: 1500, easing: 'easeInOutQuad'},
            {value: 0, duration: 1500, easing: 'easeInOutQuad', delay: 2000}
        ],
        complete: function(anim) {
            // Po zakończeniu animacji usuń logo
            document.querySelector('.logo3').remove();
        }
    });
});




