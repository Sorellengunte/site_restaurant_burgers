   var validation = document.getElementById('btnenvoi');
        var nom = document.getElementById('nom');
        var nom_m = document.getElementById('nom_manquant');
        var prenom = document.getElementById('prenom');
        var prenom_m = document.getElementById('prenom_manquant');

        // Expression régulière correcte
        var prenom_v = /^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$/;

        validation.addEventListener('click', f_valid);

        function f_valid(e) {
            // Vérification NOM
            if (nom.validity.valueMissing) {
                e.preventDefault();
                nom_m.textContent = 'Nom manquant';
                nom_m.style.color = 'red';
            } 
            else if (!prenom_v.test(nom.value)) {
                e.preventDefault();
                nom_m.textContent = 'Format incorrect';
                nom_m.style.color = 'orange';
            } 
            else {
                nom_m.textContent = '';
            }

            // Vérification PRÉNOM
            if (prenom.validity.valueMissing) {
                e.preventDefault();
                prenom_m.textContent = 'Prénom manquant';
                prenom_m.style.color = 'red';
            } 
            else if (!prenom_v.test(prenom.value)) {
                e.preventDefault();
                prenom_m.textContent = 'Format incorrect';
                prenom_m.style.color = 'orange';
            } 
            else {
                prenom_m.textContent = '';
            }
        }