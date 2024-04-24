function checkValues(bilet) {
    fornavnOK=validateFornavn(bilet.fornavn);
    etternavnOK=validateEtternavn(bilet.etternavn);
    telefonOK=validateTelefonNr(bilet.telefonNr);
    epostOK=validateEpost(bilet.epost);
    if( fornavnOK && etternavnOK && telefonOK && epostOK){
        return true;
    }else {return false;}
}
$("#feilMeldingfornavn").text();

function validateFornavn(fornavn) {
    const stringRgl=/^[a-zA-åÅøØæÆ]+$/;
    if(fornavn==="") {
        return;false
    }else if(!stringRgl.test(fornavn)){
        alert("Skriv inn et gyldig fornavn.");
        return false;
    }else {return true}
}
function validateEtternavn(etternavn) {
    const stringRgl=/^[a-zA-åÅøØæÆ]+$/;
    if(etternavn===""){
        return false;
    }else if(!stringRgl.test(etternavn)){
        alert("Skriv inn et gyldig etternavn.");
        return false;
    }else {return true}
}
function validateTelefonNr(telefonNr) {
    const tlfnRgl = /^[0-9]{8}$/;
    if(telefonNr===""){
        return false;
    }else if (!tlfnRgl.test(telefonNr)) {
        alert("Skriv inn et gyldig telefonnummer.");
        return;
    }else {return true;}
}function validateEpost(epost) {
    const emailRgl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (epost===""){
        return false;
    }else if (!emailRgl.test(epost)) {
        alert("Skriv inn et gyldig epost adresse.");
        return false;
    }else {return true}
}