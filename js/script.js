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
