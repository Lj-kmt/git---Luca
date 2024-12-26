

// Fonction pour effectuer la recherche
function performSearch(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery) {
        alert(`Recherche effectuée pour : ${searchQuery}`);
        // Vous pouvez remplacer l'alerte par une fonction qui effectue une recherche réelle
    } else {
        alert("Veuillez entrer un terme de recherche !");
    }
}
