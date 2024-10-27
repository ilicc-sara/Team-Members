"use strict";
import "./style.css";

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const name = document.querySelector(".member");

btnLeft.addEventListener("click", function () {
  name.style.backgroundColor = "red";
});

btnRight.addEventListener("click", function () {
  name.style.backgroundColor = "green";
});
