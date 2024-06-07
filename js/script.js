"use strict";

//burger bar
const navBar = document.getElementById("navBar");
const burgerBar = document.getElementById("burgerBar");
const navDiv = document.getElementById("navDiv");

burgerBar.addEventListener("click", () => {
  navBar.classList.toggle("activeNav");
  burgerBar.classList.toggle("active");
  navDiv.classList.toggle("mobActive");
});

// accordion
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".arrow");

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("up");
      } else {
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.display = "none";
        });
        document.querySelectorAll(".arrow").forEach((arrow) => {
          arrow.classList.remove("up");
        });

        content.style.display = "block";
        arrow.classList.add("up");
      }
    });
  });
});

// slider

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullet");
const leftArrow = document.querySelector(".slide-arrow.left");
const rightArrow = document.querySelector(".slide-arrow.right");
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active-slide"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));
  const slidesToShow = 1;
  for (let i = 0; i < slidesToShow; i++) {
    if (slides[index + i]) {
      slides[index + i].classList.add("active-slide");
    }
  }
  bullets[index].classList.add("active");
}

function nextSlide() {
  const slidesToShow = 1;
  currentIndex += slidesToShow;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  const slidesToShow = 1;
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showSlide(index);
  });
});

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

slider.addEventListener("mouseover", stopSlideShow);
slider.addEventListener("mouseout", startSlideShow);

window.addEventListener("resize", () => {
  showSlide(currentIndex);
});

startSlideShow();
showSlide(currentIndex);

// touch
let startX, endX;

slider.addEventListener("touchstart", (event) => {
  startX = event.touches[0].pageX;
});

slider.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].pageX;

  if (endX - startX > 100) {
    nextSlide();
  } else if (endX - startX < -100) {
    prevSlide();
  }
});
