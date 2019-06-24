const animateHTML = () => {
  let elems;
  let windowHeight;
  function init() {
    elems = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }
  function checkPosition() {
    for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -100) {
        elems[i].className = elems[i].className.replace("hidden", "show");
      }
    }
  }

  return {
    init: init
  };
};
animateHTML().init();

const year = document.querySelector(".year");
const navLink = document.querySelectorAll(".navigation-mobile__link");
const checkbox = document.querySelector(".navigation-mobile__checkbox");
const body = document.querySelector("body");
const galleryImgs = [...document.querySelectorAll(".gallery__img")];
const backdrop = document.querySelector(".backdrop");
let isGalleryBigPresent = false;
const gallery = document.querySelector(".section-gallery");

year.textContent = new Date().getFullYear();

for (const link of navLink) {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
}

galleryImgs.forEach((img, index, imgArr) => {
  img.addEventListener("click", () => {
    if (!isGalleryBigPresent) {
      const imgClone = img.cloneNode(true);
      imgClone.classList.remove("gallery__img");
      imgClone.classList.add("gallery__item--big");
      showGalleryBig(img);
      isGalleryBigPresent = true;
      backdrop.classList.add("backdrop--active");

      const next = document.querySelector("#next");
      const prev = document.querySelector("#prev");
      const close = document.querySelector("#close");
      let galleryImg = document.querySelector(".gallery-big__img");
      let i = index;

      close.addEventListener("click", () => {
        document.querySelector(".gallery-big").remove();
        backdrop.classList.remove("backdrop--active");
        isGalleryBigPresent = false;
      });

      next.addEventListener("click", () => {
        i = (i + 1 + imgArr.length) % imgArr.length;
        galleryImg.src = imgArr[i].src;
        galleryImg.alt = imgArr[i].alt;
        galleryImg = document.querySelector(".gallery-big__img");
      });
      prev.addEventListener("click", () => {
        i = (i - 1 + imgArr.length) % imgArr.length;
        galleryImg.src = imgArr[i].src;
        galleryImg = document.querySelector(".gallery-big__img");
      });
    }
  });
});

backdrop.addEventListener("click", () => {
  document.querySelector(".gallery-big").remove();
  backdrop.classList.remove("backdrop--active");
  isGalleryBigPresent = false;
});

function showGalleryBig(img) {
  const html = `
  <div class="gallery-big">
 
      <a class="gallery-big__button gallery-big__button--prev" id="prev">
          <i class="fas fa-angle-left fa-3x"></i>
      </a>
  
          <a class="gallery-big__button gallery-big__button--close" id="close" >
              <i class="fas fa-times fa-3x"></i>
          </a>
          <img src="${img.src}" alt="${img.src}" class="gallery-big__img">
    
      <a class="gallery-big__button gallery-big__button--next" id="next">
          <i class="fas fa-angle-right fa-3x"></i>
      </a>
 

</div>
  `;
  gallery.insertAdjacentHTML("beforeend", html);
}
