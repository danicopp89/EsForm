let s = null;

function controllaCap(){
    if (document.form.cap.value.length!=5) {
        alert("il CAP deve contenere 5 cifre");
        return false;
    }
    let cap = parseInt(document.form.cap.value);
    if (isNaN(cap)) {
        alert("Il CAP deve essere un numero");
        return false;
    }
    return true;
}

function controllaCognome() {
    let c = parseInt(document.form.cognome.value);
    if (!isNaN(c)) {
        alert("Il cognome non può essere un numero");
        return false;
    }
    return true;
}

function controllaNome(){
    let n = parseInt(document.form.nome.value);
    if (!isNaN(n)) {
        alert("Il nome non può essere un numero")
        return false;
    }
    return true;
}

function controllaMatricola(){
    let v = parseInt(document.form.matricola.value);
    if (isNaN(v)) {
        alert("La matricola deve essere un numero");
        return false;
    }
    return true;
}

function validaForm(){
    if (document.form.cognome.value=="") {
        alert("Inserire cognome");
        return false;
    }
    if (document.form.nome.value=="") {
        alert("Inserire nome");
        return false;
    }
    if (s==null) {
        alert("Selezionare il sesso");
        return false;
    }
    if (document.form.ateneo.value=="nessuno") {
        alert("Selezionare un ateneo");
        return false;
    }
    if (document.form.matricola.value=="") {
        alert("Inserire matricola");
        return false;
    }
    if (document.form.regione.value=="nessuna") {
        alert("Selezionare una regione");
        return false;
    }
    if ((document.form.email.value=="")&&(document.form.tel.value=="")) {
        alert("Inserire o l'email o il numero di telefono");
        return false;
    }
    if ((document.form.lavoratore.checked)&&(document.form.lavoro.value=="")) {
        alert("Hai dichiarato di essere uno studente lavoratore: devi compilare il campo Descrizione lavoro");
        return false;
    }
    if (document.form.richieste.value==""){
        alert("Inserire una richiesta");
        return false;
    }
    alert("Dati inseriti correttamente. Riceverà un riscontro sul recapito da lei indicato.");
    return true;
}