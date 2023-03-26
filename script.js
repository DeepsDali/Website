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
  "./Images/Jupiter.JPG",
  "./Images/new-star-formation.JPG",
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

let addButtonEvent = () => {
  dotButtons.forEach((dotButton, i) => {
    console.log("dot clicked");
    dotButton.addEventListener("click", () => {
      showSlides(i);
    });
  });
};

addButtonEvent();

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
let n = 0;
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
  addButtonEvent();
};
//About me

const aboutMeButtons = document.querySelectorAll(".about-me_btn");
const meInfoDivs = document.querySelectorAll(".me");

aboutMeButtons.forEach((aboutMeButton, index) => {
  aboutMeButton.addEventListener("click", () => {
    console.log("About me button clicked");
    meInfoDivs.forEach((meInfoDiv) => {
      meInfoDiv.classList.remove("me-active");
    });
    aboutMeButtons.forEach((aboutMeButton) => {
      aboutMeButton.classList.remove("about-me_btn-active");
    });
    meInfoDivs[index].classList.add("me-active");
    aboutMeButtons[index].classList.add("about-me_btn-active");
  });
});
//greeting
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "morning,"
    : timeNow >= 12 && timeNow < 18
    ? "afternoon,"
    : "evening,";
document.querySelector(".time-period").innerHTML = `${greeting}`;
//slider
let slider = document.getElementById("myRange");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
console.log(slider.value);
slider.oninput = function () {
  if (slider.value <= 20) {
    img2.style.opacity = "0";
    img1.style.opacity = "1";
  } else if (slider.value > 20 && slider.value <= 40) {
    img2.style.opacity = "0.4";
    img1.style.opacity = "0.8";
  } else if (slider.value > 40 && slider.value <= 60) {
    img2.style.opacity = "0.6";
    img1.style.opacity = "0.6";
  } else if (slider.value > 60 && slider.value <= 80) {
    img2.style.opacity = "0.8";
    img1.style.opacity = "0.4";
  } else if (slider.value > 80 && slider.value <= 100) {
    img2.style.opacity = "1";
    img1.style.opacity = "0";
  }
};
