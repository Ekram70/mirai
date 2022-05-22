const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu-icon");
const preloader = document.querySelector(".preloader");

// for preloader
window.addEventListener("load", () => {
  preloader.style.display = "none";
  document.body.style.overflow = "auto";
});

// for menu icon toggling and showing mobile menu
menuIcon.addEventListener("click", () => {
  const icon = menuIcon.querySelector("i");
  icon.classList == "fa-solid fa-bars"
    ? (icon.classList = "fa-solid fa-xmark")
    : (icon.classList = "fa-solid fa-bars");
  mobileMenu.classList.toggle("menu-toggle");
});
