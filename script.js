
/* 1. Burger Menu
--------------------------------------------------------------------------------- */

// Wartet, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    
    // Referenz auf das Burger-Menü-Symbol
    const burgerMenu = document.querySelector(".burger-menu");

    // Referenz auf die Navigation, die ein- und ausgeblendet wird
    const navMenu = document.querySelector(".nav-links");

    // Wenn das Burger-Menü geklickt wird, zeige oder verstecke das Menü
    burgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("show");  // Toggle-Klasse zeigt/verbirgt das Menü
    });
});


/* 2. To-the-Top Button ein-/ausblenden & Funktion
--------------------------------------------------------------------------------- */

// Wartet, bis die Seite vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const toTopBtn = document.getElementById("toTopBtn");

    // Beim Scrollen prüfen, ob Button eingeblendet werden soll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add("show");  // Button einblenden
        } else {
            toTopBtn.classList.remove("show"); // Button ausblenden
        }
    });

    // Bei Klick auf den Button nach oben scrollen
    toTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}); 
  