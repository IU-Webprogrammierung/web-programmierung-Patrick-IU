
/* 1. Burger Menu
--------------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navMenu = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});

/* 2. To-the-Top Button ein-/ausblenden & Funktion
--------------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const toTopBtn = document.getElementById("toTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add("show");
        } else {
            toTopBtn.classList.remove("show");
        }
    });

    toTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
