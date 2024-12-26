// Sélectionner le formulaire
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi par défaut

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide !");
        return;
    }

    // Si tout est valide
    alert("Connexion réussie !");
});

// Fonction de validation d'email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
