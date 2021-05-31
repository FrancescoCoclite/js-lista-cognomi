// chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var email = prompt('Inserisci la tua Email');
console.log(email);

var listaMail = ['exemple@email.com', 'exemple@email.it', 'exemple@email.org', 'exemple@email.ul']; 

var user = 'Utente non autorizzato';

for (var i=0; i < listaMail.length; i++){
    if (email == listaMail[i]){
        user = 'utente autorizzato';
    }

}
console.log(user);






// esercizio 2

// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognome = prompt('Inserisci il tuo Cognome')
    