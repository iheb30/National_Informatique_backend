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
        let options = "";
        list1.forEach((element) => {
            options += `<option>${element}</option>`;
        });
        result.innerHTML = options;
        // result.innerHTML = `<select id="enfant" class="form-control" name="appareil2" placeholder="Type d'appareil" required>
        //   <option> ${list1[0]} </option>
        //   <option> ${list1[1]} </option>
        //   <option> ${list1[2]} </option>
        //   <option> ${list1[3]} </option>
        //   <option> ${list1[4]} </option>
        //   <option> ${list1[5]} </option>
        //   <option> ${list1[6]} </option>
        //   <option> ${list1[7]} </option>
        //   <option> ${list1[8]} </option>
        //   <option> ${list1[9]} </option>
        //   <option> ${list1[10]} </option>
        //   <option> ${list1[11]} </option>
        //   `;
    } else if (`${event.target.value}` === "tablette") {
        result.innerHTML = `<select id="enfant" class="form-control" name="appareil2" placeholder="Type d'appareil" required> 
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
        result2.innerHTML = `<select id="enfant" class="form-control" name="appareil2" placeholder="Type d'appareil" required> 
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
        result2.innerHTML = `<select id="enfant" class="form-control" name="appareil2" placeholder="Type d'appareil" required> 
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
