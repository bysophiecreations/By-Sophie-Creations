document.addEventListener("DOMContentLoaded", () => {

    // Création du bouton panier
    const panier = document.createElement("a");
    panier.href = "monpanier.html";
    panier.id = "panierFixe";

    panier.innerHTML = `
        🛒
        <span id="nbArticles" class="badge-panier"></span>
    `;

    document.body.appendChild(panier);

    // Mise à jour du compteur
    function mettreAJourPanier() {

        const contenu = JSON.parse(localStorage.getItem("panier")) || [];
        const badge = document.getElementById("nbArticles");

        if (contenu.length > 0) {
            badge.textContent = contenu.length;
            badge.style.display = "flex";
        } else {
            badge.style.display = "none";
        }
    }

    mettreAJourPanier();

});