document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navMenu = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
