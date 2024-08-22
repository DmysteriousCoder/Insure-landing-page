let navToggler = document.getElementById("nav-toggle");
let hideNav = document.getElementById("cancel");
let nav = document.getElementById("nav");

navToggler.addEventListener("click", showNav);

hideNav.addEventListener("click", closeNav);

function showNav() {
    nav.classList.add("active");
}

function closeNav() {
    nav.classList.remove("active");
}