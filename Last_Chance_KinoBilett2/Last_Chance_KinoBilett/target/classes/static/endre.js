$(function () {
    hentFilmer()
    biletInfo();
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
function biletInfo() {
        const id = window.location.search.substring(1);
        console.log(id)
        const url = "/hentBiletet?id="+id;
        $.get(url, function (bilet){
            console.log(bilet)
            $("fornavn").val(bilet.fornavn);
            $("etternavn").val(bilet.etternavn);
            $("antall").val(bilet.antall);
            $("telefonnr").val(bilet.telefonNr);
            $("epost").val(bilet.epost);

        })
}
function endreBiletet() {
    let bilet={
        filmNavn:$("#valgtFilm").val(),
        antall:$("#antall").val(),
        fornavn:$("#fornavn").val(),
        etternavn:$("#etternavn").val(),
        telefonNr:$("#telefonnr").val(),
        epost:$("#epost").val(),
        id:window.location.search.substring(1)
    }
    console.log(bilet)
    if(checkValues(bilet)){
        $.post("/endre", bilet,function () {
            window.location.href="biletTabel.html"
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