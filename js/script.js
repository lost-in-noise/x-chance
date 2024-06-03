"use strict";

//burger bar
let navBar = document.getElementById("navBar");
let burgerBar = document.getElementById("burgerBar");
let navDiv = document.getElementById("navDiv");

burgerBar.addEventListener("click", function () {
  navBar.classList.toggle("activeNav");
  burgerBar.classList.toggle("active");
  navDiv.classList.toggle("mobActive");
});
