function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  console.log("test");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
