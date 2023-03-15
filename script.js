console.log("check");
//Nav-bar mobile
let hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector(".nav-bar");
let modebtn = document.querySelector(".mode");
hamburger.addEventListener("click", () => {
  console.log("hi");
  navBar.classList.toggle("active");
});

//dark and light mode
let switchMode = document.querySelector(".mode");
switchMode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (modebtn.innerHTML === "Light Mode") {
    modebtn.innerHTML = "Dark Mode";
  } else {
    modebtn.innerHTML = "Light Mode";
  }
});

//carousel dots
let slides = document.querySelectorAll(".slide");
console.log(slides);
let dotsdiv = document.querySelector(".dots");

let showDots = () => {
  console.log("Execute show dots");
  slides.forEach((slide) => {
    let span = document.createElement("span");
    span.classList.add("dot");
    dotsdiv.appendChild(span);
  });
};
showDots();
