const year = document.querySelector('.year');
const navLink = document.querySelectorAll('.navigation-mobile__link');
const checkbox = document.querySelector('.navigation-mobile__checkbox');
const body = document.querySelector('body');
const galleryImgs = document.querySelectorAll('.gallery__img');
let galleryFlag = false;

const gallery = document.querySelector('.section-gallery');

year.textContent = new Date().getFullYear();

for (const link of navLink) {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
}

for (const img of galleryImgs) {
  img.addEventListener('click', () => {
    if (!galleryFlag) {
      const imgClone = img.cloneNode(true);
      imgClone.classList.remove('gallery__img');
      imgClone.classList.add('gallery__item--full');
      gallery.appendChild(imgClone);
      galleryFlag = true;
      imgClone.addEventListener('click', () => {
        imgClone.remove();
        galleryFlag = false;
      });
    }
  });
}
