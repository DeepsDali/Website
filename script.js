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
//create slides
let imageArray = [
  "./Images/main_image_deep_field_smacs0723-5mb.jpg",
  "./Images/main_image_star-forming_region_carina_nircam_final-1280.jpg",
  "./Images/southern-ring-nebula-2-_custom-60c7d16d9c36f085646be2dad4585892c783952d-s1100-c50.jpg",
];
// console.log(imageArray);
let slidesDiv = document.querySelector(".slides");

let createslides = () => {
  // console.log(imageArray);

  let images = document.createElement("div");
  images.classList.add("images");

  imageArray.forEach((image) => {
    // console.log(image);

    let newImageDiv = document.createElement("div");
    newImageDiv.classList.add("slide");
    let slideImage = document.createElement("img");
    slideImage.classList.add("jw_image");
    slideImage.src = image;
    newImageDiv.appendChild(slideImage);
    images.appendChild(newImageDiv);
    slidesDiv.appendChild(images);
  });
};
createslides();
//show carousel dots
let slides = document.querySelectorAll(".slide");

let showDots = () => {
  slides = document.querySelectorAll(".slide");
  let dots = document.createElement("div");
  dots.classList.add("dots");

  slides.forEach((slide) => {
    let span = document.createElement("span");
    console.log("create dots executed");
    span.classList.add("dot");
    dots.appendChild(span);
    slidesDiv.appendChild(dots);
  });
};
showDots();
dotsdiv = document.querySelector(".dots");
// show each slide on selecting dots

let dotButtons = document.querySelectorAll(".dot");
//button eventlistener
dotButtons.forEach((dotButton, i) => {
  console.log("dot clicked");
  dotButton.addEventListener("click", () => {
    showSlides(i);
  });
});

let showSlides = (index) => {
  // console.log(slides);
  // console.log(dotsdiv);
  dotButtons = document.querySelectorAll(".dot");
  slides.forEach((slide) => {
    slide.classList.remove("slide--selected");
  });

  dotButtons.forEach((dotButton) => {
    dotButton.classList.remove("dot--selected");
  });
  slides[index].classList.add("slide--selected");
  dotButtons[index].classList.add("dot--selected");

  console.log(index);
};
showSlides(0);

// show each slide on clicking next and previous buttons
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

// Add play button
let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
pauseBtn.style.opacity = 0.2;
playBtn.style.opacity = 1;

playBtn.addEventListener("click", () => {
  console.log("play button clicked");
  slideInterval = setInterval(right, 3000);
  playBtn.style.opacity = 0.2;
  pauseBtn.style.opacity = 1;
});

pauseBtn.addEventListener("click", () => {
  console.log("pause button clicked");
  clearInterval(slideInterval);
  playBtn.style.opacity = 1;
  pauseBtn.style.opacity = 0.2;
});
// console.log(imageArray.length);
var loadFile = function (event) {
  let uploadedImage = URL.createObjectURL(event.target.files[0]);
  imageArray.push(uploadedImage);
  // console.log(imageArray.length);
  images = document.querySelector(".images");
  images.remove();
  dotsdiv.remove();
  createslides();
  showDots();
  showSlides(imageArray.length - 1);
};
