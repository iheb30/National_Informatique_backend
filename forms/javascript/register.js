document.getElementById("formid").addEventListener("submit", function (evt) {
    // Stoppe l'événement submit
    evt.preventDefault();

    // Teste si la date de rendez-vous est comprise entre aujourd'hui et le mois prochain
    let now = new Date();
    let d = new Date(now.getFullYear(), now.getMonth() + 1, now.getDay());
    let curr = new Date(document.getElementById("modif-date").value);

    console.log(now);
    console.log(d);

    if (curr > now && curr < d) {
        this.submit();
    } else {
        alert(
            "La date saisie n'est pas comprise entre aujourd'hui et dans un mois"
        );
    }
});
