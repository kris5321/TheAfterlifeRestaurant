const galeria = document.querySelector('.galeria');
const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('.overlay-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImgIndex = 0;

function showImage(index) {
    const allImages = document.querySelectorAll('.galeria img');
    const imgSrc = allImages[index].getAttribute('src');
    overlayImg.setAttribute('src', imgSrc);
    currentImgIndex = index;
}

galeria.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imgIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
        showImage(imgIndex);
        overlay.style.display = 'block';
    }
});

prevBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + galeria.children.length) % galeria.children.length;
    showImage(currentImgIndex);
});

nextBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % galeria.children.length;
    showImage(currentImgIndex);
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { 
        overlay.style.display = 'none';
    }
});
