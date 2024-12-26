

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const menu = document.querySelector(".menu");

    // Vérifiez si un bouton burger existe déjà
    let toggleButton = document.querySelector(".menu-toggle");

    if (!toggleButton) {
        // Créez le bouton burger si aucun n'existe
    }

    // Toggle du menu sur mobile
    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Gérer le comportement des dropdowns
    const dropdownToggles = document.querySelectorAll(".menu > li > a");
    dropdownToggles.forEach((toggle) => {
        const dropdown = toggle.nextElementSibling;

        if (dropdown && dropdown.classList.contains("dropdown")) {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();

                // Fermer les autres dropdowns ouverts
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

    // Fermer le menu et les dropdowns quand on clique en dehors
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".menu") && !e.target.closest(".menu-toggle")) {
            menu.classList.remove("active");
            document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
                dropdown.classList.remove("active");
            });
        }
    });
});
