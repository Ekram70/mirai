const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  const icon = menuIcon.querySelector("i");
  icon.classList == "fa-solid fa-bars"
    ? (icon.classList = "fa-solid fa-xmark")
    : (icon.classList = "fa-solid fa-bars");
  mobileMenu.classList.toggle("menu-toggle");
});
