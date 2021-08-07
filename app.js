$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });
});

let ham = document.querySelector(".hamberger");
let time = document.querySelector(".times");
let mobileNav = document.querySelector(".mobile-nav");
ham.addEventListener("click", function () {
  mobileNav.classList.add("open");
});
time.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});
