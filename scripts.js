// Sayfa yüklendiğinde animasyon
alert("JavaScript çalışıyor!");
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Galeri görselleri için modal büyütme
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// Modal kapatma
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
