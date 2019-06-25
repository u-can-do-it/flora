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
