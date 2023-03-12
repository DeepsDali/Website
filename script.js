console.log("check");
//Nav-bar mobile
let hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  console.log("hi");
  navBar.classList.toggle("active");
});
