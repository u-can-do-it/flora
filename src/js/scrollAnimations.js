animateHTML = function() {
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
      console.log(progres[i].value);
    }
    console.log(progres);
    statistics = document.querySelector("#statistics");
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
    for (let i = 0; i < progres.length; i++) {
      let positionFromTop = statistics.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -300) {
        progres[i].value = progresVal[i];
        // progres[i].animate((progres[i].value = progresVal[i]), 1000);
      }
    }

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
animateHTML().init();
