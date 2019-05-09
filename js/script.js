const year = document.querySelector('.year');
const navLink = document.querySelectorAll('.navigation-mobile__link');
const checkbox = document.querySelector('.navigation-mobile__checkbox');
const body = document.querySelector('body');
year.textContent = new Date().getFullYear();

for (const link of navLink) {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
}

// $(document).on('click', 'a', function(event) {
//   event.preventDefault();
//   $('body').animate(
//     {
//       scrollTop: $($.attr(this, 'href')).offset().top
//     },
//     800
//   );
// });

// document.addEventListener('click', () => {
//   event.preventDefault();
//   body.animate({
//       scrollTop: body.
//   })
// });
