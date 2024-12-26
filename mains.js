
// Activer les boutons de sélection de ville
const cityButtons = document.querySelectorAll('.city');
const months = document.querySelectorAll('.month');

cityButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Supprimez la classe "active" de tous les boutons
        cityButtons.forEach((btn) => btn.classList.remove('active'));
        // Ajoutez la classe "active" au bouton sélectionné
        button.classList.add('active');
        // Simulez un changement de contenu (si nécessaire)
        console.log(`Ville sélectionnée : ${button.textContent}`);
    });
});

// Ajout d'un effet au clic sur les mois
months.forEach((month) => {
    month.addEventListener('click', () => {
        alert(`Prix pour le mois sélectionné : ${month.textContent}`);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    const nav = document.querySelector(".nav");
    const menu = document.querySelector(".menu");
    const dropdownToggles = document.querySelectorAll(".menu > li > a");

    // Création du bouton de menu (burger) pour les mobiles
    toggleButton.classList.add("menu-toggle");
    toggleButton.innerHTML = "&#9776;"; // Symbole burger
    nav.parentNode.insertBefore(toggleButton, nav);

    // Toggle du menu sur mobile
    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Gérer le comportement des dropdowns
    dropdownToggles.forEach((toggle) => {
        const dropdown = toggle.nextElementSibling;

        if (dropdown && dropdown.classList.contains("dropdown")) {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();

                // Fermer tous les autres dropdowns
                document.querySelectorAll(".dropdown.active").forEach((openDropdown) => {
                    if (openDropdown !== dropdown) {
                        openDropdown.classList.remove("active");
                    }
                });

                // Activer/désactiver le dropdown actuel
                dropdown.classList.toggle("active");
            });
        }
    });

    // Fermer menu et dropdowns quand on clique en dehors
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".menu") && !e.target.closest(".menu-toggle")) {
            menu.classList.remove("active");
            document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
                dropdown.classList.remove("active");
            });
        }
    });
});

/* Bouton Burger */
