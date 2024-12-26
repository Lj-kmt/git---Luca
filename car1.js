
// Sélection des éléments nécessaires
const carouselImages = document.querySelector('.carousel-images');
const selectors = document.querySelectorAll('.selector');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Vérifiez que les éléments existent pour éviter des erreurs
if (carouselImages && selectors.length > 0 && prevBtn && nextBtn) {
    const imagesPerGroup = 3; // Nombre d'images affichées par groupe
    const totalImages = document.querySelectorAll('.carousel-images img').length; // Total des images
    const totalGroups = Math.ceil(totalImages / imagesPerGroup); // Total des groupes
    let currentIndex = 0; // Index actuel du carousel

    // Fonction pour mettre à jour le carousel
    function updateCarousel(index) {
        const imageWidth = carouselImages.children[0].clientWidth; // Largeur d'une image
        // Déplace le carousel vers le bon groupe
        carouselImages.style.transform = `translateX(-${index * imageWidth * imagesPerGroup}px)`;

        // Met à jour les sélecteurs actifs
        selectors.forEach((selector, i) => {
            selector.classList.toggle('active', i === index);
        });
    }

    // Gestionnaire de clic pour le bouton "précédent"
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalGroups - 1; // Boucle vers la fin
        updateCarousel(currentIndex);
    });

    // Gestionnaire de clic pour le bouton "suivant"
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalGroups - 1) ? currentIndex + 1 : 0; // Boucle vers le début
        updateCarousel(currentIndex);
    });

    // Gestionnaire de clic pour les sélecteurs
    selectors.forEach(selector => {
        selector.addEventListener('click', () => {
            currentIndex = parseInt(selector.dataset.index, 10); // Convertir l'index en nombre
            updateCarousel(currentIndex);
        });
    });

    // Initialisation du carousel
    updateCarousel(currentIndex);
} else {
    console.error('Carousel elements not found. Please check your HTML structure.');
}
