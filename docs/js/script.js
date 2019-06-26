"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var firebaseConfig={apiKey:"AIzaSyDEMUP9ccJ2CRBaDI58sDa5dc7ejQ0Ihgg",authDomain:"flora-d0af6.firebaseapp.com",databaseURL:"https://flora-d0af6.firebaseio.com",projectId:"flora-d0af6",storageBucket:"flora-d0af6.appspot.com",messagingSenderId:"815778879470",appId:"1:815778879470:web:4eeeec371fa51e5b"};firebase.initializeApp(firebaseConfig);var contactRef=firebase.database().ref("contact");document.getElementById("contact--form").addEventListener("submit",function(e){var r=["name","subject","email","phone-number","message"];e.preventDefault(),contactRef.push().set(function(){for(var e={},t=0,n=r;t<n.length;t++)id=n[t],e[id]=(a=id,document.getElementById(a).value);var a;return e}(),function(e){e?alert(e+"\n Try again later."):(document.querySelector(".form-backdrop").classList.add("form-backdrop--active"),document.querySelector(".form-sent").classList.add("form-sent--active"),document.querySelector(".form").classList.add("form--blured"))})});var dynamicContent=function(){document.querySelector(".year").textContent=(new Date).getFullYear()};dynamicContent();var gallery=function(){document.querySelector("body");var e=_toConsumableArray(document.querySelectorAll(".gallery__img")),s=document.querySelector(".backdrop"),d=!1,u=document.querySelector(".section-gallery");e.forEach(function(i,c,l){i.addEventListener("click",function(){if(!d){var e=i.cloneNode(!0);e.classList.remove("gallery__img"),e.classList.add("gallery__item--big"),function(e){var t='\n    <div class="gallery-big">\n   \n        <a class="gallery-big__button gallery-big__button--prev" id="prev">\n            <i class="fas fa-angle-left fa-3x"></i>\n        </a>\n    \n            <a class="gallery-big__button gallery-big__button--close" id="close" >\n                <i class="fas fa-times fa-3x"></i>\n            </a>\n            <img src="'.concat(e.src,'" alt="').concat(e.src,'" class="gallery-big__img">\n      \n        <a class="gallery-big__button gallery-big__button--next" id="next">\n            <i class="fas fa-angle-right fa-3x"></i>\n        </a>\n   \n  \n  </div>\n    ');u.insertAdjacentHTML("beforeend",t)}(i),d=!0,s.classList.add("backdrop--active");var t=document.querySelector("#next"),n=document.querySelector("#prev"),a=document.querySelector("#close"),r=document.querySelector(".gallery-big__img"),o=c;a.addEventListener("click",function(){document.querySelector(".gallery-big").remove(),s.classList.remove("backdrop--active"),d=!1}),t.addEventListener("click",function(){o=(o+1+l.length)%l.length,r.src=l[o].src,r.alt=l[o].alt,r=document.querySelector(".gallery-big__img")}),n.addEventListener("click",function(){o=(o-1+l.length)%l.length,r.src=l[o].src,r=document.querySelector(".gallery-big__img")})}})}),s.addEventListener("click",function(){document.querySelector(".gallery-big").remove(),s.classList.remove("backdrop--active"),d=!1})};gallery();var navigation=function(){var e=document.querySelectorAll(".navigation-mobile__link"),t=document.querySelector(".navigation-mobile__checkbox"),n=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){o.value.addEventListener("click",function(){t.checked=!1})}}catch(e){a=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}};navigation(),scrollAnimations=function(){var n,a,r,o,i,c=[];function t(){n=document.querySelectorAll(".hidden"),r=document.querySelector(".navigation__nav"),o=document.querySelectorAll(".progress__line"),a=window.innerHeight;for(var e=0;e<o.length;e++)c.push(o[e].value),o[e].value=0;i=document.querySelector("#statistics"),window.addEventListener("scroll",l),window.addEventListener("resize",t),l()}function l(){for(var e=0;e<n.length;e++){n[e].getBoundingClientRect().top-a<=-100&&(n[e].className=n[e].className.replace("hidden","show"))}for(var t=0;t<o.length;t++){i.getBoundingClientRect().top-a<=-300&&(o[t].value=c[t])}636<=window.pageYOffset?r.classList.add("navigation__nav--sticky"):r.classList.remove("navigation__nav--sticky")}return{init:t}},scrollAnimations().init();