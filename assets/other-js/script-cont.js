const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const link1 = document.querySelector(".text1");
const link2 = document.querySelector(".text2");
const link3 = document.querySelector(".text3");
const link4 = document.querySelector(".text4");

navToggler.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggler.classList.toggle("open");
    logo.classList.toggle("fade");
    link4.classList.toggle("fade");
    link3.classList.toggle("fade");
    link2.classList.toggle("fade");
    link1.classList.toggle("fade");
});





