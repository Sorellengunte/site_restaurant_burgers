//recupere le formulaire dans le html et le stocke dansle form
const form = document.getElementById("form");
// declaration des variables
const nom = document.getElementById("nom");
const numero = document.getElementById("numero");
const adresse = document.getElementById("adresse");
const select = document.getElementById("select");
const qte = document.getElementById("qte");

// variable pour afficher les erreurs
const erreurNom = document.getElementById("erreurnom");
const erreurTelephone = document.getElementById("erreurTelephone");
const erreurAdresse = document.getElementById("erreurAdresse");
const erreurBurger = document.getElementById("erreurBurger");
const erreurQte = document.getElementById("erreurQte");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Toujours empêcher l'envoi par défaut

  let valid = true; // suppose que tout va bien

  // Réinitialise les messages d'erreur
  erreurNom.textContent = "";
  erreurTelephone.textContent = "";
  erreurAdresse.textContent = "";
  erreurBurger.textContent = "";
  erreurQte.textContent = "";

  // Supprime l'ancien message de confirmation s'il existe
  const ancienMessage = document.getElementById("messageConfirmation");
  if (ancienMessage) {
    ancienMessage.remove();
  }

  // Validation du nom
  const regexNom = /^[A-Za-z]+([-\s][A-Za-z]+)*$/;
  if (nom.value.trim() === "") {
    erreurNom.textContent = "Le nom est obligatoire.";
    erreurNom.style.color = "red";
    valid = false;
  } else if (/^\s/.test(nom.value)) {
    erreurNom.textContent = "Le nom ne doit pas commencer par un espace.";
    erreurNom.style.color = "red";
    valid = false;
  } else if (!regexNom.test(nom.value)) {
    erreurNom.textContent = "Nom invalide : lettres, tirets et espaces uniquement.";
    erreurNom.style.color = "red";
    valid = false;
  }

  //  Validation du numéro
  const regexNum = /^[0-9]+$/;
  if (numero.value.trim() === "") {
    erreurTelephone.textContent = "Veuillez entrer un numéro de téléphone.";
    erreurTelephone.style.color = "red";
    valid = false;
  } else if (!regexNum.test(numero.value)) {
    erreurTelephone.textContent = "Le numéro doit contenir uniquement des chiffres.";
    erreurTelephone.style.color = "red";
    valid = false;
  } else if (numero.value.length !== 9) {
    erreurTelephone.textContent = "Le numéro doit contenir exactement 9 chiffres.";
    erreurTelephone.style.color = "red";
    valid = false;
  }

  //  Validation de l'adresse 
  const regexAdresse = /^[A-Za-z\s]+$/;
  if (adresse.value.trim() === "") {
    erreurAdresse.textContent = "Veuillez entrer votre adresse.";
    erreurAdresse.style.color = "red";
    valid = false;
  } else if (!regexAdresse.test(adresse.value)) {
    erreurAdresse.textContent = "L'adresse doit contenir uniquement des lettres.";
    erreurAdresse.style.color = "red";
    valid = false;
  }

  // Validation du burger 
  if (select.value === "") {
    erreurBurger.textContent = "Veuillez choisir un burger.";
    erreurBurger.style.color = "red";
    valid = false;
  }

  // Validation de la quantité
  if (qte.value < 1 || qte.value === "") {
    erreurQte.textContent = "La quantité doit être au moins 1.";
    erreurQte.style.color = "red";
    valid = false;
  }

  //  Si tout est valide 
  if (valid) {
    // Crée un message central
    const message = document.createElement("div"); // cree un nouveau elemtn di dans le DOm et n'est pas encore visible par la page.
    message.id = "messageConfirmation"; // on donne le id au msg pour pouvoir le cibler plus tard. 
    message.textContent = "VOTRE COMMANDE A ÉTÉ ENVOYÉE !"; // cequi sera a l'interieur du div

    // Style du message pour qu'il soit gros et centré
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.backgroundColor = "green";
    message.style.color = "white";
    message.style.fontSize = "32px";
    message.style.fontWeight = "bold";
    message.style.padding = "30px 50px";
    message.style.borderRadius = "10px";
    message.style.textAlign = "center";
  

    // Ajoute le message au body
    document.body.appendChild(message);

    // supprime le message après 3 secondes
    setTimeout(() => {
      message.remove();
      form.reset(); // réinitialiser le formulaire
    }, 3000);
  }
});