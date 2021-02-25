'use strict';

const hb = document.querySelector(".header__humburger"),
  menu = document.querySelector(".header__menu"),
  body = document.querySelector("body");

hb.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});