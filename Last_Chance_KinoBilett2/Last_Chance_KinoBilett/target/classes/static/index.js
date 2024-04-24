$(function () {
    hentFilmer()
})
function hentFilmer() {
    $.get("/hentfilms", function (films) {
        formaterFilmCategory(films);
    })
}
function formaterFilmCategory(films) {
    let ut="<select class='form-select' id='valgtCategory' onchange='finnFilmNavn()'>"
    let lastCategory="";
    ut+="<option>Velg Category</option>"
    for (let film of films) {
        if(film.category !==lastCategory){
            ut+="<option>"+film.category+"</option>";
        }
        lastCategory=film.category;
    }
    ut+="</select>"
    $("#filmCategory").html(ut);
}
function finnFilmNavn() {
    const filmCategory=$("#valgtCategory").val();
    $.get("/hentfilms", function (films){
        formaterFilmNavn(films,filmCategory);
    });
}
function formaterFilmNavn(films,filmCategory) {
    let ut="<select class='form-select' id='valgtFilm'>";
    for (let film of films) {
        if(film.category===filmCategory){
            ut+="<option>"+film.navn+"</option>";
        }
    }
    ut+="</select>"
    $("#filmNavn").html(ut);

}
function registrerBilet() {
    const bilet={
        filmNavn:$("#valgtFilm").val(),
        antall:$("#antall").val(),
        fornavn:$("#fornavn").val(),
        etternavn:$("#etternavn").val(),
        telefonNr:$("#telefonnr").val(),
        epost:$("#epost").val()
    }
    console.log(bilet)
    if(checkValues(bilet)){
        $.post("/saveBilet", bilet,function () {
            window.location.href="biletTabel.html";
            $("#filmNavn").val("");
            $("#antall").val("");
            $("#fornavn").val("")
            $("#etternavn").val("")
            $("#telefonnr").val("");
            $("#epost").val("");
        })
    }else{
        $("#feilAntalMessage").text('"Må skriv noe inn i antall"');
        $("#feilFornavnMessage").text('"Må skriv noe inn i fornavn"');
        $("#feilEtternavnMessage").text('"Må skriv noe inn i etternavn"');
        $("#feilTelefonNrMessage").text('"Må skriv noe inn i telefonnr"');
        $("#feilEpostMessage").text('"Må skriv noe inn i epost"');
    }
}

