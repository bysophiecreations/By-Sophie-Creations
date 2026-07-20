document.addEventListener("DOMContentLoaded", () => {

    const badge = document.getElementById("nbArticles");

    if (!badge) return;

    function mettreAJourPanier() {
        const contenu = JSON.parse(localStorage.getItem("panier")) || [];

        if (contenu.length > 0) {
            badge.textContent = contenu.length;
            badge.style.display = "flex";
        } else {
            badge.style.display = "none";
        }
    }

    mettreAJourPanier();
});