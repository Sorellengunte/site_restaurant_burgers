// Récupération du formulaire et des champs
const form = document.getElementById("form");

const nom = document.getElementById("nom");
const numero = document.getElementById("numero");
const adresse = document.getElementById("adresse");
const select = document.getElementById("select");
const qte = document.getElementById("qte");

// Erreurs
const erreurNom = document.getElementById("erreurnom");
const erreurTelephone = document.getElementById("erreurTelephone");
const erreurAdresse = document.getElementById("erreurAdresse");
const erreurBurger = document.getElementById("erreurBurger");
const erreurQte = document.getElementById("erreurQte");

// NOM
function validerNom() {
  erreurNom.textContent = "";
  const regexNom = /^[A-Za-z]+([-\s][A-Za-z]+)*$/;

  if (nom.value.trim() === "") {
    erreurNom.textContent = "Le nom est obligatoire.";
    erreurNom.style.color = "red";
    return false;
  }
  if (/^\s/.test(nom.value)) {
    erreurNom.textContent = "Ne doit pas commencer par un espace.";
    erreurNom.style.color = "red";
    return false;
  }
  if (!regexNom.test(nom.value)) {
    erreurNom.textContent = "Nom invalide.";
    erreurNom.style.color = "red";
    return false;
  }
  return true;
}
// NUMÉRO
function validerNumero() {
  erreurTelephone.textContent = "";
  const regexNum = /^[0-9]+$/;

  if (numero.value.trim() === "") {
    erreurTelephone.textContent = "Veuillez entrer un numéro.";
    erreurTelephone.style.color = "red";
    return false;
  }
  if (!regexNum.test(numero.value)) {
    erreurTelephone.textContent = "Chiffres uniquement.";
    erreurTelephone.style.color = "red";
    return false;
  }
  if (numero.value.length !== 9) {
    erreurTelephone.textContent = "Doit contenir 9 chiffres.";
    erreurTelephone.style.color = "red";
    return false;
  }
  return true;
}
// ADRESSE
function validerAdresse() {
  erreurAdresse.textContent = "";
  const regexAdresse = /^[A-Za-z\s]+$/;

  if (adresse.value.trim() === "") {
    erreurAdresse.textContent = "Veuillez entrer votre adresse.";
    erreurAdresse.style.color = "red";
    return false;
  }
  if (!regexAdresse.test(adresse.value)) {
    erreurAdresse.textContent = "L'adresse contient des lettres uniquement.";
    erreurAdresse.style.color = "red";
    return false;
  }
  return true;
}

// BURGER
function validerBurger() {
  erreurBurger.textContent = "";

  if (select.value === "") {
    erreurBurger.textContent = "Veuillez choisir un burger.";
    erreurBurger.style.color = "red";
    return false;
  }
  return true;
}
// QUANTITÉ
function validerQte() {
  erreurQte.textContent = "";

  if (qte.value < 1 || qte.value === "") {
    erreurQte.textContent = "La quantité doit être au moins 1.";
    erreurQte.style.color = "red";
    return false;
  }
  return true;
}
// fonction qui appelle le bouton onclick
function validerFormulaire(e) {
  e.preventDefault();
  const ancienMessage = document.getElementById("messageConfirmation"); // Supprime l'ancien message
  if (ancienMessage) ancienMessage.remove();
  const estValide = validerNom() &&validerNumero() && validerAdresse() && validerBurger() && validerQte(); // Appel des fonctions de validation
 // Si tout est valide on afiiche le msg vert
  if (estValide) {
    const message = document.createElement("div");
    message.id = "messageConfirmation";
    message.textContent = "VOTRE COMMANDE A ÉTÉ ENVOYÉE !";
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

    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
      form.reset();
    }, 3000);
  }
}
