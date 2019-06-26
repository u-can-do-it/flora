var firebaseConfig = {
  apiKey: "AIzaSyDEMUP9ccJ2CRBaDI58sDa5dc7ejQ0Ihgg",
  authDomain: "flora-d0af6.firebaseapp.com",
  databaseURL: "https://flora-d0af6.firebaseio.com",
  projectId: "flora-d0af6",
  storageBucket: "flora-d0af6.appspot.com",
  messagingSenderId: "815778879470",
  appId: "1:815778879470:web:4eeeec371fa51e5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactRef = firebase.database().ref("contact");

document.getElementById("contact--form").addEventListener("submit", event => {
  const inputIds = ["name", "subject", "email", "phone-number", "message"];
  event.preventDefault();
  submitForm();

  function getInputValue(id) {
    return document.getElementById(id).value;
  }

  function getContactJSON(ids) {
    const contact = {};
    for (id of inputIds) {
      contact[id] = getInputValue(id);
    }
    return contact;
  }

  function submitForm(formData) {
    var newMessageRef = contactRef.push();
    newMessageRef.set(getContactJSON(inputIds), function(error) {
      error ? alert(error + "\n Try again later.") : messageSentAnimation();
    });
  }

  function messageSentAnimation() {
    document
      .querySelector(".form-backdrop")
      .classList.add("form-backdrop--active");
    document.querySelector(".form-sent").classList.add("form-sent--active");
    document.querySelector(".form").classList.add("form--blured");
  }
});

const dynamicContent = () => {
  document.querySelector(".year").textContent = new Date().getFullYear();
};
dynamicContent();

// Big gallery animations
const gallery = () => {
  const body = document.querySelector("body");
  const galleryImgs = [...document.querySelectorAll(".gallery__img")];
  const backdrop = document.querySelector(".backdrop");
  let isGalleryBigPresent = false;
  const gallery = document.querySelector(".section-gallery");

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
};
gallery();

// minimalizing mobile navigation after click on a link
const navigation = () => {
  const navLink = document.querySelectorAll(".navigation-mobile__link");
  const checkbox = document.querySelector(".navigation-mobile__checkbox");

  for (const link of navLink) {
    link.addEventListener("click", () => {
      checkbox.checked = false;
    });
  }
};
navigation();

scrollAnimations = function() {
  let elems;
  let windowHeight;
  let nav;
  let progres;
  let progresVal = [];
  let statistics;
  function init() {
    elems = document.querySelectorAll(".hidden");
    nav = document.querySelector(".navigation__nav");
    progres = document.querySelectorAll(".progress__line");
    windowHeight = window.innerHeight;
    for (let i = 0; i < progres.length; i++) {
      progresVal.push(progres[i].value);
      progres[i].value = 0;
    }

    statistics = document.querySelector("#statistics");

    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }
  function checkPosition() {
    // apearing elements on scroll
    for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -100) {
        elems[i].className = elems[i].className.replace("hidden", "show");
      }
    }
    //  progress bars animations in statistics
    for (let i = 0; i < progres.length; i++) {
      let positionFromTop = statistics.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -300) {
        progres[i].value = progresVal[i];
      }
    }
    // nav bar apearing after defined scroll

    if (window.pageYOffset >= 636) {
      nav.classList.add("navigation__nav--sticky");
    } else {
      nav.classList.remove("navigation__nav--sticky");
    }
  }
  return {
    init: init
  };
};
scrollAnimations().init();
