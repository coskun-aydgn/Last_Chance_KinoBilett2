$(function () {
    visTabel()
})
function visTabel() {
    $.get("/hentBiletter", function (biletter) {
        formatTabel(biletter)

    })
}
function formatTabel(biletter) {

    let ut="<thead><tr><th>Film Navn</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefon Nummer</th><th>Epost</th></tr></thead><tbod>";
    for (const bilet of biletter) {
        console.log(bilet.id)
        ut+="<tr><td>"+bilet.filmNavn+"</td><td>"+bilet.antall+"</td><td>"+bilet.fornavn+
            "</td><td>"+bilet.etternavn+"</td><td>"+bilet.telefonNr+"</td><td>"+bilet.epost+"</td>"+
            "<td> <button class='btn btn-primary' onclick='endreBiletID("+bilet.id+")'>Endre</button></td>"+
            "<td> <button class='btn btn-danger' onclick='slettbilettet("+bilet.id+")'>Slett</button></td></tr>";
    }
    $("#tabel").html(ut);
}
function registerBilet() {
    window.location.href="index.html"
}
function sletAlleBiletter() {
    $.get("/sletBiletter", function () {
        visTabel();
    })
}
function endreBiletID(id) {
    window.location.href = "/endre.html?"+id;
}
function slettbilettet(id){
    const url = "/slettBilettet?id="+id;
    $.get( url, function() {
        window.location.href = "/biletTabel.html";
    });
}