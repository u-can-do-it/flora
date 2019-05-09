const year = document.querySelector('.year');
const navLink = document.querySelectorAll('.navigation-mobile__link');
const checkbox = document.querySelector('.navigation-mobile__checkbox');
const body = document.querySelector('body');
const galleryImgs = document.querySelectorAll('.gallery__item');

year.textContent = new Date().getFullYear();

for (const link of navLink) {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
}

for (const img of galleryImgs) {
  img.addEventListener('click', () => {
    img.classList.toggle('gallery__item--full');
  });
}
