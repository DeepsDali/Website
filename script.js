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

//show carousel dots
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

//show each slide on selecting dots

let dotButtons = document.querySelectorAll(".dot");

let showSlides = (index) => {
  dotButtons.forEach((dotButton) => {
    dotButton.classList.remove("dot--selected");
  });
  dotButtons[index].classList.add("dot--selected");
  slides.forEach((slide) => {
    slide.classList.remove("slide--selected");
  });
  slides[index].classList.add("slide--selected");
};

dotButtons.forEach((dotButton, i) => {
  dotButton.addEventListener("click", () => {
    showSlides(i);
  });
});
showSlides(0);
// show each slide on clicking next and previou buttons
let n = 1;
const right = () => {
  n >= slides.length - 1 ? (n = 0) : n++;
  showSlides(n);
};
const left = () => {
  n <= 0 ? (n = slides.length - 1) : n--;
  showSlides(n);
};
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", left);
next.addEventListener("click", right);
