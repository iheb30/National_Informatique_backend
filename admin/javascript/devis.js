$(function () {
    /* Charge le contenu de la liste déroulante */
    $.ajax({
        url: "requete/requete-liste.php",
        cache: false,

        success: function (result) {
            resultat = "<option></option>";
            let obj = $.parseJSON(result);
            obj.forEach(function (element) {
                resultat +=
                    '<option value="' +
                    element.cat_id +
                    '">' +
                    element.cat_nom +
                    "</option>";
            });
            $("#list").html(resultat);
        },
        error: function (result) {
            date = "Erreur " + result;
            $("#error").html(resultat);
        },
    });
});
