let list1 = [
    "Diagnostic de votre appareil",
    "Changement d’écran",
    "Changement du connecteur de charge",
    "Changement de clavier",
    "Changement de disque dur",
    "Remplacement du disque par SSD",
    "Remplacement de ventilateur",
    "Remplacement de batterie",
    "Rajoue de la pâte thermique",
    "Rajoue de mémoire Vive",
    "Installation d’Anti-Virus",
    "Installation du Système d’Exploitation",
    "Sauvegarde de données",
];
let list2 = [
    "Appareil photo arrière /avant",
    "Batterie",
    "Bouton de Démarrage",
    "Bouton de volume",
    "Connecteur de charge",
    "Ecran",
    "Vitre Tactile",
];

const selectElement = document.querySelector(".form-control");

selectElement.addEventListener("change", (event) => {
    const result = document.getElementById("useselect");
    if (`${event.target.value}` === "PC") {
        // result.textContent = `You like ${event.target.value}`;
        // `<select id="enfant" class="form-control" name="appareil" placeholder="Type d'appareil" required>`

        result.innerHTML = `<select id="enfant" class="form-control" name="appareil" placeholder="Type d'appareil" required> 
          <option> ${list1[0]} </option> 
          <option> ${list1[1]} </option>
          <option> ${list1[2]} </option>
          <option> ${list1[3]} </option>
          <option> ${list1[4]} </option>
          <option> ${list1[5]} </option>
          <option> ${list1[6]} </option>
          <option> ${list1[7]} </option>
          <option> ${list1[8]} </option>
          <option> ${list1[9]} </option>
          <option> ${list1[10]} </option>
          <option> ${list1[11]} </option>
          `;

        //       for(let key in list1){
        // result.innerHTML += `<option>${key}</option>`;
        // }
    } else if (`${event.target.value}` === "tablette") {
        // result.innerHTML = `<select id="enfant" class="form-control" name="appareil" placeholder="Type d'appareil" required>
        // <option>${list2}</option>`;
        result.innerHTML = `<select id="enfant" class="form-control" name="appareil" placeholder="Type d'appareil" required> 
          <option> ${list2[0]} </option> 
          <option> ${list2[1]} </option>
          <option> ${list2[2]} </option>
          <option> ${list2[3]} </option>
          <option> ${list2[4]} </option>
          <option> ${list2[5]} </option>
          <option> ${list2[6]} </option>
          `;
    } else {
        result.innerText = "";
    }
});

const select2 = document.getElementById("selector2");

select2.addEventListener("change", (event) => {
    const result2 = document.getElementById("useselect2");
    if (`${event.target.value}` === "PC") {
        result2.innerHTML = `<select id="enfant" class="form-control" name="appareil" placeholder="Type d'appareil" required> 
          <option> ${list1[0]} </option> 
          <option> ${list1[1]} </option>
          <option> ${list1[2]} </option>
          <option> ${list1[3]} </option>
          <option> ${list1[4]} </option>
          <option> ${list1[5]} </option>
          <option> ${list1[6]} </option>
          <option> ${list1[7]} </option>
          <option> ${list1[8]} </option>
          <option> ${list1[9]} </option>
          <option> ${list1[10]} </option>
          <option> ${list1[11]} </option>
          `;
    } else if (`${event.target.value}` === "tablette") {
        result2.innerHTML = `<select id="enfant" class="form-control" name="appareil" placeholder="Type d'appareil" required> 
          <option> ${list2[0]} </option> 
          <option> ${list2[1]} </option>
          <option> ${list2[2]} </option>
          <option> ${list2[3]} </option>
          <option> ${list2[4]} </option>
          <option> ${list2[5]} </option>
          <option> ${list2[6]} </option>
          `;
    } else {
        result2.innerText = "";
    }
});

// Grâce au DOM on déclare les variables et on les assignes au id du bouton et du formulaire
let bouton = document.getElementById("bouton");
let form = document.getElementById("myForm");
let formulaire = document.getElementById("formulaire");

bouton.addEventListener("click", () => {
    // On émet un écouteur d'évènement sur le bouton 'clic' qui agira sur le formulaire ci-dessous via le callback.

    // Si le formulaire est strictement égal au display block alors il devient none sinon il est block
    if (form.style.display === "block") {
        form.style.display = "none";
        if (window.matchMedia("(min-width: 1100px)").matches) {
            // Quant au responsive du support: Si la largeur du média est plus petit que 1100px alors le formulaire aura la largeur de 350px. On modifie le CSS via la méthode 'style' ci-dessous.
            form.style.width = "350px";
            formulaire.style.width = "350px";
        } else {
            form.style.width = "250px";
            formulaire.style.width = "250px";
        }
    } else {
        form.style.display = "block";
    }
});

let bouton2 = document.getElementById("bouton2");
let form2 = document.getElementById("popupForm2");
let formid = document.getElementById("formid");
let formulaire2 = document.getElementById("formulaire2");

bouton2.addEventListener("click", () => {
    if (form2.style.display === "block") {
        form2.style.display = "none";
        if (window.matchMedia("(min-width: 1100px)").matches) {
            form2.style.width = "350px";
            formulaire2.style.width = "350px";
            formid.style.width = "350px";
        } else {
            form2.style.width = "250px";
            formulaire2.style.width = "250px";
            formid.style.width = "250px";
        }
    } else {
        form2.style.display = "block";
    }
});
