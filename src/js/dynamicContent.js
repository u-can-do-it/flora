const dynamicContent = () => {
  document.querySelector(".year").textContent = new Date().getFullYear();
};
dynamicContent();
