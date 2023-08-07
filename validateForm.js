function validaForm(){
    if (document.form.cognome.value=="") {
        alert("Inserire cognome");
        return false;
    }
    if (document.form.nome.value=="") {
        alert("Inserire nome");
        return false;
    }
    if (document.form.matricola.value=="") {
        alert("Inserire matricola");
        return false;
    }
    let v = parseInt(document.form.matricola.value);
    if (isNaN(v)) {
        alert("La matricola deve essere un numero");
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
    if (document.form.richieste.value==""){
        alert("Inserire una richiesta");
        return false;
    }
    alert("Dati inseriti correttamente. Riceverà un riscontro sul recapito da lei indicato.");
    return true;
}